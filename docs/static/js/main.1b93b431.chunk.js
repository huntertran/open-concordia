(this.webpackJsonpopen_concordia=this.webpackJsonpopen_concordia||[]).push([[0],{100:function(e,t,a){e.exports=a(132)},105:function(e,t,a){},106:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),o=(a(105),a(106),a(15)),l=a(172),s=a(195),u=a(177),m=a(187),d=a(188),p=a(179),f=a(56),h=a(191),b=a(180),g=a(189),E=a(181),v=a(31),y=a(12),w=a(190),x=a(85),O=a.n(x),j=a(86),k=a.n(j),C=a(87),N=a.n(C),S=a(88),_=a.n(S),I=a(89),L=a.n(I);var B=a(55),A=a(175),D=a(193),F=a(178),W=a(182),G=a(196),P=a(185),z=a(16),M=a(10),R=a.n(M),T=a(29),U=a(76),H=a(77),V=function(){function e(){Object(U.a)(this,e)}return Object(H.a)(e,null,[{key:"authenticatedFetch",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isAuthorized||this.isCredentialExisted(),(a=new Headers).set("Authorization","Basic "+btoa(this.username+":"+this.key)),e.next=5,fetch(this.API_BASE_URL+t,{method:"GET",headers:a});case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isCredentialExisted",value:function(){var e=localStorage.getItem("username"),t=localStorage.getItem("key");return!(!e||""===e||!t||""===t)&&(this.username=e,this.key=t,!0)}},{key:"checkCredential",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticatedFetch("/course/catalog/filter/BIOL/200/UGRD");case 2:return t=e.sent,this.isAuthorized=!0,e.abrupt("return",t.ok);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(T.a)(R.a.mark((function e(t,a){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.username=t,this.key=a,e.next=4,this.checkCredential();case 4:return(n=e.sent)&&(localStorage.setItem("username",this.username),localStorage.setItem("key",a)),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"facilities_buildinglist",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticatedFetch("/facilities/buildinglist/");case 2:if(401!==(t=e.sent).status){e.next=7;break}return e.abrupt("return","test2");case 7:return e.abrupt("return",t.json());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"facilities_pointlist",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authenticatedFetch("/facilities/pointlist/");case 2:if(401!==(t=e.sent).status){e.next=7;break}return e.abrupt("return","test2");case 7:return e.abrupt("return",t.json());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"facilities_environmental",value:function(){var e=Object(T.a)(R.a.mark((function e(t,a){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/facilities/environmental/filter/"+t+" 00:00:00/"+a+" 00:00:00",e.next=3,this.authenticatedFetch(n);case 3:if(401!==(r=e.sent).status){e.next=8;break}return e.abrupt("return","test2");case 8:return e.abrupt("return",r.json());case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();V.API_BASE_URL="https://concordia-corsproxy.azurewebsites.net/open-concordia?api=",V.username="",V.key="",V.isAuthorized=!1;var J=a(78),q=a.n(J),Y=Object(l.a)((function(){return{div:{position:"absolute",top:"50%",left:"50%",width:18,height:18,backgroundColor:"#000",border:"2px solid #fff",borderRadius:"100%",userSelect:"none",transform:"translate(-50%, -50%)"}}}));function $(){var e=Y();return r.a.createElement("div",{className:e.div})}var K=a(58),Q=a.n(K),X=Object(l.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)},tab:{padding:e.spacing(0),width:"50%",minWidth:"0"},fullHeight:{paddingBottom:e.spacing(8),height:"100vh"},fullContainer:{height:"100%"}}}));function Z(e){var t=e.children,a=e.value,n=e.index,i=Object(B.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),a===n&&r.a.createElement("div",null,t))}function ee(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function te(e,t){return e[t]}var ae=a(192),ne=a(186),re=a(84),ie=a.n(re),ce=a(83),oe=Object(l.a)((function(e){return{root:{height:"100%",display:"grid",gridTemplateColumns:"100%",gridTemplateRows:"minmax(min-content, max-content) auto"},form:{gridColumn:"1",gridRow:"1"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},sensorsData:{gridColumn:"1",gridRow:"2",display:"flex",flexWrap:"wrap",flexDirection:"row"},sensor:{flexGrow:1,height:300,display:"flex",flexWrap:"wrap",flexDirection:"row"},sensorDetail:{flexGrow:1,maxWidth:250},sensorChart:{flexGrow:3}}}));function le(e,t){for(var a=[],n=0;n<t.length;n++){var r=t[n];a.push([n,r[e]])}return{label:"W/m2",data:a}}var se=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return r.a.createElement(y.b,Object.assign({},a,{render:function(e){return V.isAuthorized?r.a.createElement(t,e):r.a.createElement(y.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ue=Object(l.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{width:"calc(100vw - 240px)",padding:e.spacing(1),marginTop:e.spacing(8),height:"calc(100vh - 68px)"},nested:{paddingLeft:e.spacing(4)}}})),me=[{path:"/dashboard",exact:!0,component:function(){return r.a.createElement("div",null,"click on an item in sidebar to see data")}},{path:"/dashboard/facilities/buildinglist",component:function(){var e=X(),t=Object(z.a)(),a=r.a.useState(0),i=Object(o.a)(a,2),c=i[0],l=i[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),d=m[0],h=m[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),y=v[0],w=v[1],x=Object(n.useState)(0),O=Object(o.a)(x,2),j=O[0],k=O[1],C=Object(n.useState)([45.495376,-73.577997]),N=Object(o.a)(C,2),S=N[0],_=N[1],I=Object(n.useState)(),L=Object(o.a)(I,2),B=L[0],M=L[1],R=function(e,t){k(t);var a={};a=te(0===c?d:y,j),M(a),_([Number(a.Latitude),Number(a.Longitude)])},T=function(e){window.open("https://www.google.com/maps/search/?api=1&query="+e)};return Object(n.useEffect)((function(){V.facilities_buildinglist().then((function(e){var t=e.filter((function(e){return"LOY"===e.Campus})),a=e.filter((function(e){return"SGW"===e.Campus}));w(t),h(a)}))}),[]),r.a.createElement("div",null,r.a.createElement(A.a,{container:!0,spacing:1,className:e.fullHeight},r.a.createElement(A.a,{item:!0,xs:8,className:e.fullContainer},r.a.createElement(q.a,{defaultCenter:[45.495376,-73.577997],center:S,zoom:15,yesIWantToUseGoogleMapApiInternals:!0},B&&r.a.createElement($,{text:B.Building_Long_Name,lat:B.Latitude,lng:B.Longitude}))),r.a.createElement(A.a,{item:!0,xs:4,style:{maxHeight:"100%",overflow:"auto"}},r.a.createElement(u.a,{position:"static",color:"default"},r.a.createElement(D.a,{value:c,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary"},r.a.createElement(F.a,Object.assign({className:e.tab,label:"Webster"},ee(0))),r.a.createElement(F.a,Object.assign({className:e.tab,label:"Loyola"},ee(1))))),r.a.createElement(Z,{value:c,index:0,dir:t.direction},r.a.createElement(p.a,{component:"nav"},d.map((function(e,t){return r.a.createElement(b.a,{key:t,button:!0,selected:j===t,onClick:function(e){return R(0,t)}},r.a.createElement(E.a,{primary:e.Building_Name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Building_Long_Name),r.a.createElement("br",null),r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Address))}),r.a.createElement(W.a,null,r.a.createElement(G.a,{title:"Open in Google Map"},r.a.createElement(P.a,{onClick:function(){return T(e.Address)}},r.a.createElement(Q.a,null)))))})))),r.a.createElement(Z,{value:c,index:1,dir:t.direction},r.a.createElement(p.a,{component:"nav"},y.map((function(e,t){return r.a.createElement(b.a,{key:t,button:!0,selected:j===t,onClick:function(e){return R(0,t)}},r.a.createElement(E.a,{primary:e.Building_Name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Building_Long_Name),r.a.createElement("br",null),r.a.createElement(f.a,{component:"span",variant:"body2",color:"textSecondary"},e.Address))}),r.a.createElement(W.a,null,r.a.createElement(G.a,{title:"Open in Google Map"},r.a.createElement(P.a,{onClick:function(){return T(e.Address)}},r.a.createElement(Q.a,null)))))})))))))}},{path:"/dashboard/facilities/sensors",component:function(){var e=oe(),t=Object(n.useState)(),a=Object(o.a)(t,2),i=(a[0],a[1]),c=Object(n.useState)([]),l=Object(o.a)(c,2),s=(l[0],l[1]),u=Object(n.useState)(new Date),m=Object(o.a)(u,2),d=m[0],p=m[1],h=Object(n.useState)(new Date),b=Object(o.a)(h,2),g=b[0],E=b[1],v=Object(n.useState)([]),y=Object(o.a)(v,2),w=y[0],x=y[1];Object(n.useEffect)((function(){V.facilities_pointlist().then(i)}),[]);var O=r.a.useMemo((function(){return{showPoints:!1}}),[]),j=r.a.useMemo((function(){return[{primary:!0,type:"time",position:"bottom"},{type:"linear",position:"left"}]}),[]);return r.a.createElement("div",{className:e.root},r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(ae.a,{id:"date",label:"From",type:"date",defaultValue:d,onChange:function(e){p(e.target.value)},className:e.textField,InputLabelProps:{shrink:!0}}),r.a.createElement(ae.a,{id:"date",label:"To",type:"date",defaultValue:g,onChange:function(e){E(e.target.value)},className:e.textField,InputLabelProps:{shrink:!0}}),r.a.createElement(ne.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){V.facilities_environmental(d,g).then((function(e){s(e),x([le("Point_1",e)])}))},endIcon:r.a.createElement(ie.a,null)},"Get Data")),r.a.createElement("div",{className:e.sensorsData},r.a.createElement("div",{className:e.sensor},r.a.createElement("div",{className:e.sensorDetail},r.a.createElement(f.a,null,"Name: MHL1-017.IC"),r.a.createElement(f.a,null,"Description: Outdoor Temperature Sensor of EV weather station"),r.a.createElement(f.a,null,"Building: EV"),r.a.createElement(f.a,null,"Floor: 17M"),r.a.createElement(f.a,null,"Meaning: Solar Irradiance"),r.a.createElement(f.a,null,"Units: W/m2"),r.a.createElement(f.a,null,"Sensor: Pyrometer")),r.a.createElement("div",{className:e.sensorChart},r.a.createElement(ce.a,{data:w,axes:j,series:O,tooltip:!0})))))}}];function de(){var e=ue(),t=r.a.useState(!0),a=Object(o.a)(t,2),n=a[0],i=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(u.a,{position:"fixed",className:e.appBar},r.a.createElement(d.a,null,r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Concordia Open Data"))),r.a.createElement(s.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(p.a,null,r.a.createElement(b.a,{button:!0,onClick:function(){i(!n)}},r.a.createElement(g.a,null,r.a.createElement(O.a,null)),r.a.createElement(E.a,{primary:"Facilities"}),n?r.a.createElement(k.a,null):r.a.createElement(N.a,null)),r.a.createElement(w.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(p.a,{component:"div",disablePadding:!0},r.a.createElement(b.a,{button:!0,className:e.nested,component:v.b,to:"/dashboard/facilities/buildinglist"},r.a.createElement(g.a,null,r.a.createElement(_.a,null)),r.a.createElement(E.a,{primary:"Building List"})),r.a.createElement(b.a,{button:!0,className:e.nested,component:v.b,to:"/dashboard/facilities/sensors"},r.a.createElement(g.a,null,r.a.createElement(L.a,null)),r.a.createElement(E.a,{primary:"Sensors"}))))),r.a.createElement(h.a,null),r.a.createElement(p.a,null))),r.a.createElement("main",{className:e.content},r.a.createElement(y.d,null,me.map((function(e,t){return r.a.createElement(se,{key:t,exact:e.exact,path:e.path,component:e.component})})))))}var pe=Object(l.a)((function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},formItem:{display:"block",margin:e.spacing(2)},center:{marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(2),marginBottom:e.spacing(2),display:"block"}}}));var fe=function(){var e=pe(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),f=p[0],h=p[1],b=function(){var e=Object(T.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.login(u,f);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?r.a.createElement(y.a,{to:"/dashboard"}):r.a.createElement("div",{className:e.root},r.a.createElement("form",null,r.a.createElement(ae.a,{className:e.formItem,label:"Username",type:"text",value:u,onChange:function(e){m(e.target.value)},variant:"outlined"}),r.a.createElement(ae.a,{label:"key",className:e.formItem,type:"password",value:f,variant:"outlined",onChange:function(e){h(e.target.value)}}),r.a.createElement(ne.a,{variant:"contained",color:"primary",className:e.center,onClick:b},"Login")),r.a.createElement("a",{className:e.center,href:"https://opendata.concordia.ca/admin/register.php",rel:"noopener noreferrer",target:"_blank"},"Don't have an account?"))};var he=function(){return r.a.createElement(y.d,null,r.a.createElement(se,{path:"/dashboard",component:de}),r.a.createElement(y.b,{path:"/login",component:fe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,{basename:"/open-concordia"},r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.1b93b431.chunk.js.map