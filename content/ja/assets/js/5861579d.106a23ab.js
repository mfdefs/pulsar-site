"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[137],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42787:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging"},p=void 0,l={unversionedId:"cookbooks-non-persistent",id:"cookbooks-non-persistent",title:"Non-persistent messaging",description:"Non-persistent topics are Pulsar topics in which message data is never persistently stored and kept only in memory. This cookbook provides:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cookbooks-non-persistent.md",sourceDirName:".",slug:"/cookbooks-non-persistent",permalink:"/ja/docs/next/cookbooks-non-persistent",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/cookbooks-non-persistent.md",tags:[],version:"current",frontMatter:{id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging"},sidebar:"docsSidebar",previous:{title:"Message deduplication",permalink:"/ja/docs/next/cookbooks-deduplication"},next:{title:"Message retention and expiry",permalink:"/ja/docs/next/cookbooks-retention-expiry"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Using",id:"using",children:[],level:2},{value:"Enabling",id:"enabling",children:[],level:2},{value:"Managing with cli",id:"managing-with-cli",children:[],level:2},{value:"Using with Pulsar clients",id:"using-with-pulsar-clients",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Non-persistent topics")," are Pulsar topics in which message data is ",(0,a.kt)("em",{parentName:"p"},"never")," ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/concepts-architecture-overview#persistent-storage"},"persistently stored")," and kept only in memory. This cookbook provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A basic ",(0,a.kt)("a",{parentName:"li",href:"#overview"},"conceptual overview")," of non-persistent topics"),(0,a.kt)("li",{parentName:"ul"},"Information about ",(0,a.kt)("a",{parentName:"li",href:"#configuration"},"configurable parameters")," related to non-persistent topics"),(0,a.kt)("li",{parentName:"ul"},"A guide to the ",(0,a.kt)("a",{parentName:"li",href:"#cli"},"CLI interface")," for managing non-persistent topics")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"By default, Pulsar persistently stores ",(0,a.kt)("em",{parentName:"p"},"all")," unacknowledged messages on multiple ",(0,a.kt)("a",{parentName:"p",href:"#persistent-storage"},"BookKeeper")," bookies (storage nodes). Data for messages on persistent topics can thus survive broker restarts and subscriber failover."),(0,a.kt)("p",null,"Pulsar also, however, supports ",(0,a.kt)("strong",{parentName:"p"},"non-persistent topics"),", which are topics on which messages are ",(0,a.kt)("em",{parentName:"p"},"never")," persisted to disk and live only in memory. When using non-persistent delivery, killing a Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-terminology#broker"},"broker")," or disconnecting a subscriber to a topic means that all in-transit messages are lost on that (non-persistent) topic, meaning that clients may see message loss."),(0,a.kt)("p",null,"Non-persistent topics have names of this form (note the ",(0,a.kt)("inlineCode",{parentName:"p"},"non-persistent")," in the name):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"\nnon-persistent://tenant/namespace/topic\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more high-level information about non-persistent topics, see the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/concepts-messaging#non-persistent-topics"},"Concepts and Architecture")," documentation.")),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In order to use non-persistent topics, they must be ",(0,a.kt)("a",{parentName:"p",href:"#enabling"},"enabled")," in your Pulsar broker configuration.")),(0,a.kt)("p",null,"In order to use non-persistent topics, you only need to differentiate them by name when interacting with them. This ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-cli-tools#pulsar-client-produce"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-client produce"))," command, for example, would produce one message on a non-persistent topic in a standalone cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce non-persistent://public/default/example-np-topic \\\n  --num-produce 1 \\\n  --messages "This message will be stored only in memory"\n\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For a more thorough guide to non-persistent topics from an administrative perspective, see the ",(0,a.kt)("a",{parentName:"p",href:"admin-api-topics"},"Non-persistent topics")," guide.")),(0,a.kt)("h2",{id:"enabling"},"Enabling"),(0,a.kt)("p",null,"In order to enable non-persistent topics in a Pulsar broker, the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-configuration#broker-enableNonPersistentTopics"},(0,a.kt)("inlineCode",{parentName:"a"},"enableNonPersistentTopics"))," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". This is the default, and so you won't need to take any action to enable non-persistent messaging."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"configuration-for-standalone-mode"},"Configuration for standalone mode"),(0,a.kt)("p",{parentName:"blockquote"},"If you're running Pulsar in standalone mode, the same configurable parameters are available but in the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-configuration#standalone"},(0,a.kt)("inlineCode",{parentName:"a"},"standalone.conf"))," configuration file.")),(0,a.kt)("p",null,"If you'd like to enable ",(0,a.kt)("em",{parentName:"p"},"only")," non-persistent topics in a broker, you can set the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/reference-configuration#broker-enablePersistentTopics"},(0,a.kt)("inlineCode",{parentName:"a"},"enablePersistentTopics"))," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableNonPersistentTopics")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"managing-with-cli"},"Managing with cli"),(0,a.kt)("p",null,"Non-persistent topics can be managed using the ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/pulsar-admin#non-persistent"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-admin non-persistent"))," command-line interface. With that interface you can perform actions like ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/pulsar-admin#non-persistent-create-partitioned-topic"},"create a partitioned non-persistent topic"),", get ",(0,a.kt)("a",{parentName:"p",href:"/ja/docs/next/pulsar-admin#non-persistent-stats"},"stats")," for a non-persistent topic, ",(0,a.kt)("a",{parentName:"p",href:"reference-pulsar-admin"},"list")," non-persistent topics under a namespace, and more."),(0,a.kt)("h2",{id:"using-with-pulsar-clients"},"Using with Pulsar clients"),(0,a.kt)("p",null,"You shouldn't need to make any changes to your Pulsar clients to use non-persistent messaging beyond making sure that you use proper ",(0,a.kt)("a",{parentName:"p",href:"#using"},"topic names")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"non-persistent")," as the topic type."))}m.isMDXComponent=!0}}]);