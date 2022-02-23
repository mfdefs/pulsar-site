"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3238],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(r),m=n,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98305:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],p={id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata"},c=void 0,i={unversionedId:"cookbooks-bookkeepermetadata",id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata",description:"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger. Such metadata are stored on ZooKeeper and they are readable using BookKeeper APIs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbooks-bookkeepermetadata.md",sourceDirName:".",slug:"/cookbooks-bookkeepermetadata",permalink:"/fr/docs/next/cookbooks-bookkeepermetadata",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/cookbooks-bookkeepermetadata.md",tags:[],version:"current",frontMatter:{id:"cookbooks-bookkeepermetadata",title:"BookKeeper Ledger Metadata"},sidebar:"docsSidebar",previous:{title:"Message queue",permalink:"/fr/docs/next/cookbooks-message-queue"},next:{title:"Simulation tools",permalink:"/fr/docs/next/develop-tools"}},u=[],d={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar stores data on BookKeeper ledgers, you can understand the contents of a ledger by inspecting the metadata attached to the ledger. Such metadata are stored on ZooKeeper and they are readable using BookKeeper APIs."),(0,o.kt)("p",null,"Description of current metadata:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scope"),(0,o.kt)("th",{parentName:"tr",align:null},"Metadata name"),(0,o.kt)("th",{parentName:"tr",align:null},"Metadata value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"application"),(0,o.kt)("td",{parentName:"tr",align:null},"'pulsar'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"component"),(0,o.kt)("td",{parentName:"tr",align:null},"'managed-ledger', 'schema', 'compacted-topic'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Managed ledgers"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/managed-ledger"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the ledger")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cursor"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/cursor"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the cursor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTopic"),(0,o.kt)("td",{parentName:"tr",align:null},"name of the original topic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compacted topic"),(0,o.kt)("td",{parentName:"tr",align:null},"pulsar/compactedTo"),(0,o.kt)("td",{parentName:"tr",align:null},"id of the last compacted message")))))}s.isMDXComponent=!0}}]);