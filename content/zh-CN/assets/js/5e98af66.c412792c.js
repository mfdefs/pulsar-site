"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8939],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},91651:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={author:"Sijie Guo",authorURL:"https://twitter.com/sijieg",title:"Apache Pulsar 2.1.0-incubating"},l=void 0,c={permalink:"/zh-CN/blog/2018/08/06/Apache-Pulsar-2-1-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2018-08-06-Apache-Pulsar-2-1-0.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2018-08-06-Apache-Pulsar-2-1-0.md",title:"Apache Pulsar 2.1.0-incubating",description:"We are glad to present the new 2.1.0-incubating release of Pulsar. This release is the culmination of 2 months of work that have brought multiple new features and improvements to Pulsar.",date:"2018-08-06T00:00:00.000Z",formattedDate:"2018\u5e748\u67086\u65e5",tags:[],readingTime:3.36,truncated:!0,authors:[{name:"Sijie Guo",url:"https://twitter.com/sijieg"}],prevItem:{title:"Apache Pulsar 2.3.0",permalink:"/zh-CN/blog/2019/02/20/Apache-Pulsar-2-3-0"}},u={authorsImageUrls:[void 0]},p=[{value:"Pulsar IO",id:"pulsar-io",children:[],level:2},{value:"Tiered Storage",id:"tiered-storage",children:[],level:2},{value:"Stateful Function",id:"stateful-function",children:[],level:2},{value:"Schemas",id:"schemas",children:[],level:2},{value:"Clients",id:"clients",children:[],level:2}],h={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are glad to present the new 2.1.0-incubating release of Pulsar. This release is the culmination of 2 months of work that have brought multiple new features and improvements to Pulsar."),(0,o.kt)("p",null,"In Pulsar 2.1 you'll see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-overview"},"Pulsar IO")," connector framework and a list of ",(0,o.kt)("a",{parentName:"li",href:"/docs/io-connectors"},"builtin connectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"PIP-17"),": ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts-tiered-storage"},"Tiered Storage")),(0,o.kt)("li",{parentName:"ul"},"Pulsar ",(0,o.kt)("a",{parentName:"li",href:"/docs/functions-state"},"Stateful Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/client-libraries-go"},"Go Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/blob/v2.1.0-incubating/pulsar-client-schema/src/main/java/org/apache/pulsar/client/impl/schema/AvroSchema.java"},"Avro")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/blob/v2.1.0-incubating/pulsar-client-schema/src/main/java/org/apache/pulsar/client/impl/schema/ProtobufSchema.java"},"Protobuf")," Schemas")),(0,o.kt)("p",null,"For details information please check the detailed ",(0,o.kt)("a",{parentName:"p",href:"/release-notes/#2.1.0-incubating"},"release notes")," and ",(0,o.kt)("a",{parentName:"p",href:"/versions"},"2.1.0 documentation"),"."),(0,o.kt)("p",null,"We'll provide a brief summary of these features in the section below."),(0,o.kt)("h2",{id:"pulsar-io"},"Pulsar IO"),(0,o.kt)("p",null,"Since Pulsar 2.0, we introduced a serverless inspired lightweight computing framework ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions-overview"},"Pulsar Functions"),", providing the easiest possible way to implement application-specific in-stream processing logic of any complexity. A lot of developers love Pulsar Functions because they require minimal boilerplate and are easy to reason about."),(0,o.kt)("p",null,'In Pulsar 2.1, we continued following this "simplicity first" principle on developing Pulsar. We developed this IO (input/output) connector framework on top of Pulsar Functions, to simplify getting data in and out of Apache Pulsar. You don\'t need to write any single line of code. All you need is prepare a configuration file of the system your want to connect to, and use Pulsar admin CLI to submit a connector to Pulsar. Pulsar will take care of all the other stuffs, such as fault-tolerance, rebalancing and etc.'),(0,o.kt)("p",null,"There are 6 built-in connectors released in 2.1 release. They are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-aerospike/"},"Aerospike Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-cassandra/"},"Cassandra Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-kafka/"},"Kafka Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-kinesis/"},"Kinesis Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-rabbitmq/"},"RabbitMQ Connector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-twitter/"},"Twitter Firehose Connector"))),(0,o.kt)("p",null,"You can follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/io-quickstart"},"the tutorial")," to try out Pulsar IO on connecting Pulsar with ",(0,o.kt)("a",{parentName:"p",href:"http://cassandra.apache.org/"},"Apache Cassandra"),"."),(0,o.kt)("p",null,"More connectors will be coming in future releases. If you are interested in contributing a connector to Pulsar, checkout the guide on ",(0,o.kt)("a",{parentName:"p",href:"/docs/io-develop"},"Developing Connectors"),". It is as simple as writing a Pulsar function."),(0,o.kt)("h2",{id:"tiered-storage"},"Tiered Storage"),(0,o.kt)("p",null,"One of the advantages of Apache Pulsar is ",(0,o.kt)("a",{parentName:"p",href:"https://streaml.io/blog/pulsar-segment-based-architecture"},"its segment storage")," using ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". You can store a topic backlog as large as you want. When the cluster starts to run out of space, you just add another storage node, and the system will automatically pickup the new storage nodes and start using them without rebalancing partitions. However, this can start to get expensive after a while."),(0,o.kt)("p",null,"Pulsar mitigates this cost/size trade-off by providing Tiered Storage. Tiered Storage turns your Pulsar topics into real ",(0,o.kt)("em",{parentName:"p"},"infinite")," streams, by offloading older segments into a long term storage, such as AWS S3, GCS and HDFS, which is designed for storing cold data. To the end user, there is no perceivable difference between consuming streams whose data is stored in BookKeeper or in long term storage. All the underlying offloading mechanisms and metadata management are transparent to applications."),(0,o.kt)("p",null,"Currently ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"S3")," is supported in 2.1. More offloaders (such as Google GCS, Azure Blobstore, and HDFS) are coming in future releases."),(0,o.kt)("p",null,"If you are interested in this feature, you can checkout more details ",(0,o.kt)("a",{parentName:"p",href:"/docs/cookbooks-tiered-storage"},"here"),"."),(0,o.kt)("h2",{id:"stateful-function"},"Stateful Function"),(0,o.kt)("p",null,"The greatest challenge that stream processing engines face is managing ",(0,o.kt)("em",{parentName:"p"},"state"),". So does Pulsar Functions. As the goal for Pulsar Functions is to simplify developing stream native processing logic, we also want to provide an easier way for Pulsar Functions to manage their state. We introduced a set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions-state/#api"},"State API")," for Pulsar Functions to store their state. It integrates with the table service in Apache BookKeeper for storing the state."),(0,o.kt)("p",null,"It is released as a developer preview feature in Pulsar Functions Java SDK. We would like to collect feedback to improve it in future releases."),(0,o.kt)("h2",{id:"schemas"},"Schemas"),(0,o.kt)("p",null,"Pulsar 2.0 introduces native support for schemas in Pulsar. It means you can declare how message data looks and have Pulsar enforce that producers can only publish valid data on the topics. In 2.0, Pulsar only supports ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," schemas. We introduced the support for ",(0,o.kt)("a",{parentName:"p",href:"https://avro.apache.org/"},"Avro")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"Protobuf")," in this release."),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("p",null,"We have introduced a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/client-libraries-go"},"Go")," client in 2.1 release. The Pulsar Go client library is based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/client-libraries-cpp/"},"C++")," client library."),(0,o.kt)("p",null,"Follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/client-libraries-go/#installing-go-package"},"the instructions")," to try it out in your Go applications!"))}m.isMDXComponent=!0}}]);