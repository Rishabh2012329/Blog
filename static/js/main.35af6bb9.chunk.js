(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(39),r=n.n(i),l=(n.p,n(10)),c=n.n(l),s=n(15),u=n(3),d=n(133),p=n(135),b=n(29),g=(n(92),n(2));function x(e){var t=e.setlog,n=e.usr,o=e.clrusr,a=e.setTog;return n?Object(g.jsx)("div",{style:{zIndex:"8",color:"#404040",boxShadow:"1px 1px 10px black",backgroundColor:"white",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:"0.2s",width:"200px",display:"flex",flexDirection:"column",right:"0",top:"0",bottom:"0",position:"fixed",alignItems:"center"},children:Object(g.jsx)(d.a,{onClick:function(){return o()},style:{marginTop:"10px",marginBottom:"10px"},colorScheme:"teal",width:"120px",variant:"outline",children:"Logout"})}):Object(g.jsxs)("div",{style:{zIndex:"8",color:"#404040",boxShadow:"1px 1px 10px black",backgroundColor:"white",animation:"ease-in 1s",animationName:"moc",animationDirection:"normal",animationDuration:"0.2s",width:"200px",display:"flex",flexDirection:"column",right:"0",top:"0",bottom:"0",position:"fixed",alignItems:"center"},children:[Object(g.jsx)(d.a,{onClick:function(){a("none"),t(!0)},colorScheme:"teal",width:"120px",style:{marginTop:"10px",marginBottom:"10px"},variant:"outline",children:"Login"}),Object(g.jsx)(d.a,{onClick:function(){a("none"),t(!1)},colorScheme:"teal",width:"120px",variant:"solid",children:"Register"})]})}var j=n(5),f=n(8),h=n(130),m=n(21),O=n.n(m),v=n(20),y=function(e){var t=e.setlog,n=e.getUser,a=Object(o.useState)({email:"",password:""}),i=Object(u.a)(a,2),r=i[0],l=i[1],p=function(e){l(Object(f.a)(Object(f.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))};function x(){return(x=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://obscure-island-60748.herokuapp.com/auth/login",r,{headers:{"Content-Type":"application/json"}}).then((function(e){n(e.data),alert(e.data.message)})).catch((function(e){var t,n;alert(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{style:{display:"flex",borderRadius:"5px",flexDirection:"column",width:"300px",backgroundColor:"white",padding:"20px",paddingTop:"5px",position:"relative"},children:[Object(g.jsx)("div",{style:{marginBottom:"10px",width:"100%"},children:Object(g.jsx)(b.b,{style:{float:"right"},onClick:function(){return t("")}})}),Object(g.jsx)(h.a,{name:"email",style:{backgroundColor:"#f1f1f1"},onChange:p,value:r.email,placeholder:"email",size:"md"}),Object(g.jsx)(h.a,{name:"password",type:"password",style:{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"},onChange:p,value:r.password,placeholder:"password",size:"md"}),Object(g.jsx)(d.a,{onClick:function(){return function(){return x.apply(this,arguments)}()},colorScheme:"teal",variant:"solid",children:"Login"})]})},w=function(e){var t=e.setlog,n=Object(o.useState)({email:"",password:"",fullName:"",phone:0,role:"viewer"}),a=Object(u.a)(n,2),i=a[0],r=a[1],l=Object(o.useState)(""),p=Object(u.a)(l,2),x=(p[0],p[1],function(e){r(Object(f.a)(Object(f.a)({},i),{},Object(j.a)({},e.target.name,e.target.value)))});function m(){return(m=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://obscure-island-60748.herokuapp.com/auth/signup",i,{headers:{"Content-Type":"application/json"}}).then((function(e){alert(e.data.message)})).catch((function(e){var t,n;alert(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{style:{display:"flex",borderRadius:"5px",flexDirection:"column",width:"300px",backgroundColor:"white",padding:"20px",paddingTop:"5px",position:"relative"},children:[Object(g.jsx)("div",{style:{width:"100%"},children:Object(g.jsx)(b.b,{style:{float:"right"},onClick:function(){return t("")}})}),Object(g.jsx)(h.a,{name:"fullName",style:{marginTop:"10px",backgroundColor:"#f1f1f1"},onChange:x,value:i.fullName,placeholder:"FullName",size:"md"}),Object(g.jsx)(h.a,{name:"phone",type:"tel",style:{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"},onChange:x,value:i.phone,placeholder:"Phone",size:"md"}),Object(g.jsx)(h.a,{name:"email",style:{backgroundColor:"#f1f1f1"},onChange:x,value:i.email,placeholder:"email",size:"md"}),Object(g.jsx)(h.a,{name:"password",type:"password",style:{marginTop:"10px",marginBottom:"10px",backgroundColor:"#f1f1f1"},onChange:x,value:i.password,placeholder:"password",size:"md"}),Object(g.jsx)(d.a,{onClick:function(){!function(){m.apply(this,arguments)}()},colorScheme:"teal",variant:"solid",children:"Register"})]})};var k=Object(v.b)((function(e){return{user:e.user}}),(function(e){return{getUser:function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"GET_USER",payload:n._doc});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.log,n=e.setlog,o=e.getUser;return Object(g.jsx)("div",{style:{top:0,left:0,right:0,bottom:0,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)",zIndex:"8"},children:t?Object(g.jsx)(y,{setlog:n,getUser:o}):Object(g.jsx)(w,{setlog:n})})}));var C=Object(v.b)((function(e){return{user:e.user}}),(function(e){return{clearUser:function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"LOGOUT_USER"});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))((function(e){var t=Object(o.useState)("none"),n=Object(u.a)(t,2),a=n[0],i=n[1],r=Object(o.useState)(""),l=Object(u.a)(r,2),c=l[0],s=l[1];return Object(o.useEffect)((function(){console.log(e.user.usr)}),[e.user.usr]),Object(g.jsxs)("div",{style:{zIndex:"3",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:"20px",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",top:0,right:0,left:0,position:"fixed"},children:[Object(g.jsx)("h1",{style:{marginLeft:"20px",fontSize:"20px",fontWeight:"bold"},children:"Rishabh's Blog"}),e.user.usr?Object(g.jsx)(d.a,{onClick:function(){return e.clearUser()},colorScheme:"teal",width:"120px",variant:"outline",children:"Logout"}):Object(g.jsxs)(p.a,{id:"mobile",direction:"row",spacing:4,style:{marginRight:"30px"},children:[Object(g.jsx)(d.a,{onClick:function(){s(!0)},colorScheme:"teal",width:"120px",variant:"outline",children:"Login"}),Object(g.jsx)(d.a,{onClick:function(){s(!1)},colorScheme:"teal",width:"120px",variant:"solid",children:"Register"})]}),Object(g.jsx)("div",{id:"menue-toggler",onClick:function(){return i("flex")},children:Object(g.jsx)(b.a,{style:{fontSize:"20px",color:"teal"}})}),Object(g.jsxs)("div",{style:{display:a},children:[Object(g.jsx)(x,{usr:e.user.usr,setlog:s,setTog:i,clrusr:e.clearUser}),Object(g.jsx)("div",{style:{top:"0",bottom:"0",left:"0",right:"0",position:"fixed",zIndex:"4",backgroundColor:"rgba(0,0,0,0.3)"},onClick:function(){return i("none")}})]}),""!==c?Object(g.jsx)(k,{log:c,setlog:s}):null]})})),S=n(134),D=n(27),L=n(76),T={},z={},B=Object(D.c)({blog:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case"LOAD_BLOG":return T.blog=o.payload,{blogs:T.blog};case"POST_BLOG":return T.blog.push(o.payload),{blogs:T.blog};case"UPDATE_BLOG":var a=null===(e=n.blog)||void 0===e?void 0:e.map((function(e){return e._id==o.payload._id?Object.assign({},e,o.payload):e}));return T.blog=a,{blogs:T.blog};case"DELETE_BLOG":a=null===(t=n.blog)||void 0===t?void 0:t.filter((function(e){return e._id!==o.payload._id}));return T.blog=a,{blogs:T.blog};default:return n}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return t.payload?(z.usr=t.payload,{usr:z.usr}):"";case"LOGOUT_USER":return"";default:return e}}}),I=[L.a],_=Object(D.e)(B,{},Object(D.d)(D.a.apply(void 0,I),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),E=n(132),P=n(131);var N=Object(v.b)((function(e){return{blog:e.blog}}),(function(e){return{updateBlog:function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,O.a.post("http://localhost:5000/blog/updateBlog",n,{header:{"Content-Type":"application/json"}}).catch((function(e){var t,n;alert(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message)}));case 3:t.sent,e({type:"UPDATE_BLOG",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.data,n=e.setData,o=e.setShow,a=e.updateBlog;return Object(g.jsx)("div",{style:{top:0,left:0,right:0,bottom:0,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)",zIndex:"8"},children:Object(g.jsxs)(p.a,{spacing:4,style:{backgroundColor:"white",padding:"25px",borderRadius:"5px",maxWidth:"350px",width:"350px",position:"relative",zIndex:"10"},children:[Object(g.jsx)("div",{style:{top:"10px",right:"10px",position:"absolute"},children:Object(g.jsx)(b.b,{onClick:function(){return o(!1)}})}),Object(g.jsx)(h.a,{value:null===t||void 0===t?void 0:t.title,onChange:function(e){n(Object(f.a)(Object(f.a)({},t),{},{title:e.target.value}))},placeholder:"title",size:"md"}),Object(g.jsx)(h.a,{value:null===t||void 0===t?void 0:t.Date,onChange:function(e){return n(Object(f.a)(Object(f.a)({},t),{},{Date:e.target.value}))},type:"date",placeholder:"date",size:"md"}),Object(g.jsx)(h.a,{value:null===t||void 0===t?void 0:t.imgLink,onChange:function(e){return n(Object(f.a)(Object(f.a)({},t),{},{imgLink:e.target.value}))},placeholder:"Image Link",size:"md"}),Object(g.jsx)(P.a,{value:null===t||void 0===t?void 0:t.Info,onChange:function(e){return n(Object(f.a)(Object(f.a)({},t),{},{Info:e.target.value}))},type:"textarea",placeholder:"Info",size:"md"}),Object(g.jsx)(d.a,{onClick:function(){a(t)},children:"Update"})]})})}));function R(e){var t=e.imgLink,n=e.title,a=e.Info,i=e.Date,r=e._id,l=e.usr,c=e.del,s=Object(o.useState)(),d=Object(u.a)(s,2),p=d[0],b=d[1],x=Object(o.useState)(!1),j=Object(u.a)(x,2),f=j[0],h=j[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(E.a,{direction:"column",style:{width:"300px",height:"330px",zIndex:"0",borderRadius:"5px",overflow:"hidden",boxShadow:"0px 0px 8px rgba(0,0,0,0.2)",margin:"30px"},children:[Object(g.jsx)("img",{src:t,style:{width:"100%",height:"180px"}}),Object(g.jsxs)("div",{style:{width:"100%",padding:"9px",borderBottom:"solid rgba(0,0,0,0.4) 1px"},children:[Object(g.jsx)("div",{style:{fontSize:"17px",fontWeight:"bold"},children:n}),Object(g.jsxs)("div",{style:{color:"#cecece",fontSize:"14px",marginTop:"5px",marginBottom:"5px"},children:["Published-",i]}),Object(g.jsx)("div",{style:{width:"100%",fontSize:"14px",height:"35px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:a})]}),Object(g.jsxs)(E.a,{direction:"row",style:{padding:"10px",width:"100%",justifyContent:"space-between"},children:[Object(g.jsx)("div",{style:{color:"#cecece",fontSize:"14px"},children:"By Rishabh baid"}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"150px"},children:[Object(g.jsx)("button",{onClick:function(){return b({title:n,Info:a,Date:i,imgLink:t,_id:r}),void h(!0)},style:{fontSize:"14px",color:"green",outline:"none",visibility:"admin"===(null===l||void 0===l?void 0:l.role)?"":"hidden"},children:"edit"}),Object(g.jsx)("button",{onClick:function(){c({title:n,Info:a,Date:i,imgLink:t,_id:r})},style:{fontSize:"14px",color:"green",outline:"none",visibility:"admin"===(null===l||void 0===l?void 0:l.role)?"":"hidden"},children:"delete"}),Object(g.jsx)("div",{style:{color:"#0800ff",cursor:"pointer",fontSize:"14px"},children:"Read More"})]})]})]}),f?Object(g.jsx)(N,{data:p,setData:b,setShow:h}):null]})}var U=function(e){for(var t=e.postsPerPage,n=e.totalPosts,o=e.state,a=e.paginate,i=e.pageNumber,r=[],l=1;l<=Math.ceil(n/t);l++)r.push(l);return Object(g.jsx)("nav",{children:Object(g.jsx)("ul",{className:"pagination",style:{marginBottom:"20px",display:"flex",flexDirection:"row"},children:r.map((function(e){return Object(g.jsx)("li",{style:{listStyle:"none",borderRadius:"5px",background:e===i?"#f1f1f1":"",margin:"5px",padding:"5px",width:"30px",textAlign:"center"},className:"page-item",children:Object(g.jsx)("a",{onClick:function(){return a(Object(f.a)(Object(f.a)({},o),{},{pageNumber:e}))},href:"#",className:"page-link",children:e})},e)}))})})},G=function(e){var t=e.posts,n=(e.loading,e.usr),o=e.del;return Object(g.jsx)("div",{style:{width:"100%",margin:"auto",display:"flex",flexWrap:"wrap",zIndex:"0"},children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(g.jsx)(R,Object(f.a)(Object(f.a)({usr:n,del:o},e),{},{className:"list-group-item"}),t)}))})},A={length:0,blog:[1,2],pageNumber:1,postsPerPage:6};var W=Object(v.b)((function(e){return{blog:e.blog,user:e.user}}),(function(e){return{loadBlog:function(){var t=Object(s.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://obscure-island-60748.herokuapp.com/blog/getAllBlog").catch((function(e){console.log(e.response)}));case 2:n=t.sent,e({type:"LOAD_BLOG",payload:null===n||void 0===n?void 0:n.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),postBlog:function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("https://obscure-island-60748.herokuapp.com/blog/postBlog",n,{header:{"Content-Type":"application/json"}}).catch((function(e){alert(e.response.data.message)}));case 2:t.sent,e({type:"POST_BLOG",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteBlog:function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("https://obscure-island-60748.herokuapp.com/blog/deleteBlog",n,{header:{"Content-Type":"application/json"}}).catch((function(e){alert(e.response.data.message)}));case 2:e({type:"DELETE_BLOG",payload:n});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t,n,a,i,r,l=Object(o.useState)(A),p=Object(u.a)(l,2),b=p[0],x=p[1],m=Object(o.useState)({title:"",Date:"",imgLink:"",Info:""}),O=Object(u.a)(m,2),v=O[0],y=O[1];function w(){return(w=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadBlog();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(o.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[e.blog.blogs]);var k=function(e){y(Object(f.a)(Object(f.a)({},v),{},Object(j.a)({},e.target.name,e.target.value)))},C=b.pageNumber*b.postsPerPage,S=C-b.postsPerPage,D=null===e||void 0===e||null===(t=e.blog)||void 0===t||null===(n=t.blogs)||void 0===n?void 0:n.slice(S,C);return Object(g.jsxs)("div",{style:{marginTop:"100px"},children:[Object(g.jsxs)("div",{style:{width:"90%",margin:"auto",display:"flex",flexWrap:"wrap",flexDirection:"column"},children:[Object(g.jsx)(U,{postsPerPage:b.postsPerPage,pageNumber:b.pageNumber,totalPosts:null===(a=e.blog)||void 0===a||null===(i=a.blogs)||void 0===i?void 0:i.length,state:b,paginate:x}),Object(g.jsx)(G,{del:function(t){e.deleteBlog(t)},usr:e.user.usr,posts:D})]}),"admin"===(null===(r=e.user.usr)||void 0===r?void 0:r.role)?Object(g.jsxs)("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",margin:"auto",marginTop:"10px",marginBottom:"30px",zIndex:"0"},children:[Object(g.jsx)("h1",{style:{textAlign:"center",fontSize:"21px",fontWeight:"700",margin:"15px"},children:"Post a blog"}),Object(g.jsx)(h.a,{name:"title",style:{margin:"5px",backgroundColor:"#f1f1f1"},onChange:k,value:v.title,placeholder:"Title",size:"md"}),Object(g.jsx)(h.a,{name:"Date",type:"date",style:{margin:"5px",backgroundColor:"#f1f1f1"},onChange:k,value:v.Date,placeholder:"Date",size:"md"}),Object(g.jsx)(h.a,{name:"imgLink",style:{margin:"5px",backgroundColor:"#f1f1f1"},onChange:k,value:v.imgLink,placeholder:"Image Link",size:"md"}),Object(g.jsx)(P.a,{name:"Info",style:{margin:"5px",backgroundColor:"#f1f1f1"},onChange:k,value:v.Info,placeholder:"Info",size:"md"}),Object(g.jsx)(d.a,{onClick:function(){e.postBlog(v),y({title:"",Date:"",imgLink:"",Info:""})},colorScheme:"teal",style:Object(j.a)({margin:"auto"},"margin","5px"),children:"Post"})]}):null]})}));var F=function(){return Object(g.jsx)(v.a,{store:_,children:Object(g.jsx)(S.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(C,{}),Object(g.jsx)(W,{})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),X()},92:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.35af6bb9.chunk.js.map