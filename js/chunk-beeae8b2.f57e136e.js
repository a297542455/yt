(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-beeae8b2","chunk-2d0b90a5","chunk-2d22d9c9"],{"30f8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v(e._s(e.$t("search")))]),a("Button",{on:{click:e.handleReset}},[e._v(e._s(e.$t("reset")))])],1)},i=[],o={name:"search-button",props:{params:{type:Object,required:!0}},methods:{handleSearch:function(){this.params.pageNumber=1,this.params.pageSize=10,this.$emit("getList")},handleReset:function(){this.$emit("reset"),this.params.pageNumber=1,this.params.pageSize=10,this.$emit("getList")}}},r=o,n=a("2877"),c=Object(n["a"])(r,s,i,!1,null,null,null);c.options.__file="search-button.vue";t["default"]=c.exports},c118:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"backManage"},[a("Row",[a("Col",[a("Card",[a("Row",[a("Form",{ref:"backManageForm",attrs:{model:e.backManageForm,inline:"","label-width":85}},[a("FormItem",{attrs:{label:e.$t("workConfig.name"),prop:"name"}},[a("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:e.$t("workConfig.nameTip")},model:{value:e.backManageForm.name,callback:function(t){e.$set(e.backManageForm,"name",t)},expression:"backManageForm.name"}})],1),a("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[a("search-button",{attrs:{params:e.backManageForm},on:{reset:e.reset,getList:e.getBackManageFormList}})],1)],1)],1),a("table-grid",{attrs:{loading:e.loading,columns:e.columns,data:e.data,total:e.total,params:e.backManageForm,exportFromId:e.exportFromId,tableDelAll:e.tableDelAll},on:{getList:e.getBackManageFormList,add:e.add}})],1)],1)],1),a("Modal",{attrs:{title:e.modalTitle,width:600},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Form",{ref:"backForm",attrs:{model:e.backForm,"label-width":100,rules:e.backFormValidate}},[a("FormItem",{attrs:{label:e.$t("workConfig.name"),prop:"name"}},[a("Input",{attrs:{placeholder:e.$t("workConfig.nameTip"),readonly:e.isRead,autocomplete:"off"},model:{value:e.backForm.name,callback:function(t){e.$set(e.backForm,"name",t)},expression:"backForm.name"}})],1),a("FormItem",{attrs:{label:e.$t("workConfig.runClassName"),prop:"className"}},[a("Input",{attrs:{placeholder:e.$t("workConfig.runClassNameTip"),autocomplete:"off"},model:{value:e.backForm.className,callback:function(t){e.$set(e.backForm,"className",t)},expression:"backForm.className"}})],1),a("Row",[a("Col",{attrs:{span:e.cycleSpan}},[a("FormItem",{attrs:{label:e.$t("workConfig.cycleDate"),prop:"cycleDate"}},[a("Select",{attrs:{placeholder:e.$t("workConfig.cycleDateTip"),clearable:""},on:{"on-change":e.changeCycle},model:{value:e.backForm.cycleDate,callback:function(t){e.$set(e.backForm,"cycleDate",t)},expression:"backForm.cycleDate"}},e._l(e.cycleList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),e.showDay?a("span",[a("Col",{attrs:{span:8}},[a("FormItem",{attrs:{label:e.$t("workConfig.cycleDay"),prop:"cycleDay"}},[a("Select",{attrs:{placeholder:e.$t("workConfig.cycleDayTip"),clearable:""},model:{value:e.backForm.cycleDay,callback:function(t){e.$set(e.backForm,"cycleDay",t)},expression:"backForm.cycleDay"}},e._l(e.dayList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e(),e.showWeek?a("span",[a("Col",{attrs:{span:8}},[a("FormItem",{attrs:{label:e.$t("workConfig.cycleWeek"),prop:"cycleWeek"}},[a("Select",{attrs:{placeholder:e.$t("workConfig.cycleWeekTip"),clearable:""},model:{value:e.backForm.cycleWeek,callback:function(t){e.$set(e.backForm,"cycleWeek",t)},expression:"backForm.cycleWeek"}},e._l(e.weekList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e(),a("Col",{attrs:{span:e.cycleSpan}},[a("FormItem",{attrs:{label:e.$t("workConfig.cycleTime"),prop:"cycleTime"}},[a("TimePicker",{attrs:{format:"HH:mm",placeholder:e.$t("workConfig.cycleTimeTip")},model:{value:e.backForm.cycleTime,callback:function(t){e.$set(e.backForm,"cycleTime",t)},expression:"backForm.cycleTime"}})],1)],1)],1),a("FormItem",{attrs:{label:e.$t("param"),prop:"params"}},[a("Input",{attrs:{placeholder:e.$t("paramTip"),autocomplete:"off"},model:{value:e.backForm.params,callback:function(t){e.$set(e.backForm,"params",t)},expression:"backForm.params"}})],1),a("FormItem",{attrs:{label:e.$t("description"),prop:"description"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:5}},model:{value:e.backForm.description,callback:function(t){e.$set(e.backForm,"description",t)},expression:"backForm.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancelJob}},[e._v(e._s(e.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitJob}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)},i=[],o=(a("7f7f"),a("c5f6"),a("365c")),r=a("f7df"),n=a("30f8"),c={name:"back-manage",components:{"table-grid":r["default"],"search-button":n["default"]},data:function(){var e=this;return{backManageForm:{name:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},isRead:!1,loading:!1,total:0,data:[],columns:[{type:"index",width:60,align:"center"},{title:this.$t("workConfig.name"),key:"name",width:120,align:"center",sortable:!0},{title:this.$t("workConfig.status"),key:"status",width:70,align:"center",render:function(t,a){var s="";switch(a.row.status){case"NORMAL":s=e.$t("workConfig.normal");break;case"PAUSED":s=e.$t("workConfig.paused");break;case"COMPLETE":s=e.$t("workConfig.complete");break;case"ERROR":s=e.$t("workConfig.error");break;case"BLOCKED":s=e.$t("workConfig.blocked");break;default:s=e.$t("workConfig.nothing")}return t("span",s)}},{title:this.$t("workConfig.cronExpression"),key:"cronZh",width:130,align:"center"},{title:this.$t("workConfig.runClassName"),key:"className",width:150,align:"center",sortable:!0},{title:this.$t("workConfig.nextFireTime"),key:"nextFireTime",width:150,align:"center",sortable:!0},{title:this.$t("workConfig.prevFireTime"),key:"prevFireTime",width:150,align:"center",sortable:!0},{title:this.$t("operation"),key:"action",fixed:"right",width:280,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"primary",size:"small",icon:"md-power",shape:"circle"},attrs:{title:e.$t("workConfig.runTask")},style:{marginRight:"5px",display:"PAUSED"===a.row.status&&"BLOCKED"!==a.row.status?"inline-block":"none"},on:{click:function(){e.runTask(a.row)}}},e.$t("start")),t("Button",{props:{type:"success",size:"small",icon:"md-power",shape:"circle"},attrs:{title:e.$t("workConfig.runOnce")},style:{marginRight:"5px",display:"PAUSED"===a.row.status&&"BLOCKED"!==a.row.status?"inline-block":"none"},on:{click:function(){e.runOnce(a.row)}}},e.$t("workConfig.runOnce")),t("Button",{props:{type:"warning",size:"small",icon:"md-pause",shape:"circle"},attrs:{title:e.$t("workConfig.stopTask")},style:{marginRight:"5px",display:"NORMAL"===a.row.status&&"BLOCKED"!==a.row.status?"inline-block":"none"},on:{click:function(){e.stopTask(a.row)}}},e.$t("stop")),t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",display:"PAUSED"===a.row.status&&"BLOCKED"!==a.row.status?"inline-block":"none"},on:{click:function(){e.edit(a.row)}}},e.$t("edit")),t("Button",{props:{type:"error",size:"small"},style:{display:"PAUSED"===a.row.status&&"BLOCKED"!==a.row.status?"inline-block":"none"},on:{click:function(){e.remove(a.row)}}},e.$t("delete"))])}}],backForm:{name:"",className:"",cycleDate:"",cycleDay:"",cycleWeek:"",cycleTime:"00:00",params:"",description:""},backFormValidate:{name:[{required:!0,message:this.$t("workConfig.nameValid"),trigger:"blur"}],className:[{required:!0,message:this.$t("workConfig.runClassName"),trigger:"blur"}],cycleDate:[{type:"number",required:!0,message:this.$t("workConfig.cycleDateTip"),trigger:"change"}],cycleTime:[{required:!0,message:this.$t("workConfig.cycleTimeTip"),trigger:"blur"}]},cycleList:[],dayList:[],weekList:[],cycleSpan:12,showDay:!1,showWeek:!1,modalTitle:"",modalVisible:!1,submitLoading:!1,tableDelAll:!1,modalType:0,delUrl:"/backup/web/jobScheduler/delByIds",exportFromId:""}},methods:{init:function(){this.getBackManageFormList(),this.initWeek()},getBackManageFormList:function(){var e=this;this.loading=!0,Object(o["K"])(this.backManageForm).then(function(t){e.loading=!1,0===t.code&&(e.data=t.content.content,e.total=t.content.totalElements)})},reset:function(){this.$refs.backManageForm.resetFields()},add:function(){this.modalType=0,this.isRead=!1,this.modalTitle=this.$t("workConfig.addWork"),this.$refs.backForm.resetFields(),this.initCycleDate(),this.clearCycle(),this.resetCycle(),this.modalVisible=!0},edit:function(e){for(var t in this.modalType=1,this.isRead=!0,this.modalTitle=this.$t("workConfig.editWork"),this.$refs.backForm.resetFields(),this.initCycleDate(),this.resetCycle(),e)null===e[t]&&(e[t]="");var a=e.cycleCronExpressionVO,s=JSON.stringify(e),i=JSON.parse(s);for(var o in this.backForm=i,a)null!==a[o]&&void 0!==a[o]||(a[o]="");this.backForm.cycleDate=Number(a.cycleDate),this.changeCycle(this.backForm.cycleDate),this.backForm.cycleDay=Number(a.cycleDay),this.backForm.cycleWeek=Number(a.cycleWeek),this.backForm.cycleTime=a.cycleTime,this.modalVisible=!0},remove:function(e){var t=this;this.$Modal.confirm({title:this.$t("confirmDelete"),content:this.$t("workConfig.confirmDelete")+" "+e.name+"?",onOk:function(){var a={ids:e.id};Object(o["p"])(t.delUrl,a).then(function(e){0===e.code&&(t.$Message.success(t.$t("deleteSuccess")),t.getBackManageFormList())})}})},changeCycle:function(e){switch(this.clearCycle(),e){case 0:this.cycleSpan=12,this.showWeek=!1,this.showDay=!1;break;case 1:this.cycleSpan=12,this.showWeek=!1,this.showDay=!1;break;case 2:this.cycleSpan=8,this.showWeek=!0,this.showDay=!1;break;case 3:this.cycleSpan=8,this.showWeek=!1,this.showDay=!0;var t=(new Date).getMonth(0)+1;this.dayList=this.getDayArr(t);break;default:break}},getDayArr:function(e){for(var t=this.getDays(e),a=[],s=1;s<=t;s++)a[s-1]={id:s,text:s};return a},getDays:function(e){var t=0;return t=2==e?this.year%4===0?29:28:1==e||3==e||5==e||7==e||8==e||10==e||12==e?31:30,t},initWeek:function(){for(var e=["周日","周一","周二","周三","周四","周五","周六"],t=[],a=0;a<e.length;a++)t[a]={id:a+1,text:e[a]};this.weekList=t},initCycleDate:function(){var e=this;Object(o["I"])().then(function(t){if(0===t.code){for(var a=[],s=t.content,i=0;i<4;i++)a.push(s[i]);e.cycleList=a}})},clearCycle:function(){this.backForm.cycleDay="",this.backForm.cycleWeek=""},resetCycle:function(){this.showDay=!1,this.showWeek=!1,this.cycleSpan=12},changeStatus:function(e,t){var a=this,s={id:t};e?startCron(s).then(function(e){200===e.code&&a.$Message.success("Success")}):stopCron(s).then(function(e){200===e.code&&a.$Message.success("Success")})},cycleValidate:function(e){var t=!0;switch(e){case 0:"00:00"===this.backForm.cycleTime&&(this.$Message.warning(this.$t("workConfig.cycleTimeSetTip")),t=!1);break;case 2:""===this.backForm.cycleWeek&&(this.$Message.warning(this.$t("workConfig.cycleWeekTip")),t=!1);break;case 3:""===this.backForm.cycleDay&&(this.$Message.warning(this.$t("workConfig.cycleDayTip")),t=!1);break;default:break}return t},runTask:function(e){var t=this;this.$Modal.confirm({title:this.$t("workConfig.runTask"),content:this.$t("workConfig.confirmRunTask")+" "+e.name+"?",onOk:function(){var a={schedulerId:e.id,isRunExpTime:!0};Object(o["d"])(a).then(function(e){0===e.code&&(t.$Message.success(t.$t("operationSuccess")),t.getBackManageFormList())})}})},stopTask:function(e){var t=this;this.$Modal.confirm({title:this.$t("workConfig.stopTask"),content:this.$t("workConfig.confirmStopTask")+" "+e.name+"?",onOk:function(){var a={schedulerId:e.id};Object(o["e"])(a).then(function(e){0===e.code&&(t.$Message.success(t.$t("operationSuccess")),t.getBackManageFormList())})}})},runOnce:function(e){var t=this;this.$Modal.confirm({title:this.$t("workConfig.runOnce"),content:this.$t("workConfig.confirmRunOnce")+" "+e.name+"?",onOk:function(){var a={schedulerId:e.id};Object(o["f"])(a).then(function(e){0===e.code&&(t.$Message.success(t.$t("operationSuccess")),t.getBackManageFormList())})}})},cancelJob:function(){this.modalVisible=!1},submitJob:function(){var e=this;this.$refs.backForm.validate(function(t){if(t){if(!e.cycleValidate(e.backForm.cycleDate))return;e.submitLoading=!0,0===e.modalType&&delete e.backForm.id,delete e.backForm.cycleCronExpressionVO,Object(o["g"])(e.backForm).then(function(t){e.submitLoading=!1,0===t.code&&(e.$Message.success(e.$t("operationSuccess")),e.getBackManageFormList(),e.modalVisible=!1)}).catch(function(t){e.submitLoading=!1,console.log(t)})}})}},mounted:function(){this.init()}},l=c,m=a("2877"),u=Object(m["a"])(l,s,i,!1,null,null,null);u.options.__file="backManage.vue";t["default"]=u.exports},f7df:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{staticClass:"br",staticStyle:{"margin-bottom":"2vh"}},[this.tableAdd?a("span",[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v(e._s(e.$t("add")))])],1):e._e(),this.tableDelAll?a("span",[a("Button",{attrs:{type:"error",icon:"md-trash"},on:{click:e.delAll}},[e._v(e._s(e.$t("batchDelete")))])],1):e._e(),this.tableRefresh?a("span",[a("Button",{attrs:{type:"success",icon:"md-refresh"},on:{click:e.refresh}},[e._v(e._s(e.$t("refresh")))])],1):e._e(),""!==this.exportFromId?a("span",[a("export-button",{attrs:{exportParams:e.params,exportUrl:e.exportUrl,exportFromId:e.exportFromId}})],1):e._e()]),a("Row",[this.tableDelAll?a("span",[a("Alert",{attrs:{"show-icon":""}},[e._v("\n                "+e._s(e.$t("hasSelected"))+" "),a("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" "+e._s(e.$t("items"))+"\n                "),a("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v(e._s(e.$t("clear")))])])],1):e._e()]),a("Row",[a("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.showSelect,"on-row-dblclick":e.dblclick}})],1),a("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[a("Page",{attrs:{current:e.pageNumber,total:e.total,"page-size":e.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)},i=[],o=(a("ac6a"),a("f3e2"),a("c5f6"),a("365c")),r=a("3eac"),n={name:"table-grid",components:{"export-button":r["default"]},data:function(){return{pageNumber:1,pageSize:10,selectCount:0,selectList:[]}},props:{loading:{type:Boolean,required:!0},columns:{type:Array,required:!0},data:{type:Array,required:!0},total:{type:Number,required:!0},delAllUrl:{type:String,default:""},params:{type:Object,required:!0},exportUrl:{type:String,default:""},exportFromId:{type:String,default:""},tableAdd:{type:Boolean,default:!0},tableDelAll:{type:Boolean,default:!0},tableRefresh:{type:Boolean,default:!0}},methods:{add:function(){this.$emit("add")},delAll:function(){var e=this;""!==this.delAllUrl?this.selectCount<=0?this.$Message.warning(this.$t("deleteTip")):this.$Modal.confirm({title:this.$t("confirmDelete"),content:this.$t("deleteContent1")+this.selectCount+this.$t("deleteContent2")+"？",onOk:function(){var t="";e.selectList.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1);var a={ids:t};Object(o["p"])(e.delAllUrl,a).then(function(t){0===t.code&&(e.$Message.success(e.$t("deleteSuccess")),e.clearSelectAll(),e.$emit("getList"))})}}):this.$Message.warning(this.$t("deleteInvalidTip"))},refresh:function(){this.$emit("getList")},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSort:function(e){this.params.sort=e.key,this.params.order=e.order,"normal"===e.order&&(this.params.order=""),this.$emit("getList")},showSelect:function(e){this.selectList=e,this.selectCount=e.length},changePage:function(e){this.params.pageNumber=e,this.$emit("getList"),this.clearSelectAll()},changePageSize:function(e){this.params.pageSize=e,this.$emit("getList")},dblclick:function(e,t,a){this.$emit("dblclick",e)}}},c=n,l=a("2877"),m=Object(l["a"])(c,s,i,!1,null,null,null);m.options.__file="table-grid.vue";t["default"]=m.exports}}]);