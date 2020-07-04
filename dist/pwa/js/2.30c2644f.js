(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0ab0":function(t,e,o){},"2cce":function(t,e,o){"use strict";var d=o("de14"),a=o.n(d);a.a},c70e:function(t,e,o){"use strict";o.r(e);var d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex flex-center"},[o("div",{staticClass:"container"},[o("div",{staticClass:"container-header",attrs:{id:"addTodo",role:"tablist"}},[o("p",{attrs:{"aria-hidden":"true"}},[t._v("Todos")]),o("q-btn",{staticStyle:{"font-size":"1.8rem"},attrs:{flat:"",round:"",icon:"add_circle","aria-label":"show add todo modal",role:"tab","aria-selected":"true","aria-controls":"addTodo",id:"tab-1"},on:{click:function(e){t.showAddTodoModal=!0}}})],1),0===t.todos.length?o("ul",{staticClass:"todos-list"},[o("li",t._l(8,(function(e){return o("Todo",{key:-e,attrs:{PlaceHolder:!0,todo:e}},[t._v(t._s(e.title))])})),1)]):o("ul",{ref:"todosList",staticClass:"todos-list",attrs:{id:"todosList"}},[o("li",t._l(t.todos,(function(e,d){return o("Todo",{key:d,attrs:{PlaceHolder:!1,todo:e}},[t._v(t._s(e.title))])})),1)])]),o("q-dialog",{attrs:{persistent:""},model:{value:t.showAddTodoModal,callback:function(e){t.showAddTodoModal=e},expression:"showAddTodoModal"}},[o("q-card",{staticStyle:{"min-width":"350px"}},[o("q-card-section",[o("div",{staticClass:"text-h6",attrs:{"aria-hidden":"true"}},[t._v("Todo Title")])]),o("q-card-section",{staticClass:"q-pt-none"},[o("q-input",{ref:"titleInput",attrs:{dense:"",autofocus:"",rules:[function(t){return!!t||"Field is required"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.addToDoTitle,callback:function(e){t.addToDoTitle=e},expression:"addToDoTitle"}})],1),o("q-card-section",{staticClass:"q-pt-none"},[o("q-checkbox",{attrs:{label:"Completed"},model:{value:t.completed,callback:function(e){t.completed=e},expression:"completed"}})],1),o("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"},on:{click:function(e){t.showAddTodoModal=!1}}}),o("q-btn",{attrs:{flat:"",label:"Add Todo",type:"submit"},on:{click:t.addTodo}})],1)],1)],1)],1)},a=[],n=o("ded3"),l=o.n(n),i=o("c973"),s=o.n(i),c=o("2f62"),r={name:"todos",data:function(){return{showAddTodoModal:!1,titleInput:null,todosList:null,addToDoTitle:"",completed:!1,enableScroll:!0}},mounted(){var t=this;return s()((function*(){yield t.getTodosDataAction()}))()},updated(){const t=localStorage.getItem("recentScroll");this.enableScroll&&t&&this.todos.length>0&&(this.enableScroll=!1,this.$refs.todosList&&this.$refs.todosList.scroll({top:t,behavior:"smooth"})),window.addEventListener("unload",(function(t){const e=document.getElementById("todosList");localStorage.setItem("recentScroll",e.scrollTop)}))},computed:l()({},Object(c["c"])("todos",["todos"])),methods:l()({addTodo:function(){this.$refs.titleInput.validate(),this.$refs.titleInput.hasError||(this.postTodoAction({title:this.addToDoTitle,completed:this.completed}),this.addToDoTitle="",this.completed=!1,this.showAddTodoModal=!1)}},Object(c["b"])({getTodosDataAction:"todos/getTodosDataAction",postTodoAction:"todos/postTodoAction"})),components:{Todo:o("ebdb").default}},u=r,p=(o("f03e"),o("2877")),f=o("9989"),b=o("9c40"),h=o("24e8"),T=o("f09f"),m=o("a370"),k=o("27f9"),v=o("8f8e"),x=o("4b7e"),y=o("7f67"),g=o("eebe"),q=o.n(g),C=Object(p["a"])(u,d,a,!1,null,null,null);e["default"]=C.exports;q()(C,"components",{QPage:f["a"],QBtn:b["a"],QDialog:h["a"],QCard:T["a"],QCardSection:m["a"],QInput:k["a"],QCheckbox:v["a"],QCardActions:x["a"]}),q()(C,"directives",{ClosePopup:y["a"]})},de14:function(t,e,o){},ebdb:function(t,e,o){"use strict";o.r(e);var d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-container",style:{backgroundColor:t.checkobx?"#ffc80042":"unset"}},[t.PlaceHolder?o("content-placeholders",{style:{flex:1},attrs:{rounded:"",centerd:""}},[o("content-placeholders-text",{style:{flex:1},attrs:{lines:1}})],1):t._e(),t.PlaceHolder?t._e():o("q-input",{ref:"todoInput",class:["todo-input","q-field--readonly",t.editing?"editing":""],attrs:{id:"todoTitleInput",name:"todoInput",hint:t.editing?"Press enter to save":"",dense:"",clearable:"",spellcheck:"false","aria-label":"todo"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveEdit(e)}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),o("div",{staticClass:"todo-controls"},[o("q-checkbox",{attrs:{"aria-label":"complete the todo",tabindex:"-1"},on:{input:function(e){!t.PlaceHolder&&t.updateTodoData()}},model:{value:t.checkobx,callback:function(e){t.checkobx=e},expression:"checkobx"}}),t.editing?o("q-btn",{style:{color:"#0068bb"},attrs:{flat:"",round:"",icon:"save",role:"button","aria-pressed":"true","aria-expanded":"true","aria-label":"save"},on:{click:function(e){!t.PlaceHolder&&t.saveEdit()}}}):o("q-btn",{style:{color:"#0068bb"},attrs:{flat:"",round:"",icon:"edit",role:"button","aria-pressed":"true","aria-expanded":"true","aria-label":"edit"},on:{click:function(e){!t.PlaceHolder&&t.startEditing()}}}),o("q-btn",{style:{color:"#9e0000"},attrs:{flat:"",round:"",icon:"delete",role:"button","aria-pressed":"true","aria-expanded":"true","aria-label":"delete",id:"tab-delete-"+t.todo.id},on:{click:function(e){!t.PlaceHolder&&t.deleteTodoAction(t.todo.id)}}})],1)],1)},a=[],n=o("ded3"),l=o.n(n),i=o("2f62"),s={props:["todo","PlaceHolder"],data(){return{checkobx:this.todo.completed||!1,todoInput:null,editing:!1,title:this.todo.title}},mounted(){this.$refs.todoInput.$refs.input.readOnly=!0},methods:l()({startEditing:function(){this.editing=!0,this.$refs.todoInput.$refs.input.readOnly=!1,setTimeout(()=>this.$refs.todoInput.$el.focus(),0)},saveEdit:function(){this.editing=!1,this.$refs.todoInput.$refs.input.readOnly=!0,setTimeout(()=>this.$refs.todoInput.$el.classList.remove("q-field--focused"),0),this.updateTodoData()},updateTodoData:function(){this.updateTodoAction({id:this.todo.id,completed:this.checkobx,title:this.title})}},Object(i["b"])({updateTodoAction:"todos/updateTodoAction",deleteTodoAction:"todos/deleteTodoAction"}))},c=s,r=(o("2cce"),o("2877")),u=o("27f9"),p=o("8572"),f=o("8f8e"),b=o("9c40"),h=o("eebe"),T=o.n(h),m=Object(r["a"])(c,d,a,!1,null,null,null);e["default"]=m.exports;T()(m,"components",{QInput:u["a"],QField:p["a"],QCheckbox:f["a"],QBtn:b["a"]})},f03e:function(t,e,o){"use strict";var d=o("0ab0"),a=o.n(d);a.a}}]);