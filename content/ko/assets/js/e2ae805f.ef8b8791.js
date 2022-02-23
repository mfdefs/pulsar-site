"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9477],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return y}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),y=n,h=d["".concat(l,".").concat(y)]||d[y]||c[y]||i;return t?o.createElement(h,a(a({ref:r},u),{},{components:t})):o.createElement(h,a({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11658:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},l=void 0,p={unversionedId:"administration-proxy",id:"version-2.9.1/administration-proxy",title:"Pulsar proxy",description:"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-2.9.1/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/ko/docs/administration-proxy",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/administration-proxy.md",tags:[],version:"2.9.1",frontMatter:{id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Load balance",permalink:"/ko/docs/administration-load-balance"},next:{title:"Upgrade",permalink:"/ko/docs/administration-upgrade"}},u=[{value:"Configure the proxy",id:"configure-the-proxy",children:[{value:"Use service discovery",id:"use-service-discovery",children:[],level:3},{value:"Use broker URLs",id:"use-broker-urls",children:[],level:3}],level:2},{value:"Start the proxy",id:"start-the-proxy",children:[],level:2},{value:"Stop the proxy",id:"stop-the-proxy",children:[],level:2},{value:"Proxy frontends",id:"proxy-frontends",children:[],level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",children:[],level:2}],c={toc:u};function d(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, you can run Pulsar proxy."),(0,i.kt)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,i.kt)("p",null,"Before using the proxy, you need to configure it with the brokers addresses in the cluster. You can configure the proxy to connect directly to service discovery, or specify a broker URL in the configuration."),(0,i.kt)("h3",{id:"use-service-discovery"},"Use service discovery"),(0,i.kt)("p",null,"Pulsar uses ",(0,i.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nzookeeperServers=zk-0,zk-1,zk-2\nconfigurationStoreServers=zk-0:2184,zk-remote:2184\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,i.kt)("inlineCode",{parentName:"p"},"2181"),") and the configuration store client port (port ",(0,i.kt)("inlineCode",{parentName:"p"},"2184"),").")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper.")),(0,i.kt)("h3",{id:"use-broker-urls"},"Use broker URLs"),(0,i.kt)("p",null,"It is more secure to specify a URL to connect to the brokers."),(0,i.kt)("p",null,"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."),(0,i.kt)("p",null,"You can configure the broker URLs in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n")),(0,i.kt)("p",null,"If you use TLS, configure the broker URLs in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n")),(0,i.kt)("p",null,"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."),(0,i.kt)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,i.kt)("p",null,"Note that if you do not use functions, you do not need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,i.kt)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,i.kt)("p",null,"To start the proxy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can run multiple instances of the Pulsar proxy in a cluster.")),(0,i.kt)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,i.kt)("p",null,"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."),(0,i.kt)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,i.kt)("p",null,"You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,i.kt)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,i.kt)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,i.kt)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, the connection URL for clients is ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,i.kt)("p",null,"For more information on Proxy configuration, refer to ",(0,i.kt)("a",{parentName:"p",href:"/ko/docs/reference-configuration#pulsar-proxy"},"Pulsar proxy"),"."))}d.isMDXComponent=!0}}]);