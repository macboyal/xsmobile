(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a296c790"],{"165c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("blankPage",{attrs:{title:t.title},on:{onClickLeft:t.onClickLeft},scopedSlots:t._u([{key:"body",fn:function(){return[i("van-row",[i("van-col",{staticStyle:{position:"relative"},attrs:{span:"24"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:n("a00b")}}),i("div",{staticClass:"title"},[i("h2",[t._v("\n              "+t._s(t.title)+"\n            ")]),i("div",[t._v("\n              "+t._s(t.$t("handbook.subTitle"))+"\n            ")])])])],1),i("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.menuList,(function(e,n){return i("div",{key:n},[1===e.helpMenuType?i("van-collapse-item",{attrs:{name:e.name},scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("van-icon",{attrs:{name:"column"}}),t._v("\n                "+t._s(e.title)+"\n              ")],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(e,n){return i("div",{key:"2_"+n},[1===e.helpMenuType?i("van-collapse-item",{attrs:{name:e.name},scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("van-icon",{attrs:{name:"column"}}),t._v("\n                    "+t._s(e.title)+"\n                  ")],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(e,n){return i("van-cell",{key:"3_"+n,attrs:{icon:"column",title:e.title},on:{click:function(n){return t.openDetail(e)}}})})),1):i("van-cell",{attrs:{icon:"column",title:e.title},on:{click:function(n){return t.openDetail(e)}}})],1)})),0):i("van-cell",{attrs:{icon:"column",title:e.title},on:{click:function(n){return t.openDetail(e)}}})],1)})),0),i("van-popup",{style:{width:"100%",height:"100%",backgroundColor:"#ffffff"},attrs:{position:"right"},model:{value:t.popupshow,callback:function(e){t.popupshow=e},expression:"popupshow"}},[t.popupshow?i("handbookDetail",{attrs:{title:t.docTitle,frameSrc:t.frameSrc,version:t.version},on:{closeDetail:t.closeDetail}}):t._e()],1)]},proxy:!0}])})],1)},o=[],r=(n("7f7f"),n("ac6a"),n("02df")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("blankPage",{attrs:{title:t.title},on:{onClickLeft:t.onClickLeft},scopedSlots:t._u([{key:"body",fn:function(){return[t.isVersion?n("versionPages",{attrs:{version:t.version}}):n("iframe",{ref:"iframe",staticStyle:{border:"none"},attrs:{src:t.frameSrc,height:t.contentHeight,width:t.contentWidth,scrolling:"auto"}})]},proxy:!0}])})],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h2",[t._v("\n      "+t._s(t.versionObj.versionCode)+"\n    ")]),n("ul",t._l(t.versionObj.versionInfo,(function(e,i){return n("li",{key:i},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])])},c=[],u={data:function(){return{versionObj:{versionCode:"",versionInfo:[]}}},methods:{getVersionInfo:function(){var t=this;this.$ajax("/common/comversioninfo/getinfobyversion","",{versionCode:this.version.versionCode,versionType:1},(function(e){var n=e.data.data;t.versionObj.versionCode=t.version.versionCode,t.versionObj.versionInfo=n.map((function(t){return t.versionInfo}))}))}},created:function(){this.getVersionInfo()},props:{version:{type:Object,default:function(){return{versionCode:""}}}}},f=u,p=(n("16ef"),n("2877")),h=Object(p["a"])(f,l,c,!1,null,"09b96950",null),v=h.exports,d={name:"handbookDetail",components:{versionPages:v},data:function(){return{isVersion:!1,contentHeight:0,contentWidth:0}},props:{version:{type:Object,default:function(){return{}}},frameSrc:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}}},methods:{onClickLeft:function(t){this.$emit("closeDetail",t)}},mounted:function(){"helpversion"===this.frameSrc&&(this.isVersion=!0),this.contentHeight=window.innerHeight-90,this.contentWidth=window.innerWidth}},m=d,y=Object(p["a"])(m,s,a,!1,null,"e70d96ac",null),k=y.exports,b={props:{extIcon:{type:String,default:function(){return""}}},components:{handbookDetail:k},data:function(){return{title:this.$t("handbook.title"),activeNames:[],active2Names:[],popupshow:!1,menuList:[],docTitle:"",frameSrc:"",version:{}}},methods:{init:function(){var t=this;this.$ajax("/common/helpMenu/gethelpmenu","",{helpMenuField1:"1"},(function(e){var n=e.data.data;t.menuList=t.getHelpMenuList(n)}))},getHelpMenuList:function(t){var e=this,n=[];return t.forEach((function(t){var i={icon:"",title:t.helpMenuName,name:t.helpMenuId,path:t.helpMenuPath,helpMenuType:t.helpMenuType};r["a"].hasChild(t)&&(i.children=e.getHelpMenuList(t.children)),n.push(i)})),n},openDetail:function(t){this.version.versionCode=t.name,this.frameSrc="help"+t.path,this.docTitle=t.title,this.popupshow=!0},closeDetail:function(t){this.popupshow=!1,t.flag=!1},onClickLeft:function(t){this.$emit("onClickLeft",t)}},created:function(){this.init()}},g=b,_=(n("8162"),Object(p["a"])(g,i,o,!1,null,"e28a7252",null));e["default"]=_.exports},"16ef":function(t,e,n){"use strict";var i=n("245a"),o=n.n(i);o.a},"245a":function(t,e,n){},"7f6e":function(t,e,n){},8162:function(t,e,n){"use strict";var i=n("7f6e"),o=n.n(i);o.a},a00b:function(t,e,n){t.exports=n.p+"img/handbook.jpg"}}]);