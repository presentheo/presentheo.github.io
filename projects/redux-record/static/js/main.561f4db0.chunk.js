(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a(384)},382:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=a(17),l=a(18),u=a(20),s=a(19),m=a(21),p=a(88),d=a(389),h=a(386),E=a(388),g=a(30),b=a.n(g),f=a(385),O=a(15),y=a(70),v=a.n(y),j=a(71),D=a.n(j),C=a(73),T=a.n(C),w=a(72),k=a.n(w),R=a(23),S=a.n(R);var A=Object(O.withStyles)({card:{maxWidth:345},media:{height:260},button:{marginRight:10}})(function(e){var t=e.classes;return r.a.createElement(v.a,{className:t.card},r.a.createElement(f.a,{to:"/detail/".concat(e.product.id)},r.a.createElement(D.a,null,r.a.createElement(k.a,{className:t.media,image:"/projects/redux-record/images/cover-".concat(e.product.id,".jpg"),title:"Contemplative Reptile"}),r.a.createElement(T.a,null,r.a.createElement(S.a,{gutterBottom:!0,variant:"headline"},e.product.name),r.a.createElement(S.a,{variant:"subtitle2"},e.product.creator)))))}),N=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"product-list",style:{padding:30}},r.a.createElement(b.a,{container:!0,spacing:16},this.props.productData.map(function(t,a){return r.a.createElement(b.a,{key:a,item:!0,xs:12,sm:6,md:3},r.a.createElement(A,{product:t,onAddToCart:e.props.onAddToCart}))})))}}]),t}(n.Component),x=a(28),B=a.n(x),W=a(74),L=a.n(W),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){a.setState({quantity:Number(e.target.value)})},a.handleAddToCart=function(e,t){e.stock>=t?a.props.onAddToCart(e,t):alert("\uc785\ub825\ud558\uc2e0 \uc218\ub7c9\uc774 \ub0a8\uc740 \uc218\ub7c9\ubcf4\ub2e4 \ub9ce\uc2b5\ub2c8\ub2e4!")},a.setProduct=function(){for(var e=0;e<a.props.productData.length;e++)if(a.props.productData[e].id===a.props.match.params.id)return a.props.productData[e]},a.state={quantity:1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.setProduct(),a=this.props.classes;return r.a.createElement("div",null,r.a.createElement(b.a,{className:a.root,container:!0,spacing:24},r.a.createElement(b.a,{item:!0,xs:5},r.a.createElement("img",{src:"/projects/redux-record/images/cover-".concat(t.id,".jpg"),style:{width:"100%"},alt:"z"})),r.a.createElement(b.a,{item:!0,xs:7},r.a.createElement(S.a,{className:a.mainTitle,variant:"h3"},t.name),r.a.createElement(S.a,{variant:"h6"},t.creator),r.a.createElement(S.a,{className:a.caption,variant:"body2"},t.comment),r.a.createElement(L.a,{value:this.state.quantity,onChange:function(t){return e.handleChange(t)},label:"\uc218\ub7c9",type:"number",margin:"normal"}),r.a.createElement("div",null,r.a.createElement(B.a,{onClick:function(){return e.handleAddToCart(t,e.state.quantity)},className:a.button,variant:"contained",color:"primary"},"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \ub2f4\uae30"),r.a.createElement(B.a,{onClick:function(){return e.handleAddToCart(t,e.state.quantity)},component:f.a,to:"/order",className:a.button,variant:"contained",color:"primary"},"\ubc14\ub85c \uad6c\ub9e4")),r.a.createElement("p",null,"\ub0a8\uc740 \uc218\ub7c9 : ".concat(t.stock)))))}}]),t}(n.Component),M=Object(O.withStyles)(function(e){return{root:{padding:40},button:{margin:e.spacing.unit,marginLeft:0},caption:{marginTop:20,marginBottom:20,whiteSpace:"pre-wrap"},mainTitle:{marginBottom:10,textIndent:-5}}})(q),P=a(75),I=a.n(P),_=a(76),H=a.n(_),F=a(42),K=a.n(F),Y=a(155),G=a.n(Y),V=a(154),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("header",{className:t.root},r.a.createElement(I.a,{position:"fixed"},r.a.createElement(H.a,null,r.a.createElement(S.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement(f.a,{to:"/"},"Redux Record ",r.a.createElement("span",{role:"img","aria-label":"music"},"\ud83c\udfa7"))),r.a.createElement(K.a,{color:"inherit"},r.a.createElement(V.a,{badgeContent:this.props.count,color:"secondary"},r.a.createElement(G.a,{onClick:function(){e.props.onToggleDrawer(!0)}}))))))}}]),t}(n.Component),U=Object(O.withStyles)({root:{flexGrow:1,paddingBottom:60},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(z),J=a(81),Q=a.n(J),$=a(54),X=a.n($),Z=a(77),ee=a.n(Z),te=a(78),ae=a.n(te),ne=a(80),re=a.n(ne),ce=a(79),oe=a.n(ce),ie=a(43),le=a.n(ie),ue=a(156),se=a.n(ue),me=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.cartData.length<1?r.a.createElement("p",{style:{padding:"20px",color:"#aaa"}},"\uce74\ud2b8\uc5d0 \uc0c1\ud488\uc774 \uc5c6\uc2b5\ub2c8\ub2e4!"):r.a.createElement(X.a,null,this.props.cartData.map(function(a,n){return r.a.createElement(ee.a,null,r.a.createElement(f.a,{className:t.link,to:"/detail/".concat(a.id),key:n},r.a.createElement(ae.a,null,r.a.createElement(le.a,{src:"/projects/redux-record/images/cover-".concat(a.id,".jpg")})),r.a.createElement(oe.a,{primary:a.name,secondary:a.creator}),r.a.createElement("span",null,"x ",a.quantity)),r.a.createElement(re.a,null,r.a.createElement(K.a,{"aria-label":"Delete"},r.a.createElement(se.a,{onClick:function(){e.props.onRemoveFromCart(n)}}))))}))}}]),t}(n.Component),pe=Object(O.withStyles)(function(){return{link:{display:"flex",alignItems:"center",marginRight:15}}})(me),de=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(Q.a,{anchor:"right",open:this.props.drawerState.right,onClose:function(){e.props.onToggleDrawer(!1)},onOpen:function(){e.props.onToggleDrawer(!0)},BackdropProps:{invisible:!0}},r.a.createElement("div",{className:t.drawerWrap,tabIndex:0,role:"button",onKeyDown:function(){e.props.onToggleDrawer(!1)}},r.a.createElement(pe,{cartData:this.props.cartData,onRemoveFromCart:function(t){return e.props.onRemoveFromCart(t)}}),r.a.createElement(B.a,{variant:"contained",color:"primary",fullWidth:!0},r.a.createElement(f.a,{to:"/order"},"\uad6c\ub9e4\ud558\uae30"))))}}]),t}(n.Component),he=Object(O.withStyles)(function(e){return{drawerWrap:{minWidth:280,paddingRight:10,paddingLeft:10}}})(de),Ee=a(82),ge=a.n(Ee),be=a(84),fe=a.n(be),Oe=a(24),ye=a.n(Oe),ve=a(83),je=a.n(ve),De=a(45),Ce=a.n(De),Te=a(33),we=a.n(Te),ke=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(S.a,{className:t.pageTitle,variant:"h4"},"\uc8fc\ubb38\uc11c \uc791\uc131"),r.a.createElement(we.a,{className:t.orderListWrap},r.a.createElement(ge.a,null,r.a.createElement(je.a,null,r.a.createElement(Ce.a,null,r.a.createElement(ye.a,null,"\uc0c1\ud488\uc815\ubcf4"),r.a.createElement(ye.a,null,"\uac1c\ub2f9 \uac00\uaca9"),r.a.createElement(ye.a,null,"\uc218\ub7c9"),r.a.createElement(ye.a,null,"\ucd1d \uac00\uaca9"))),r.a.createElement(fe.a,null,this.props.cartData.map(function(e){return r.a.createElement(Ce.a,null,r.a.createElement(ye.a,null,r.a.createElement(f.a,{to:"/detail/".concat(e.id)},r.a.createElement(le.a,{className:t.cover,src:"/projects/redux-record/images/cover-".concat(e.id,".jpg")}),r.a.createElement("div",{className:t.info},r.a.createElement("span",{className:t.name},e.name),r.a.createElement("span",{className:t.creator},e.creator)))),r.a.createElement(ye.a,null,e.price),r.a.createElement(ye.a,null,e.quantity),r.a.createElement(ye.a,null,e.price*e.quantity))}),r.a.createElement(Ce.a,null,r.a.createElement(ye.a,null,"\ud569\uacc4"),r.a.createElement(ye.a,null),r.a.createElement(ye.a,null),r.a.createElement(ye.a,{className:t.sum},function(){var t=0;return e.props.cartData.map(function(e){return t+=e.price*e.quantity}),t}()))))),r.a.createElement("div",{className:t.buttonContainer},r.a.createElement(B.a,{onClick:this.props.onCheckout,component:f.a,to:"/order/success",className:t.orderButton,size:"large",variant:"contained",color:"primary"},"\uc8fc\ubb38\ud558\uae30")))}}]),t}(n.Component),Re=Object(O.withStyles)(function(e){return{pageTitle:{margin:30,marginTop:50},orderListWrap:{margin:30},table:{minWidth:700},cover:{display:"table-cell"},info:{display:"table-cell",paddingLeft:20,verticalAlign:"middle"},name:{fontSize:16,fontWeight:"600",marginRight:10},creator:{fontSize:14,color:"#aaa"},buttonContainer:{display:"flex",justifyContent:"center"},sum:{fontSize:16,fontWeight:"bold"}}})(ke),Se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.title},r.a.createElement(S.a,{variant:"h3"},"\uc8fc\ubb38\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4 :)"),r.a.createElement(B.a,{component:f.a,to:"/",className:e.button,variant:"contained",color:"primary"},"\uacc4\uc18d \uc1fc\ud551\ud558\uae30"))}}]),t}(n.Component),Ae=Object(O.withStyles)(function(){return{title:{paddingTop:120,textAlign:"center"},button:{marginTop:60}}})(Se),Ne=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(U,{onToggleDrawer:this.props.onToggleDrawer,count:this.props.cartData.length}),r.a.createElement(he,{drawerState:this.props.drawerState,onToggleDrawer:this.props.onToggleDrawer,cartData:this.props.cartData,onRemoveFromCart:this.props.onRemoveFromCart}),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{productData:e.props.productData,onAddToCart:e.props.onAddToCart,onSelectItem:e.props.onSelectItem})}}),r.a.createElement(h.a,{path:"/detail/:id",render:function(t){return r.a.createElement(M,Object.assign({productData:e.props.productData,onAddToCart:e.props.onAddToCart},t))}}),r.a.createElement(h.a,{exact:!0,path:"/order",render:function(){return r.a.createElement(Re,{cartData:e.props.cartData,onCheckout:e.props.onCheckout})}}),r.a.createElement(h.a,{path:"/order/success",component:Ae})))}}]),t}(n.Component),xe=Object(E.a)(Object(p.b)(function(e){return{selectedKey:e.product.selectedKey,productData:e.product.productData,cartData:e.cart.cartData,drawerState:e.drawer}},function(e){return{onAddToCart:function(t,a){return e(function(e,t){return{type:"ADD_TO_CART",quantity:t,item:e}}(t,a))},onRemoveFromCart:function(t){return e(function(e){return{type:"REMOVE_FROM_CART",index:e}}(t))},onToggleDrawer:function(t){return e(function(e){return{type:"TOGGLE_DRAWER",open:e}}(t))},onSelectItem:function(t){return e(function(e){return{type:"SELECT_ITEM",index:e}}(t))},onCheckout:function(){return e({type:"CHECKOUT"})}}})(Ne)),Be=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(xe,null))}}]),t}(n.Component),We=a(44),Le=a(55),qe=a(29),Me={selectedKey:0,productData:[{id:"yoon",name:"\ud589\ubcf4 2018 \uc724\uc885\uc2e0",creator:"\uc724\uc885\uc2e0",comment:"\n[\ud589\ubcf4 2018 \uc724\uc885\uc2e0]\uc740 2018\ub144 '\uc6d4\uac04 \uc724\uc885\uc2e0'\uc744 \ud1b5\ud574 \ubc1c\ud45c\ub41c 13\uace1\uc744 \ud55c \uc7a5\uc5d0 \ub2f4\uc740 \u2018\uc6d4\uac04 \uc724\uc885\uc2e0 2018\u2019\uacfc \uc9c0\ub09c\ud574 10\uc6d4 \ud604\ub300\uce74\ub4dc \uc5b8\ub354\uc2a4\ud14c\uc774\uc9c0\uc5d0\uc11c \uc9c4\ud589\ub418\uc5c8\ub358 \ucf58\uc11c\ud2b8 <\uc724\uc885\uc2e0 Curated 13 - \ubd80\ub974\uc9c0 \uc54a\uc740 \ub178\ub798>\ub97c \ud1b5\ud574 \uc120\ubcf4\uc778 \ub77c\uc774\ube0c 11\uace1\uc744 \ud558\ub098\ub85c \ubb36\uc740 \u2018\ubd80\ub974\uc9c0 \uc54a\uc740 \ub178\ub798 LIVE 2018\u2019, \ucd1d \ub450 \uc7a5\uc758 CD\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4. \n\n2018\ub144\uc740 \uadf8 \uc5b4\ub290 \ud574\ubcf4\ub2e4\ub3c4 \u2018\uac00\uc218 \uc724\uc885\uc2e0\u2019\uc758 \ud65c\uc57d\uc774 \ub3c4\ub4dc\ub77c\uc84c\ub358 \ud574\uc600\ub2e4. \uadf8\ub294 2018\ub144 \ud55c \ud574 \ub3d9\uc548 <\uc6d4\uac04 \uc724\uc885\uc2e0>\uc744 \ud1b5\ud574 \ubc1c\ud45c\ud55c 13\uace1 \uc911 12\uace1\uc744 \uc9c1\uc811 \ubd80\ub974\ub294 \uac83\uc740 \ubb3c\ub860, \ud2b9\uc815 \uc7a5\ub974\ub098 \uc18c\uc7ac\uc5d0 \uac07\ud788\uc9c0 \uc54a\uace0 \ub2e4\uc591\ud55c \uace1\uc744 \ub2a5\uc218\ub2a5\ub780\ud558\uac8c \uc18c\ud654\ud574\ub0b4\uba74\uc11c \uac00\uc218\ub85c\uc11c\uc758 \uc874\uc7ac\uac10\uc5d0 \ubb34\uac8c\ub97c \ub354\ud588\ub2e4. \u2018Frame\u2019, \u2018My Queen\u2019, \u2018Summer Man\u2019, \u2018\ub5a0\ub098\u2019, \u2018Night Drive\u2019 \ub4f1 \uc644\uc131\ub3c4 \ub192\uc740 \uc528\ud2f0\ud31d\uc744 \uc5f0\uc774\uc5b4 \uc120\ubcf4\uc774\uba70 \ub113\uc5b4\uc84c\uace0, \u2018Slow Starter\u2019, \u2018\uc774\ubcc4\ud1a1\u2019, \u2018\uae30\ub308\uac8c\u2019, \u2018\ubcbc\ub77d\uce58\uae30\u2019 \ub4f1 \ub204\uac00 \uc5b8\uc81c \ub4e4\uc5b4\ub3c4 \uc724\uc885\uc2e0\uc758 \uc778\uc7a5\uc744 \ubc1c\uacac\ud560 \uc218 \uc788\ub294 \u2018\uc724\uc885\uc2e0\ud45c \ubc1c\ub77c\ub4dc\u2019\ub97c \uc774\uc5b4\ub098\uac00\uba70 \uae4a\uc5b4\uc84c\ub2e4. \n      ",price:2e4,stock:200},{id:"queen",name:"Bohemian Rhapsody",creator:"Queen",comment:"\uc804\uc124\uc5d0 \uc758\ud55c, \uc804\uc124\uc744 \uc704\ud55c \uc601\ud654 \ud31d \uc5ed\uc0ac\uc758 \uc804\uc124 Queen\uc758 \uc0b6\uacfc \uc74c\uc545 \uc5ec\uc815\n\nBOHMEMIAN RHAPSODY - Original Sound Track\n\n\uc601\ud654 [\ubcf4\ud5e4\ubbf8\uc548 \ub7a9\uc18c\ub514] \uc0ac\uc6b4\ub4dc\ud2b8\ub799",price:2e4,stock:100},{id:"chungha",name:"\ubc8c\uc368 12\uc2dc",creator:"\uccad\ud558",comment:"\nHands on Me, Offset, Blooming Blue\n1\ub144 6\uac1c\uc6d4\uc774\ub780 \uc2dc\uac04 \ub3d9\uc548 \ucd1d 3\uc7a5\uc758 \uc568\ubc94\uc744 \ubc1c\ub9e4\ud558\uba70 \uccad\ud558\ub294 \uc568\ubc94\uc758 \uc81c\ubaa9\ucc98\ub7fc \uacc4\uc18d \uc131\uc7a5\ud574 \uc654\ub2e4.\n\ubaa8\ub450\uc5d0\uac8c \uc190\uc744 \ubed7\uc5b4 \uac00\ub2a5\uc131\uc744 \uc99d\uba85\ud55c \uccab \uc568\ubc94, \ubb34\ub300 \uc704\uc640 \uc77c\uc0c1\uc758 \ubaa8\ub4e0 \ub9e4\ub825\uc744 \ub2f4\uc740 \ub450 \ubc88\uc9f8 \uc568\ubc94,\ub9cc\uac1c\ud55c \ud478\ub978\uc0c9\ucc98\ub7fc \ube5b\ub098\ub294 \uc5ec\ub984\uc758 \ucc2c\uac00\ub85c \ub3cc\uc544\uc628 \uc138 \ubc88\uc9f8 \uc568\ubc94\uae4c\uc9c0 \ubc1d\uace0 \uacbd\ucf8c\ud55c \ubc14\uc774\ube0c\ub85c \ub9ce\uc740 \uc0ac\ub791\uc744 \ubc1b\uc558\ub2e4.\n\n\uc774\ubc88 \uc2f1\uae00 \u2018\ubc8c\uc368 12\uc2dc\u2019\ub294 \uc774 \uc804 \uc568\ubc94\uacfc\ub294 \ub2e4\ub978 \uccad\ud558\uc758 \uc0c8\ub85c\uc6b4 \uc0c9\ucc44\ub97c \ud45c\ud604\ud558\uace0 \uc788\ub2e4.\n\uae30\uc874 \uc568\ubc94\ub4e4\uc774 \uadf8\ub140\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ubc1d\uc740 \uc0c9\ucc44\uc5d0 \uc8fc\ubaa9\ud588\ub2e4\uba74 \uc774\ubc88 \uc568\ubc94\uc740 \ub3c4\ubc1c\uc801\uc774\uace0 \uc801\uadf9\uc801\uc774\ub2e4.\n1\uc5b5 \uc2a4\ud2b8\ub9ac\ubc0d\uc744 \ub2ec\uc131\ud55c \ub864\ub7ec\ucf54\uc2a4\ud130\uc5d0 \uc774\uc5b4 \ube14\ub799\uc544\uc774\ub4dc \ud544\uc2b9, \uc804\uad70\uacfc \ud568\uaed8 \ud55c \ub450 \ubc88\uc9f8 \uace1\uc774\ub2e4.\n\n\ub9e4\ud639\uc801\uc778 Flute \uc0ac\uc6b4\ub4dc\uac00 \ucee4\ud2bc\uc744 \ud3bc\uce58\ub4ef \uace1\uc758 \uc2dc\uc791\uc744 \uc54c\ub9ac\ub4ef \uc6b8\ub824 \ud37c\uc9c0\uace0, \uc774\uc5b4\uc9c0\ub294 Pluck \uc0ac\uc6b4\ub4dc, \ud0c4\ud0c4\ud55c \ub9ac\ub4ec \uc704\uc5d0 \uccad\ud558\uc758 \ubaa9\uc18c\ub9ac\uac00 \ub354\ud574\uc838 \ub9e4\ub825\uc801\uc774\uace0 \uc911\ub3c5\uc801\uc778 EDM\uc774 \uc644\uc131\ub418\uc5c8\ub2e4.\n\uadf8\ub300\uc640 \ud5e4\uc5b4\uc838\uc57c\ub9cc \ud558\ub294 \uc2dc\uac04 12\uc2dc\uac00 \uac00\uae4c\uc6cc\uc838\ub9cc \uc624\uace0 \uc774\uc81c \uac00\uc57c\ub9cc \ud558\uc9c0\ub9cc, \ub9c8\uc74c\uc18d \uc11c\ub85c\uc758 \ub300\ud654\ucc98\ub7fc \ubcf4\ub0b4\uc8fc\uae30 \uc2eb\uc740 \uc0c1\ud669\uc744 \ub3c4\ubc1c\uc801\uc774\uace0 \uc194\uc9c1\ud558\uac8c \ud45c\ud604\ud55c \uace1\uc774\ub2e4.\n      ",price:1e4,stock:1e3},{id:"okdal",name:"DAY / NIGHT [EP]",creator:"\uc625\uc0c1\ub2ec\ube5b",comment:"\n\uc625\uc0c1\ub2ec\ube5b\uc774 \ub4e4\ub824\uc8fc\ub294 \ub0ae\uacfc \ubc24\uc758 \uac10\uc131 EP [Day / Night]\n\n1. \uccad\ucd98\uae38\uc77c(\u9751\u6625\u5409\u65e5)\n\uc778\uc0dd\uc5d0 \uac00\uc7a5 \ubc11\ubc14\ub2e5\uc774\ub77c \uc0dd\uac01\ud588\ub358 \uc2dc\uac04 \uc18d\uc5d0\uc11c\ub3c4 \uc88b\uc740 \uc21c\uac04\ub4e4\uc774 \uc788\uc5c8\ub2e4.\nComposed by \ubc15\uc138\uc9c4 Written by \ubc15\uc138\uc9c4 Arranged by Philtre\n\n2. \uc9c1\uc5c5\ubcd1\n\uc9c0\uae08\uc758 \ub098\uc758 \uc77c\uc740, \ub0b4\uac00 \uadf8\ud1a0\ub85d \uc6d0\ud558\ub358 \uc77c\uc77c\uae4c?\nComposed by \uae40\uc724\uc8fc Written by \uae40\uc724\uc8fc Arranged by \uad8c\uc601\ucc2c\n\n3. \ubc1c\ub780\uc2a4\n\uc5b4\uc81c\uc640 \ub611\uac19\uc740 \ud558\ub8e8\uc5d0\ub3c4 \uc624\ub298\uc758 \uc774\uc720\ub97c \ucc3e\uc544\ub0b4\ub294 \uac83. \uadf8\uac83\uc774 \uc644\ubcbd\ud55c \ubc38\ub7f0\uc2a4\nComposed by \ubc15\uc138\uc9c4 Written by \ubc15\uc138\uc9c4 Arranged by REPROJECT\n\n4. \ubc24\ubc24\ubc24\n\uac00\ub054\uc740 \ub098\ub97c \uc2a4\uccd0\uac00\ub294 \ubaa8\ub4e0 \uc2ac\ud514\uc758 \uc774\uc720\uac00 \ub2e4 \ub098 \uac19\uc544\uc11c \uc2ac\ud508 \ub0a0\uc774 \uc788\ub2e4.\nComposed by \uae40\uc724\uc8fc Written by \uae40\uc724\uc8fc Arranged by \uae40\uc724\uc8fc, \uc591\uc601\ud638\n      ",price:15e3,stock:1e3},{id:"punch",name:"DREAM OF YOU",creator:"PUNCH",comment:"\n\uac00\uc218 \ud380\uce58(Punch)\uac00 16\uc77c \uccab \ubbf8\ub2c8\uc568\ubc94 'Dream of You'\ub97c \ubc1c\ud45c\ud55c\ub2e4. \ub370\ubdd4\ud6c4 \ubc1c\ud45c\ud558\ub294 \uccab \ubbf8\ub2c8\uc568\ubc94\uc774\uc790, \ud380\uce58\uc758 \uc0c8\ub85c\uc6b4 \uc2dc\uc791\uc744 \uc54c\ub9ac\ub294 \uc11c\ub9c9\uc774\ub2e4. \n\ud0c0\uc774\ud2c0\uace1 '\uc774 \ub9c8\uc74c (Heart)'\uc744 \ud3ec\ud568\ud574 '\ub208\uaf43\ucc98\ub7fc', 'Love is You', 'Kiss Me', '\uc774 \ubc24\uc758 \ub05d' \ub4f1 \ucd1d 5\uace1\uc774 \uc218\ub85d\ub410\ub2e4. \n\n\uc55e\uc11c \ud380\uce58\ub294 '\ubc24\uc774 \ub418\ub2c8\uae4c' '\uc624\ub298\ubc24\ub3c4' '\uc774 \ubc24\uc758 \ub05d'\uc744 \ud1b5\ud574 \ud2b9\uc720\uc758 \uc774\ubcc4 \uac10\uc131\uc744 \ub178\ub798\ud558\uba70 \uc131\uacf5\uc801\uc778 '\ubc24 3\ubd80\uc791'\uc744 \uc644\uc131\ud588\ub2e4. \n\uc774\ud6c4 \ub514\uc9c0\ud138 \uc2f1\uae00 '\ud5e4\uc5b4\uc9c0\ub294 \uc911'\uc744 \ubc1c\ud45c\ud558\uba70 \ud380\uce58\ub9cc\uc758 \uc544\uc774\ub374\ud2f0\ud2f0\ub97c \ud655\uace0\ud788 \ud588\ub2e4. \n\n\ud2b9\ud788, \ud380\uce58(Punch)\ub294 \ubcf4\uceec\uc740 \ubb3c\ub860 \ub7a9 \uc2e4\ub825\uae4c\uc9c0 \uac16\ucd98 \uc2e4\ub825\ud30c \uac00\uc218\ub85c \uc8fc\uc694 \ud398\uc2a4\ud2f0\ubc8c\uc744 \ube44\ub86f\ud574 \ub300\ud559 \ucd95\uc81c \uc12d\uc678\ub300\uc0c1 1\uc21c\uc704\ub85c \ub5a0\uc624\ub974\uba70 \uc778\uae30 \uae30\ubc18\uc744 \ub2e4\uc9c0\uace0 \uc788\ub2e4.\n\ud788\ud2b8\uace1\uc774 \ub9ce\uc740 OST \uc694\uc815 \uc73c\ub85c\ub3c4 \uc720\uba85\ud55c \ud380\uce58(Punch)\ub294 \uc9c0\ub09c\ud574 \uafb8\uc900\ud788 \uc74c\uc6d0\ucc28\ud2b8\uc5d0\uc11c \uac15\ud55c \uba74\ubaa8\ub97c \ubcf4\uc5ec\uc900 \ub9cc\ud07c \uc774\ubc88 \uc2e0\uace1 \"\uc774 \ub9c8\uc74c\"\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uc131\uc801\uc744 \uac70\ub458\uc9c0 \uadc0\ucd94\uac00 \uc8fc\ubaa9\ub41c\ub2e4.\n\n\uc774\uc5b4 \uc0c8 \uc568\ubc94 'Dream of You'\uc758 \ud0c0\uc774\ud2c0\uace1 '\uc774 \ub9c8\uc74c (Heart)'\uc73c\ub85c \ud380\uce58 \ud45c \uc560\uc808\ud55c \uc774\ubcc4 \ub178\ub798\uc758 \uc815\uc810\uc744 \ucc0d\uc744 \uc608\uc815\uc774\ub2e4. \n\uc2e0\uace1 '\uc774 \ub9c8\uc74c (Heart)'\uc740 \uc774\ubcc4\uc744 \ub9de\uc774\ud55c \uc5ec\uc790\uc758 \ub9c8\uc74c\uc744 \uc2dc\uac04\uacfc \uacc4\uc808\uc5d0 \ube44\uc720\ud55c \uace1\uc73c\ub85c, \ud380\uce58\uc758 \uc74c\uc0c9\uc740 \ub4e3\ub294 \uc774\ub85c \ud558\uc5ec\uae08 \uacf5\uac10\uc744 \ubd88\ub7ec\uc624\uba70 \uac00\uc0ac\ub97c \uacf1\uc539\uac8c \ub9cc\ub4e0\ub2e4. \n\n\ucd5c\uace0\uc758 \ub4dc\ub77c\ub9c8 '\ud0dc\uc591\uc758 \ud6c4\uc608'OST '\uad1c\ucc2e\uc544 \uc0ac\ub791\uc774\uc57c'OST '\ub2ec\uc758\uc5f0\uc778 \ubcf4\ubcf4\uacbd\uc2ec\ub824'OST \ub4f1\uc744 ALL \ud504\ub85c\ub4c0\uc2f1 \ud558\uace0 '\ub3c4\uae68\ube44'OST \uace1\uc911 \uc5d0\uc77c\ub9ac\"\uccab\ub208\ucc98\ub7fc \ub108\uc5d0\uac8c \uac00\uaca0\ub2e4\" \ucc2c\uc5f4&\ud380\uce58(Punch)\"Stay with me\" \ud06c\ub7ec\uc26c\"Beautiful\" \uc18c\uc720 \"I Miss You\u201d \ucd5c\uace0 \ud788\ud2b8\uace1 4\uace1\uc744 \ud504\ub85c\ub4c0\uc2f1\ud588\uc73c\uba70 \"\ubc24\uc774 \ub418\ub2c8\uae4c\" \"\ud5e4\uc5b4\uc9c0\ub294 \uc911\"\uc744 \ud504\ub85c\ub4c0\uc2f1\ud55c \uad6d\ub0b4 \ucd5c\uac15 \ud788\ud2b8 \uc74c\uc545 \ud504\ub85c\ub4c0\uc11c \uc1a1\ub3d9\uc6b4 \uc774 \ud504\ub85c\ub4c0\uc2f1\uc744 \ub9e1\uc544 \uace1\uc758 \uc644\uc131\ub3c4\ub97c \ub192\uc600\ub2e4.\n\n\ub610 \ud0dc\uc591\uc758 \ud6c4\uc608 OST \uc724\ubbf8\ub798 'ALLWAYS' \ub3c4\uae68\ube44 OST \uc5d0\uc77c\ub9ac'\uccab\ub208\ucc98\ub7fc \ub108\uc5d0\uac8c \uac00\uaca0\ub2e4', \ud380\uce58 '\ubc24\uc774 \ub418\ub2c8\uae4c'\ub85c \uc720\uba85\ud55c \ucd5c\uace0\uc758 \uc791\uace1\uac00 \ub85c\ucf54\ubca0\ub9ac\uc640 '\ub3c4\uae68\ube44'OST \ucc2c\uc5f4&\ud380\uce58(Punch) 'Stay with me', \ud06c\ub7ec\uc26c'Beautiful', \ud380\uce58'\ud5e4\uc5b4\uc9c0\ub294 \uc911'\uc73c\ub85c \ud638\ud761\uc744 \ub9de\ucd98 \uc791\uace1\uac00 \uc774\uc2b9\uc8fc\uac00 \ud380\uce58\ub97c \uc704\ud574 \ub2e4\uc2dc \ud55c \ubc88 \ubb49\uccd0 \ud2b9\uae09 \uc2dc\ub108\uc9c0\ub97c \ubc1c\ud718\ud588\ub2e4.\n\uc774 \uc678\uc5d0\ub3c4 '\ud5e4\uc5b4\uc9c0\ub294 \uc911'\ucd5c\uc778\ud658 \uc791\uace1\uac00\ub3c4 \ud380\uce58\uc758 \uccab \ubbf8\ub2c8\uc568\ubc94\uc5d0 \ucc38\uc5ec\ud574 \uc644\uc131\ub3c4\ub97c \ub192\uc600\ub2e4. \n\n'\ubc24\uc774 \ub418\ub2c8\uae4c'\uc774\ud6c4 \ubc1c\ud45c\ud558\ub294 \uc2e0\uace1\ub9c8\ub2e4 \uc8fc\uc694 \uc74c\uc6d0\ucc28\ud2b8 \uc0c1\uc704\uad8c\uc5d0 \uc548\ucc29\ud558\uba70 \uc2e0\ud765 \uc74c\uc6d0\uac15\uc790\ub85c\uc758 \uc785\uc9c0\ub97c \ub2e4\uc84c\ub2e4. \ucd5c\uadfc \ubc1c\ud45c\ud55c '\ud5e4\uc5b4\uc9c0\ub294 \uc911' \uc5ed\uc2dc \ub192\uc740 \uc21c\uc704\ub97c \uc720\uc9c0\ud558\uba70 \ub871\ub7f0 \uc911\uc774\uae30\uc5d0 \ud380\uce58\uc758 \uc0c8 \uc568\ubc94 \ubc1c\ub9e4 \uc18c\uc2dd\uc5d0 \ub9ce\uc740 \uc74c\uc545 \ud32c\ub4e4\uc758 \uad00\uc2ec\uc774 \uc3e0\ub9ac\uace0 \uc788\ub2e4.\n      ",price:1e4,stock:1e3},{id:"redvelvet",name:"RBB",creator:"RED VELVET",comment:"\n\u2018\ud37c\ud399\ud2b8 \uac78\uadf8\ub8f9\u2019 \ub808\ub4dc\ubca8\ubcb3(Red Velvet, SM\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8 \uc18c\uc18d)\uc774 \ub2e4\uc12f \ubc88\uc9f8 \ubbf8\ub2c8\uc568\ubc94 \u2018RBB\u2019\ub85c 2018 \uc5f0\ub9d0 \uac00\uc694\uacc4\ub3c4 \uc810\ub839\ud55c\ub2e4. \n\n\ub808\ub4dc\ubca8\ubcb3\uc740 \uc624\ub294 30\uc77c \ud0c0\uc774\ud2c0 \uace1 \u2018RBB (Really Bad Boy)\u2019\ub97c \ud3ec\ud568\ud574 \ucd1d 6\ud2b8\ub799\uc73c\ub85c \uad6c\uc131\ub41c \ub2e4\uc12f \ubc88\uc9f8 \ubbf8\ub2c8\uc568\ubc94 \u2018RBB\u2019\ub97c \ubc1c\ub9e4\ud558\uace0 \ucef4\ubc31 \ud65c\ub3d9\uc5d0 \ub3cc\uc785\ud560 \uc608\uc815\uc774\uc5b4\uc11c, \uc74c\uc545 \ud32c\ub4e4\uc758 \ud3ed\ubc1c\uc801\uc778 \ud638\uc751\uc744 \uc5bb\uc744 \uc804\ub9dd\uc774\ub2e4.\n\n\ud2b9\ud788, \ub808\ub4dc\ubca8\ubcb3\uc740 \uc9c0\ub09c 1\uc6d4 \uc815\uaddc 2\uc9d1 \ub9ac\ud328\ud0a4\uc9c0 \uc568\ubc94 \ud0c0\uc774\ud2c0 \uace1 \u2018Bad Boy\u2019\uc640 8\uc6d4 \uc5ec\ub984 \ubbf8\ub2c8\uc568\ubc94 \ud0c0\uc774\ud2c0 \uace1 'Power Up\u2019\uc744 \ucc28\ub840\ub85c \ubc1c\ud45c, \uc2dc\ud06c\ud55c \uaca8\uc6b8 \ub9e4\ub825\ubd80\ud130 \uc0c1\ud07c\ubc1c\ub784\ud55c \uc5ec\ub984 \ub9e4\ub825\uae4c\uc9c0 \uc0c1\ubc18\ub41c \ucf58\uc149\ud2b8\ub97c \uc644\ubcbd\ud558\uac8c \uc18c\ud654\ud558\uba70 \uad6d\ub0b4\ub294 \ubb3c\ub860 \uae00\ub85c\ubc8c \uc74c\uc545 \ucc28\ud2b8 1\uc704\ub97c \ud729\uc4f4 \ub9cc\ud07c, \uc0c8 \uc568\ubc94\uc744 \ud1b5\ud574 \ubcf4\uc5ec\uc904 \ud65c\uc57d\uc774 \ub354\uc6b1 \uae30\ub300\ub97c \ubaa8\uc740\ub2e4.\n\n\ub354\ubd88\uc5b4 \ub808\ub4dc\ubca8\ubcb3\uc740 \uc9c0\ub09c 8\uc6d4 \uc11c\uc6b8\uc5d0\uc11c \uac1c\ucd5c\ub41c \ub2e8\ub3c5 \ucf58\uc11c\ud2b8 \u2018REDMARE\u2019\ub97c \uc2dc\uc791\uc73c\ub85c \uc6d4\ub4dc \ud22c\uc5b4\uc5d0 \ub3cc\uc785, \ubc29\ucf55, \ud0c0\uc774\ubca0\uc774, \uc2f1\uac00\ud3ec\ub974 \ub4f1\uc5d0\uc11c \uc131\ud669\ub9ac\uc5d0 \uacf5\uc5f0\uc744 \ud3bc\ucce4\uc73c\uba70, \ub0b4\ub144 1\uc6d4\ubd80\ud130 \ud6c4\ucfe0\uc624\uce74, \uace0\ubca0, \uc694\ucf54\ud558\ub9c8 \ub4f1\uc5d0\uc11c \uc77c\ubcf8 \uccab \uc544\ub808\ub098 \ud22c\uc5b4\ub97c \uc9c4\ud589\ud568\uc740 \ubb3c\ub860, 2\uc6d4\uc5d0\ub294 LA, \ub308\ub7ec\uc2a4, \ub9c8\uc774\uc560\ubbf8, \uc2dc\uce74\uace0, \ub274\uc5b4\ud06c \ub4f1\uc5d0\uc11c \ubbf8\uad6d \ud22c\uc5b4\ub3c4 \uc774\uc5b4\uac08 \uc608\uc815\uc774\uc5b4\uc11c, \u2018\uc6d4\ub4dc \ud074\ub798\uc2a4 \uac78\uadf8\ub8f9\u2019\uc758 \uc9c4\uac00\ub97c \ud655\uc778\uc2dc\ucf1c \uc904 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4.\n      ",price:15e3,stock:5e3},{id:"god",name:"NOW & THEN",creator:"\uc9c0\uc624\ub514(god)",comment:"\n2019\ub144 1\uc6d4 13\uc77c \ub370\ubdd4 20\uc8fc\ub144\uc744 \ub9de\uc774\ud558\ub294 \uad6d\ubbfc\uadf8\ub8f9 god\uac00 1\uc6d4 10\uc77c 4\ub144\ub9cc\uc5d0 20\uc8fc\ub144 \uae30\ub150 \uc2a4\ud398\uc15c \uc568\ubc94 < THEN & NOW >\ub97c \uc120\ubcf4\uc778\ub2e4.\n\n\ub370\ubdd4 \uc774\ud6c4 \uc8fc\ub85c \uaca8\uc6b8\uc5d0 \uc568\ubc94\uc744 \ubc1c\ub9e4\ud574\uc624\uba70 \u2018\uaca8\uc6b8 \uac00\uc218\u2019\ub77c\ub294 \ubcc4\uce6d\uc744 \uc5bb\uc740 god\uac00 \ub4e3\uae30\ub9cc\ud574\ub3c4 \ub530\ub73b\ud574\uc9c0\ub294 \uac10\uc131\uc73c\ub85c \ucd94\uc6b4 \uaca8\uc6b8 \uc5bc\uc5b4\ubd99\uc740 \ub9c8\uc74c\uc744 \ud3ec\uadfc\ud788 \uac10\uc2f8 \uc548\uc544 \uc904 \uc608\uc815\uc774\ub2e4.\n\n20\uc8fc\ub144 \uc2a4\ud398\uc15c \uc568\ubc94 < THEN & NOW >\ub294 \ub354\ube14 \ud0c0\uc774\ud2c0\uace1 \u2018\uadf8 \ub0a8\uc790\ub97c \ub5a0\ub098\u2019\uc640 \u2018\ub208\uc744 \ub9de\ucdb0\u2019\ub97c \ube44\ub86f\ud574 \uba5c\ub85c\ub9dd\uc2a4\uc758 \uc815\ub3d9\ud658\uc774 \uc0c8\ub86d\uac8c \ud3b8\uace1\ud558\uace0 \uc544\uc774\uc720, \ud5e8\ub9ac, \uc870\ud604\uc544, \uc591\ub2e4\uc77c\uc774 \uac00\ucc3d\uc5d0 \ucc38\uc5ec\ud55c \ub9ac\uba54\uc774\ud06c \uace1 \u2018\uae38\u2019 \ub4f1 \ucd1d 10\uace1\uc758 \uc2e0\uace1\uacfc \ub9ac\uba54\uc774\ud06c \uace1\uc73c\ub85c \uc54c\ucc28\uac8c \ucc44\uc6cc\uc838 \uc788\uc5b4 \ub370\ubdd4 \uc774\ud6c4 \uc9c0\uae08\uae4c\uc9c0 20\ub144\uc774\ub77c\ub294 \uc2dc\uac04 \ub3d9\uc548 \ud55c\uacb0\uac19\uc774 \uc9c0\uc9c0\ud558\uace0 \uc0ac\ub791\ud574 \uc900 \ud32c\ub4e4\uc5d0\uac8c \ub73b \uae4a\uc740 \uc120\ubb3c\uc774 \ub420 \uc804\ub9dd\uc774\ub2e4.\n      ",price:16300,stock:400},{id:"gayung",name:"\ud2b9\ubcc4\ud788 \ub300\ub2e8\ud560 \uac83",creator:"\uc548\ub155\ud558\uc2e0\uac00\uc601",comment:"\n\uc548\ub155\ud558\uc2e0\uac00\uc601 \uc815\uaddc 2\uc9d1 [\ud2b9\ubcc4\ud788 \ub300\ub2e8\ud560 \uac83]\n\uc774 \uc568\ubc94\uc744 \ub9cc\ub4dc\ub294 \ub3d9\uc548\uc740 \uc2a4\uc2a4\ub85c \ud2b9\ubcc4\ud788 \ub300\ub2e8\ud560 \uac83\uc774 \uc5c6\uc5b4 \uc790\uc8fc \uc2ac\ud37c\uc9c0\uace4 \ud588\uc9c0\ub9cc, \uc74c\uc545\uc744 \ub9cc\ub4e4\uba70 \uc544\ubb34\ub3c4 \uc544\ub2cc \uc774\ub294 \uc544\ub2c8\uc5c8\uc74c\uc744 \uae68\ub2ec\uc744 \uc218 \uc788\uc5c8\ub358 \uc18c\uc911\ud55c \uc2dc\uac04\ub4e4\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \uc568\ubc94\uc744 \ub4e4\uc5b4\uc8fc\uc2dc\ub294 \ubaa8\ub4e0 \ubd84\ub4e4\uaed8 \ud2b9\ubcc4\ud788 \ub300\ub2e8\ud55c \ub9c8\uc74c\uc744 \ubcf4\ub0b4\ub4dc\ub9bd\ub2c8\ub2e4.\n      ",price:15600,stock:1e3}]},Pe={cartData:[]},Ie={right:!1},_e=Object(We.b)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_ITEM":return{selectedKey:t.index,productData:Object(qe.a)(e.productData)};default:return e;case"ADD_TO_CART":var a=e.productData.findIndex(function(e){return e.id===t.item.id});return{productData:Object(qe.a)(e.productData.slice(0,a)).concat([Object(Le.a)({},e.productData[a],{stock:e.productData[a].stock-t.quantity})],Object(qe.a)(e.productData.slice(a+1,e.productData.length)))}}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.cartData.findIndex(function(e){return e.id===t.item.id});return-1===a?{cartData:Object(qe.a)(e.cartData).concat([Object(Le.a)({},t.item,{quantity:t.quantity})])}:{cartData:Object(qe.a)(e.cartData.slice(0,a)).concat([Object(Le.a)({},e.cartData[a],{quantity:e.cartData[a].quantity+t.quantity})],Object(qe.a)(e.cartData.slice(a+1,e.cartData.length)))};case"REMOVE_FROM_CART":return{cartData:Object(qe.a)(e.cartData.slice(0,t.index)).concat(Object(qe.a)(e.cartData.slice(t.index+1,e.cartData.length)))};case"CHECKOUT":return Pe;default:return e}},drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DRAWER":return{right:t.open};default:return e}}}),He=a(387);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(380),a(382);var Fe=Object(We.c)(_e);o.a.render(r.a.createElement(p.a,{store:Fe},r.a.createElement(He.a,null,r.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[219,2,1]]]);
//# sourceMappingURL=main.561f4db0.chunk.js.map