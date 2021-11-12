(this["webpackJsonpmamaia-countdowns"]=this["webpackJsonpmamaia-countdowns"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a(14),o=a(0),i=function(e){return Object(o.jsx)("button",{className:"btn hover touch-target",tabIndex:"-1",onClick:function(){try{if("form"===e.origin){var t=!1,a=document.getElementById("email"),n=document.getElementById("text-input"),o=document.getElementById("message");if(!1===s.validate(a.value)||""===n.value||""===o.value?alert("Please, fill in all the information requested."):t=!0,t){var i="mailto:szymon.hyziak@protonmail.com?subject="+n.value+" | "+a.value+"&body="+o.value;window.location.assign(i),a.value="",n.value="",o.value="",alert("Please wait for redirection to your mail app.")}}}catch(c){throw new Error(c)}},type:"submit",children:e.message})},c=window.innerWidth<950?"Mamaia":"Mamaia Countdowns",r=function(){return Object(o.jsx)(n.b,{to:"/",children:Object(o.jsxs)("h1",{className:"name hover touch-target",children:[Object(o.jsx)("i",{className:"far fa-calendar-alt icon"}),"\xa0",c]})})},l=function(){return window.location.reload(!1)},d=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("span",{onClick:l,children:Object(o.jsx)(r,{})}),Object(o.jsx)(n.b,{to:"app",children:Object(o.jsx)(i,{message:"Set a Countdown!"})})]})},m=function(e){return Object(o.jsxs)("article",{className:"introduction",children:[Object(o.jsxs)("section",{className:"text-section",children:[Object(o.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description})]}),Object(o.jsx)(n.b,{to:"app",children:Object(o.jsx)(i,{message:"Set a Countdown!"})})]})},h=function(e){return Object(o.jsxs)("article",{className:"explanation",children:[Object(o.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]})},u=function(e){return Object(o.jsxs)("article",{className:"biography",children:[Object(o.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]})},j=function(e){return Object(o.jsxs)("form",{action:"",method:"",className:"form article",id:"form",onSubmit:function(e){return e.preventDefault()},autoComplete:"off",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"text-input",className:"input touch-target text-input",placeholder:e.firstInput}),Object(o.jsx)("input",{type:e.secondInputType,name:"email",id:"email",className:"input touch-target email",placeholder:e.secondInput}),Object(o.jsx)("textarea",{placeholder:e.thirdInput,className:"input textarea touch-target message",id:"message",name:"message"})]})},b=function(e){return Object(o.jsxs)("article",{className:"article",children:[Object(o.jsxs)("section",{className:"request",children:[Object(o.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(o.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]}),Object(o.jsxs)("section",{className:"contact-form-container",children:[Object(o.jsx)(j,{firstInput:"What is your name?",secondInput:"What is your email?",secondInputType:"email",thirdInput:"What do you want to say?"}),Object(o.jsx)(i,{origin:"form",message:"Send a Message!"})]})]})},p=function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("p",{className:"copyright",tabIndex:"0",children:"This app has been created from scratch by Szymon Hyziak and therefore is upon copyright of its' owner."}),Object(o.jsxs)("section",{className:"contact-links",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/szymon-hyziak/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-linkedin-in touch-target"})}),Object(o.jsx)("a",{href:"https://github.com/Hyziu-03/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-github touch-target"})}),Object(o.jsx)("i",{className:"fab fa-paypal",disabled:!0})]})]})},g=a.p+"static/media/calendar.92ea77b2.svg",x=a.p+"static/media/work.5c2e2b5e.svg",f=a.p+"static/media/creator.81878575.webp";document.addEventListener("keydown",(function(e){try{13===e.key&&document.activeElement.click()}catch(t){throw new Error(t)}})),"undefined"!==typeof window.ethereum.autoRefreshOnNetworkChange&&(window.ethereum.autoRefreshOnNetworkChange=!1),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var O=function(){return Object(o.jsxs)("div",{className:"App",id:"App",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("main",{className:"main-content",children:[Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)(m,{heading:"Can\u2019t remember dates?",description:"Mamaia Countdowns is a tool to ease your life. You can set countdowns for any event you want. No matter if it\u2019s Christmas or an important exam to take!"}),Object(o.jsx)("img",{src:g,alt:"Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon.",className:"calendar"})]}),Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)(h,{heading:"How to use it? ",description:["This tools\u2019 purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its\u2019 date and a couple more options.","These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won\u2019t miss them. Never!","All your countdowns will be stored in the memory of your device, so please don\u2019t clear it for this app, as you might lose all your work."]}),Object(o.jsx)("img",{src:x,alt:"Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side.",className:"work"})]}),Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)(u,{heading:"Who is the creator?",description:["Hello, I'm Szymon Hyziak - 18 years old high school student from Poland. I've been developing websites for over a year and I'm thrilled to show you another one.","I've got a background in IT, that\u2019s related to my high school. I also fancy UI Design and photography.","If you want to contact me work-wise don\u2019t hesitate to reach me through LinkedIn. Any donations via PayPal are welcome. Links below!"]}),Object(o.jsx)("img",{src:f,alt:"Headshot of the creator - Szymon Hyziak.",className:"creator"})]}),Object(o.jsx)(b,{heading:"How can you help?",description:["As it\u2019s the first version of Mamaia Countdowns I still have many ideas and room for the app\u2019s improvement.","Do you have any feedback on your mind? Do you want to grab a call to discuss how this app works? Are you passionate about user testing software?","If so, I encourage you to fill in this form. I\u2019ll be pleased to get to know you and have an interesting conversation. See you there!"]})]}),Object(o.jsx)(p,{})]})},w=a(1),v=a.n(w),y=a(17),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),o(e),i(e)}))},I=a(2),k=(a(32),a(18));null===localStorage.getItem("totalNumber")&&(localStorage.setItem("totalNumber",1),localStorage.setItem("event0name","The event 's name will show up here when you submit it."),localStorage.setItem("event0date","Your date will show up here when you submit it."),localStorage.setItem("event0description","Additional information about the event will show up here when you submit it."));var S=document.getElementsByClassName("email"),C=document.getElementsByClassName("text-input"),z=document.getElementsByClassName("message"),E=function(){var e=Object(w.useState)(0),t=Object(k.a)(e,2),a=t[0],n=t[1],s=function(e){var t=!0;a<0&&(t=!1),a>localStorage.getItem("totalNumber")-1&&(t=!1),t||("right"===e&&n(--a),"left"===e&&n(++a))};return Object(o.jsxs)("div",{className:"mobile-container",children:[Object(o.jsx)("header",{className:"fixed-header",onClick:l,children:Object(o.jsx)(r,{})}),Object(o.jsxs)("main",{className:"mobile-content",children:[Object(o.jsxs)("article",{className:"contact-form-container",children:[Object(o.jsx)(j,{firstInput:"What is this event?",secondInput:"When does it start?",secondInputType:"date",thirdInput:"What additional information do you have?"}),Object(o.jsx)("span",{onClick:function(){return""===S[1].value||""===C.value||""===z.value?alert("Please, fill in all the information requested."):function(){var e=parseInt(localStorage.getItem("totalNumber"));localStorage.setItem("totalNumber",++e);var t=localStorage.getItem("totalNumber")-1;localStorage.setItem("event"+t+"name",C[1].value),localStorage.setItem("event"+t+"date","This event will happen on "+S[1].value),localStorage.setItem("event"+t+"description",z[1].value),alert("Your event has been saved!")}()},children:Object(o.jsx)(i,{message:"Set a Countdown!"})})]}),Object(o.jsxs)("article",{className:"saved-countdowns",children:[Object(o.jsx)("h1",{className:"heading",id:"events-name",children:localStorage.getItem("event"+a+"name")}),Object(o.jsx)("p",{className:"description",id:"events-date",children:localStorage.getItem("event"+a+"date")}),Object(o.jsx)("p",{className:"description",id:"events-description",children:localStorage.getItem("event"+a+"description")}),Object(o.jsxs)("section",{className:"btn-container",children:[Object(o.jsx)("button",{className:"arrow-btn",onClick:function(){n(--a),s("left")},children:Object(o.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),Object(o.jsx)("button",{className:"arrow-btn",onClick:function(){n(++a),s("right")},children:Object(o.jsx)("i",{className:"fas fa-long-arrow-alt-right"})})]})]})]})]})};Object(y.render)(Object(o.jsx)(v.a.StrictMode,{children:Object(o.jsxs)(n.a,{children:[Object(o.jsx)(O,{}),Object(o.jsx)(I.c,{children:Object(o.jsx)(I.a,{exact:!0,path:"/app",component:E})})]})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.87fad3a3.chunk.js.map