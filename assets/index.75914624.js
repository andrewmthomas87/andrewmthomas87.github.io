import{j as i,B as t,a as e,C as y,P as k,S as l,T as c,u as g,b as v,L as F,c as G,d as J,e as j,f as z,g as E,h as S,i as D,A as x,k as C,I as A,G as N,l as O,m as W,D as Q,r as H,n as U,o as q,p as V,R as K,q as X}from"./vendor.ec94c6ea.js";const _=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function d(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=d(r);fetch(r.href,s)}};_();var $="/assets/portrait.95a08ac6.jpg";const Y=`
Hi! My name is Andrew Thomas. I'm a software developer primarily experienced in full-stack development. I grew up in Longmont, Colorado before attending Northwestern University in Evanston, Illinois, where I studied Computer Science and engineering. Now, I'm back in Boulder, CO working as a software engineer for The Toro Company.
I've been writing code and working with robots for a while now and I love it. I've worked for a couple tech startups where I've developed several applications from the ground up. With company growth, I've spent time integrating new developers, which has sparked my interest in mentoring. I mentor a competetive high school robotics team and led a tech-focused student group.
When I get the chance, I snowboard, play hockey, cruise around on my electric skateboard, or drive about soaking in Colorado's beauty.
`,Z=Y.split(`
`).filter(o=>!!o),ee=()=>i(t,{pb:3,children:[i(t,{px:1,py:3,fontFamily:"'Fira Code', monospace",textAlign:"center",children:["The best way to predict the future is to invent it ",e("span",{style:{opacity:.75},children:"// Alan Kay"})]}),e(y,{maxWidth:"md",sx:{px:1,py:2},children:e(k,{sx:{p:{xs:3,md:4},bgcolor:"#18191d"},children:i(l,{direction:{xs:"column",md:"row"},spacing:4,alignItems:{xs:"center",md:"flex-start"},children:[e(t,{width:"20em",height:"20em",flexShrink:0,sx:{backgroundImage:`url(${$})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),e(t,{children:Z.map((o,a)=>e(c,{variant:"body1",paragraph:!0,children:o},a))})]})})})]});function I(o){return o.trim().split(`

`).map(d=>{const n=d.split(`
`),r=n[0].split(" - "),[s,p]=r[0].split("("),b=r[1],f=r[2],[M,B]=n[1].split(" - "),h=[];let m=[];for(let u=2;u<n.length;u++)n[u][0]==="*"?m.push(n[u].substr(2)):(h.push(m),h.push(n[u]),m=[]);return m.length>0&&h.push(m),{title:s,subtitle:p,url:M,description:B,time:b,role:f,blocks:h}})}const te=I(`
The Toro Company (by acquisition) - March 2021 \u2014 Current - Specialist I
https://www.thetorocompany.com/ - a leading worldwide provider of innovative solutions for the outdoor environment including turf and landscape maintenance, snow and ice management, underground utility construction, rental and specialty construction, and irrigation and outdoor lighting solutions.
* Researched and implemented authentication, authorization, and accounting (AAA) system to provide single sign-on (SSO) and consolidate AAA among company applications using Go, Java, AWS Cognito, OAuth 2.0, Casbin, and Redis.
* Built MVP data ingestion and visualization application; coordinated with hardware team and customer to validate.
* Developed web boilerplate and common packages using React, RxJS, MUI, Vite, Jest, Testing Library, and Storybook.

Left Hand Robotics (startup) - August 2020 \u2014 March 2021 - Software Engineer
https://lefthandrobotics.com - founded in 2016 in Longmont, Colorado, Left Hand Robotics designs commercial-class smart robots that work autonomously, allowing property managers, municipalities and contractors alike to become more efficient and do more with existing resources.
* Built single-page application to ingest and visualize streams of sensor data, including interactive visualization builder interfaces for spatial-temporal data using deck.gl, React-vis, styled-components, mapbox, and RxJS.
* Developed API microservices to manage and query enriched sensor data using Go, Auth0, PostgreSQL, and PostGIS.
* Built end-to-end pipeline to stream robot camera feeds to a dashboard with AWS Kinesis Video, GStreamer, and C++.

CBOE Global Markets - June 2020 \u2014 August 2020 - Software Engineer Summer Intern
https://www.cboe.com/ - is an American company that owns the Chicago Board Options Exchange and the stock exchange operator BATS Global Markets.
* Coordinated with research team to learn methodology of Cboe S&P 500 Covered Combo (CMBO) Index.
* Implemented daily and roll day calculation for CMBO using Java, Apache Kafka, Hazelcast, and internal frameworks.
* Developed unit tests (JUnit) to verify calculation correctness and behavior tests (Cucumber) to verify integration.

Left Hand Robotics (startup) - June 2019 \u2014 September 2019 - Software Developer, Intern
https://lefthandrobotics.com - founded in 2016 in Longmont, Colorado, Left Hand Robotics designs commercial-class smart robots that work autonomously, allowing property managers, municipalities and contractors alike to become more efficient and do more with existing resources.
* Developed storage mechanism, API, models, and data migration tooling for enhanced object storage and mutation system to solve major server and network bottleneck using Google Protocol Buffers and Java.
* Built client-side library for reactive consumption, in-place mutation, and upload of Google Protocol Buffer objects.
* Redeveloped GPS path editing tools to compute mutations on client using React, MobX, Turf.js, and Google Maps API.
June 2018 \u2014 September 2018
* Redesigned two primary frontends to meet new customer needs and integrate the Ant Design framework for React.
* Researched area coverage and cell decomposition techniques and built POC planning algorithm using Go and Python.
* Developed complex GPS path editing web interface and server API for persistence and advanced geometric mutation.
* Created robot monitoring page to remotely control robots and visualize real-time status and geospatial data using React, TypeScript, MQTT over WebSocket, Google Maps API, and MobX.
May 2017 \u2014 March 2018
* Built complex robot operations center web application for managing inventory, collecting GPS path data, robot tasks, and reports, for customer and internal support usage, utilizing TypeScript, React, MobX, LESS, and webpack.
* Developed registration, token-based authentication, and RBAC authorization systems using Java, bcrypt, and JWT.
* Implemented internal message consumption and routing system on top of RabbitMQ using custom message protocol for HTTP and WebSocket requests to automate communication between microservices using Java and Grizzly NIO.
* Built API for fetching object model descriptors, object data, and links between objects using the Java Reflection API.

Workday - Summer 2016 - GW Software Engineering Intern
https://www.workday.com/ - is an American on\u2011demand (cloud-based) financial management and human capital management software vendor.
* Worked closely with senior developer to build real-time, collaborative document editing web application.
* Implemented operational transformation algorithm to correctly and efficiently reconcile concurrent client edits.
* Demoed minimum viable product to product developers and senior management executives and discussed next steps.
Summer 2015
* Refactored core service classes from CoffeeScript to modern JavaScript and performed testing to ensure correctness.
* Collaborated with junior developer to refactor and rework reusable modal wizard component using ES2015.
* Debugged and implemented fixes for user-reported bugs for bi-weekly product releases.
`),oe=I(`
FRC 1619 Up-A-Creek Robotics - August 2020 \u2014 Current - App Software Mentor
https://www.team1619.org - a high school FIRST Robotics Competition team.
* Mentor the app software team, responsible for developing web and mobile applications for data collection and analysis at robotics events. Teach high school students basic development skills like git and bash as well as full stack development using React, React Native, and Node.js.

EPIC (Northwestern club) - September 2017 \u2014 June 2018 - Tech Team Co-director
https://epicnorthwestern.com - Northwestern's undergraduate entrepreneurship club.
* Co-directed Tech team: ran team meetings, taught software development technologies including React, Node.js, pugjs, and Flask, and oversaw and provided mentorship for student projects.
* Led .io, a program that aimed to provide students an experience comparable to that of working in a software-oriented startup while in a forgiving environment with an emphasis on learning (https://andrewt.io/.io).

FRC 1619 Up-A-Creek Robotics - January 2014 \u2014 September 2017 - Software Lead
https://www.team1619.org - a high school FIRST Robotics Competition team.
* Led development of software for several competition robots, developing effective teleoperation controls and complex autonomous routines (https://github.com/Team1619).
* Taught students of various skill levels Java programming, basic control theory, path planning algorithms, trajectory generation for motion profiling, computer vision, and object-oriented design including S.O.L.I.D. principles.
* Taught Java programming, web development, and computer security to middle schoolers in team summer camps.
`),ne=()=>i(t,{p:3,pb:4,children:[e(c,{variant:"h1",component:"h2",fontFamily:"'Bebas Neue', cursive",textAlign:"center",children:"My Experience"}),i(t,{px:1,pt:2,pb:3,fontFamily:"'Fira Code', monospace",textAlign:"center",children:["Talk is cheap. Show me the code. ",e("span",{style:{opacity:.75},children:"// Linus Torvalds"})]}),e(y,{maxWidth:"md",children:e(k,{sx:{p:{xs:3,md:4},bgcolor:"#18191d"},children:i(l,{direction:"column",spacing:5,children:[e(R,{title:"Professional",experiences:te}),e(R,{title:"Extracurricular",experiences:oe})]})})})]}),R=({title:o,experiences:a})=>{const d=g();return i(t,{children:[e(t,{mb:1,children:e(v,{label:o})}),a.map((n,r)=>i(t,{mb:3,children:[i(c,{variant:"h5",gutterBottom:!0,children:[n.title,n.subtitle?" ":null,n.subtitle?i(t,{component:"span",fontWeight:300,fontSize:"0.65em",sx:{verticalAlign:"middle"},children:["(",n.subtitle]}):null]}),e(t,{mb:1,children:i(c,{variant:"body2",children:[e(F,{color:d.palette.primary.light,href:n.url,target:"_blank",children:n.url})," - ",n.description]})}),i(l,{direction:"row",spacing:2,children:[e(c,{variant:"h6",children:n.role}),e(t,{flex:1}),e(c,{variant:"subtitle1",children:n.time})]}),n.blocks.map((s,p)=>typeof s=="string"?e(c,{variant:"subtitle1",textAlign:"right",children:s},p):e(G,{dense:!0,children:s.map((b,f)=>i(J,{children:[e(j,{children:e(z,{sx:{fontSize:"0.75rem"}})}),e(E,{children:b})]},f))},p))]},r))]})},ie=()=>{const o=g(),a=S(o.breakpoints.up("md"));return e(t,{p:3,bgcolor:o.palette.primary.main,children:i(l,{direction:{xs:"column",md:"row"},spacing:{xs:1,md:3},justifyContent:"center",alignItems:"center",divider:a?e(D,{sx:{fontSize:"0.5rem"}}):void 0,children:[i(c,{variant:"subtitle2",fontFamily:"'Fira Code',monospace",children:["1975 30",e("sup",{children:"th"})," St, Boulder, CO 80301"]}),e(c,{variant:"subtitle2",fontFamily:"'Fira Code',monospace",children:"(303) 598-9467"}),e(c,{variant:"subtitle2",fontFamily:"'Fira Code',monospace",children:"andrewthomas2021@u.northwestern.edu"})]})})},ae=()=>{const o=g(),a=S(o.breakpoints.up("xs"));return e(x,{position:"fixed",elevation:0,children:i(C,{variant:"dense",children:[e(c,{variant:"h5",fontFamily:"'Bebas Neue', cursive",children:a?"Andrew Thomas":"AT"}),e(t,{flex:1}),i(l,{direction:"row",spacing:{xs:2,sm:3},alignItems:"center",children:[i(l,{direction:"row",spacing:{xs:.5,sm:1},children:[e(A,{color:"inherit",href:"https://github.com/andrewmthomas87/",target:"_blank",children:e(N,{fontSize:"small"})}),e(A,{color:"inherit",href:"https://www.linkedin.com/in/andrew-t-97662796/",target:"_blank",children:e(O,{fontSize:"small"})})]}),e(W,{variant:"contained",disableElevation:!0,href:"/Andrew-Thomas-Resume-Full.pdf",target:"_blank",size:"small",children:"View resume"})]})]})})},re=`
Languages: TypeScript, JavaScript, Java, Go (Golang), C++, Dart, Python, Racket, SQL
Web: React, Svelte, MobX, RxJS, Redux, Google Maps, mapbox, deck.gl, React-vis, styled-components, LESS
Mobile: Flutter, React Native, Adobe PhoneGap
Server: Gin, Node.js, Express, gqlgen, GraphQL Java
Authn/authz: bcrypt, OAuth 2.0, JWT, Auth0, AWS Cognito, RBAC, ACL, Casbin
Network: HTTP, WebSocket, JSON, Protocol Buffers, GraphQL, MQTT, RabbitMQ, RPC
Storage: MySQL, PostgreSQL, PostGIS, Redis, Firebase
Tools: webpack, npm, bash, git, Babel, Docker, Figma
AWS: EC2, Lambda, S3, RDS, Cognito, ECR, API Gateway
Testing: Jest, Mocha, Storybook, JUnit, Cucumber
Robotics: OpenCV, path planning, motion profiling, localization, feedback loops
`,w=re.split(`
`).filter(o=>!!o).map(o=>{const a=o.split(": ");return{title:a[0],values:a[1].split(", ")}}),T=Math.ceil(w.length/2),L=w.slice(0,T),P=w.slice(T),se=()=>{const o=g();return i(t,{bgcolor:o.palette.primary.main,children:[e(c,{variant:"h1",component:"h2",pt:3,fontFamily:"'Bebas Neue', cursive",textAlign:"center",children:"My Skills"}),i(t,{px:1,pt:2,pb:3,fontFamily:"'Fira Code', monospace",textAlign:"center",children:["Computer Science is no more about computers than astronomy is about telescopes"," ",e("span",{style:{opacity:.75},children:"// Edsger W. Dijkstra"})]}),e(t,{width:1,overflow:"auto",children:e(l,{direction:"row",children:i(t,{display:"flex",flexDirection:"column",width:"fit-content",px:3,pb:4,bgcolor:o.palette.primary.dark,children:[e(l,{direction:"row",spacing:3,p:3,pb:1,children:L.map(a=>e(t,{width:"15em",children:e(c,{variant:"h6",fontFamily:"'Fira Code', monospace",children:e(t,{component:"span",pb:1,borderBottom:`1px solid ${o.palette.primary.light}`,children:a.title})})}))}),e(l,{direction:"row",spacing:3,p:3,children:L.map(a=>e(t,{width:"15em",children:a.values.map((d,n)=>e(t,{display:"inline-block",pr:1,pb:1,children:e(v,{label:d})},n))}))}),e(t,{py:1,children:e(Q,{})}),e(l,{direction:"row",spacing:3,p:3,pb:1,children:P.map(a=>e(t,{width:"15em",children:e(c,{variant:"h6",fontFamily:"'Fira Code', monospace",children:e(t,{component:"span",pb:1,borderBottom:`1px solid ${o.palette.primary.light}`,children:a.title})})}))}),e(l,{direction:"row",spacing:3,p:3,children:P.map(a=>e(t,{width:"15em",children:a.values.map((d,n)=>e(t,{display:"inline-block",pr:1,pb:1,children:e(v,{label:d})},n))}))})]})})})]})};var ce="/assets/andrew.8d74b5e9.jpg";const le=()=>i(t,{height:"100vh",display:"flex",flexDirection:"column",alignItems:"stretch",children:[e(t,{visibility:"hidden",children:e(x,{position:"static",children:e(C,{variant:"dense"})})}),e(t,{flex:1,position:"relative",sx:{backgroundImage:`url(${ce})`,backgroundSize:"cover",backgroundPosition:"60% 57.5%"},children:i(c,{variant:"h1",color:"white",position:"absolute",bottom:"0.75em",left:"0.75em",fontFamily:"'Bebas Neue', cursive",fontSize:"8em",letterSpacing:"0",lineHeight:"0.875em",children:["Andrew",e("br",{}),"Thomas"]})})]}),de=()=>{const o=H.exports.useMemo(()=>U({palette:{mode:"dark",primary:{main:"#303f9f"}}}),[]);return i(q,{theme:o,children:[e(V,{}),e(ae,{}),e(le,{}),e(ee,{}),e(se,{}),e(ne,{}),e(ie,{})]})};K.render(e(X.StrictMode,{children:e(de,{})}),document.getElementById("root"));
