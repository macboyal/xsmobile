(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6612c7c"],{"19b5":function(t,n,o){"use strict";var i=o("7061"),e=o.n(i);e.a},7061:function(t,n,o){},a3f4:function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{width:"100%",height:"100%"}},[o("van-overlay",{attrs:{show:t.lodingshow}},[o("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[t.lodingshow?o("van-loading",{attrs:{type:"spinner",color:"#1989fa"}}):t._e()],1)]),o("div",{attrs:{id:"nav"}},[o("van-nav-bar",{ref:"navBar",staticClass:"bar",attrs:{id:"vanNavBar",fixed:"","left-arrow":!0},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"title",fn:function(){return[o("span",{staticStyle:{color:"#fff"},attrs:{size:"18"}},[t._v("\n           "+t._s(t.title)+"\n         ")])]},proxy:!0}])})],1),t.show?o("iframe",{ref:"iframe",staticClass:"iframe",staticStyle:{border:"none"},attrs:{src:t.frameSrc,id:"kanbanif",height:t.contentHeight,width:t.contentWidth,scrolling:"auto"}}):t._e()],1)},e=[],a={name:"iframekanban",components:{},data:function(){return{show:!0,title:"看板",frameSrc:"",contentHeight:0,contentWidth:0,lodingshow:!0}},props:{},methods:{onClickLeft:function(t){this.$router.go(-1)}},mounted:function(){this.contentHeight=window.innerHeight,this.contentWidth=window.innerWidth,this.show=!0;var t=document.getElementById("kanbanif"),n=this;t.attachEvent?t.attachEvent("onload",(function(){n.lodingshow=!1,console.log("iframe已加载完毕")})):t.onload=function(){n.lodingshow=!1,console.log("iframe已加载完毕")},api.setScreenOrientation({orientation:"auto"})},destroyed:function(){api.setScreenOrientation({orientation:"portrait_up"})},created:function(){var t=this;this.$ajax("/common/comsysinfo/comsysinfo","",{},(function(n){t.frameSrc=n.data.data.sysinfoKanbanHost+"/mobilekanban?id="+t.$route.query.id+"&token="+localStorage.getItem("token")+"&showBack=true";var o=t;window.onresize=function(){o.contentHeight=window.innerHeight,o.contentWidth=window.innerWidth}}),(function(){}),"post")}},r=a,s=(o("19b5"),o("2877")),c=Object(s["a"])(r,i,e,!1,null,"06e50e2c",null);n["default"]=c.exports}}]);