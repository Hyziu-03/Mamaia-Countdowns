(this["webpackJsonpmamaia-countdowns"]=this["webpackJsonpmamaia-countdowns"]||[]).push([[0],{54:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(33),s=n.n(c),r=n(29),o=n(15),i=(n(54),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))}),l=n(12),d=n(0),u=n(1),h=n(39),m=n.n(h),j=n(45),b=n(48),p=n(32),f=n(27),x=n(37),g=n(7),v=window.innerWidth<1100?"Mamaia":"Mamaia Countdowns",O=function(){return Object(g.jsxs)("h1",{onClick:x.a,className:"name hover touch-target",tabIndex:"0",children:[Object(g.jsx)("span",{className:"icon",children:"event_note"}),"\xa0",v,"\u2122"]})},w=function(e){return Object(g.jsxs)("form",{action:"",method:"",className:"form article",id:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("input",{type:"text",name:"name",id:"text-input",className:"input touch-target text-input",placeholder:e.firstInput,maxLength:"20"}),Object(g.jsx)("input",{type:e.secondInputType,name:"email",id:"email",className:"input touch-target email",placeholder:e.secondInput,maxLength:"40"}),Object(g.jsx)("textarea",{placeholder:e.thirdInput,className:"input textarea touch-target message",id:"message",name:"message",maxLength:40})]})},y=function(e){return Object(g.jsx)("button",{className:"btn hover touch-target",tabIndex:"-1",id:e.id,children:e.message})},N=Object(j.a)({apiKey:"AIzaSyCmNk2q3k4i3dV9ZG2ZfZeTKnum70UaVas",authDomain:"mamaia-countdowns.firebaseapp.com",projectId:"mamaia-countdowns",storageBucket:"mamaia-countdowns.appspot.com",messagingSenderId:"616823378468",appId:"1:616823378468:web:dc9e7312d9c95f94b1feb1",measurementId:"G-NZJKV7EEZM"}),I=(Object(b.a)(N),Object(f.d)(N)),k=Object(p.b)();k.languageCode="pl";var C=null,E=function(){try{return null===k.currentUser?void 0:k.currentUser.uid}catch(e){console.error(e)}},z=function(){try{if(null===k.currentUser){var e=new p.a;Object(p.d)(k,e)}}catch(t){console.error(t)}},T=function(e){try{var t=document.getElementById("icon");"done"===e?(t.classList.add("done"),t.classList.remove("close"),t.innerText="done"):(t.classList.add("close"),t.classList.remove("done"),t.innerText="close")}catch(n){console.error(n)}},B=function(){var e=Object(u.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:C=e.sent,"close"===(n=t?"done":"close")&&z(),T(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n,a;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=m.a.sanitize(document.getElementsByClassName("text-input")[0].value),n=m.a.sanitize(document.getElementsByClassName("email")[0].value),a=m.a.sanitize(document.getElementsByClassName("message")[0].value),e.next=6,Object(f.a)(Object(f.b)(I,C),{name:t,date:n,description:a});case 6:e.sent,alert("Your event has been saved!"),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),L=function(){try{var e=""===document.getElementsByClassName("email")[0].value,t=""===document.getElementsByClassName("text-input")[0].value,n=""===document.getElementsByClassName("message")[0].value;e||t||n?alert("Please, fill in all the information requested."):H()}catch(a){throw new Error(a)}},M=function(){var e=Object(u.a)(Object(d.a)().mark((function e(){var t,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(f.e)(Object(f.b)(I,C)),n=[],e.next=5,Object(f.c)(t);case 5:return e.sent.forEach((function(e){return n.push(e.data())})),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),S=0,D=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=function(){try{var e=new Date,t=e.getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;return n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t}catch(a){console.error(a)}},o=function(){try{var e=new Date(r());return(new Date(function(){try{return n[S].date}catch(e){console.error(e)}}())-e)/864e5}catch(t){console.error(t)}},i=function(){try{if(!("Notification"in window))return;var e="".concat(n[S].name," is happening today!"),t={body:"Here is what you said about it: ".concat(n[S].description)};Notification.requestPermission().then((function(n){"granted"===n&&new Notification(e,t)}))}catch(a){console.error(a)}},d=function(){try{var e=document.getElementById("events-name"),t=document.getElementById("events-date"),a=document.getElementById("events-description"),c=document.getElementById("events-distance"),s=!(null===e||null===t||null===a||null===c),r=void 0!==n[S];s&&r&&(e.innerHTML=n[S].name,t.innerHTML=n[S].date,c.innerHTML=function(){try{var e=o();return 0===e?(i(),"This event is happening today!"):e>0?"This event is ".concat(e," days from today!"):"This event happened ".concat(Math.abs(e)," days ago!")}catch(t){console.error(t)}}(),a.innerHTML=n[S].description)}catch(l){console.error(l)}};Object(a.useEffect)((function(){return d()}),[n]);var u=Object(g.jsxs)("div",{className:"arrow-navigation-container",children:[Object(g.jsx)("button",{className:"arrow-btn",onClick:function(){try{var e=n.length-1,t=S-=1,a=!1;t<0&&(a=!0),S=a?e:t}catch(c){console.error(c)}},children:Object(g.jsx)("span",{className:"icon arrow",children:"arrow_back"})}),Object(g.jsx)("button",{className:"arrow-btn",onClick:function(){try{var e=n.length-1,t=S+=1,a=!1;t>e&&(a=!0),S=a?0:t}catch(c){console.error(c)}},children:Object(g.jsx)("span",{className:"icon arrow",children:"arrow_forward"})})]});Object(a.useEffect)((function(){try{document.querySelector("#icon").click()}catch(e){console.error(e)}}),[]),Object(p.c)(k,(function(e){try{e&&document.querySelector("#icon").click()}catch(t){console.error(t)}}));var h=(new Date).getFullYear();return Object(g.jsxs)("section",{className:"mobile-container",children:[Object(g.jsxs)("header",{className:"fixed-header",children:[Object(g.jsx)(O,{onClick:x.a}),Object(g.jsx)("div",{className:"extra-information",children:Object(g.jsx)("span",{onClick:B,id:"icon",className:"indicator icon close",children:"close"})})]}),Object(g.jsxs)("main",{className:"mobile-content",children:[Object(g.jsxs)("article",{className:"contact-form-container",children:[Object(g.jsx)(w,{firstInput:"What is this event?",secondInput:"When does it start?",secondInputType:"date",thirdInput:"What additional information do you have?"}),Object(g.jsx)("span",{onClick:L,children:Object(g.jsx)(y,{message:"Set a Countdown!",id:"app-form-btn"})})]}),Object(g.jsxs)("article",{className:"saved-countdowns",children:[Object(g.jsx)("h1",{className:"heading",id:"events-name",children:"Christmas"}),Object(g.jsxs)("p",{className:"description",id:"events-date",children:["This event will happen on ",h,"-12-25"]}),Object(g.jsx)("p",{className:"description",id:"events-distance",children:function(){try{var e=new Date(r()),t=(new Date(e.getFullYear(),11,25)-e)/864e5;return 0===t?(i(),"Christmas is happening today!"):t>0?"It is ".concat(Math.round(t)," days from today!"):"It happened ".concat(Math.abs(t)," days ago!")}catch(n){console.error(n)}}()}),Object(g.jsx)("p",{className:"description",id:"events-description",children:"A time for living, a time for believing"}),Object(g.jsx)("section",{className:"btn-container",onClick:function(){M().then((function(e){return c(e)})).catch((function(e){return console.error(e)}));var e=document.getElementsByClassName("btn-container")[0];s.a.render(u,e)},children:Object(g.jsx)(y,{message:"Pull data from the database "})})]})]})]})},F=function(){return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)(O,{}),Object(g.jsx)(r.b,{to:"set-countdown",children:Object(g.jsx)(y,{message:"Set a Countdown!"})})]})},A=function(e){return Object(g.jsxs)("article",{className:"introduction",children:[Object(g.jsxs)("section",{className:"text-section",children:[Object(g.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(g.jsx)("p",{className:"description",tabIndex:"0",children:e.description})]}),Object(g.jsx)(r.b,{to:"set-countdown",children:Object(g.jsx)(y,{message:"Set a Countdown!"})})]})},P=n.p+"static/media/calendar.92ea77b2.svg",Y=function(){return Object(g.jsxs)("article",{className:"article",children:[Object(g.jsx)(A,{heading:"Can\u2019t remember dates?",description:"Mamaia Countdowns\u2122 is a tool to ease your life. You can set countdowns for any event you want. No matter if it\u2019s Christmas or an important exam to take!"}),Object(g.jsx)("img",{src:P,alt:"Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon.",className:"calendar"})]})},q=n.p+"static/media/work.5c2e2b5e.svg",U=function(e){return Object(g.jsxs)("article",{className:e.className,children:[Object(g.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(g.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(g.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(g.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]})},W=function(){return Object(g.jsxs)("article",{className:"article",children:[Object(g.jsx)(U,{heading:"How to use it? ",description:["This tools\u2019 purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its\u2019 date and a couple more options.","These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won\u2019t miss them. Never!","All your countdowns will be stored in the memory of your device, so please don\u2019t clear it for this app, as you might lose all your work."],className:"explanation"}),Object(g.jsx)("img",{src:q,alt:"Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side.",className:"work"})]})},Z=n.p+"static/media/creator.81878575.webp",_=function(){return Object(g.jsxs)("article",{className:"article",children:[Object(g.jsx)(U,{heading:"Who is the creator?",description:["Hello, I\u2019m Szymon Hyziak - 19 years high school graduate from Poland. I\u2019ve been developing websites for over a year and I\u2019m thrilled to show you another one","I\u2019ve got a background in IT, that\u2019s related to my high school. I also fancy UI Design and photography.","If you want to contact me work-wise don\u2019t hesitate to reach me through LinkedIn. All the useful links are below!"],className:"biography"}),Object(g.jsx)("img",{src:Z,alt:"Headshot of the creator - Szymon Hyziak.",className:"creator"})]})},J=function(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"brand-icon touch-target",children:Object(g.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",fill:"rgb(42, 42, 42)"})})},K=function(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"brand-icon touch-target",children:Object(g.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",fill:"rgb(42, 42, 42)"})})},V=function(){return Object(g.jsxs)("footer",{className:"footer",children:[Object(g.jsx)("p",{className:"copyright",tabIndex:"0",children:'This app has been created from scratch by Szymon Hyziak and therefore is upon copyright of its" owner.'}),Object(g.jsxs)("section",{className:"contact-links",children:[Object(g.jsx)("a",{href:"https://www.linkedin.com/in/szymon-hyziak/",target:"_blank",rel:"noreferrer noopener",children:Object(g.jsx)(J,{})}),Object(g.jsx)("a",{href:"https://github.com/Hyziu-03/",target:"_blank",rel:"noreferrer noopener",children:Object(g.jsx)(K,{})})]})]})},G=function(){return Object(g.jsxs)("div",{className:"App",id:"App",children:[Object(g.jsx)(F,{}),Object(g.jsxs)("main",{className:"main-content",children:[Object(g.jsx)(Y,{}),Object(g.jsx)(W,{}),Object(g.jsx)(_,{})]}),Object(g.jsx)(V,{})]})};s.a.render(Object(g.jsx)(r.a,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/set-countdown",component:D}),Object(g.jsx)(o.a,{exact:!0,path:"/",component:G})]})}),document.getElementById("root")),i()}},[[64,1,2]]]);
//# sourceMappingURL=main.acfbb680.chunk.js.map