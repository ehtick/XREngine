import { Dispatch } from 'redux'
import { client } from '../feathers'
import {
  loadedParty,
  createdParty,
  patchedParty,
  removedParty,
  removedPartyUser,
  createdPartyUser,
  patchedPartyUser
} from './actions'
import { dispatchAlertError } from '../alert/service'
import store from './../store'
// import { Party } from '@xr3ngine/common/interfaces/Party'

export function getParty () {
  return async (dispatch: Dispatch, getState: any): Promise<any> => {
    try {
      const partyResult = await client.service('party').get(null)
      console.log('GOT PARTY')
      console.log(partyResult)
      dispatch(loadedParty(partyResult))
    } catch (err) {
      dispatchAlertError(dispatch, err.message)
    }
  }
}

// Temporary Method for arbitrary testing

let socketId: any
export const getParties = async (): Promise<void> => {
  const parties = await client.service('party').find()
  console.log('PARTIES', parties)
  const userId = (store.getState() as any).get('auth').get('user').id
  console.log('USERID: ', userId)
  if (client.io && socketId === undefined) {
    client.io.emit('request-socket-id', ({ id }: { id: number }) => {
      console.log('Socket-ID received: ', id)
      socketId = id
    })
    client.io.on('message-party', (data: any) => {
      console.warn('Message received, data: ', data)
    })
    ;(window as any).joinParty = (userId: number, partyId: number) => {
      client.io.emit('join-party', {
        userId,
        partyId
      }, (res) => {
        console.log('Join response: ', res)
      })
    }
    ;(window as any).messageParty = (userId: number, partyId: number, message: string) => {
      client.io.emit('message-party-request', {
        userId,
        partyId,
        message
      })
    }
    ;(window as any).partyInit = (userId: number) => {
      client.io.emit('party-init', { userId }, (response: any) => {
        response ? console.log('Init success', response) : console.log('Init failed')
      })
    }
  } else {
    console.log('Your socket id is: ', socketId)
  }
}

export function createParty(values: any) {
  return async (dispatch: Dispatch): Promise<any> => {
    console.log('CREATING PARTY')
    try {
      await client.service('party').create({})
    } catch(err) {
      console.log(err)
      dispatchAlertError(dispatch, err.message)
    }
  }
}

export function removeParty(partyId: string) {
  return async (dispatch: Dispatch): Promise<any> => {
    console.log('CALLING FEATHERS REMOVE PARTY')
    try {
      const channelResult = await client.service('channel').find({
        query: {
          partyId: partyId
        }
      })
      if (channelResult.total > 0) {
        await client.service('channel').remove(channelResult.data[0].id)
      }
      await client.service('party').remove(partyId)
    } catch (err) {
      console.log(err)
      dispatchAlertError(dispatch, err.message)
    }
  }
}

export function removePartyUser(partyUserId: string) {
  return async (dispatch: Dispatch): Promise<any> => {
    try {
      await client.service('party-user').remove(partyUserId)
    } catch(err) {
      console.log(err)
      dispatchAlertError(dispatch, err.message)
    }
  }
}

client.service('party-user').on('created', (params) => {
  console.log('PARTY-USER CREATED EVENT')
  console.log(params)
  store.dispatch(createdPartyUser(params.partyUser))
})

client.service('party-user').on('patched', (params) => {
  console.log('PARTY-USER PATCHED EVENT')
  console.log(params)
  store.dispatch(patchedPartyUser(params.partyUser))
})

client.service('party-user').on('removed', (params) => {
  console.log('PARTY-USER REMOVED EVENT')
  console.log(params)
  store.dispatch(removedPartyUser(params.partyUser))
})

client.service('party').on('created', (params) => {
  console.log('PARTY CREATED EVENT')
  console.log(params)
  store.dispatch(createdParty(params.party))
})

client.service('party').on('patched', (params) => {
  console.log('PARTY PATCHED EVENT')
  console.log(params)
  store.dispatch(patchedParty(params.party))
})

client.service('party').on('removed', (params) => {
  console.log('PARTY REMOVED EVENT')
  console.log(params)
  store.dispatch(removedParty(params.party))
})
