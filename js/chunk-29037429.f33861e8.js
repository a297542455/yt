(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29037429"],{"0f4e":function(e,t,o){var i=o("c423");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var l=o("499e").default;l("15c36db8",i,!0,{sourceMap:!1,shadowMode:!1})},1971:function(e,t,o){"use strict";o("6c7b"),o("57e7"),o("f751"),o("a481"),o("28a5");var i=o("8465"),l=o("752d"),a=o("24f9"),r={canvasExtend:function(){Object(i["a"])()},initBg:function(e,t,o){var i=document.createElement("canvas");i.width=e,i.height=t;var l=i.getContext("2d");return o&&(l.fillStyle=o),l.fillRect(0,0,i.width,i.height),l.save(),i},_toNum:function(e){return null!==e&&""!==e?parseInt(e.split("px")[0],10):void 0},_analyseLabel:function(e){var t=e.tagName,o=e.offsetLeft,i=e.offsetTop,r=null;if("TD"===t){var n=e.querySelector("div"),s=l["a"].getRealStyle(n);o+=n.offsetLeft-this._toNum(s.marginLeft),i+=n.offsetTop-this._toNum(s.marginTop),r=s.transform}else r=e.style.transform;var h=l["a"].getRealStyle(e),d=this._toNum(h.lineHeight),f=h.fontSize;return{isMemo:!!a["a"].hasClass(e,"memo_text")||void 0,font:"14px "+h.fontFamily,fontFamily:h.fontFamily,fontSize:this._toNum(f.split("px")[0]),text:e.innerText,color:h.color,width:e.offsetWidth,height:e.offsetHeight,transform:r,lineHeight:d,offsetLeft:o,offsetTop:i,lineNum:Math.ceil(e.offsetHeight/d)}},_analyseIcon:function(e){var t=l["a"].getRealStyle(e),o=t.backgroundImage,i={offsetLeft:e.offsetLeft,offsetTop:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};return o&&"none"!==o?(o=o.replace(/"/g,"").split("url(")[1],i.backgroundImage=o.substr(0,o.length-1),o=t.backgroundPosition.split(" "),i.pX=-1*parseFloat(o[0].split("px")[0]),i.pY=-1*parseFloat(o[1].split("px")[0]),i.offsetLeft=e.parentNode.offsetLeft,i.offsetTop=e.parentNode.offsetTop):Object.assign(i,{font:"18px "+t.fontFamily.split(" ")[0],lineHeight:this._toNum(t.lineHeight),color:t.color,opacity:parseFloat(t.opacity),content:window.getComputedStyle(e,"::before").getPropertyValue("content")}),i},_fillIcon:function(e,t,o,i,l,a){var r=e.getContext("2d");if(void 0===i.backgroundImage){0===i.content.indexOf('"')&&(i.content=i.content.split('"')[1]),i.color=i.color.replace("rgb","rgba").replace(")",", "+i.opacity+")"),r.fillStyle=i.color,r.font=i.font,r.textAlign="center",r.textBaseline="middle";var n=window.ActiveXObject||"ActiveXObject"in window?0:1,s=t+i.offsetLeft+4+i.width/2+n,h=o+i.offsetTop+2+i.height/2+n;return r.save(),r.translate(s,h),r.scale(a,a),r.fillText(i.content,0,0),r.restore(),null}r.save();var d=0,f=0;i.pX<0&&(d-=i.pX,i.pX=0),i.pY<0&&(f-=i.pY,i.pY=0);var c=i.isCustom?0:2*a;r.drawImage(l,i.pX,i.pY,i.width,i.height,t+i.offsetLeft+c+d,o+i.offsetTop+c+f,i.width*a,i.height*a),r.restore()},_fillLabel:function(e,t,o,i,l,a){var r=e.getContext("2d");r.fillStyle=i.color,r.textAlign="center",i.isMemo&&(r.textAlign="left"),r.font=i.font,r.textBaseline="top";var n=i.text,s=0,h=0,d=window.ActiveXObject||"ActiveXObject"in window?1:3,f=t+i.offsetLeft+(i.isMemo?0:i.width/2)+d/2,c=o+i.offsetTop+d;a&&(f-=a.x,c+=a.y),navigator.userAgent.indexOf("Firefox")>=0&&(c+=i.lineHeight-i.fontSize),r.save(),r.translate(f,c),c=0,f=0,r.scale(l,l);for(var p=0;p<n.length;p++)s+=r.measureText(n[p]).width,p!==n.length-1?s>=i.width/l&&(r.fillText(n.substring(h,p),f,c),c+=i.lineHeight,s=0,h=p):r.fillText(n.substring(h,p+1),f,c);r.restore()},_analyseArea:function(e){var t=e.querySelector(".bg"),o=l["a"].getRealStyle(t);return{top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,borderColor:o.borderTopColor,bgColor:o.backgroundColor,opacity:parseFloat(o.opacity),icon:this._analyseIcon(e.querySelector("i")),label:this._analyseLabel(e.querySelector("label"))}},renderAreas:function(e,t,o,i){var l=e.getContext("2d");for(var a in t){var r=t[a];r.bgColor=r.bgColor.replace("rgb","rgba").replace(")",", "+r.opacity+")"),r.borderColor=r.borderColor.replace("rgb","rgba").replace(")",", "+r.opacity+")"),l.fillStyle=r.bgColor,l.strokeStyle=r.borderColor,l.rect(r.left,r.top,r.width,r.height),l.fill(),l.stroke(),this._fillIcon(e,r.left-3,r.top-3,r.icon,o,i),this._fillLabel(e,r.left,r.top,r.label,i)}},_analyseMemo:function(e){var t=this._analyseIcon(e.querySelector("i"));t.font="14px "+t.font.split(" ")[1];var o=this._analyseLabel(e.querySelector(".memo_text"));o.font="12px "+o.fontFamily;var i=l["a"].getRealStyle(e);return{top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,bgColor:i.color,boxShadow:i.boxShadow,icon:t,label:o}},renderMemos:function(e,t,o){var i=e.getContext("2d");for(var l in t){var a=t[l];i.save(),i.fillStyle=a.bgColor;var r=a.boxShadow.split(") ");i.shadowColor=r[0],r=r[1].split(" "),i.shadowOffsetX=this._toNum(r[0]),i.shadowOffsetY=this._toNum(r[1]),i.shadowBlur=this._toNum(r[2]),i.beginPath(),i.moveTo(a.left+10,a.top),i.lineTo(a.left+a.width,a.top),i.lineTo(a.left+a.width,a.top+a.height),i.lineTo(a.left,a.top+a.height),i.lineTo(a.left,a.top+10),i.lineTo(a.left+10,a.top),i.closePath(),i.fill(),i.restore(),i.save(),i.fillStyle="rgba(0,0,0,0.1)",i.beginPath(),i.moveTo(a.left+10,a.top),i.lineTo(a.left+10,a.top+10),i.lineTo(a.left,a.top+10),i.lineTo(a.left+10,a.top),i.closePath(),i.fill(),i.restore(),i.save(),i.fillStyle=a.icon.color,i.font=a.icon.font,i.textAlign="center",i.textBaseline="middle";var n=a.left+a.width/2,s=a.top+2;i.translate(n,s),i.scale(o,o),0===a.icon.content.indexOf('"')&&(a.icon.content=a.icon.content.split('"')[1]),i.fillText(a.icon.content,0,0),i.restore(),this._fillLabel(e,a.left,a.top,a.label,o)}},_analyseNode:function(e){var t="";a["a"].hasClass(e,"item_ellipse")&&(t="ellipse"),a["a"].hasClass(e,"item_rhomb")&&(t="rhomb"),a["a"].hasClass(e,"item_round")&&(t="round"),a["a"].hasClass(e,"item_parallelogram")&&(t="parallelogram"),a["a"].hasClass(e,"item_custom")&&(t="custom");var o=l["a"].getRealStyle(e),i={top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,borderColor:o.borderTopColor,borderWidth:this._toNum(o.borderTopWidth),bgColor:o.backgroundColor,borderRadius:this._toNum(o.borderTopLeftRadius),boxShadow:o.boxShadow,spClass:t,icon:this._analyseIcon(e.querySelector(".ico").childNodes[0])};return a["a"].hasClass(e,"item_round")||a["a"].hasClass(e,"item_rhomb")||a["a"].hasClass(e,"item_custom")?i.label=this._analyseLabel(e.querySelector(".span")):i.label=this._analyseLabel(e.querySelector("td").nextSibling),"custom"===t&&(i.icon.isCustom=!0),i},renderNodes:function(e,t,o,i){var l=e.getContext("2d");for(var a in t){var r=t[a],n=r.boxShadow.split(") ");if(1===n.length){var s=r.boxShadow.split("rgba");n[0]="rgba"+s[1],n[1]=s[0]}"custom"!==r.spClass&&(l.shadowColor=n[0],n=n[1].split(" "),l.shadowOffsetX=this._toNum(n[0])+(r.borderWidth>1?1:0),l.shadowOffsetY=this._toNum(n[1])+(r.borderWidth>1?1:0),l.shadowBlur=this._toNum(n[2])),l.fillStyle=r.bgColor,"ellipse"===r.spClass?l.BezierEllipse(r.left+r.width/2,r.top+r.height/2,r.width/2,r.height/2).fill():"rhomb"===r.spClass?(l.save(),l.translate(r.left+r.width/2,r.top+r.height/2),l.rotate(45*Math.PI/180),l.roundRect(-r.width/2,-r.height/2,r.width-r.borderWidth,r.height-r.borderWidth,r.borderRadius).fill(),l.restore()):"parallelogram"===r.spClass?(l.save(),l.translate(r.left+r.width/2,r.top+r.height/2),l.transform(1,0,-12/r.height,1,0,0),l.roundRect(-r.width/2,-r.height/2,r.width-r.borderWidth,r.height-r.borderWidth,r.borderRadius).fill(),l.restore()):"custom"===r.spClass||l.roundRect(r.left+r.borderWidth/2,r.top+r.borderWidth/2,r.width-r.borderWidth,r.height-r.borderWidth,r.borderRadius).fill(),l.shadowBlur=0,l.shadowColor="",l.shadowOffsetX=0,l.shadowOffsetY=0,l.strokeStyle=r.borderColor,l.lineWidth=0===r.borderWidth?.01:r.borderWidth,l.stroke(),this._fillIcon(e,r.left+(r.borderRadius>6?-3:0),r.top,r.icon,o,i),this._fillLabel(e,r.left,r.top,r.label,i,"rhomb"===r.spClass?{x:r.width/3*1.41,y:r.height/4}:void 0)}},_analyseLine:function(e,t){var o=l["a"].getRealStyle(e).fontFamily,i=t.querySelector("path[stroke-linecap]"),a=i.getAttribute("marker-end"),r={color:i.getAttribute("stroke"),lineWidth:i.getAttribute("stroke-width"),lineCap:"round",noArrow:!a||null==a},n=i.style.strokeDasharray;r.lineDash=n&&null!=n;var s=t.childNodes[2],h=s.getAttribute("fill");h&&null!==h&&""!==h||(h="#777"),r.label={text:s.textContent,font:s.style.fontSize+" "+o,color:h,left:s.getAttribute("x"),top:s.getAttribute("y")};for(var d=i.getAttribute("d"),f=d.substring(2,d.length).split(/[L|Q]/),c=[],p=0;p<f.length;++p){f[p]=f[p].replace(/^\s+|\s+$/gm,"");var u=f[p].split(" ");2===u.length?c.push({x:parseFloat(u[0]),y:parseFloat(u[1])}):c.push({x:parseFloat(u[0]),y:parseFloat(u[1]),dX:parseFloat(u[2]),dY:parseFloat(u[3])})}r.points=c;var g=c.length,m=c[g-1].x-c[g-2].x,b=c[g-1].y-c[g-2].y;return r.angle=Math.atan2(b,m),r},renderLines:function(e,t){var o=e.getContext("2d");for(var i in t){var l=t[i];o.save(),o.setLineDash(l.lineDash?[4,6]:[]),o.strokeStyle=l.color,o.lineWidth=l.lineWidth,o.lineCap=l.lineCap;var a=l.points;o.beginPath(),o.moveTo(a[0].x,a[0].y);for(var r=1;r<a.length;++r)if(a[r].dX){var n=a[r].y===a[r].dY?Math.abs(a[r].x-a[r].dX):Math.abs(a[r].y-a[r].dY);o.arcTo(a[r].x,a[r].y,a[r].dX,a[r].dY,n),o.moveTo(a[r].dX,a[r].dY)}else o.lineTo(a[r].x,a[r].y),r!==a.length-1&&o.moveTo(a[r].x,a[r].y);if(o.closePath(),o.stroke(),l.noArrow||(o.translate(a[a.length-1].x,a[a.length-1].y),o.rotate(l.angle),o.fillStyle=l.color,o.beginPath(),o.moveTo(1*l.lineWidth,0),o.lineTo(-6*l.lineWidth,-3*l.lineWidth),o.lineTo(-6*l.lineWidth,3*l.lineWidth),o.lineTo(1*l.lineWidth,0),o.closePath(),o.fill()),o.restore(),l.label&&null!=l.label.text&&""!=l.label.text){var s=e.getContext("2d"),h=l.label;s.fillStyle=h.color,s.textAlign="center",s.font=h.font,s.fillText(h.text,h.left,h.top)}}}};function n(e,t,o){try{var i=new Blob([e]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,t+"."+o);else{var l=document.createElement("a");l.href=window.URL.createObjectURL(i),l.download=t+"."+o,l.click(),window.URL.revokeObjectURL(l.href)}}catch(i){for(var a=window.open("","_blank");"complete"!==a.document.readyState&&"complete"!==a.document.readyState;);a.document.write("<html><head><title>"+t+"."+o+"</title></head><body><pre>"+("xml"===o?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e)+"</pre></body></html>")}}t["a"]={flag:"export",initFuncName:"canvasExtend",methods:{canvasExtend:function(){r.canvasExtend()},exportDiagram:function(e){for(var t=void 0,o=null,i={},l=this.$refs.$group.querySelectorAll(".GooFlow_area"),a=0;a<l.length;++a)i[l[a].id]=r._analyseArea(l[a]),i[l[a].id].icon.backgroundImage&&null===o&&(o=i[l[a].id].icon.backgroundImage);for(var n={},s=this.$refs.$paper.querySelectorAll(".GooFlow_memo"),h=0;h<s.length;++h)n[s[h].id]=r._analyseMemo(s[h]);for(var d={},f=this.$refs.$workArea.querySelectorAll(".GooFlow_item"),c=0;c<f.length;++c)d[f[c].id]=r._analyseNode(f[c]),d[f[c].id].icon.backgroundImage&&null===o&&(o=d[f[c].id].icon.backgroundImage);var p=this._suitSize(),u=p.width+100*this.scale,g=p.height+100*this.scale,m=r.initBg(u,g,"#ffffff"),b=this;null!==o&&((t=new Image).setAttribute("crossOrigin","anonymous"),t.src=o);var v=function(){l.length>0&&r.renderAreas(m,i,t,b.scale),s.length>0&&r.renderMemos(m,n,b.scale),r.renderNodes(m,d,t,b.scale);var o=m.getContext("2d");if(o.restore(),window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1){for(var a={},h=this.$refs.$draw.querySelectorAll("g"),f=0;f<h.length;++f)"GooFlow_tmp_line"!==h[f].getAttribute("tid")&&(a[h[f].id]=r._analyseLine(b.$el,h[f]));r.renderLines(m,a);try{var c=m.msToBlob();navigator.msSaveBlob(c,e+".png")}catch(t){for(var p=m.toDataURL("image/png"),v=window.open("","_blank");"complete"!==v.document.readyState&&"complete"!==v.document.readyState;);v.document.write("<html><head><title>"+e+'.png</title></head><body><img src="'+p+'" border="1" title="'+e+'.png"></body></html>')}}else{var y='<svg xmlns="http://www.w3.org/2000/svg" width="'+u+'" height="'+g+'"><defs><style type="text/css">text{font-size:14px;line-height:1.42857143;font-family:"Microsoft Yahei", "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;}</style></defs>'+b.$refs.$draw.innerHTML+"</svg>",w=new Image;w.src="data:image/svg+xml,"+encodeURIComponent(y),w.onload=function(){o.drawImage(w,0,0);var t=document.createElementNS("http://www.w3.org/1999/xhtml","a");t.href=m.toDataURL("image/png"),t.download=e+".png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};!t||t.complete||window.ActiveXObject||"ActiveXObject"in window?v():t.onload=function(){v()}},exportDataFile:function(e,t){if("json"===t)n(JSON.stringify(this.exportData()),e,"json");else{if("xml"!==t)return;try{n(this.exportBpmnXML(),e,"xml")}catch(e){console.warn("failed in exec function exportBpmnXML()! you need extend the xml.js plugin for supported.")}}}}}},"1d9b":function(e,t,o){"use strict";var i=o("0f4e"),l=o.n(i);l.a},"2ae9":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"DemoSpnode"}},[o("goo-flow",{ref:"gooFlow",attrs:{property:e.myProps,global:e.global,plugIns:e.plugIns}},[o("div",{staticStyle:{float:"right","margin-right":"15px"},attrs:{slot:"headerCustom"},slot:"headerCustom"},[e._v("特殊形状的节点 "),o("button",{attrs:{type:"button"},on:{click:function(t){e.exportDiagram()}}},[e._v("导出流程图片")])])])],1)},l=[],a=o("2380"),r=o("5410"),n=o("6ed2"),s=o("f673"),h=o("9fec"),d=o("645d"),f=o("1971"),c=o("bc3a"),p=o.n(c),u=o("70e5"),g={name:"DemoSpnode",components:{GooFlow:a["a"]},data:function(){return{myProps:{id:"aaaabbb",width:"900",height:"600",haveHead:!0,headLabel:!0,headBtns:["new","open","save","undo","redo","reload","print"],haveTool:!0,useOperStack:!0,haveMulti:!0,haveDirDashed:!0,haveSegment:!0,haveSegDashed:!0,toolBtns:["start round mix","end round","task","node","chat","state","plug","join","fork","complex mix"],toolTextWidth:60,auth:u["a"]},global:r["a"],plugIns:[n["a"],s["a"],h["a"],d["a"],f["a"]]}},methods:{exportDiagram:function(){this.$refs.gooFlow.exportDiagram("myFlow")}},mounted:function(){var e=this.$refs.gooFlow;p.a.get("./static/demo/data3.json",{},{headers:{"Content-Type":"application/json"}}).then(function(t){e.loadData(t)}),e.bindOperEvent({onPrintClick:function(){e.print()},onBtnSaveClick:function(){e.exportDiagram("myFlow")}})}},m=g,b=(o("1d9b"),o("2877")),v=Object(b["a"])(m,i,l,!1,null,null,null);v.options.__file="DemoSpnode.vue";t["default"]=v.exports},"36bd":function(e,t,o){"use strict";var i=o("4bf8"),l=o("77f1"),a=o("9def");e.exports=function(e){var t=i(this),o=a(t.length),r=arguments.length,n=l(r>1?arguments[1]:void 0,o),s=r>2?arguments[2]:void 0,h=void 0===s?o:l(s,o);while(h>n)t[n++]=e;return t}},"6c7b":function(e,t,o){var i=o("5ca1");i(i.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},8465:function(e,t,o){"use strict";
/**
 * GooFlow-Vue - Web端流程设计器
 * @author foolegg126 (sdlddr)
 * @version v1.1.0
 * @license Commercially licensed to 宜通世纪科技股份有限公司-91440101731569620Y(自动运维系统)
 **/t["a"]=function(){CanvasRenderingContext2D.prototype.roundRect=function(e,t,o,i,l){return o<2*l&&(l=o/2),i<2*l&&(l=i/2),this.beginPath(),this.moveTo(e+l,t),this.arcTo(e+o,t,e+o,t+i,l),this.arcTo(e+o,t+i,e,t+i,l),this.arcTo(e,t+i,e,t,l),this.arcTo(e,t,e+o,t,l),this.closePath(),this},CanvasRenderingContext2D.prototype.BezierEllipse=function(e,t,o,i){var l=.5522848,a=o*l,r=i*l;return this.beginPath(),this.moveTo(e-o,t),this.bezierCurveTo(e-o,t-r,e-a,t-i,e,t-i),this.bezierCurveTo(e+a,t-i,e+o,t-r,e+o,t),this.bezierCurveTo(e+o,t+r,e+a,t+i,e,t+i),this.bezierCurveTo(e-a,t+i,e-o,t+r,e-o,t),this.closePath(),this}}},c423:function(e,t,o){t=e.exports=o("2350")(!1),t.i(o("2d1f"),""),t.push([e.i,"",""])}}]);