(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{108:function(e,a){},12:function(e,a,n){e.exports={JoinOuterContainer:"Join_JoinOuterContainer__3jkoc",joinInnerContainer:"Join_joinInnerContainer__2c4By",joinInput:"Join_joinInput__po1hj",heading:"Join_heading__1-Hsf",button:"Join_button__3fAmr",error:"Join_error__1JkJV"}},161:function(e,a,n){"use strict";n.r(a);var t,r=n(0),o=n.n(r),s=n(63),c=n.n(s),i=(n(78),n(1)),m=n(72),l=n(10),u=n(64),g=n.n(u),_=n(65),f=n.n(_),A=n(35),p=n.n(A),h=n(66),E=n.n(h),d=n(67),I=n.n(d),C=n(20),j=n.n(C),b=function(e){var a=e.room;return o.a.createElement("div",{className:j.a.InfoBar},o.a.createElement("div",{className:j.a.leftInnerContainer},o.a.createElement("img",{className:j.a.onlineIcon,src:E.a,alt:"online"}),o.a.createElement("h3",null,a)),o.a.createElement("div",{className:j.a.rightInnerContainer},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:I.a,alt:"close"}))))},N=n(24),O=n.n(N),v=n(68),x=n.n(v),B=function(e){var a=e.setMessage,n=e.sendMessage,t=e.message;return o.a.createElement("form",{className:O.a.form},o.a.createElement("input",{className:O.a.input,type:"text",placeholder:"Type a message...",value:t,onChange:function(e){var n=e.target.value;return a(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),o.a.createElement("img",{className:O.a.sendButton,onClick:function(e){return n(e)},src:x.a,alt:"send icon"}))},M=n(69),y=n.n(M),k=n(70),J=n.n(k),S=n(6),w=n.n(S),U=n(36),Y=n.n(U),R=n(3),T=n.n(R),W=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},K=o.a.memo((function(e){var a=e.message,n=a.text,t=a.user,r=e.name;return t===r.trim().toLowerCase()?o.a.createElement("div",{className:w()(T.a.messageContainer,T.a.justifyEnd)},o.a.createElement("p",{className:w()(T.a.sentText,T.a.pr10)},r),o.a.createElement("div",{className:w()(T.a.messageBox,T.a.backgroundBlue)},o.a.createElement("p",{className:w()(T.a.messageText,T.a.colorWhite)},Y.a.emojify(W(n))))):o.a.createElement("div",{className:w()(T.a.messageContainer,T.a.justifyStart)},o.a.createElement("div",{className:w()(T.a.messageBox,T.a.backgroundLight)},o.a.createElement("p",{className:w()(T.a.messageText,T.a.colorDark)},Y.a.emojify(W(n)))),o.a.createElement("p",{className:w()(T.a.sentText,T.a.pl10)},t))})),Q=o.a.memo((function(e){var a=e.messages,n=e.name;return o.a.createElement(y.a,{className:J.a.messages},a.map((function(e,a){return o.a.createElement(K,{key:a,message:e,name:n})})))})),D=Object(i.f)((function(e){var a=e.location,n=e.history,s=Object(r.useState)(""),c=Object(l.a)(s,2),i=c[0],u=c[1],_=Object(r.useState)(""),A=Object(l.a)(_,2),h=A[0],E=A[1],d=Object(r.useState)(""),I=Object(l.a)(d,2),C=I[0],j=I[1],N=Object(r.useState)([]),O=Object(l.a)(N,2),v=O[0],x=O[1],M="https://quang-realtime-chat-app.herokuapp.com/";Object(r.useEffect)((function(){var e=f.a.parse(a.search),r=e.name,o=e.room;return t=g()(M),u(r),E(o),t.emit("join",{name:r,room:o},(function(e){e&&(alert(e),n.push("/"))})),function(){t.emit("disconnect"),t.off()}}),[M,a.search]),Object(r.useEffect)((function(){t.on("message",(function(e){x((function(a){return[].concat(Object(m.a)(a),[e])}))}))}),[]);return o.a.createElement("div",{className:p.a.OuterContainer},o.a.createElement("div",{className:p.a.container},o.a.createElement(b,{room:h}),o.a.createElement(Q,{messages:v,name:i}),o.a.createElement(B,{message:C,sendMessage:function(e){e.preventDefault(),C&&t.emit("sendMessage",C,(function(){return j("")}))},setMessage:j})))})),L=n(17),V=n(12),G=n.n(V),P=function(){var e=Object(r.useState)(""),a=Object(l.a)(e,2),n=a[0],t=a[1],s=Object(r.useState)(""),c=Object(l.a)(s,2),i=c[0],m=c[1],u=Object(r.useState)(""),g=Object(l.a)(u,2),_=g[0],f=g[1];return o.a.createElement("div",{className:G.a.JoinOuterContainer},o.a.createElement("div",{className:G.a.joinInnerContainer},o.a.createElement("h1",{className:G.a.heading},"Join"),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Name",className:G.a.joinInput,type:"text",onChange:function(e){return t(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Room",className:G.a.joinInput,type:"text",onChange:function(e){return m(e.target.value)}})),o.a.createElement(L.b,{onClick:function(e){return n&&i?null:function(e){e.preventDefault(),f("You need to fill in the name and room"),setTimeout((function(){f("")}),2500)}(e)},to:"/chat?name=".concat(n,"&room=").concat(i)},o.a.createElement("button",{className:G.a.button,type:"button"},"Join")),_&&o.a.createElement("p",{className:G.a.error},_)))},Z=function(){return o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",exact:!0,component:P}),o.a.createElement(i.a,{path:"/chat",component:D}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(L.a,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,a,n){e.exports={InfoBar:"InfoBar_InfoBar__2onvZ",leftInnerContainer:"InfoBar_leftInnerContainer__OhH7J",rightInnerContainer:"InfoBar_rightInnerContainer__3xBt7",onlineIcon:"InfoBar_onlineIcon__8jCsI"}},24:function(e,a,n){e.exports={form:"Input_form__1kOtm",input:"Input_input__3PNbO",sendButton:"Input_sendButton__Cwr2o"}},3:function(e,a,n){e.exports={messageBox:"Message_messageBox__3U09E",messageText:"Message_messageText__2TYjU",messageContainer:"Message_messageContainer__1a4hH",sentText:"Message_sentText__18Yy5",pl10:"Message_pl10__3Wf8z",pr10:"Message_pr10__1f8uI",justifyStart:"Message_justifyStart__3rKFZ",justifyEnd:"Message_justifyEnd__dxAAv",colorWhite:"Message_colorWhite__1gUeC",colorDark:"Message_colorDark__2s4fs",backgroundBlue:"Message_backgroundBlue__t2eW1",backgroundLight:"Message_backgroundLight__2lIci"}},35:function(e,a,n){e.exports={OuterContainer:"Chat_OuterContainer__1zNIp",container:"Chat_container__19YMI"}},66:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},67:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},68:function(e,a,n){e.exports=n.p+"static/media/sendIcon.a2b9b234.png"},70:function(e,a,n){e.exports={messages:"Messages_messages__24vfu"}},73:function(e,a,n){e.exports=n(161)},78:function(e,a,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.d759f7cd.chunk.js.map