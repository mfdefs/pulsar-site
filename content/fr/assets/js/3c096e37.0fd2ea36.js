"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6566],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"head-metadata",title:"Coding Guide",description:null,hide_table_of_contents:!0},s="Coding Guide",u={type:"mdx",permalink:"/fr/coding-guide",source:"@site/src/pages/coding-guide.md"},c=[{value:"Java",id:"java",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Future",id:"future",children:[],level:2},{value:"Memory",id:"memory",children:[],level:2},{value:"Logging",id:"logging",children:[{value:"Logging levels",id:"logging-levels",children:[],level:3}],level:2},{value:"Monitoring",id:"monitoring",children:[],level:2},{value:"Unit tests",id:"unit-tests",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Concurrency",id:"concurrency",children:[],level:2},{value:"Backwards compatibility",id:"backwards-compatibility",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding-guide"},"Coding Guide"),(0,i.kt)("p",null,"The guidelines help to encourage consistency and best practices among people working on ",(0,i.kt)("em",{parentName:"p"},"Apache Pulsar")," code base. You should observe the guidelines unless there is compelling reason to ignore them. We use checkstyle to enforce coding style, refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/buildtools/src/main/resources/pulsar/checkstyle.xml"},"checkstyle rules")," for all enforced checkstyle rules."),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("p",null,"Apache Pulsar code follows the ",(0,i.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html"},"Sun Java Coding Convention"),", with the following additions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lines can not be longer than 120 characters."),(0,i.kt)("li",{parentName:"ul"},"Indentation should be ",(0,i.kt)("strong",{parentName:"li"},"4 spaces"),". Tabs should never be used."),(0,i.kt)("li",{parentName:"ul"},"Use curly braces even for single-line ifs and elses."),(0,i.kt)("li",{parentName:"ul"},"No @author tags in any javadoc."),(0,i.kt)("li",{parentName:"ul"},"Use try-with-resources blocks whenever is possible."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TODO"),"s should be associated to at least one issue. ")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Apache Pulsar uses the following libraries a lot:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/guava"},"Guava"),": as a fundamental core library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://netty.io/"},"Netty"),": for network communications and memory buffer management.")),(0,i.kt)("p",null,"Use these libraries whenever possible rather than introducing more dependencies. "),(0,i.kt)("p",null,"Dependencies are bundled with our binary distributions, so we need to attach the relevant licenses. See ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/client-libraries/"},"Third party dependencies and licensing")," for a guide on how to do it correctly."),(0,i.kt)("h2",{id:"future"},"Future"),(0,i.kt)("p",null,"Java-8 Future is preferred over Guava's Listenable Future. Use Java-8 Future whenever possible."),(0,i.kt)("h2",{id:"memory"},"Memory"),(0,i.kt)("p",null,"Use netty ",(0,i.kt)("em",{parentName:"p"},"ByteBuf")," over java nio ",(0,i.kt)("em",{parentName:"p"},"ByteBuffer")," for internal usage. As we are using Netty Buffer for memory management."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logging should be taken seriously. Please take the time to access the logs when making a change to ensure that the important things are getting logged and there is no junk there."),(0,i.kt)("li",{parentName:"ul"},"Logging statements should be complete sentences with proper capitalization that are written to be read by a person not necessarily familiar with the source code."),(0,i.kt)("li",{parentName:"ul"},"All loggings should be done with ",(0,i.kt)("strong",{parentName:"li"},"SLF4j"),", never ",(0,i.kt)("em",{parentName:"li"},"System.out")," or ",(0,i.kt)("em",{parentName:"li"},"System.err"),".")),(0,i.kt)("h3",{id:"logging-levels"},"Logging levels"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"INFO")," is the level you should assume the software will be run in. INFO messages are things which are not bad but which the user will definitely want to know about every time they occur."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"TRACE")," and ",(0,i.kt)("em",{parentName:"li"},"DEBUG")," are both things you turn on when something is wrong and you want to figure out what is going on. ",(0,i.kt)("em",{parentName:"li"},"DEBUG")," should not be so fine grained that it will seriously affect performance of the program. ",(0,i.kt)("em",{parentName:"li"},"TRACE")," can be anything. You should wrap ",(0,i.kt)("em",{parentName:"li"},"DEBUG")," and ",(0,i.kt)("em",{parentName:"li"},"TRACE")," statements in the ",(0,i.kt)("inlineCode",{parentName:"li"},"if (logger.isDebugEnabled)")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"if (logger.isTraceEnabled)")," check to avoid performance degradation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"WARN")," and ",(0,i.kt)("em",{parentName:"li"},"ERROR")," indicate something that is ",(0,i.kt)("strong",{parentName:"li"},"BAD"),". Use ",(0,i.kt)("em",{parentName:"li"},"WARN")," if you aren't totally sure it is bad, and ",(0,i.kt)("em",{parentName:"li"},"ERROR")," if you are.")),(0,i.kt)("p",null,"Log the ",(0,i.kt)("em",{parentName:"p"},"stack traces")," at ",(0,i.kt)("strong",{parentName:"p"},"ERROR")," level, but never at ",(0,i.kt)("strong",{parentName:"p"},"INFO")," level or below. You can log at ",(0,i.kt)("strong",{parentName:"p"},"WARN")," level if you are interested in debugging."),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any new features should come with appropriate metrics, so monitoring the feature is working correctly."),(0,i.kt)("li",{parentName:"ul"},"Those metrics should be taken seriously and only export useful metrics that would be used on production on monitoring/alerting healthy of the system, or troubleshooting problems.")),(0,i.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New changes should come with unit tests that verify the functionality being added."),(0,i.kt)("li",{parentName:"ul"},"Unit tests should test the least amount of code possible. Don't start the whole server unless there is no other way to test a single class or small group of classes in isolation."),(0,i.kt)("li",{parentName:"ul"},"Tests should not depend on any external resources. They need to setup and teardown their own stuff."),(0,i.kt)("li",{parentName:"ul"},"It is okay to use the filesystem and network in tests since that's our business, but you need to clean up them after test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Do not")," use sleep or other timing assumptions in tests. It is wrong and will fail intermittently on any test server with other things going on that causes delays."),(0,i.kt)("li",{parentName:"ul"},"You'd better add a ",(0,i.kt)("em",{parentName:"li"},"timeout")," value to all test cases, to prevent a build from completing indefinitely. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"@Test(timeout=60000)"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you use the config files, think of the names from the very beginning."),(0,i.kt)("li",{parentName:"ul"},"If you run the program without tuning parameters, use the default values."),(0,i.kt)("li",{parentName:"ul"},"All configuration settings should be added accordingly in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master/conf"},"default configuration file")," directory and documented accordingly.")),(0,i.kt)("h2",{id:"concurrency"},"Concurrency"),(0,i.kt)("p",null,"Apache Pulsar is a low latency system, it is implemented as a purely asynchronous service, which is accomplished as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All public classes should be ",(0,i.kt)("strong",{parentName:"li"},"thread-safe"),"."),(0,i.kt)("li",{parentName:"ul"},"We prefer using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/bookkeeper/blob/master/bookkeeper-common/src/main/java/org/apache/bookkeeper/common/util/OrderedExecutor.java"},"OrderedExecutor")," for executing any asynchronous actions. The mutations to the same instance should be submitted to the same thread to execute."),(0,i.kt)("li",{parentName:"ul"},"If synchronization and locking are required, they should be in a fine granularity way."),(0,i.kt)("li",{parentName:"ul"},"All threads should have proper meaningful name."),(0,i.kt)("li",{parentName:"ul"},"If a class is not thread-safe, it should be annotated ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/misberner/jsr-305/blob/master/ri/src/main/java/javax/annotation/concurrent/NotThreadSafe.java"},"@NotThreadSafe"),". The instances that use this class is responsible for its synchronization.")),(0,i.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wire protocol should support backwards compatibility to enable no-downtime upgrades. This means the servers ",(0,i.kt)("strong",{parentName:"li"},"MUST")," be able to support requests from both old and new clients simultaneously."),(0,i.kt)("li",{parentName:"ul"},"Metadata formats and data formats should support backwards compatibility.")))}m.isMDXComponent=!0}}]);