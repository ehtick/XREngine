(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[6590],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var d=2;d<i;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69219:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return o},default:function(){return l}});var n=r(7560),a=r(98283),i=(r(2784),r(30876)),c={id:"src_socialmedia_reducers_feedfires_service",title:"Module: src/socialmedia/reducers/feedFires/service",sidebar_label:"src/socialmedia/reducers/feedFires/service",custom_edit_url:null},s={unversionedId:"docs-client-core/modules/src_socialmedia_reducers_feedfires_service",id:"docs-client-core/modules/src_socialmedia_reducers_feedfires_service",isDocsHomePage:!1,title:"Module: src/socialmedia/reducers/feedFires/service",description:"Functions",source:"@site/docs/docs-client-core/modules/src_socialmedia_reducers_feedfires_service.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_socialmedia_reducers_feedfires_service",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_socialmedia_reducers_feedfires_service",editUrl:null,version:"current",sidebar_label:"src/socialmedia/reducers/feedFires/service",frontMatter:{id:"src_socialmedia_reducers_feedfires_service",title:"Module: src/socialmedia/reducers/feedFires/service",sidebar_label:"src/socialmedia/reducers/feedFires/service",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/socialmedia/reducers/feedFires/selector",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_socialmedia_reducers_feedfires_selector"},next:{title:"Module: src/socialmedia/reducers/popupsState/actions",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_socialmedia_reducers_popupsstate_actions"}},o=[{value:"Functions",id:"functions",children:[{value:"addFireToFeed",id:"addfiretofeed",children:[]},{value:"getFeedFires",id:"getfeedfires",children:[]},{value:"removeFireToFeed",id:"removefiretofeed",children:[]}]}],d={toc:o};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"addfiretofeed"},"addFireToFeed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addFireToFeed"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"feedId"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feedId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/socialmedia/reducers/feedFires/service.ts#L29"},"packages/client-core/src/socialmedia/reducers/feedFires/service.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getfeedfires"},"getFeedFires"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getFeedFires"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"feedId"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feedId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"getState"),": ",(0,i.kt)("em",{parentName:"p"},"any"),") => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/socialmedia/reducers/feedFires/service.ts#L15"},"packages/client-core/src/socialmedia/reducers/feedFires/service.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removefiretofeed"},"removeFireToFeed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"removeFireToFeed"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"feedId"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"function")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"feedId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," (",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch"),": ",(0,i.kt)("em",{parentName:"p"},"Dispatch"),"<AnyAction",">",") => ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/socialmedia/reducers/feedFires/service.ts#L41"},"packages/client-core/src/socialmedia/reducers/feedFires/service.ts:41")))}l.isMDXComponent=!0}}]);