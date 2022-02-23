"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2029],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92497:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"txn-why",title:"Why transactions?",sidebar_label:"Why transactions?"},c=void 0,l={unversionedId:"txn-why",id:"txn-why",title:"Why transactions?",description:"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/txn-why.md",sourceDirName:".",slug:"/txn-why",permalink:"/ko/docs/next/txn-why",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/txn-why.md",tags:[],version:"current",frontMatter:{id:"txn-why",title:"Why transactions?",sidebar_label:"Why transactions?"},sidebar:"docsSidebar",previous:{title:"Aliyun OSS offloader",permalink:"/ko/docs/next/tiered-storage-aliyun"},next:{title:"What are transactions?",permalink:"/ko/docs/next/txn-what"}},p=[{value:"Demand of stream processing",id:"demand-of-stream-processing",children:[],level:2},{value:"Limitation of idempotent producer",id:"limitation-of-idempotent-producer",children:[],level:2}],u={toc:p};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below."),(0,s.kt)("h2",{id:"demand-of-stream-processing"},"Demand of stream processing"),(0,s.kt)("p",null,"The demand for stream processing applications with stronger processing guarantees has grown along with the rise of stream processing. For example, in the financial industry, financial institutions use stream processing engines to process debits and credits for users. This type of use case requires that every message is processed exactly once, without exception."),(0,s.kt)("p",null,"In other words, if a stream processing application consumes message A and produces the result as a message B (B = f(A)), then exactly-once processing guarantee means that A can only be marked as consumed if and only if B is successfully produced, and vice versa."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(95487).Z})),(0,s.kt)("p",null,"The Pulsar transactions API strengthens the message delivery semantics and the processing guarantees for stream processing. It enables stream processing applications to consume, process, and produce messages in one atomic operation. That means, a batch of messages in a transaction can be received from, produced to and acknowledged by many topic partitions. All the operations involved in a transaction succeed or fail as one single until."),(0,s.kt)("h2",{id:"limitation-of-idempotent-producer"},"Limitation of idempotent producer"),(0,s.kt)("p",null,"Avoiding data loss or duplication can be achieved by using the Pulsar idempotent producer, but it does not provide guarantees for writes across multiple partitions."),(0,s.kt)("p",null,"In Pulsar, the highest level of message delivery guarantee is using an ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/concepts-messaging/#producer-idempotency"},"idempotent producer")," with the exactly once semantic at one single partition, that is, each message is persisted exactly once without data loss and duplication. However, there are some limitations in this solution:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Due to the monotonic increasing sequence ID, this solution only works on a single partition and within a single producer session (that is, for producing one message), so there is no atomicity when producing multiple messages to one or multiple partitions."),(0,s.kt)("p",{parentName:"li"},"In this case, if there are some failures  (for example, client / broker / bookie crashes, network failure, and more) in the process of producing and receiving messages, messages are re-processed and re-delivered, which may cause data loss or data duplication:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the producer: if the producer retry sending messages, some messages are persisted multiple times; if the producer does not retry sending messages, some messages are persisted once and other messages are lost.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the consumer: since the consumer does not know whether the broker has received messages or not, the consumer may not retry sending acks, which causes it to receive duplicate messages.")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Similarly, for Pulsar Function, it only guarantees exactly once semantics for an idempotent function on a single event rather than processing multiple events or producing multiple results that can happen exactly."),(0,s.kt)("p",{parentName:"li"},"For example, if a function accepts multiple events and produces one result (for example, window function), the function may fail between producing the result and acknowledging the incoming messages, or even between acknowledging individual events, which causes all (or some) incoming messages to be re-delivered and reprocessed, and a new result is generated."),(0,s.kt)("p",{parentName:"li"},"However, many scenarios need atomic guarantees across multiple partitions and sessions.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Consumers need to rely on more mechanisms to acknowledge (ack) messages once."),(0,s.kt)("p",{parentName:"li"},"For example, consumers are required to store the MessgeID along with its acked state. After the topic is unloaded, the subscription can recover the acked state of this MessgeID in memory when the topic is loaded again."))))}d.isMDXComponent=!0},95487:function(e,t,n){t.Z=n.p+"assets/images/txn-1-26fb642d38d5603bf6f7e0c5811d52c7.png"}}]);