(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,n,t){e.exports=t(59)},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(14),i=t.n(l),o=t(5),c=t(6),u=t(8),s=t(7),p=t(9),m=t(3),f=t(61),d=t(2),h=t(29),b=t.n(h),v=t(62),g=t(35);function E(){var e=Object(m.a)(["\n  font-weight: 100;\n"]);return E=function(){return e},e}function j(){var e=Object(m.a)(["\n  font-weight: 800;\n"]);return j=function(){return e},e}var k=d.default.span(j()),x=d.default.span(E()),O=t(36),w=t(24),y=t(60);function L(){var e=Object(m.a)(["\n  margin-right: 30px;\n  &:hover{\n    color: coral;\n  }\n  &.active{\n    color: coral;\n  }\n"]);return L=function(){return e},e}var S=Object(d.default)(y.a)(L()),z=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).handleClick=function(){t.props.onActive()},t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(S,{onClick:this.handleClick,className:this.props.active?"active":"",to:this.props.linkTo},this.props.text)}}]),n}(a.Component);function C(){var e=Object(m.a)(["\n  position: fixed;\n  top: 10vh;\n  left: 10vh;\n  display: flex;\n  font-size: 14px;\n"]);return C=function(){return e},e}var T=d.default.ul(C()),R={navLinks:[{linkTo:"/",text:"home",active:!1},{linkTo:"/profile",text:"profile",active:!1},{linkTo:"/career",text:"career",active:!1}]},A=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).onActive=function(e){t.setState(R),t.setState({navLinks:[].concat(Object(w.a)(R.navLinks.slice(0,e)),[Object(O.a)({},R.navLinks[e],{active:!0})],Object(w.a)(R.navLinks.slice(e+1,R.navLinks.length)))})},t.state=R,t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.onActive(0)}},{key:"render",value:function(){var e=this;return r.a.createElement(T,null,this.state.navLinks.map(function(n,t){return r.a.createElement("li",{key:t},r.a.createElement(z,{onActive:function(){return e.onActive(t)},linkTo:n.linkTo,text:n.text,active:n.active}))}))}}]),n}(a.Component);function N(){var e=Object(m.a)(["\n  color: #aaa;\n  font-weight: 400;\n"]);return N=function(){return e},e}function P(){var e=Object(m.a)(["\n  position: absolute;\n  bottom: 3px;\n  font-size: 13px;\n  font-weight: 600;\n"]);return P=function(){return e},e}function I(){var e=Object(m.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.4;\n  color: #888;\n"]);return I=function(){return e},e}function M(){var e=Object(m.a)(["\n  font-size: 26px;\n  font-weight: 600;\n  margin-bottom: 12px;\n"]);return M=function(){return e},e}function B(){var e=Object(m.a)(["\n  margin-right: 20px;\n"]);return B=function(){return e},e}function H(){var e=Object(m.a)(["\n  display: flex;\n  position: relative;\n"]);return H=function(){return e},e}function J(){var e=Object(m.a)(["\n  padding: 30px;\n  border-bottom: 1px solid rgba(120,120,120, 0.2);\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return J=function(){return e},e}var G=d.default.li(J()),W=Object(d.default)(y.a)(H()),_=d.default.img(B()),K=d.default.h2(M()),Y=d.default.p(I()),D=d.default.div(P()),Q=d.default.p(N()),$=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props.work;return r.a.createElement(G,null,r.a.createElement(W,{to:"/detail/".concat(e.id)},r.a.createElement(_,{src:"/images/cover-".concat(e.id,".png"),alt:"placeholder"}),r.a.createElement("div",null,r.a.createElement(K,null,e.title),r.a.createElement(Y,null,e.description),r.a.createElement(D,null,r.a.createElement("p",null,"Tech Stacks"),r.a.createElement(Q,null,e.stacks)))))}}]),n}(a.Component);function q(){var e=Object(m.a)(["\n  height: calc(100% - 30px);\n  width: 55vw;\n  position: fixed;\n  top: 15px;\n  right: 0;\n  border-left: 1px solid rgba(120,120,120, 0.2);\n  box-sizing: border-box;\n  overflow: auto;\n"]);return q=function(){return e},e}var F=d.default.div(q()),U=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={workList:t.props.workList},t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement("ul",null,this.state.workList.map(function(e,n){return r.a.createElement($,{work:e,key:n})})))}}]),n}(a.Component);function V(){var e=Object(m.a)(["\n  display: inline-block;\n  box-sizing: border-box;\n  min-height: 36px;\n  padding: 8px 16px;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid #aaaaaa;\n  border-radius: 3px;\n  background-color: inherit;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  &:hover{\n    cursor: pointer;\n    color: coral;\n    border-color: coral;\n  }\n"]);return V=function(){return e},e}var X=d.default.button(V());function Z(){var e=Object(m.a)(["\n  width: calc(40vw - 10vh);\n  position: absolute;\n  top: 20vh;\n  right: 10vh;\n  padding-left: 30px;\n  box-sizing: border-box;\n"]);return Z=function(){return e},e}function ee(){var e=Object(m.a)(["\n  width: calc(60vw - 10vh);\n  height: 75vh;\n  position: fixed;\n  top: 20vh;\n  left: 10vh; \n  overflow: auto;\n  &>img{\n    display: block;\n    width: 100%;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(m.a)(["\n  display: flex;\n  &>a{\n    margin-right: 10px;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(m.a)(["\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #aaa;\n"]);return te=function(){return e},e}function ae(){var e=Object(m.a)(["\n  margin-bottom: 40px;\n  font-size: 14px;\n  color: #888;\n"]);return ae=function(){return e},e}function re(){var e=Object(m.a)(["\n  font-size: 42px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]);return re=function(){return e},e}var le=d.default.h2(re()),ie=d.default.p(ae()),oe=d.default.div(te()),ce=d.default.div(ne()),ue=d.default.div(ee()),se=d.default.div(Z()),pe=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).setItemById=function(e){for(var n=0;n<e.length;n++)if(e[n].id===t.props.match.params.id)return e[n]},t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.setItemById(this.props.workList);return r.a.createElement("div",null,r.a.createElement(ue,null,r.a.createElement("img",{src:"/images/preview-".concat(e.id,".png"),alt:e.id})),r.a.createElement(se,null,r.a.createElement(le,null,e.title),r.a.createElement(ie,null,e.description),r.a.createElement(oe,null,r.a.createElement("p",{style:{"margin-bottom":"4px","font-weight":"600",color:"#000"}},"Tech Stacks"),r.a.createElement("p",null,e.stacks)),r.a.createElement(ce,null,""!==e.pageLink?r.a.createElement("a",{href:e.pageLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(X,null,"\ubcf4\ub7ec\uac00\uae30")):"",""!==e.githubLink?r.a.createElement("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(X,null,"Github")):"")))}}]),n}(a.Component),me=t(12),fe=t(25);function de(){var e=Object(m.a)(["\n  margin-bottom: 5px;\n"]);return de=function(){return e},e}function he(){var e=Object(m.a)(["\n  text-indent: 16px;\n  &:before{\n    content: '';\n    display: block;\n    box-sizing: border-box;\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    border: 3px solid coral;\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  &:after{\n    display: none;\n  }\n"]);return he=function(){return e},e}function be(){var e=Object(m.a)(["\n  border: 1px solid #eee;\n  border-radius: 4px;\n  padding: 14px 20px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n"]);return be=function(){return e},e}function ve(){var e=Object(m.a)(["\n  height: 65vh;\n  position: relative;\n  overflow: auto;\n"]);return ve=function(){return e},e}function ge(){var e=Object(m.a)(["\n  margin-bottom: 6px;\n  & svg{\n    font-size: 20px;\n    margin-right: 4px;\n    vertical-align: middle;\n  }\n  & span{\n    vertical-align: middle;\n  }\n"]);return ge=function(){return e},e}function Ee(){var e=Object(m.a)(['\n  width: 100%;\n  height: 65vh;\n  background-image: url("/images/profile-image.JPG");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom center;\n']);return Ee=function(){return e},e}function je(){var e=Object(m.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: #888;\n"]);return je=function(){return e},e}function ke(){var e=Object(m.a)(["\n  font-size: 20px;\n  font-weight: 800;\n  margin-bottom: 12px;\n  position: relative;\n  &:after{\n    content:'';\n    display: block;\n    width: 115px;\n    height: 1.5px;\n    background-color: coral;\n    position: absolute;\n    left: 0;\n    bottom: -8px;\n  }\n"]);return ke=function(){return e},e}function xe(){var e=Object(m.a)(["\n  margin-bottom: 24px;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  width: calc(100vw - 20vh);\n  height: 65vh;\n  position: absolute;\n  left: 10vh;\n  bottom: 10vh;\n"]);return Oe=function(){return e},e}function we(){var e=Object(m.a)(["\n  font-size: 8vh;\n  position: absolute;\n  top: 10vh;\n  right: 10vh;\n"]);return we=function(){return e},e}var ye=d.default.h2(we()),Le=d.default.div(Oe()),Se=d.default.div(xe()),ze=d.default.h4(ke()),Ce=d.default.p(je()),Te=d.default.div(Ee()),Re=d.default.div(ge()),Ae=d.default.div(ve()),Ne=d.default.div(be()),Pe=Object(d.default)(ze)(he()),Ie=Object(d.default)(Ce)(de()),Me=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ye,null,r.a.createElement(x,null,"\uc800\ub294 "),r.a.createElement(k,null,"\uc774\ub7f0 \uc0ac\ub78c"),r.a.createElement(x,null,"\uc785\ub2c8\ub2e4.")),r.a.createElement(Le,null,r.a.createElement(me.b,null,r.a.createElement(me.a,{md:3},r.a.createElement(Te,null)),r.a.createElement(me.a,{md:3},r.a.createElement(me.b,null,r.a.createElement(me.a,{md:6},r.a.createElement(Se,null,r.a.createElement(ze,null,"Name"),r.a.createElement(Ce,null,"\ud5c8\ud604\uc7ac"))),r.a.createElement(me.a,{md:6},r.a.createElement(Se,null,r.a.createElement(ze,null,"Birth"),r.a.createElement(Ce,null,"1990. 12. 09")))),r.a.createElement(me.b,null,r.a.createElement(me.a,{md:6},r.a.createElement(Se,null,r.a.createElement(ze,null,"Educated"),r.a.createElement(Ce,null,"\uacbd\ud76c\ub300\ud559\uad50 \uc5b8\ub860\uc815\ubcf4\ud559\uacfc(\uc878\uc5c5)"))),r.a.createElement(me.a,{md:6},r.a.createElement(Se,null,r.a.createElement(ze,null,"Language"),r.a.createElement(Ce,null,"\uc601\uc5b4(TOEIC/865), \uc77c\ubcf8\uc5b4(JLPT/N2)")))),r.a.createElement(Se,null,r.a.createElement(ze,null,"Contact"),r.a.createElement(Ce,null,r.a.createElement(Re,null,r.a.createElement("a",{href:"https://github.com/presentheo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(fe.b,null),r.a.createElement("span",null,"https://github.com/presentheo"))),r.a.createElement(Re,null,r.a.createElement("a",{href:"mailto:presentheo@gmail.com"},r.a.createElement(fe.a,null),r.a.createElement("span",null,"presentheo@gmail.com")))))),r.a.createElement(me.a,{md:6},r.a.createElement(Ae,null,r.a.createElement("ul",null,r.a.createElement(Ne,null,r.a.createElement(Pe,null,"Javascript"),r.a.createElement(Ie,null,"\uc6f9 \ud658\uacbd\uc5d0\uc11c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \ub3d9\uc791 \ubc29\uc2dd\uc744 \uc774\ud574\ud558\uace0, \uc21c\uc218\ud55c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uae30\ub2a5 \uad6c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),r.a.createElement(Ie,null,"ECMA Script 6 \uc2a4\ud399\uc5d0\uc11c \ucd94\uac00\ub41c \ubb38\ubc95 \uc694\uc18c\ub4e4(let, const, class, \ud654\uc0b4\ud45c \ud568\uc218, \ud15c\ud50c\ub9bf \ubb38\ubc95\u2026)\uc758 \ub3c4\uc785 \ubc30\uacbd\uacfc \uc0ac\uc6a9\ubc95\uc744 \uc774\ud574\ud558\uace0 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"Node.js \ud658\uacbd\uc5d0\uc11c \ud504\ub85c\uc81d\ud2b8\ub97c \uad6c\ucd95\ud574\ubcf8 \uacbd\ud5d8\uc774 \uc788\uc73c\uba70, npm\uc744 \uc774\uc6a9\ud574 Node.js \ud328\ud0a4\uc9c0\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Webpack\uc744 \uc774\uc6a9\ud55c \ud504\ub85c\uc81d\ud2b8 \ubaa8\ub4c8\ud654\uc640 \ucf54\ub4dc \ubc88\ub4e4\ub9c1 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),r.a.createElement(Ne,null,r.a.createElement(Pe,null,"React.js"),r.a.createElement(Ie,null,"React.js\uc758 \uc124\uacc4 \uc774\ub150\uacfc \uc791\ub3d9 \ubc29\uc2dd\uc744 \uc774\ud574\ud558\uace0 React \ucef4\ud3ec\ub10c\ud2b8\ub4e4\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"state \uad00\ub9ac \ub3c4\uad6c\uc778 Redux\uc758 \uc791\ub3d9 \ubc29\uc2dd\uc744 \uc774\ud574\ud558\uace0 \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),r.a.createElement(Ne,null,r.a.createElement(Pe,null,"HTML"),r.a.createElement(Ie,null,"\uc6f9 \ud45c\uc900\uacfc \uc6f9 \uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc5ec \ub9c8\ud06c\uc5c5\uc744 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"HTML5\uc5d0 \ucd94\uac00\ub41c \uc2dc\ub9e8\ud2f1 \ud0dc\uadf8(header, footer, article\u2026)\ub4e4\uc758 \uc4f0\uc784\uc0c8\ub97c \uc774\ud574\ud558\uace0 \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"\uac00\ub3c5\uc131 \ud5a5\uc0c1\uc744 \uc704\ud574 \uac01 \ud0dc\uadf8\uc758 \uc4f0\uc784\uc0c8\uc5d0 \ub9de\ub294 \uc18d\uc131(class, id) \uc791\uba85 \uaddc\uce59\uc744 \ub9cc\ub4e4\uace0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),r.a.createElement(Ne,null,r.a.createElement(Pe,null,"CSS"),r.a.createElement(Ie,null,"\ub514\uc790\uc778 \uc2dc\uc548\uc744 \ubc14\ud0d5\uc73c\ub85c \uc6d0\ud558\ub294 \ud398\uc774\uc9c0 \ub514\uc790\uc778\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"\ubbf8\ub514\uc5b4\ucffc\ub9ac\ub97c \uc774\uc6a9\ud574 \ubc18\uc751\ud615 \uc6f9\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(Ie,null,"CSS \uc2a4\ud0c0\uc77c\uc774 \ube0c\ub77c\uc6b0\uc800\ubcc4\ub85c \uad6c\ud604\ub418\ub294 \ubc94\uc704\uc640 \ud615\ud0dc\ub97c \uc54c\uace0, \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub4e4\uc744 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))))))}}]),n}(a.Component);function Be(){var e=Object(m.a)(["\n  font-size: 13vh;\n  letter-spacing: -1vh;\n  position: absolute;\n  top: 50vh;\n  left: 10vh;\n  transform: translateY(-50%);\n  &>p{\n    line-height: 1.1;\n  }\n"]);return Be=function(){return e},e}function He(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  border: 15px solid coral;\n  box-sizing: border-box;\n"]);return He=function(){return e},e}var Je=d.default.div(He()),Ge=d.default.h1(Be()),We=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=[{id:"miseoneclick",title:"\uc6d0\ud074\ub9ad \ubbf8\uc138\uba3c\uc9c0",description:"\uc804\uad6d \uac01 \uc2dc\ub3c4\ubcc4 \ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4\ub97c \uc2e4\uc2dc\uac04/\uc2dc\uac04\ubcc4/\uc77c\ubcc4\ub85c \ud655\uc778\ud560 \uc218 \uc788\ub294 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \uc815\ubd80 \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138(www.data.go.kr)\uc758 open API\uc640 node.js\ub97c \ud65c\uc6a9\ud588\uc2b5\ub2c8\ub2e4.",stacks:"React.js, node.js, REST API",pageLink:"/projects/mise-oneclick",githubLink:"https://github.com/presentheo/mise-oneclick"},{id:"galphi",title:"\uac08\ud53c",description:"\ub3c5\uc11c \uc77c\uae30\uc7a5 \ucee8\uc149\uc758 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\ub97c \uc81c\uc791\ud588\uc2b5\ub2c8\ub2e4. \ucc45\ub9c8\ub2e4 \ub0a0\uc9dc\ubcc4\ub85c \ucf54\uba58\ud2b8\ub97c \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",stacks:"React.js",pageLink:"/projects/galphi",githubLink:"https://github.com/presentheo/galphi"},{id:"reduxrecord",title:"Redux Record \ud83c\udfa7",description:"\uc74c\ubc18 \uc1fc\ud551\ubab0 \ucee8\uc149\uc758 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\ub97c \uc81c\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc74c\ubc18\uc744 \ub2f4\uace0 \uc8fc\ubb38\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",stacks:"React.js, Redux",pageLink:"/projects/redux-record",githubLink:"https://github.com/presentheo/redux-commercial"},{id:"jsboard",title:"js-board",description:"\uac8c\uc2dc\ud310 \ucee8\uc149\uc758 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\ub97c \uc81c\uc791\ud588\uc2b5\ub2c8\ub2e4. \uac8c\uc2dc\ubb3c\uacfc \ub313\uae00\uc744 localStorage\uc5d0 \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",stacks:"jQuery",pageLink:"/projects/js-board",githubLink:"https://github.com/presentheo/board"},{id:"nouveauriche",title:"Nouveauriche",description:"P2P\uae08\uc735 \uae30\uc5c5 <\ub204\ubcf4\ub9ac\uce58>\uc758 \uc6f9 \ud37c\ube14\ub9ac\uc2f1(\uc678\uc8fc) \uc791\uc5c5\uc744 \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4.",stacks:"HTML, CSS",pageLink:"https://www.nouveauriche.kr/",githubLink:""},{id:"plusy",title:"Plusy",description:"P2P\uae08\uc735 \uae30\uc5c5 '\ud50c\ub7ec\uc2dc'\uc758 \uc6f9 \ub514\uc790\uc778\uacfc \uc6f9 \ud37c\ube14\ub9ac\uc2f1 \uc5c5\ubb34\ub97c \uc218\ud589\ud588\uc2b5\ub2c8\ub2e4. (\ud604\uc7ac \uc11c\ube44\uc2a4\uac00 \uc885\ub8cc\ub418\uc5b4 \uc811\uc18d\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4)",stacks:"HTML, CSS",pageLink:"",githubLink:""},{id:"mmca",title:"\uad6d\ub9bd\ud604\ub300\ubbf8\uc220\uad00 \uc11c\uc6b8\uad00",description:"\uad6d\ub9bd\ud604\ub300\ubbf8\uc220\uad00 \uc11c\uc6b8\uad00\uc758 \ud648\ud398\uc774\uc9c0\ub97c \ub9ac\ub514\uc790\uc778\ud55c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",stacks:"HTML, CSS",pageLink:"/projects/mmca",githubLink:""},{id:"brompton",title:"Brompton",description:"\uc601\uad6d\uc758 \uc790\uc804\uac70 \ube0c\ub79c\ub4dc\uc778 Brompton\uc758 \ud648\ud398\uc774\uc9c0\ub97c \ub9ac\ub514\uc790\uc778\ud55c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",stacks:"HTML, CSS",pageLink:"/projects/brompton",githubLink:""}];return r.a.createElement(Je,null,r.a.createElement(A,null),r.a.createElement(g.a,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(Ge,null,r.a.createElement("p",null,r.a.createElement(k,null,"\uc548\ub155\ud558\uc138\uc694!")),r.a.createElement("p",null,r.a.createElement(x,null,"\ud504\ub860\ud2b8\uc5d4\ub4dc")),r.a.createElement("p",null,r.a.createElement(x,null,"\uc6f9 \uac1c\ubc1c\uc790")),r.a.createElement("p",null,r.a.createElement(k,null,"\ud5c8\ud604\uc7ac"),r.a.createElement(x,null,"\uc785\ub2c8\ub2e4."))),r.a.createElement(U,{workList:e}))}}),r.a.createElement(v.a,{path:"/profile",component:Me}),r.a.createElement(v.a,{path:"/detail/:id",render:function(n){return r.a.createElement(pe,Object.assign({workList:e},n))}})))}}]),n}(a.Component);function _e(){var e=Object(m.a)(["\n  ",";\n  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400');\n  body{font-family: 'Noto Sans KR', sans-serif;}\n  a{\n    color: inherit;\n    text-decoration: none;\n    &:hover{\n      color: inherit;\n      text-decoration: none;\n    }\n  }\n  p{\n    line-height: 1.4;\n  }\n"]);return _e=function(){return e},e}var Ke=Object(d.createGlobalStyle)(_e(),b.a),Ye=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Ke,null),r.a.createElement(We,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.1d61eb91.chunk.js.map