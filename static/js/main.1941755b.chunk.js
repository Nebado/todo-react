(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{21:function(t,e,i){},23:function(t,e,i){"use strict";i.r(e);var n=i(2),o=i.n(n),s=i(4),a=i.n(s),c=(i(21),i(6)),r=i(7),l=i(11),u=i(10),d=i(1),j=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(c.a)(this,i),(n=e.call(this,t)).state={time:(new Date).toLocaleTimeString()},n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){return Object(d.jsx)("p",{className:"todo__clock",children:this.state.time})}}]),i}(o.a.Component),b=i(13),f=i(3),h=i(14);var m=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),i=Object(f.a)(e,2),o=i[0],s=i[1],a=Object(n.useState)(""),c=Object(f.a)(a,1)[0],r=function(t){s(t.target.value)};return Object(d.jsx)("form",{className:"todo__form",onSubmit:function(e){e.preventDefault(),/^[a-z]+(.*)(\\#iu)$/i.test(o)&&(c="#IU",o=o.replace(/\\#iu/i,"")),/^[a-z]+(.*)(\\#inu)$/i.test(o)&&(c="#INU",o=o.replace(/\\#inu/i,"")),/^[a-z]+(.*)(\\#niu)$/i.test(o)&&(c="#NIU",o=o.replace(/\\#niu/i,"")),/^[a-z]+(.*)(\\#ninu)$/i.test(o)&&(c="#NINU",o=o.replace(/\\#ninu/i,"")),t.onSubmit({id:Math.floor(1e4*Math.random()),text:o,filter:c}),s("")},children:t.edit?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Update your item",value:o,name:"text",className:"input-todo edit",onChange:r}),Object(d.jsx)("button",{className:"btn btn-todo btn-edit",children:"Update"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a task \\#filter",value:o,name:"text",className:"input-todo",onChange:r}),Object(d.jsx)("button",{className:"btn btn-todo",children:Object(d.jsx)(h.a,{className:"add-icon"})})]})})};var O=function(t){var e=t.show?"modal-todo show":"modal-todo hide",i=function(e){t.setStatus(e.target.dataset.filter),t.onClose()};return Object(d.jsxs)("div",{className:e,children:[Object(d.jsx)("h3",{children:"The Eisenhower Matrix"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:i,"data-filter":"iu",children:"Important && Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"inu",children:"Important && Not Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"niu",children:"Not Important && Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"ninu",children:"Not Important && Not Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"reset",children:"RESET"})]})]})},p=i(9);var v=function(t){var e=t.setStatus,i=Object(n.useState)(!1),o=Object(f.a)(i,2),s=o[0],a=o[1];return Object(d.jsxs)("div",{className:"todo__filter",children:[Object(d.jsx)(O,{onClose:function(){return a(!1)},show:s,setStatus:e}),Object(d.jsx)("button",{onClick:function(){return a(!0)},className:"btn btn-filter",children:Object(d.jsx)(p.b,{className:"filter filter-icon"})})]})},x=i(15),N=i(16);var g=function(t){t.todos;var e=t.completeTodo,i=t.removeTodo,o=t.updateTodo,s=t.filteredTodos,a=Object(n.useState)({id:null,value:""}),c=Object(f.a)(a,2),r=c[0],l=c[1];if(r.id)return Object(d.jsx)(m,{edit:r,onSubmit:function(t){o(r.id,t),l({id:null,value:""})}});var u=s.map((function(t,n){return Object(d.jsxs)("div",{className:t.isComplete?"todo__row complete":"todo__row",children:[Object(d.jsx)("div",{className:"todo__text",onClick:function(){return e(t.id)},children:t.text},t.id),Object(d.jsx)("span",{className:"filter",children:t.filter},t.filter),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(x.a,{onClick:function(){return i(t.id)},className:"delete-icon"}),Object(d.jsx)(p.a,{onClick:function(){return l({id:t.id,value:t.text})},className:"edit-icon"})]})]},n)}));return Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{duration:300,easing:"cubic-bezier(0, 0.7, 0.8, 0.1)",children:u})})},k=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(c.a)(this,i),(n=e.call(this,t)).state={positionX:-515,positionY:-67,left:10,right:90,speed:350,direction:1,stepNum:64},n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.step()}),this.state.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"step",value:function(){-3===this.state.positionX&&(this.state.positionX=-515),450===this.state.right&&(this.state.direction=0,this.state.positionY=-196),90===this.state.right&&(this.state.direction=1,this.state.positionY=-67),1===this.state.direction?this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right+10}):this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right-10})}},{key:"render",value:function(){var t={backgroundPositionX:this.state.positionX,backgroundPositionY:this.state.positionY,right:this.state.right};return Object(d.jsx)("div",{className:"todo__observer",style:t})}}]),i}(o.a.Component);var S=function(){var t=Object(n.useState)([]),e=Object(f.a)(t,2),i=e[0],o=e[1],s=Object(n.useState)(""),a=Object(f.a)(s,2),c=a[0],r=a[1],l=Object(n.useState)([]),u=Object(f.a)(l,2),j=u[0],h=u[1];Object(n.useEffect)((function(){x()}),[]),Object(n.useEffect)((function(){p()}),[i]),Object(n.useEffect)((function(){O()}),[i,c]);var O=function(){switch(c){case"iu":h(i.filter((function(t){return"#IU"===t.filter})));break;case"inu":h(i.filter((function(t){return"#INU"===t.filter})));break;case"niu":h(i.filter((function(t){return"#NIU"===t.filter})));break;case"ninu":h(i.filter((function(t){return"#NINU"===t.filter})));break;case"reset":default:h(i)}},p=function(){localStorage.setItem("todos",JSON.stringify(i))},x=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));o(t)}};return Object(d.jsxs)("div",{className:"todo__container",children:[Object(d.jsx)("h1",{children:"What's the Plan for Today?"}),Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"todo__wrapper",children:[Object(d.jsx)(m,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(b.a)(i));o(e)}}}),Object(d.jsx)(v,{setStatus:r})]}),Object(d.jsx)("div",{className:"todo__list",children:Object(d.jsx)(g,{filteredTodos:j,todos:i,completeTodo:function(t){var e=i.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(b.a)(i).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(i){return i.map((function(i){return i.id===t?e:i}))}))}})})]})};var I=function(){return Object(d.jsx)("div",{className:"todo__overlay",children:Object(d.jsxs)("div",{className:"todo__app",children:[Object(d.jsx)(j,{}),Object(d.jsx)(S,{})]})})};a.a.render(Object(d.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.1941755b.chunk.js.map