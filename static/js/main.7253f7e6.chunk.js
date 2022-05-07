(this.webpackJsonptoder=this.webpackJsonptoder||[]).push([[0],{22:function(t,e,s){},24:function(t,e,s){"use strict";s.r(e);var i=s(2),n=s.n(i),a=s(8),o=s.n(a),r=(s(22),s(4)),c=s(5),l=s(7),u=s(6),d=s(1),h=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var i;return Object(r.a)(this,s),(i=e.call(this,t)).state={time:(new Date).toLocaleTimeString()},i}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){return Object(d.jsx)("p",{className:"todo__clock",children:this.state.time})}}]),s}(n.a.Component),j=s(14),b=s(3),m=s(15);var f=function(t){var e=Object(i.useState)(t.edit?t.edit.value:""),s=Object(b.a)(e,2),n=s[0],a=s[1],o=Object(i.useState)(""),r=Object(b.a)(o,1)[0],c=function(t){a(t.target.value)};return Object(d.jsx)("form",{className:"todo__form",onSubmit:function(e){e.preventDefault(),/^[a-z]+(.*)(\\#iu)$/i.test(n)&&(r="#IU",n=n.replace(/\\#iu/i,"")),/^[a-z]+(.*)(\\#inu)$/i.test(n)&&(r="#INU",n=n.replace(/\\#inu/i,"")),/^[a-z]+(.*)(\\#niu)$/i.test(n)&&(r="#NIU",n=n.replace(/\\#niu/i,"")),/^[a-z]+(.*)(\\#ninu)$/i.test(n)&&(r="#NINU",n=n.replace(/\\#ninu/i,"")),t.onSubmit({id:Math.floor(1e4*Math.random()),text:n,filter:r,date:(new Date).toLocaleDateString()}),a("")},children:t.edit?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Update your item",value:n,name:"text",className:"input-todo edit",onChange:c}),Object(d.jsx)("button",{className:"btn btn-todo btn-edit",children:"Update"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a task \\#filter",value:n,name:"text",className:"input-todo",onChange:c}),Object(d.jsx)("button",{className:"btn btn-todo",children:Object(d.jsx)(m.a,{className:"add-icon"})})]})})};var p=function(t){var e=t.show?"modal-todo show":"modal-todo hide",s=function(e){t.setStatus(e.target.dataset.filter),t.onClose()};return Object(d.jsxs)("div",{className:e,children:[Object(d.jsx)("h3",{children:"The Eisenhower Matrix"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:s,"data-filter":"iu",children:"Important && Urgent"}),Object(d.jsx)("button",{onClick:s,"data-filter":"inu",children:"Important && Not Urgent"}),Object(d.jsx)("button",{onClick:s,"data-filter":"niu",children:"Not Important && Urgent"}),Object(d.jsx)("button",{onClick:s,"data-filter":"ninu",children:"Not Important && Not Urgent"}),Object(d.jsx)("button",{onClick:s,"data-filter":"reset",children:"RESET"})]})]})},O=s(16);var v=function(t){var e=t.setStatus,s=Object(i.useState)(!1),n=Object(b.a)(s,2),a=n[0],o=n[1];return Object(d.jsxs)("div",{className:"todo__filter",children:[Object(d.jsx)(p,{onClose:function(){return o(!1)},show:a,setStatus:e}),Object(d.jsx)("button",{onClick:function(){return o(!0)},className:"btn btn-filter",children:Object(d.jsx)(O.a,{className:"filter filter-icon"})})]})},k=s(13),x=s(17);var S=function(t){t.todos;var e=t.completeTodo,s=t.removeTodo,n=t.updateTodo,a=t.filteredTodos,o=Object(i.useState)({id:null,value:""}),r=Object(b.a)(o,2),c=r[0],l=r[1];if(c.id)return Object(d.jsx)(f,{edit:c,onSubmit:function(t){n(c.id,t),l({id:null,value:""})}});var u=a.map((function(t,i){return Object(d.jsxs)("div",{className:t.isComplete?"todo__row complete":"todo__row",children:[Object(d.jsxs)("div",{className:"todo__text",onClick:function(){return e(t.id)},children:[t.text,Object(d.jsx)("span",{className:"todo__date",children:t.date})]},t.id),Object(d.jsx)("span",{className:"filter",children:t.filter},t.filter),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(k.b,{onClick:function(){return s(t.id)},className:"delete-icon"}),Object(d.jsx)(k.a,{onClick:function(){return l({id:t.id,value:t.text})},className:"edit-icon"})]})]},i)}));return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{duration:300,easing:"cubic-bezier(0, 0.7, 0.8, 0.1)",children:u})})},N=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var i;return Object(r.a)(this,s),(i=e.call(this,t)).state={positionX:-520,positionY:-60,left:10,right:30,speed:200,direction:1,stepNum:64},i}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.step()}),this.state.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"step",value:function(){-8===this.state.positionX&&this.setState({positionX:-520}),440===this.state.right&&this.setState({direction:0,positionY:-188}),30===this.state.right&&this.setState({direction:1,positionY:-60}),1===this.state.direction?this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right+10}):this.setState({positionX:this.state.positionX+this.state.stepNum,right:this.state.right-10})}},{key:"render",value:function(){var t={backgroundPositionX:this.state.positionX,backgroundPositionY:this.state.positionY,right:this.state.right};return Object(d.jsx)("div",{className:"todo__observer",style:t})}}]),s}(n.a.Component),g=s(9),_=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(t){var i;return Object(r.a)(this,s),(i=e.call(this,t)).state={start:!1,minutes:25,seconds:0,initSec:60,breakShortMin:5,breakLongMin:15,breaks:0,typeOfBreak:"short",process:"work",textWork:"Hard Work",textBreak:"Short Break"},i.timerStart=i.timerStart.bind(Object(g.a)(i)),i.timerStop=i.timerStop.bind(Object(g.a)(i)),i}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.intervalIdTimer=setInterval((function(){return t.tickTimer()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalIdTimer)}},{key:"takeShortBreak",value:function(){this.setState({minutes:5,seconds:0,start:!1,process:"break",typeOfBreak:"short",textBreak:"Short Break",breaks:this.state.breaks+1})}},{key:"takeLongBreak",value:function(){this.setState({minutes:15,seconds:0,start:!1,process:"break",typeOfBreak:"long",textBreak:"Long Break",breaks:0})}},{key:"timerStart",value:function(){this.setState({start:!0})}},{key:"timerStop",value:function(){"break"===this.state.process&&this.setState({minutes:"short"===this.state.typeOfBreak?this.state.breakShortMin:this.state.breakLongMin,seconds:0}),"work"===this.state.process&&this.setState({minutes:25,seconds:0}),this.setState({start:!1})}},{key:"tickTimer",value:function(){if(this.state.start){var t=this.state.minutes,e=this.state.seconds-1;if(e<0&&(t-=1,e=this.state.initSec-1),t<0&&"work"===this.state.process)return 4===this.state.breaks?(this.takeLongBreak(),!1):(this.takeShortBreak(),!1);if(t<0&&"break"===this.state.process)return this.setState({minutes:"25",seconds:"0",process:"work"}),this.timerStop(),!1;this.setState({minutes:t,seconds:e})}}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"todo__pomodoro--timer",children:["work"===this.state.process&&!0===this.state.start?Object(d.jsx)("h3",{className:"pomodoro__timer--title",children:this.state.textWork}):Object(d.jsx)(d.Fragment,{}),"break"===this.state.process&&!0===this.state.start?Object(d.jsx)("h3",{className:"pomodoro__timer--title",children:this.state.textBreak}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("div",{className:"pomodoro__timer--time",children:[this.state.minutes<10?"0"+this.state.minutes:this.state.minutes,":",this.state.seconds<10?"0"+this.state.seconds:this.state.seconds]}),Object(d.jsxs)("div",{className:"btn__group",children:[Object(d.jsx)("button",{className:"btn btn-todo",onClick:this.timerStart,children:"Start"}),Object(d.jsx)("button",{className:"btn btn-todo",onClick:this.timerStop,children:"Stop"})]})]})}}]),s}(n.a.Component);var I=function(){var t=Object(i.useState)([]),e=Object(b.a)(t,2),s=e[0],n=e[1],a=Object(i.useState)(""),o=Object(b.a)(a,2),r=o[0],c=o[1],l=Object(i.useState)([]),u=Object(b.a)(l,2),h=u[0],m=u[1];Object(i.useEffect)((function(){k()}),[]),Object(i.useEffect)((function(){O(s)}),[s]),Object(i.useEffect)((function(){p(s,r)}),[s,r]);var p=function(t,e){switch(e){case"iu":m(t.filter((function(t){return"#IU"===t.filter})));break;case"inu":m(t.filter((function(t){return"#INU"===t.filter})));break;case"niu":m(t.filter((function(t){return"#NIU"===t.filter})));break;case"ninu":m(t.filter((function(t){return"#NINU"===t.filter})));break;case"reset":default:m(t)}},O=function(t){localStorage.setItem("todos",JSON.stringify(t))},k=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));n(t)}};return Object(d.jsxs)("div",{className:"todo__container",children:[Object(d.jsx)("h1",{children:"Toder"}),Object(d.jsx)(N,{}),Object(d.jsxs)("div",{className:"todo__wrapper",children:[Object(d.jsx)(f,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(j.a)(s));n(e)}}}),Object(d.jsx)(v,{setStatus:c})]}),Object(d.jsx)("div",{className:"todo__list",children:Object(d.jsx)(S,{filteredTodos:h,todos:s,completeTodo:function(t){var e=s.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));n(e)},removeTodo:function(t){var e=Object(j.a)(s).filter((function(e){return e.id!==t}));n(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&n((function(s){return s.map((function(s){return s.id===t?e:s}))}))}})}),Object(d.jsx)(_,{})]})};var y=function(){return Object(d.jsx)("div",{className:"todo__overlay",children:Object(d.jsxs)("div",{className:"todo__app",children:[Object(d.jsx)(h,{}),Object(d.jsx)(I,{})]})})};o.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7253f7e6.chunk.js.map