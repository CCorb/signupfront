(this.webpackJsonpsignupfront=this.webpackJsonpsignupfront||[]).push([[0],{1643:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(101),s=a.n(n),i=a(9),r=a(10),o=a(4),l=a(12),d=a(11),h=(a(23),a(13)),j=a.n(h),u=(a(40),a(6)),m=a(1),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this)).errorText="",e&&(console.log(e),e.errorText&&(c.errorText=e.errorText)),c.state={errorCode:"",errorText:""},c}return Object(r.a)(a,[{key:"closeDialog",value:function(e){e.target.parentElement.remove()}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"errorDialog",children:[Object(m.jsx)("div",{className:"closeButton",onClick:this.closeDialog,children:"X"}),Object(m.jsx)("h1",{children:"Oops .. "}),"Something went wrong ",Object(m.jsx)("p",{children:this.errorText})]})})}}]),a}(c.Component),O=a(22),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={fullName:"",userName:"",email:"",password:""},e.changeEmail=e.changeEmail.bind(Object(o.a)(e)),e.changeFullName=e.changeFullName.bind(Object(o.a)(e)),e.changeUserName=e.changeUserName.bind(Object(o.a)(e)),e.changePassword=e.changePassword.bind(Object(o.a)(e)),e.login=e.login.bind(Object(o.a)(e)),e.error=null,e}return Object(r.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"login",value:function(e){var t=this;e.preventDefault();var a={userName:this.state.userName,password:this.state.password};j.a.post("http://localhost:4000/app/signin",a).then((function(e){var t=Object(O.e)();t.push("/Home?id="+e.data._id,[t])})).catch((function(e){e.data;t.setState({error:Object(m.jsx)(b,{data:!0})})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"header image",children:Object(m.jsx)("img",{alt:"logo",src:"HNL_logo_endversion_dieVorsorger.jpg"})}),Object(m.jsx)("div",{className:"header text",children:Object(m.jsx)("h1",{children:"Melde dich mit deinem Account an"})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"form-div",children:Object(m.jsxs)("form",{onSubmit:this.login,children:[Object(m.jsx)("input",{type:"text",placeholder:"User Name",onChange:this.changeUserName,value:this.state.userName,className:"form-control form-group"}),Object(m.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password,className:"form-control form-group"}),Object(m.jsx)(u.b,{to:"/Signup",children:"Noch kein Account?"}),Object(m.jsx)("div",{className:"container-login",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Login"})})]})})}),this.state.error]})}}]),a}(c.Component),v=a(49),x=a.n(v),g=a(103),f=(a(59),a(3)),N=(a(134),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(i.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("div",{className:"static-header",children:Object(m.jsx)("img",{alt:"logo",src:"../HNL_logo_endversion_dieVorsorger.jpg"})})})}}]),a}(c.Component)),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={contracts:[{_id:"",contractPrice:[{price:"",recurrence:""}]}]},e.viewContract=e.viewContract.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("http://localhost:4000/app/contracts").then((function(e){t.setState(e.data)})).catch((function(e){t.setState({error:Object(m.jsx)(b,{err:!0})})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"viewContract",value:function(e){for(var t=this,a=e.target;!a.classList.contains("card-element");)a=a.offsetParent;console.log(a.id),e.preventDefault(),j.a.get("http://localhost:4000/app/contracts/"+a.id).then((function(e){window.location.assign("/contractdetail?id="+a.id)})).catch((function(e){t.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"createDataEntry",value:function(e){var t;return e._id&&(t=e._id,console.log(e._id),console.log(e._id.$oid)),Object(m.jsx)(f.a,{className:"card-element video",onClick:this.viewContract,id:t,children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:e.contractName}),Object(m.jsxs)("div",{className:"card-title ",children:[e.contractPrice.price,Object(m.jsx)("div",{className:"price-recurrence",children:e.contractPrice.recurrence})]})]})})})}},{key:"render",value:function(){var e=this;return this.state.contracts.map((function(e){})),Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),console.log(this.state),this.state.contracts.map((function(t){return e.createDataEntry(t)}))]}),this.state.error]})}}]),a}(c.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a),(e=t.call(this)).id="";var c=new URLSearchParams(window.location.search);return c&&(e.id=c.get("id")),e.state={_id:e.id,fullName:"",userName:"",email:"",password:""},e.changeEmail=e.changeEmail.bind(Object(o.a)(e)),e.changeFullName=e.changeFullName.bind(Object(o.a)(e)),e.changeUserName=e.changeUserName.bind(Object(o.a)(e)),e.changePassword=e.changePassword.bind(Object(o.a)(e)),e.changeUser=e.changeUser.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/user/"+this.id).then((function(t){e.setState({_id:t.data.user._id,fullName:t.data.user.fullName,userName:t.data.user.userName,email:t.data.user.email,password:t.data.user.password}),console.log(e.state)})).catch((function(e){}))}},{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"changeUser",value:function(e){var t=this;e.preventDefault();var a={user:{fullName:this.state.fullName,userName:this.state.userName,email:this.state.email}};console.log(a),j.a.patch("http://localhost:4000/app/user/"+this.state._id,a).then((function(e){console.log(e.status),200===e.status||console.log(e.status)})).catch((function(e){t.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Daten"}),Object(m.jsxs)("form",{onSubmit:this.changeUser,children:[Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"gridContainer",children:[Object(m.jsx)("div",{className:"dataLeft",children:"Name"}),Object(m.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName,className:"form-control form-group"}),Object(m.jsx)("div",{className:"dataLeft",children:"Benutzername"}),Object(m.jsx)("input",{type:"text",placeholder:"User Name",onChange:this.changeUserName,value:this.state.userName,className:"form-control form-group"}),Object(m.jsx)("div",{className:"dataLeft",children:"Email"}),Object(m.jsx)("input",{type:"email",placeholder:"Email",onChange:this.changeEmail,value:this.state.email,className:"form-control form-group"})]})})}),Object(m.jsx)("div",{className:"update-user-btn-container",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Speichern"})})]})]}),this.state.error]})}}]),a}(c.Component),k=a(36),w=(a(1642),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={},e.createCategorizedVideos=e.createCategorizedVideos.bind(Object(o.a)(e)),e.newVideo=e.newVideo.bind(Object(o.a)(e)),e.getVideo=e.getVideo.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/videos").then((function(t){e.setState(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"addCategory",value:function(e,t){var a={Category:t,Videos:[]};return e.push(a),e}},{key:"getCategories",value:function(){var e=this,t=[];return this.state.videos&&this.state.videos.forEach((function(a){if(0==t.length)t=e.addCategory(t,a.videoCategory);else{var c=!1;t.forEach((function(e){e.Category==a.videoCategory&&(c=!0)})),c||(t=e.addCategory(t,a.videoCategory))}})),t}},{key:"createCategorizedVideos",value:function(){var e=this,t=this.getCategories();return t.forEach((function(t){e.state.videos.filter((function(e){e.videoCategory===t.Category&&t.Videos.push(e)}))})),t}},{key:"newVideo",value:function(){window.location.assign("/newTutorial")}},{key:"getVideo",value:function(e){return console.log(e),Object(m.jsxs)(k.Player,{children:[Object(m.jsx)("source",{src:"http://localhost:4000/app/vid/"+e._id}),Object(m.jsx)(k.BigPlayButton,{position:"center"}),Object(m.jsx)(k.ControlBar,{autoHide:!0})]})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Videos"}),Object(m.jsx)("div",{className:"videoContent",children:this.createCategorizedVideos().map((function(t){return Object(m.jsxs)("div",{className:"form-div video",children:[Object(m.jsx)("h1",{children:t.Category}),t.Videos.map((function(t){return Object(m.jsxs)(f.a,{className:"card-element video",children:[Object(m.jsx)(f.a.Title,{className:"card-title",children:t.videoName}),Object(m.jsx)(f.a.Body,{children:e.getVideo(t)})]})}))]})}))}),Object(m.jsxs)("div",{className:"video-category-footer",children:[Object(m.jsx)("input",{type:"submit",onClick:this.createCategorizedVideos,className:"bsingle__content btn",value:"Neue Kategorie erstellen"}),Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Neues Video einbetten",onClick:this.newVideo})]})]}),this.state.error]})}}]),a}(c.Component)),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a),e=t.call(this);var c=new URLSearchParams(window.location.search);return e.userId=null,c&&(e.userId=c.get("id")),e.selectedDate=null,e.state={dates:[]},e.popDay=e.popDay.bind(Object(o.a)(e)),e.isConsultant=e.isConsultant.bind(Object(o.a)(e)),e.updateAppointment=e.updateAppointment.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.userId&&j.a.get("http://localhost:4000/app/calendar/user/"+this.userId).then((function(t){e.setState(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"updateAppointment",value:function(e){console.log("update: "+this.selectedDate),this.selectedDate&&window.location.assign("/Appointments/update?id="+this.selectedDate+"&userid="+this.userId)}},{key:"popDay",value:function(e){var t=this;e.preventDefault(),console.log(e.currentTarget);var a=e.currentTarget.id;this.state.dates.map((function(c){c.id==a&&(t.selectedDate=a,Array.from(e.currentTarget.parentElement.childNodes).map((function(e){e.classList.remove("selected")})),e.currentTarget.classList.add("selected"),document.getElementById("changeDate").firstElementChild.classList.remove("disabled"))}))}},{key:"isConsultant",value:function(e){if(this.userId!=e.id)return Object(m.jsx)("div",{className:"gridItem",children:e.fullName})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Beratungstermine"}),Object(m.jsx)("div",{className:"appointments container",children:Object(m.jsxs)("div",{className:"appointmentList",children:[Object(m.jsxs)("div",{className:"appointmentdate-grid header",children:[Object(m.jsx)("div",{className:"gridItem",children:Object(m.jsx)("h2",{children:"Datum"})}),Object(m.jsx)("div",{className:"gridItem",children:Object(m.jsx)("h2",{children:"Uhrzeit"})}),Object(m.jsx)("div",{className:"gridItem",children:Object(m.jsx)("h2",{children:"Betreff"})}),Object(m.jsx)("div",{className:"gridItem",children:Object(m.jsx)("h2",{children:"Teilnehmer"})})]}),this.state.dates.map((function(t){return Object(m.jsxs)("div",{className:"appointmentdate-grid",id:t.id,onClick:e.popDay,children:[Object(m.jsx)("div",{className:"gridItem",children:t.appointmentDate.substring(0,10)}),Object(m.jsx)("div",{className:"gridItem",children:t.appointmentTimeFrom}),Object(m.jsx)("div",{className:"gridItem",children:t.appointmentName}),Object(m.jsx)("div",{className:"gridItem",children:t.appointmentMembers.map((function(e,t){return(t>0?", ":"")+e.fullName}))})]})}))]})}),Object(m.jsx)("div",{className:"video-category-footer",id:"changeDate",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn disabled",value:"Termin \xe4ndern",onClick:this.updateAppointment})})]}),this.state.error]})}}]),a}(c.Component),S=a(37),D=a(33),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a),(e=t.call(this)).state={},e.id="";var c=new URLSearchParams(window.location.search);return c&&(e.id=c.get("id")),e.renderUserPanel=e.renderUserPanel.bind(Object(o.a)(e)),e.renderAdminPanel=e.renderAdminPanel.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.id),this.id&&j.a.get("http://localhost:4000/app/user/"+this.id).then((function(t){e.setState(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"renderUserPanel",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Willkommen bei die Vorsorger"}),Object(m.jsx)("h1",{children:this.state.user.fullName}),Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsx)(u.b,{to:"/Contracts",children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{children:"Meine Vertr\xe4ge"}),Object(m.jsx)(f.a.Body,{className:"card-body",children:Object(m.jsx)(S.a,{className:"card-icon"})})]})}),Object(m.jsx)(u.b,{to:"/Appointments?id="+this.id,children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{children:"Beratungstermine"}),Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(D.a,{className:"card-icon"})})]})}),Object(m.jsx)(u.b,{to:"/Settings?id="+this.id,children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{className:"card-title",children:"Meine Daten"}),Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(D.b,{className:"card-icon"})})]})}),Object(m.jsx)(u.b,{to:"/Tutorials",children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{children:"Videos"}),Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(S.b,{className:"card-icon"})})]})})]})})]})}},{key:"renderAdminPanel",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Admin Dashboard"}),Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsx)(u.b,{to:"/Admin/Products",children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{children:"Produkte verwalten"}),Object(m.jsx)(f.a.Body,{className:"card-body",children:Object(m.jsx)(S.a,{className:"card-icon"})})]})}),Object(m.jsx)(u.b,{to:"/Admin/Tutorials",children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{children:"Videos"}),Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(D.a,{className:"card-icon"})})]})}),Object(m.jsx)(u.b,{to:"/Admin/Customers",children:Object(m.jsxs)(f.a,{className:"card-element",children:[Object(m.jsx)(f.a.Title,{className:"card-title",children:"Kunden verwalten"}),Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(D.b,{className:"card-icon"})})]})})]})})]})}},{key:"render",value:function(){return this.state.user?this.state.user.isAdmin?Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{user:this.state.fullName}),this.renderAdminPanel(),this.state.error]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{user:this.state.fullName}),this.renderUserPanel(),this.state.error]}):Object(m.jsx)("div",{children:"loading..."})}}]),a}(c.Component),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={Products:[{productName:"",productDescription:""}]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/products").then((function(t){e.setState(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Produkte"}),this.state.Products.map((function(e){return Object(m.jsxs)(f.a,{className:"card-element video",children:[Object(m.jsx)(f.a.Title,{className:"card-title",children:e.productName}),Object(m.jsx)(f.a.Body,{children:e.productDescription})]})})),Object(m.jsx)("div",{className:"video-category-footer",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Produkte Hinzuf\xfcgen"})})]}),this.state.error]})}}]),a}(c.Component),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={fullName:"",userName:"",email:"",password:""},e.changeEmail=e.changeEmail.bind(Object(o.a)(e)),e.changeFullName=e.changeFullName.bind(Object(o.a)(e)),e.changeUserName=e.changeUserName.bind(Object(o.a)(e)),e.changePassword=e.changePassword.bind(Object(o.a)(e)),e.createUser=e.createUser.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeUserName",value:function(e){this.setState({userName:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"createUser",value:function(e){var t=this;e.preventDefault();var a={fullName:this.state.fullName,userName:this.state.userName,email:this.state.email,password:this.state.password};j.a.post("http://localhost:4000/app/signin",a).then((function(e){console.log(e.status),"200"==e.status?window.location.assign("/Contracts"):console.log(e.status)})).catch((function(e){t.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Neuen Kunden anlegen"}),Object(m.jsx)("div",{className:"form-div",children:Object(m.jsxs)("form",{onSubmit:this.createUser,children:[Object(m.jsx)("input",{type:"text",placeholder:"Full Name",onChange:this.changeFullName,value:this.state.fullName,className:"form-control form-group"}),Object(m.jsx)("input",{type:"text",placeholder:"User Name",onChange:this.changeUserName,value:this.state.userName,className:"form-control form-group"}),Object(m.jsx)("input",{type:"email",placeholder:"Email",onChange:this.changeEmail,value:this.state.email,className:"form-control form-group"}),Object(m.jsx)("input",{type:"password",placeholder:"Password",onChange:this.changePassword,value:this.state.password,className:"form-control form-group"}),Object(m.jsx)("div",{className:"container-login",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Anlegen"})})]})})]}),this.state.error]})}}]),a}(c.Component),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),(c=t.call(this)).id="";var n=new URLSearchParams(window.location.search);return n&&(c.id=n.get("id")),console.log(e),c.state||(c.state={contract:{contractNumber:"",contractName:"",contractDate:"",contractUser:"",contractBinary:"",contractType:"",contractService:"",contractBinaries:[{documentName:"",documentDate:""}]}}),e&&e.contract&&c.setState(e),c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/contracts/"+this.id).then((function(t){e.setState(t.data),console.log("state updated with: "),console.log(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"render",value:function(){return console.log(this.id),Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),Object(m.jsx)("h1",{children:this.state.contract.contractName}),Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/basisdata",state:this.state},children:"Basisdaten"})}),Object(m.jsx)("div",{className:"card-title ",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/performance",state:this.state},children:"Leistungen"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/services",state:this.state,id:this.state.contract._id},children:"Services"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/documents",state:this.state,id:this.state.contract._id},children:"Dokumente"})})]})})})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"documents"})}),this.state.error]})}}]),a}(c.Component),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={Users:[{fullName:"",userName:"",email:""}]},e.getProducts(),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/user").then((function(t){e.setState(t.data)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Produkte"}),this.state.Users.forEach((function(e){return Object(m.jsxs)(f.a,{className:"card-element video",children:[Object(m.jsx)(f.a.Title,{className:"card-title",children:e.fullName}),Object(m.jsx)(f.a.Body,{children:e.productDescription})]})}))]}),this.state.error]})}}]),a}(c.Component),L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),c=t.call(this);var n=new URLSearchParams(window.location.search);return n&&(c.id=n.get("id")),c.id||e.location.id&&(c.id=e.location.id),e.location.state&&(c.state=e.location.state),c}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),Object(m.jsx)("h1",{children:this.state.contract.contractName}),Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/basisdata",state:this.state},children:"Basisdaten"})}),Object(m.jsx)("div",{className:"card-title ",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/performance",state:this.state},children:"Leistungen"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/services",state:this.state},children:"Services"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/documents",state:this.state,id:this.state.contract._id},children:"Dokumente"})})]})})})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Title,{children:"Basisdaten zum Vertrag"})})})]})}}]),a}(c.Component),I=a(31),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),c=t.call(this);var n=new URLSearchParams(window.location.search);return n&&(c.id=n.get("id")),c.id||e.location.id&&(c.id=e.location.id),e.location.state&&(c.state=e.location.state),c.viewContract=c.viewContract.bind(Object(o.a)(c)),c.openDocument=c.openDocument.bind(Object(o.a)(c)),c}return Object(r.a)(a,[{key:"viewContract",value:function(e){for(var t=this,a=e.target;!a.classList.contains("card-element");)a=a.offsetParent;console.log(a.id),e.preventDefault(),j.a.get("http://localhost:4000/app/contracts/"+a.id).then((function(e){t.setState(e.data)})).catch((function(e){t.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"openDocument",value:function(e){e.preventDefault(),console.log(e.target.parentElement.id),e.target.parentElement.fileType&&"application/pdf"==e.target.parentElement.fileType?e.target.parentElement.id&&e.target.parentElement.id.length>0&&window.open("data:application/pdf;base64,"+encodeURI(e.target.parentElement.id)):console.log(e.target.parentElement.id)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),Object(m.jsx)("h1",{children:this.state.contract.contractName}),Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/basisdata",state:this.state},children:"Basisdaten"})}),Object(m.jsx)("div",{className:"card-title ",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/performance",state:this.state},children:"Leistungen"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/services",state:this.state},children:"Services"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/documents",state:this.state,id:this.state.contract._id},children:"Dokumente"})})]})})})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"documents",children:this.state.contract.contractBinaries.map((function(t){return Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:t.documentName}),Object(m.jsx)("div",{className:"card-title",children:t.documentDate}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)("a",{className:"card-title",onClick:e.openDocument,id:t.content,fileType:t.fileType,children:Object(m.jsx)(I.a,{})})})]})})})}))})}),this.state.error]})}}]),a}(c.Component),A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),c=t.call(this);var n=new URLSearchParams(window.location.search);return n&&(c.id=n.get("id")),c.id||e.location.id&&(c.id=e.location.id),e.location.state&&(c.state=e.location.state),c}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),Object(m.jsx)("h1",{children:this.state.contract.contractName}),Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/basisdata",state:this.state},children:"Basisdaten"})}),Object(m.jsx)("div",{className:"card-title ",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/performance",state:this.state},children:"Leistungen"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/services",state:this.state},children:"Services"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/documents",state:this.state,id:this.state.contract._id},children:"Dokumente"})})]})})})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Title,{children:"Services zum Vertrag"})})})]})}}]),a}(c.Component),F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;Object(i.a)(this,a),c=t.call(this);var n=new URLSearchParams(window.location.search);return n&&(c.id=n.get("id")),c.id||e.location.id&&(c.id=e.location.id),e.location.state&&(c.state=e.location.state),c}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Vertr\xe4ge"}),Object(m.jsx)("h1",{children:this.state.contract.contractName}),Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"card-element-spacer",children:[Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/basisdata",state:this.state},children:"Basisdaten"})}),Object(m.jsx)("div",{className:"card-title ",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/performance",state:this.state},children:"Leistungen"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/services",state:this.state},children:"Services"})}),Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)(u.b,{to:{pathname:"/contractdetail/documents",state:this.state,id:this.state.contract._id},children:"Dokumente"})})]})})})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Title,{children:"Leistungen zum Vertrag"})})})]})}}]),a}(c.Component),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).file=null,e.state={videoName:"",videoLink:FormData,videoCategory:""},e.changeLink=e.changeLink.bind(Object(o.a)(e)),e.changeTitle=e.changeTitle.bind(Object(o.a)(e)),e.changeCategory=e.changeCategory.bind(Object(o.a)(e)),e.saveVideo=e.saveVideo.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://localhost:4000/app/videos").then((function(t){e.setState(t.data)}))}},{key:"changeLink",value:function(e){console.log(e.target.files[0]),this.file=e.target.files[0],this.setState({videoLink:e.target.files}),console.log(this.state)}},{key:"changeTitle",value:function(e){this.setState({videoName:e.target.value})}},{key:"changeCategory",value:function(e){this.setState({videoCategory:e.target.value})}},{key:"saveVideo",value:function(){var e=this;console.log(this.file);var t=new FormData;t.append("File",this.file),t.append("videoCategory",this.state.videoCategory),t.append("videoName",this.state.videoName),console.log(t),j.a.post("http://localhost:4000/app/videos",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){window.location.assign("/Tutorials")})).catch((function(t){console.log(t).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Neues Video hochladen"}),Object(m.jsx)("div",{className:"videoContent",children:Object(m.jsxs)("div",{className:"form-div video",children:[Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsxs)(f.a.Body,{children:[Object(m.jsx)("input",{type:"text",placeholder:"Video Title",onChange:this.changeTitle,value:this.state.videoName,className:"form-control form-group"}),Object(m.jsx)("input",{type:"text",placeholder:"Video Kategorie",onChange:this.changeCategory,value:this.state.videoCategory,className:"form-control form-group"}),Object(m.jsx)("form",{children:Object(m.jsx)("input",{type:"file",name:"file",placeholder:"Video Link",onChange:this.changeLink,className:"form-control form-group"})})]})}),Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Neues Video einbetten",onClick:this.saveVideo})]})})]}),this.state.error]})}}]),a}(c.Component),M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a),e=t.call(this);var c=new URLSearchParams(window.location.search);return e.userId=null,c&&(e.calendarId=c.get("id"),e.userId=c.get("userid")),e.state={appointmentTimeTo:"",appointmentTimeFrom:"",id:"",appointmentDate:""},e.changeTimeTo=e.changeTimeTo.bind(Object(o.a)(e)),e.changeTimeFrom=e.changeTimeFrom.bind(Object(o.a)(e)),e.changeDate=e.changeDate.bind(Object(o.a)(e)),e.updateAppointment=e.updateAppointment.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.calendarId&&j.a.get("http://localhost:4000/app/calendar/"+this.calendarId).then((function(t){e.setState(t.data),console.log(e.state)})).catch((function(t){e.setState({error:Object(m.jsx)(b,{err:!0})})}))}},{key:"changeTimeTo",value:function(e){this.setState({appointmentTimeTo:e.currentTarget.value})}},{key:"changeTimeFrom",value:function(e){this.setState({appointmentTimeFrom:e.currentTarget.value})}},{key:"changeDate",value:function(e){this.setState({appointmentDate:e.currentTarget.value})}},{key:"updateAppointment",value:function(e){var t=this;if(e.preventDefault(),console.log("updateAppointment"),this.state.id){var a={id:this.state.id,appointmentTimeTo:this.state.appointmentTimeTo,appointmentTimeFrom:this.state.appointmentTimeFrom,appointmentDate:this.state.appointmentDate};j.a.patch("http://localhost:4000/app/calendar",a).then((function(e){window.location.assign("/Appointments?id="+t.userId)}))}}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Ihre Beratungstermine"}),Object(m.jsxs)("form",{onSubmit:this.updateAppointment,children:[Object(m.jsx)(f.a,{className:"card-element video",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsxs)("div",{className:"gridContainer",children:[Object(m.jsx)("div",{className:"dataLeft",children:"Datum"}),Object(m.jsx)("input",{type:"text",placeholder:"Datum",onChange:this.changeDate,value:this.state.appointmentDate,className:"form-control form-group"}),Object(m.jsx)("div",{className:"dataLeft",children:"Uhrzeit von"}),Object(m.jsx)("input",{type:"text",placeholder:"Uhrzeit von",onChange:this.changeTimeFrom,value:this.state.appointmentTimeFrom,className:"form-control form-group"}),Object(m.jsx)("div",{className:"dataLeft",children:"Uhrzeit bis"}),Object(m.jsx)("input",{type:"text",placeholder:"Uhrzeit bis",onChange:this.changeTimeTo,value:this.state.appointmentTimeTo,className:"form-control form-group"})]})})}),Object(m.jsx)("div",{className:"update-user-btn-container",children:Object(m.jsx)("input",{type:"submit",className:"bsingle__content btn",value:"Speichern"})})]})]}),this.state.error]})}}]),a}(c.Component),R=Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{exact:!0,path:"/",component:p}),Object(m.jsx)(O.a,{exact:!0,path:"/Home",component:P}),Object(m.jsx)(O.a,{exact:!0,path:"/Contracts",component:y}),Object(m.jsx)(O.a,{exact:!0,path:"/Contractdetail",component:_}),Object(m.jsx)(O.a,{exact:!0,path:"/Contractdetail/services",component:A}),Object(m.jsx)(O.a,{exact:!0,path:"/Contractdetail/performance",component:F}),Object(m.jsx)(O.a,{exact:!0,path:"/Contractdetail/basisdata",component:L}),Object(m.jsx)(O.a,{exact:!0,path:"/Contractdetail/documents",component:E}),Object(m.jsx)(O.a,{exact:!0,path:"/Error",component:b}),Object(m.jsx)(O.a,{exact:!0,path:"/Settings",component:C}),Object(m.jsx)(O.a,{exact:!0,path:"/Tutorials",component:w}),Object(m.jsx)(O.a,{exact:!0,path:"/newTutorial",component:z}),Object(m.jsx)(O.a,{exact:!0,path:"/Appointments",component:T}),Object(m.jsx)(O.a,{exact:!0,path:"/Appointments/update",component:M}),Object(m.jsx)(O.a,{exact:!0,path:"/Signup",component:V}),Object(m.jsx)(O.a,{path:"/Admin/Tutorials",component:w}),Object(m.jsx)(O.a,{path:"/Admin/Products",component:U}),Object(m.jsx)(O.a,{exact:!0,path:"/Admin/Customers",component:B})]})});s.a.render(R,document.getElementById("root"))},40:function(e,t,a){}},[[1643,1,2]]]);
//# sourceMappingURL=main.32665769.chunk.js.map