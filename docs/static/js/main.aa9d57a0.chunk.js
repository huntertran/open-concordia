(this.webpackJsonpopen_concordia=this.webpackJsonpopen_concordia||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(101),n(102),n(15)),l=n(183),u=n(199),s=n(187),m=n(194),d=n(195),p=n(189),f=n(52),b=n(198),h=n(202),g=n(196),E=n(190),v=n(51),x=n(11),w=n(197),O=n(84),y=n.n(O),j=n(85),k=n.n(j),C=n(86),S=n.n(C),N=n(87),_=n.n(N);var B=n(88),A=n(185),I=n(200),L=n(188),z=n(191),G=n(201),P=n(193),W=n(16),F=n(72),T=n.n(F),H=n(21),M=n.n(H),U=n(33),D=n(73),R=n(74),J=function(){function e(){Object(D.a)(this,e)}return Object(R.a)(e,null,[{key:"authenticatedFetch",value:function(){var e=Object(U.a)(M.a.mark((function e(t){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isAuthorized||this.getExistingCredential(),(n=new Headers).set("Authorization","Basic "+btoa(this.username+":"+this.key)),e.next=5,fetch(this.API_BASE_URL+t,{method:"GET",headers:n});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getExistingCredential",value:function(){var e=localStorage.getItem("username"),t=localStorage.getItem("key");e&&""!==e&&t&&""!==t&&(this.username=e,this.key=t)}},{key:"checkCredential",value:function(){var e=Object(U.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticatedFetch("course/catalog/filter/BIOL/200/UGRD");case 2:return t=e.sent,this.isAuthorized=!0,e.abrupt("return",t.ok);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(U.a)(M.a.mark((function e(t,n){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.username=t,this.key=n,e.next=4,this.checkCredential();case 4:return(a=e.sent)&&(localStorage.setItem("username",this.username),localStorage.setItem("key",n)),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"facilities_buildinglist",value:function(){var e=Object(U.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticatedFetch("facilities/buildinglist/");case 2:if(401!==(t=e.sent).status){e.next=7;break}return e.abrupt("return","test2");case 7:return e.abrupt("return",t.json());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();J.API_BASE_URL="https://opendata.concordia.ca/API/v1/",J.username="",J.key="",J.isAuthorized=!1;var q=n(75),Y=n.n(q),$=n(28),K=n(29);function Q(){var e=Object($.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 18px;\n  height: 18px;\n  background-color: #000;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  user-select: none;\n  transform: translate(-50%, -50%);\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n"]);return Q=function(){return e},e}var V=K.a.div(Q(),(function(e){return e.onClick?"pointer":"default"})),X=function(e){return r.a.createElement(V,Object.assign({alt:e.text},e.onClick?{onClick:e.onClick}:{}))};X.defaultProps={onClick:null};var Z=X,ee=n(54),te=n.n(ee),ne=Object(l.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)},tab:{padding:e.spacing(0),width:"50%",minWidth:"0"},fullHeight:{paddingBottom:e.spacing(8),height:"100vh"},fullContainer:{height:"100%"}}}));function ae(e){var t=e.children,n=e.value,a=e.index,c=Object(B.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},c),n===a&&r.a.createElement("div",null,t))}function re(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function ce(e,t){return e[t]}var ie=n(83),oe=n.n(ie);function le(){var e=Object($.a)(["\n  background-color: red;\n"]);return le=function(){return e},e}function ue(){var e=Object($.a)(["\n  width: 50%;\n  margin-bottom: 1rem;\n"]);return ue=function(){return e},e}function se(){var e=Object($.a)(["\n  background: linear-gradient(to bottom, #6371c7, #5563c1);\n  border-color: #3f4eae;\n  border-radius: 3px;\n  padding: 1rem;\n  color: white;\n  font-weight: 700;\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return se=function(){return e},e}function me(){var e=Object($.a)(["\n  padding: 1rem;\n  border: 1px solid #999;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n"]);return me=function(){return e},e}function de(){var e=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return de=function(){return e},e}function pe(){var e=Object($.a)(["\n  box-sizing: border-box;\n  max-width: 410px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return pe=function(){return e},e}var fe=K.a.div(pe()),be=K.a.div(de()),he=K.a.input(me()),ge=K.a.button(se()),Ee=K.a.img(ue()),ve=K.a.div(le());var xe=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],s=(l[1],Object(a.useState)("")),m=Object(o.a)(s,2),d=m[0],p=m[1],f=Object(a.useState)(""),b=Object(o.a)(f,2),h=b[0],g=b[1],E=function(){var e=Object(U.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.login(d,h);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?r.a.createElement(x.a,{to:"/"}):r.a.createElement(fe,null,r.a.createElement(Ee,{src:oe.a}),r.a.createElement(be,null,r.a.createElement(he,{type:"username",value:d,onChange:function(e){p(e.target.value)},placeholder:"email"}),r.a.createElement(he,{type:"password",value:h,onChange:function(e){g(e.target.value)},placeholder:"password"}),r.a.createElement(ge,{onClick:E},"Sign In")),r.a.createElement("a",{href:"https://opendata.concordia.ca/admin/register.php",rel:"noopener noreferrer",target:"_blank"},"Don't have an account?"),u&&r.a.createElement(ve,null,"The username or password provided were incorrect!"))},we=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(1),marginTop:e.spacing(8)},nested:{paddingLeft:e.spacing(4)}}})),Oe=[{path:"/",exact:!0,component:function(){return r.a.createElement("div",null,"click on an item in sidebar to see data")}},{path:"/login",component:xe},{path:"/facilities/buildinglist",component:function(){var e=ne(),t=Object(W.a)(),n=r.a.useState(0),c=Object(o.a)(n,2),i=c[0],l=c[1],u=Object(a.useState)([]),m=Object(o.a)(u,2),d=m[0],b=m[1],g=Object(a.useState)([]),v=Object(o.a)(g,2),x=v[0],w=v[1],O=Object(a.useState)(0),y=Object(o.a)(O,2),j=y[0],k=y[1],C=Object(a.useState)([45.495376,-73.577997]),S=Object(o.a)(C,2),N=S[0],_=S[1],B=Object(a.useState)(),F=Object(o.a)(B,2),H=F[0],M=F[1],U=function(e,t){k(t);var n={};n=ce(0===i?d:x,j),M(n),_([Number(n.Latitude),Number(n.Longitude)])},D=function(e){window.open("https://www.google.com/maps/search/?api=1&query="+e)};return Object(a.useEffect)((function(){J.facilities_buildinglist().then((function(e){var t=e.filter((function(e){return"LOY"===e.Campus})),n=e.filter((function(e){return"SGW"===e.Campus}));w(t),b(n)}))}),[]),r.a.createElement("div",null,r.a.createElement(A.a,{container:!0,spacing:1,className:e.fullHeight},r.a.createElement(A.a,{item:!0,xs:8,className:e.fullContainer},r.a.createElement(Y.a,{defaultCenter:[45.495376,-73.577997],center:N,zoom:15,yesIWantToUseGoogleMapApiInternals:!0},H&&r.a.createElement(Z,{text:H.Building_Long_Name,lat:H.Latitude,lng:H.Longitude}))),r.a.createElement(A.a,{item:!0,xs:4,style:{maxHeight:"100%",overflow:"auto"}},r.a.createElement(s.a,{position:"static",color:"default"},r.a.createElement(I.a,{value:i,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary"},r.a.createElement(L.a,Object.assign({className:e.tab,label:"Webster"},re(0))),r.a.createElement(L.a,Object.assign({className:e.tab,label:"Loyola"},re(1))))),r.a.createElement(T.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){l(e)}},r.a.createElement(ae,{value:i,index:0,dir:t.direction},r.a.createElement(p.a,{component:"nav"},d.map((function(e,t){return r.a.createElement(h.a,{key:t,button:!0,selected:j===t,onClick:function(e){return U(0,t)}},r.a.createElement(E.a,{primary:e.Building_Name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Building_Long_Name),r.a.createElement("br",null),r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Address))}),r.a.createElement(z.a,null,r.a.createElement(G.a,{title:"Open in Google Map"},r.a.createElement(P.a,{onClick:function(){return D(e.Address)}},r.a.createElement(te.a,null)))))})))),r.a.createElement(ae,{value:i,index:1,dir:t.direction},r.a.createElement(p.a,{component:"nav"},x.map((function(e,t){return r.a.createElement(h.a,{key:t,button:!0,selected:j===t,onClick:function(e){return U(0,t)}},r.a.createElement(E.a,{primary:e.Building_Name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Building_Long_Name),r.a.createElement("br",null),r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Address))}),r.a.createElement(z.a,null,r.a.createElement(G.a,{title:"Open in Google Map"},r.a.createElement(P.a,{onClick:function(){return D(e.Address)}},r.a.createElement(te.a,null)))))}))))))))}}];function ye(){var e=we(),t=r.a.useState(!0),n=Object(o.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(""),O=Object(o.a)(l,2),j=O[0],C=O[1];return Object(a.useEffect)((function(){C("/open-concordia")}),[j]),r.a.createElement(v.a,{basename:j},r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(s.a,{position:"fixed",className:e.appBar},r.a.createElement(d.a,null,r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Concordia Open Data"))),r.a.createElement(u.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(p.a,null,r.a.createElement(h.a,{button:!0,onClick:function(){i(!c)}},r.a.createElement(g.a,null,r.a.createElement(y.a,null)),r.a.createElement(E.a,{primary:"Facilities"}),c?r.a.createElement(k.a,null):r.a.createElement(S.a,null)),r.a.createElement(w.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(p.a,{component:"div",disablePadding:!0},r.a.createElement(h.a,{button:!0,className:e.nested,component:v.b,to:"/facilities/buildinglist"},r.a.createElement(g.a,null,r.a.createElement(_.a,null)),r.a.createElement(E.a,{primary:"Building List"}))))),r.a.createElement(b.a,null),r.a.createElement(p.a,null))),r.a.createElement("main",{className:e.content},r.a.createElement(x.d,null,Oe.map((function(e,t){return r.a.createElement(x.b,{key:t,exact:e.exact,path:e.path,component:e.component})}))))))}var je=function(){return r.a.createElement(ye,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},96:function(e,t,n){e.exports=n(146)}},[[96,1,2]]]);
//# sourceMappingURL=main.aa9d57a0.chunk.js.map