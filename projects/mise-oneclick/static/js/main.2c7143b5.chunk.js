(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(n,e,t){n.exports=t(32)},32:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),c=t(19),l=t(4),u=t(5),s=t(7),d=t(6),p=t(8),m=t(2),f=t(1),h=t(15),g=t(11),b=function(n){return n>=0&&n<=15?"\uc88b\uc74c":n>=16&&n<=35?"\ubcf4\ud1b5":n>=36&&n<=75?"\ub098\uc068":n>=76?"\ub9e4\uc6b0\ub098\uc068":"-"===n||void 0===n?"\uc815\ubcf4\uc5c6\uc74c":void 0};function x(){var n=Object(m.a)(["\n  font-size: 14px;\n  margin-bottom: 6px;\n"]);return x=function(){return n},n}function y(){var n=Object(m.a)(["\n  margin-left: 20px;\n  padding-left: 10px;\n  border-left: 1px solid #ddd;\n"]);return y=function(){return n},n}function v(){var n=Object(m.a)(["\n  font-size: 2em;\n  font-weight: 100;\n  margin: 0;\n  padding: 0;\n"]);return v=function(){return n},n}function k(){var n=Object(m.a)(["\n  padding: 15px 10px 15px 20px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  &:hover{\n    opacity: 0.7;\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}function j(){var n=Object(m.a)(["\n  position: fixed;\n  height: 100%;\n  top: 0;\n  right: ",";\n  overflow: auto;\n  min-width: 180px;\n  z-index: 6;\n  background-color: #fff;\n  box-shadow: -4px 0 12px rgba(0,0,0,0.4);\n  transition: right 0.4s ease;\n"]);return j=function(){return n},n}function E(){var n=Object(m.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 5;\n  display: ",";\n"]);return E=function(){return n},n}var w=f.default.div(E(),function(n){return n.open?"block":"none"}),O=f.default.ul(j(),function(n){return n.open?"0px":"-200px"}),C=f.default.li(k()),D=f.default.h4(v()),z=f.default.div(y()),I=f.default.p(x()),N=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement("div",null,r.a.createElement(O,{open:this.props.open},this.props.data.map(function(e,t){return r.a.createElement(C,{key:t,onClick:function(){return n.props.onClickCity(e.id,e.name)}},r.a.createElement(D,null,e.name),r.a.createElement(z,null,r.a.createElement(I,null,e.pm25,"\u338d/m\xb3"),r.a.createElement(un,{grade:b(e.pm25)},b(e.pm25))))})),r.a.createElement(w,{open:this.props.open,onClick:this.props.onCloseMenu}))}}]),e}(a.Component);function S(){var n=Object(m.a)(["\n  margin-top: 8px;\n  color: #fff;\n"]);return S=function(){return n},n}function G(){var n=Object(m.a)(["\n  width: 100%;\n  height: ",";\n  max-height: 100%;\n  min-height: 30px;\n  background-color: ",";\n  position: absolute;\n  bottom: 0;\n  border-radius: 3px 3px 0 0;\n"]);return G=function(){return n},n}function R(){var n=Object(m.a)(["\n  width: 100%;\n  height: 220px;\n  background-color: #fafafa;\n  border-radius: 5px 5px 0 0;\n  box-shadow: inset 2px 2px 4px rgba(0,0,0,0.1);\n  position: relative;\n"]);return R=function(){return n},n}function T(){var n=Object(m.a)(["\n  margin-bottom: 6px;\n  color: #aaa;\n"]);return T=function(){return n},n}function P(){var n=Object(m.a)(["\n  width: 100%;\n  padding: 0 2px;\n  text-align: center;\n"]);return P=function(){return n},n}function M(){var n=Object(m.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  max-width: 100%;\n  overflow:auto;\n"]);return M=function(){return n},n}var V=f.default.ul(M()),B=f.default.li(P()),J=f.default.h5(T()),K=f.default.div(R()),L=f.default.div(G(),function(n){return n.val+"%"},function(n){var e=b(n.val);return"\uc88b\uc74c"===e?"royalblue":"\ubcf4\ud1b5"===e?"green":"\ub098\uc068"===e?"orange":"\ub9e4\uc6b0\ub098\uc068"===e?"crimson":void 0}),W=f.default.p(S()),A=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement(V,null,this.props.data.map(function(e,t){return r.a.createElement(B,{key:t},r.a.createElement(J,null,e.dataTime.substr(5)),r.a.createElement(K,null,r.a.createElement(L,{val:e[n.props.city]},r.a.createElement(W,null,e[n.props.city]))))}))}}]),e}(a.Component);function U(){var n=Object(m.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return U=function(){return n},n}function $(){var n=Object(m.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255,255,255,0.5);\n  z-index: 4;\n"]);return $=function(){return n},n}var q=f.default.div($()),F=f.default.img(U()),H=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(q,{display:this.props.display},r.a.createElement(F,{src:"https://presentheo.github.io/projects/mise-oneclick/images/loading.svg"}))}}]),e}(a.Component);function Q(){var n=Object(m.a)(["\n  width: auto;\n  padding: 12px 20px;\n  background-color: #fff;\n  border: 0;\n  border-radius: 5px 0 0 5px;\n  position: absolute;\n  top: 30px;\n  right : 0px;\n  box-shadow: 0 0 8px rgba(0,0,0,0.3);\n  cursor: pointer;\n  font-weight: 800;\n  color: #444;\n  transition: padding-right 0.2s ease;\n  &:hover{\n    padding-right: 30px;\n  }\n  &>span{\n    display: inline-block;\n    vertical-align: middle;\n  }\n  &>img{\n    display: inline-block;\n    width: 18px;\n    height: 18px;\n    vertical-align: middle;\n    margin-right: 4px;\n  }\n  @media (max-width: 768px){\n    top: 10px;\n    padding: 8px 16px;\n    font-size: 12px;\n  }\n"]);return Q=function(){return n},n}function X(){var n=Object(m.a)(["\n  & td, th{\n    padding: 8px 4px;\n    border-top: 1px solid #ddd;\n    text-align: left;\n    font-size: 14px;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(m.a)(["\n  width: 100%;\n  border-spacing: 0;\n"]);return Y=function(){return n},n}function Z(){var n=Object(m.a)(["\n  max-height: 600px;\n  overflow: auto;\n"]);return Z=function(){return n},n}function _(){var n=Object(m.a)(["\n  margin-bottom: 20px;\n  color: #444;\n"]);return _=function(){return n},n}function nn(){var n=Object(m.a)(["\n  background-color: rgba(255,255,255,1);\n  border-radius: 12px;\n  box-shadow: 2px 3px 4px rgba(0,0,0,0.2);\n  padding: 20px;\n  margin-top: 20px;\n"]);return nn=function(){return n},n}function en(){var n=Object(m.a)(["\n  letter-spacing: -7px;\n  font-size: 5em;\n  color: #fff;\n  @media (max-width: 768px){\n    font-size: 2.4em;\n    letter-spacing: -3px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(m.a)(["\n  width: 100%;\n  padding: 30px 40px 180px;\n  position: relative;\n  background-image: url('https://presentheo.github.io/projects/mise-oneclick/images/city.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-attachment: fixed;\n  background-position: bottom;\n  @media (max-width: 768px){\n    margin: 0;\n    padding: 20px 20px 180px;\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(m.a)(["\n  display: flex;\n  background: ",";\n  background-size: 400% 400%;\n  -webkit-animation: animatedGradient 10s ease infinite;\n  -moz-animation: animatedGradient 10s ease infinite;\n  animation: animatedGradient 10s ease infinite;\n\n  @-webkit-keyframes animatedGradient {\n      0%{background-position:0% 50%}\n      50%{background-position:100% 50%}\n      100%{background-position:0% 50%}\n  }\n  @-moz-keyframes animatedGradient {\n      0%{background-position:0% 50%}\n      50%{background-position:100% 50%}\n      100%{background-position:0% 50%}\n  }\n  @keyframes animatedGradient { \n      0%{background-position:0% 50%}\n      50%{background-position:100% 50%}\n      100%{background-position:0% 50%}\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(m.a)(["\n  background-color: ",";\n  padding: 2px 7px;\n  border-radius: 3px;\n  font-size: 12px;\n  color: #fff;\n"]);return rn=function(){return n},n}function on(){var n=Object(m.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400');\n  body{font-family: 'Noto Sans KR', sans-serif;}\n  h1,h2,h3,h4,h5{margin: 0; padding: 0;}\n  p{margin: 0; padding:0;}\n  ul{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  .weak{font-weight: 100;}\n  div{box-sizing: border-box}\n\n  body::-webkit-scrollbar {\n    width: 8px;\n  }\n  body::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  }\n \n  body::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    outline: 1px solid slategrey;\n    border-radius: 5px;\n  }\n"]);return on=function(){return n},n}var cn=[{id:"seoul",name:"\uc11c\uc6b8"},{id:"busan",name:"\ubd80\uc0b0"},{id:"daegu",name:"\ub300\uad6c"},{id:"incheon",name:"\uc778\ucc9c"},{id:"gwangju",name:"\uad11\uc8fc"},{id:"daejeon",name:"\ub300\uc804"},{id:"ulsan",name:"\uc6b8\uc0b0"},{id:"gyeonggi",name:"\uacbd\uae30"},{id:"gangwon",name:"\uac15\uc6d0"},{id:"chungbuk",name:"\ucda9\ubd81"},{id:"chungnam",name:"\ucda9\ub0a8"},{id:"jeonbuk",name:"\uc804\ubd81"},{id:"jeonnam",name:"\uc804\ub0a8"},{id:"gyeongbuk",name:"\uacbd\ubd81"},{id:"gyeongnam",name:"\uacbd\ub0a8"},{id:"jeju",name:"\uc81c\uc8fc"},{id:"sejong",name:"\uc138\uc885"}],ln=Object(f.createGlobalStyle)(on()),un=f.default.span(rn(),function(n){var e=n.grade;return"\uc88b\uc74c"===e?"blue":"\ubcf4\ud1b5"===e?"seagreen":"\ub098\uc068"===e?"orange":"\ub9e4\uc6b0\ub098\uc068"===e?"crimson":"\uc815\ubcf4\uc5c6\uc74c"===e?"gray":void 0}),sn=f.default.div(an(),function(n){var e=n.grade;return"\uc88b\uc74c"===e?"linear-gradient(270deg, skyblue, royalblue)":"\ubcf4\ud1b5"===e?"linear-gradient(270deg, limegreen, seagreen)":"\ub098\uc068"===e?"linear-gradient(270deg, khaki, orange)":"\ub9e4\uc6b0\ub098\uc068"===e?"linear-gradient(270deg, crimson, tomato)":"\uc815\ubcf4\uc5c6\uc74c"===e?"linear-gradient(270deg, black, gray)":void 0}),dn=f.default.div(tn()),pn=f.default.h1(en()),mn=f.default.div(nn()),fn=f.default.h2(_()),hn=f.default.div(Z()),gn=f.default.table(Y()),bn=f.default.tr(X()),xn=f.default.button(Q()),yn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(d.a)(e).call(this,n))).fetchRealtimeDatasToState=function(n){fetch("https://miseoneclick.herokuapp.com/realtime?city=".concat(encodeURI(n))).then(function(n){return n.json()}).then(function(n){t.setState({realtimeData:n.list}),t.setState({fetchInProgress:!1})})},t.getCityData=function(n,e){for(var t in n)if(t===e)return n[t]},t.getCityDataList=function(){return cn.reduce(function(n,e){return n.push(Object(c.a)({},e,{pm25:t.getCityData(t.state.hourlyData[0],e.id)})),n},[])},t.handleClick=function(n,e){t.setState({fetchInProgress:!0,selectedCityId:n,selectedCityName:e}),t.fetchRealtimeDatasToState(e)},t.state={fetchInProgress:!0,menuIsOpen:!1,selectedCityId:"seoul",selectedCityName:"\uc11c\uc6b8",realtimeData:[],dailyData:[],hourlyData:[]},t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.fetchRealtimeDatasToState(this.state.selectedCityName),fetch("https://miseoneclick.herokuapp.com/hourly").then(function(n){return n.json()}).then(function(e){return n.setState({hourlyData:e.list})}),fetch("https://miseoneclick.herokuapp.com/daily").then(function(n){return n.json()}).then(function(e){return n.setState({dailyData:e.list})})}},{key:"render",value:function(){var n=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.Normalize,null),r.a.createElement(ln,null),this.state.fetchInProgress?r.a.createElement(H,null):"",r.a.createElement(sn,{grade:b(this.getCityData(this.state.hourlyData[0],this.state.selectedCityId))},r.a.createElement(N,{onCloseMenu:function(){return n.setState({menuIsOpen:!1})},open:this.state.menuIsOpen,data:this.getCityDataList(),onClickCity:this.handleClick}),r.a.createElement(dn,null,r.a.createElement(xn,{onClick:function(){return n.setState({menuIsOpen:!n.state.menuIsOpen})}},r.a.createElement("img",{src:"https://presentheo.github.io/projects/mise-oneclick/images/menu.svg",alt:"left arrow"}),r.a.createElement("span",null," \ub2e4\ub978 \uc9c0\uc5ed \ud655\uc778")),r.a.createElement(pn,null,r.a.createElement("p",null,r.a.createElement("span",{className:"weak"},"\uc9c0\uae08 "),this.state.selectedCityName,r.a.createElement("span",{className:"weak"},"\uc758 ")),r.a.createElement("p",null,"\ubbf8\uc138\uba3c\uc9c0",r.a.createElement("span",{className:"weak"}," \ub18d\ub3c4\ub294")),r.a.createElement("p",null,'"',b(this.getCityData(this.state.hourlyData[0],this.state.selectedCityId)),'" ',r.a.createElement("span",{className:"weak"},"\uc0c1\ud0dc\uc785\ub2c8\ub2e4."))),r.a.createElement("p",{style:{color:"#fff",fontSize:"16px",marginTop:"14px"}},"(",this.state.hourlyData[0]?this.state.hourlyData[0].dataTime:"0000-00-00 00:00"," \uae30\uc900, ",this.state.selectedCityName," \uce21\uc815\uc18c \ud3c9\uade0)"),r.a.createElement(g.b,null,r.a.createElement(g.a,{md:7,xs:12},r.a.createElement(mn,null,r.a.createElement(fn,null,"\uc2dc\uac04\ubcc4 \ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4"),r.a.createElement(A,{data:this.state.hourlyData,city:this.state.selectedCityId})),r.a.createElement(mn,null,r.a.createElement(fn,null,"\uc77c\uac04 \ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4"),r.a.createElement(A,{data:this.state.dailyData,city:this.state.selectedCityId}))),r.a.createElement(g.a,{md:5,xs:12},r.a.createElement(mn,null,r.a.createElement(fn,null,"\uce21\uc815\uc18c\ubcc4 \ubbf8\uc138\uba3c\uc9c0 \ub18d\ub3c4"),r.a.createElement(hn,null,r.a.createElement(gn,null,r.a.createElement("tbody",null,r.a.createElement(bn,null,r.a.createElement("th",null,"\uce21\uc815\uc18c"),r.a.createElement("th",null,"\ub18d\ub3c4(\u338d/m\xb3)"),r.a.createElement("th",null,"\ub4f1\uae09")),this.state.realtimeData.map(function(n,e){return r.a.createElement(bn,{key:e},r.a.createElement("td",null,n.stationName),r.a.createElement("td",null,n.pm25Value),r.a.createElement("td",null,r.a.createElement(un,{grade:b(n.pm25Value)},b(n.pm25Value))))}))))))))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(yn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.2c7143b5.chunk.js.map