(this["webpackJsonpmamaia-countdowns"]=this["webpackJsonpmamaia-countdowns"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=function(){return window.location.reload(!1)};document.addEventListener("keydown",(function(e){try{13===e.key&&document.activeElement.click()}catch(t){throw new Error(t)}}));var s=function(){return!1},o=a(1),i=a.n(o),c=a(15),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),o(e),i(e)}))},l=a(7),d=a(2),h=(a(27),a(19)),m=a(0),u=window.innerWidth<950?"Mamaia":"Mamaia Countdowns",j=function(){return Object(m.jsx)(l.b,{to:"/",children:Object(m.jsxs)("h1",{className:"name hover touch-target",children:[Object(m.jsx)("i",{className:"far fa-calendar-alt icon"}),"\xa0",u]})})},b=function(e){return Object(m.jsxs)("form",{action:"",method:"",className:"form article",id:"form",onSubmit:function(e){return e.preventDefault()},autoComplete:"off",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"text-input",className:"input touch-target text-input",placeholder:e.firstInput}),Object(m.jsx)("input",{type:e.secondInputType,name:"email",id:"email",className:"input touch-target email",placeholder:e.secondInput}),Object(m.jsx)("textarea",{placeholder:e.thirdInput,className:"input textarea touch-target message",id:"message",name:"message"})]})},p=a(18),x=a(11),g=a.n(x),f=void 0,O=void 0,w=void 0;window.addEventListener("DOMContentLoaded",(function(){f=document.getElementById("email")[0],O=document.getElementById("text-input")[0],w=document.getElementById("message")[0]}));var v=function(e){return Object(m.jsx)("button",{className:"btn hover touch-target",tabIndex:"-1",onClick:function(){try{if("form"===e.origin){var t=!1;if(!1===p.validate(f.value)||""===O.value||""===w.value?alert("Please, fill in all the information requested."):t=!0,t){var a="mailto:szymon.hyziak@protonmail.com?subject="+g.a.sanitize(O.value)+" | "+g.a.sanitize(f.value)+"&body="+g.a.sanitize(w.value);window.location.assign(a),f.value="",O.value="",w.value="",alert("Please wait for redirection to your mail app.")}}}catch(n){throw new Error(n)}},type:"submit",children:e.message})},y=void 0,I=void 0,N=void 0;window.addEventListener("DOMContentLoaded",(function(){y=document.getElementById("email")[0],I=document.getElementById("text-input")[0],N=document.getElementById("message")[0]}));var k=function(){var e=Object(o.useState)(0),t=Object(h.a)(e,2),a=t[0],s=t[1];try{null===localStorage.getItem("totalNumber")&&(localStorage.setItem("totalNumber",1),localStorage.setItem("event0name","The event 's name will show up here when you submit it."),localStorage.setItem("event0date","Your date will show up here when you submit it."),localStorage.setItem("event0description","Additional information about the event will show up here when you submit it."))}catch(u){throw new Error(u)}var i=function(){try{var e=parseInt(localStorage.getItem("totalNumber"));localStorage.setItem("totalNumber",++e);var t=localStorage.getItem("totalNumber")-1;localStorage.setItem("event"+t+"name",I[1].value),localStorage.setItem("event"+t+"date","This event will happen on "+y[1].value),localStorage.setItem("event"+t+"description",N[1].value),alert("Your event has been saved!")}catch(u){throw new Error(u)}},c=function(e){try{var t=!0;a<0&&(t=!1),a>localStorage.getItem("totalNumber")-1&&(t=!1),t||("right"===e&&s(--a),"left"===e&&s(++a))}catch(u){throw new Error(u)}},r=localStorage.getItem("event"+a+"name")||"",l=localStorage.getItem("event"+a+"date")||"",d=localStorage.getItem("event"+a+"description")||"";return Object(m.jsxs)("div",{className:"mobile-container",children:[Object(m.jsx)("header",{className:"fixed-header",onClick:n,children:Object(m.jsx)(j,{})}),Object(m.jsxs)("main",{className:"mobile-content",children:[Object(m.jsxs)("article",{className:"contact-form-container",children:[Object(m.jsx)(b,{firstInput:"What is this event?",secondInput:"When does it start?",secondInputType:"date",thirdInput:"What additional information do you have?"}),Object(m.jsx)("span",{onClick:function(){try{""===y.value||""===I.value||""===N.value?alert("Please, fill in all the information requested."):i()}catch(u){throw new Error(u)}},children:Object(m.jsx)(v,{message:"Set a Countdown!"})})]}),Object(m.jsxs)("article",{className:"saved-countdowns",children:[Object(m.jsx)("h1",{className:"heading",id:"events-name",children:r}),Object(m.jsx)("p",{className:"description",id:"events-date",children:l}),Object(m.jsx)("p",{className:"description",id:"events-description",children:d}),Object(m.jsxs)("section",{className:"btn-container",children:[Object(m.jsx)("button",{className:"arrow-btn",onClick:function(){s(--a),c("left")},children:Object(m.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),Object(m.jsx)("button",{className:"arrow-btn",onClick:function(){s(++a),c("right")},children:Object(m.jsx)("i",{className:"fas fa-long-arrow-alt-right"})})]})]})]})]})},S=function(){return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("span",{onClick:n,children:Object(m.jsx)(j,{})}),Object(m.jsx)(l.b,{to:"set-countdown",children:Object(m.jsx)(v,{message:"Set a Countdown!"})})]})},C=function(e){return Object(m.jsxs)("article",{className:"introduction",children:[Object(m.jsxs)("section",{className:"text-section",children:[Object(m.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description})]}),Object(m.jsx)(l.b,{to:"set-countdown",children:Object(m.jsx)(v,{message:"Set a Countdown!"})})]})},E=function(e){return Object(m.jsxs)("article",{className:"explanation",children:[Object(m.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]})},z=function(e){return Object(m.jsxs)("article",{className:"biography",children:[Object(m.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]})},T=function(e){return Object(m.jsxs)("article",{className:"article",children:[Object(m.jsxs)("section",{className:"request",children:[Object(m.jsx)("h1",{className:"heading",tabIndex:"0",children:e.heading}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[0]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[1]}),Object(m.jsx)("p",{className:"description",tabIndex:"0",children:e.description[2]})]}),Object(m.jsxs)("section",{className:"contact-form-container",children:[Object(m.jsx)(b,{firstInput:"What is your name?",secondInput:"What is your email?",secondInputType:"email",thirdInput:"What do you want to say?"}),Object(m.jsx)(v,{origin:"form",message:"Send a Message!"})]})]})},H=function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)("p",{className:"copyright",tabIndex:"0",children:"This app has been created from scratch by Szymon Hyziak and therefore is upon copyright of its' owner."}),Object(m.jsxs)("section",{className:"contact-links",children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/szymon-hyziak/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-linkedin-in touch-target"})}),Object(m.jsx)("a",{href:"https://github.com/Hyziu-03/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-github touch-target"})}),Object(m.jsx)("i",{className:"fab fa-paypal",disabled:!0})]})]})},L=a.p+"static/media/calendar.92ea77b2.svg",B=a.p+"static/media/work.5c2e2b5e.svg",M=a.p+"static/media/creator.81878575.webp",P=function(){return Object(m.jsxs)("div",{className:"App",id:"App",children:[Object(m.jsx)(S,{}),Object(m.jsxs)("main",{className:"main-content",children:[Object(m.jsxs)("article",{className:"article",children:[Object(m.jsx)(C,{heading:"Can\u2019t remember dates?",description:"Mamaia Countdowns is a tool to ease your life. You can set countdowns for any event you want. No matter if it\u2019s Christmas or an important exam to take!"}),Object(m.jsx)("img",{src:L,alt:"Illustration showing a young man holding a giant pencil. He is standing in front of a calendar and he is looking at the horizon.",className:"calendar"})]}),Object(m.jsxs)("article",{className:"article",children:[Object(m.jsx)(E,{heading:"How to use it? ",description:["This tools\u2019 purpose is to give you an option to create countdowns with ease. You can add a name to the event, set its\u2019 date and a couple more options.","These are for your convenience and to exaggerate that you can adjust times for notifications and another reminder so you won\u2019t miss them. Never!","All your countdowns will be stored in the memory of your device, so please don\u2019t clear it for this app, as you might lose all your work."]}),Object(m.jsx)("img",{src:B,alt:"Illustration showing a young man sitting at the desk. He is working on a laptop with coffee by side.",className:"work"})]}),Object(m.jsxs)("article",{className:"article",children:[Object(m.jsx)(z,{heading:"Who is the creator?",description:["Hello, I'm Szymon Hyziak - 18 years old high school student from Poland. I've been developing websites for over a year and I'm thrilled to show you another one.","I've got a background in IT, that\u2019s related to my high school. I also fancy UI Design and photography.","If you want to contact me work-wise don\u2019t hesitate to reach me through LinkedIn. Any donations via PayPal are welcome. Links below!"]}),Object(m.jsx)("img",{src:M,alt:"Headshot of the creator - Szymon Hyziak.",className:"creator"})]}),Object(m.jsx)(T,{heading:"How can you help?",description:["As it\u2019s the first version of Mamaia Countdowns I still have many ideas and room for the app\u2019s improvement.","Do you have any feedback on your mind? Do you want to grab a call to discuss how this app works? Are you passionate about user testing software?","If so, I encourage you to fill in this form. I\u2019ll be pleased to get to know you and have an interesting conversation. See you there!"]})]}),Object(m.jsx)(H,{})]})};Object(c.render)(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(s,{}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/set-countdown",component:k}),Object(m.jsx)(d.a,{exact:!0,path:"/",component:P})]})]})}),document.getElementById("root")),r()}},[[34,1,2]]]);
//# sourceMappingURL=main.f463c0a9.chunk.js.map