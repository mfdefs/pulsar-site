"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3490],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74238:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={author:"Penghui Li",authorURL:"https://twitter.com/lipenghui6",title:"Apache Pulsar 2.7.0"},s=void 0,p={permalink:"/ja/blog/2020/12/24/Apache-Pulsar-2-7-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2020-12-24-Apache-Pulsar-2-7-0.md",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-12-24-Apache-Pulsar-2-7-0.md",title:"Apache Pulsar 2.7.0",description:"We are very glad to see the Apache Pulsar community has successfully released the wonderful 2.7.0 version after accumulated hard work. It is a great milestone for this fast-growing project and the whole Pulsar community. This is the result of a huge effort from the community, with over 450 commits and a long list of new features, improvements, and bug fixes.",date:"2020-12-24T00:00:00.000Z",formattedDate:"2020\u5e7412\u670824\u65e5",tags:[],readingTime:4.185,truncated:!0,authors:[{name:"Penghui Li",url:"https://twitter.com/lipenghui6"}],prevItem:{title:"Apache Pulsar 2.7.2",permalink:"/ja/blog/2021/05/13/Apache-Pulsar-2-7-2"},nextItem:{title:"Apache Pulsar 2.6.2",permalink:"/ja/blog/2020/11/09/Apache-Pulsar-2-6-2"}},u={authorsImageUrls:[void 0]},c=[{value:"Major features",id:"major-features",children:[{value:"Transaction support",id:"transaction-support",children:[],level:3},{value:"Topic level policy",id:"topic-level-policy",children:[],level:3},{value:"Support Azure BlobStore offloader",id:"support-azure-blobstore-offloader",children:[],level:3},{value:"Native protobuf schema support",id:"native-protobuf-schema-support",children:[],level:3},{value:"Resource limitation",id:"resource-limitation",children:[],level:3},{value:"Support e2e encryption for Pulsar Functions",id:"support-e2e-encryption-for-pulsar-functions",children:[],level:3},{value:"Function rebalance",id:"function-rebalance",children:[],level:3}],level:2},{value:"More information",id:"more-information",children:[],level:2}],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are very glad to see the Apache Pulsar community has successfully released the wonderful 2.7.0 version after accumulated hard work. It is a great milestone for this fast-growing project and the whole Pulsar community. This is the result of a huge effort from the community, with over 450 commits and a long list of new features, improvements, and bug fixes."),(0,o.kt)("p",null,"Here is a selection of the most interesting and major features added to Pulsar 2.7.0."),(0,o.kt)("h2",{id:"major-features"},"Major features"),(0,o.kt)("h3",{id:"transaction-support"},"Transaction support"),(0,o.kt)("p",null,"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. With transactions, Pulsar achieves the exactly-once semantics for a single partition and multiple partitions as well. This enables new use cases with Pulsar where a client (either as a producer or consumer) can work with messages across multiple topics and partitions and ensure those messages will all be processed as a single unit. This will strengthen the message delivery semantics of Apache Pulsar and processing guarantees for Pulsar Functions."),(0,o.kt)("p",null,"Currently, Pulsar transactions are in developer preview. The community will work further to enhance the feature to be used in the production environment soon."),(0,o.kt)("p",null,"To enable transactions in Pulsar, you need to configure the parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\ntransactionCoordinatorEnabled=true\n\n")),(0,o.kt)("p",null,"Initialize transaction coordinator metadata, so the transaction coordinators can leverage advantages of the partitioned topic, such as load balance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nbin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n\n")),(0,o.kt)("p",null,"From the client-side, you can also enable the transactions for the Pulsar client."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .enableTransaction(true)\n        .build();\n\n')),(0,o.kt)("p",null,"Here is an example to demonstrate the Pulsar transactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n// Open a transaction\nTransaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n\n//  Publish messages with the transaction\nproducer.newMessage(txn).value("Hello Pulsar Transaction".getBytes()).send();\n\n// Consume and acknowledge messages with the transaction\nMessage<byte[]> message = consumer.receive();\nconsumer.acknowledgeAsync(message.getMessageId(), txn);\n\n// Commit the transaction\ntxn.commit()\n\n')),(0,o.kt)("p",null,"For more details about the Pulsar transactions, refer to ",(0,o.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/transactions/"},"here"),". For more details about the design of Pulsar transactions, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-31%3A-Transaction-Support"},"here"),"."),(0,o.kt)("h3",{id:"topic-level-policy"},"Topic level policy"),(0,o.kt)("p",null,"Pulsar 2.7.0 introduces the system topic which can maintain all policy change events to achieve the topic level policy. All policies at the namespace level are now also available at the topic level, so users can set different policies at the topic level flexibly without using lots of metadata service resources. The topic level policy enables users to manage topics more flexibly and adds no burden to ZooKeeper."),(0,o.kt)("p",null,"To enable topic level policy in Pulsar, you need to configure the parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nsystemTopicEnabled=true\ntopicLevelPoliciesEnabled=true\n\n")),(0,o.kt)("p",null,"After topic level policy is enabled, you can use Pulsar Admin to update the policy of a topic. Here is an example for setting the data retention for a specific topic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nbin/pulsar-admin topics set-retention -s 10G -t 7d persistent://public/default/my-topic\n\n")),(0,o.kt)("p",null,"For more details about the system topic and topic level policy, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-39%3A-Namespace-Change-Events"},"here")),(0,o.kt)("h3",{id:"support-azure-blobstore-offloader"},"Support Azure BlobStore offloader"),(0,o.kt)("p",null,"In Pulsar 2.7.0, we add support for Azure BlobStore offloader, which allows users to offload topic data into Azure BlobStore. You can configure the Azure BlobStore offloader driver in the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nmanagedLedgerOffloadDriver=azureblob\n\n")),(0,o.kt)("p",null,"For more details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8436"},"here"),"."),(0,o.kt)("h3",{id:"native-protobuf-schema-support"},"Native protobuf schema support"),(0,o.kt)("p",null,"Pulsar 2.7.0 introduces a native protobuf schema support, which can provide more ability for protobuf users who want to integrate with Pulsar. Here is an example to show how to use native protobuf schema in Java client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<PBMessage> consumer = client.newConsumer(Schema.PROTOBUFNATIVE(PBMessage.class))\n.topic(topic)\n.subscriptionName("my-subscription-name")\n.subscribe();\n\n')),(0,o.kt)("p",null,"For more details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8372"},"here"),"."),(0,o.kt)("h3",{id:"resource-limitation"},"Resource limitation"),(0,o.kt)("p",null,"In Pulsar, tenant, namespace, and topic are the core resources of a cluster. Pulsar 2.7.0 enables you to limit the maximum tenants of a cluster, the maximum namespaces per tenant, the maximum topics per namespace, and the maximum subscriptions per topic."),(0,o.kt)("p",null,"You can configure the resource limitations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nmaxTenants=0\nmaxNamespacesPerTenant=0\nmaxTopicsPerNamespace=0\nmaxSubscriptionsPerTopic=0\n\n")),(0,o.kt)("p",null,"This provides Pulsar administrators with great convenience in resource management."),(0,o.kt)("h3",{id:"support-e2e-encryption-for-pulsar-functions"},"Support e2e encryption for Pulsar Functions"),(0,o.kt)("p",null,"Pulsar 2.7.0 enables you to add End-to-End (e2e) encryption for Pulsar Functions. You can use the public and private key pair that the application configured to perform encryption. Only consumers with a valid key can decrypt encrypted messages."),(0,o.kt)("p",null,"To enable End-to-End encryption on Functions Worker, you can set it by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"--producer-config")," in the command line terminal. For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/security-encryption/"},"Pulsar Encryption"),"."),(0,o.kt)("p",null,"For more details, you can see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8432"},"here")),(0,o.kt)("h3",{id:"function-rebalance"},"Function rebalance"),(0,o.kt)("p",null,"Before 2.7.0, there was no mechanism for rebalancing functions scheduler on workers. The workload for functions m become skewed. Pulsar 2.7.0 supports manual trigger functions rebalance and automatic periodic functions rebalance."),(0,o.kt)("p",null,"For more details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7388"},"https://github.com/apache/pulsar/pull/7388"),"  and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7449"},"https://github.com/apache/pulsar/pull/7449"),"."),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To download Apache Pulsar 2.7.0, click ",(0,o.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/en/download/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"For more information about Apache Pulsar 2.7.0, see ",(0,o.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/release-notes/#2.7.0"},"2.7.0 release notes")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pulls?q=milestone%3A2.7.0+-label%3Arelease%2F2.6.2+-label%3Arelease%2F2.6.1+"},"2.7.0 PR list"),".")),(0,o.kt)("p",null,"If you have any questions or suggestions, contact us with mailing lists or slack."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,o.kt)("li",{parentName:"ul"},"Self-registration at ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/"))),(0,o.kt)("p",null,"Looking forward to your contributions to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Apache Pulsar"),"."))}h.isMDXComponent=!0}}]);