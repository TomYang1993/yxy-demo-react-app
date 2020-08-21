(this["webpackJsonpyxy-demo-app"]=this["webpackJsonpyxy-demo-app"]||[]).push([[0],{184:function(e,t,a){e.exports=a(318)},189:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(54),o=a.n(c),l=(a(189),a(13)),u=a.n(l),s=a(18),i=a(16),m=a(20),p=a(28),f=a(329),d=a(330),b=(a(191),Object(n.createContext)(null));function E(){return Object(n.useContext)(b)}function h(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}a(192);var g=a(91),v=a(48),O=a(327);function j(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=E().isAuthenticated,l=Object(n.useState)(!0),m=Object(i.a)(l,2),p=m[0],f=m[1];function d(){return O.a.get("notes","/notes")}return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d();case 5:t=e.sent,console.log(t),c(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),h(e.t0);case 13:f(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),r.a.createElement("div",{className:"Home"},o?r.a.createElement("div",{className:"notes"},r.a.createElement("h2",null,"Your Notes"),r.a.createElement(g.a,null,!p&&function(e){return[{}].concat(e).map((function(e,t){return 0!==t?r.a.createElement(v.LinkContainer,{key:e.noteid,to:"/notes/".concat(e.noteid)},r.a.createElement(g.a.Item,null,r.a.createElement("div",{style:{fontSize:20,fontWeight:600}},e.content.trim().split("\n")[0]),r.a.createElement("div",{style:{fontSize:14,fontWeight:300}},"Created: "+new Date(e.createdAt).toLocaleString()))):r.a.createElement(v.LinkContainer,{key:"new",to:"/notes/new"},r.a.createElement(g.a.Item,null,r.a.createElement("h4",null,r.a.createElement("b",null,"\uff0b")," Create a new note")))}))}(a))):r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"Fountain Pen"),r.a.createElement("p",null,"A simple note taking app, try signup!")))}a(280);function y(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h3",null,"Sorry, page not found!"))}var w=a(41),x=a(326),k=a(173);a(281);function S(e){var t=e.isLoading,a=e.className,n=e.disabled,c=void 0!==n&&n,o=Object(w.a)(e,["isLoading","className","disabled"]);return r.a.createElement(x.a,Object.assign({className:"LoaderButton ".concat(a),disabled:c||t},o),t&&r.a.createElement(k.a,{className:"spinning"}),o.children)}var C=a(11),L=(a(282),a(98)),I=a(86),N=a(102);function P(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1];return[r,function(e){c(Object(N.a)(Object(N.a)({},r),{},Object(I.a)({},e.target.id,e.target.value)))}]}function D(){var e=E().userHasAuthenticated,t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],l=P({email:"",password:""}),m=Object(i.a)(l,2),p=m[0],f=m[1];function d(){return(d=Object(s.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),o(!0),t.prev=2,t.next=5,L.a.signIn(p.email,p.password);case 5:e(!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),alert(t.t0.message),o(!1);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:function(e){return d.apply(this,arguments)}},r.a.createElement(C.a.Group,{controlId:"email",bsSize:"large"},r.a.createElement(C.a.Label,null,"Email"),r.a.createElement(C.a.Control,{autoFocus:!0,type:"email",value:p.email,onChange:f})),r.a.createElement(C.a.Group,{controlId:"password",bsSize:"large"},r.a.createElement(C.a.Label,null,"Password"),r.a.createElement(C.a.Control,{value:p.password,onChange:f,type:"password"})),r.a.createElement(S,{block:!0,type:"submit",bsSize:"large",isLoading:c,disabled:!(p.email.length>0&&p.password.length>0)},"Login")))}a(284);function G(){var e=P({email:"",password:"",confirmPassword:"",confirmationCode:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(m.k)(),l=Object(n.useState)(null),p=Object(i.a)(l,2),f=p[0],d=p[1],b=E().userHasAuthenticated,g=Object(n.useState)(!1),v=Object(i.a)(g,2),O=v[0],j=v[1];function y(e){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!0),e.prev=2,e.next=5,L.a.signUp({username:a.email,password:a.password});case 5:n=e.sent,j(!1),d(n),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),h(e.t0),j(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return(k=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!0),e.prev=2,e.next=5,L.a.confirmSignUp(a.email,a.confirmationCode);case 5:return e.next=7,L.a.signIn(a.email,a.password);case 7:b(!0),o.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),h(e.t0),j(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"Signup"},null===f?r.a.createElement("form",{onSubmit:y},r.a.createElement(C.a.Group,{controlId:"email",bsSize:"large"},r.a.createElement(C.a.Label,null,"Email"),r.a.createElement(C.a.Control,{autoFocus:!0,type:"email",value:a.email,onChange:c})),r.a.createElement(C.a.Group,{controlId:"password",bsSize:"large"},r.a.createElement(C.a.Label,null,"Password"),r.a.createElement(C.a.Control,{type:"password",value:a.password,onChange:c})),r.a.createElement(C.a.Group,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(C.a.Label,null,"Confirm Password"),r.a.createElement(C.a.Control,{type:"password",onChange:c,value:a.confirmPassword})),r.a.createElement(S,{block:!0,type:"submit",bsSize:"large",isLoading:O,disabled:!(a.email.length>0&&a.password.length>0&&a.password===a.confirmPassword)},"Signup")):r.a.createElement("form",{onSubmit:x},r.a.createElement(C.a.Group,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(C.a.Label,null,"Confirmation Code"),r.a.createElement(C.a.Control,{autoFocus:!0,type:"tel",onChange:c,value:a.confirmationCode}),r.a.createElement(C.a.Text,null,"Please check your email for the code.")),r.a.createElement(S,{block:!0,type:"submit",bsSize:"large",isLoading:O,disabled:!(a.confirmationCode.length>0)},"Verify")))}var A={REGION:"us-east-2",BUCKET:"yxy-demo-app-uploads"},R={REGION:"us-east-2",URL:"https://95ej56d2pg.execute-api.us-east-2.amazonaws.com/dev"},_={REGION:"us-east-2",USER_POOL_ID:"us-east-2_IGqy1TPui",APP_CLIENT_ID:"7d2nthvclm8eva7bf217a9fm81",IDENTITY_POOL_ID:"us-east-2:0b301fca-b4e2-454f-a0d9-b47c35ab6ee1"},z=5e6,T="pk_test_KXjxOOoRECc5p251UYT0Vfbe00byICxzbx",U=(a(285),a(328));function B(e){return F.apply(this,arguments)}function F(){return(F=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(Date.now(),"-").concat(t.name),e.next=3,U.a.vault.put(a,t,{contentType:t.type});case 3:return n=e.sent,e.abrupt("return",n.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return W.apply(this,arguments)}function W(){return(W=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.vault.remove(t);case 2:return a=e.sent,e.abrupt("return",a.key);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){var e=Object(n.useRef)(null),t=Object(m.k)(),a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],p=Object(n.useState)(!1),f=Object(i.a)(p,2),d=f[0],b=f[1];function E(){return(E=Object(s.a)(u.a.mark((function a(n){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),!(e.current&&e.current.size>z)){a.next=4;break}return alert("Please pick a file smaller than ".concat(z/1e6," MB.")),a.abrupt("return");case 4:if(b(!0),a.prev=5,!e.current){a.next=12;break}return a.next=9,B(e.current);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:return r=a.t0,a.next=16,g({content:o,attachment:r});case 16:t.push("/"),a.next=23;break;case 19:a.prev=19,a.t1=a.catch(5),h(a.t1),b(!1);case 23:case"end":return a.stop()}}),a,null,[[5,19]])})))).apply(this,arguments)}function g(e){return O.a.post("notes","/notes",{body:e})}return r.a.createElement("div",{className:"NewNote"},r.a.createElement("form",{onSubmit:function(e){return E.apply(this,arguments)}},r.a.createElement(C.a.Group,{controlId:"content"},r.a.createElement(C.a.Control,{value:o,as:"textarea",onChange:function(e){return l(e.target.value)}})),r.a.createElement(C.a.Group,{controlId:"file"},r.a.createElement(C.a.Label,null,"Attachment"),r.a.createElement(C.a.Control,{onChange:function(t){e.current=t.target.files[0]},type:"file"})),r.a.createElement(S,{block:!0,type:"submit",bsSize:"large",bsStyle:"primary",isLoading:d,disabled:!(o.length>0)},"Create")))}function K(){var e,t=Object(n.useRef)(null),a=Object(m.m)().id,c=Object(m.k)(),o=Object(n.useState)(null),l=Object(i.a)(o,2),p=l[0],f=l[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),E=b[0],g=b[1],v=Object(n.useState)(!1),j=Object(i.a)(v,2),y=j[0],w=j[1],x=Object(n.useState)(!1),k=Object(i.a)(x,2),L=k[0],I=k[1];function N(e){return O.a.put("notes","/notes/".concat(a),{body:e})}function P(){return(P=Object(s.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(t.current&&t.current.size>z)){e.next=4;break}return alert("Please pick a file smaller than ".concat(z/1e6," MB.")),e.abrupt("return");case 4:if(w(!0),e.prev=5,!t.current){e.next=13;break}return console.log(p.attachment),e.next=10,Y(p.attachment);case 10:return e.next=12,B(t.current);case 12:n=e.sent;case 13:return e.next=15,N({content:E,attachment:n||p.attachment});case 15:c.push("/"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),h(e.t0),w(!1);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})))).apply(this,arguments)}function D(){return O.a.del("notes","/notes/".concat(a))}function G(){return(G=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete this note?")){e.next=4;break}return e.abrupt("return");case 4:return I(!0),e.prev=5,e.next=8,D();case 8:return e.next=10,Y(p.attachment);case 10:c.push("/"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),h(e.t0),I(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return O.a.get("notes","/notes/".concat(a))}function t(){return(t=Object(s.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:if(a=t.sent,n=a.content,!(r=a.attachment)){t.next=9;break}return t.next=8,U.a.vault.get(r);case 8:a.attachmentURL=t.sent;case 9:g(n),f(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),h(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"Notes"},p&&r.a.createElement("form",{onSubmit:function(e){return P.apply(this,arguments)}},r.a.createElement(C.a.Group,{controlId:"content"},r.a.createElement(C.a.Control,{value:E,as:"textarea",rows:"10",onChange:function(e){return g(e.target.value)}})),p.attachment&&r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Attachment"),r.a.createElement(C.a.Control,{defaultValue:(e=p.attachment,e.replace(/^\w+-/,"")),plaintext:!0,readOnly:!0})),r.a.createElement(C.a.Group,{controlId:"file"},!p.attachment&&r.a.createElement(C.a.Label,null,"Attachment"),r.a.createElement(C.a.Control,{onChange:function(e){t.current=e.target.files[0]},type:"file"})),r.a.createElement(S,{block:!0,type:"submit",variant:"primary",isLoading:y,disabled:!(E.length>0)},"Save"),r.a.createElement(S,{block:!0,variant:"danger",onClick:function(e){return G.apply(this,arguments)},isLoading:L},"Delete")))}var V=a(61);a(316);var $=Object(V.injectStripe)((function(e){var t=e.isLoading,a=e.onSubmit,c=Object(w.a)(e,["isLoading","onSubmit"]),o=P({name:"",storage:""}),l=Object(i.a)(o,2),m=l[0],p=l[1],f=Object(n.useState)(!1),d=Object(i.a)(f,2),b=d[0],E=d[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),v=g[0],O=g[1];function j(){return(j=Object(s.a)(u.a.mark((function e(t){var n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,c.stripe.createToken({name:m.name});case 4:n=e.sent,r=n.token,o=n.error,E(!1),a(m.storage,{token:r,error:o});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t=b||t,r.a.createElement("form",{className:"BillingForm",onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement(C.a.Group,{controlId:"storage"},r.a.createElement(C.a.Label,null,"Storage"),r.a.createElement(C.a.Control,{min:"0",type:"number",value:m.storage,onChange:p,placeholder:"Number of notes to store"})),r.a.createElement("hr",null),r.a.createElement(C.a.Group,{controlId:"name"},r.a.createElement(C.a.Label,null,"Cardholder's name"),r.a.createElement(C.a.Control,{type:"text",value:m.name,onChange:p,placeholder:"Name on the card"})),r.a.createElement(C.a.Label,null,"Credit Card Info"),r.a.createElement(V.CardElement,{className:"card-field",onChange:function(e){return O(e.complete)}}),r.a.createElement(S,{block:!0,type:"submit",isLoading:t,disabled:!(""!==m.name&&""!==m.storage&&v)},"Purchase"))}));a(317);function J(){var e=Object(m.k)(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1];function l(e){return O.a.post("notes","/billing",{body:e})}var p=Object(n.useState)(null),f=Object(i.a)(p,2),d=f[0],b=f[1];function E(){return(E=Object(s.a)(u.a.mark((function t(a,n){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.token,!(c=n.error)){t.next=4;break}return h(c),t.abrupt("return");case 4:return o(!0),t.prev=5,t.next=8,l({storage:a,source:r.id});case 8:alert("Your card has been charged successfully!"),e.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),h(t.t0),o(!1);case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){b(window.Stripe(T))}),[]),r.a.createElement("div",{className:"Settings"},r.a.createElement(V.StripeProvider,{stripe:d},r.a.createElement(V.Elements,null,r.a.createElement($,{isLoading:c,onSubmit:function(e,t){return E.apply(this,arguments)}}))))}function M(e){var t=e.children,a=Object(w.a)(e,["children"]),n=Object(m.l)(),c=n.pathname,o=n.search,l=E().isAuthenticated;return r.a.createElement(m.d,a,l?t:r.a.createElement(m.c,{to:"/login?redirect=".concat(c).concat(o)}))}function q(e){var t=e.children,a=Object(w.a)(e,["children"]),n=E().isAuthenticated,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),n=a.exec(t);if(!n)return null;if(!n[2])return"";return decodeURIComponent(n[2].replace(/\+/g," "))}("redirect");return r.a.createElement(m.d,a,n?r.a.createElement(m.c,{to:""===c||null===c?"/":c}):t)}function X(){return r.a.createElement(m.g,null,r.a.createElement(m.d,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(q,{exact:!0,path:"/login"},r.a.createElement(D,null)),r.a.createElement(q,{exact:!0,path:"/signup"},r.a.createElement(G,null)),r.a.createElement(M,{exact:!0,path:"/settings"},r.a.createElement(J,null)),r.a.createElement(M,{exact:!0,path:"/notes/new"},r.a.createElement(H,null)),r.a.createElement(M,{exact:!0,path:"/notes/:id"},r.a.createElement(K,null)),r.a.createElement(m.d,null,r.a.createElement(y,null)))}var Q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),E=l[0],g=l[1],O=Object(m.k)();function j(){return(j=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.signOut();case 2:c(!1),O.push("/login");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.currentSession();case 3:c(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&h(e.t0);case 9:g(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),!E&&r.a.createElement("div",{className:"App container"},r.a.createElement(f.a,{collapseOnSelect:!0},r.a.createElement(f.a.Brand,null,r.a.createElement(p.Link,{to:"/"},"Fountain Pen Notes")),r.a.createElement(f.a.Toggle,null),r.a.createElement(f.a.Collapse,{className:"justify-content-end"},r.a.createElement(d.a,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.LinkContainer,{to:"/settings"},r.a.createElement(d.a.Link,null,"Settings")),r.a.createElement(d.a.Link,{onClick:function(){return j.apply(this,arguments)}},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.LinkContainer,{to:"/signup"},r.a.createElement(d.a.Link,null,"Signup")),r.a.createElement(v.LinkContainer,{to:"/login"},r.a.createElement(d.a.Link,null,"Login")))))),r.a.createElement(b.Provider,{value:{isAuthenticated:a,userHasAuthenticated:c}},r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45).a.configure({Auth:{mandatorySignIn:!0,region:_.REGION,userPoolId:_.USER_POOL_ID,identityPoolId:_.IDENTITY_POOL_ID,userPoolWebClientId:_.APP_CLIENT_ID},Storage:{region:A.REGION,bucket:A.BUCKET,identityPoolId:_.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:R.URL,region:R.REGION}]}}),o.a.render(r.a.createElement(p.BrowserRouter,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.5855ea56.chunk.js.map