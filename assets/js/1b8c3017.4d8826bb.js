(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[12640],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return o},kt:function(){return k}});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||c;return r?a.createElement(u,l(l({ref:t},o),{},{components:r})):a.createElement(u,l({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<c;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13688:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return o}});var a=r(7560),n=r(98283),c=(r(2784),r(30876)),l={id:"src_common_reducers_alert_service",title:"Module: src/common/reducers/alert/service",sidebar_label:"src/common/reducers/alert/service",custom_edit_url:null},i={unversionedId:"docs-client-core/modules/src_common_reducers_alert_service",id:"docs-client-core/modules/src_common_reducers_alert_service",isDocsHomePage:!1,title:"Module: src/common/reducers/alert/service",description:"Functions",source:"@site/docs/docs-client-core/modules/src_common_reducers_alert_service.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_common_reducers_alert_service",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_common_reducers_alert_service",editUrl:null,version:"current",sidebar_label:"src/common/reducers/alert/service",frontMatter:{id:"src_common_reducers_alert_service",title:"Module: src/common/reducers/alert/service",sidebar_label:"src/common/reducers/alert/service",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/common/reducers/alert/selector",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_common_reducers_alert_selector"},next:{title:"Module: src/common/reducers/app/actions",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_common_reducers_app_actions"}},s=[{value:"Functions",id:"functions",children:[{value:"alertCancel",id:"alertcancel",children:[]},{value:"alertError",id:"alerterror",children:[]},{value:"alertSuccess",id:"alertsuccess",children:[]},{value:"alertWarning",id:"alertwarning",children:[]},{value:"dispatchAlertCancel",id:"dispatchalertcancel",children:[]},{value:"dispatchAlertError",id:"dispatchalerterror",children:[]},{value:"dispatchAlertSuccess",id:"dispatchalertsuccess",children:[]},{value:"dispatchAlertWarning",id:"dispatchalertwarning",children:[]}]}],p={toc:s};function o(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"functions"},"Functions"),(0,c.kt)("h3",{id:"alertcancel"},"alertCancel"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"alertCancel"),"(): ",(0,c.kt)("em",{parentName:"p"},"function")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," (",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,c.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,c.kt)("em",{parentName:"p"},"any")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L23"},"packages/client-core/src/common/reducers/alert/service.ts:23")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"alerterror"},"alertError"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"alertError"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("em",{parentName:"p"},"function")),(0,c.kt)("h4",{id:"parameters"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," (",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,c.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,c.kt)("em",{parentName:"p"},"any")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L18"},"packages/client-core/src/common/reducers/alert/service.ts:18")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"alertsuccess"},"alertSuccess"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"alertSuccess"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("em",{parentName:"p"},"function")),(0,c.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," (",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,c.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,c.kt)("em",{parentName:"p"},"any")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L8"},"packages/client-core/src/common/reducers/alert/service.ts:8")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"alertwarning"},"alertWarning"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"alertWarning"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("em",{parentName:"p"},"function")),(0,c.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," (",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,c.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,c.kt)("em",{parentName:"p"},"any")),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L13"},"packages/client-core/src/common/reducers/alert/service.ts:13")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"dispatchalertcancel"},"dispatchAlertCancel"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"dispatchAlertCancel"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": Dispatch): ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"dispatch")),(0,c.kt)("td",{parentName:"tr",align:"left"},"Dispatch")))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L54"},"packages/client-core/src/common/reducers/alert/service.ts:54")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"dispatchalerterror"},"dispatchAlertError"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"dispatchAlertError"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": Dispatch, ",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"dispatch")),(0,c.kt)("td",{parentName:"tr",align:"left"},"Dispatch")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L50"},"packages/client-core/src/common/reducers/alert/service.ts:50")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"dispatchalertsuccess"},"dispatchAlertSuccess"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"dispatchAlertSuccess"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": Dispatch, ",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"dispatch")),(0,c.kt)("td",{parentName:"tr",align:"left"},"Dispatch")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L42"},"packages/client-core/src/common/reducers/alert/service.ts:42")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"dispatchalertwarning"},"dispatchAlertWarning"),(0,c.kt)("p",null,"\u25b8 ",(0,c.kt)("strong",{parentName:"p"},"dispatchAlertWarning"),"(",(0,c.kt)("inlineCode",{parentName:"p"},"dispatch"),": Dispatch, ",(0,c.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,c.kt)("em",{parentName:"p"},"string"),"): ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,c.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"dispatch")),(0,c.kt)("td",{parentName:"tr",align:"left"},"Dispatch")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("inlineCode",{parentName:"td"},"message")),(0,c.kt)("td",{parentName:"tr",align:"left"},(0,c.kt)("em",{parentName:"td"},"string"))))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Returns:")," ",(0,c.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/interfaces/src_common_reducers_alert_actions.alertaction"},(0,c.kt)("em",{parentName:"a"},"AlertAction"))),(0,c.kt)("p",null,"Defined in: ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/common/reducers/alert/service.ts#L46"},"packages/client-core/src/common/reducers/alert/service.ts:46")))}o.isMDXComponent=!0}}]);