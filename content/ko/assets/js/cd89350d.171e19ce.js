"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5940],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50795:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={author:"Xiaolong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.6.2"},s=void 0,p={permalink:"/ko/blog/2020/11/09/Apache-Pulsar-2-6-2",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2020-11-09-Apache-Pulsar-2-6-2.md",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2020-11-09-Apache-Pulsar-2-6-2.md",title:"Apache Pulsar 2.6.2",description:"We are excited to see that the Apache Pulsar community has successfully released the 2.6.2 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.2 is the result of a big effort from the community, with over 154 commits and a long list of improvements and bug fixes.",date:"2020-11-09T00:00:00.000Z",formattedDate:"2020\ub144 11\uc6d4 9\uc77c",tags:[],readingTime:10.915,truncated:!0,authors:[{name:"Xiaolong Ran",url:"https://twitter.com/wolf4j1"}],prevItem:{title:"Apache Pulsar 2.7.0",permalink:"/ko/blog/2020/12/24/Apache-Pulsar-2-7-0"},nextItem:{title:"Pulsar Summit Asia 2020 Schedule is Now Online",permalink:"/ko/blog/2020/11/04/pulsar-summit-asia-schedule"}},u={authorsImageUrls:[void 0]},c=[{value:"Broker",id:"broker",children:[{value:"Catch <code>throwable</code> when starting Pulsar",id:"catch-throwable-when-starting-pulsar",children:[],level:3},{value:"Handle SubscriptionBusyException in resetCursor API",id:"handle-subscriptionbusyexception-in-resetcursor-api",children:[],level:3},{value:"Update Jersey to 2.31",id:"update-jersey-to-231",children:[],level:3},{value:"Stop to dispatch when consumers using the Key_Shared subscription stuck",id:"stop-to-dispatch-when-consumers-using-the-key_shared-subscription-stuck",children:[],level:3},{value:"Reestablish namespace bundle ownership from false negative releasing and false positive acquiring",id:"reestablish-namespace-bundle-ownership-from-false-negative-releasing-and-false-positive-acquiring",children:[],level:3},{value:"Enable users to configure the executor pool size",id:"enable-users-to-configure-the-executor-pool-size",children:[],level:3},{value:"Add replicated check for <code>checkInactiveSubscriptions</code>",id:"add-replicated-check-for-checkinactivesubscriptions",children:[],level:3},{value:"Upgrade jetty-util version to 9.4.31",id:"upgrade-jetty-util-version-to-9431",children:[],level:3},{value:"Add command to delete a cluster&#39;s metadata from ZooKeeper",id:"add-command-to-delete-a-clusters-metadata-from-zookeeper",children:[],level:3},{value:"Replace EventLoop with ThreadPoolExecutor to improve performance instead of EventLoop",id:"replace-eventloop-with-threadpoolexecutor-to-improve-performance-instead-of-eventloop",children:[],level:3},{value:"Fix deadlock that occurred during topic ownership check",id:"fix-deadlock-that-occurred-during-topic-ownership-check",children:[],level:3}],level:2},{value:"Proxy",id:"proxy",children:[{value:"Enable users to configure <code>advertisedAddress</code> in proxy",id:"enable-users-to-configure-advertisedaddress-in-proxy",children:[],level:3},{value:"Add proxy plugin interface to support user defined additional servlet",id:"add-proxy-plugin-interface-to-support-user-defined-additional-servlet",children:[],level:3},{value:"Fix the null exception when starting the proxy service",id:"fix-the-null-exception-when-starting-the-proxy-service",children:[],level:3}],level:2},{value:"Java Client",id:"java-client",children:[{value:"Support input-stream for trustStore cert",id:"support-input-stream-for-truststore-cert",children:[],level:3},{value:"Avoid subscribing the same topic",id:"avoid-subscribing-the-same-topic",children:[],level:3}],level:2},{value:"CPP Client",id:"cpp-client",children:[{value:"Wait for all seek operations complete",id:"wait-for-all-seek-operations-complete",children:[],level:3},{value:"Make <code>clear()</code> thread-safe",id:"make-clear-thread-safe",children:[],level:3},{value:"Add Snappy library to Docker images for building C++ packages",id:"add-snappy-library-to-docker-images-for-building-c-packages",children:[],level:3},{value:"Support key based batching",id:"support-key-based-batching",children:[],level:3}],level:2},{value:"Functions",id:"functions",children:[{value:"Enable Kubernetes runtime to customize function instance class path",id:"enable-kubernetes-runtime-to-customize-function-instance-class-path",children:[],level:3},{value:"Set <code>dryrun</code> of Kubernetes Runtime to null",id:"set-dryrun-of-kubernetes-runtime-to-null",children:[],level:3}],level:2},{value:"Pulsar SQL",id:"pulsar-sql",children:[{value:"Upgrade Presto version to 332",id:"upgrade-presto-version-to-332",children:[],level:3}],level:2},{value:"pulsar-admin",id:"pulsar-admin",children:[{value:"Add CLI command to get the last message ID",id:"add-cli-command-to-get-the-last-message-id",children:[],level:3},{value:"Support deleting schema ledgers when deleting topics",id:"support-deleting-schema-ledgers-when-deleting-topics",children:[],level:3},{value:"Support deleting all data associated with a cluster",id:"support-deleting-all-data-associated-with-a-cluster",children:[],level:3}],level:2},{value:"Pulsar Perf",id:"pulsar-perf",children:[{value:"Enable users to configure ioThread number in pulsar-perf",id:"enable-users-to-configure-iothread-number-in-pulsar-perf",children:[],level:3}],level:2},{value:"More information",id:"more-information",children:[],level:2}],d={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are excited to see that the Apache Pulsar community has successfully released the 2.6.2 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.2 is the result of a big effort from the community, with over 154 commits and a long list of improvements and bug fixes."),(0,i.kt)("p",null,"Here are some highlights and major features added in Pulsar 2.6.2."),(0,i.kt)("h2",{id:"broker"},"Broker"),(0,i.kt)("h3",{id:"catch-throwable-when-starting-pulsar"},"Catch ",(0,i.kt)("inlineCode",{parentName:"h3"},"throwable")," when starting Pulsar"),(0,i.kt)("p",null,"Before 2.6.2, Pulsar catched exceptions only when ",(0,i.kt)("inlineCode",{parentName:"p"},"BrokerStarter.start()")," failed. Some errors such as ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchMethodError")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"NoClassDefFoundError")," could not be caught, and Pulsar was in abnormal status yet no error log was found in the log file."),(0,i.kt)("p",null,"In 2.6.2, we modify exceptions to use ",(0,i.kt)("inlineCode",{parentName:"p"},"throwable")," to avoid this issue."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7221"},"PR-7221"),"."),(0,i.kt)("h3",{id:"handle-subscriptionbusyexception-in-resetcursor-api"},"Handle SubscriptionBusyException in resetCursor API"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentSubscription.resetCursor")," method, ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionFencedException")," is thrown in several places, but it is not handled in ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentTopicBase"),", so error messages are not clear."),(0,i.kt)("p",null,"In 2.6.2, we export ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionBusyException")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentTopicBase")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"resetCursor"),", so error messages in the REST API are clear."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7335"},"PR-7335"),"."),(0,i.kt)("h3",{id:"update-jersey-to-231"},"Update Jersey to 2.31"),(0,i.kt)("p",null,"Before 2.6.1, Pulsar used the Jersey 2.27, which has security concerns. In Pulsar 2.6.2, we update the Jersey version to the latest stable version(2.31) to enhance security."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7515"},"PR-7515"),"."),(0,i.kt)("h3",{id:"stop-to-dispatch-when-consumers-using-the-key_shared-subscription-stuck"},"Stop to dispatch when consumers using the Key_Shared subscription stuck"),(0,i.kt)("p",null,"Consumers using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key_Shared")," subscription would encounter disorder messages occasionally. The following are steps to reproduce the situation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect Consumer1 to Key_Shared subscription ",(0,i.kt)("inlineCode",{parentName:"li"},"sub")," and stop to receive")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"receiverQueueSize: 500")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Connect Producer and publish 500 messages with key ",(0,i.kt)("inlineCode",{parentName:"li"},"(i % 10)")),(0,i.kt)("li",{parentName:"ol"},"Connect Consumer2 to same subscription and start to receive")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"receiverQueueSize: 1"),(0,i.kt)("li",{parentName:"ul"},"since ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7106"},"https://github.com/apache/pulsar/pull/7106"),", Consumer2 can't receive (expected)")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Producer publish more 500 messages with same key generation algorithm"),(0,i.kt)("li",{parentName:"ol"},"After that, Consumer1 start to receive"),(0,i.kt)("li",{parentName:"ol"},"Check Consumer2 message ordering")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sometimes message ordering was broken in same key")),(0,i.kt)("p",null,"In 2.6.2, when consumers use the Key_Shared subscription, Pulsar stops dispatching messages to consumers that are stuck on delivery to guarantee message order."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7553"},"PR-7553"),"."),(0,i.kt)("h3",{id:"reestablish-namespace-bundle-ownership-from-false-negative-releasing-and-false-positive-acquiring"},"Reestablish namespace bundle ownership from false negative releasing and false positive acquiring"),(0,i.kt)("p",null,"In acquiring/releasing namespace bundle ownership, ZooKeeper might be disconnected before or after these operations are persisted in the ZooKeeper cluster. It leads to inconsistency between the local ownership cache and ZooKeeper cluster."),(0,i.kt)("p",null,"In 2.6.2, we fix the issue with the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ownership releasing, do not retain ownership in failure."),(0,i.kt)("li",{parentName:"ul"},"In ownership checking, querying and acquiring, reestablish the lost ownership in false negative releasing and false positive acquiring.")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7773"},"PR-7773"),"."),(0,i.kt)("h3",{id:"enable-users-to-configure-the-executor-pool-size"},"Enable users to configure the executor pool size"),(0,i.kt)("p",null,"Before 2.6.2, the executor pool size in Pulsar was set to ",(0,i.kt)("inlineCode",{parentName:"p"},"20")," when starting Pulsar services. Users could not configure the executor pool size."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\nprivate final ScheduledExecutorService executor = Executors.newScheduledThreadPool(20,\n           new DefaultThreadFactory("pulsar"));\n\n')),(0,i.kt)("p",null,"In 2.6.2, users can configure the executor pool size in the ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")," file based on their needs."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7782"},"PR-7782"),"."),(0,i.kt)("h3",{id:"add-replicated-check-for-checkinactivesubscriptions"},"Add replicated check for ",(0,i.kt)("inlineCode",{parentName:"h3"},"checkInactiveSubscriptions")),(0,i.kt)("p",null,"After the replicated subscription is deleted by ",(0,i.kt)("inlineCode",{parentName:"p"},"checkInactiveSubscriptions"),", replicated subscriptions are created with ",(0,i.kt)("inlineCode",{parentName:"p"},"receiveSubscriptionUpdated"),". In this case, the position becomes the latest position."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ntopic.createSubscription(update.getSubscriptionName(),\n        InitialPosition.Latest, true /* replicateSubscriptionState */);\n\n")),(0,i.kt)("p",null,"In 2.6.2, the replicated subscription is excluded from automatic deletion by fixing the ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentTopic"),"."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8066"},"PR-8066"),"."),(0,i.kt)("h3",{id:"upgrade-jetty-util-version-to-9431"},"Upgrade jetty-util version to 9.4.31"),(0,i.kt)("p",null,"Pulsar client depends on jetty-util. Jetty-util versions earlier than 9.4.30 contain known vulnerabilities."),(0,i.kt)("p",null,"In 2.6.2, we upgrade the jetty-util version to ",(0,i.kt)("inlineCode",{parentName:"p"},"9.4.31")," to enhance security."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8035"},"PR-8035"),"."),(0,i.kt)("h3",{id:"add-command-to-delete-a-clusters-metadata-from-zookeeper"},"Add command to delete a cluster's metadata from ZooKeeper"),(0,i.kt)("p",null,"When we share the same ZooKeeper and BookKeeper cluster among multiple broker clusters, if a cluster was removed, its metadata in ZooKeeper were also removed."),(0,i.kt)("p",null,"In 2.6.2, we fix the issue in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"PulsarClusterMetadataTeardown")," class to delete the relative nodes from ZooKeeper;"),(0,i.kt)("li",{parentName:"ul"},"Wrap the class to ",(0,i.kt)("inlineCode",{parentName:"li"},"bin/pulsar")," script.")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8169"},"PR-8169"),"."),(0,i.kt)("h3",{id:"replace-eventloop-with-threadpoolexecutor-to-improve-performance-instead-of-eventloop"},"Replace EventLoop with ThreadPoolExecutor to improve performance instead of EventLoop"),(0,i.kt)("p",null,"In 2.6.2, we replace EventLoop with a native JDK thread pool(ThreadPoolExecutor) to improve performance."),(0,i.kt)("p",null,"The following is the test result with pulsar perf."),(0,i.kt)("p",null,"Before 2.6.1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nAggregated throughput stats --- 11715556 records received --- 68813.420 msg/s --- 537.605 Mbit/s\n\n")),(0,i.kt)("p",null,"In 2.6.2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nAggregated throughput stats --- 18392800 records received --- 133314.602 msg/s --- 1041.520 Mbit/s\n\n")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8208"},"PR-8208"),"."),(0,i.kt)("h3",{id:"fix-deadlock-that-occurred-during-topic-ownership-check"},"Fix deadlock that occurred during topic ownership check"),(0,i.kt)("p",null,"Some broker servers had deadlocks while splitting namespace bundles. When checking the thread dump of the broker, some threads were blocked in ",(0,i.kt)("inlineCode",{parentName:"p"},"NamespaceService#getBundle()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\n"pulsar-ordered-OrderedExecutor-7-0" #34 prio=5 os_prio=0 tid=0x00007eeeab05a800 nid=0x81a5 waiting on condition [0x00007eeeafbd2000]\n  java.lang.Thread.State: WAITING (parking)\n       at sun.misc.Unsafe.park(Native Method)\n       - parking to wait for  <0x00007f17fa965418> (a java.util.concurrent.CompletableFuture$Signaller)\n       at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)\n       at org.apache.pulsar.common.naming.NamespaceBundleFactory.getBundles(NamespaceBundleFactory.java:155)\n...\n\n')),(0,i.kt)("p",null,"The reason for the issue is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"getBundle()")," method leads to deadlock in ",(0,i.kt)("inlineCode",{parentName:"p"},"NamespaceService#isTopicOwned()"),". To fix the issue, we remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"getBundle()")," method. When ",(0,i.kt)("inlineCode",{parentName:"p"},"isTopicOwned()")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the bundle metadata is cached and can be got asynchronously. When the client reconnects the next time, Pulsar returns the correct bundle metadata from the cache."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8406"},"PR-8406"),"."),(0,i.kt)("h2",{id:"proxy"},"Proxy"),(0,i.kt)("h3",{id:"enable-users-to-configure-advertisedaddress-in-proxy"},"Enable users to configure ",(0,i.kt)("inlineCode",{parentName:"h3"},"advertisedAddress")," in proxy"),(0,i.kt)("p",null,"Before 2.6.2, users could not configure ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedAddress")," on the proxy side. In 2.6.2, users can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisedAddress")," in proxy just as they do in Pulsar broker."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7542"},"PR-7542"),"."),(0,i.kt)("h3",{id:"add-proxy-plugin-interface-to-support-user-defined-additional-servlet"},"Add proxy plugin interface to support user defined additional servlet"),(0,i.kt)("p",null,"To enable users to access the broker flexibly, Pulsar provides plugins similar to broker protocol and broker interceptor. However, users could not access the proxy before 2.6.2."),(0,i.kt)("p",null,"To enable users to customize data requests in proxy, we add the protocol plugin for proxy in 2.6.2."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8067"},"PR-8067"),"."),(0,i.kt)("h3",{id:"fix-the-null-exception-when-starting-the-proxy-service"},"Fix the null exception when starting the proxy service"),(0,i.kt)("p",null,"When enabling the broker TLS and broker client authentication with OAuth2 plugin, the proxy service exits with an unexpected null exception."),(0,i.kt)("p",null,"The reason is that when initializing the flow, authentication is called, so the token client is not initialized before using."),(0,i.kt)("p",null,"In 2.6.2, we fix the null exception when starting the proxy service."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8019"},"PR-8019"),"."),(0,i.kt)("h2",{id:"java-client"},"Java Client"),(0,i.kt)("h3",{id:"support-input-stream-for-truststore-cert"},"Support input-stream for trustStore cert"),(0,i.kt)("p",null,"In 2.6.1, Pulsar supports dynamic cert loading by using input stream for TLS cert and key file. The feature is mainly used by container. However, container also requires dynamic loading for truststore certs and users cannot store trust-store cert into file-system."),(0,i.kt)("p",null,"In 2.6.2, Pulsar supports loading truststore cert dynamically using input stream."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7442"},"PR-7442"),"."),(0,i.kt)("h3",{id:"avoid-subscribing-the-same-topic"},"Avoid subscribing the same topic"),(0,i.kt)("p",null,"The current key of ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiTopicsConsumerImpl.topics")," is the topic name passed by the user. The ",(0,i.kt)("inlineCode",{parentName:"p"},"topicNameValid")," method checks if the name is valid and ",(0,i.kt)("inlineCode",{parentName:"p"},"topics")," doesn't contain the key."),(0,i.kt)("p",null,"However, if a multi-topic consumer subscribes a partition of a subscribed partitioned topic,  ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribeAsync")," succeeds and a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerImpl")," of the same partition is created, which is redundant."),(0,i.kt)("p",null,"Also, if a multi-topic consumer subscribes ",(0,i.kt)("inlineCode",{parentName:"p"},"public/default/topic")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"persistent://public/default/topic"),", while the initial subscribed topic is ",(0,i.kt)("inlineCode",{parentName:"p"},"topic"),", the redundant consumers would be created."),(0,i.kt)("p",null,"In 2.6.2, we fix the issue in the following ways to avoid subscribing the same topic again:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the full topic name as key for ",(0,i.kt)("inlineCode",{parentName:"li"},"MultiTopicsConsumerImpl.topics"),"."),(0,i.kt)("li",{parentName:"ul"},"Check that both the full topic name and the full partitioned topic name do not exist in ",(0,i.kt)("inlineCode",{parentName:"li"},"MultiTopicsConsumerImpl.topics")," when ",(0,i.kt)("inlineCode",{parentName:"li"},"subscribeAsync")," is called."),(0,i.kt)("li",{parentName:"ul"},"Throw a different exception to a different topic is invalid and the topic is already subscribed")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7823"},"PR-7823"),"."),(0,i.kt)("h2",{id:"cpp-client"},"CPP Client"),(0,i.kt)("h3",{id:"wait-for-all-seek-operations-complete"},"Wait for all seek operations complete"),(0,i.kt)("p",null,"When a partitioned consumer calls ",(0,i.kt)("inlineCode",{parentName:"p"},"seek"),", it waits for only one partition's seek operation completion because each internal consumer calls callback(result) to complete the same promise."),(0,i.kt)("p",null,"In 2.6.2, we use the following methods to avoid this problem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"MultiResultCallback")," implementation, the callback completes only when all N events complete successfully or one of N events fails."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"MultiResultCallback")," to wrap callback from ",(0,i.kt)("inlineCode",{parentName:"li"},"PartitionedConsumerImpl::seekAsync"),".")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7216"},"PR-7216"),"."),(0,i.kt)("h3",{id:"make-clear-thread-safe"},"Make ",(0,i.kt)("inlineCode",{parentName:"h3"},"clear()")," thread-safe"),(0,i.kt)("p",null,"Before 2.6.2, the ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"BatchAcknowledgementTracker")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UnAckedMessageTrackerEnabled")," are not thread-safe."),(0,i.kt)("p",null,"In 2.6.2, we acquire a mutex in these ",(0,i.kt)("inlineCode",{parentName:"p"},"clear()")," methods to make it thread-safe."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7862"},"PR-7862"),"."),(0,i.kt)("h3",{id:"add-snappy-library-to-docker-images-for-building-c-packages"},"Add Snappy library to Docker images for building C++ packages"),(0,i.kt)("p",null,"The program crashes when Snappy compression is enabled on the C++ client packaged as RPM/DEB. This is because Snappy library is not included in the Docker image for building the RPM/DEB package."),(0,i.kt)("p",null,"In 2.6.2, we add the Snappy library to the docker images to avoid the issue."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8086"},"PR-8086"),"."),(0,i.kt)("h3",{id:"support-key-based-batching"},"Support key based batching"),(0,i.kt)("p",null,"Support key based batching for the C++ client. In addition, currently, the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"BatchMessageContainer")," is coupling to ",(0,i.kt)("inlineCode",{parentName:"p"},"ProducerImpl")," tightly. The batch message container registers a timer to the producer's executor and the timeout callback is also the producer's method. Even its ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," method could call ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMessage")," to send a batch to the producer's pending queue. These should be the producer's work."),(0,i.kt)("p",null,"In 2.6.2, we implement the feature in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageAndCallbackBatch")," to store a ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageImpl")," of serialized single messages and a callback list."),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageContainerBase")," to provide interface methods and methods like update/clear message number/bytes, create ",(0,i.kt)("inlineCode",{parentName:"li"},"OpSendMsg"),"."),(0,i.kt)("li",{parentName:"ul"},"Let ",(0,i.kt)("inlineCode",{parentName:"li"},"ProducerImpl")," manage the batch timer and determine whether to create ",(0,i.kt)("inlineCode",{parentName:"li"},"OpSendMsg")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageContainerBase")," and send it."),(0,i.kt)("li",{parentName:"ul"},"Make ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageContainer")," inherit ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageContainerBase"),", it only manages a ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageAndCallbackBatch"),"."),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageKeyBasedContainer")," that inherits ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchMessageContainerBase"),", it manages a map of message key and ",(0,i.kt)("inlineCode",{parentName:"li"},"MessageAndCallbackBatch"),"."),(0,i.kt)("li",{parentName:"ul"},"Add a producer config to change batching type.")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7996"},"PR-7996"),"."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"enable-kubernetes-runtime-to-customize-function-instance-class-path"},"Enable Kubernetes runtime to customize function instance class path"),(0,i.kt)("p",null,"Before 2.6.2, the function worker's classpath is used to configure the function instance (runner)'s classpath. When the broker (function worker) uses an image that is different from the function instance (runner) for Kubernetes runtime, the classpath is wrong and the function instance could not load the instance classes."),(0,i.kt)("p",null,"In 2.6.2, we add a function instance classpath entry to the Kubernetes runtime config, and construct the function launch command accordingly."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7844"},"PR-7844"),"."),(0,i.kt)("h3",{id:"set-dryrun-of-kubernetes-runtime-to-null"},"Set ",(0,i.kt)("inlineCode",{parentName:"h3"},"dryrun")," of Kubernetes Runtime to null"),(0,i.kt)("p",null,"Before 2.6.2, we upgraded the ",(0,i.kt)("inlineCode",{parentName:"p"},"client-java")," of Kubernetes to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.9.2")," to enhance security. However, during the creation of statefulsets, secrets, and services, the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"dryrun")," was set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", which was not accepted by Kubernetes. Only ",(0,i.kt)("inlineCode",{parentName:"p"},"All")," is allowed in Kubernetes."),(0,i.kt)("p",null,"In 2.6.2, we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"dryrun")," of Kubernetes Runtime to null."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8064"},"PR-8064"),"."),(0,i.kt)("h2",{id:"pulsar-sql"},"Pulsar SQL"),(0,i.kt)("h3",{id:"upgrade-presto-version-to-332"},"Upgrade Presto version to 332"),(0,i.kt)("p",null,"Upgrade Presto version to 332. Resolve different packages between prestosql and prestodb. Although the latest version is 334, versions higher than 333 require Java 11."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/7194"},"PR-7194"),"."),(0,i.kt)("h2",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("h3",{id:"add-cli-command-to-get-the-last-message-id"},"Add CLI command to get the last message ID"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"last-message-id")," command in CLI, so users can get the last message ID with this command."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8082"},"PR-8082"),"."),(0,i.kt)("h3",{id:"support-deleting-schema-ledgers-when-deleting-topics"},"Support deleting schema ledgers when deleting topics"),(0,i.kt)("p",null,"Users could not delete schema of topics with the ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentTopics#deleteTopic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PersistentTopics#deletePartitionedTopic")," in REST APIs. After topics were deleted, the schema ledgers still existed with adding an empty schema ledger."),(0,i.kt)("p",null,"In 2.6.2, we implement the feature in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteSchema")," query param to REST APIs of deleting topics/partitioned topics;"),(0,i.kt)("li",{parentName:"ul"},"Add a map to record the created ledgers in ",(0,i.kt)("inlineCode",{parentName:"li"},"BookkeeperSchemaStorage"),";"),(0,i.kt)("li",{parentName:"ul"},"Expose ",(0,i.kt)("inlineCode",{parentName:"li"},"deleteSchema")," param in pulsar-admin APIs;"),(0,i.kt)("li",{parentName:"ul"},"Delete schema ledgers when deleting the cluster with ",(0,i.kt)("inlineCode",{parentName:"li"},"-a")," option.")),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8167"},"PR-8167"),"."),(0,i.kt)("h3",{id:"support-deleting-all-data-associated-with-a-cluster"},"Support deleting all data associated with a cluster"),(0,i.kt)("p",null,"When multiple broker clusters shared the same bookie cluster, if users wanted to remove a broker cluster, the associated ledgers in bookies were not deleted as expected."),(0,i.kt)("p",null,"In 2.6.2, we add a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster delete")," command to enable users to delete all the data associated with the cluster."),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8133"},"PR-8133"),"."),(0,i.kt)("h2",{id:"pulsar-perf"},"Pulsar Perf"),(0,i.kt)("h3",{id:"enable-users-to-configure-iothread-number-in-pulsar-perf"},"Enable users to configure ioThread number in pulsar-perf"),(0,i.kt)("p",null,"In pulsar-perf, the default Pulsar client ioThread number is ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime.getRuntime().availableProcessors()")," and users could not configure it in the command line. When running a pulsar-perf producer, it may cause messages to enqueue competition and lead to high latency."),(0,i.kt)("p",null,"In 2.6.2, we implement the feature in the following ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable users to configure the ioThread number in the command line;"),(0,i.kt)("li",{parentName:"ol"},"Change the default ioThead number from ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime.getRuntime().availableProcessors()")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"1"))),(0,i.kt)("p",null,"For more information about implementation, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/8090"},"PR-8090"),"."),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To download Apache Pulsar 2.6.2, click ",(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/en/download/"},"download"),"."),(0,i.kt)("li",{parentName:"ul"},"For more information about Apache Pulsar 2.6.2, see ","[","2.6.2 release notes","]","(",(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/release-notes/#2.6.2"},"https://pulsar.apache.org/release-notes/#2.6.2")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pulls?q=is%3Apr+label%3Arelease%2F2.6.2+is%3Aclosed"},"2.6.2 PR list"),".")),(0,i.kt)("p",null,"If you have any questions or suggestions, contact us with mailing lists or slack."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:users@pulsar.apache.org"},"users@pulsar.apache.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:dev@pulsar.apache.org"},"dev@pulsar.apache.org")),(0,i.kt)("li",{parentName:"ul"},"Pulsar slack channel: ",(0,i.kt)("a",{parentName:"li",href:"https://apache-pulsar.slack.com/"},"https://apache-pulsar.slack.com/")),(0,i.kt)("li",{parentName:"ul"},"Self-registration at ",(0,i.kt)("a",{parentName:"li",href:"https://apache-pulsar.herokuapp.com/"},"https://apache-pulsar.herokuapp.com/"))),(0,i.kt)("p",null,"Looking forward to your contributions to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar"),"."))}h.isMDXComponent=!0}}]);