"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4343],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65596:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={author:"Matteo Merli",authorURL:"https://twitter.com/merlimat",title:"Apache Pulsar 2.3.0"},s=void 0,u={permalink:"/ko/blog/2019/02/20/Apache-Pulsar-2-3-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2019-02-20-Apache-Pulsar-2-3-0.md",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2019-02-20-Apache-Pulsar-2-3-0.md",title:"Apache Pulsar 2.3.0",description:"The Apache Pulsar PMC is happy to announce the release of Pulsar 2.3.0. This is the result of huge effort from the community, with over 480 commits and a long list of new features, general improvements and bug fixes.",date:"2019-02-20T00:00:00.000Z",formattedDate:"2019\ub144 2\uc6d4 20\uc77c",tags:[],readingTime:3.36,truncated:!0,authors:[{name:"Matteo Merli",url:"https://twitter.com/merlimat"}],prevItem:{title:"Apache Pulsar 2.4.0",permalink:"/ko/blog/2019/07/05/Apache-Pulsar-2-4-0"},nextItem:{title:"Apache Pulsar 2.1.0-incubating",permalink:"/ko/blog/2018/08/06/Apache-Pulsar-2-1-0"}},c={authorsImageUrls:[void 0]},p=[{value:"Pulsar functions in Kubernetes",id:"pulsar-functions-in-kubernetes",children:[],level:3},{value:"New Pulsar IO connectors:",id:"new-pulsar-io-connectors",children:[],level:3},{value:"Token Authentication",id:"token-authentication",children:[],level:3},{value:"Schema support in Python client library",id:"schema-support-in-python-client-library",children:[],level:3},{value:"Function state API in Python",id:"function-state-api-in-python",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache Pulsar PMC is happy to announce the release of Pulsar 2.3.0. This is the result of huge effort from the community, with over 480 commits and a long list of new features, general improvements and bug fixes."),(0,o.kt)("p",null,"These improvements have been across the board in all of Pulsar components, from new messaging features, to improved usability for Pulsar Functions and Pulsar IO."),(0,o.kt)("p",null,"Check out the official ",(0,o.kt)("b",null,(0,o.kt)("a",{parentName:"p",href:"/release-notes/#2.3.0"},"release notes"))," for a detailed list of the changes, with links to the relevant pull-requests, discussions and documentation."),(0,o.kt)("p",null,"Regarding new features introduced, I just want to highlight here a tiny subset of them:"),(0,o.kt)("h3",{id:"pulsar-functions-in-kubernetes"},"Pulsar functions in Kubernetes"),(0,o.kt)("p",null,"It's now possible to use Kubernetes as the scheduler for Pulsar Functions."),(0,o.kt)("p",null,"When a Pulsar cluster is configured to use Kubernetes, submitting a function, using CLI tools or REST API, will cause the function instances to be submitted as Kubernetes pods rather than running as processes or threads within the Pulsar functions worker."),(0,o.kt)("p",null,"With this runtime manager, it's possible to set quota on CPU/Mem and have Kubernetes assign the required resources and enforce isolation between different instances and functions."),(0,o.kt)("h3",{id:"new-pulsar-io-connectors"},"New Pulsar IO connectors:"),(0,o.kt)("p",null,"A new batch of connectors was added, including MongoDB, Elastic Search, HBase and local files source and sink."),(0,o.kt)("p",null,"We introduce support for doing ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Change_data_capture"},"Change-Data-Capture")," with ",(0,o.kt)("a",{parentName:"p",href:"https://debezium.io/"},"Debezium"),". This allows to record all the update from a database into a Pulsar topic and use it for replication, streaming jobs, cache updating, etc.."),(0,o.kt)("p",null,"With Pulsar IO, Debezium will run as a regular Pulsar IO source, completely managed by Pulsar. Users can easily submit a Debezium builtin connector to a Pulsar cluster and start feeding data from a long list of supported databases like MySQL, MongoDB, PostgreSQL, Oracle and SQL Server."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/io-cdc"},"Debezium connector")," documentation for how to get started in capturing database changes."),(0,o.kt)("h3",{id:"token-authentication"},"Token Authentication"),(0,o.kt)("p",null,"Token Authentication provides a very simple and secure method of authentication for Pulsar. This is based on ",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Tokens"),"."),(0,o.kt)("p",null,'With tokens authentication, a client only needs to provide a single credential, or "token", in the form of an opaque string provided by either the system administrator or some automated service.'),(0,o.kt)("p",null,"The Java code for a client using token authentication will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n    .build();\n\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/security-token-client"},"Client Authentication using tokens")," for a complete walk through and instructions on how to set it up and manage it."),(0,o.kt)("h3",{id:"schema-support-in-python-client-library"},"Schema support in Python client library"),(0,o.kt)("p",null,"This feature adds a Python idiomatic way to declare the schema of a producer or consumer and integrates directly with the Pulsar schema registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n")),(0,o.kt)("p",null,"The above example will make the producer ",(0,o.kt)("inlineCode",{parentName:"p"},"Example")," schema to be validated by broker when we try to publish on ",(0,o.kt)("inlineCode",{parentName:"p"},"my-topic"),". If the topic has a schema that is incompatible, the producer creation will fail."),(0,o.kt)("p",null,"Currently, the Python schema support Avro and JSON, in addition to regular types like ",(0,o.kt)("inlineCode",{parentName:"p"},"str")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes"),"."),(0,o.kt)("p",null,"The complete documentation is available at ",(0,o.kt)("a",{parentName:"p",href:"/docs/client-libraries-python/#schema"},"Python schema"),"."),(0,o.kt)("h3",{id:"function-state-api-in-python"},"Function state API in Python"),(0,o.kt)("p",null,"From 2.3.0, Python function can access the state in as similar way as Java functions, through the context object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\n# The classic ExclamationFunction that appends an\n# exclamation at the end of the input\nclass WordCountFunction(pulsar.Function):\n    def process(self, input, context):\n        for word in input.split():\n            context.incr_counter(word, 1)\n        return input + "!"\n\n')),(0,o.kt)("p",null,"Available methods for state management in the context object are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\ndef incr_counter(self, key, amount):\n  ""incr the counter of a given key in the managed state""\n\ndef get_counter(self, key):\n  """get the counter of a given key in the managed state"""\n\ndef put_state(self, key, value):\n  """update the value of a given key in the managed state"""\n\ndef get_state(self, key):\n  """get the value of a given key in the managed state"""\n\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"/download"},"download")," Pulsar 2.3.0 and report feedback, issues or any comment into our mailing lists, slack channel or Github page. (",(0,o.kt)("a",{parentName:"p",href:"/contact"},"Contact page"),")"))}d.isMDXComponent=!0}}]);