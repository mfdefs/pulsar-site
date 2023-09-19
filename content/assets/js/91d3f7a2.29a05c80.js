"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96776],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>v});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),o=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(t),d=n,v=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(v,s(s({ref:a},p),{},{components:t})):r.createElement(v,s({ref:a},p))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=d;var u={};for(var i in a)hasOwnProperty.call(a,i)&&(u[i]=a[i]);u.originalType=e,u[c]="string"==typeof e?e:n,s[1]=u;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),n=t(86010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var r=t(87462),n=t(67294),l=t(86010),s=t(12466),u=t(16550),i=t(91980),o=t(67392),p=t(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const r=(0,u.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=m(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[i,o]=v({queryString:t,groupId:r}),[c,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,p.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),k=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),f(e)}),[o,f,l]),tabValues:l}}var k=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:u,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),r=o[t].value;r!==u&&(c(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},o.map((e=>{let{value:a,label:t,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":u===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function y(e){const a=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(b,(0,r.Z)({},e,a)),n.createElement(g,(0,r.Z)({},e,a)))}function N(e){const a=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(a)},e))}},98639:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var r=t(87462),n=(t(67294),t(3905)),l=t(74866),s=t(85162);const u={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",description:"Learn how to manage clusters using Pulsar CLI and admin APIs."},i=void 0,o={unversionedId:"admin-api-clusters",id:"admin-api-clusters",title:"Managing Clusters",description:"Learn how to manage clusters using Pulsar CLI and admin APIs.",source:"@site/docs/admin-api-clusters.md",sourceDirName:".",slug:"/admin-api-clusters",permalink:"/docs/next/admin-api-clusters",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-clusters.md",tags:[],version:"current",frontMatter:{id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters",description:"Learn how to manage clusters using Pulsar CLI and admin APIs."},sidebar:"docsSidebar",previous:{title:"Brokers",permalink:"/docs/next/admin-api-brokers"},next:{title:"Functions",permalink:"/docs/next/admin-api-functions"}},p={},c=[{value:"Provision cluster",id:"provision-cluster",level:2},{value:"Get cluster configuration",id:"get-cluster-configuration",level:2},{value:"Update cluster",id:"update-cluster",level:2},{value:"Update cluster configuration",id:"update-cluster-configuration",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3},{value:"List cluster",id:"list-cluster",level:2},{value:"Delete cluster",id:"delete-cluster",level:2}],m={toc:c},d="wrapper";function v(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This page only shows ",(0,n.kt)("strong",{parentName:"p"},"some frequently used operations"),". For the latest and complete information, see the ",(0,n.kt)("strong",{parentName:"p"},"reference docs")," below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"If you want to manage clusters..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/next/reference-cli-tools"},"Pulsar CLI")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///reference/#/next/pulsar-admin/"},"pulsar-admin"),", which lists all commands, flags, descriptions, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"clusters")," command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/next/admin-api-overview"},"Pulsar admin APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST API"),", which lists all parameters, responses, samples, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"/admin/v2/clusters")," endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/next/admin-api-overview"},"Pulsar admin APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/3.1.x/"},"Java admin API"),", which lists all classes, methods, descriptions, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"clusters")," method of the ",(0,n.kt)("inlineCode",{parentName:"td"},"PulsarAdmin")," object")))),(0,n.kt)("p",null,"You can perform the following operations on ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#cluster"},"clusters"),"."),(0,n.kt)("h2",{id:"provision-cluster"},"Provision cluster"),(0,n.kt)("p",null,"You can provision new clusters using the admin interface."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This operation requires superuser privileges.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When provisioning a new cluster, you need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/deploy-bare-metal#initialize-cluster-metadata"},"initialize cluster metadata"),". Cluster metadata can be initialized through the pulsar-admin CLI ",(0,n.kt)("strong",{parentName:"p"},"only"),". It cannot be performed via Pulsar admin APIs (REST API and Java admin API).")))),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"You can provision a new cluster using the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=create"},(0,n.kt)("inlineCode",{parentName:"a"},"create"))," subcommand. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters create cluster-1 \\\n    --url http://my-cluster.org.com:8080 \\\n    --broker-url pulsar://my-cluster.org.com:6650\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/createCluster"},"PUT /admin/v2/clusters/:cluster/createCluster"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n")))),(0,n.kt)("h2",{id:"get-cluster-configuration"},"Get cluster configuration"),(0,n.kt)("p",null,"You can fetch the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-configuration"},"configuration")," for an existing cluster at any time."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=get"},(0,n.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specify the name of the cluster. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters get cluster-1\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n'))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getCluster"},"GET /admin/v2/clusters/:cluster/getCluster"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.clusters().getCluster(clusterName);\n")))),(0,n.kt)("h2",{id:"update-cluster"},"Update cluster"),(0,n.kt)("h3",{id:"update-cluster-configuration"},"Update cluster configuration"),(0,n.kt)("p",null,"You can update the configuration for an existing cluster at any time."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=update"},(0,n.kt)("inlineCode",{parentName:"a"},"update"))," subcommand and specify new configuration values using flags."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters update cluster-1 \\\n    --url http://my-cluster.org.com:4081 \\\n    --broker-url pulsar://my-cluster.org.com:3350\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/updateCluster"},"POST /admin/v2/clusters/:cluster/updateCluster"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n")))),(0,n.kt)("h3",{id:"update-peer-cluster-data"},"Update peer-cluster data"),(0,n.kt)("p",null,"Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=update"},(0,n.kt)("inlineCode",{parentName:"a"},"update-peer-clusters"))," subcommand and specify the list of peer-cluster names."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/setPeerClusterNames"},"POST /admin/v2/clusters/:cluster/peers/setPeerClusterNames"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n")))),(0,n.kt)("h2",{id:"list-cluster"},"List cluster"),(0,n.kt)("p",null,"You can fetch a list of all clusters in a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=list"},(0,n.kt)("inlineCode",{parentName:"a"},"list"))," subcommand."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin clusters list\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cluster-1\ncluster-2\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getClusters"},"GET /admin/v2/clusters/getClusters"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.clusters().getClusters();\n")))),(0,n.kt)("h2",{id:"delete-cluster"},"Delete cluster"),(0,n.kt)("p",null,"Clusters can be deleted from a Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/reference-terminology#instance"},"instance"),"."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/clusters?id=delete"},(0,n.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the name of the cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pulsar-admin clusters delete cluster-1\n"))),(0,n.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/deleteCluster"},"DELETE /admin/v2/clusters/:cluster/deleteCluster"))),(0,n.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.clusters().deleteCluster(clusterName);\n")))))}v.isMDXComponent=!0}}]);