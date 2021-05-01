(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[83134],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return a},default:function(){return u}});var r=n(7560),o=n(98283),s=(n(2784),n(30876)),i={id:"src_utils_secondstostring",title:"Module: src/utils/secondsToString",sidebar_label:"src/utils/secondsToString",custom_edit_url:null},c={unversionedId:"docs-common/modules/src_utils_secondstostring",id:"docs-common/modules/src_utils_secondstostring",isDocsHomePage:!1,title:"Module: src/utils/secondsToString",description:"Functions",source:"@site/docs/docs-common/modules/src_utils_secondstostring.md",sourceDirName:"docs-common/modules",slug:"/docs-common/modules/src_utils_secondstostring",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-common/modules/src_utils_secondstostring",editUrl:null,version:"current",sidebar_label:"src/utils/secondsToString",frontMatter:{id:"src_utils_secondstostring",title:"Module: src/utils/secondsToString",sidebar_label:"src/utils/secondsToString",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/utils/isExternalUrl",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-common/modules/src_utils_isexternalurl"},next:{title:"Module: src/utils/triggerNavigation",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-common/modules/src_utils_triggernavigation"}},a=[{value:"Functions",id:"functions",children:[{value:"default",id:"default",children:[]}]}],l={toc:a};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("h3",{id:"default"},"default"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Const"),(0,s.kt)("strong",{parentName:"p"},"default"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"seconds"),": ",(0,s.kt)("em",{parentName:"p"},"number"),"): ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"seconds")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("em",{parentName:"td"},"number"))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns:")," ",(0,s.kt)("em",{parentName:"p"},"string")),(0,s.kt)("p",null,"Defined in: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/common/src/utils/secondsToString.ts#L3"},"utils/secondsToString.ts:3")))}u.isMDXComponent=!0}}]);