(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{22:function(t,e,i){},24:function(t,e,i){"use strict";i.r(e);var n=i(2),s=i.n(n),a=i(8),o=i.n(a),r=(i(22),i(4)),c=i(5),l=i(7),u=i(6),d=i(1),j=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={time:(new Date).toLocaleTimeString()},n}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){return Object(d.jsx)("p",{className:"todo__clock",children:this.state.time})}}]),i}(s.a.Component),b=i(9),h=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={start:!1,minutes:25,seconds:0,initSec:60,breakShortMin:5,breakLongMin:25,breaks:0,process:"work",textWork:"Hard Work",textBreak:"Break"},n.timerStart=n.timerStart.bind(Object(b.a)(n)),n.timerStop=n.timerStop.bind(Object(b.a)(n)),n}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.intervalIdTimer=setInterval((function(){return t.tickTimer()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalIdTimer)}},{key:"takeShortBreak",value:function(){this.setState({minutes:5,seconds:0,start:!1,process:"break",breaks:this.state.breaks+1})}},{key:"takeLongBreak",value:function(){this.setState({minutes:25,seconds:0,start:!1,process:"break",breaks:0})}},{key:"timerStart",value:function(){this.setState({start:!0})}},{key:"timerStop",value:function(){this.setState({minutes:25,seconds:0,start:!1,process:"work"})}},{key:"tickTimer",value:function(){if(this.state.start){var t=this.state.minutes,e=this.state.seconds-1;if(e<0&&(t-=1,e=this.state.initSec-1),t<0&&"work"==this.state.process)return console.log(this.state.breaks),4===this.state.breaks?void this.takeLongBreak():void this.takeShortBreak();if(t<0&&"break"==this.state.process)return void this.timerStop();this.setState({minutes:t,seconds:e})}}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[1==this.state.start?Object(d.jsx)(d.Fragment,{children:"work"==this.state.process?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:this.state.textWork})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:this.state.textBreak})})}):Object(d.jsx)(d.Fragment,{}),")",Object(d.jsxs)("div",{className:"todo__timer",children:[this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,":",this.state.seconds<10?"0"+this.state.seconds:this.state.seconds]}),Object(d.jsx)("button",{className:"btn btn-todo",onClick:this.timerStart,children:"Start"}),Object(d.jsx)("button",{className:"btn btn-todo",onClick:this.timerStop,children:"Stop"})]})}}]),i}(s.a.Component),m=i(14),f=i(3),O=i(15);var v=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),i=Object(f.a)(e,2),s=i[0],a=i[1],o=Object(n.useState)(""),r=Object(f.a)(o,1)[0],c=function(t){a(t.target.value)};return Object(d.jsx)("form",{className:"todo__form",onSubmit:function(e){e.preventDefault(),/^[a-z]+(.*)(\\#iu)$/i.test(s)&&(r="#IU",s=s.replace(/\\#iu/i,"")),/^[a-z]+(.*)(\\#inu)$/i.test(s)&&(r="#INU",s=s.replace(/\\#inu/i,"")),/^[a-z]+(.*)(\\#niu)$/i.test(s)&&(r="#NIU",s=s.replace(/\\#niu/i,"")),/^[a-z]+(.*)(\\#ninu)$/i.test(s)&&(r="#NINU",s=s.replace(/\\#ninu/i,"")),t.onSubmit({id:Math.floor(1e4*Math.random()),text:s,filter:r,date:(new Date).toLocaleDateString()}),a("")},children:t.edit?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Update your item",value:s,name:"text",className:"input-todo edit",onChange:c}),Object(d.jsx)("button",{className:"btn btn-todo btn-edit",children:"Update"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a task \\#filter",value:s,name:"text",className:"input-todo",onChange:c}),Object(d.jsx)("button",{className:"btn btn-todo",children:Object(d.jsx)(O.a,{className:"add-icon"})})]})})};var p=function(t){var e=t.show?"modal-todo show":"modal-todo hide",i=function(e){t.setStatus(e.target.dataset.filter),t.onClose()};return Object(d.jsxs)("div",{className:e,children:[Object(d.jsx)("h3",{children:"The Eisenhower Matrix"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:i,"data-filter":"iu",children:"Important && Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"inu",children:"Important && Not Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"niu",children:"Not Important && Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"ninu",children:"Not Important && Not Urgent"}),Object(d.jsx)("button",{onClick:i,"data-filter":"reset",children:"RESET"})]})]})},x=i(12);var k=function(t){var e=t.setStatus,i=Object(n.useState)(!1),s=Object(f.a)(i,2),a=s[0],o=s[1];return Object(d.jsxs)("div",{className:"todo__filter",children:[Object(d.jsx)(p,{onClose:function(){return o(!1)},show:a,setStatus:e}),Object(d.jsx)("button",{onClick:function(){return o(!0)},className:"btn btn-filter",children:Object(d.jsx)(x.b,{className:"filter filter-icon"})})]})},S=i(16),N=i(17);var g=function(t){t.todos;var e=t.completeTodo,i=t.removeTodo,s=t.updateTodo,a=t.filteredTodos,o=Object(n.useState)({id:null,value:""}),r=Object(f.a)(o,2),c=r[0],l=r[1];if(c.id)return Object(d.jsx)(v,{edit:c,onSubmit:function(t){s(c.id,t),l({id:null,value:""})}});var u=a.map((function(t,n){return Object(d.jsxs)("div",{className:t.isComplete?"todo__row complete":"todo__row",children:[Object(d.jsxs)("div",{className:"todo__text",onClick:function(){return e(t.id)},children:[t.text,Object(d.jsx)("span",{className:"todo__date",children:t.date})]},t.id),Object(d.jsx)("span",{className:"filter",children:t.filter},t.filter),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(S.a,{onClick:function(){return i(t.id)},className:"delete-icon"}),Object(d.jsx)(x.a,{onClick:function(){return l({id:t.id,value:t.text})},className:"edit-icon"})]})]},n)}));return Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{duration:300,easing:"cubic-bezier(0, 0.7, 0.8, 0.1)",children:u})})},I=function(t){Object(l.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(r.a)(this,i),(n=e.call(this,t)).state={positionX:-515,positionY:-67,left:10,right:90,speed:350,direction:1,stepNum:64},n}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.step()}),this.state.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"step",value:function(){-3===this.state.positionX&&(this.state.positionX=-515),450===this.state.right&&(this.state.direction=0,this.state.positionY=-196),90===this.state.right&&(this.state.direction=1,this.state.positionY=-67),1===this.state.direction?this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right+10}):this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right-10})}},{key:"render",value:function(){var t={backgroundPositionX:this.state.positionX,backgroundPositionY:this.state.positionY,right:this.state.right};return Object(d.jsx)("div",{className:"todo__observer",style:t})}}]),i}(s.a.Component);var _=function(){var t=Object(n.useState)([]),e=Object(f.a)(t,2),i=e[0],s=e[1],a=Object(n.useState)(""),o=Object(f.a)(a,2),r=o[0],c=o[1],l=Object(n.useState)([]),u=Object(f.a)(l,2),j=u[0],b=u[1];Object(n.useEffect)((function(){p()}),[]),Object(n.useEffect)((function(){O()}),[i]),Object(n.useEffect)((function(){h()}),[i,r]);var h=function(){switch(r){case"iu":b(i.filter((function(t){return"#IU"===t.filter})));break;case"inu":b(i.filter((function(t){return"#INU"===t.filter})));break;case"niu":b(i.filter((function(t){return"#NIU"===t.filter})));break;case"ninu":b(i.filter((function(t){return"#NINU"===t.filter})));break;case"reset":default:b(i)}},O=function(){localStorage.setItem("todos",JSON.stringify(i))},p=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));s(t)}};return Object(d.jsxs)("div",{className:"todo__container",children:[Object(d.jsx)("h1",{children:"What's the Plan for Today?"}),Object(d.jsx)(I,{}),Object(d.jsxs)("div",{className:"todo__wrapper",children:[Object(d.jsx)(v,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(m.a)(i));s(e)}}}),Object(d.jsx)(k,{setStatus:c})]}),Object(d.jsx)("div",{className:"todo__list",children:Object(d.jsx)(g,{filteredTodos:j,todos:i,completeTodo:function(t){var e=i.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));s(e)},removeTodo:function(t){var e=Object(m.a)(i).filter((function(e){return e.id!==t}));s(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&s((function(i){return i.map((function(i){return i.id===t?e:i}))}))}})})]})};var y=function(){return Object(d.jsx)("div",{className:"todo__overlay",children:Object(d.jsxs)("div",{className:"todo__app",children:[Object(d.jsx)(j,{}),Object(d.jsx)(_,{}),Object(d.jsx)(h,{})]})})};o.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.de0ed536.chunk.js.map