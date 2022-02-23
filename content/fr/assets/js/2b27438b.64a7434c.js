"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4625],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11420:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"schema-get-started",title:"Get started",sidebar_label:"Get started",original_id:"schema-get-started"},c=void 0,l={unversionedId:"schema-get-started",id:"version-2.9.1/schema-get-started",title:"Get started",description:"This chapter introduces Pulsar schemas and explains why they are important.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-2.9.1/schema-get-started.md",sourceDirName:".",slug:"/schema-get-started",permalink:"/fr/docs/schema-get-started",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/schema-get-started.md",tags:[],version:"2.9.1",frontMatter:{id:"schema-get-started",title:"Get started",sidebar_label:"Get started",original_id:"schema-get-started"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Multiple advertised listeners",permalink:"/fr/docs/concepts-multiple-advertised-listeners"},next:{title:"Understand schema",permalink:"/fr/docs/schema-understand"}},p=[{value:"Schema Registry",id:"schema-registry",children:[{value:"Note",id:"note",children:[],level:4},{value:"Client-side approach",id:"client-side-approach",children:[],level:3},{value:"Server-side approach",id:"server-side-approach",children:[],level:3}],level:2},{value:"Why use schema",id:"why-use-schema",children:[{value:"Without schema",id:"without-schema",children:[],level:3},{value:"With schema",id:"with-schema",children:[],level:3},{value:"Summary",id:"summary",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This chapter introduces Pulsar schemas and explains why they are important."),(0,s.kt)("h2",{id:"schema-registry"},"Schema Registry"),(0,s.kt)("p",null,"Type safety is extremely important in any application built around a message bus like Pulsar."),(0,s.kt)("p",null,"Producers and consumers need some kind of mechanism for coordinating types at the topic level to avoid various potential problems arise. For example, serialization and deserialization issues."),(0,s.kt)("p",null,"Applications typically adopt one of the following approaches to guarantee type safety in messaging. Both approaches are available in Pulsar, and you're free to adopt one or the other or to mix and match on a per-topic basis."),(0,s.kt)("h4",{id:"note"},"Note"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Currently, the Pulsar schema registry is only available for the ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/client-libraries-java"},"Java client"),", ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/client-libraries-cgo"},"CGo client"),", ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/client-libraries-python"},"Python client"),", and ",(0,s.kt)("a",{parentName:"p",href:"client-libraries-cpp"},"C++ client"),".")),(0,s.kt)("h3",{id:"client-side-approach"},"Client-side approach"),(0,s.kt)("p",null,'Producers and consumers are responsible for not only serializing and deserializing messages (which consist of raw bytes) but also "knowing" which types are being transmitted via which topics.'),(0,s.kt)("p",null,"If a producer is sending temperature sensor data on the topic ",(0,s.kt)("inlineCode",{parentName:"p"},"topic-1"),", consumers of that topic will run into trouble if they attempt to parse that data as moisture sensor readings."),(0,s.kt)("p",null,'Producers and consumers can send and receive messages consisting of raw byte arrays and leave all type safety enforcement to the application on an "out-of-band" basis.'),(0,s.kt)("h3",{id:"server-side-approach"},"Server-side approach"),(0,s.kt)("p",null,"Producers and consumers inform the system which data types can be transmitted via the topic."),(0,s.kt)("p",null,"With this approach, the messaging system enforces type safety and ensures that producers and consumers remain synced."),(0,s.kt)("p",null,"Pulsar has a built-in ",(0,s.kt)("strong",{parentName:"p"},"schema registry")," that enables clients to upload data schemas on a per-topic basis. Those schemas dictate which data types are recognized as valid for that topic."),(0,s.kt)("h2",{id:"why-use-schema"},"Why use schema"),(0,s.kt)("p",null,"When a schema is enabled, Pulsar does parse data, it takes bytes as inputs and sends bytes as outputs. While data has meaning beyond bytes, you need to parse data and might encounter parse exceptions which mainly occur in the following situations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The field does not exist")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The field type has changed (for example, ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," is changed to ",(0,s.kt)("inlineCode",{parentName:"p"},"int"),")"))),(0,s.kt)("p",null,"There are a few methods to prevent and overcome these exceptions, for example, you can catch exceptions when parsing errors, which makes code hard to maintain; or you can adopt a schema management system to perform schema evolution, not to break downstream applications, and enforces type safety to max extend in the language you are using, the solution is Pulsar Schema."),(0,s.kt)("p",null,"Pulsar schema enables you to use language-specific types of data when constructing and handling messages from simple types like ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," to more complex application-specific types."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("em",{parentName:"p"},"User")," class to define the messages sent to Pulsar topics."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\npublic class User {\n    String name;\n    int age;\n}\n\n")),(0,s.kt)("p",null,"When constructing a producer with the ",(0,s.kt)("em",{parentName:"p"},"User")," class, you can specify a schema or not as below."),(0,s.kt)("h3",{id:"without-schema"},"Without schema"),(0,s.kt)("p",null,"If you construct a producer without specifying a schema, then the producer can only produce messages of type ",(0,s.kt)("inlineCode",{parentName:"p"},"byte[]"),". If you have a POJO class, you need to serialize the POJO into bytes before sending messages."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\nProducer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nbyte[] message = \u2026 // serialize the `user` by yourself;\nproducer.send(message);\n\n')),(0,s.kt)("h3",{id:"with-schema"},"With schema"),(0,s.kt)("p",null,"If you construct a producer with specifying a schema, then you can send a class to a topic directly without worrying about how to serialize POJOs into bytes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"This example constructs a producer with the ",(0,s.kt)("em",{parentName:"p"},"JSONSchema"),", and you can send the ",(0,s.kt)("em",{parentName:"p"},"User")," class to topics directly without worrying about how to serialize it into bytes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\nProducer<User> producer = client.newProducer(JSONSchema.of(User.class))\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nproducer.send(user);\n\n')),(0,s.kt)("h3",{id:"summary"},"Summary"),(0,s.kt)("p",null,"When constructing a producer with a schema, you do not need to serialize messages into bytes, instead Pulsar schema does this job in the background."))}d.isMDXComponent=!0}}]);