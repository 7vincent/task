(window.webpackJsonptask=window.webpackJsonptask||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){e.exports=n.p+"static/media/perfil.0b0a90e9.png"},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),s=(n(14),n(15),n(6)),u=n(3),c=n(4),i=n(7),o=n(5),p=n(8);var f=function(e){var t=e.task,n=e.onDelete;return r.a.createElement("li",null,t,r.a.createElement("button",{onClick:n,type:"button"},"Concluido"))},h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={newTask:"",tasks:["Planejar"]},n.handleInputChange=function(e){n.setState({newTask:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState({tasks:[].concat(Object(s.a)(n.state.tasks),[n.state.newTask]),newTask:""})},n.handleDelete=function(e){n.setState({tasks:n.state.tasks.filter(function(t){return t!=e})})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Ol\xe1, quais as tarefas de hj?"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("ul",null,this.state.tasks.map(function(t){return r.a.createElement(f,{key:t,task:t,onDelete:function(){return e.handleDelete(t)}})})),r.a.createElement("input",{type:"text",onChange:this.handleInputChange,value:this.state.newTask,placeholder:"Digite sua tarefa.."}),r.a.createElement("button",{type:"submit"},"Enviar")))}}]),t}(a.Component);var m=function(){return r.a.createElement(h,null)};Object(l.render)(r.a.createElement(m,null),document.getElementById("app"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a49dcf17.chunk.js.map