(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0af7dae"],{2315:function(t,e,n){"use strict";var i=n("da99"),c=n.n(i);c.a},2769:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{rightIcon:"",title:"扫码配置"},on:{onClickLeft:t.onClickLeft}}),i("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"摄像头扫码",clickable:""},on:{click:function(e){return t.click("camera")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"camera"}})]},proxy:!0}])}),i("van-cell",{attrs:{title:"红外扫码",clickable:""},on:{click:function(e){return t.click("infrared")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"infrared"}})]},proxy:!0}])})],1)],1),i("van-image",{staticClass:"img",attrs:{src:n("cf05")}})],1)},c=[],a={name:"scran",data:function(){return{scranType:"camera",radio:""}},methods:{click:function(t){this.radio=t,localStorage.setItem("scranType",t),this.$emit("close","scran")},onClickLeft:function(t){t.flag=!1,this.$emit("close","scran")}},created:function(){var t=localStorage.getItem("scranType");t?this.radio=t:(this.radio=this.scranType,localStorage.setItem("scranType",this.scranType))}},o=a,s=(n("fc43"),n("2877")),r=Object(s["a"])(o,i,c,!1,null,"0c507cc0",null);e["a"]=r.exports},2922:function(t,e,n){},"29ed":function(t,e,n){"use strict";var i=n("2922"),c=n.n(i);c.a},7035:function(t,e,n){},7634:function(t,e,n){},b325:function(t,e,n){},b60d:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{rightIcon:"",title:"业务配置"}},[i("van-image",{staticClass:"img",attrs:{src:n("cf05")}})],1),i("van-cell",{attrs:{title:"扫码配置","is-link":""},on:{click:function(e){return t.setting("scran")}}}),i("van-cell",{attrs:{title:"移动端扫码设备型号","is-link":""},on:{click:function(e){return t.setting("Equipment")}}}),i("van-cell",{attrs:{title:"选板配置","is-link":""},on:{click:function(e){return t.setting("chooseSheet")}}}),i("van-image",{staticClass:"img",attrs:{src:n("cf05")}}),t.scran?i("van-popup",{style:{width:"100%",height:"100%"},attrs:{position:"right"},model:{value:t.scran,callback:function(e){t.scran=e},expression:"scran"}},[i("scran",{on:{close:t.close}})],1):t._e(),t.UHF?i("van-popup",{style:{width:"100%",height:"100%"},attrs:{position:"right"},model:{value:t.UHF,callback:function(e){t.UHF=e},expression:"UHF"}},[i("UHF",{on:{close:t.close}})],1):t._e(),t.Equipment?i("van-popup",{style:{width:"100%",height:"100%"},attrs:{position:"right"},model:{value:t.Equipment,callback:function(e){t.Equipment=e},expression:"Equipment"}},[i("Equipment",{on:{close:t.close}})],1):t._e(),t.chooseSheet?i("van-popup",{style:{width:"100%",height:"100%"},attrs:{position:"right"},model:{value:t.chooseSheet,callback:function(e){t.chooseSheet=e},expression:"chooseSheet"}},[i("chooseSheet",{on:{close:t.close}})],1):t._e()],1)},c=[],a=n("2769"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{rightIcon:"",title:"UHF配置","right-text":"确认",buttons:t.buttons},on:{onClickLeft:t.onClickLeft,navbtnclick:t.navbtnclick}}),i("van-field",{attrs:{type:"digit",label:"条码长度"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),i("van-cell",{attrs:{title:"截取配置"},scopedSlots:t._u([{key:"default",fn:function(){return[i("van-radio-group",{staticStyle:{float:"right"},attrs:{size:"small"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("van-radio",{attrs:{name:"1",size:"small"}},[t._v("前"+t._s(t.num?t.num:"*")+"个字符")]),i("van-radio",{staticClass:"radio",attrs:{name:"2",size:"small"}},[t._v("后"+t._s(t.num?t.num:"*")+"个字符")])],1)]},proxy:!0}])}),i("van-image",{staticClass:"img",attrs:{src:n("cf05")}})],1)},s=[],r={name:"UHF",data:function(){return{num:5,radio:"1",buttons:[{key:"sure",display:this.$t("base.sure")}]}},methods:{navbtnclick:function(t){"sure"===t&&(localStorage.setItem("UHFLength",this.num),localStorage.setItem("radio",this.radio),this.$emit("close","UHF"))},onClickLeft:function(t){t.flag=!1,this.$emit("close","UHF")}},created:function(){var t=localStorage.getItem("UHFLength"),e=localStorage.getItem("radio");t?this.num=t:(this.num=5,localStorage.setItem("UHFLength",t)),e?this.radio=e:(this.radio=1,localStorage.setItem("radio",e))}},l=r,u=(n("29ed"),n("2877")),h=Object(u["a"])(l,o,s,!1,null,"2ecf9d3c",null),d=h.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{rightIcon:"",title:"扫码配置"},on:{onClickLeft:t.onClickLeft}}),i("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"XUESI1",clickable:""},on:{click:function(e){return t.click("XUESI1")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"XUESI1"}})]},proxy:!0}])}),i("van-cell",{attrs:{title:"XUESI2",clickable:""},on:{click:function(e){return t.click("XUESI2")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"XUESI2"}})]},proxy:!0}])})],1)],1),i("van-image",{staticClass:"img",attrs:{src:n("cf05")}})],1)},m=[],p={name:"Equipment",data:function(){return{equipmentType:"XUESI1",radio:""}},methods:{click:function(t){this.radio=t,localStorage.setItem("equipmentType",t),this.$emit("close","Equipment")},onClickLeft:function(t){t.flag=!1,this.$emit("close","Equipment")}},created:function(){var t=localStorage.getItem("equipmentType");t?this.radio=t:(this.radio=this.equipmentType,localStorage.setItem("equipmentType",this.equipmentType))}},g=p,v=(n("babe"),Object(u["a"])(g,f,m,!1,null,"16fe3ca1",null)),k=v.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{rightIcon:"",title:"选板配置"},on:{onClickLeft:t.onClickLeft}}),i("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("van-cell-group",[i("van-cell",{attrs:{title:"显示全部",clickable:""},on:{click:function(e){return t.click("ALL")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"ALL"}})]},proxy:!0}])}),i("van-cell",{attrs:{title:"只显示目标板材",clickable:""},on:{click:function(e){return t.click("ONLYUSEFUL")}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[i("van-radio",{attrs:{"checked-color":"#61408c",name:"ONLYUSEFUL"}})]},proxy:!0}])})],1)],1),i("van-image",{staticClass:"img",attrs:{src:n("cf05")}})],1)},b=[],y={name:"chooseSheet",data:function(){return{chooseSheet:"ONLYUSEFUL",radio:""}},methods:{click:function(t){this.radio=t,localStorage.setItem("chooseSheet",t),this.$emit("close","chooseSheet")},onClickLeft:function(t){t.flag=!1,this.$emit("close","chooseSheet")}},created:function(){var t=localStorage.getItem("chooseSheet");t?this.radio=t:(this.radio=this.chooseSheet,localStorage.setItem("chooseSheet",this.chooseSheet))}},I=y,U=(n("e44d"),Object(u["a"])(I,S,b,!1,null,"d41c7e82",null)),E=U.exports,L={name:"businessConfiguration",components:{scran:a["a"],UHF:d,Equipment:k,chooseSheet:E},data:function(){return{scran:!1,UHF:!1,Equipment:!1,chooseSheet:!1}},methods:{setting:function(t){this[t]=!0},close:function(t){this[t]=!1}}},_=L,x=(n("2315"),Object(u["a"])(_,i,c,!1,null,"1d57072f",null));e["default"]=x.exports},babe:function(t,e,n){"use strict";var i=n("b325"),c=n.n(i);c.a},da99:function(t,e,n){},e44d:function(t,e,n){"use strict";var i=n("7035"),c=n.n(i);c.a},fc43:function(t,e,n){"use strict";var i=n("7634"),c=n.n(i);c.a}}]);