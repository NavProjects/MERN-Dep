(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(19),a=n.n(i),l=(n(25),n(3)),j=(n(26),n(2)),r=n(5),o=n.n(r),p=n(0),d=function(e){var t=e.tweaked,n=Object(c.useState)([]),s=Object(l.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){o.a.get("http://localhost:8000/api/pets").then((function(e){a(e.data.getallPets)})).catch((function(e){return console.log(e)}))}),[t]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"These pets are looking for a good home"}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Type"}),Object(p.jsx)("th",{children:"Actions"})]}),i.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.type}),Object(p.jsxs)("td",{children:[" ",Object(p.jsx)(j.a,{to:"/pets/".concat(e._id),children:"Details"})," | ",Object(p.jsx)(j.a,{to:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)}))]})]})},h=function(e){var t=e.tweaked,n=e.setTweaked;return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{to:"/pets/new",children:"add a pet to the shelter"}),Object(p.jsx)(d,{tweaked:t,SetTweaked:n})]})},b=n(6),O=n(8),u=function(e){var t=e.tweaked,n=e.setTweaked,s=Object(c.useState)({name:"",type:"",description:"",style1:"",style2:"",style3:""}),i=Object(l.a)(s,2),a=i[0],r=i[1],d=Object(c.useState)({}),h=Object(l.a)(d,2),u=h[0],x=h[1],k=function(e){r(Object(O.a)(Object(O.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{to:"/",children:"Back to Home"}),Object(p.jsx)("h3",{children:"Know a pet needing a home?"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.post("http://localhost:8000/api/pets/new",a).then((function(e){Object(j.c)("/"),n(!t),r({name:"",type:"",description:"",style1:"",style2:"",style3:""})})).catch((function(e){for(var t=e.response.data.errors,n={},c=0,s=Object.entries(t);c<s.length;c++){var i=Object(l.a)(s[c],2),a=i[0],j=i[1];n[a]=j.message}x(n)}))},children:[Object(p.jsx)("p",{children:"Pet Name:"}),Object(p.jsx)("input",{type:"text",name:"name",onChange:k,value:a.name}),u.name?Object(p.jsx)("p",{children:u.name}):null,Object(p.jsx)("p",{children:"Pet Type:"}),Object(p.jsx)("input",{type:"text",name:"type",onChange:k,value:a.type}),u.type?Object(p.jsx)("p",{children:u.type}):null,Object(p.jsx)("p",{children:"Pet Description"}),Object(p.jsx)("input",{type:"text",name:"description",onChange:k,value:a.description}),u.description?Object(p.jsx)("p",{children:u.description}):null,Object(p.jsx)("p",{children:"Skills (Optional):"}),Object(p.jsx)("p",{children:"Skill 1:"}),Object(p.jsx)("input",{type:"text",name:"skill1",onChange:k,value:a.skill1}),Object(p.jsx)("p",{children:"Skill 2:"}),Object(p.jsx)("input",{type:"text",name:"skill2",onChange:k,value:a.skill2}),Object(p.jsx)("p",{children:"Skill 3:"}),Object(p.jsx)("input",{type:"text",name:"skill3",onChange:k,value:a.skill3}),Object(p.jsx)("button",{type:"submit",children:"Add pet"})]})]})},x=function(e){var t=e.tweaked,n=e.setTweaked,s=e._id,i=Object(c.useState)({name:"",type:"",description:"",style1:"",style2:"",style3:""}),a=Object(l.a)(i,2),r=a[0],d=a[1],h=Object(c.useState)({}),u=Object(l.a)(h,2),x=u[0],k=u[1];Object(c.useEffect)((function(){o.a.get("http://localhost:8000/api/pets/".concat(s)).then((function(e){return d(e.data.pet)})).catch((function(e){return console.log(e)}))}),[]);var m=function(e){d(Object(O.a)(Object(O.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{to:"/",children:"Back to Home"}),Object(p.jsx)("h3",{children:"Know a pet needing a home?"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.a.put("http://localhost:8000/api/pets/".concat(s),r).then((function(e){Object(j.c)("/"),n(!t)})).catch((function(e){for(var t=e.response.data.errors,n={},c=0,s=Object.entries(t);c<s.length;c++){var i=Object(l.a)(s[c],2),a=i[0],j=i[1];n[a]=j.message}k(n)}))},children:[Object(p.jsx)("p",{children:"Pet Name:"}),Object(p.jsx)("input",{type:"text",name:"name",onChange:m,value:r.name}),x.name?Object(p.jsx)("p",{children:x.name}):null,Object(p.jsx)("p",{children:"Pet Type:"}),Object(p.jsx)("input",{type:"text",name:"type",onChange:m,value:r.type}),x.type?Object(p.jsx)("p",{children:x.type}):null,Object(p.jsx)("p",{children:"Pet Description"}),Object(p.jsx)("input",{type:"text",name:"description",onChange:m,value:r.description}),x.description?Object(p.jsx)("p",{children:x.description}):null,Object(p.jsx)("p",{children:"Skills (Optional):"}),Object(p.jsx)("p",{children:"Skill 1:"}),Object(p.jsx)("input",{type:"text",name:"skill1",onChange:m,value:r.skill1}),Object(p.jsx)("p",{children:"Skill 2:"}),Object(p.jsx)("input",{type:"text",name:"skill2",onChange:m,value:r.skill2}),Object(p.jsx)("p",{children:"Skill 3:"}),Object(p.jsx)("input",{type:"text",name:"skill3",onChange:m,value:r.skill3}),Object(p.jsx)("button",{type:"submit",children:"Add pet"})]})]})},k=function(e){var t=e._id,n=e.tweaked,s=e.setTweaked,i=Object(c.useState)({}),a=Object(l.a)(i,2),r=a[0],d=a[1];Object(c.useEffect)((function(){o.a.get("http://localhost:8000/api/pets/".concat(t)).then((function(e){return d(e.data.pet)})).catch((function(e){return console.log(e)}))}),[]);return Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{to:"/",children:"Back to Home"}),Object(p.jsxs)("button",{onClick:function(){o.a.delete("http://localhost:8000/api/pets/delete/".concat(t)).then((function(e){Object(j.c)("/"),s(!n)})).catch((function(e){return console.log(e)}))},children:["Adopt ",r.name]}),Object(p.jsxs)("h3",{children:["Details about: ",r.name]}),Object(p.jsxs)("p",{children:["Pet type: ",r.type]}),Object(p.jsxs)("p",{children:["Desctription: ",r.description]}),Object(p.jsxs)("p",{children:["Skills: ",r.skill1," ",r.skill2," ",r.skill3]})]})};var m=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Pet Shelter"}),Object(p.jsxs)(j.b,{children:[Object(p.jsx)(h,{path:"/",tweaked:n,setTweaked:s}),Object(p.jsx)(u,{path:"/pets/new",tweaked:n,setTweaked:s}),Object(p.jsx)(x,{path:"/pets/:_id/edit",tweaked:n,setTweaked:s}),Object(p.jsx)(k,{path:"/pets/:_id",tweaked:n,setTweaked:s})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.46890d85.chunk.js.map