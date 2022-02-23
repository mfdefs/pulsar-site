"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1717],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93671:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"window-functions-context",title:"Window Functions Context",sidebar_label:"Window Functions: Context"},u=void 0,s={unversionedId:"window-functions-context",id:"window-functions-context",title:"Window Functions Context",description:"Java SDK provides access to a window context object that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/window-functions-context.md",sourceDirName:".",slug:"/window-functions-context",permalink:"/ja/docs/next/window-functions-context",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/window-functions-context.md",tags:[],version:"current",frontMatter:{id:"window-functions-context",title:"Window Functions Context",sidebar_label:"Window Functions: Context"},sidebar:"docsSidebar",previous:{title:"Reference: CLI",permalink:"/ja/docs/next/functions-cli"},next:{title:"Overview",permalink:"/ja/docs/next/io-overview"}},c=[{value:"Spec",id:"spec",children:[{value:"Get input topics",id:"get-input-topics",children:[],level:3},{value:"Get output topic",id:"get-output-topic",children:[],level:3},{value:"Get tenant",id:"get-tenant",children:[],level:3},{value:"Get namespace",id:"get-namespace",children:[],level:3},{value:"Get function name",id:"get-function-name",children:[],level:3},{value:"Get function ID",id:"get-function-id",children:[],level:3},{value:"Get function version",id:"get-function-version",children:[],level:3},{value:"Get instance ID",id:"get-instance-id",children:[],level:3},{value:"Get num instances",id:"get-num-instances",children:[],level:3},{value:"Get output schema type",id:"get-output-schema-type",children:[],level:3}],level:2},{value:"Logger",id:"logger",children:[],level:2},{value:"Metrics",id:"metrics",children:[],level:2},{value:"User config",id:"user-config",children:[{value:"API",id:"api",children:[{value:"getUserConfigMap",id:"getuserconfigmap",children:[],level:4},{value:"getUserConfigValue",id:"getuserconfigvalue",children:[],level:4},{value:"getUserConfigValueOrDefault",id:"getuserconfigvalueordefault",children:[],level:4}],level:3}],level:2},{value:"Routing",id:"routing",children:[],level:2},{value:"State storage",id:"state-storage",children:[{value:"incrCounter",id:"incrcounter",children:[],level:4},{value:"getCounter",id:"getcounter",children:[],level:4},{value:"putState",id:"putstate",children:[],level:4}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Java SDK provides access to a ",(0,o.kt)("strong",{parentName:"p"},"window context object")," that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#spec"},"Spec")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Names of all input topics and the output topic associated with the function."),(0,o.kt)("li",{parentName:"ul"},"Tenant and namespace associated with the function."),(0,o.kt)("li",{parentName:"ul"},"Pulsar window function name, ID, and version."),(0,o.kt)("li",{parentName:"ul"},"ID of the Pulsar function instance running the window function."),(0,o.kt)("li",{parentName:"ul"},"Number of instances that invoke the window function."),(0,o.kt)("li",{parentName:"ul"},"Built-in type or custom class name of the output schema."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#logger"},"Logger")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Logger object used by the window function, which can be used to create window function log messages."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#user-config"},"User config")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Access to arbitrary user configuration values."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#routing"},"Routing")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Routing is supported in Pulsar window functions. Pulsar window functions send messages to arbitrary topics as per the ",(0,o.kt)("inlineCode",{parentName:"li"},"publish")," interface."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#metrics"},"Metrics")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Interface for recording metrics."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#state-storage"},"State storage")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Interface for storing and retrieving state in ",(0,o.kt)("a",{parentName:"li",href:"#state-storage"},"state storage"),".")))),(0,o.kt)("h2",{id:"spec"},"Spec"),(0,o.kt)("p",null,"Spec contains the basic information of a function."),(0,o.kt)("h3",{id:"get-input-topics"},"Get input topics"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInputTopics")," method gets the ",(0,o.kt)("strong",{parentName:"p"},"name list")," of all input topics."),(0,o.kt)("p",null,"This example demonstrates how to get the name list of all input topics in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetInputTopicsWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Collection<String> inputTopics = context.getInputTopics();\n        System.out.println(inputTopics);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-output-topic"},"Get output topic"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getOutputTopic")," method gets the ",(0,o.kt)("strong",{parentName:"p"},"name of a topic")," to which the message is sent."),(0,o.kt)("p",null,"This example demonstrates how to get the name of an output topic in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetOutputTopicWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String outputTopic = context.getOutputTopic();\n        System.out.println(outputTopic);\n\n        return null;\n    }\n}\n\n")),(0,o.kt)("h3",{id:"get-tenant"},"Get tenant"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getTenant")," method gets the tenant name associated with the window function."),(0,o.kt)("p",null,"This example demonstrates how to get the tenant name in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetTenantWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String tenant = context.getTenant();\n        System.out.println(tenant);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-namespace"},"Get namespace"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getNamespace")," method gets the namespace associated with the window function."),(0,o.kt)("p",null,"This example demonstrates how to get the namespace in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetNamespaceWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String ns = context.getNamespace();\n        System.out.println(ns);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-function-name"},"Get function name"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getFunctionName")," method gets the window function name."),(0,o.kt)("p",null,"This example demonstrates how to get the function name in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetNameOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionName = context.getFunctionName();\n        System.out.println(functionName);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-function-id"},"Get function ID"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getFunctionId")," method gets the window function ID."),(0,o.kt)("p",null,"This example demonstrates how to get the function ID in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetFunctionIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionID = context.getFunctionId();\n        System.out.println(functionID);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-function-version"},"Get function version"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getFunctionVersion")," method gets the window function version."),(0,o.kt)("p",null,"This example demonstrates how to get the function version of a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetVersionOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionVersion = context.getFunctionVersion();\n        System.out.println(functionVersion);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-instance-id"},"Get instance ID"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getInstanceId")," method gets the instance ID of a window function."),(0,o.kt)("p",null,"This example demonstrates how to get the instance ID in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetInstanceIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int instanceId = context.getInstanceId();\n        System.out.println(instanceId);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-num-instances"},"Get num instances"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getNumInstances")," method gets the number of instances that invoke the window function."),(0,o.kt)("p",null,"This example demonstrates how to get the number of instances in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetNumInstancesWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int numInstances = context.getNumInstances();\n        System.out.println(numInstances);\n\n        return null;\n    }\n\n}\n\n")),(0,o.kt)("h3",{id:"get-output-schema-type"},"Get output schema type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getOutputSchemaType")," method gets the built-in type or custom class name of the output schema."),(0,o.kt)("p",null,"This example demonstrates how to get the output schema type of a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\npublic class GetOutputSchemaTypeWindowFunction implements WindowFunction<String, Void> {\n\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String schemaType = context.getOutputSchemaType();\n        System.out.println(schemaType);\n\n        return null;\n    }\n}\n\n")),(0,o.kt)("h2",{id:"logger"},"Logger"),(0,o.kt)("p",null,"Pulsar window functions using Java SDK has access to an ",(0,o.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},"SLF4j")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.slf4j.org/api/org/apache/log4j/Logger.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Logger"))," object that can be used to produce logs at the chosen log level."),(0,o.kt)("p",null,"This example logs either a ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING"),"-level or ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),"-level log based on whether the incoming string contains the word ",(0,o.kt)("inlineCode",{parentName:"p"},"danger")," or not in a Java function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\nimport org.slf4j.Logger;\n\npublic class LoggingWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Logger log = context.getLogger();\n        for (Record<String> record : inputs) {\n            log.info(record + "-window-log");\n        }\n        return null;\n    }\n\n}\n\n')),(0,o.kt)("p",null,"If you need your function to produce logs, specify a log topic when creating or running the function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin functions create \\\n  --jar my-functions.jar \\\n  --classname my.package.LoggingFunction \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n\n")),(0,o.kt)("p",null,"You can access all logs produced by ",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFunction")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistent://public/default/logging-function-logs")," topic."),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Pulsar window functions can publish arbitrary metrics to the metrics interface which can be queried."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a Pulsar window function uses the language-native interface for Java, that function is not able to publish metrics and stats to Pulsar."))),(0,o.kt)("p",null,"You can record metrics using the context object on a per-key basis."),(0,o.kt)("p",null,"This example sets a metric for the ",(0,o.kt)("inlineCode",{parentName:"p"},"process-count")," key and a different metric for the ",(0,o.kt)("inlineCode",{parentName:"p"},"elevens-count")," key every time the function processes a message in a Java function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\n\n\n/**\n * Example function that wants to keep track of\n * the event time of each message sent.\n */\npublic class UserMetricWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n\n        for (Record<String> record : inputs) {\n            if (record.getEventTime().isPresent()) {\n                context.recordMetric("MessageEventTime", record.getEventTime().get().doubleValue());\n            }\n        }\n\n        return null;\n    }\n}\n\n')),(0,o.kt)("h2",{id:"user-config"},"User config"),(0,o.kt)("p",null,"When you run or update Pulsar Functions that are created using SDK, you can pass arbitrary key/value pairs to them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--user-config")," flag. Key/value pairs ",(0,o.kt)("strong",{parentName:"p"},"must")," be specified as JSON."),(0,o.kt)("p",null,"This example passes a user configured key/value to a function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\nbin/pulsar-admin functions create \\\n  --name word-filter \\\n --user-config \'{"forbidden-word":"rosebud"}\' \\\n  # Other function configs\n\n')),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("p",null,"You can use the following APIs to get user-defined information for window functions."),(0,o.kt)("h4",{id:"getuserconfigmap"},"getUserConfigMap"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getUserConfigMap")," API gets a map of all user-defined key/value configurations for the window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n     * Get a map of all user-defined key/value configs for the function.\n     *\n     * @return The full map of user-defined config values\n     */\n    Map<String, Object> getUserConfigMap();\n\n")),(0,o.kt)("h4",{id:"getuserconfigvalue"},"getUserConfigValue"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserConfigValue")," API gets a user-defined key/value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n     * Get any user-defined key/value.\n     *\n     * @param key The key\n     * @return The Optional value specified by the user for that key.\n     */\n    Optional<Object> getUserConfigValue(String key);\n\n")),(0,o.kt)("h4",{id:"getuserconfigvalueordefault"},"getUserConfigValueOrDefault"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getUserConfigValueOrDefault")," API gets a user-defined key/value or a default value if none is present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n     * Get any user-defined key/value or a default value if none is present.\n     *\n     * @param key\n     * @param defaultValue\n     * @return Either the user config value associated with a given key or a supplied default value\n     */\n    Object getUserConfigValueOrDefault(String key, Object defaultValue);\n\n")),(0,o.kt)("p",null,"This example demonstrates how to access key/value pairs provided to Pulsar window functions."),(0,o.kt)("p",null,"Java SDK context object enables you to access key/value pairs provided to Pulsar window functions via the command line (as JSON)."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For all key/value pairs passed to Java window functions, both the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),". To set the value to be a different type, you need to deserialize it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," type."))),(0,o.kt)("p",null,"This example passes a key/value pair in a Java window function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\nbin/pulsar-admin functions create \\\n   --user-config \'{"word-of-the-day":"verdure"}\' \\\n  # Other function configs\n\n')),(0,o.kt)("p",null,"This example accesses values in a Java window function."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UserConfigFunction")," function logs the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"The word of the day is verdure"')," every time the function is invoked (which means every time a message arrives). The user config of ",(0,o.kt)("inlineCode",{parentName:"p"},"word-of-the-day")," is changed ",(0,o.kt)("strong",{parentName:"p"},"only")," when the function is updated with a new config value via multiple ways, such as the command line tool or REST API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\nimport java.util.Optional;\n\npublic class UserConfigWindowFunction implements WindowFunction<String, String> {\n    @Override\n    public String process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        Optional<Object> whatToWrite = context.getUserConfigValue("WhatToWrite");\n        if (whatToWrite.get() != null) {\n            return (String)whatToWrite.get();\n        } else {\n            return "Not a nice way";\n        }\n    }\n\n}\n\n')),(0,o.kt)("p",null,"If no value is provided, you can access the entire user config map or set a default value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n// Get the whole config map\nMap<String, String> allConfigs = context.getUserConfigMap();\n\n// Get value or resort to default\nString wotd = context.getUserConfigValueOrDefault("word-of-the-day", "perspicacious");\n\n')),(0,o.kt)("h2",{id:"routing"},"Routing"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.publish()")," interface to publish as many results as you want."),(0,o.kt)("p",null,"This example shows that the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublishFunction")," class uses the built-in function in the context to publish messages to the ",(0,o.kt)("inlineCode",{parentName:"p"},"publishTopic")," in a Java function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class PublishWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        String publishTopic = (String) context.getUserConfigValueOrDefault("publish-topic", "publishtopic");\n        String output = String.format("%s!", input);\n        context.publish(publishTopic, output);\n\n        return null;\n    }\n\n}\n\n')),(0,o.kt)("h2",{id:"state-storage"},"State storage"),(0,o.kt)("p",null,"Pulsar window functions use ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org"},"Apache BookKeeper")," as a state storage interface. Apache Pulsar installation (including the standalone installation) includes the deployment of BookKeeper bookies."),(0,o.kt)("p",null,"Apache Pulsar integrates with Apache BookKeeper ",(0,o.kt)("inlineCode",{parentName:"p"},"table service")," to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," for functions. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WordCount")," function can store its ",(0,o.kt)("inlineCode",{parentName:"p"},"counters")," state into BookKeeper table service via Pulsar Functions state APIs."),(0,o.kt)("p",null,"States are key-value pairs, where the key is a string and the value is arbitrary binary data\u2014counters are stored as 64-bit big-endian binary values. Keys are scoped to an individual Pulsar Function and shared between instances of that function."),(0,o.kt)("p",null,"Currently, Pulsar window functions expose Java API to access, update, and manage states. These APIs are available in the context object when you use Java SDK functions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Java API"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"incrCounter")),(0,o.kt)("td",{parentName:"tr",align:null},"Increases a built-in distributed counter referred by key.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"getCounter")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets the counter value for the key.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"putState")),(0,o.kt)("td",{parentName:"tr",align:null},"Updates the state value for the key.")))),(0,o.kt)("p",null,"You can use the following APIs to access, update, and manage states in Java window functions."),(0,o.kt)("h4",{id:"incrcounter"},"incrCounter"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"incrCounter")," API increases a built-in distributed counter referred by key."),(0,o.kt)("p",null,"Applications use the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrCounter")," API to change the counter of a given ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," by the given ",(0,o.kt)("inlineCode",{parentName:"p"},"amount"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," does not exist, a new key is created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Increment the builtin distributed counter referred by key\n     * @param key The name of the key\n     * @param amount The amount to be incremented\n     */\n    void incrCounter(String key, long amount);\n\n")),(0,o.kt)("h4",{id:"getcounter"},"getCounter"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter")," API gets the counter value for the key."),(0,o.kt)("p",null,"Applications uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter")," API to retrieve the counter of a given ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," changed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"incrCounter")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Retrieve the counter value for the key.\n     *\n     * @param key name of the key\n     * @return the amount of the counter value for this key\n     */\n    long getCounter(String key);\n\n")),(0,o.kt)("p",null,"Except the ",(0,o.kt)("inlineCode",{parentName:"p"},"getCounter")," API, Pulsar also exposes a general key/value API (",(0,o.kt)("inlineCode",{parentName:"p"},"putState"),") for functions to store general key/value state."),(0,o.kt)("h4",{id:"putstate"},"putState"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"putState")," API updates the state value for the key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"\n    /**\n     * Update the state value for the key.\n     *\n     * @param key name of the key\n     * @param value state value of the key\n     */\n    void putState(String key, ByteBuffer value);\n\n")),(0,o.kt)("p",null,"This example demonstrates how applications store states in Pulsar window functions."),(0,o.kt)("p",null,"The logic of the ",(0,o.kt)("inlineCode",{parentName:"p"},"WordCountWindowFunction")," is simple and straightforward."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The function first splits the received string into multiple words using regex ",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\."),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For each ",(0,o.kt)("inlineCode",{parentName:"p"},"word"),", the function increments the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," by 1 via ",(0,o.kt)("inlineCode",{parentName:"p"},"incrCounter(key, amount)"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        for (Record<String> input : inputs) {\n            Arrays.asList(input.getValue().split("\\\\.")).forEach(word -> context.incrCounter(word, 1));\n        }\n        return null;\n\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);