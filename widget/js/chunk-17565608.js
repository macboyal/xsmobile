(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17565608"],{"1bb7":function(t,n,e){"use strict";var i=e("8f8c"),o=e.n(i);o.a},"8f8c":function(t,n,e){},a3f4:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{width:"100%",height:"100%","padding-top":"20px"}},[e("van-overlay",{attrs:{show:t.lodingshow}},[e("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[t.lodingshow?e("van-loading",{attrs:{type:"spinner",color:"#1989fa"}}):t._e()],1)]),t.show?e("iframe",{ref:"iframe",staticClass:"iframe",staticStyle:{border:"none"},attrs:{src:t.frameSrc,id:"kanbanif",height:t.contentHeight,width:t.contentWidth,scrolling:"auto"}}):t._e()],1)},o=[],a={name:"iframekanban",components:{},data:function(){return{show:!0,title:"看板",frameSrc:"",contentHeight:0,contentWidth:0,lodingshow:!0}},props:{},methods:{onClickLeft:function(t){this.$router.go(-1)}},mounted:function(){api.setStatusBarStyle({style:"dark",color:"transparent"}),this.contentHeight=window.innerHeight,this.contentWidth=window.innerWidth,this.show=!0;var t=document.getElementById("kanbanif"),n=this;t.attachEvent?t.attachEvent("onload",(function(){n.lodingshow=!1})):t.onload=function(){n.lodingshow=!1},"0"===this.equType&&api.setScreenOrientation({orientation:"landscape_left"})},destroyed:function(){api.setScreenOrientation({orientation:"portrait_up"}),api.setStatusBarStyle({style:"light"})},created:function(){var t=this;this.equType=this.$route.query.type,this.$ajax("/common/comsysinfo/comsysinfo","",{},(function(n){t.frameSrc=n.data.data.sysinfoKanbanHost+"#/mobilekanban?id="+t.$route.query.id+"&token="+localStorage.getItem("token")+"&type="+t.$route.query.id;var e=t;window.onresize=function(){e.contentHeight=window.innerHeight,e.contentWidth=window.innerWidth}}),(function(){}),"post")}},r=a,s=(e("1bb7"),e("2877")),c=Object(s["a"])(r,i,o,!1,null,"5c91af50",null);n["default"]=c.exports}}]);