(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-311d49aa"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,r){"use strict";var c=a("aae3"),n=r,i=[].push,o="split",l="length",u="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[l]||2!="ab"[o](/(?:ab)*/)[l]||4!="."[o](/(.?)(.?)/)[l]||"."[o](/()()/)[l]>1||""[o](/.?/)[l]){var s=void 0===/()??/.exec("")[1];r=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!c(e))return n.call(a,e,t);var r,o,b,d,y,p=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?4294967295:t>>>0,D=new RegExp(e.source,m+"g");s||(r=new RegExp("^"+D.source+"$(?!\\s)",m));while(o=D.exec(a)){if(b=o.index+o[0][l],b>f&&(p.push(a.slice(f,o.index)),!s&&o[l]>1&&o[0].replace(r,function(){for(y=1;y<arguments[l]-2;y++)void 0===arguments[y]&&(o[y]=void 0)}),o[l]>1&&o.index<a[l]&&i.apply(p,o.slice(1)),d=o[0][l],f=b,p[l]>=h))break;D[u]===o.index&&D[u]++}return f===a[l]?!d&&D.test("")||p.push(""):p.push(a.slice(f)),p[l]>h?p.slice(0,h):p}}else"0"[o](void 0,0)[l]&&(r=function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)});return[function(a,c){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,c):r.call(String(n),a,c)},r]})},3209:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"backupJobDetailConfig"},[a("Card",[a("Row",[a("Alert",[a("h1",{staticStyle:{color:"#A0522D"}},[a("Icon",{attrs:{type:"md-add-circle"}}),e._v("  "+e._s(e.$t("backupJobDetail.jobDetailConfig")))],1)])],1),a("Divider"),a("Row",[a("Form",{ref:"jobDetailForm",attrs:{model:e.jobDetailForm,"label-width":90,rules:e.jobDetailFormValidate}},[a("FormItem",{attrs:{label:e.$t("name"),prop:"name"}},[a("Input",{attrs:{placeholder:e.$t("backupJobDetail.nameTip"),readonly:e.isReadonly,autocomplete:"off"},model:{value:e.jobDetailForm.name,callback:function(t){e.$set(e.jobDetailForm,"name",t)},expression:"jobDetailForm.name"}})],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.serverId"),prop:"serverId"}},[a("Select",{attrs:{placeholder:e.$t("backupJobDetail.serverIdTip"),clearable:""},model:{value:e.jobDetailForm.serverId,callback:function(t){e.$set(e.jobDetailForm,"serverId",t)},expression:"jobDetailForm.serverId"}},e._l(e.serverList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.areaId"),prop:"areaId"}},[a("Select",{attrs:{placeholder:e.$t("backupJobDetail.areaIdTip"),clearable:""},on:{"on-change":e.changeArea},model:{value:e.jobDetailForm.areaId,callback:function(t){e.$set(e.jobDetailForm,"areaId",t)},expression:"jobDetailForm.areaId"}},e._l(e.areaList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1)],1),a("Row",[a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.deviceId"),prop:"deviceId"}},[a("Select",{attrs:{filterable:"",placeholder:e.$t("backupJobDetail.deviceIdTip"),clearable:""},on:{"on-change":e.changeDevice},model:{value:e.jobDetailForm.deviceId,callback:function(t){e.$set(e.jobDetailForm,"deviceId",t)},expression:"jobDetailForm.deviceId"}},e._l(e.deviceList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.deviceName))])}))],1)],1),a("Col",{attrs:{span:12}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.path"),prop:"path"}},[a("Input",{attrs:{placeholder:e.$t("backupJobDetail.pathTip"),autocomplete:"off"},model:{value:e.jobDetailForm.path,callback:function(t){e.$set(e.jobDetailForm,"path",t)},expression:"jobDetailForm.path"}})],1)],1)],1),a("Row",[a("Col",{attrs:{span:19}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.connectionIds"),prop:"connectionIds"}},[a("Select",{attrs:{filterable:"",multiple:"",placeholder:e.$t("backupJobDetail.connectionIdsTip")},model:{value:e.jobDetailForm.connectionIds,callback:function(t){e.$set(e.jobDetailForm,"connectionIds",t)},expression:"jobDetailForm.connectionIds"}},e._l(e.neList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1),a("Col",{attrs:{span:5}},[e._v("\n                        \n                    "),a("Button",{attrs:{type:"success",icon:"md-checkmark-circle"},on:{click:e.selectAll}},[e._v(e._s(e.$t("selectAll")))]),e._v("\n                      \n                    "),a("Button",{attrs:{type:"error",icon:"md-close"},on:{click:e.clearAll}},[e._v(e._s(e.$t("clear")))])],1)],1),a("Row",[a("Col",{attrs:{span:e.cycleSpan}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleDate"),prop:"cycleDate"}},[a("Select",{attrs:{placeholder:e.$t("backupJobDetail.cycleDateTip"),clearable:""},on:{"on-change":e.changeCycle},model:{value:e.jobDetailForm.cycleDate,callback:function(t){e.$set(e.jobDetailForm,"cycleDate",t)},expression:"jobDetailForm.cycleDate"}},e._l(e.cycleList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),e.showDay?a("span",[a("Col",{attrs:{span:8}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleDay"}},[a("Select",{attrs:{placeholder:e.$t("backupJobDetail.backupCycleDayTip"),clearable:""},model:{value:e.jobDetailForm.cycleDay,callback:function(t){e.$set(e.jobDetailForm,"cycleDay",t)},expression:"jobDetailForm.cycleDay"}},e._l(e.dayList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e(),e.showWeek?a("span",[a("Col",{attrs:{span:8}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleWeek"),prop:"cycleWeek"}},[a("Select",{attrs:{placeholder:e.$t("backupJobDetail.backupCycleWeekTip"),clearable:""},model:{value:e.jobDetailForm.cycleWeek,callback:function(t){e.$set(e.jobDetailForm,"cycleWeek",t)},expression:"jobDetailForm.cycleWeek"}},e._l(e.weekList,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e(),a("Col",{attrs:{span:e.cycleSpan}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleTime"),prop:"cycleTime"}},[a("TimePicker",{staticStyle:{width:"270px"},attrs:{format:"HH:mm",placeholder:e.$t("backupJobDetail.cycleTimeTip")},model:{value:e.jobDetailForm.cycleTime,callback:function(t){e.$set(e.jobDetailForm,"cycleTime",t)},expression:"jobDetailForm.cycleTime"}})],1)],1)],1),a("Row",[e.showQuarter?a("span",[a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.firstQuarter")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleQuarterMon1"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon1},model:{value:e.jobDetailForm.cycleQuarterMon1,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterMon1",t)},expression:"jobDetailForm.cycleQuarterMon1"}},e._l(e.mon1List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleQuarterDay1"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleQuarterDay1,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterDay1",t)},expression:"jobDetailForm.cycleQuarterDay1"}},e._l(e.day1List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.secondQuarter")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleQuarterMon2"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon2},model:{value:e.jobDetailForm.cycleQuarterMon2,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterMon2",t)},expression:"jobDetailForm.cycleQuarterMon2"}},e._l(e.mon2List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleQuarterDay2"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleQuarterDay2,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterDay2",t)},expression:"jobDetailForm.cycleQuarterDay2"}},e._l(e.day2List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.thirdQuarter")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleQuarterMon3"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon3},model:{value:e.jobDetailForm.cycleQuarterMon3,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterMon3",t)},expression:"jobDetailForm.cycleQuarterMon3"}},e._l(e.mon3List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleQuarterDay3"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleQuarterDay3,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterDay3",t)},expression:"jobDetailForm.cycleQuarterDay3"}},e._l(e.day3List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.fourthQuarter")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleQuarterMon4"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon4},model:{value:e.jobDetailForm.cycleQuarterMon4,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterMon4",t)},expression:"jobDetailForm.cycleQuarterMon4"}},e._l(e.mon4List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleQuarterDay4"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleQuarterDay4,callback:function(t){e.$set(e.jobDetailForm,"cycleQuarterDay4",t)},expression:"jobDetailForm.cycleQuarterDay4"}},e._l(e.day4List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e(),e.showHalfYear?a("span",[a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.firstHarfYear")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleHarfyearMon5"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon5},model:{value:e.jobDetailForm.cycleHarfyearMon5,callback:function(t){e.$set(e.jobDetailForm,"cycleHarfyearMon5",t)},expression:"jobDetailForm.cycleHarfyearMon5"}},e._l(e.mon5List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleHarfyearDay5"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleHarfyearDay5,callback:function(t){e.$set(e.jobDetailForm,"cycleHarfyearDay5",t)},expression:"jobDetailForm.cycleHarfyearDay5"}},e._l(e.day5List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:1}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.secondHalf")}})],1),a("Col",{attrs:{span:5}},[a("FormItem",{attrs:{label:e.$t("backupJobDetail.cycleMonth"),prop:"cycleHarfyearMon6"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},on:{"on-change":e.changeMon6},model:{value:e.jobDetailForm.cycleHarfyearMon6,callback:function(t){e.$set(e.jobDetailForm,"cycleHarfyearMon6",t)},expression:"jobDetailForm.cycleHarfyearMon6"}},e._l(e.mon6List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1),a("Col",{attrs:{span:6}},[a("FormItem",{staticStyle:{"margin-left":"-7px"},attrs:{label:e.$t("backupJobDetail.cycleDay"),prop:"cycleHarfyearDay6"}},[a("Select",{staticStyle:{width:"180px"},attrs:{clearable:""},model:{value:e.jobDetailForm.cycleHarfyearDay6,callback:function(t){e.$set(e.jobDetailForm,"cycleHarfyearDay6",t)},expression:"jobDetailForm.cycleHarfyearDay6"}},e._l(e.day6List,function(t){return a("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.text))])}))],1)],1)],1):e._e()]),a("Row",[a("FormItem",{attrs:{label:e.$t("backupJobDetail.smsNotify")}},[a("span",[e._v(e._s(this.smsNotify))])])],1),a("FormItem",{attrs:{label:e.$t("description"),prop:"description"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:5}},model:{value:e.jobDetailForm.description,callback:function(t){e.$set(e.jobDetailForm,"description",t)},expression:"jobDetailForm.description"}})],1)],1),a("span",{staticStyle:{"text-align":"center",display:"block"}},[a("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitJobDetail}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],1)},c=[],n=(a("c5f6"),a("28a5"),a("7514"),a("7f7f"),a("365c")),i=a("a78e"),o=a.n(i),l={name:"backup-job-detail-config",data:function(){return{submitLoading:!1,isReadonly:!1,modalType:0,smsNotify:"",jobDetailForm:{name:"",serverId:"",areaId:"",deviceId:"",connectionIds:"",cycleDate:"",cycleTime:"00:00",path:"",description:"",cycleDay:"",cycleWeek:"",cycleQuarterMon1:"",cycleQuarterDay1:"",cycleQuarterMon2:"",cycleQuarterDay2:"",cycleQuarterMon3:"",cycleQuarterDay3:"",cycleQuarterMon4:"",cycleQuarterDay4:"",cycleHarfyearMon5:"",cycleHarfyearDay5:"",cycleHarfyearMon6:"",cycleHarfyearDay6:""},jobDetailFormValidate:{name:[{required:!0,message:this.$t("backupJobDetail.nameValid"),trigger:"blur"}],serverId:[{type:"number",required:!0,message:this.$t("backupJobDetail.serverIdTip"),trigger:"change"}],areaId:[{type:"number",required:!0,message:this.$t("backupJobDetail.areaIdTip"),trigger:"change"}],deviceId:[{type:"number",required:!0,message:this.$t("backupJobDetail.deviceIdTip"),trigger:"change"}],connectionIds:[{type:"array",required:!0,message:this.$t("backupJobDetail.connectionIdsTip"),trigger:"change"}],cycleDate:[{type:"number",required:!0,message:this.$t("backupJobDetail.cycleDateTip"),trigger:"change"}],cycleTime:[{required:!0,message:this.$t("backupJobDetail.cycleTimeTip"),trigger:"blur"}],path:[{required:!0,message:this.$t("backupJobDetail.pathValid"),trigger:"blur"}]},serverList:[],areaList:[],deviceList:[],neList:[],cycleList:[],showDay:!1,showWeek:!1,dayList:[],weekList:[],cycleSpan:12,showQuarter:!1,showHalfYear:!1,day1List:[],mon1List:[],day2List:[],mon2List:[],day3List:[],mon3List:[],day4List:[],mon4List:[],day5List:[],mon5List:[],mon6List:[],day6List:[],year:(new Date).getFullYear()}},methods:{init:function(){this.initWeek(),this.initMonth(),this.initArea(),this.getSmsUser(),this.initDevice(),this.initServer(),this.initCycleDate(),this.resetCycle()},initCycleDate:function(){var e=this;Object(n["ab"])().then(function(t){0===t.code&&(e.cycleList=t.content)})},initWeek:function(){for(var e=["周日","周一","周二","周三","周四","周五","周六"],t=[],a=0;a<e.length;a++)t[a]={id:a+1,text:e[a]};this.weekList=t},initMonth:function(){for(var e=[[1,"一月"],[2,"二月"],[3,"三月"]],t=[[4,"四月"],[5,"五月"],[6,"六月"]],a=[[7,"七月"],[8,"八月"],[9,"九月"]],r=[[10,"十月"],[11,"十一月"],[12,"十二月"]],c=[],n=0;n<e.length;n++)c[n]={id:e[n][0],text:e[n][1]};this.mon1List=c;for(var i=[],o=0;o<t.length;o++)i[o]={id:t[o][0],text:t[o][1]};this.mon2List=i;for(var l=[],u=0;u<a.length;u++)l[u]={id:a[u][0],text:a[u][1]};this.mon3List=l;for(var s=[],b=0;b<r.length;b++)s[b]={id:r[b][0],text:r[b][1]};this.mon4List=s;for(var d=[],y=e.concat(t),p=0;p<y.length;p++)d[p]={id:y[p][0],text:y[p][1]};this.mon5List=d;for(var m=[],f=a.concat(r),h=0;h<f.length;h++)m[h]={id:f[h][0],text:f[h][1]};this.mon6List=m},changeMon1:function(e){this.day1List=this.getDayArr(e),this.jobDetailForm.cycleQuarterDay1=""},changeMon2:function(e){this.day2List=this.getDayArr(e),this.jobDetailForm.cycleQuarterDay2=""},changeMon3:function(e){this.day3List=this.getDayArr(e),this.jobDetailForm.cycleQuarterDay3=""},changeMon4:function(e){this.day4List=this.getDayArr(e),this.jobDetailForm.cycleQuarterDay4=""},changeMon5:function(e){this.day5List=this.getDayArr(e),this.jobDetailForm.cycleHarfyearDay5=""},changeMon6:function(e){this.day6List=this.getDayArr(e),this.jobDetailForm.cycleHarfyearDay6=""},getDayArr:function(e){for(var t=this.getDays(e),a=[],r=1;r<=t;r++)a[r-1]={id:r,text:r};return a},getDays:function(e){var t=0;return t=2==e?this.year%4===0?29:28:1==e||3==e||5==e||7==e||8==e||10==e||12==e?31:30,t},resetCycle:function(){this.showDay=!1,this.showWeek=!1,this.cycleSpan=12,this.showQuarter=!1,this.showHalfYear=!1},changeCycle:function(e){switch(this.clearCycle(),e){case 1:this.cycleSpan=12,this.showWeek=!1,this.showDay=!1,this.showQuarter=!1,this.showHalfYear=!1;break;case 2:this.cycleSpan=8,this.showWeek=!0,this.showDay=!1,this.showQuarter=!1,this.showHalfYear=!1;break;case 3:this.cycleSpan=8,this.showWeek=!1,this.showDay=!0,this.showQuarter=!1,this.showHalfYear=!1;var t=(new Date).getMonth(0)+1;this.dayList=this.getDayArr(t);break;case 4:this.cycleSpan=12,this.showWeek=!1,this.showDay=!1,this.showQuarter=!0,this.showHalfYear=!1;break;case 5:this.cycleSpan=12,this.showWeek=!1,this.showDay=!1,this.showQuarter=!1,this.showHalfYear=!0;break;default:break}},clearCycle:function(){this.jobDetailForm.cycleDay="",this.jobDetailForm.cycleWeek="",this.jobDetailForm.cycleQuarterMon1="",this.jobDetailForm.cycleQuarterDay1="",this.jobDetailForm.cycleQuarterMon2="",this.jobDetailForm.cycleQuarterDay2="",this.jobDetailForm.cycleQuarterMon3="",this.jobDetailForm.cycleQuarterDay3="",this.jobDetailForm.cycleQuarterMon4="",this.jobDetailForm.cycleQuarterDay4="",this.jobDetailForm.cycleHarfyearMon5="",this.jobDetailForm.cycleHarfyearDay5="",this.jobDetailForm.cycleHarfyearMon6="",this.jobDetailForm.cycleHarfyearDay6=""},initDevice:function(){var e=this;Object(n["D"])().then(function(t){0===t.code&&(e.deviceList=t.content)})},initServer:function(){var e=this;Object(n["E"])().then(function(t){0===t.code&&(e.serverList=t.content)})},initArea:function(){var e=this;Object(n["C"])().then(function(t){0===t.code&&(e.areaList=t.content)})},submitJobDetail:function(){var e=this;this.$refs.jobDetailForm.validate(function(t){if(t){if(!e.validateCycle())return void e.$Message.warning(e.$t("backupJobDetail.cycleTip"));e.submitLoading=!0,0===e.modalType&&delete e.jobDetailForm.id,delete e.jobDetailForm.cycleCronExpressionVO,Object(n["Hb"])(e.jobDetailForm).then(function(t){if(e.submitLoading=!1,0===t.code){if(null===t.content.name)return void e.$Message.warning(e.$t("backupJobDetail.nameDuplicate"));e.$Message.success(e.$t("operationSuccess")),e.$store.commit("removeTag","backup-job-detail-config"),e.$store.commit("closePage","backup-job-detail-config");var a=e.$store.state.app.pageOpenedList;localStorage.pageOpenedList=JSON.stringify(a),e.$store.commit("setJobDatailRefresh","refresh"),e.$router.push({name:"backup-job-detail"})}})}})},validateCycle:function(){var e=this.jobDetailForm.cycleDate,t=!1;switch(e){case 1:t=!0;break;case 2:this.jobDetailForm.cycleWeek&&(t=!0);break;case 3:this.jobDetailForm.cycleDay&&(t=!0);break;case 4:this.jobDetailForm.cycleQuarterMon1&&this.jobDetailForm.cycleQuarterDay1&&this.jobDetailForm.cycleQuarterMon2&&this.jobDetailForm.cycleQuarterDay2&&this.jobDetailForm.cycleQuarterMon3&&this.jobDetailForm.cycleQuarterDay3&&this.jobDetailForm.cycleQuarterMon4&&this.jobDetailForm.cycleQuarterDay4&&(t=!0);break;case 5:this.jobDetailForm.cycleHarfyearMon5&&this.jobDetailForm.cycleHarfyearDay5&&this.jobDetailForm.cycleHarfyearMon6&&this.jobDetailForm.cycleHarfyearDay6&&(t=!0);break;default:break}return t},changeDevice:function(e){var t=this;if(void 0!==e){if(0===this.modalType){var a=this.deviceList.find(function(e){return e.id===t.jobDetailForm.deviceId})["deviceName"];this.jobDetailForm.name=a}if(this.jobDetailForm.connectionIds="",this.neList=[],""===this.jobDetailForm.areaId||void 0===this.jobDetailForm.areaId)return;this.getNeByDeviceIdAndAreaId(e,this.jobDetailForm.areaId)}},changeArea:function(e){var t=this;if(void 0!==e)if(this.jobDetailForm.connectionIds="",this.neList=[],""===this.jobDetailForm.deviceId||void 0===this.jobDetailForm.deviceId){var a={areaId:e};Object(n["U"])(a).then(function(e){0===e.code&&t.getNeList(e.content)})}else this.getNeByDeviceIdAndAreaId(this.jobDetailForm.deviceId,e)},getNeByDeviceIdAndAreaId:function(e,t){var a=this,r={deviceId:e,areaId:t};Object(n["V"])(r).then(function(e){0===e.code&&a.getNeList(e.content)})},getNeList:function(e){this.neList=[];for(var t=0;t<e.length;t++){var a={id:e[t].id,name:e[t].connName};this.neList.push(a)}},getSmsUser:function(){var e=JSON.parse(o.a.get("userInfo"));this.smsNotify=e.username},clearFrom:function(){this.jobDetailForm.name="",this.jobDetailForm.serverId="",this.jobDetailForm.areaId="",this.jobDetailForm.deviceId="",this.jobDetailForm.connectionIds="",this.jobDetailForm.cycleDate="",this.jobDetailForm.cycleTime="00:00",this.jobDetailForm.path="",this.jobDetailForm.description=""},resetForm:function(){void 0!==this.$refs.jobDetailForm&&this.$refs.jobDetailForm.resetFields()},edit:function(){var e=this,t=this.$store.state.app.jobDatailData;for(var a in this.neList=[],this.resetForm(),this.clearFrom(),this.init(),this.modalType=1,this.isReadonly=!0,t)null!==t[a]&&void 0!==t[a]||(t[a]="");var r=t.cycleCronExpressionVO,c=JSON.stringify(t),i=JSON.parse(c);if(this.jobDetailForm=i,this.assignCycle(r),t.connectionIds){for(var o=t.connectionIds.split(","),l=[],u=0;u<o.length;u++)l[u]=Number(o[u]);var s={deviceId:this.jobDetailForm.deviceId,areaId:this.jobDetailForm.areaId};Object(n["V"])(s).then(function(t){0===t.code&&(e.getNeList(t.content),e.jobDetailForm.connectionIds=l)})}},assignCycle:function(e){for(var t in e)null!==e[t]&&void 0!==e[t]||(e[t]="");""!==this.jobDetailForm.cycleQuarterMon1&&(this.day1List=this.getDayArr(Number(e.cycleQuarterMon1)),this.day2List=this.getDayArr(Number(e.cycleQuarterMon2)),this.day3List=this.getDayArr(Number(e.cycleQuarterMon3)),this.day4List=this.getDayArr(Number(e.cycleQuarterMon4))),""!==this.jobDetailForm.cycleHarfyearMon5&&(this.day5List=this.getDayArr(Number(e.cycleHarfyearMon5)),this.day6List=this.getDayArr(Number(e.cycleHarfyearMon6))),this.jobDetailForm.cycleDate=Number(e.cycleDate),this.changeCycle(this.jobDetailForm.cycleDate),this.jobDetailForm.cycleTime=e.cycleTime,this.jobDetailForm.cycleDay=Number(e.cycleDay),this.jobDetailForm.cycleWeek=Number(e.cycleWeek),this.jobDetailForm.cycleQuarterMon1=Number(e.cycleQuarterMon1),this.jobDetailForm.cycleQuarterDay1=Number(e.cycleQuarterDay1),this.jobDetailForm.cycleQuarterMon2=Number(e.cycleQuarterMon2),this.jobDetailForm.cycleQuarterDay2=Number(e.cycleQuarterDay2),this.jobDetailForm.cycleQuarterMon3=Number(e.cycleQuarterMon3),this.jobDetailForm.cycleQuarterDay3=Number(e.cycleQuarterDay3),this.jobDetailForm.cycleQuarterMon4=Number(e.cycleQuarterMon4),this.jobDetailForm.cycleQuarterDay4=Number(e.cycleQuarterDay4),this.jobDetailForm.cycleHarfyearMon5=Number(e.cycleHarfyearMon5),this.jobDetailForm.cycleHarfyearDay5=Number(e.cycleHarfyearDay5),this.jobDetailForm.cycleHarfyearMon6=Number(e.cycleHarfyearMon6),this.jobDetailForm.cycleHarfyearDay6=Number(e.cycleHarfyearDay6)},clearAll:function(){this.jobDetailForm.connectionIds=""},selectAll:function(){this.jobDetailForm.connectionIds="";for(var e=[],t=this.neList,a=0;a<t.length;a++)e[a]=t[a].id;this.jobDetailForm.connectionIds=e}},watch:{"$store.state.app.jobDatailFlag":{handler:function(e,t){"add"===e?(this.neList=[],this.resetForm(),this.clearFrom(),this.init(),this.clearCycle(),this.modalType=0,this.isReadonly=!1,this.$store.commit("setJobDatailFlag","")):"edit"===e&&(this.edit(),this.$store.commit("setJobDatailFlag",""),this.$store.commit("setJobDatailData",null))},deep:!0,immediate:!0}}},u=l,s=a("2877"),b=Object(s["a"])(u,r,c,!1,null,null,null);b.options.__file="backupJobDetailConfig.vue";t["default"]=b.exports},"365c":function(e,t,a){"use strict";a.d(t,"ub",function(){return c}),a.d(t,"Mb",function(){return n}),a.d(t,"Nb",function(){return i}),a.d(t,"j",function(){return o}),a.d(t,"Kb",function(){return l}),a.d(t,"tb",function(){return u}),a.d(t,"c",function(){return s}),a.d(t,"z",function(){return b}),a.d(t,"A",function(){return d}),a.d(t,"v",function(){return y}),a.d(t,"s",function(){return p}),a.d(t,"G",function(){return m}),a.d(t,"nb",function(){return f}),a.d(t,"b",function(){return h}),a.d(t,"x",function(){return D}),a.d(t,"Ib",function(){return k}),a.d(t,"y",function(){return j}),a.d(t,"r",function(){return g}),a.d(t,"F",function(){return v}),a.d(t,"a",function(){return F}),a.d(t,"w",function(){return w}),a.d(t,"q",function(){return O}),a.d(t,"kb",function(){return I}),a.d(t,"ob",function(){return $}),a.d(t,"o",function(){return Q}),a.d(t,"n",function(){return M}),a.d(t,"M",function(){return L}),a.d(t,"Bb",function(){return x}),a.d(t,"D",function(){return _}),a.d(t,"S",function(){return S}),a.d(t,"Cb",function(){return C}),a.d(t,"vb",function(){return J}),a.d(t,"E",function(){return H}),a.d(t,"N",function(){return A}),a.d(t,"Hb",function(){return T}),a.d(t,"ab",function(){return N}),a.d(t,"J",function(){return B}),a.d(t,"R",function(){return P}),a.d(t,"O",function(){return W}),a.d(t,"Q",function(){return R}),a.d(t,"lb",function(){return Y}),a.d(t,"jb",function(){return q}),a.d(t,"ib",function(){return V}),a.d(t,"W",function(){return E}),a.d(t,"Eb",function(){return K}),a.d(t,"Y",function(){return U}),a.d(t,"qb",function(){return z}),a.d(t,"H",function(){return G}),a.d(t,"zb",function(){return X}),a.d(t,"C",function(){return Z}),a.d(t,"X",function(){return ee}),a.d(t,"db",function(){return te}),a.d(t,"bb",function(){return ae}),a.d(t,"Fb",function(){return re}),a.d(t,"Gb",function(){return ce}),a.d(t,"cb",function(){return ne}),a.d(t,"I",function(){return ie}),a.d(t,"K",function(){return oe}),a.d(t,"e",function(){return le}),a.d(t,"d",function(){return ue}),a.d(t,"f",function(){return se}),a.d(t,"g",function(){return be}),a.d(t,"pb",function(){return de}),a.d(t,"P",function(){return ye}),a.d(t,"L",function(){return pe}),a.d(t,"Ab",function(){return me}),a.d(t,"U",function(){return fe}),a.d(t,"V",function(){return he}),a.d(t,"rb",function(){return De}),a.d(t,"T",function(){return ke}),a.d(t,"Db",function(){return je}),a.d(t,"yb",function(){return ge}),a.d(t,"Jb",function(){return ve}),a.d(t,"l",function(){return Fe}),a.d(t,"i",function(){return we}),a.d(t,"k",function(){return Oe}),a.d(t,"h",function(){return Ie}),a.d(t,"t",function(){return $e}),a.d(t,"Lb",function(){return Qe}),a.d(t,"hb",function(){return Me}),a.d(t,"Z",function(){return Le}),a.d(t,"m",function(){return xe}),a.d(t,"u",function(){return _e}),a.d(t,"B",function(){return Se}),a.d(t,"mb",function(){return Ce}),a.d(t,"sb",function(){return Je}),a.d(t,"fb",function(){return He}),a.d(t,"gb",function(){return Ae}),a.d(t,"eb",function(){return Te}),a.d(t,"p",function(){return Ne}),a.d(t,"xb",function(){return Be}),a.d(t,"wb",function(){return Pe});var r=a("7f80"),c=function(e){return Object(r["d"])("/auth/web/login",e)},n=function(e){return Object(r["c"])("/auth/web/user/info",e)},i=function(e){return Object(r["d"])("/auth/web/user/edit",e)},o=function(e){return Object(r["d"])("/auth/web/user/modifyPass",e)},l=function(e){return Object(r["d"])("/auth/web/user/unlock",e)},u=function(e){return Object(r["c"])("/auth/web/user/getByCondition",e)},s=function(e){return Object(r["d"])("/auth/web/user/admin/add",e)},b=function(e){return Object(r["d"])("/auth/web/user/admin/edit",e)},d=function(e,t){return Object(r["d"])("/auth/web/user/admin/enable/".concat(e),t)},y=function(e,t){return Object(r["d"])("/auth/web/user/admin/disable/".concat(e),t)},p=function(e){return Object(r["a"])("/auth/web/user/delByIds",e)},m=function(e){return Object(r["c"])("/auth/web/role/getAllList",e)},f=function(e){return Object(r["c"])("/auth/web/role/getAllByPage",e)},h=function(e){return Object(r["d"])("/auth/web/role/save",e)},D=function(e){return Object(r["d"])("/auth/web/role/edit",e)},k=function(e){return Object(r["d"])("/auth/web/role/setDefault",e)},j=function(e,t){return Object(r["d"])("/auth/web/role/editRolePerm/".concat(e),t)},g=function(e){return Object(r["a"])("/auth/web/role/delAllByIds",e)},v=function(e){return Object(r["c"])("/auth/web/permission/getAllList",e)},F=function(e){return Object(r["d"])("/auth/web/permission/add",e)},w=function(e){return Object(r["d"])("/auth/web/permission/edit",e)},O=function(e){return Object(r["a"])("/auth/web/permission/delByIds",e)},I=function(e){return Object(r["c"])("/common/web/log/getAllByPage",e)},$=function(e){return Object(r["c"])("/common/web/log/search",e)},Q=function(e,t){return Object(r["a"])("/common/web/log/delByIds/".concat(e),t)},M=function(e){return Object(r["a"])("/common/web/log/delAll",e)},L=function(e){return Object(r["d"])("/backup/web/backup/device/getByPage",e)},x=function(e){return Object(r["d"])("/backup/web/backup/device/save",e)},_=function(e){return Object(r["c"])("/backup/web/backup/device/getAll",e)},S=function(e){return Object(r["d"])("/backup/web/backup/server/getByPage",e)},C=function(e){return Object(r["d"])("/backup/web/backup/server/save",e)},J=function(e){return Object(r["d"])("/backup/web/backup/server/modifyPass",e)},H=function(e){return Object(r["c"])("/backup/web/backup/server/getAll",e)},A=function(e){return Object(r["d"])("/backup/web/backup/jobDetail/getByPage",e)},T=function(e){return Object(r["d"])("/backup/web/backup/jobDetail/save",e)},N=function(e){return Object(r["c"])("/backup/web/backup/jobDetail/cycleDate",e)},B=function(e){return Object(r["c"])("/backup/web/backup/jobDetail/getBackPath",e)},P=function(e){return Object(r["d"])("/backup/web/backup/scheduler/getByPage",e)},W=function(e){return Object(r["d"])("/backup/web/backup/jobLog/getByPage",e)},R=function(e){return Object(r["d"])("/backup/web/backup/logConnection/getByPage",e)},Y=function(e){return Object(r["c"])("/backup/web/backup/connection/getByLogId",e)},q=function(e){return Object(r["d"])("/backup/web/backup/logConnection/getLogByParam",e)},V=function(e,t){return Object(r["c"])("/backup/web/backup/logConnection/get/".concat(e),t)},E=function(e){return Object(r["c"])("/backup/web/backup/connection/getByLogIdAndIsSucc",e)},K=function(e){return Object(r["d"])("/backup/web/backup/command/save",e)},U=function(e){return Object(r["d"])("/backup/web/backup/commandObject/getByPage",e)},z=function(e){return Object(r["d"])("/backup/web/backup/smsMessage/getByPage",e)},G=function(e){return Object(r["d"])("/backup/web/backup/area/getByPage",e)},X=function(e){return Object(r["d"])("/backup/web/backup/area/save",e)},Z=function(e){return Object(r["c"])("/backup/web/backup/area/getAll",e)},ee=function(e){return Object(r["c"])("/backup/web/backup/area/getCityById/".concat(e))},te=function(e,t){return Object(r["c"])("/backup/web/backup/area/getDistrictById/".concat(e,"/").concat(t))},ae=function(e){return Object(r["d"])("/backup/web/backup/dictionary/getByPage",e)},re=function(e){return Object(r["d"])("/backup/web/backup/dictionary/save",e)},ce=function(e){return Object(r["d"])("/backup/web/backup/dicItem/save",e)},ne=function(e,t){return Object(r["c"])("/backup/web/backup/dicItem/getPageByDicId/".concat(e),t)},ie=function(e){return Object(r["c"])("/backup/web/jobScheduler/getCycleDate",e)},oe=function(e){return Object(r["d"])("/backup/web/jobScheduler/getByPage",e)},le=function(e){return Object(r["c"])("/backup/web/jobScheduler/pauseTask",e)},ue=function(e){return Object(r["c"])("/backup/web/jobScheduler/launchTask",e)},se=function(e){return Object(r["c"])("/backup/web/jobScheduler/runOnceTask",e)},be=function(e){return Object(r["d"])("/backup/web/jobScheduler/save",e)},de=function(e){return Object(r["d"])("/backup/web/backup/serverMonitor/getByPage",e)},ye=function(e){return Object(r["d"])("/backup/web/backup/serverMonitor/getBackupByPage",e)},pe=function(e){return Object(r["d"])("/backup/web/backup/connection/getByPage",e)},me=function(e){return Object(r["d"])("/backup/web/backup/connection/save",e)},fe=function(e){return Object(r["c"])("/backup/web/backup/connection/getByAreaId",e)},he=function(e){return Object(r["c"])("/backup/web/backup/connection/getByDeviceIdAndAreaId",e)},De=function(e){return Object(r["c"])("/backup/web/backup/connection/getSubTypeList",e)},ke=function(e){return Object(r["d"])("/backup/web/backup/strange/getByPage",e)},je=function(e){return Object(r["d"])("/backup/web/backup/strange/save",e)},ge=function(e){return Object(r["c"])("/backup/web/backup/strange/run",e)},ve=function(e){return Object(r["c"])("/backup/web/backup/strange/stop",e)},Fe=function(e){return Object(r["c"])("/backup/web/backup/backpass/connServer",e)},we=function(e){return Object(r["d"])("/backup/web/backup/backpass/changeDirectory",e)},Oe=function(e){return Object(r["c"])("/backup/web/backup/backpass/connConnection",e)},Ie=function(e){return Object(r["d"])("/backup/web/backup/backpass/changeConnDir",e)},$e=function(e){return Object(r["c"])("/backup/web/backup/backpass/disConn",e)},Qe=function(e){return Object(r["d"])("/backup/web/backup/backpass/upload",e)},Me=function(e){return Object(r["c"])("/backup/web/backup/backpass/getLog",e)},Le=function(e){return Object(r["c"])("/backup/web/backup/connection/getById",e)},xe=function(e){return Object(r["c"])("/backup/web/backup/backpass/connServerManual",e)},_e=function(e){return Object(r["c"])("/backup/web/backup/backpass/disConnServer",e)},Se=function(e){return Object(r["d"])("/backup/web/backup/backpass/executeCmd",e)},Ce=function(e){return Object(r["c"])("/backup/web/backup/dashboard/getPie",e)},Je=function(e){return Object(r["c"])("/backup/web/backup/dashboard/getSuccAndFail",e)},He=function(e){return Object(r["c"])("/backup/web/backup/dashboard/getKindsOfDeviceType",e)},Ae=function(e){return Object(r["c"])("/backup/web/backup/dashboard/getKindsOfDeviceTypeSomeDay",e)},Te=function(e){return Object(r["c"])("/backup/web/backup/dashboard/getKindsOfArea",e)},Ne=function(e,t){return Object(r["a"])(e,t)},Be=function(e,t){return Object(r["d"])(e,t)},Pe=function(e,t){return Object(r["b"])(e,t)}},7514:function(e,t,a){"use strict";var r=a("5ca1"),c=a("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)}}]);