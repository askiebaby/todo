(function(t){function e(e){for(var n,r,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],s[r]&&f.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==s[u]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/todo/vue-version/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0a0d":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),s=o("ecee"),a=o("f2d1"),r=o("c074"),i=o("ad3d"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},c=[],d=(o("5c0b"),o("2877")),l={},f=Object(d["a"])(l,u,c,!1,null,null,null),p=f.exports,m=o("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"mainBody"},[o("Header",{attrs:{msg:"Welcome to Your Vue.js App"}}),o("Tasks",{attrs:{msg:"Welcome to Your Vue.js App"}}),o("Footer",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)])},h=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"globalHeader"},[o("nav",[o("ul",[t._m(0),t._m(1),o("li",[o("router-link",{staticClass:"active",attrs:{to:"vue"}},[t._v("Vue")])],1)])])])},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{attrs:{href:"/todo/js-version/"}},[t._v("Vanilla")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("a",{attrs:{href:"/todo/jq-version/"}},[t._v("JQuery")])])}],T={},k=T,g=(o("f535"),Object(d["a"])(k,_,b,!1,null,"23e29985",null)),C=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content"},[t._m(0),o("TasksCreate"),o("TasksTodo"),o("TasksCompleted")],1)},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("TO.DO")])])}],x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"create"},[o("h2",[t._v("\n    待辦事項\n    "),o("span",{ref:"msgBox",staticClass:"msgBox"})]),o("input",{ref:"addInput",staticClass:"addInput",attrs:{type:"text",placeholder:"例如：倒垃圾",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTodo(e)}}}),o("input",{staticClass:"task__button task__submit",attrs:{type:"submit",value:"新增"},on:{click:t.createTodo}})])},j=[],$={name:"TaskCreate",data:function(){return{todoId:Date.now(),isInputEmpty:""}},methods:{checkInputValue:function(){this.isInputEmpty=!this.$refs.addInput.value,this.$refs.msgBox.textContent=this.isInputEmpty?"你沒輸入內容...!!!!":""},createTodo:function(){if(this.checkInputValue(),!this.isInputEmpty){this.todoId+=1;var t={id:this.todoId,todo:this.$refs.addInput.value,isTodoCompleted:!1};console.log(t),this.$store.dispatch("addTodo",t),this.resetInput()}},resetInput:function(){this.$refs.addInput.value="",this.$refs.addInput.focus()}}},O=$,E=(o("c18b"),Object(d["a"])(O,x,j,!1,null,"2b01e826",null)),I=E.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"notFinish"},[o("section",{staticClass:"tasks"},[t.hasTodoNotComplete?t._e():o("span",[t._v("尚未新增待辦事項")]),t._l(t.todoNotComplete,function(e,n){return o("div",{key:"todo-"+n,staticClass:"task"},[o("span",{staticClass:"task__checkbox",on:{click:function(o){return t.updateTodoStatus(e.id)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.todo,expression:"todo.todo"}],staticClass:"task__content",attrs:{type:"text"},domProps:{value:e.todo},on:{blur:function(o){return t.updateTodoValue(e)},input:function(o){o.target.composing||t.$set(e,"todo",o.target.value)}}}),o("input",{staticClass:"task__button task__delete",attrs:{type:"button",value:"刪除"},on:{click:function(o){return t.deleteTodo(e.id)}}})])})],2)])},V=[],N={name:"TasksTodo",computed:{todoNotComplete:function(){return this.$store.getters.todoNotComplete},hasTodoNotComplete:function(){return this.todoNotComplete.length>0}},methods:{updateTodoStatus:function(t){this.$store.dispatch("updateTodoStatus",t)},updateTodoValue:function(t){console.log("updateTodoValue",t)},deleteTodo:function(t){this.$store.dispatch("deleteTodo",t)}}},A=N,P=Object(d["a"])(A,S,V,!1,null,"111330d6",null),B=P.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"finished"},[o("h2",[t._v("已完成")]),o("section",{staticClass:"tasks"},[t.hasTodoComplete?t._e():o("span",[t._v("尚未完成任何事項")]),t._l(t.todoCompleted,function(e,n){return o("div",{key:"done-"+n,staticClass:"task",attrs:{"data-index":e.id}},[o("span",{staticClass:"task__checkbox",on:{click:function(o){return t.updateTodoStatus(e.id)}}},[o("font-awesome",{attrs:{icon:["fas","check"]}})],1),o("span",{staticClass:"task__content",attrs:{type:"text"}},[t._v(t._s(e.todo))]),o("input",{staticClass:"task__button task__delete",attrs:{type:"button",value:"刪除"},on:{click:function(o){return t.deleteTodo(e.id)}}})])})],2)])},M=[],H={name:"TasksCompleted",computed:{todoCompleted:function(){return this.$store.getters.todoCompleted},hasTodoComplete:function(){return this.todoCompleted.length>0}},methods:{updateTodoStatus:function(t){this.$store.dispatch("updateTodoStatus",t)},deleteTodo:function(t){this.$store.dispatch("deleteTodo",t)}}},J=H,W=Object(d["a"])(J,F,M,!1,null,"07f9a80f",null),Y=W.exports,q={name:"tasks",components:{TasksCreate:I,TasksTodo:B,TasksCompleted:Y}},D=q,L=(o("980e"),Object(d["a"])(D,y,w,!1,null,null,null)),Q=L.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("section",{staticClass:"copyRight"},[t._v("Copyright © 2019 Askie Lin All rights reserved.")]),o("a",{attrs:{href:"https://github.com/askiebaby/todo",target:"_blank"}},[o("font-awesome",{attrs:{icon:["fab","github"]}})],1)])},z=[];s["b"].watch();var G={},K=G,U=(o("fac2"),Object(d["a"])(K,R,z,!1,null,"053b2acc",null)),X=U.exports,Z={name:"vue-version",components:{Header:C,Tasks:Q,Footer:X}},tt=Z,et=(o("a6cf"),Object(d["a"])(tt,v,h,!1,null,null,null)),ot=et.exports;n["a"].use(m["a"]);var nt=new m["a"]({mode:"history",base:"/todo/vue-version/",routes:[{path:"/",name:"home",component:ot,redirect:"/todo/vue-version"},{path:"/todo/vue-version",name:"vue",component:ot}]}),st=(o("7514"),o("75fc")),at=(o("55dd"),o("2f62"));n["a"].use(at["a"]);var rt=new at["a"].Store({state:{todos:[]},getters:{todoNotComplete:function(t){return t.todos.filter(function(t){return!t.isTodoCompleted}).sort(function(t,e){return e.id-t.id})},todoCompleted:function(t){return t.todos.filter(function(t){return t.isTodoCompleted}).sort(function(t,e){return e.id-t.id})}},mutations:{addTodo:function(t,e){t.todos=[e].concat(Object(st["a"])(t.todos))},updateTodoStatus:function(t,e){var o=t.todos.find(function(t){return t.id===e});o&&(o.isTodoCompleted=!o.isTodoCompleted)},updateTodoValue:function(t,e){var o=t.todos.find(function(t){return t.id===e.id});console.log(o)},deleteTodo:function(t,e){var o=t.todos.filter(function(t){return t.id!==e});t.todos=o}},actions:{addTodo:function(t,e){var o=t.commit;o("addTodo",e)},updateTodoStatus:function(t,e){var o=t.commit;o("updateTodoStatus",e)},updateTodoValue:function(t,e){var o=t.commit;o("updateTodoValue",e)},deleteTodo:function(t,e){var o=t.commit;o("deleteTodo",e)}}}),it=o("9483");Object(it["a"])("".concat("/todo/vue-version/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("95f0");s["d"].add(a["a"],r["a"]),Object(s["c"])({prefix:"fas",iconName:"check"}),n["a"].component("font-awesome",i["a"]),n["a"].config.productionTip=!1,new n["a"]({router:nt,store:rt,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),s=o.n(n);s.a},"5e27":function(t,e,o){},"603c":function(t,e,o){},"980e":function(t,e,o){"use strict";var n=o("a2f8"),s=o.n(n);s.a},a2f8:function(t,e,o){},a6cf:function(t,e,o){"use strict";var n=o("df09"),s=o.n(n);s.a},c18b:function(t,e,o){"use strict";var n=o("603c"),s=o.n(n);s.a},debc:function(t,e,o){},df09:function(t,e,o){},f535:function(t,e,o){"use strict";var n=o("debc"),s=o.n(n);s.a},fac2:function(t,e,o){"use strict";var n=o("0a0d"),s=o.n(n);s.a}});
//# sourceMappingURL=app.4a69561b.js.map