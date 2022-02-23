"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8802],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7388:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={author:"Jia Zhai",authorURL:"https://twitter.com/Jia_Zhai",title:"Apache Pulsar 2.5.2"},l=void 0,c={permalink:"/zh-TW/blog/2020/05/19/Apache-Pulsar-2-5-2",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2020-05-19-Apache-Pulsar-2-5-2.md",source:"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2020-05-19-Apache-Pulsar-2-5-2.md",title:"Apache Pulsar 2.5.2",description:"We are proud to publish Apache Pulsar 2.5.2. This is the result of a huge effort from the community, with over 56 commits, general improvements and bug fixes.",date:"2020-05-19T00:00:00.000Z",formattedDate:"2020\u5e745\u670819\u65e5",tags:[],readingTime:7.115,truncated:!0,authors:[{name:"Jia Zhai",url:"https://twitter.com/Jia_Zhai"}],prevItem:{title:"Apache Pulsar 2.6.0",permalink:"/zh-TW/blog/2020/06/18/Apache-Pulsar-2-6-0"},nextItem:{title:"Apache Pulsar 2.5.1",permalink:"/zh-TW/blog/2020/04/23/Apache-Pulsar-2-5-1"}},d={authorsImageUrls:[void 0]},u=[{value:"Implement AutoTopicCreation by namespace level override",id:"implement-autotopiccreation-by-namespace-level-override",children:[],level:2},{value:"Add customized deletionLag and threshold for offloading policies per namespace",id:"add-customized-deletionlag-and-threshold-for-offloading-policies-per-namespace",children:[],level:2},{value:"Invalidate managed ledgers ZooKeeper cache instead of reloading on watcher triggered",id:"invalidate-managed-ledgers-zookeeper-cache-instead-of-reloading-on-watcher-triggered",children:[],level:2},{value:"Respect retention policy when there is no traffic",id:"respect-retention-policy-when-there-is-no-traffic",children:[],level:2},{value:"Bump Netty version to 4.1.48.Final",id:"bump-netty-version-to-4148final",children:[],level:2},{value:"Increase timeout for loading topics",id:"increase-timeout-for-loading-topics",children:[],level:2},{value:"Fix incorrect cursor state for cursor without consumers",id:"fix-incorrect-cursor-state-for-cursor-without-consumers",children:[],level:2},{value:"Change non-durable cursor to active to improve performance",id:"change-non-durable-cursor-to-active-to-improve-performance",children:[],level:2},{value:"Add keystore configurations to TLS",id:"add-keystore-configurations-to-tls",children:[],level:2},{value:"Close producer when the topic does not exists",id:"close-producer-when-the-topic-does-not-exists",children:[],level:2},{value:"Fix <code>topicPublishRateLimiter</code> not effective after restarting broker",id:"fix-topicpublishratelimiter-not-effective-after-restarting-broker",children:[],level:2},{value:"Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer",id:"expose-pulsar_out_bytes_total-and-pulsar_out_messages_total-for-namespacesubscriptionconsumer",children:[],level:2},{value:"Fix <code>ttlDurationDefaultInSeconds</code> policy",id:"fix-ttldurationdefaultinseconds-policy",children:[],level:2},{value:"Fix long field parse in GenricJsonRecord",id:"fix-long-field-parse-in-genricjsonrecord",children:[],level:2},{value:"Fix the leak of cursor reset if message encode fails in Avro schema",id:"fix-the-leak-of-cursor-reset-if-message-encode-fails-in-avro-schema",children:[],level:2},{value:"Update topic partitions automatically",id:"update-topic-partitions-automatically",children:[],level:2},{value:"Fix default message ID in sent callback",id:"fix-default-message-id-in-sent-callback",children:[],level:2},{value:"Fix message ID error if messages are sent to partitioned topics",id:"fix-message-id-error-if-messages-are-sent-to-partitioned-topics",children:[],level:2},{value:"Support Async mode for Pulsar Functions",id:"support-async-mode-for-pulsar-functions",children:[],level:2},{value:"Fix localrunner netty dependency issue",id:"fix-localrunner-netty-dependency-issue",children:[],level:2},{value:"Fix SerDe validation of Pulsar Functions update",id:"fix-serde-validation-of-pulsar-functions-update",children:[],level:2},{value:"Avoid pre-fetching too much data when offloading data to HDFS",id:"avoid-pre-fetching-too-much-data-when-offloading-data-to-hdfs",children:[],level:2},{value:"JDBC sink handles null fields in schema",id:"jdbc-sink-handles-null-fields-in-schema",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are proud to publish Apache Pulsar 2.5.2. This is the result of a huge effort from the community, with over 56 commits, general improvements and bug fixes."),(0,o.kt)("p",null,"For detailed changes related to 2.5.2 release, refer to the ",(0,o.kt)("b",null,(0,o.kt)("a",{parentName:"p",href:"/release-notes/#2.5.2"},"release notes"))," and the ",(0,o.kt)("b",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pulls?q=is:pr%20label:release/2.5.2%20is:closed"},"PR list for Pulsar 2.5.2")),"."),(0,o.kt)("p",null,"The following highlights some improved features and fixed bugs in this release."),(0,o.kt)("h2",{id:"implement-autotopiccreation-by-namespace-level-override"},"Implement AutoTopicCreation by namespace level override"),(0,o.kt)("p",null,"Introduce a new namespace policy ",(0,o.kt)("inlineCode",{parentName:"p"},"autoTopicCreationOverride"),", which enables an override of broker ",(0,o.kt)("inlineCode",{parentName:"p"},"autoTopicCreation")," settings on the namespace level. You can disable ",(0,o.kt)("inlineCode",{parentName:"p"},"autoTopicCreation")," for the broker while allowing it on a specific namespace."),(0,o.kt)("h2",{id:"add-customized-deletionlag-and-threshold-for-offloading-policies-per-namespace"},"Add customized deletionLag and threshold for offloading policies per namespace"),(0,o.kt)("p",null,"Support configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"deletionLag")," and threshold in the offloading policy on the namespace level to remove data from the offloaded tiered storage."),(0,o.kt)("h2",{id:"invalidate-managed-ledgers-zookeeper-cache-instead-of-reloading-on-watcher-triggered"},"Invalidate managed ledgers ZooKeeper cache instead of reloading on watcher triggered"),(0,o.kt)("p",null,"The ZooKeeper children cache is reloaded for z-nodes when topics are frequently created or deleted. This creates additional load on the ZooKeeper and the broker, slows down brokers and makes them less stable. In this release, ",(0,o.kt)("inlineCode",{parentName:"p"},"ZooKeeperManagedLedgerCache")," is introduced to invalidate instead of reloading the ZooKeeper cache, when topics are created or deleted. This helps reduce pressures on the ZooKeeper."),(0,o.kt)("h2",{id:"respect-retention-policy-when-there-is-no-traffic"},"Respect retention policy when there is no traffic"),(0,o.kt)("p",null,"In previous releases, retention is checked when the ledger rollover happens. So if the traffic is stopped, the ledgers are not cleaned up even if all the messages are already acknowledged. In Pulsar 2.5.2, ",(0,o.kt)("inlineCode",{parentName:"p"},"retentionCheckIntervalInSeconds")," is introduced to check if consumed ledgers need to be trimmed between intervals. If the value is set to 0 or a negative number, the system does not check the consumed ledgers."),(0,o.kt)("h2",{id:"bump-netty-version-to-4148final"},"Bump Netty version to 4.1.48.Final"),(0,o.kt)("p",null,"The ZlibDecoders in Netty 4.1.x (before 4.1.46) allow for unbounded memory allocation while decoding a ZlibEncoded byte stream. An attacker could send a large ZlibEncoded byte stream to the Netty server, forcing the server to allocate all of its free memory to a single decoder. The bug is fixed in Netty ",(0,o.kt)("inlineCode",{parentName:"p"},"4.1.48.Final")," ."),(0,o.kt)("h2",{id:"increase-timeout-for-loading-topics"},"Increase timeout for loading topics"),(0,o.kt)("p",null,"Loading replicated topics is quite an expensive operation and involves global ZooKeeper lookups and the start of many sub-processes. In Pulsar 2.5.2, we increase the timeout for loading topics which have many replicated clusters to 60 seconds."),(0,o.kt)("h2",{id:"fix-incorrect-cursor-state-for-cursor-without-consumers"},"Fix incorrect cursor state for cursor without consumers"),(0,o.kt)("p",null,"If consumers of a subscription are closed, the cursor is set to inactive. But the cursor is set to active during ",(0,o.kt)("inlineCode",{parentName:"p"},"PulsarStats.updateStats()")," when the backlog size is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"backloggedCursorThresholdEntries"),". In Pulsar 2.5.2, we move the ",(0,o.kt)("inlineCode",{parentName:"p"},"checkBackloggedCursors()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"ManagedLedger")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Topic")," and check the consumer list to fix this bug."),(0,o.kt)("h2",{id:"change-non-durable-cursor-to-active-to-improve-performance"},"Change non-durable cursor to active to improve performance"),(0,o.kt)("p",null,"In non-durable subscription mode, the cursor is not active, which leads to the written entries not being put into cache. This would degrade the reading performance. In Pulsar 2.5.2, we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonDurableCursorImpl")," to active and remove three override methods ",(0,o.kt)("inlineCode",{parentName:"p"},"setActive()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isActive()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"setInactive()")," to improve the reading performance."),(0,o.kt)("h2",{id:"add-keystore-configurations-to-tls"},"Add keystore configurations to TLS"),(0,o.kt)("p",null,"In Pulsar 2.5.2, we add keystore configurations to the TLS to allow users to define their own CA certificates while the internal communication uses an internal CA certificate. This change keeps the original TLS settings untouched, and adds new configurations in needed paths."),(0,o.kt)("h2",{id:"close-producer-when-the-topic-does-not-exists"},"Close producer when the topic does not exists"),(0,o.kt)("p",null,"In previous releases, when we create a producer for a non-existent topic, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProducerImpl")," object is hanging in the dump. This leads to OOM in micro-service which by mistake tries to produce consistently to a non-existent topic. In Pulsar 2.5.2, we fix the bug in the following two aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix the exception handle for a non-existent topic."),(0,o.kt)("li",{parentName:"ul"},"Change state to ",(0,o.kt)("inlineCode",{parentName:"li"},"Close")," when the producer gets the ",(0,o.kt)("inlineCode",{parentName:"li"},"TopicDoesNotExists")," exception.")),(0,o.kt)("h2",{id:"fix-topicpublishratelimiter-not-effective-after-restarting-broker"},"Fix ",(0,o.kt)("inlineCode",{parentName:"h2"},"topicPublishRateLimiter")," not effective after restarting broker"),(0,o.kt)("p",null,"In previous releases, when a publishing rate is configured on the namespace, it can limit the publishing rate. But when the broker is restarted, the limit expires. In Pulsar 2.5.2, this bug is fixed."),(0,o.kt)("h2",{id:"expose-pulsar_out_bytes_total-and-pulsar_out_messages_total-for-namespacesubscriptionconsumer"},"Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer"),(0,o.kt)("p",null,"Add pulsar_out_bytes_total and pulsar_out_messages_total for the namespace, subscription, and consumer. This helps to avoid missing the rate to be computed in Prometheus or missing change of rates within the scraping interval."),(0,o.kt)("h2",{id:"fix-ttldurationdefaultinseconds-policy"},"Fix ",(0,o.kt)("inlineCode",{parentName:"h2"},"ttlDurationDefaultInSeconds")," policy"),(0,o.kt)("p",null,"The TTL for namespaces should be retrieved from the broker configuration if it is not configured at namespace policies. In previous releases, the code only returns the value stored in namespace policies directly without judging if the TTL is configured or not. In Pulsar 2.5.2, we add a condition to test if TTL is configured at namespace policies. If not, the broker retrieves value stored in broker configuration and returns it as the output."),(0,o.kt)("h2",{id:"fix-long-field-parse-in-genricjsonrecord"},"Fix long field parse in GenricJsonRecord"),(0,o.kt)("p",null,"For messages sent in JSON schema, the long field is decoded as int if its value is smaller than ",(0,o.kt)("inlineCode",{parentName:"p"},"Integer.MAX_VALUE"),". Otherwise, the long field is decoded as a string. Pulsar 2.5.2 introduces a field type check in GenericJsonRecord to fix this bug."),(0,o.kt)("h2",{id:"fix-the-leak-of-cursor-reset-if-message-encode-fails-in-avro-schema"},"Fix the leak of cursor reset if message encode fails in Avro schema"),(0,o.kt)("p",null,"If the Avro encode for a message fails after a few bytes are written, the cursor in the stream is not reset. The following ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()"),", which normally resets the cursor, is skipped if there is an exception. In Pulsar 2.5.2, we introduced a ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()")," in the finally block to fix this bug."),(0,o.kt)("h2",{id:"update-topic-partitions-automatically"},"Update topic partitions automatically"),(0,o.kt)("p",null,"In Pulsar 2.5.2, the C++ client supports previously-created producers and consumers to automatically update partitions when the partitions for a topic are updated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"boost::asio::deadline_timer")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"PartitionedConsumerImpl")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"PartitionedProducerImpl")," to register a lookup task to detect partition changes periodically."),(0,o.kt)("li",{parentName:"ul"},"Add an unsigned int configuration parameter to indicate the period of detecting partition changes."),(0,o.kt)("li",{parentName:"ul"},"Unlock the ",(0,o.kt)("inlineCode",{parentName:"li"},"mutex_")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"PartitionedConsumerImpl::receive")," after ",(0,o.kt)("inlineCode",{parentName:"li"},"state_")," were checked.")),(0,o.kt)("h2",{id:"fix-default-message-id-in-sent-callback"},"Fix default message ID in sent callback"),(0,o.kt)("p",null,"In previous releases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageId")," in the callback is always the default value (",(0,o.kt)("inlineCode",{parentName:"p"},"-1, -1, -1, -1"),"). In Pulsar 2.5.2, we remove the useless field ",(0,o.kt)("inlineCode",{parentName:"p"},"messageId")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchMessageContainer::MessageContainer")," and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"const MessageId&")," argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"batchMessageCallBack"),". Therefore, we can get the correct message ID in the callback if the message is sent successfully."),(0,o.kt)("h2",{id:"fix-message-id-error-if-messages-are-sent-to-partitioned-topics"},"Fix message ID error if messages are sent to partitioned topics"),(0,o.kt)("p",null,"If messages are sent to a partitioned topic, the ",(0,o.kt)("inlineCode",{parentName:"p"},"partition")," field of the message ID is always set to -1 because the ",(0,o.kt)("inlineCode",{parentName:"p"},"SendReceipt")," command only contains the ledger ID and the entry ID. In Pulsar 2.5.2, we fix this bug by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"partition")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"ProducerImpl")," and setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"partition")," field of the message ID with it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ackReceived")," method."),(0,o.kt)("h2",{id:"support-async-mode-for-pulsar-functions"},"Support Async mode for Pulsar Functions"),(0,o.kt)("p",null,"In previous releases, Pulsar Functions does not support the Async mode, such as the user passed in a Function in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nFunction<I, CompletableFuture<O>>\n\n")),(0,o.kt)("p",null,"This kind of function is useful if the Pulsar Functions use RPCs to call external systems. Therefore, in Pulsar 2.5.2, we introduce Async mode support for Pulsar Functions."),(0,o.kt)("h2",{id:"fix-localrunner-netty-dependency-issue"},"Fix localrunner netty dependency issue"),(0,o.kt)("p",null,"In Pulsar 2.5.2, we add a Log4j2 configuration file for pulsar-functions-local-runner to log to console by default. This helps troubleshoot the problem that Netty libraries are missing and the class is not found, when pulling in pulsar-functions-local-runner as a dependency and attempting to run Pulsar Functions locally."),(0,o.kt)("h2",{id:"fix-serde-validation-of-pulsar-functions-update"},"Fix SerDe validation of Pulsar Functions update"),(0,o.kt)("p",null,"In previous releases, the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputSchemaType")," field is improperly used to validate parameters for Pulsar Function updates. In fact, the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputSerdeClassName")," parameter should be used. In Pulsar 2.5.2, we fix this bug."),(0,o.kt)("h2",{id:"avoid-pre-fetching-too-much-data-when-offloading-data-to-hdfs"},"Avoid pre-fetching too much data when offloading data to HDFS"),(0,o.kt)("p",null,"If too much data is pre-fetched when data is offloaded to HDFS, it may cause severe OOM. In Pulsar 2.5.2, the ",(0,o.kt)("inlineCode",{parentName:"p"},"managedLedgerOffloadPrefetchRounds")," is introduced, which is used to set the maximum pre-fetch rounds for ledger reading for offloading data."),(0,o.kt)("h2",{id:"jdbc-sink-handles-null-fields-in-schema"},"JDBC sink handles null fields in schema"),(0,o.kt)("p",null,"JDBC sink does not handle ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," fields. The schema registered in Pulsar allows for it and the table schema in MySQL has a column of the same name. When messages are sent to the JDBC sink without that field, an exception is thrown. In Pulsar 2.5.2, the JDBC sink uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"setColumnNull")," method to properly reflect the null field value in the database row."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"To download Apache Pulsar 2.5.2, click ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/download/"},"here"),"."),(0,o.kt)("p",null,"If you have any questions or suggestions, contact us with mailing lists or slack."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,o.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,o.kt)("li",{parentName:"ul"},"Self-registration at ",(0,o.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/"))),(0,o.kt)("p",null,"Looking forward to your contributions to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar"),"."))}h.isMDXComponent=!0}}]);