(this["webpackJsonpcodewars-api"]=this["webpackJsonpcodewars-api"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(13),l=n.n(c),r=(n(19),n(3)),i=(n(20),n(2)),s=n.n(i);var u=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(o.useState)(""),i=Object(r.a)(l,2),u=i[0],h=i[1];Object(o.useEffect)((function(){}));var m="https://cors-anywhere.herokuapp.com/";function f(e,t){t=n,s.a.get(m+"https://www.codewars.com/api/v1/users/"+t).then((function(e){console.log("This is the information on ".concat(n)),console.log(e.data)})).catch((function(e){console.log(e)})),console.log("Searching for ",n),s.a.get(m+"https://www.codewars.com/api/v1/users/"+t+"/code-challenges/completed?page=0").then((function(e){console.log("Here are the challenges that ".concat(t," has completed:")),console.log(e.data.data)})).catch((function(e){console.log(e)})),e.preventDefault()}function p(e,t){t=u,s.a.get(m+"https://www.codewars.com/api/v1/code-challenges/"+t).then((function(e){console.log("Here is the information on ".concat(t,":")),console.log(e.data)})).catch((function(e){console.log(e)})),console.log("Challenge we are searching for: ",u),e.preventDefault()}return a.a.createElement("div",{className:"App"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("form",{onSubmit:f},a.a.createElement("label",null,"Enter a user to show their info:",a.a.createElement("input",{type:"text",value:n,onChange:function(e){c(e.target.value)}})),a.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){return f(e,{userInfo:n})}}))),a.a.createElement("li",null,a.a.createElement("form",{onSubmit:p},a.a.createElement("label",null,"Enter a challenge here (name or ID) to show its stats:",a.a.createElement("input",{type:"text",value:u,onChange:function(e){h(e.target.value)}})),a.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){return p(e,{challengeInfo:u})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.12d1688b.chunk.js.map