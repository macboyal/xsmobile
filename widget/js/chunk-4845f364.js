(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4845f364"],{"208f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baseNavigation",{attrs:{title:"余料识别",id:"baseNavigation","right-icon":""},on:{onClickLeft:t.onClickLeft}}),i("div",{staticClass:"container",staticStyle:{height:"100%",width:"100%"}},[i("van-row",{directives:[{name:"show",rawName:"v-show",value:-1!=t.active,expression:"active!=-1"}],attrs:{id:"steps"}},[i("van-steps",{staticStyle:{height:"50px",padding:"10px"},attrs:{active:t.active,"active-icon":"success","active-color":"#38f"}},[i("van-step",[t._v("上传文件")]),i("van-step",[t._v("尺寸标定")]),i("van-step",[t._v("完成")])],1)],1),i("van-row",{style:{width:t.width+"PX",height:t.height+"PX"}},[-1==t.active?i("van-row",{staticStyle:{height:"100%"}},[i("div",{ref:"list",staticStyle:{overflow:"auto"},style:{height:t.listHeight+"PX"},attrs:{id:"list"}},[i("van-grid",{attrs:{"column-num":3,clickable:""}},t._l(t.list,(function(e,n){return i("van-grid-item",{key:e.id,on:{click:function(i){return t.click(e,n)}}},[i("van-image",{attrs:{height:"100%",fit:"contain","lazy-load":"",src:t.baseUrl+e["remFileUrl"]},scopedSlots:t._u([{key:"loading",fn:function(){return[i("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[i("div")]},proxy:!0}],null,!0)})],1)})),1)],1),i("van-row",{staticStyle:{position:"absolute",bottom:"0",width:"100%","text-align":"center"},attrs:{id:"buttons"}},[i("van-uploader",{staticStyle:{width:"100%"},attrs:{"result-type":"file","after-read":t.afterRead}},[i("van-button",{staticStyle:{width:"100%"},attrs:{icon:"plus",type:"primary",color:"#fbcd05"}},[t._v("上传文件")])],1)],1)],1):t._e(),0==t.active?i("div",{staticStyle:{width:"100%",height:"100%","text-align":"center"}},[i("canvas",{style:{position:"absolute",left:"0px",top:t.top+"PX"},attrs:{width:t.width,id:"canvas"}},[i("span",[t._v("亲，您的浏览器不支持canvas，换个浏览器试试吧！")])]),i("canvas",{style:{position:"absolute",left:"0px",top:t.top+"PX",zIndex:10},attrs:{width:t.width,id:"canvas1"}})]):t._e(),2==t.active?i("div",{staticStyle:{width:"100%",height:"100%","text-align":"center"}},[i("van-row",{staticStyle:{"padding-top":"80px"}},[i("van-icon",{attrs:{name:"passed",color:"green",size:"100px"}})],1),i("van-row",{staticStyle:{"margin-top":"20px"}},[i("span",[t._v("成功!")])]),i("van-row",{staticStyle:{position:"absolute",bottom:"0",width:"100%"}},[i("van-button",{staticStyle:{width:"90%","margin-bottom":"5PX"},attrs:{type:"primary",color:"#fbcd05"},on:{click:t.sure}},[t._v("确认")])],1)],1):t._e()],1)],1),i("van-dialog",{attrs:{width:"90%","show-cancel-button":"",beforeClose:t.confirm,theme:"round-button"},on:{cancel:t.cancel},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{style:{maxHeight:.7*t.height+"px",overflow:"auto"}},[i("van-field",{attrs:{type:"number",label:"尺寸(毫米)",placeholder:"请输入所选线段的尺寸",autofocus:"",required:""},on:{input:function(e){return t.changForm("value")}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._l(t.fields,(function(e){return i("van-field",{key:e.key,attrs:{label:e.name,placeholder:"请输入"+e.name,readonly:e.readonly,required:e.required},on:{input:function(i){return t.changForm(e.key)}},model:{value:t.form[e.key],callback:function(i){t.$set(t.form,e.key,i)},expression:"form[field.key]"}})}))],2)]),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect},model:{value:t.showAction,callback:function(e){t.showAction=e},expression:"showAction"}})],1)},a=[],o=(i("20d6"),i("7514"),i("7f7f"),i("6c7b"),i("456d"),i("ac6a"),i("386d"),i("96cf"),i("3b8d")),s=i("d399"),r=i("28a2"),c={components:{},name:"remOCR",data:function(){return{matMatCatId:"",area:0,form:{},fields:[],baseUrl:"",list:[],actions:[{name:"下载DXF",key:"download"},{name:"预览",key:"view"},{name:"删除",key:"delete",color:"#ee0a24"}],id:"",currentObject:{},data:{},show:!1,showAction:!1,value:"",active:-1,height:0,listHeight:0,width:0,fathers:{},childrens:{},canvas:"",context:"",canvas1:"",context1:"",startGroupId:null,startIndex:null,endGroupId:null,endIndex:null,scale:1,offsetX:0,offsetY:0,top:0,startPoint:null,movePoint:null,closePoint:null}},computed:{},watch:{},methods:{onClickLeft:function(t){-1!==this.active&&(t.flag=!1,this.search(),this.active=-1)},click:function(t){this.showAction=!0,this.currentObject=t},onSelect:function(t){var e=this;this.showAction=!1,"delete"===t.key?this.$ajax("/filesmgnt/sysRemFile/remove","",{id:this.currentObject.id},(function(){e.search(),s["a"].success("删除成功!")})):"download"===t.key?this.$ajax("/filesmgnt/download/downremone","",{remFileParentId:this.currentObject.id,remFileLevel:4},(function(t){var i=t.data.data.remFileUrl,n={Url:e.baseUrl+i};try{jumpbrowser.jumpBrowser(n)}catch(a){e.$downloadUrl(i)}})):"view"===t.key&&this.$ajax("/filesmgnt/sysRemFile/getRelated","",{id:this.currentObject.id},(function(t){var i=t.data.data,n=i.map((function(t){return e.baseUrl+t.remFileUrl}));Object(r["a"])({images:n,closeable:!0,showIndex:!1,showIndicators:!0})}))},search:function(){var t=this;this.$ajax("/filesmgnt/sysRemFile/query","",{},(function(e){var i=e.data.data;t.list=i}))},sure:function(){this.search(),this.active=-1},afterRead:function(t){var e=this,i=this,n=this.$toast.loading({message:"加载中...",overlay:!0,forbidClick:!0,duration:0});this.$upload("/filesmgnt/uploads/uploadrem","",t.file,"post",(function(t){return i.$ajax("/filesmgnt/sysRemFile/getPoints","",{id:t.data.data.id},(function(a){e.id=t.data.data.id,e.data=a.data.data;var o=JSON.parse(JSON.stringify(e.data));e.fathers=o.fathers,e.childrens=o.childrens,e.area=o.area;var s=o.result;e.active=0;var c=s.map((function(t){return e.baseUrl+t.remFileUrl}));Object(r["a"])({images:c,closeable:!0,showIndex:!1,showIndicators:!0}),e.$nextTick((function(){i.init(),i.scalePoint(),i.offset(),i.draw(),i.drawPoint(),n.clear()}))}))}))},findPoint:function(t){var e=this,i=Math.pow(this.height,2)+Math.pow(this.width,2),n=this;return Object.keys(this.fathers).forEach((function(a){return e.fathers[a].forEach((function(e,o){var s=Math.pow(e.remPointX-t.x,2)+Math.pow(e.remPointY-t.y,2);i>s&&(i=s,n.startGroupId=a,n.startIndex=o)}))})),t.x=this.fathers[this.startGroupId][n.startIndex].remPointX,t.y=this.fathers[this.startGroupId][n.startIndex].remPointY,t},findClosePoint:function(t){var e=this,i=Math.pow(this.height,2)+Math.pow(this.width,2),n=this;return Object.keys(this.fathers).forEach((function(a){return e.fathers[a].forEach((function(e,o){if(e.remPointX!=n.startPoint.x&&e.remPointY!=n.startPoint.y){var s=Math.pow(e.remPointX-t.x,2)+Math.pow(e.remPointY-t.y,2);i>s&&(i=s,n.endGroupId=a,n.endIndex=o)}}))})),t.x=this.fathers[n.endGroupId][n.endIndex].remPointX,t.y=this.fathers[n.endGroupId][n.endIndex].remPointY,i>400?null:t},init:function(){this.canvas="",this.context="",this.canvas1="",this.context1="",this.startGroupId=null,this.startIndex=null,this.endGroupId=null,this.endIndex=null,this.scale=1,this.offsetX=0,this.offsetY=0,this.startPoint=null,this.movePoint=null,this.closePoint=null,this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!0,this.canvas1=document.getElementById("canvas1"),this.context1=this.canvas1.getContext("2d"),this.context1.imageSmoothingEnabled=!0,this.canvas.height=this.height,this.canvas1.height=this.height;var t=this;this.canvas1.addEventListener("touchstart",(function(e){if(1==e.targetTouches.length){var i=e.targetTouches[0],n=i.clientX-t.canvas1.offsetLeft,a=i.clientY-t.canvas1.offsetTop;t.startPoint={x:n,y:a},t.startPoint=t.findPoint(t.startPoint),t.canvas1.addEventListener("touchmove",(function(e){var i=e.targetTouches[0];t.context1.clearRect(0,0,this.width,this.height),t.context1.beginPath(),t.context1.lineWidth=1.5,t.context1.strokeStyle="red",t.context1.moveTo(t.startPoint.x,t.startPoint.y);var n=i.clientX-t.canvas1.offsetLeft,a=i.clientY-t.canvas1.offsetTop;t.movePoint={x:n,y:a},t.closePoint=t.findClosePoint(t.movePoint),null===t.closePoint?(t.context1.lineTo(i.clientX-t.canvas1.offsetLeft,i.clientY-t.canvas1.offsetTop),t.context1.stroke()):(t.context1.lineTo(t.closePoint.x,t.closePoint.y),t.context1.stroke())}),!1),t.canvas1.addEventListener("touchend",(function(){null===t.closePoint||t.startPoint.x===t.closePoint.x&&t.startPoint.y===t.closePoint.y?(t.context1.clearRect(0,0,this.width,this.height),t.startGroupId="",t.startIndex="",t.endGroupId="",t.endIndex=""):(t.context1.closePath(),t.initForm(),t.value="")}),!1)}}),!1)},changForm:function(t){var e=this;if("value"===t||"matThickness"===t){var i=9999,n=9999,a=0,o=0;Object.keys(this.data.fathers).forEach((function(t){return e.data.fathers[t].forEach((function(t){i-t.remPointX>0&&(i=t.remPointX),n-t.remPointY>0&&(n=t.remPointY),a-t.remPointX<0&&(a=t.remPointX),o-t.remPointY<0&&(o=t.remPointY)}))}));var s=a-i,r=o-n,c=this.area;if(this.value){var h=this.data["fathers"][this.startGroupId][this.startIndex].remPointX,l=this.data["fathers"][this.startGroupId][this.startIndex].remPointY,d=this.data["fathers"][this.endGroupId][this.endIndex].remPointX,f=this.data["fathers"][this.endGroupId][this.endIndex].remPointY,u=this.value/Math.sqrt(Math.pow(f-l,2)+Math.pow(d-h,2));this.form["matLength"]=(s*u).toFixed(2),this.form["matWidth"]=(r*u).toFixed(2),this.form["matArea"]=(c*Math.pow(u-0,2)).toFixed(2),this.form["matThickness"]&&(this.form["matAuxQuantity"]=(c*Math.pow(u-0,2)*this.form["matThickness"]*this.form["mataDensity"]).toFixed(2),this.form["matVolume"]=(c*Math.pow(u-0,2)*this.form["matThickness"]).toFixed(2))}else this.form["matLength"]=s,this.form["matWidth"]=r,this.form["matArea"]=c}},initForm:function(){var t=this,e=9999,i=9999,n=0,a=0;Object.keys(this.data.fathers).forEach((function(o){return t.data.fathers[o].forEach((function(t){e-t.remPointX>0&&(e=t.remPointX),i-t.remPointY>0&&(i=t.remPointY),n-t.remPointX<0&&(n=t.remPointX),a-t.remPointY<0&&(a=t.remPointY)}))})),this.form={matMatCatName:"板材",matSheetType:"余料",matLength:n-e,matWidth:a-i,matBasicQuantity:1,matArea:this.area,mataDensity:785e-8,matMatCatId:this.matMatCatId},this.show=!0},scalePoint:function(){var t=this,e=0,i=0;Object.keys(this.fathers).forEach((function(n){return t.fathers[n].forEach((function(t){e-t.remPointX<0&&(e=t.remPointX),i-t.remPointY<0&&(i=t.remPointY)}))}));var n=i,a=e,o=this.height/n,s=this.width/a;(o<1||s<1)&&(this.scale=o<s?o:s,Object.keys(this.fathers).forEach((function(e){return t.fathers[e].forEach((function(e){e.remPointX=e.remPointX*t.scale,e.remPointY=e.remPointY*t.scale}))})),Object.keys(this.childrens).forEach((function(e){return t.childrens[e].forEach((function(e){e.remPointX=e.remPointX*t.scale,e.remPointY=e.remPointY*t.scale}))})))},offset:function(){var t=this,e=9999,i=9999,n=0,a=0;Object.keys(this.fathers).forEach((function(o){return t.fathers[o].forEach((function(t){e-t.remPointX>0&&(e=t.remPointX),i-t.remPointY>0&&(i=t.remPointY),n-t.remPointX<0&&(n=t.remPointX),a-t.remPointY<0&&(a=t.remPointY)}))})),this.offsetX=e-(this.width-(n-e))/2,this.offsetY=i-(this.height-(a-i))/2,Object.keys(this.fathers).forEach((function(e){return t.fathers[e].forEach((function(e){e.remPointX=e.remPointX-t.offsetX,e.remPointY=e.remPointY-t.offsetY}))})),Object.keys(this.childrens).forEach((function(e){return t.childrens[e].forEach((function(e){e.remPointX=e.remPointX-t.offsetX,e.remPointY=e.remPointY-t.offsetY}))}))},draw:function(){var t=this,e="green";this.context.lineWidth=1,this.context.strokeStyle=e,this.context.lineCap="round",this.context.lineJoin="round",Object.keys(this.fathers).forEach((function(i){t.context.beginPath(),t.context.moveTo(t.fathers[i][0].remPointX,t.fathers[i][0].remPointY),t.fathers[i].forEach((function(i){t.context.lineTo(i.remPointX,i.remPointY),t.context.strokeStyle=e,t.context.stroke()})),t.context.closePath()})),Object.keys(this.childrens).forEach((function(i){var n=t.childrens[i];t.context.beginPath(),t.context.moveTo(n[0].remPointX,n[0].remPointY),n.forEach((function(i){t.context.lineTo(i.remPointX,i.remPointY),t.context.strokeStyle=e,t.context.stroke()})),t.context.closePath()}))},drawPoint:function(){var t=this;Object.keys(this.fathers).forEach((function(e){return t.fathers[e].forEach((function(e){t.context.beginPath(),t.context.arc(e.remPointX,e.remPointY,2,2*Math.PI,0,!0),t.context.fillStyle="red",t.context.fill(),t.context.closePath()}))}))},confirm:function(t,e){var i=this;if("confirm"===t){if(!this.value||this.value-1===-1)return s["a"].fail("请输入尺寸!"),void e(!1);var n=!1;if(this.fields.forEach((function(t,a){if(t.required&&!i.form[t.key])return s["a"].fail(t.name+"不允许为空"),e(!1),void(n=!0)})),n)return;var a={id:this.id,startPointX:this.data["fathers"][this.startGroupId][this.startIndex].remPointX,startPointY:this.data["fathers"][this.startGroupId][this.startIndex].remPointY,endPointX:this.data["fathers"][this.endGroupId][this.endIndex].remPointX,endPointY:this.data["fathers"][this.endGroupId][this.endIndex].remPointY,relLength:this.value,fileName:this.form.matName,form:this.form};this.$ajax("/filesmgnt/sysRemFile/toDXF","",a,(function(){e(),i.active=2}),(function(){e(!1)}))}else e()},cancel:function(){this.context1.clearRect(0,0,this.width,this.height),this.startPoint=null,this.movePoint=null,this.closePoint=null,this.startGroupId=null,this.startIndex=null,this.endGroupId=null,this.endIndex=null},initFeilds:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a,o,s,r,c,h=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=["matMatCatName","matSheetType","matLength","matWidth","matArea","mataDensity","matBasicQuantity"],t.next=3,this.$axio("/common/sysfieldcfg/getfieldcfgbytype","",{fieldCfgType:"WMS-REM-IMPORT"});case 3:return i=t.sent,n=i.data.data,t.next=7,this.$axio("/auth/res/getcol","",{moduleid:"storage_7001"});case 7:for(c in a=t.sent,o=a.data.data,n=n.filter((function(t){return"1"==t.fieldCfgIscheck})),s={key:"trbNo",name:"单号",type:"text",required:!0},this.fields.push(s),r=function(t){var i=n[t],a=o.find((function(t){return t.colkey===i.fieldCfgKey}));if(a){var s={key:i.fieldCfgKey,name:i.fieldCfgDispName,type:"number"===a.coltype?"number":"text",required:1===i.fieldCfgIsmust};e.findIndex((function(t){return t===i.fieldCfgKey}))>=0&&(s["readonly"]=!0),h.fields.push(s)}},n)r(c);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;this.initFeilds(),this.baseUrl=this.getBaseUrl(),this.search(),this.$ajax("/wms/wmsmatcat/getmatcatbymatname","",{id:"板材"},(function(e){var i=e.data.data.id;t.matMatCatId=i}))},mounted:function(){this.listHeight=window.innerHeight-document.getElementById("baseNavigation").offsetHeight-document.getElementById("buttons").offsetHeight,this.width=window.innerWidth,this.top=document.getElementById("baseNavigation").offsetHeight+70,this.height=window.innerHeight-document.getElementById("baseNavigation").offsetHeight-70;try{if(!confirmPer("camera"))return}catch(t){return}}},h=c,l=(i("61cd"),i("2877")),d=Object(l["a"])(h,n,a,!1,null,"0243bddc",null);e["default"]=d.exports},"61cd":function(t,e,i){"use strict";var n=i("ed8f"),a=i.n(n);a.a},ed8f:function(t,e,i){}}]);