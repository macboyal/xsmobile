(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-401b37de"],{3654:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("basePage",{ref:"basePage",attrs:{numberCol:t.numberCol,buttons:t.buttons,draggable:!0,footerText:t.footerText,btnMethod:t.btnMethod,selectItems:t.selectItems,fixedQueryConditions:t.fixedQueryConditions,cascadeItems:t.cascadeItems,order:{id:"asc"},title:t.$t("rawMaterialStorage.title"),contitle:t.$t("base.contitle"),addcon:t.addcon},on:{buttonsClick:t.buttonsClick,aftercheck:t.aftercheck,afterquery:t.afterquery,aftercheckall:t.aftercheckall,fclick:t.fclick,fblur:t.fblur},scopedSlots:t._u([{key:"over",fn:function(){return[e("van-row",{staticStyle:{"text-align":"center","vertical-align":"middle","align-items":"center","justify-content":"center",display:"flex"}},[e("van-col",{attrs:{span:"4"}},[e("span",{staticClass:"smallfont"},[t._v(t._s(t.$t("rawMaterialStorage.store")))])]),e("van-col",{attrs:{span:"14"}},[e("menuselect",{staticStyle:{width:"100%"},attrs:{showFirstItem:"",options:t.options},model:{value:t.storeId,callback:function(a){t.storeId=a},expression:"storeId"}})],1),e("van-col",{attrs:{span:"6"}},[e("span",{staticClass:"smallfont",staticStyle:{float:"right","margin-right":"10px"}},[t._v(t._s(t.$t("rawMaterialStorage.total")+":"+t.total))])])],1)]},proxy:!0}])}),e("stackSelect",{ref:"stockSelect",attrs:{storeId:t.storeId,options:t.options,show:t.show},on:{closeSelect:t.closeSelect,beforesearch:t.beforesearch,sure:t.sure}})],1)},i=[],r=(e("1c4c"),e("386d"),e("20d6"),e("7514"),e("ac6a"),e("5df3"),e("4f7f"),e("d399")),n=e("02df"),o={name:"storage0001",data:function(){return{flag:!1,numberCol:{0:["matPrice"],2:["matThickness"],3:["matBasicQuantity","matAuxQuantity"]},editBarCode:!1,editObj:{},barCodes:new Set,buttons:[{key:"warehouse",name:this.$t("rawMaterialStorage.warehousing")}],selectobjs:[],show:!1,storeId:"",total:0,options:[],footerText:[{key:"quantity",display:this.$t("rawMaterialStorage.quantity"),value:0},{key:"weight",display:this.$t("rawMaterialStorage.weight"),value:0}],btnMethod:{querymethod:"/wms/wmsmat/checkautopage"},selectItems:{},cascadeItems:{},boindnum:0,unboindnum:0,addcon:[{condisplay:"暂收单号",conexp:"=",conismaster:1,conkey:"trbNo",conlang:"zh_cn",conselectid:"0",contype:"select"}],fixedQueryConditions:[{key:"matPublicStatus",exp:"=",value:"1"},{key:"matInvStatus",exp:"=",value:"0"},{key:"matSheetType",exp:"=",value:"0"}]}},created:function(){this.initselect(),sc.initScan(this.scanning)},destroyed:function(){sc.initScan(void 0)},activated:function(){},methods:{getIndex:function(){var t=this,a=!1,e=0;return this.$refs.basePage.datas.forEach((function(s,i){if(!a){var r=t.$refs.basePage.$refs.baseList.$refs.cards.find((function(t){return t.data.matBarcode===s.matBarcode}));!1===r.checked&&(e=i,a=!0)}})),e},scanning:function(t,a){var e=this;if(r["a"].loading({forbidClick:!0,duration:0}),!1===this.editBarCode){var s=t.data;if(s){var i={current:1,rows:1,value:{matBarcode:s},exp:{matBarcode:"="},slaves:{},order:{}};this.fixedQueryConditions.forEach((function(t){"slaves"!==t.key?(i.value[t.key]=t.value,i.exp[t.key]=t.exp):i.slaves=t.value})),this.$ajax(this.btnMethod.querymethod,"",i,(function(t){var a=e;if(t&&t.data&&t.data.data&&t.data.data.records){var s=t.data.data.records;s.length>0?(s.forEach((function(t){var s=e.$refs.basePage.datas.findIndex((function(a){return a.matBarcode===t.matBarcode}));s>=0&&e.$refs.basePage.datas.splice(s,1);var i=e.getIndex();e.$refs.basePage.datas.splice(i,0,t),e.$nextTick((function(){a.$refs.basePage.$refs.baseList.$refs.cards.forEach((function(a){a.data.matBarcode===t.matBarcode&&(a.$refs.checkbox.toggle(!0),e.aftercheck())}))})),e.barCodes.add(t.matBarcode)})),r["a"].clear()):r["a"].fail(e.$t("rawMaterialArrival.scanFail"))}}))}}else{var n=JSON.parse(JSON.stringify(this.editObj));n.matBarcode=t.data,this.$ajax("/wms/wmsmat/update","",n,(function(t){e.flag=!1;var a=e.$refs.basePage.datas.findIndex((function(t){return t.id===n.id}));a>=0&&e.$refs.basePage.datas.splice(a,1,n),r["a"].clear()}))}},buttonsClick:function(t){if("warehouse"===t){var a=this.$refs.basePage.ischeckall();if(a)this.show=!0;else{var e=this.$refs.basePage.getselected();e&&e.length>0?this.show=!0:this.$toast.fail(this.$t("base.noselect"))}}},warehouseAll:function(t){var a=this,e=this.$refs.basePage.getsearchJson(),s=this;this.$ajax("/wms/wmsmat/noautopageidlist","",e,(function(e){var i=e.data.data;r["a"].loading({forbidClick:!0,duration:0});var n=[];i.forEach((function(e){var i={id:e,matInvStatus:1,matStoreId:a.storeId,matStackId:t},r=new Promise((function(t,a){s.$ajax("/wms/wmsmat/instorebyid","",i,(function(a){t(!0)}))}));n.push(r)})),Promise.all(n).then((function(t){a.show=!1,r["a"].success(s.$t("rawMaterialStorage.success")),s.$refs.basePage.search()}))}))},warehouse:function(t){var a=this,e=this,s=this.$refs.basePage.getselected(),i=[];r["a"].loading({forbidClick:!0,duration:0}),s.forEach((function(s){var r={id:s.id,matInvStatus:1,matStoreId:a.storeId,matStackId:t},n=new Promise((function(t,a){e.$ajax("/wms/wmsmat/instorebyid","",r,(function(a){t(!0)}))}));i.push(n)})),Promise.all(i).then((function(t){a.show=!1,r["a"].success(e.$t("rawMaterialStorage.success")),e.$refs.basePage.search()}))},beforesearch:function(t){var a=this.$refs.basePage.getselected(),e=new Set;a.forEach((function(t){e.add(t.matCatFathcode)})),t.exp["matMatCatCode"]="=",t.value["matMatCatCode"]=Array.from(e).join(",")},sure:function(t){var a=this.$refs.basePage.ischeckall();if(a)this.warehouseAll(t.stackId);else{var e=this.$refs.basePage.getselected();e&&e.length>0?this.warehouse(t.stackId):this.$toast.fail(this.$t("base.noselect"))}},aftercheck:function(t){if(!1===this.$refs.basePage.checkAll){var a=this.$refs.basePage.getselected(),e=0,s=0;a.forEach((function(t){e+=t.matAuxQuantity,s+=t.matBasicQuantity})),this.footerText[0].value=s,this.footerText[1].value=n["a"].numberFormat(4,e)+"KG"}},aftercheckall:function(){!0===this.$refs.basePage.checkAll&&this.$refs.basePage.extRecords?(this.footerText[0].value=this.$refs.basePage.extRecords.MAT_BASIC_QUANTITY,this.footerText[1].value=n["a"].numberFormat(4,this.$refs.basePage.extRecords.MAT_AUX_QUANTITY)+"KG"):(this.footerText[0].value=0,this.footerText[1].value=0)},fclick:function(t,a,e,s,i){t.flag=!1,this.flag=!0,this.$set(i,"fixed1",!0),this.editBarCode=!0,this.editObj=s},fblur:function(t,a,e){var s=this;if(this.editBarCode=!1,this.$set(e,"fixed1",!1),this.flag){var i=a;r["a"].loading({forbidClick:!0,duration:0}),this.$ajax("/wms/wmsmat/update","",i,(function(t){var a=s.$refs.basePage.datas.findIndex((function(t){return t.id===i.id}));a>=0&&s.$refs.basePage.datas.splice(a,1,i),r["a"].clear()}))}},afterquery:function(t){var a=this;1===t.current&&(this.barCodes=new Set),this.barCodes.forEach((function(a){var e=t.records.findIndex((function(t){return t.matBarcode===a}));e>0&&t.records.splice(e,1)})),t.records.forEach((function(t){})),this.total=t.total;var e=this.$refs.basePage.checkAll;this.$nextTick((function(){e?a.aftercheckall():a.aftercheck()}))},cascadehandler:function(t){var a=this,e=[];return t.forEach((function(t){var s={checkable:t.check,id:t.matCatSyspath,code:t.matCatSyscode,name:t.matCatName};s.children=a.cascadehandler(t.children),e.push(s)})),e},closeSelect:function(t){t&&(t.flag=!1),this.show=!1},initselect:function(){var t=this;this.$ajax("/wms/wmsmatcat/matlisttree","",{matInvStatus:"0",matPublicStatus:"0"},(function(a){t.cascadeItems.matCatSyspath=t.cascadehandler(a.data.data)})),this.$ajax("/wms/wmsmat/getdistinctparams","",{type:"matCarshipno",matInvStatus:"0",matPublicStatus:"0"},(function(a){var e=a.data.data,s=[];e.forEach((function(t){var a={id:t,name:t};s.push(a)})),t.selectItems.matCarshipno=s})),this.$ajax("/wms/wmsmat/getdistinctparams","",{type:"matProjno",matInvStatus:"0",matPublicStatus:"0"},(function(a){var e=a.data.data,s=[];e.forEach((function(t){var a={id:t,name:t};s.push(a)})),t.selectItems.matProjNo=s})),this.$ajax("/wms/wmstrb/list","",{trbPublicStatus:"1"},(function(a){var e=a.data.data,s=[];e.forEach((function(t){var a={id:t.trbNo,name:t.trbNo};s.push(a)})),t.selectItems.trbNo=s})),this.selectItems.matSheetType=n["a"].getDict("SHEET_TYPE"),this.selectItems.matStorageStatus=n["a"].getDict("STORAGE_STATUS"),this.$ajax("/wms/wmsstore/list","",{storeType:1},(function(a){var e=[];a.data.data.forEach((function(t){var a={text:t.storeName,value:t.id};e.push(a)})),t.options=e}))}}},c=o,d=(e("51de"),e("2877")),l=Object(d["a"])(c,s,i,!1,null,"3688b2d1",null);a["default"]=l.exports},"4ead":function(t,a,e){},"51de":function(t,a,e){"use strict";var s=e("4ead"),i=e.n(s);i.a}}]);