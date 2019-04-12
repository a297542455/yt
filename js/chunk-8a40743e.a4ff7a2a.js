(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a40743e"],{"0e23":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",{staticClass:"name"},[o("h2",{staticStyle:{"text-align":"center",margin:"10px 0"}},[e._v("例行作业任务")]),o("div",{staticClass:"none"},[e._v(e._s(e.sentDataComputed))]),o("Form",{ref:"routineJobForm",attrs:{model:e.routineJobForm,"label-width":200,rules:e.routineJobFormValidate,id:"routineJobForm"}},[o("FormItem",{attrs:{label:"例行作业任务名称",prop:"routineJobName"}},[o("Input",{staticStyle:{width:"300px"},attrs:{maxlength:30,"element-id":"routineJobName"},model:{value:e.routineJobForm.routineJobName,callback:function(t){e.$set(e.routineJobForm,"routineJobName",t)},expression:"routineJobForm.routineJobName"}})],1),o("FormItem",{attrs:{label:"分类属性",prop:"keyCity",id:"routineJobKeyCity"}},[o("Cascader",{staticStyle:{width:"300px"},attrs:{data:e.keyGetCity},on:{"on-change":function(t){e.routineJobForm.jobElements=JSON.parse(JSON.stringify(e.jobElementsDefault))}},model:{value:e.routineJobForm.keyCity,callback:function(t){e.$set(e.routineJobForm,"keyCity",t)},expression:"routineJobForm.keyCity"}})],1),o("FormItem",{attrs:{label:"网元 -- 指令集"}},e._l(e.routineJobForm.jobElements,function(t,n){return o("div",[o("div",{staticStyle:{display:"flex"}},[o("div",{staticClass:"neOrder"},[o("Button",{attrs:{icon:"md-add",size:"small",type:"primary",id:"neChoose-"+n},on:{click:function(o){e.neChoose(t,n)}}},[e._v("选择网元")]),o("CellGroup",e._l(t.nets,function(e,t){return o("Cell",{key:e.neId,attrs:{title:e.neName}})}))],1),o("div",{staticClass:"neOrder"},[o("Button",{attrs:{icon:"md-add",size:"small",type:"primary",id:"orderChoose-"+n},on:{click:function(o){e.orderChoose(t,n)}}},[e._v("选择指令集")]),o("CellGroup",e._l(t.orderSets,function(e,t){return o("Cell",{key:e.orderSetId,attrs:{title:e.orderSetName}})}))],1)]),o("Divider")],1)})),o("FormItem",{attrs:{label:"开始日期",prop:"startTime",id:"routineJobStartTime"}},[o("DatePicker",{staticStyle:{width:"300px"},attrs:{type:"datetime",format:"yyyy/MM/dd HH:mm:ss",options:e.startTime},on:{"on-change":e.startTimeChange},model:{value:e.routineJobForm.startTime,callback:function(t){e.$set(e.routineJobForm,"startTime",t)},expression:"routineJobForm.startTime"}})],1),o("FormItem",{attrs:{label:"执行周期",prop:"executePeriod",id:"routineJobExecutePeriod"}},[o("Select",{staticStyle:{width:"300px"},model:{value:e.routineJobForm.executePeriod,callback:function(t){e.$set(e.routineJobForm,"executePeriod",t)},expression:"routineJobForm.executePeriod"}},[o("Option",{attrs:{value:"即时"}},[e._v("即时")]),o("Option",{attrs:{value:"单次"}},[e._v("单次")]),o("Option",{attrs:{value:"每小时"}},[e._v("每小时")]),o("Option",{attrs:{value:"每日"}},[e._v("每日")]),o("Option",{attrs:{value:"每周"}},[e._v("每周")]),o("Option",{attrs:{value:"每月"}},[e._v("每月")]),o("Option",{attrs:{value:"每季"}},[e._v("每季")]),o("Option",{attrs:{value:"半年"}},[e._v("半年")]),o("Option",{attrs:{value:"每年"}},[e._v("每年")])],1)],1),o("FormItem",{attrs:{label:"备注",prop:"remark"}},[o("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:10}},model:{value:e.routineJobForm.remark,callback:function(t){e.$set(e.routineJobForm,"remark",t)},expression:"routineJobForm.remark"}})],1),o("FormItem",["查看"!=e.btnName?o("Button",{attrs:{type:"primary",id:"routineJobFormSubmit1"},on:{click:function(t){e.routineJobFormSubmit("草稿")}}},[e._v("保存")]):e._e(),"查看"!=e.btnName?o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",id:"routineJobFormSubmit2"},on:{click:function(t){e.routineJobFormSubmit("关闭")}}},[e._v("提交")]):e._e(),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"warning"},on:{click:e.cancelReg}},[e._v("取消")])],1)],1)],1),o("Modal",{attrs:{title:"选择网元",width:"1200",id:"routineJobnetVisible"},on:{"on-ok":e.netElementsFormSubmit,"on-cancel":e.netElementsFormInit},model:{value:e.netVisible,callback:function(t){e.netVisible=t},expression:"netVisible"}},[o("Form",{ref:"netElementsForm",attrs:{model:e.netElementsForm,"label-width":200,id:"routineJobnetElementsForm"}},[o("FormItem",{attrs:{label:"加载方式"}},[o("RadioGroup",{attrs:{"label-in-value":!0},on:{"on-change":e.netElementsChange},model:{value:e.netElementsForm.netElementsType,callback:function(t){e.$set(e.netElementsForm,"netElementsType",t)},expression:"netElementsForm.netElementsType"}},[o("Radio",{attrs:{label:"通过筛选查询",id:"routineJobnet2"}}),o("Radio",{attrs:{label:"通过分组加载",id:"routineJobnet1"}})],1)],1),o("FormItem",{attrs:{label:"分类属性"}},[o("Cascader",{staticStyle:{width:"300px"},attrs:{data:e.keyGetCity,disabled:!0},model:{value:e.routineJobForm.keyCity,callback:function(t){e.$set(e.routineJobForm,"keyCity",t)},expression:"routineJobForm.keyCity"}})],1),"通过分组加载"==e.netElementsForm.netElementsType?o("FormItem",{attrs:{label:"我的分组"}},[o("Select",{staticStyle:{width:"300px"},on:{"on-change":e.groupChange},model:{value:e.netElementsForm.groupChoose,callback:function(t){e.$set(e.netElementsForm,"groupChoose",t)},expression:"netElementsForm.groupChoose"}},e._l(e.netElementsForm.neGroup,function(t,n){return o("Option",{key:t.groupName,attrs:{value:t.groupName}},[e._v(e._s(t.groupName))])}))],1):e._e(),o("FormItem",{attrs:{label:"网元选择"}},[o("div",{staticStyle:{"margin-bottom":"10px"}},[o("Button",{attrs:{type:"primary",disabled:!!e.netElementsForm.targetKeys&&0==e.netElementsForm.targetKeys.length},on:{click:function(t){e.saveNeVisible=!0}}},[e._v("保存分组")])],1),o("Transfer",{attrs:{id:"routineJobtransferNet",data:e.netElementsForm.netElementsData,"target-keys":e.netElementsForm.targetKeys,titles:["待选网元","已选网元"],filterable:""},on:{"on-change":e.handleChange}})],1)],1)],1),o("Modal",{attrs:{title:"选择指令集",width:"1200",id:"routineJoborderVisible"},on:{"on-ok":e.orderSetsFormSubmit,"on-cancel":e.orderSetsFormInit},model:{value:e.orderVisible,callback:function(t){e.orderVisible=t},expression:"orderVisible"}},[o("Form",{ref:"orderSetsForm",attrs:{model:e.orderSetsForm,"label-width":200,id:"orderSetsForm"}},[o("FormItem",{attrs:{label:"分类属性"}},[o("Cascader",{staticStyle:{width:"300px"},attrs:{data:e.keyGetSelect,disabled:!0},on:{"on-change":e.orderChange},model:{value:e.orderSetsForm.keySelect,callback:function(t){e.$set(e.orderSetsForm,"keySelect",t)},expression:"orderSetsForm.keySelect"}})],1),o("FormItem",{attrs:{label:"指令集选择"}},[o("Transfer",{attrs:{id:"routineJobtransferOrder",data:e.orderSetsForm.orderSetsData,"target-keys":e.orderSetsForm.targetKeys,titles:["待选指令集","已选指令集"],filterable:""},on:{"on-change":e.handleChange1}})],1)],1)],1),o("Modal",{attrs:{title:"保存网元分组",width:"700"},on:{"on-ok":e.saveNeFormSubmit,"on-cancel":function(t){e.groupName="新分组"}},model:{value:e.saveNeVisible,callback:function(t){e.saveNeVisible=t},expression:"saveNeVisible"}},[o("Form",{ref:"saveNeForm",attrs:{"label-width":200,id:"routineJobsaveNeForm"}},[o("FormItem",[o("RadioGroup",{attrs:{vertical:""},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},[o("Radio",{attrs:{label:"1"}},[o("span",[e._v("保存为新分组"),o("span",{staticStyle:{"margin-left":"10px"}},[o("Input",{staticStyle:{width:"200px"},attrs:{maxlength:30},model:{value:e.groupName,callback:function(t){e.groupName=t},expression:"groupName"}})],1)])]),"通过分组加载"==e.netElementsForm.netElementsType?o("Radio",{attrs:{label:"2"}},[o("span",[e._v("更新导入分组"),o("span",{staticStyle:{"margin-left":"10px"}},[o("Input",{staticStyle:{width:"200px"},attrs:{disabled:!0,maxlength:30},model:{value:e.netElementsForm.groupChoose,callback:function(t){e.$set(e.netElementsForm,"groupChoose",t)},expression:"netElementsForm.groupChoose"}})],1)])]):e._e()],1)],1)],1)],1)],1)},r=[],i=o("be94"),a=(o("7514"),o("7f7f"),o("6d67"),o("78ce"),{data:function(){return{netVisible:!1,orderVisible:!1,saveNeVisible:!1,jobNow:0,key:"1",groupName:"新分组",jobNowType:"",routineJobId:"",dataCityType:["operateCity","neCategory","neType","neProducer"],cityType:["city","bigType","subType","company"],dataType:["neCategory","neType","neProducer"],userInfo:JSON.parse(localStorage.getItem("userInfo")),btnName:"",opType:"占位",netType:"通过分组加载",startTime:{disabledDate:function(e){return e&&e.valueOf()<Date.now()-864e5}},routineJobForm:{},netElementsForm:{},orderSetsForm:{keySelect:[],orderSetsData:[],targetKeys:[]},jobElementsDefault:[{nets:[{}],orderSets:[{}],netData:{},orderData:{}}],routineJobFormValidate:{keyCity:[{required:!0,type:"array",message:"不能为空",trigger:"change"}],routineJobName:[{required:!0,message:"不能为空",trigger:"blur"}],executePeriod:[{required:!0,message:"不能为空",trigger:"change"}],startTime:[{required:!0,message:"日期不能为空!",trigger:"blur",pattern:/.+/}]}}},computed:{keyGetSelect:function(){return this.$store.state.yt.keySelectArray},keyGetCity:function(){return this.$store.state.yt.keyCityArray},sentDataComputed:function(){var e=this,t=this.routineJobForm.jobElements;return t&&t.length>0&&this.routineJobForm.jobElements.map(function(t,o){var n=[],r=t.netData.netElementsData;r&&r.length>0&&(t.netData.targetKeys.map(function(t,o){var i=e.getListDataById(t,r);i&&"{}"!=JSON.stringify(i)&&n.push({neName:i.label,id:i.id})}),t.nets=n);var i=[];r=t.orderData.orderSetsData;r&&r.length>0&&(t.orderData.targetKeys.map(function(t,o){var n=e.getListDataById(t,r);n&&"{}"!=JSON.stringify(n)&&i.push({orderSetName:n.label,orderSetId:n.id})}),t.orderSets=i)}),this.routineJobForm}},methods:{init:function(e,t){var o=this;this.routineJobFormInit(),this.netElementsFormInit(),this.orderSetsFormInit(),this.btnName=e,this.routineJobId=t?t.routineJobId:"","新增"==e?this.$emit("on-show"):"查看"==e?(this.$Message.info({content:"请不要在页面内修改,查看无法做保存功能",duration:10,closable:!0}),this.initRequest()):"修改"==e&&this.getRequest("/routinejob/routineJob/update?id="+t.routineJobId).then(function(e){0==e.code?o.initRequest():o.$Message.error({content:e.result,duration:10,closable:!0})})},initRequest:function(){var e=this;this.getRequest("/routinejob/routineJob/show?id="+this.routineJobId).then(function(t){if(0==t.code){0==t.content.jobElements.length&&(t.content.jobElements=JSON.parse(JSON.stringify(e.jobElementsDefault)));var o=t.content,n=[];n.push(o.operateCity,o.neCategory,o.neType,o.neProducer),t.content.keyCity=n,t.content.startTime=new Date(t.content.startTime),e.routineJobForm=t.content,e.$emit("on-show")}})},neChoose:function(e,t){var o=this;this.jobNow=t,e.netData&&"{}"!=JSON.stringify(e.netData)&&(this.netElementsForm=JSON.parse(JSON.stringify(e.netData)));var n={};if(this.routineJobForm.keyCity&&"[]"!==JSON.stringify(this.routineJobForm.keyCity))for(var r=this.routineJobForm.keyCity,i=0,a=r.length;i<a;i++)n[this.cityType[i]]=r[i];this.getRequest("/ne/neGroupManage/query",n).then(function(e){o.netElementsForm.neGroup=e,o.netElementsChange(o.netElementsForm.netElementsType,!1),o.netVisible=!0})},orderChoose:function(e,t){this.jobNow=t,e.orderData&&"{}"!=JSON.stringify(e.orderData)&&(this.orderSetsForm=JSON.parse(JSON.stringify(e.orderData))),this.orderSetsForm.keySelect=this.routineJobForm.keyCity.slice(1),this.orderChange(this.orderSetsForm.keySelect),this.orderVisible=!0},netElementsChange:function(e){var t=this,o=(!(arguments.length>1&&void 0!==arguments[1])||arguments[1],{});if(this.routineJobForm.keyCity&&"[]"!==JSON.stringify(this.routineJobForm.keyCity))for(var n=this.routineJobForm.keyCity,r=0,i=n.length;r<i;r++)o[this.cityType[r]]=n[r];"通过筛选查询"==e?this.getRequest("/routinejob/net",o).then(function(e){var o=[],n=e.content;n&&n.length&&(n.map(function(e,t){o.push({key:e.id,id:e.id,label:e.neName})}),t.netElementsForm.netElementsData=o)}):"通过分组加载"==e&&this.getRequest("/ne/neGroupManage/query",o).then(function(e){t.netElementsForm.neGroup=e,t.netElementsForm.netElementsData=[],t.groupChange(t.netElementsForm.groupChoose)})},groupChange:function(e){var t=this.getListData(e,this.netElementsForm.neGroup);if(t){var o=[];t.tbnets.map(function(e,t){o.push({key:e.id,id:e.id,label:e.name})}),this.netElementsForm.netElementsData=o}},jobElementsAdd:function(){this.routineJobForm.jobElements.push({nets:[{}],orderSets:[{}],netData:{},orderData:{}})},jobElementsDel:function(e){this.routineJobForm.jobElements.splice(e,1)},orderChange:function(e){var t=this,o={};e=this.orderSetsForm.keySelect;if(e&&"[]"!==JSON.stringify(e))for(var n=e,r=0,i=n.length;r<i;r++)o[this.dataType[r]]=n[r];this.getRequest("/routinejob/orderSet/listInsert",o).then(function(e){var o=[];e.content&&e.content.length&&e.content.map(function(e,t){o.push({key:e.orderSetId,id:e.orderSetId,label:e.orderSetName})}),t.orderSetsForm.orderSetsData=o})},getListData:function(e,t){var o={};return o=t.find(function(t){return t.groupName===e}),o},getListDataById:function(e,t){var o={};return o=t.find(function(t){return t.id==e}),o},netElementsFormSubmit:function(){this.routineJobForm.jobElements[this.jobNow].netData=JSON.parse(JSON.stringify(this.netElementsForm)),this.netElementsFormInit()},orderSetsFormSubmit:function(){this.routineJobForm.jobElements[this.jobNow].orderData=JSON.parse(JSON.stringify(this.orderSetsForm)),this.orderSetsFormInit()},routineJobFormInit:function(){this.$refs["routineJobForm"].resetFields(),this.routineJobForm={routineJobName:"",keyCity:[],jobElements:[{nets:[{}],orderSets:[{}],netData:{},orderData:{}}],startTime:new Date(Date.now()+36e5),executePeriod:"",remark:""}},netElementsFormInit:function(){this.netElementsForm={netElementsType:"通过筛选查询",groupChoose:"",neGroup:[],netElementsData:[],targetKeys:[]}},orderSetsFormInit:function(){this.orderSetsForm={keySelect:[],orderSetsData:[],targetKeys:[]}},startTimeChange:function(e){this.routineJobForm.startTime=e},handleChange:function(e){this.netElementsForm.targetKeys=e},handleChange1:function(e){this.orderSetsForm.targetKeys=e},routineJobFormSubmit:function(e){var t=this;this.$refs["routineJobForm"].validate(function(o){if(o){var n=!0,r=t.routineJobForm.jobElements;if(r&&r.length?r.map(function(e){e.netData.targetKeys&&e.netData.targetKeys.length&&e.orderData.targetKeys&&e.orderData.targetKeys.length||(n=!1)}):n=!1,!n)return void t.$Message.info({content:"网元或指令集不能为空,请修改",duration:10,closable:!0});var a={};if(t.routineJobForm.keyCity&&"[]"!==JSON.stringify(t.routineJobForm.keyCity))for(var s=t.routineJobForm.keyCity,l=0,u=s.length;l<u;l++)a[t.dataCityType[l]]=s[l];var m=Object(i["a"])({},t.routineJobForm,a,{routineJobId:1,jobStatus:e,startTime:new Date(t.routineJobForm.startTime),updater:t.userInfo.username,creater:t.userInfo.username,auditor:t.userInfo.username});"修改"==t.btnName?t.getRequest("/routinejob/routineJob/update?id="+t.routineJobId).then(function(e){0==e.code?(m.routineJobId=e.content.routineJobId,t.putYTRequest("/routinejob/routineJob",m).then(function(e){0==e.code?(t.$Message.success({content:t.btnName+"例行任务成功！确认任务开启后才开始执行",duration:10,closable:!0}),t.routineJobFormInit(),t.$emit("on-add")):t.$Message.warning({content:e.result,duration:10,closable:!0})})):t.$Message.warning({content:e.result,duration:10,closable:!0})}):t.postYTRequest("/routinejob/routineJob",m).then(function(e){0==e.code?(t.$Message.success({content:t.btnName+"例行任务成功！确认任务开启后才开始执行",duration:10,closable:!0}),t.routineJobFormInit(),t.$emit("on-add")):t.$Message.warning({content:e.result,duration:10,closable:!0})})}})},cancelReg:function(){var e=this;this.$Modal.confirm({title:"确定关闭该页面吗",onOk:function(){e.routineJobFormInit(),e.$emit("on-cancel")}})},saveNeFormSubmit:function(){var e=this,t={};if(this.routineJobForm.keyCity&&"[]"!==JSON.stringify(this.routineJobForm.keyCity))for(var o=this.routineJobForm.keyCity,n=0,r=o.length;n<r;n++)t[this.cityType[n]]=o[n];var a=Object(i["a"])({groupName:this.groupName},t),s="",l=this.netElementsForm.targetKeys;if(l&&l.length>0&&(l.map(function(t,o){var n=e.getListDataById(t,e.netElementsForm.netElementsData);"{}"!=JSON.stringify(n)&&(s+=n.id+",")}),a.neIDs=s.slice(0,-1)),1==this.key)this.postRequest("/ne/neGroupManage/addNeGroup",a).then(function(t){e.$Message.info(t.msg)});else if(2==this.key){t=this.getListData(this.groupName,this.netElementsForm.neGroup);"{}"!=JSON.stringify(t)&&(a.groupID=t.groupID),this.postRequest("/ne/neGroupManage/modifyNeGroup",a).then(function(t){e.$Message.info(t.msg)})}},created:function(){},mounted:function(){this.routineJobFormInit(),this.netElementsFormInit(),this.orderSetsFormInit()}}}),s=a,l=(o("5a7b"),o("2877")),u=Object(l["a"])(s,n,r,!1,null,null,null);u.options.__file="routineJobForm.vue";t["default"]=u.exports},"5a7b":function(e,t,o){"use strict";var n=o("fbfc"),r=o.n(n);r.a},7514:function(e,t,o){"use strict";var n=o("5ca1"),r=o("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")(i)},be94:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o("ade3");function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){Object(n["a"])(e,t,o[t])})}return e}},e5f5:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"\n#routineJobModal .neOrder{margin-right:10px;min-width:180px\n}\n#routineJobModal .ivu-cell{padding:4px\n}\n#routineJobModal .ivu-cell-title{line-height:18px;font-size:12px\n}\n#routineJobModal .ivu-cell-group{border:1px solid #e4e4e4;background:#e8e8e8;margin-top:8px\n}\n#routineJobModal .ivu-divider-horizontal{margin:12px 0\n}\n#orderSetsForm .ivu-btn+.ivu-btn,#routineJobnetElementsForm .ivu-btn+.ivu-btn{margin-left:0\n}\n#orderSetsForm .ivu-transfer-list,#routineJobnetElementsForm .ivu-transfer-list{width:400px\n}\n#routineJobsaveNeForm .ivu-radio-group-vertical .ivu-radio-wrapper{margin-bottom:10px\n}\n#jobDetailForm .ivu-table td{background-color:transparent\n}\n#jobDetailForm .abnormal{background-color:#f90!important\n}",""])},fbfc:function(e,t,o){var n=o("e5f5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("75663487",n,!0,{sourceMap:!1,shadowMode:!1})}}]);