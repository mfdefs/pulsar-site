"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8658],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),o=n(67294),a=n(72389),i=n(79443);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(63616),u=n(86010),c="tabItem_vU9c";function p(e){var t,n,a,i=e.lazy,p=e.block,d=e.defaultValue,h=e.values,f=e.groupId,m=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),T=k.tabGroupChoices,S=k.setTabGroupChoices,N=(0,o.useState)(b),x=N[0],w=N[1],I=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=T[f];null!=C&&C!==x&&y.some((function(e){return e.value===C}))&&w(C)}var _=function(e){var t=e.currentTarget,n=I.indexOf(t),r=y[n].value;r!==x&&(P(t),w(r),null!=f&&S(f,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;n=I[r]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},m)},y.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:A,onFocus:_,onClick:_},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},39867:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(26396),s=n(58215),l=["components"],u={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},c=void 0,p={unversionedId:"concepts-proxy-sni-routing",id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",description:'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/concepts-proxy-sni-routing.md",sourceDirName:".",slug:"/concepts-proxy-sni-routing",permalink:"/ko/docs/next/concepts-proxy-sni-routing",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/concepts-proxy-sni-routing.md",tags:[],version:"current",frontMatter:{id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing"},sidebar:"docsSidebar",previous:{title:"Topic Compaction",permalink:"/ko/docs/next/concepts-topic-compaction"},next:{title:"Multiple advertised listeners",permalink:"/ko/docs/next/concepts-multiple-advertised-listeners"}},d=[{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",children:[{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",children:[],level:3},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",children:[],level:3},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",children:[],level:3}],level:2}],h={toc:d};function f(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'),(0,a.kt)("p",null,"The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,a.kt)("strong",{parentName:"p"},"SNI routing"),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."),(0,a.kt)("p",null,"Pulsar clients (Java, C++, Python) support ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing"},"SNI routing protocol"),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."),(0,a.kt)("h2",{id:"ats-sni-routing-in-pulsar"},"ATS-SNI Routing in Pulsar"),(0,a.kt)("p",null,"To support ",(0,a.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html"},"layer-4 SNI routing")," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."),(0,a.kt)("p",null,"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."),(0,a.kt)("p",null,"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."),(0,a.kt)("h3",{id:"set-up-ats-proxy-for-layer-4-sni-routing"},"Set up ATS Proxy for layer-4 SNI routing"),(0,a.kt)("p",null,"To support layer 4 SNI routing, you need to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"records.conf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl_server_name.conf")," files."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pulsar client SNI",src:n(1309).Z})),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html"},"records.config")," file is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/trafficserver/")," directory by default. The file lists configurable variables used by the ATS."),(0,a.kt)("p",null,"To configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"records.config")," files, complete the following steps."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update TLS port (",(0,a.kt)("inlineCode",{parentName:"li"},"http.server_ports"),") on which proxy listens, and update proxy certs (",(0,a.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.path")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl.client.cert.filename"),") to secure TLS tunneling."),(0,a.kt)("li",{parentName:"ol"},"Configure server ports (",(0,a.kt)("inlineCode",{parentName:"li"},"http.connect_ports"),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,a.kt)("inlineCode",{parentName:"li"},"4443")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"6651")," ports, add the brokers service port in the ",(0,a.kt)("inlineCode",{parentName:"li"},"http.connect_ports")," configuration.")),(0,a.kt)("p",null,"The following is an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.trafficserver.apache.org/en/8.0.x/admin-guide/files/ssl_server_name.yaml.en.html"},"ssl_server_name")," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,a.kt)("inlineCode",{parentName:"p"},"fqdn"),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."),(0,a.kt)("p",null,"The following example shows mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where request should be redirected. For example, if the client sends the SNI header ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-broker1"),", the proxy creates a TLS tunnel by redirecting request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar-broker1:6651")," service URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nserver_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n\n")),(0,a.kt)("p",null,"After you configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl_server_name.config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"records.config")," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."),(0,a.kt)("h3",{id:"configure-pulsar-client-with-sni-routing"},"Configure Pulsar-client with SNI routing"),(0,a.kt)("p",null,"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."),(0,a.kt)(i.Z,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nString brokerServiceUrl = \u201cpulsar+ssl://pulsar-broker-vip:6651/\u201d;\nString proxyUrl = \u201cpulsar+ssl://ats-proxy:443\u201d;\nClientBuilder clientBuilder = PulsarClient.builder()\n        .serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n\n'))),(0,a.kt)(s.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://ats-proxy:443", config);\n\n'))),(0,a.kt)(s.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://ats-proxy:443",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n\n')))),(0,a.kt)("h3",{id:"pulsar-geo-replication-with-sni-routing"},"Pulsar geo-replication with SNI routing"),(0,a.kt)("p",null,"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing.\n",(0,a.kt)("img",{alt:"Pulsar client SNI",src:n(49595).Z}),"\nIn this example, a Pulsar cluster is deployed into two separate regions, ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east"),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy.\n(a) Configure the cluster metadata for ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east")," broker service URL and ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east")," ATS proxy URL with SNI proxy-protocol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n--url http://east-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://east-ats-proxy:443\n\n")),(0,a.kt)("p",null,"(b) Configure the cluster metadata for ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west")," broker service URL and ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west")," ATS proxy URL with SNI proxy-protocol."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n--url http://west-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://west-ats-proxy:443\n\n")))}f.isMDXComponent=!0},1309:function(e,t,n){t.Z=n.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},49595:function(e,t,n){t.Z=n.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"}}]);