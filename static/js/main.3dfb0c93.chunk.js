(window.webpackJsonptask=window.webpackJsonptask||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/perfil.0b0a90e9.png"},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),l=(a(14),a(15),a(6)),u=a(3),c=a(4),i=a(7),o=a(5),p=a(8);var m=function(e){var t=e.task,a=e.onDelete;return r.a.createElement("li",null,t,r.a.createElement("button",{onClick:a,type:"button"},"Remover"))},f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={newTask:"",tasks:["Planejar","Estudar React","Ler"]},a.handleInputChange=function(e){a.setState({newTask:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({tasks:[].concat(Object(l.a)(a.state.tasks),[a.state.newTask]),newTask:""})},a.handleDelete=function(e){a.setState({tasks:a.state.tasks.filter(function(t){return t!=e})})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Ol\xe1, quais as tarefas de hj?"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("ul",null,this.state.tasks.map(function(t){return r.a.createElement(m,{key:t,task:t,onDelete:function(){return e.handleDelete(t)}})})),r.a.createElement("input",{type:"text",onChange:this.handleInputChange,value:this.state.newTask,placeholder:"Digite sua tarefa.."}),r.a.createElement("button",{type:"submit"},"Enviar")))}}]),t}(n.Component);var h=function(){return r.a.createElement(f,null)};Object(s.render)(r.a.createElement(h,null),document.getElementById("app"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3dfb0c93.chunk.js.map