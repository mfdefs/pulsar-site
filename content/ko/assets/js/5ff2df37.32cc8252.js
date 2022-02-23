"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2682],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,v=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?t.createElement(v,o(o({ref:n},m),{},{components:a})):t.createElement(v,o({ref:n},m))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(87462),r=a(67294),s=a(72389),o=a(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(63616),p=a(86010),m="tabItem_vU9c";function u(e){var n,a,s,o=e.lazy,u=e.block,c=e.defaultValue,d=e.values,v=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(n=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(s=f[0])?void 0:s.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),y=N.tabGroupChoices,T=N.setTabGroupChoices,w=(0,r.useState)(g),C=w[0],E=w[1],P=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=y[v];null!=I&&I!==C&&h.some((function(e){return e.value===I}))&&E(I)}var O=function(e){var n=e.currentTarget,a=P.indexOf(n),t=h[a].value;t!==C&&(x(n),E(t),null!=v&&T(v,t))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=P.indexOf(e.currentTarget)+1;a=P[t]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;a=P[r]||P[P.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},k)},h.map((function(e){var n=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return P.push(e)},onKeyDown:Z,onFocus:O,onClick:O},s,{className:(0,p.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":C===n})}),null!=a?a:n)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,s.Z)();return r.createElement(u,(0,t.Z)({key:String(n)},e))}},609:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return c},default:function(){return v}});var t=a(87462),r=a(63366),s=(a(67294),a(3905)),o=a(26396),i=a(58215),l=["components"],p={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions"},m=void 0,u={unversionedId:"admin-api-permissions",id:"admin-api-permissions",title:"Managing permissions",description:"Important",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/admin-api-permissions.md",sourceDirName:".",slug:"/admin-api-permissions",permalink:"/ko/docs/next/admin-api-permissions",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/admin-api-permissions.md",tags:[],version:"current",frontMatter:{id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions"},sidebar:"docsSidebar",previous:{title:"Namespaces",permalink:"/ko/docs/next/admin-api-namespaces"},next:{title:"Topics",permalink:"/ko/docs/next/admin-api-topics"}},c=[{value:"Grant permissions",id:"grant-permissions",children:[],level:2},{value:"Get permissions",id:"get-permissions",children:[],level:2},{value:"Revoke permissions",id:"revoke-permissions",children:[],level:2}],d={toc:c};function v(e){var n=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important")),(0,s.kt)("p",{parentName:"blockquote"},"This page only shows ",(0,s.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/"},"Java admin API doc"),".")))),(0,s.kt)("p",null,"Pulsar allows you to grant namespace-level or topic-level permission to users."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you grant a namespace-level permission to a user, then the user can access all the topics under the namespace.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If you grant a topic-level permission to a user, then the user can access only the topic."))),(0,s.kt)("p",null,"The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,s.kt)("a",{parentName:"p",href:"/ko/docs/next/admin-api-topics/#grant-permission"},"manage topics"),"."),(0,s.kt)("h2",{id:"grant-permissions"},"Grant permissions"),(0,s.kt)("p",null,"You can grant permissions to specific roles for lists of operations such as ",(0,s.kt)("inlineCode",{parentName:"p"},"produce")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"consume"),"."),(0,s.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#grant-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"grant-permission"))," subcommand and specify a namespace, actions using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--actions")," flag, and a role using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n  --actions produce,consume \\\n  --role admin10\n\n")),(0,s.kt)("p",null,"Wildcard authorization can be performed when ",(0,s.kt)("inlineCode",{parentName:"p"},"authorizationAllowWildcardsMatching")," is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,s.kt)("p",null,"e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.role.*'\n\n")),(0,s.kt)("p",null,"Then, roles ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.2"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.foo"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.role.bar"),", etc. can produce and consume.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role '*.role.my'\n\n")),(0,s.kt)("p",null,"Then, roles ",(0,s.kt)("inlineCode",{parentName:"p"},"1.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"foo.role.my"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"bar.role.my"),", etc. can produce and consume."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": A wildcard matching works at ",(0,s.kt)("strong",{parentName:"p"},"the beginning or end of the role name only"),"."),(0,s.kt)("p",null,"e.g."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.*.role'\n\n")),(0,s.kt)("p",null,"In this case, only the role ",(0,s.kt)("inlineCode",{parentName:"p"},"my.*.role")," has permissions.",(0,s.kt)("br",{parentName:"p"}),"\n","Roles ",(0,s.kt)("inlineCode",{parentName:"p"},"my.1.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.2.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.foo.role"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my.bar.role"),", etc. ",(0,s.kt)("strong",{parentName:"p"},"cannot")," produce and consume.")),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/grantPermissionOnNamespace?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n\n")))),(0,s.kt)("h2",{id:"get-permissions"},"Get permissions"),(0,s.kt)("p",null,"You can see which permissions have been granted to which roles in a namespace."),(0,s.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"reference-pulsar-admin#permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"permissions"))," subcommand and specify a namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces permissions test-tenant/ns1\n{\n  "admin10": [\n    "produce",\n    "consume"\n  ]\n}\n\n'))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getPermissions?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/permissions"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPermissions(namespace);\n\n")))),(0,s.kt)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,s.kt)("p",null,"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."),(0,s.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("p",null,"Use the ",(0,s.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#revoke-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"revoke-permission"))," subcommand and specify a namespace and a role using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces revoke-permission test-tenant/ns1 \\\n  --role admin10\n\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/revokePermissionsOnNamespace?version=@pulsar:version_number@&apiVersion=v2"},"DELETE /admin/v2/namespaces/:tenant/:namespace/permissions/:role"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().revokePermissionsOnNamespace(namespace, role);\n\n")))))}v.isMDXComponent=!0}}]);