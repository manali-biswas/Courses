(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{102:function(e,t,s){},103:function(e,t,s){},172:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s(2),n=s.n(r),a=s(25),i=s.n(a),o=(s(102),s(20)),l=s(21),j=s(23),d=s(22),b=(s(103),s(19)),m=s(173),u=s(174),h=s(175),O=s(176),x=s(177),p=s(178),f=s(179),g=s(180),N=s(198),v=s(181),k=s(182),y=s(183),C=s(184),w=s(185),L=s(186),M=s(14),F=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},c.toggleNav=c.toggleNav.bind(Object(b.a)(c)),c.toggleModal=c.toggleModal.bind(Object(b.a)(c)),c.handleLogin=c.handleLogin.bind(Object(b.a)(c)),c}return Object(l.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.value),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{className:"navbar-dark bg-dark",expand:"md",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(u.a,{href:"/",children:"Demo"}),Object(c.jsx)(h.a,{onClick:this.toggleNav}),Object(c.jsxs)(O.a,{navbar:!0,isOpen:this.state.isNavOpen,children:[Object(c.jsxs)(x.a,{navbar:!0,children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(M.c,{className:"nav-link",to:"/",children:"Home"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(M.c,{className:"nav-link",to:"/skills",children:"Skills"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(M.c,{className:"nav-link",to:"/about",children:"About"})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(M.c,{className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(c.jsx)(x.a,{className:"ml-auto",navbar:!0,children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a,{outline:!0,color:"light",onClick:this.toggleModal,children:[Object(c.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(c.jsx)(g.a,{className:"x",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row row-header",children:Object(c.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(c.jsx)("h1",{children:"Courses I have studied"}),Object(c.jsx)("p",{children:"Online courses taken up from Coursera and Udemy"})]})})})}),Object(c.jsxs)(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsx)(v.a,{children:"Login"}),Object(c.jsx)(k.a,{children:Object(c.jsxs)(y.a,{onSubmit:this.handleLogin,children:[Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"username",children:"Username"}),Object(c.jsx)(L.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"password",children:"Username"}),Object(c.jsx)(L.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(c.jsx)(C.a,{check:!0,children:Object(c.jsxs)(w.a,{check:!0,children:[Object(c.jsx)(L.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember Me"]})}),Object(c.jsx)(f.a,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(r.Component);var E=function(e){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"row justify-content-center",children:[Object(c.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(c.jsx)("h5",{children:"Links"}),Object(c.jsxs)("ul",{className:"list-unstyled",children:[Object(c.jsx)("li",{children:Object(c.jsx)(M.b,{to:"/home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(M.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(M.b,{to:"/skills",children:"Skills"})}),Object(c.jsx)("li",{children:Object(c.jsx)(M.b,{to:"/contact",children:"Contact"})})]})]}),Object(c.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"HONG KONG",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(c.jsx)("a",{href:"mailto:biswas.manali8@gmail.com",children:"biswas.manali8@gmail.com"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(c.jsx)("i",{className:"fa fa-google-plus"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(c.jsx)("i",{className:"fa fa-facebook"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(c.jsx)("i",{className:"fa fa-linkedin"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(c.jsx)("i",{className:"fa fa-twitter"})}),Object(c.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(c.jsx)("i",{className:"fa fa-youtube"})}),Object(c.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(c.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(c.jsx)("div",{className:"row justify-content-center",children:Object(c.jsx)("div",{className:"col-auto",children:Object(c.jsx)("p",{children:"\xa9 Copyright 2020 Manali Biswas"})})})]})})},S=s(193),P=s(188),q=s(194),R=s(189),A=s(190),I=s(187),D=s(191),T=s(192);var G=function(e){var t=e.course,s=t.skills.map((function(e){return Object(c.jsx)(I.a,{tag:"li",className:"border-info",children:e.name},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P.a,{children:t.date}),Object(c.jsxs)(R.a,{className:"text-center text-info",children:[Object(c.jsx)(A.a,{children:Object(c.jsx)("h2",{children:t.name})}),Object(c.jsx)(D.a,{children:Object(c.jsx)("p",{children:t.description})}),Object(c.jsx)(T.a,{className:"list-group-flush text-left",tag:"ul",children:s}),Object(c.jsx)("br",{}),Object(c.jsx)(M.b,{to:"/skills/".concat(t.id),className:"btn btn-info",children:"Click here for projects"})]})]})},_=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(c.jsx)("p",{children:"Loading..."})]})},U="https://manali-biswas.github.io/data/";function B(e){var t=e.selectedCourse,s=e.course,r=e.onClick;return null!=s?t===s?Object(c.jsx)(S.a,{className:"h-100 border-info",onClick:function(){return r(null)},children:Object(c.jsx)(G,{course:s})}):Object(c.jsxs)(S.a,{className:"h-100",onClick:function(){return r(s)},children:[Object(c.jsx)(P.a,{children:s.date}),Object(c.jsx)(q.a,{width:"150px",src:U+"public/"+s.image,alt:s.name}),Object(c.jsx)(R.a,{className:"text-center",children:Object(c.jsx)(A.a,{children:Object(c.jsx)("h5",{children:s.name})})})]}):Object(c.jsx)("div",{})}var J=function(e){if(e.coursesLoading)return Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)(_,{})});if(e.coursesErr)return Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)("h4",{children:e.coursesErr})});var t=e.courses.map((function(t){return Object(c.jsx)("div",{className:"col-12 col-md-4 mb-3 mt-3",children:Object(c.jsx)(B,{course:t,onClick:e.onClick,selectedCourse:e.selectedCourse})},t.id)}));return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:t})})},H=s(195);var W=function(e){return e.coursesLoading?Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)(_,{})}):e.coursesErr?Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)("h4",{children:e.coursesErr})}):Object(c.jsxs)("div",{className:"container mt-5 mb-5",children:[Object(c.jsx)("h2",{className:"text-center",children:"Home"}),Object(c.jsxs)("div",{className:"container d-flex flex-column justify-content-center ",style:{height:"90vh"},children:[Object(c.jsx)("p",{children:"This is a personal website to keep track of all the courses I have taken up so far and the skills I built. Below is the course that I liked the most so far!"}),Object(c.jsxs)(H.a,{className:"mt-5 mb-3",children:[Object(c.jsx)("img",{src:U+"public/"+e.course.image,alt:e.course.name,width:"100px"}),Object(c.jsxs)("div",{className:"media-body ml-5",children:[Object(c.jsx)("h5",{children:e.course.name}),Object(c.jsx)("p",{children:e.course.description})]})]})]})]})};var Z=function(){return Object(c.jsxs)("div",{className:"text-center container mt-5",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)("img",{src:"assets/images/Girl Study.png",className:"rounded",alt:"Girl"}),Object(c.jsxs)("div",{className:"text-left mt-3 mb-5 container",style:{maxWidth:"720px"},children:[Object(c.jsx)("p",{children:"I am Manali Biswas, a third year Computer Engineering student @ Delhi Technological University. I love learning new technologies. I am also a MERN stack developer and ML enthusiast."}),Object(c.jsx)("p",{children:"This website helps me keep track of all the courses I have learnt and the skills gained. It is useful to track my learning progress. Also, I will know where to refer for specific skills in the future."})]})]})]})},K=s(8),$=function(e){return e&&e.length},z=function(e){return function(t){return!t||t.length<=e}},Q=function(e){return function(t){return t&&t.length>=e}},V=function(e){return!isNaN(Number(e))},X=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Y=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).onSubmit=c.onSubmit.bind(Object(b.a)(c)),c}return Object(l.a)(s,[{key:"onSubmit",value:function(e){console.log("Current state is:"+JSON.stringify(e)),alert("Current state is:"+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"text-center container mt-5",children:[Object(c.jsx)("h2",{children:"Contact"}),Object(c.jsx)("div",{className:"text-left mt-5 mb-5 container",style:{maxWidth:"720px"},children:Object(c.jsxs)(T.a,{children:[Object(c.jsxs)(I.a,{className:"border-info",children:[Object(c.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678"]}),Object(c.jsxs)(I.a,{className:"border-info",children:[Object(c.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321"]}),Object(c.jsxs)(I.a,{className:"border-info",children:[Object(c.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(c.jsx)("a",{href:"mailto:biswas.manali8@gmail.com",children:"biswas.manali8@gmail.com"})]})]})})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h3",{children:"Send your feedback"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(K.Form,{model:"feedback",onSubmit:function(t){return e.onSubmit(t)},children:[Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"firstname",children:"First Name"}),Object(c.jsx)(K.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:$,minLength:Q(3),maxLength:z(15)}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Minimum 2 characters required",maxLength:"Maximum 15 characters allowed"}})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"lastname",children:"Last Name"}),Object(c.jsx)(K.Control.text,{model:".lastname",className:"form-control",id:"lastname",name:"lastname",placeholder:"Last Name",validators:{required:$,minLength:Q(3),maxLength:z(15)}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Minimum 2 characters required",maxLength:"Maximum 15 characters allowed"}})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"telnum",children:"Telephone Number"}),Object(c.jsx)(K.Control.text,{model:".telnum",className:"form-control",id:"telnum",name:"telnum",placeholder:"Tel. number",validators:{required:$,minLength:Q(3),maxLength:z(15),isNumber:V}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Minimum 2 numbers required",maxLength:"Maximum 15 numbers allowed",isNumber:"Must be a number"}})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"email",children:"Email"}),Object(c.jsx)(K.Control.text,{model:".email",className:"form-control",id:"email",name:"email",placeholder:"Email",validators:{required:$,validEmail:X}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(C.a,{check:!0,children:Object(c.jsxs)(w.a,{check:!0,htmlFor:"agree",children:[Object(c.jsx)(K.Control.checkbox,{model:".agree",className:"form-check-input",name:"agree"})," "," ",Object(c.jsx)("strong",{children:"May we contact you?"})]})}),Object(c.jsxs)(K.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(c.jsx)("option",{children:"Tel."}),Object(c.jsx)("option",{children:"Email"})]})]}),Object(c.jsxs)(C.a,{children:[Object(c.jsx)(w.a,{htmlFor:"feedback",children:"Feedback"}),Object(c.jsx)(K.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})]}),Object(c.jsx)(C.a,{children:Object(c.jsx)(f.a,{type:"submit",color:"primary",children:"Send Feedback"})})]})})]})]})}}]),s}(r.Component),ee=s(196),te=s(197),se=function(e){return e&&e.length},ce=function(e){return function(t){return!t||t.length<=e}};function re(e){var t=e.link;return void 0===t?Object(c.jsx)("a",{href:t,className:"btn btn-primary disabled",children:"Hosted Project Link"}):Object(c.jsx)("a",{href:t,className:"btn btn-primary",children:"Hosted Project Link"})}function ne(e){var t=e.github;return void 0===t?Object(c.jsx)("a",{href:t,className:"btn btn-dark ml-3 disabled",children:"Github Link"}):Object(c.jsx)("a",{href:t,className:"btn btn-dark ml-3",children:"Github Link"})}var ae=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={isModalOpen:!1},c.toggleModal=c.toggleModal.bind(Object(b.a)(c)),c.onSubmit=c.onSubmit.bind(Object(b.a)(c)),c}return Object(l.a)(s,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"onSubmit",value:function(e){this.toggleModal(),this.props.addProject(this.props.course.id,e.name,e.description,e.link,e.github)}},{key:"render",value:function(){if(this.props.coursesLoading)return Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)(_,{})});if(this.props.coursesErr)return Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)("h4",{children:this.props.coursesErr})});if(this.props.projectsErr)return Object(c.jsx)("div",{className:"container text-center",children:Object(c.jsx)("h4",{children:this.props.projectsErr})});var e,t=this.props.projects.map((function(e){return Object(c.jsx)(S.a,{className:"mb-3 border-dark",children:Object(c.jsxs)(R.a,{children:[Object(c.jsx)(A.a,{tag:"h4",children:e.name}),Object(c.jsx)(D.a,{children:e.description}),Object(c.jsx)(re,{link:e.link}),Object(c.jsx)(ne,{github:e.github})]})},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container mt-5 mb-5 text-center",children:[Object(c.jsxs)("h2",{children:["Projects on ",this.props.course.name]}),Object(c.jsx)("div",{className:"mt-5 container w-75",children:t}),Object(c.jsx)(f.a,{color:"outline-primary",onClick:this.toggleModal,children:"Add Project"})]}),Object(c.jsxs)(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(c.jsx)(v.a,{children:"Add Project"}),Object(c.jsx)(k.a,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(K.LocalForm,{onSubmit:this.onSubmit,children:[Object(c.jsxs)(ee.a,{className:"form-group",children:[Object(c.jsx)(te.a,{className:"label col-md-4",htmlFor:"name",children:"Project Name"}),Object(c.jsx)(K.Control.text,{model:".name",id:"name",name:"name",placeholder:"Project Name",className:"col-md-8 form-control",validators:{required:se,minLength:(e=2,function(t){return t&&t.length>=e})}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Project name is required",minLength:"Minimum 2 characters required"}})]}),Object(c.jsxs)(ee.a,{className:"form-group",children:[Object(c.jsx)(te.a,{className:"label col-md-4",htmlFor:"description",children:"Project Description"}),Object(c.jsx)(K.Control.textarea,{model:".description",id:"description",name:"description",rows:"12",placeholder:"Project Description",className:"col-md-8 form-control",validators:{required:se,maxLength:ce(30)}}),Object(c.jsx)(K.Errors,{className:"text-danger",model:".description",show:"touched",messages:{required:"Project description is required",maxLength:"Maximum 30 characters allowed"}})]}),Object(c.jsxs)(ee.a,{className:"form-group",children:[Object(c.jsx)(te.a,{className:"label col-md-4",htmlFor:"link",children:"Project Link"}),Object(c.jsx)(K.Control.text,{type:"url",model:".link",id:"link",name:"link",placeholder:"Project link",className:"col-md-8 form-control"})]}),Object(c.jsxs)(ee.a,{className:"form-group",children:[Object(c.jsx)(te.a,{className:"label col-md-4",htmlFor:"github",children:"Github Link"}),Object(c.jsx)(K.Control.text,{type:"url",model:".github",id:"github",name:"github",placeholder:"Github link",className:"col-md-8 form-control"})]}),Object(c.jsx)(ee.a,{children:Object(c.jsx)(f.a,{type:"submit",color:"primary",value:"submit",children:"Submit"})})]})})})]})]})}}]),s}(r.Component),ie=s(9),oe=s(26),le="ADD_PROJECT",je="COURSES_LOADING",de="COURSES_FAILED",be="ADD_COURSES",me="ADD_PROJECTS",ue="PROJECTS_FAILED",he=s(68),Oe=s.n(he),xe=function(){return{type:je}},pe=function(e){return{type:be,payload:e}},fe=function(){return function(e){return Oe.a.get(U+"db.json").then((function(t){return e((s=t.data.projects,{type:me,payload:s}));var s}))}},ge=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={selectedCourse:null},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.fetchCourses(),this.props.fetchProjects()}},{key:"onCourseClick",value:function(e){this.setState({selectedCourse:e})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(F,{}),Object(c.jsxs)(ie.d,{children:[Object(c.jsx)(ie.b,{exact:!0,path:"/",component:function(){return Object(c.jsx)(W,{course:e.props.courses.courses.filter((function(e){return e.featured}))[0],coursesLoading:e.props.courses.isLoading,coursesErr:e.props.courses.err})}}),Object(c.jsx)(ie.b,{exact:!0,path:"/skills",component:function(){return Object(c.jsx)(J,{courses:e.props.courses.courses,onClick:function(t){return e.onCourseClick(t)},selectedCourse:e.state.selectedCourse,coursesLoading:e.props.courses.isLoading,coursesErr:e.props.courses.err})}}),Object(c.jsx)(ie.b,{exact:!0,path:"/about",component:Z}),Object(c.jsx)(ie.b,{exact:!0,path:"/contact",component:function(){return Object(c.jsx)(Y,{resetFeedbackForm:e.props.resetFeedbackForm})}}),Object(c.jsx)(ie.b,{path:"/skills/:id",component:function(t){var s=t.match,r=parseInt(s.params.id);return Object(c.jsx)(ae,{course:e.props.courses.courses.filter((function(e){return e.id===r}))[0],projects:e.props.courseProjects.projects.filter((function(e){return e.course_id===r})),addProject:e.props.addProject,coursesLoading:e.props.courses.isLoading,coursesErr:e.props.courses.err,projectsErr:e.props.courseProjects.err})}}),Object(c.jsx)(ie.a,{to:"/"})]}),Object(c.jsx)(E,{})]})}}]),s}(r.Component),Ne=Object(ie.g)(Object(oe.connect)((function(e){return{courses:e.courses,courseProjects:e.courseProjects}}),(function(e){return{addProject:function(t,s,c,r,n){return e(function(e,t,s,c,r){return{type:le,payload:{course_id:e,name:t,description:s,link:c,github:r}}}(t,s,c,r,n))},fetchCourses:function(){return e((function(e){return e(xe(!0)),Oe.a.get(U+"db.json").then((function(t){return e(pe(t.data.courses))}))}))},resetFeedbackForm:function(){e(K.actions.reset("feedback"))},fetchProjects:function(){return e(fe())}}}))(ge)),ve=s(13),ke=s(27),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,err:null,courses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(ve.a)(Object(ve.a)({},e),{},{isLoading:!1,err:null,courses:t.payload});case je:return Object(ve.a)(Object(ve.a)({},e),{},{isLoading:!0,err:null,courses:[]});case de:return Object(ve.a)(Object(ve.a)({},e),{},{isLoading:!1,err:t.payload,courses:[]});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{err:null,projects:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(ve.a)(Object(ve.a)({},e),{},{err:null,projects:t.payload});case ue:return Object(ve.a)(Object(ve.a)({},e),{},{err:t.payload,projects:[]});case le:var s=t.payload;return s.id=e.projects.length,Object(ve.a)(Object(ve.a)({},e),{},{projects:e.projects.concat(s)});default:return e}},we={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Le=s(95),Me=s(96),Fe=s.n(Me),Ee=Object(ke.createStore)(Object(ke.combineReducers)(Object(ve.a)({courses:ye,courseProjects:Ce},Object(K.createForms)({feedback:we}))),Object(ke.applyMiddleware)(Le.a,Fe.a)),Se=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)(oe.Provider,{store:Ee,children:Object(c.jsx)(M.a,{basename:"/Courses",children:Object(c.jsx)("div",{children:Object(c.jsx)(Ne,{})})})})}}]),s}(r.Component),Pe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,199)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))};s(169),s(170),s(171);i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Se,{})}),document.getElementById("root")),Pe()}},[[172,1,2]]]);
//# sourceMappingURL=main.7142774d.chunk.js.map