"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4561],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?n.createElement(f,i(i({ref:a},d),{},{components:t})):n.createElement(f,i({ref:a},d))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25021:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",sidebar_label:"GCS offloader"},s=void 0,p={unversionedId:"tiered-storage-gcs",id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the GCS offloader and using it with Pulsar.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tiered-storage-gcs.md",sourceDirName:".",slug:"/tiered-storage-gcs",permalink:"/zh-CN/docs/next/tiered-storage-gcs",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/tiered-storage-gcs.md",tags:[],version:"current",frontMatter:{id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",sidebar_label:"GCS offloader"},sidebar:"docsSidebar",previous:{title:"AWS S3 offloader",permalink:"/zh-CN/docs/next/tiered-storage-aws"},next:{title:"Filesystem offloader",permalink:"/zh-CN/docs/next/tiered-storage-filesystem"}},d=[{value:"Installation",id:"installation",children:[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Step",id:"step",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Configure GCS offloader driver",id:"configure-gcs-offloader-driver",children:[{value:"Bucket (required)",id:"bucket-required",children:[{value:"Example",id:"example",children:[],level:5}],level:4},{value:"Bucket region (required)",id:"bucket-region-required",children:[{value:"Example",id:"example-1",children:[],level:5}],level:4},{value:"Authentication (required)",id:"authentication-required",children:[{value:"Example",id:"example-2",children:[],level:5}],level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",children:[],level:4}],level:3},{value:"Configure GCS offloader to run automatically",id:"configure-gcs-offloader-to-run-automatically",children:[{value:"Example",id:"example-3",children:[],level:4}],level:3},{value:"Configure GCS offloader to run manually",id:"configure-gcs-offloader-to-run-manually",children:[{value:"Example",id:"example-4",children:[],level:4}],level:3}],level:2},{value:"Tutorial",id:"tutorial",children:[],level:2}],c={toc:d};function m(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This chapter guides you through every step of installing and configuring the GCS offloader and using it with Pulsar."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Follow the steps below to install the GCS offloader."),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar: 2.4.2 or later versions")),(0,r.kt)("h3",{id:"step"},"Step"),(0,r.kt)("p",null,"This example uses Pulsar 2.5.1."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download from the ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download from the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"download page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,r.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"As shown in the output, Pulsar uses ",(0,r.kt)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support GCS and AWS S3 for long term storage."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before offloading data from BookKeeper to GCS, you need to configure some properties of the GCS offloader driver."))),(0,r.kt)("p",null,"Besides, you can also configure the GCS offloader to run it automatically or trigger it manually."),(0,r.kt)("h3",{id:"configure-gcs-offloader-driver"},"Configure GCS offloader driver"),(0,r.kt)("p",null,"You can configure GCS offloader driver in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required")," configuration | Description | Example value |---|---|--- ",(0,r.kt)("inlineCode",{parentName:"p"},"managedLedgerOffloadDriver"),"|Offloader driver name, which is case-insensitive.|google-cloud-storage ",(0,r.kt)("inlineCode",{parentName:"p"},"offloadersDirectory"),"|Offloader directory|offloaders ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadBucket"),"|Bucket|pulsar-topic-offload ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadRegion"),"|Bucket region|europe-west3 ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile"),"|Authentication |/Users/user-name/Downloads/project-804d5e6a6f33.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.kt)("p",{parentName:"li"},"Optional configuration|Description|Example value |---|---|--- ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadReadBufferSizeInBytes"),"|Size of block read|1 MB ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes"),"|Size of block write|64 MB ",(0,r.kt)("inlineCode",{parentName:"p"},"managedLedgerMinLedgerRolloverTimeMinutes"),"|Minimum time between ledger rollover for a topic.|2 ",(0,r.kt)("inlineCode",{parentName:"p"},"managedLedgerMaxEntriesPerLedger"),"|The max number of entries to append to a ledger before triggering a rollover.|5000"))),(0,r.kt)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.kt)("p",null,"A bucket is a basic container that holds your data. Everything you store in GCS ",(0,r.kt)("strong",{parentName:"p"},"must")," be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you can not nest a bucket."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"This example names the bucket as ",(0,r.kt)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,r.kt)("h4",{id:"bucket-region-required"},"Bucket region (required)"),(0,r.kt)("p",null,"Bucket region is the region where a bucket is located. If a bucket region is not specified, the ",(0,r.kt)("strong",{parentName:"p"},"default")," region (",(0,r.kt)("inlineCode",{parentName:"p"},"us multi-regional location"),") is used."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information about bucket location, see ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/bucket-locations"},"here"),"."))),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This example sets the bucket region as ",(0,r.kt)("em",{parentName:"p"},"europe-west3"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ngcsManagedLedgerOffloadRegion=europe-west3\n\n")),(0,r.kt)("h4",{id:"authentication-required"},"Authentication (required)"),(0,r.kt)("p",null,"To enable a broker access GCS, you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," is a JSON file, containing GCS credentials of a service account."),(0,r.kt)("h5",{id:"example-2"},"Example"),(0,r.kt)("p",null,"To generate service account credentials or view the public credentials that you've already generated, follow the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service accounts page"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a project or create a new one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create service account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Create service account")," window, type a name for the service account and select ",(0,r.kt)("strong",{parentName:"p"},"Furnish a new private key"),"."),(0,r.kt)("p",{parentName:"li"},"If you want to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority"},"grant G Suite domain-wide authority")," to the service account, select ",(0,r.kt)("strong",{parentName:"p"},"Enable G Suite Domain-wide Delegation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure the service account you create has permission to operate GCS, you need to assign ",(0,r.kt)("strong",{parentName:"p"},"Storage Admin")," permission to your service account ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can get the following information and set this in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'\ngcsManagedLedgerOffloadServiceAccountKeyFile="/Users/user-name/Downloads/project-804d5e6a6f33.json"\n\n')),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"For more information about how to create ",(0,r.kt)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadServiceAccountKeyFile"),", see ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/googleapi/answer/6158849"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"For more information about Google Cloud IAM, see ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),".")))))),(0,r.kt)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,r.kt)("p",null,"You can configure the size of a request sent to or read from GCS in the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.kt)("p",null,"Configuration|Description |---|--- ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadReadBufferSizeInBytes"),"|Block size for each individual read when reading back data from GCS.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The ",(0,r.kt)("strong",{parentName:"p"},"default")," value is 1 MB. ",(0,r.kt)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes"),'|Maximum size of a "part" sent during a multipart upload to GCS. ',(0,r.kt)("br",null),(0,r.kt)("br",null),"It ",(0,r.kt)("strong",{parentName:"p"},"can not")," be smaller than 5 MB. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The ",(0,r.kt)("strong",{parentName:"p"},"default")," value is 64 MB."),(0,r.kt)("h3",{id:"configure-gcs-offloader-to-run-automatically"},"Configure GCS offloader to run automatically"),(0,r.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offload operation is triggered automatically."),(0,r.kt)("p",null,"Threshold value|Action |---|---"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"0 | It triggers the offloading operation if the topic storage reaches its threshold. = 0|It causes a broker to offload data as soon as possible. < 0 |It disables automatic offloading operation.")),(0,r.kt)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,r.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,r.kt)("p",null,"The offload configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/2.6.0-SNAPSHOT/#-em-set-offload-policies-em-"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"This example sets the GCS offloader threshold size to 10 MB using pulsar-admin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/pulsar-admin#set-offload-threshold"},"here"),"."))),(0,r.kt)("h3",{id:"configure-gcs-offloader-to-run-manually"},"Configure GCS offloader to run manually"),(0,r.kt)("p",null,"For individual topics, you can trigger GCS offloader manually using one of the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin)."),(0,r.kt)("p",{parentName:"li"},"To trigger the GCS via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to GCS until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example triggers the GCS offloader to run manually using pulsar-admin with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload (topic-name) (threshold)"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload persistent://my-tenant/my-namespace/topic1 10M\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/pulsar-admin#offload"},"here"),".")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example checks the GCS offloader status using pulsar-admin with the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,r.kt)("p",{parentName:"li"},"To wait for GCS to complete the job, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,r.kt)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/pulsar-admin#offload-status"},"here"),"."))))),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"For the complete and step-by-step instructions on how to use the GCS offloader with Pulsar, see ",(0,r.kt)("a",{parentName:"p",href:"https://hub.streamnative.io/offloaders/gcs/2.5.1#usage"},"here"),"."))}m.isMDXComponent=!0}}]);