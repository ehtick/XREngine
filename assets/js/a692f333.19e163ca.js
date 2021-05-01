(self.webpackChunk_xr3ngine_docs=self.webpackChunk_xr3ngine_docs||[]).push([[57039],{30876:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14358:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return d},default:function(){return l}});var n=r(7560),o=r(98283),a=(r(2784),r(30876)),c={id:"src_world_components_editor_nodes",title:"Module: src/world/components/editor/Nodes",sidebar_label:"src/world/components/editor/Nodes",custom_edit_url:null},i={unversionedId:"docs-client-core/modules/src_world_components_editor_nodes",id:"docs-client-core/modules/src_world_components_editor_nodes",isDocsHomePage:!1,title:"Module: src/world/components/editor/Nodes",description:"Functions",source:"@site/docs/docs-client-core/modules/src_world_components_editor_nodes.md",sourceDirName:"docs-client-core/modules",slug:"/docs-client-core/modules/src_world_components_editor_nodes",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_nodes",editUrl:null,version:"current",sidebar_label:"src/world/components/editor/Nodes",frontMatter:{id:"src_world_components_editor_nodes",title:"Module: src/world/components/editor/Nodes",sidebar_label:"src/world/components/editor/Nodes",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Module: src/world/components/editor/Loading",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_loading"},next:{title:"Module: src/world/components/editor/assets/AssetDropZone",permalink:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/modules/src_world_components_editor_assets_assetdropzone"}},d=[{value:"Functions",id:"functions",children:[{value:"createEditor",id:"createeditor",children:[]}]}],s={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"createeditor"},"createEditor"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"createEditor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"api"),": ",(0,a.kt)("em",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"settings"),": ",(0,a.kt)("em",{parentName:"p"},"any"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Engine"),": ",(0,a.kt)("em",{parentName:"p"},"any"),"): ",(0,a.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/classes/src_world_components_editor_editor.editor"},(0,a.kt)("em",{parentName:"a"},"Editor"))),(0,a.kt)("p",null,"createEditor used to create editor object and register nodes available to create scene."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"author"))," Robert Long"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"api")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"settings")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Engine")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"any"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/xr3ngine/tree/dev/packages/docs/docs/docs-client-core/classes/src_world_components_editor_editor.editor"},(0,a.kt)("em",{parentName:"a"},"Editor"))),(0,a.kt)("p",null,"[editor]"),(0,a.kt)("p",null,"Defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/06b116338/packages/client-core/src/world/components/editor/Nodes.tsx#L59"},"packages/client-core/src/world/components/editor/Nodes.tsx:59")))}l.isMDXComponent=!0}}]);