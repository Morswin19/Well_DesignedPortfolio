(this.webpackJsonppk_portfolio2=this.webpackJsonppk_portfolio2||[]).push([[3],{43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/headerImg.dafcd466.svg"},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(1),r=t(2),s=t(4),i=t(3),o=(t(43),t(44),t(5)),m=t.n(o),d=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={projectActive:!1},e.handleProjectsClick=function(){e.setState({projectActive:!e.state.projectActive})},e}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:this.props.className},l.a.createElement("div",{className:"navIcon"},l.a.createElement(m.a,{onClick:this.props.click,className:"icon",name:"times-circle",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#header"},l.a.createElement("span",{onClick:this.props.click},"Home")),l.a.createElement("div",{className:"sideLine"})),l.a.createElement("li",null,l.a.createElement("a",{href:"#aboutMe"},l.a.createElement("span",{onClick:this.props.click},"About Me")),l.a.createElement("div",{className:"sideLine"})),l.a.createElement("li",null,l.a.createElement("a",{href:"#skillsTitles"},l.a.createElement("span",{onClick:this.props.click},"Skills")),l.a.createElement("div",{className:"sideLine"})),l.a.createElement("li",{id:"projectsLink"},l.a.createElement("a",{href:"#projects"},l.a.createElement("span",{onClick:this.props.click},"Projects")),this.state.projectActive?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{onClick:this.handleProjectsClick,className:"icon",name:"minus",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}}),l.a.createElement("ul",{id:"projectSidebarList"},l.a.createElement("li",null,"Project1",l.a.createElement("div",{className:"sideLine2"})),l.a.createElement("li",null,"Project2",l.a.createElement("div",{className:"sideLine2"})),l.a.createElement("li",null,"Project3",l.a.createElement("div",{className:"sideLine2"})),l.a.createElement("li",null,"Project4",l.a.createElement("div",{className:"sideLine2"})))):l.a.createElement(m.a,{onClick:this.handleProjectsClick,className:"icon",name:"plus",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}}),!this.state.projectActive&&l.a.createElement("div",{className:"sideLine"})),l.a.createElement("li",null,l.a.createElement("a",{href:"#footer"},l.a.createElement("span",{onClick:this.props.click},"Contact")),l.a.createElement("div",{className:"sideLine"})),l.a.createElement("li",{onClick:this.props.click},l.a.createElement("div",{id:"navSocials"},l.a.createElement("div",{className:"navIcon"},l.a.createElement("a",{href:"https://www.facebook.com/piotr.kalman",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(m.a,{className:"icon",name:"facebook",size:"3x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}}))),l.a.createElement("div",{className:"navIcon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/piotr-kalman/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(m.a,{className:"icon",name:"linkedin",size:"3x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}}))),l.a.createElement("div",{className:"navIcon"},l.a.createElement("a",{href:"https://github.com/Morswin19",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(m.a,{className:"icon",name:"github",size:"3x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"}})))))))}}]),t}(l.a.Component),E=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={navScroll:"navTop",resize:0,sidebarClass:"sidebar",backgroundClass:"backgroundDisabled"},e.handleNavbarScroll=function(){window.pageYOffset>0?e.setState({navScroll:"navScroll"}):e.setState({navScroll:"navTop"})},e.handleResize=function(){e.setState({resize:window.innerWidth})},e.handleEscapeKey=function(a){27===a.keyCode&&"sidebar sidebarActive"===e.state.sidebarClass&&e.setState({sidebarClass:"sidebar",backgroundClass:"backgroundDisabled"})},e.handleEscapeClick=function(){e.setState({sidebarClass:"sidebar",backgroundClass:"backgroundDisabled"})},e.handleSidebarClick=function(){"sidebar"===e.state.sidebarClass&&(e.setState({sidebarClass:"sidebar sidebarActive",backgroundClass:"backgroudActive"}),setTimeout((function(){e.setState({backgroundClass:"backgroundActiveBlack"})}),200))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleNavbarScroll),window.addEventListener("resize",this.handleResize),document.addEventListener("keydown",this.handleEscapeKey),"backgroundActive"===this.state.backgroundClass&&this.setState({backgroundClass:"backgroundActiveBlack"})}},{key:"render",value:function(){return l.a.createElement("div",{id:"nav-container",className:this.state.navScroll},l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{id:"brand"},l.a.createElement("span",null,"P.KALMAN")," ","//"," PORTFOLIO"),l.a.createElement("div",{id:"navlinks"},window.innerWidth>1100?l.a.createElement("ul",null,l.a.createElement("li",{className:"navItem"},l.a.createElement("div",{className:"navLink"},l.a.createElement("a",{href:"#header"},"Hello"),l.a.createElement("div",{className:"navLine"}))),l.a.createElement("li",{className:"navItem"},l.a.createElement("div",{className:"navLink"},l.a.createElement("a",{href:"#aboutMe"},"About Me"),l.a.createElement("div",{className:"navLine"}))),l.a.createElement("li",{className:"navItem"},l.a.createElement("div",{className:"navLink"},l.a.createElement("a",{href:"#skillsTitles"},"Skills"),l.a.createElement("div",{className:"navLine"}))),l.a.createElement("li",{className:"navItem"},l.a.createElement("div",{className:"navLink"},l.a.createElement("a",{href:"#projects"},"Projects"),l.a.createElement("div",{className:"navLine"}))),l.a.createElement("li",{className:"navItem"},l.a.createElement("div",{className:"navLink"},l.a.createElement("a",{href:"#footer"},"Contact"),l.a.createElement("div",{className:"navLine"})))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null),l.a.createElement("div",{onClick:this.handleSidebarClick,className:"hamburger"},l.a.createElement("span",{className:"hamburgerBox"},l.a.createElement("span",{className:"hamburgerInner"})),l.a.createElement(d,{className:this.state.sidebarClass,click:this.handleEscapeClick}),l.a.createElement("div",{id:"sidebarBackground",className:this.state.backgroundClass,onClick:this.handleEscapeClick}))))))}}]),t}(l.a.Component),v=(t(45),t(46)),u=t.n(v);a.default=function(){return l.a.createElement("div",{id:"header"},l.a.createElement(E,null),l.a.createElement("div",{id:"helloTextContainer"},l.a.createElement("div",{id:"helloText"},"Hello, I'm Peter,",l.a.createElement("br",null),"I want to write code ",l.a.createElement("br",null),"for you",l.a.createElement("a",{href:"#skills"},l.a.createElement("button",null,"Show me your skills")),l.a.createElement("img",{id:"headerImg",src:u.a,alt:""}))))}}}]);
//# sourceMappingURL=3.66336b35.chunk.js.map