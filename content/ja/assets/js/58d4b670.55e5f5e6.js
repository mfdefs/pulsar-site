"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7187],{3905:function(e,a,r){r.d(a,{Zo:function(){return p},kt:function(){return c}});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),u=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=t,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(k,o(o({ref:a},p),{},{components:r})):n.createElement(k,o({ref:a},p))}));function c(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,a,r){var n=r(67294);a.Z=function(e){var a=e.children,r=e.hidden,t=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:t},a)}},26396:function(e,a,r){r.d(a,{Z:function(){return d}});var n=r(87462),t=r(67294),l=r(72389),o=r(79443);var i=function(){var e=(0,t.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(63616),u=r(86010),p="tabItem_vU9c";function m(e){var a,r,l,o=e.lazy,m=e.block,d=e.defaultValue,c=e.values,k=e.groupId,f=e.className,b=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,s.lx)(v,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(a=null!=d?d:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?a:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),N=y.tabGroupChoices,T=y.setTabGroupChoices,A=(0,t.useState)(g),I=A[0],w=A[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=N[k];null!=P&&P!==I&&v.some((function(e){return e.value===P}))&&w(P)}var j=function(e){var a=e.currentTarget,r=E.indexOf(a),n=v[r].value;n!==I&&(x(a),w(n),null!=k&&T(k,n))},S=function(e){var a,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var t=E.indexOf(e.currentTarget)-1;r=E[t]||E[E.length-1]}null==(a=r)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var a=e.value,r=e.label,l=e.attributes;return t.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===a?0:-1,"aria-selected":I===a,key:a,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:j,onClick:j},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":I===a})}),null!=r?r:a)}))),o?(0,t.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==I})}))))}function d(e){var a=(0,l.Z)();return t.createElement(m,(0,n.Z)({key:String(a)},e))}},54936:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var n=r(87462),t=r(63366),l=(r(67294),r(3905)),o=r(26396),i=r(58215),s=["components"],u={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},p=void 0,m={unversionedId:"admin-api-brokers",id:"version-2.9.1/admin-api-brokers",title:"Managing Brokers",description:"Important",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.9.1/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/ja/docs/admin-api-brokers",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/admin-api-brokers.md",tags:[],version:"2.9.1",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Tenants",permalink:"/ja/docs/admin-api-tenants"},next:{title:"Namespaces",permalink:"/ja/docs/admin-api-namespaces"}},d=[{value:"Brokers resources",id:"brokers-resources",children:[{value:"List active brokers",id:"list-active-brokers",children:[],level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",children:[{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",children:[],level:4}],level:3},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",children:[],level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",children:[],level:3},{value:"List updated values",id:"list-updated-values",children:[],level:3},{value:"List all",id:"list-all",children:[],level:3}],level:2}],c={toc:d};function k(e){var a=e.components,r=(0,t.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important")),(0,l.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Pulsar brokers consist of two components:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,l.kt)("a",{parentName:"li",href:"/ja/docs/reference-terminology#topic"},"topic")," lookup."),(0,l.kt)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,l.kt)("a",{parentName:"li",href:"/ja/docs/reference-terminology#message"},"message")," transfers.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/docs/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"brokers")," command of the ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,l.kt)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"li",href:"client-libraries-java"},"Java API"))),(0,l.kt)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,l.kt)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See the ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,l.kt)("h2",{id:"brokers-resources"},"Brokers resources"),(0,l.kt)("h3",{id:"list-active-brokers"},"List active brokers"),(0,l.kt)("p",null,"Fetch all available active brokers that are serving traffic."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getActiveBrokers?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/:cluster"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,l.kt)("h3",{id:"get-the-information-of-the-leader-broker"},"Get the information of the leader broker"),(0,l.kt)("p",null,"Fetch the information of the leader broker, for example, the service url."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers leader-broker\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nBrokerInfo(serviceUrl=broker1.use.org.com:8080)\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/admin/v2/brokers/leaderBroker?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/leaderBroker?version=@pulsar:version_number@"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getLeaderBroker()\n\n")),(0,l.kt)("p",null,"For the detail of the code above, see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))),(0,l.kt)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,l.kt)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getOwnedNamespaes?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,l.kt)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,l.kt)("p",null,"One way to configure a Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/reference-terminology#broker"},"broker")," is to supply a ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/reference-configuration#broker"},"configuration")," when the broker is ",(0,l.kt)("a",{parentName:"p",href:"/ja/docs/reference-cli-tools#pulsar-broker"},"started up"),".\nBut since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,l.kt)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/ja/docs/pulsar-admin#brokers"},(0,l.kt)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,l.kt)("a",{parentName:"li",href:"reference-pulsar-admin"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,l.kt)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,l.kt)("li",{parentName:"ul"},"In the Pulsar admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,l.kt)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#brokers-update-dynamic-config"},(0,l.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,l.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,l.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/updateDynamicConfiguration?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/brokers/configuration/:configName/:configValue"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,l.kt)("h3",{id:"list-updated-values"},"List updated values"),(0,l.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getDynamicConfigurationName?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/configuration"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,l.kt)("h3",{id:"list-all"},"List all"),(0,l.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,l.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,l.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getAllDynamicConfigurations?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/brokers/configuration/values"))),(0,l.kt)(i.Z,{value:"JAVA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}k.isMDXComponent=!0}}]);