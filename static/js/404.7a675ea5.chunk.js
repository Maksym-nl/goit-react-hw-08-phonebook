"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[404],{7404:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,i,o,s,c,u,l,d,p,f=t(2791),x=t(4420),h=t(3634),m=t(4137),g=t(168),b=t(9256),Z=b.ZP.div(r||(r=(0,g.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),j=t(184),w=function(){return(0,j.jsx)(Z,{children:(0,j.jsx)(m.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5"})})},v=t(9439),k=t(5763),C=b.ZP.label(a||(a=(0,g.Z)(["\n  font-size: 20px;\n"]))),P=b.ZP.input(i||(i=(0,g.Z)(["\n  width: 250px;\n  padding: 5px;\n  margin-left: 8px;\n  margin-right: 20px;\n  background-color: antiquewhite;\n"]))),y=t(5984),z=t(3553),L=function(n){return n.contacts.contacts.items},A=function(n){return n.filter},q=(0,z.P1)([L,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),I=function(){var n=(0,f.useState)(""),e=(0,v.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(""),i=(0,v.Z)(a,2),o=i[0],s=i[1],c=(0,x.I0)(),u=(0,x.v9)(L),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}};return(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),u.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is Exist")):(c((0,h.uK)({name:t,number:o,id:(0,y.x0)()})),r(""),s(""),n.currentTarget.reset())},children:[(0,j.jsxs)(C,{children:["Name:",(0,j.jsx)(P,{onChange:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t})]}),(0,j.jsxs)(C,{children:["Number:",(0,j.jsx)(P,{onChange:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o})]}),(0,j.jsx)("button",{type:"submit",children:(0,j.jsx)(k.a4h,{size:"40px"})})]})},_=b.ZP.label(o||(o=(0,g.Z)(["\n  font-size: 20px;\n"]))),N=b.ZP.input(s||(s=(0,g.Z)(["\n  width: 250px;\n  padding: 5px;\n  margin-left: 8px;\n  margin-right: 20px;\n  background-color: antiquewhite;\n"]))),S=t(4808),E=function(){var n=(0,x.v9)(A),e=(0,x.I0)();return(0,j.jsxs)(_,{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",(0,j.jsx)(N,{type:"text",value:n,onChange:function(n){e((0,S.T)(n.target.value))}})]})},F=b.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  gap: 45px;\n  flex-wrap: wrap;\n  flex-direction: row;\n  cursor: pointer;\n"]))),K=b.ZP.li(u||(u=(0,g.Z)(["\n  /* width: calc(100% / 3); */\n  border: 1px solid;\n  color: black;\n  display: grid;\n  justify-items: center;\n  padding: 15px;\n  border-radius: ",";\n  background: aliceblue;\nb\n\n  /* :hover {\n    background-color: green; */\n  }\n"])),(function(n){return n.theme.radii.lg})),T=b.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 25px;\n  font-weight: bold;\n  color: ",";\n"])),(function(n){return n.color})),B=b.ZP.p(d||(d=(0,g.Z)(["\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.color})),D=b.ZP.button(p||(p=(0,g.Z)(["\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n  color: green;\n  font-weight: bold;\n  cursor: pointer;\n"]))),G=t(828);function J(){var n=(0,x.v9)(q),e=(0,x.I0)();return(0,j.jsxs)(F,{children:[" ",n.map((function(n){return(0,j.jsxs)(K,{children:[(0,j.jsx)(T,{color:"blue",children:n.name}),(0,j.jsx)(B,{color:"green",children:n.number}),(0,j.jsxs)(D,{onClick:function(){return e((0,h.GK)(n.id))},children:["\u0423\u0434\u0430\u043b\u0438\u0442\u044c",(0,j.jsx)(G.sQZ,{})]})]},n.id)}))," "]})}var M=function(){var n=(0,x.I0)(),e=(0,x.v9)((function(n){return n.contacts.contacts})),t=e.isLoading,r=e.error;return(0,f.useEffect)((function(){n((0,h.yF)())}),[n]),(0,j.jsxs)("div",{children:[" ",t&&(0,j.jsx)(w,{}),(0,j.jsx)(I,{}),(0,j.jsx)(E,{}),(0,j.jsx)(J,{}),r&&(0,j.jsx)("p",{children:r})]})}}}]);
//# sourceMappingURL=404.7a675ea5.chunk.js.map