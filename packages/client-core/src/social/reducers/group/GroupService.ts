import { Config } from '@xrengine/common/src/config'
import { Dispatch } from 'redux'
import { AlertService } from '../../../common/reducers/alert/AlertService'
import { client } from '../../../feathers'
import Store from '../../../store'
import { GroupAction } from './GroupActions'
import { UserAction } from '../../../user/store/UserAction'
import { accessAuthState } from '../../../user/reducers/auth/AuthState'
import { ChatService } from '../chat/ChatService'
const store = Store.store
import waitForClientAuthenticated from '../../../util/wait-for-client-authenticated'
import { accessGroupState } from './GroupState'

export const GroupService = {
  getGroups: (skip?: number, limit?: number) => {
    return async (dispatch: Dispatch, getState: any): Promise<any> => {
      dispatch(GroupAction.fetchingGroups())
      const groupActionState = accessGroupState().value
      try {
        const groupResults = await client.service('group').find({
          query: {
            $limit: limit != null ? limit : groupActionState.groups.limit,
            $skip: skip != null ? skip : groupActionState.groups.skip
          }
        })
        dispatch(GroupAction.loadedGroups(groupResults))
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
      }
    }
  },
  createGroup: (values: any) => {
    return async (dispatch: Dispatch): Promise<any> => {
      try {
        await client.service('group').create({
          name: values.name,
          description: values.description
        })
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
      }
    }
  },
  patchGroup: (values: any) => {
    return async (dispatch: Dispatch): Promise<any> => {
      const patch = {}
      if (values.name != null) {
        ;(patch as any).name = values.name
      }
      if (values.description != null) {
        ;(patch as any).description = values.description
      }
      try {
        await client.service('group').patch(values.id, patch)
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
      }
    }
  },
  removeGroup: (groupId: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
      try {
        const channelResult = (await client.service('channel').find({
          query: {
            groupId: groupId
          }
        })) as any
        if (channelResult.total > 0) {
          await client.service('channel').remove(channelResult.data[0].id)
        }
        await client.service('group').remove(groupId)
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
      }
    }
  },
  removeGroupUser: (groupUserId: string) => {
    return async (dispatch: Dispatch): Promise<any> => {
      try {
        await client.service('group-user').remove(groupUserId)
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
      }
    }
  },
  getInvitableGroups: (skip?: number, limit?: number) => {
    return async (dispatch: Dispatch, getState: any): Promise<any> => {
      dispatch(GroupAction.fetchingInvitableGroups())
      const groupActionState = accessGroupState().value
      try {
        await waitForClientAuthenticated()
        const groupResults = await client.service('group').find({
          query: {
            invitable: true,
            $limit: limit != null ? limit : groupActionState.groups.limit,
            $skip: skip != null ? skip : groupActionState.groups.skip
          }
        })
        dispatch(GroupAction.loadedInvitableGroups(groupResults))
      } catch (err) {
        console.log(err)
        AlertService.dispatchAlertError(dispatch, err.message)
        dispatch(GroupAction.loadedInvitableGroups({ data: [], limit: 0, skip: 0, total: 0 }))
      }
    }
  }
}
if (!Config.publicRuntimeConfig.offlineMode) {
  client.service('group-user').on('created', (params) => {
    const newGroupUser = params.groupUser
    const selfUser = accessAuthState().user
    store.dispatch(GroupAction.createdGroupUser(newGroupUser))
    if (
      newGroupUser.user.channelInstanceId != null &&
      newGroupUser.user.channelInstanceId === selfUser.channelInstanceId.value
    )
      store.dispatch(UserAction.addedChannelLayerUser(newGroupUser.user))
    if (newGroupUser.user.channelInstanceId !== selfUser.channelInstanceId.value)
      store.dispatch(UserAction.removedChannelLayerUser(newGroupUser.user))
  })

  client.service('group-user').on('patched', (params) => {
    const updatedGroupUser = params.groupUser
    const selfUser = accessAuthState().user
    store.dispatch(GroupAction.patchedGroupUser(updatedGroupUser))
    if (
      updatedGroupUser.user.channelInstanceId != null &&
      updatedGroupUser.user.channelInstanceId === selfUser.channelInstanceId.value
    )
      store.dispatch(UserAction.addedChannelLayerUser(updatedGroupUser.user))
    if (updatedGroupUser.user.channelInstanceId !== selfUser.channelInstanceId.value)
      store.dispatch(UserAction.removedChannelLayerUser(updatedGroupUser.user))
  })

  client.service('group-user').on('removed', (params) => {
    const deletedGroupUser = params.groupUser
    const selfUser = accessAuthState().user
    store.dispatch(GroupAction.removedGroupUser(deletedGroupUser, params.self))
    store.dispatch(UserAction.removedChannelLayerUser(deletedGroupUser.user))
    if (deletedGroupUser.userId === selfUser.id.value)
      store.dispatch(ChatService.clearChatTargetIfCurrent('group', { id: params.groupUser.groupId }))
  })

  client.service('group').on('created', (params) => {
    store.dispatch(GroupAction.createdGroup(params.group))
  })

  client.service('group').on('patched', (params) => {
    store.dispatch(GroupAction.patchedGroup(params.group))
  })

  client.service('group').on('removed', (params) => {
    store.dispatch(GroupAction.removedGroup(params.group))
    store.dispatch(ChatService.clearChatTargetIfCurrent('group', params.group))
  })

  client.service('group').on('refresh', (params) => {
    store.dispatch(GroupAction.createdGroup(params.group))
  })
}
