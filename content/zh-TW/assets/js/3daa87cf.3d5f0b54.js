"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8423],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39380:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={author:"Technoboy-, Anonymitaet",title:"What\u2019s New in Apache Pulsar 2.7.4"},p=void 0,s={permalink:"/zh-TW/blog/2021/12/14/Apache-Pulsar-2-7-4",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-12-14-Apache-Pulsar-2-7-4.md",source:"@site/i18n/zh-TW/docusaurus-plugin-content-blog/2021-12-14-Apache-Pulsar-2-7-4.md",title:"What\u2019s New in Apache Pulsar 2.7.4",description:"The Apache Pulsar community releases version 2.7.4! 32 contributors provided improvements and bug fixes that delivered 98 commits.",date:"2021-12-14T00:00:00.000Z",formattedDate:"2021\u5e7412\u670814\u65e5",tags:[],readingTime:4.38,truncated:!1,authors:[{name:"Technoboy-, Anonymitaet"}],nextItem:{title:"Log4j2 Zero Day vulnerability (CVE-2021-44228)",permalink:"/zh-TW/blog/2021/12/11/Log4j-CVE"}},c={authorsImageUrls:[void 0]},d=[{value:"Upgrade Log4j to 2.17.0 - CVE-2021-45105. PR-13392",id:"upgrade-log4j-to-2170---cve-2021-45105-pr-13392",children:[],level:3},{value:"<code>ManagedLedger</code> can be referenced correctly when <code>OpAddEntry</code> is recycled. PR-12103",id:"managedledger-can-be-referenced-correctly-when-opaddentry-is-recycled-pr-12103",children:[],level:3},{value:"No potential race condition in the <code>BlobStoreBackedReadHandler</code>. PR-12123",id:"no-potential-race-condition-in-the-blobstorebackedreadhandler-pr-12123",children:[],level:3},{value:"NPE does not occur on <code>OpAddEntry</code> while ManagedLedger is closing. PR-12364",id:"npe-does-not-occur-on-opaddentry-while-managedledger-is-closing-pr-12364",children:[],level:3},{value:"Set a topic policy through the topic name of a partition correctly. PR-11294",id:"set-a-topic-policy-through-the-topic-name-of-a-partition-correctly-pr-11294",children:[],level:3},{value:"Dispatch rate limiter takes effect for consumers. PR-8611",id:"dispatch-rate-limiter-takes-effect-for-consumers-pr-8611",children:[],level:3},{value:"NPE does not occur when executing unload bundles operations. PR-11310",id:"npe-does-not-occur-when-executing-unload-bundles-operations-pr-11310",children:[],level:3},{value:"Fix inconsistent behavior for Namespace bundles cache. PR-11346",id:"fix-inconsistent-behavior-for-namespace-bundles-cache-pr-11346",children:[],level:3},{value:"Close the replicator and replication client after a cluster is deleted. PR-11342",id:"close-the-replicator-and-replication-client-after-a-cluster-is-deleted-pr-11342",children:[],level:3},{value:"Publish rate limiter takes effect as expected. PR-10384",id:"publish-rate-limiter-takes-effect-as-expected-pr-10384",children:[],level:3},{value:"Clean up newly created  ledgers if fails to update ZNode list. PR-12015",id:"clean-up-newly-created--ledgers-if-fails-to-update-znode-list-pr-12015",children:[],level:3}],u={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Pulsar community releases version 2.7.4! 32 contributors provided improvements and bug fixes that delivered 98 commits."),(0,i.kt)("p",null,"Highlights of this release are as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upgrade Log4j to 2.17.0 - ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/blog/2021/12/11/Log4j-CVE/"},"CVE-2021-45105"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/13392"},"PR-13392"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ManagedLedger")," can be referenced correctly when ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," is recycled. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12103"},"PR-12103"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"NPE does not occur on ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," while ManagedLedger is closing. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/12364"},"PR-12364")))),(0,i.kt)("p",null,"This blog walks through the most noteworthy changes grouped by the affected functionalities. For the complete list including all enhancements and bug fixes, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/release-notes/#274"},"Pulsar 2.7.4 Release Notes"),"."),(0,i.kt)("h1",{id:"notable-bug-fixes-and-enhancements"},"Notable bug fixes and enhancements"),(0,i.kt)("h3",{id:"upgrade-log4j-to-2170---cve-2021-45105-pr-13392"},"Upgrade Log4j to 2.17.0 - ",(0,i.kt)("a",{parentName:"h3",href:"https://pulsar.apache.org/blog/2021/12/11/Log4j-CVE/"},"CVE-2021-45105"),". ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/13392"},"PR-13392")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"A serious vulnerability was reported regarding Log4j that can allow remote execution for attackers. The vulnerability issue is described and tracked under ",(0,i.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2021-44228"},"CVE-2021-44228"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Pulsar 2.7.4 upgraded Log4j to 2.17.0."))),(0,i.kt)("h3",{id:"managedledger-can-be-referenced-correctly-when-opaddentry-is-recycled-pr-12103"},(0,i.kt)("inlineCode",{parentName:"h3"},"ManagedLedger")," can be referenced correctly when ",(0,i.kt)("inlineCode",{parentName:"h3"},"OpAddEntry")," is recycled. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/12103"},"PR-12103")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, after a write failure, a task was scheduled in the background to force close the ledger and trigger the creation of  a new ledger. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," instance was already recycled, that could lead to either an NPE or undefined behavior.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ManagedLedgerImpl")," object reference is copied to a final variable so the background task will not be dependent on the lifecycle of the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," instance."))),(0,i.kt)("h3",{id:"no-potential-race-condition-in-the-blobstorebackedreadhandler-pr-12123"},"No potential race condition in the ",(0,i.kt)("inlineCode",{parentName:"h3"},"BlobStoreBackedReadHandler"),". ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/12123"},"PR-12123")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStoreBackedReadHandler")," entered an infinite loop when reading an offload ledger. There was a race condition between the operation of reading entries and closing BlobStoreBackedReadHandler.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Added a state check before reading entries and made the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStoreBackedReadHandler")," exit loop when the ",(0,i.kt)("inlineCode",{parentName:"p"},"entryID")," is bigger than the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastEntryID"),"."))),(0,i.kt)("h3",{id:"npe-does-not-occur-on-opaddentry-while-managedledger-is-closing-pr-12364"},"NPE does not occur on ",(0,i.kt)("inlineCode",{parentName:"h3"},"OpAddEntry")," while ManagedLedger is closing. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/12364"},"PR-12364")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, the test ",(0,i.kt)("inlineCode",{parentName:"p"},"ManagedLedgerBkTest#managedLedgerClosed")," closed ManagedLedger object on some ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncAddEntry")," operations and failed with NPE.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Closed ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry"),"  when ",(0,i.kt)("inlineCode",{parentName:"p"},"ManagedLedger")," signaled  ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," to fail. In this way, the ",(0,i.kt)("inlineCode",{parentName:"p"},"OpAddEntry")," object was correctly recycled and the failed callback was correctly triggered."))),(0,i.kt)("h3",{id:"set-a-topic-policy-through-the-topic-name-of-a-partition-correctly-pr-11294"},"Set a topic policy through the topic name of a partition correctly. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11294"},"PR-11294")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, the topic name of a partition could not be used to set a topic policy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Allowed setting a topic policy through a topic name of a partition by converting the topic name of a partition in ",(0,i.kt)("inlineCode",{parentName:"p"},"SystemTopicBasedTopicPoliciesService"),"."))),(0,i.kt)("h3",{id:"dispatch-rate-limiter-takes-effect-for-consumers-pr-8611"},"Dispatch rate limiter takes effect for consumers. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/8611"},"PR-8611")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, dispatch rate limiter did not take effect in cases where all consumers started reading in the next second since ",(0,i.kt)("inlineCode",{parentName:"p"},"acquiredPermits")," was reset to 0 every second.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Changed the behaviour of ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchRateLimiter")," by minus ",(0,i.kt)("inlineCode",{parentName:"p"},"permits")," every second instead of reset ",(0,i.kt)("inlineCode",{parentName:"p"},"acquiredPermits")," to 0. Consumers stopped reading entries temporarily until ",(0,i.kt)("inlineCode",{parentName:"p"},"acquiredPermits")," returned to a value less than ",(0,i.kt)("inlineCode",{parentName:"p"},"permits")," ."))),(0,i.kt)("h3",{id:"npe-does-not-occur-when-executing-unload-bundles-operations-pr-11310"},"NPE does not occur when executing unload bundles operations. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11310"},"PR-11310")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"When performing pressure tests on persistent partitioned topics, NPE occurred when executing unload bundles operations. Concurrently, producers did not write messages.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Added more safety checks to fix this issue."))),(0,i.kt)("h3",{id:"fix-inconsistent-behavior-for-namespace-bundles-cache-pr-11346"},"Fix inconsistent behavior for Namespace bundles cache. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11346"},"PR-11346")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, namespace bundle cache was not invalidated after a namespace was deleted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Invalidated namespace policy cache when bundle cache was invalidated."))),(0,i.kt)("h3",{id:"close-the-replicator-and-replication-client-after-a-cluster-is-deleted-pr-11342"},"Close the replicator and replication client after a cluster is deleted. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11342"},"PR-11342")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, the replicator and the replication client were not closed after a cluster was deleted. The producer of the replicator would then try to reconnect to the deleted cluster continuously.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Closed the relative replicator and replication client."))),(0,i.kt)("h3",{id:"publish-rate-limiter-takes-effect-as-expected-pr-10384"},"Publish rate limiter takes effect as expected. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10384"},"PR-10384")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"Previously, there were various issues if ",(0,i.kt)("inlineCode",{parentName:"p"},"preciseTopicPublishRateLimiterEnable"),"  was set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for rate limiting:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updating the limits did not set a boundary when changing the limits from a bounded limit to an unbounded limit.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each topic created a scheduler thread for each limiter instance.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Topics did not release the scheduler thread when the topic was unloaded or the operation closed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updating the limits did not close the scheduler thread related to the replaced limiter instance")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cleaned up the previous limiter instances before creating new limiter instances.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Used ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerService.pulsar().getExecutor()")," as the scheduler for the rate limiter instances.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Added resource cleanup hooks for topic closing (unload)."))))),(0,i.kt)("h3",{id:"clean-up-newly-created--ledgers-if-fails-to-update-znode-list-pr-12015"},"Clean up newly created  ledgers if fails to update ZNode list. ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/12015"},"PR-12015")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Issue")),(0,i.kt)("p",{parentName:"li"},"When updating a ZNode list, ZooKeeper threw an exception and did not clean up the created ledger. Newly created ledgers were not  indexed to a topic ",(0,i.kt)("inlineCode",{parentName:"p"},"managedLedger")," list and could not be cleared up as topic retention. Also, ZNode numbers increased in ZooKeeper if the ZNode version mismatch exception was thrown out.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolution")),(0,i.kt)("p",{parentName:"li"},"Deleted the created ledger from broker cache and BookKeeper regardless of exception type when the ZNode list failed to update."))),(0,i.kt)("h1",{id:"whats-next"},"What\u2019s Next?"),(0,i.kt)("p",null,"If you are interested in learning more about Pulsar 2.7.4, you can ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/versions/"},"download")," and try it out now!"),(0,i.kt)("p",null,"Pulsar Summit Asia 2021 will take place on January 15-16, 2022. ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar-summit.org/"},"Register now")," and help us make it an even bigger success by spreading the word on social media!"),(0,i.kt)("p",null,"For more information about the Apache Pulsar project and current  progress, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,i.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}h.isMDXComponent=!0}}]);