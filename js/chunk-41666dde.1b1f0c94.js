(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41666dde"],{1971:function(e,t,o){"use strict";o("6c7b"),o("57e7"),o("f751"),o("a481"),o("28a5");var r=o("8465"),a=o("752d"),i=o("24f9"),n={canvasExtend:function(){Object(r["a"])()},initBg:function(e,t,o){var r=document.createElement("canvas");r.width=e,r.height=t;var a=r.getContext("2d");return o&&(a.fillStyle=o),a.fillRect(0,0,r.width,r.height),a.save(),r},_toNum:function(e){return null!==e&&""!==e?parseInt(e.split("px")[0],10):void 0},_analyseLabel:function(e){var t=e.tagName,o=e.offsetLeft,r=e.offsetTop,n=null;if("TD"===t){var s=e.querySelector("div"),l=a["a"].getRealStyle(s);o+=s.offsetLeft-this._toNum(l.marginLeft),r+=s.offsetTop-this._toNum(l.marginTop),n=l.transform}else n=e.style.transform;var d=a["a"].getRealStyle(e),c=this._toNum(d.lineHeight),p=d.fontSize;return{isMemo:!!i["a"].hasClass(e,"memo_text")||void 0,font:"14px "+d.fontFamily,fontFamily:d.fontFamily,fontSize:this._toNum(p.split("px")[0]),text:e.innerText,color:d.color,width:e.offsetWidth,height:e.offsetHeight,transform:n,lineHeight:c,offsetLeft:o,offsetTop:r,lineNum:Math.ceil(e.offsetHeight/c)}},_analyseIcon:function(e){var t=a["a"].getRealStyle(e),o=t.backgroundImage,r={offsetLeft:e.offsetLeft,offsetTop:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight};return o&&"none"!==o?(o=o.replace(/"/g,"").split("url(")[1],r.backgroundImage=o.substr(0,o.length-1),o=t.backgroundPosition.split(" "),r.pX=-1*parseFloat(o[0].split("px")[0]),r.pY=-1*parseFloat(o[1].split("px")[0]),r.offsetLeft=e.parentNode.offsetLeft,r.offsetTop=e.parentNode.offsetTop):Object.assign(r,{font:"18px "+t.fontFamily.split(" ")[0],lineHeight:this._toNum(t.lineHeight),color:t.color,opacity:parseFloat(t.opacity),content:window.getComputedStyle(e,"::before").getPropertyValue("content")}),r},_fillIcon:function(e,t,o,r,a,i){var n=e.getContext("2d");if(void 0===r.backgroundImage){0===r.content.indexOf('"')&&(r.content=r.content.split('"')[1]),r.color=r.color.replace("rgb","rgba").replace(")",", "+r.opacity+")"),n.fillStyle=r.color,n.font=r.font,n.textAlign="center",n.textBaseline="middle";var s=window.ActiveXObject||"ActiveXObject"in window?0:1,l=t+r.offsetLeft+4+r.width/2+s,d=o+r.offsetTop+2+r.height/2+s;return n.save(),n.translate(l,d),n.scale(i,i),n.fillText(r.content,0,0),n.restore(),null}n.save();var c=0,p=0;r.pX<0&&(c-=r.pX,r.pX=0),r.pY<0&&(p-=r.pY,r.pY=0);var h=r.isCustom?0:2*i;n.drawImage(a,r.pX,r.pY,r.width,r.height,t+r.offsetLeft+h+c,o+r.offsetTop+h+p,r.width*i,r.height*i),n.restore()},_fillLabel:function(e,t,o,r,a,i){var n=e.getContext("2d");n.fillStyle=r.color,n.textAlign="center",r.isMemo&&(n.textAlign="left"),n.font=r.font,n.textBaseline="top";var s=r.text,l=0,d=0,c=window.ActiveXObject||"ActiveXObject"in window?1:3,p=t+r.offsetLeft+(r.isMemo?0:r.width/2)+c/2,h=o+r.offsetTop+c;i&&(p-=i.x,h+=i.y),navigator.userAgent.indexOf("Firefox")>=0&&(h+=r.lineHeight-r.fontSize),n.save(),n.translate(p,h),h=0,p=0,n.scale(a,a);for(var f=0;f<s.length;f++)l+=n.measureText(s[f]).width,f!==s.length-1?l>=r.width/a&&(n.fillText(s.substring(d,f),p,h),h+=r.lineHeight,l=0,d=f):n.fillText(s.substring(d,f+1),p,h);n.restore()},_analyseArea:function(e){var t=e.querySelector(".bg"),o=a["a"].getRealStyle(t);return{top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,borderColor:o.borderTopColor,bgColor:o.backgroundColor,opacity:parseFloat(o.opacity),icon:this._analyseIcon(e.querySelector("i")),label:this._analyseLabel(e.querySelector("label"))}},renderAreas:function(e,t,o,r){var a=e.getContext("2d");for(var i in t){var n=t[i];n.bgColor=n.bgColor.replace("rgb","rgba").replace(")",", "+n.opacity+")"),n.borderColor=n.borderColor.replace("rgb","rgba").replace(")",", "+n.opacity+")"),a.fillStyle=n.bgColor,a.strokeStyle=n.borderColor,a.rect(n.left,n.top,n.width,n.height),a.fill(),a.stroke(),this._fillIcon(e,n.left-3,n.top-3,n.icon,o,r),this._fillLabel(e,n.left,n.top,n.label,r)}},_analyseMemo:function(e){var t=this._analyseIcon(e.querySelector("i"));t.font="14px "+t.font.split(" ")[1];var o=this._analyseLabel(e.querySelector(".memo_text"));o.font="12px "+o.fontFamily;var r=a["a"].getRealStyle(e);return{top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,bgColor:r.color,boxShadow:r.boxShadow,icon:t,label:o}},renderMemos:function(e,t,o){var r=e.getContext("2d");for(var a in t){var i=t[a];r.save(),r.fillStyle=i.bgColor;var n=i.boxShadow.split(") ");r.shadowColor=n[0],n=n[1].split(" "),r.shadowOffsetX=this._toNum(n[0]),r.shadowOffsetY=this._toNum(n[1]),r.shadowBlur=this._toNum(n[2]),r.beginPath(),r.moveTo(i.left+10,i.top),r.lineTo(i.left+i.width,i.top),r.lineTo(i.left+i.width,i.top+i.height),r.lineTo(i.left,i.top+i.height),r.lineTo(i.left,i.top+10),r.lineTo(i.left+10,i.top),r.closePath(),r.fill(),r.restore(),r.save(),r.fillStyle="rgba(0,0,0,0.1)",r.beginPath(),r.moveTo(i.left+10,i.top),r.lineTo(i.left+10,i.top+10),r.lineTo(i.left,i.top+10),r.lineTo(i.left+10,i.top),r.closePath(),r.fill(),r.restore(),r.save(),r.fillStyle=i.icon.color,r.font=i.icon.font,r.textAlign="center",r.textBaseline="middle";var s=i.left+i.width/2,l=i.top+2;r.translate(s,l),r.scale(o,o),0===i.icon.content.indexOf('"')&&(i.icon.content=i.icon.content.split('"')[1]),r.fillText(i.icon.content,0,0),r.restore(),this._fillLabel(e,i.left,i.top,i.label,o)}},_analyseNode:function(e){var t="";i["a"].hasClass(e,"item_ellipse")&&(t="ellipse"),i["a"].hasClass(e,"item_rhomb")&&(t="rhomb"),i["a"].hasClass(e,"item_round")&&(t="round"),i["a"].hasClass(e,"item_parallelogram")&&(t="parallelogram"),i["a"].hasClass(e,"item_custom")&&(t="custom");var o=a["a"].getRealStyle(e),r={top:this._toNum(e.style.top),left:this._toNum(e.style.left),width:e.offsetWidth,height:e.offsetHeight,borderColor:o.borderTopColor,borderWidth:this._toNum(o.borderTopWidth),bgColor:o.backgroundColor,borderRadius:this._toNum(o.borderTopLeftRadius),boxShadow:o.boxShadow,spClass:t,icon:this._analyseIcon(e.querySelector(".ico").childNodes[0])};return i["a"].hasClass(e,"item_round")||i["a"].hasClass(e,"item_rhomb")||i["a"].hasClass(e,"item_custom")?r.label=this._analyseLabel(e.querySelector(".span")):r.label=this._analyseLabel(e.querySelector("td").nextSibling),"custom"===t&&(r.icon.isCustom=!0),r},renderNodes:function(e,t,o,r){var a=e.getContext("2d");for(var i in t){var n=t[i],s=n.boxShadow.split(") ");if(1===s.length){var l=n.boxShadow.split("rgba");s[0]="rgba"+l[1],s[1]=l[0]}"custom"!==n.spClass&&(a.shadowColor=s[0],s=s[1].split(" "),a.shadowOffsetX=this._toNum(s[0])+(n.borderWidth>1?1:0),a.shadowOffsetY=this._toNum(s[1])+(n.borderWidth>1?1:0),a.shadowBlur=this._toNum(s[2])),a.fillStyle=n.bgColor,"ellipse"===n.spClass?a.BezierEllipse(n.left+n.width/2,n.top+n.height/2,n.width/2,n.height/2).fill():"rhomb"===n.spClass?(a.save(),a.translate(n.left+n.width/2,n.top+n.height/2),a.rotate(45*Math.PI/180),a.roundRect(-n.width/2,-n.height/2,n.width-n.borderWidth,n.height-n.borderWidth,n.borderRadius).fill(),a.restore()):"parallelogram"===n.spClass?(a.save(),a.translate(n.left+n.width/2,n.top+n.height/2),a.transform(1,0,-12/n.height,1,0,0),a.roundRect(-n.width/2,-n.height/2,n.width-n.borderWidth,n.height-n.borderWidth,n.borderRadius).fill(),a.restore()):"custom"===n.spClass||a.roundRect(n.left+n.borderWidth/2,n.top+n.borderWidth/2,n.width-n.borderWidth,n.height-n.borderWidth,n.borderRadius).fill(),a.shadowBlur=0,a.shadowColor="",a.shadowOffsetX=0,a.shadowOffsetY=0,a.strokeStyle=n.borderColor,a.lineWidth=0===n.borderWidth?.01:n.borderWidth,a.stroke(),this._fillIcon(e,n.left+(n.borderRadius>6?-3:0),n.top,n.icon,o,r),this._fillLabel(e,n.left,n.top,n.label,r,"rhomb"===n.spClass?{x:n.width/3*1.41,y:n.height/4}:void 0)}},_analyseLine:function(e,t){var o=a["a"].getRealStyle(e).fontFamily,r=t.querySelector("path[stroke-linecap]"),i=r.getAttribute("marker-end"),n={color:r.getAttribute("stroke"),lineWidth:r.getAttribute("stroke-width"),lineCap:"round",noArrow:!i||null==i},s=r.style.strokeDasharray;n.lineDash=s&&null!=s;var l=t.childNodes[2],d=l.getAttribute("fill");d&&null!==d&&""!==d||(d="#777"),n.label={text:l.textContent,font:l.style.fontSize+" "+o,color:d,left:l.getAttribute("x"),top:l.getAttribute("y")};for(var c=r.getAttribute("d"),p=c.substring(2,c.length).split(/[L|Q]/),h=[],f=0;f<p.length;++f){p[f]=p[f].replace(/^\s+|\s+$/gm,"");var m=p[f].split(" ");2===m.length?h.push({x:parseFloat(m[0]),y:parseFloat(m[1])}):h.push({x:parseFloat(m[0]),y:parseFloat(m[1]),dX:parseFloat(m[2]),dY:parseFloat(m[3])})}n.points=h;var g=h.length,u=h[g-1].x-h[g-2].x,b=h[g-1].y-h[g-2].y;return n.angle=Math.atan2(b,u),n},renderLines:function(e,t){var o=e.getContext("2d");for(var r in t){var a=t[r];o.save(),o.setLineDash(a.lineDash?[4,6]:[]),o.strokeStyle=a.color,o.lineWidth=a.lineWidth,o.lineCap=a.lineCap;var i=a.points;o.beginPath(),o.moveTo(i[0].x,i[0].y);for(var n=1;n<i.length;++n)if(i[n].dX){var s=i[n].y===i[n].dY?Math.abs(i[n].x-i[n].dX):Math.abs(i[n].y-i[n].dY);o.arcTo(i[n].x,i[n].y,i[n].dX,i[n].dY,s),o.moveTo(i[n].dX,i[n].dY)}else o.lineTo(i[n].x,i[n].y),n!==i.length-1&&o.moveTo(i[n].x,i[n].y);if(o.closePath(),o.stroke(),a.noArrow||(o.translate(i[i.length-1].x,i[i.length-1].y),o.rotate(a.angle),o.fillStyle=a.color,o.beginPath(),o.moveTo(1*a.lineWidth,0),o.lineTo(-6*a.lineWidth,-3*a.lineWidth),o.lineTo(-6*a.lineWidth,3*a.lineWidth),o.lineTo(1*a.lineWidth,0),o.closePath(),o.fill()),o.restore(),a.label&&null!=a.label.text&&""!=a.label.text){var l=e.getContext("2d"),d=a.label;l.fillStyle=d.color,l.textAlign="center",l.font=d.font,l.fillText(d.text,d.left,d.top)}}}};function s(e,t,o){try{var r=new Blob([e]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(r,t+"."+o);else{var a=document.createElement("a");a.href=window.URL.createObjectURL(r),a.download=t+"."+o,a.click(),window.URL.revokeObjectURL(a.href)}}catch(r){for(var i=window.open("","_blank");"complete"!==i.document.readyState&&"complete"!==i.document.readyState;);i.document.write("<html><head><title>"+t+"."+o+"</title></head><body><pre>"+("xml"===o?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e)+"</pre></body></html>")}}t["a"]={flag:"export",initFuncName:"canvasExtend",methods:{canvasExtend:function(){n.canvasExtend()},exportDiagram:function(e){for(var t=void 0,o=null,r={},a=this.$refs.$group.querySelectorAll(".GooFlow_area"),i=0;i<a.length;++i)r[a[i].id]=n._analyseArea(a[i]),r[a[i].id].icon.backgroundImage&&null===o&&(o=r[a[i].id].icon.backgroundImage);for(var s={},l=this.$refs.$paper.querySelectorAll(".GooFlow_memo"),d=0;d<l.length;++d)s[l[d].id]=n._analyseMemo(l[d]);for(var c={},p=this.$refs.$workArea.querySelectorAll(".GooFlow_item"),h=0;h<p.length;++h)c[p[h].id]=n._analyseNode(p[h]),c[p[h].id].icon.backgroundImage&&null===o&&(o=c[p[h].id].icon.backgroundImage);var f=this._suitSize(),m=f.width+100*this.scale,g=f.height+100*this.scale,u=n.initBg(m,g,"#ffffff"),b=this;null!==o&&((t=new Image).setAttribute("crossOrigin","anonymous"),t.src=o);var v=function(){a.length>0&&n.renderAreas(u,r,t,b.scale),l.length>0&&n.renderMemos(u,s,b.scale),n.renderNodes(u,c,t,b.scale);var o=u.getContext("2d");if(o.restore(),window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1){for(var i={},d=this.$refs.$draw.querySelectorAll("g"),p=0;p<d.length;++p)"GooFlow_tmp_line"!==d[p].getAttribute("tid")&&(i[d[p].id]=n._analyseLine(b.$el,d[p]));n.renderLines(u,i);try{var h=u.msToBlob();navigator.msSaveBlob(h,e+".png")}catch(t){for(var f=u.toDataURL("image/png"),v=window.open("","_blank");"complete"!==v.document.readyState&&"complete"!==v.document.readyState;);v.document.write("<html><head><title>"+e+'.png</title></head><body><img src="'+f+'" border="1" title="'+e+'.png"></body></html>')}}else{var w='<svg xmlns="http://www.w3.org/2000/svg" width="'+m+'" height="'+g+'"><defs><style type="text/css">text{font-size:14px;line-height:1.42857143;font-family:"Microsoft Yahei", "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;}</style></defs>'+b.$refs.$draw.innerHTML+"</svg>",y=new Image;y.src="data:image/svg+xml,"+encodeURIComponent(w),y.onload=function(){o.drawImage(y,0,0);var t=document.createElementNS("http://www.w3.org/1999/xhtml","a");t.href=u.toDataURL("image/png"),t.download=e+".png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}};!t||t.complete||window.ActiveXObject||"ActiveXObject"in window?v():t.onload=function(){v()}},exportDataFile:function(e,t){if("json"===t)s(JSON.stringify(this.exportData()),e,"json");else{if("xml"!==t)return;try{s(this.exportBpmnXML(),e,"xml")}catch(e){console.warn("failed in exec function exportBpmnXML()! you need extend the xml.js plugin for supported.")}}}}}},2760:function(e,t,o){t=e.exports=o("2350")(!1),t.i(o("2d1f"),""),t.i(o("5f0c"),""),t.push([e.i,"\n.GooFlow_work_inner{min-height:600px!important;min-width:100%!important\n}\n.GooFlow_head label{width:300px\n}\n.flashBorder{-webkit-animation:myfirst 5s infinite;animation:myfirst 5s infinite\n}\n@-webkit-keyframes myfirst{\n0%{border:1px solid #fff\n}\n50%{border:1px solid #000\n}\nto{border:1px solid #fff\n}\n}\n@keyframes myfirst{\n0%{border:1px solid #fff\n}\n50%{border:1px solid #000\n}\nto{border:1px solid #fff\n}\n}\n.highLight{color:#ed4014;font-size:16px;font-weight:700\n}",""])},"2c3c":function(e,t,o){"use strict";o("28a5"),o("57e7"),o("7f7f");var r=o("53ca"),a="  ",i=a+a,n=i+a,s='<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"\n'+a+'xmlns:activiti="http://activiti.org/bpmn"\n'+a+'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'+a+'targetNamespace="${targetNamespace}"\n'+a+'xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL\n'+a+'http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">\n',l="</definitions>";function d(e,t,o){var r=o.left+","+o.top+","+o.width+","+o.height;return i+"<"+t+' id="'+e+'" g="'+r+'"'}function c(e,t,o,i){var n=(i?"":"\n")+o+"<"+e,s="",l="",d=!1;for(var p in t)"object"==Object(r["a"])(t[p])?l+=c(p,t[p],o+a):"text"===p?(l+=t[p],d=!0):s+=" "+p+'="'+t[p]+'"';return""===l||d||(l+="\n"+o),n+(s+(""===l?"/>":">"+l+"</"+e+">"))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)?parseFloat(e):"true"===e||"false"!==e&&e}function h(e,t){for(var o=0;o<e.attributes.length;++o){var r=e.attributes[o];"id"!==r.nodeName&&(t[r.nodeName]=p(r.nodeValue))}if(1===e.childNodes.length&&"string"==typeof e.childNodes[0].data)t.text=e.childNodes[0].data;else for(var a=0;a<e.childNodes.length;++a){var i=e.childNodes[a];"string"!=typeof i.data&&(t[i.tagName]={},h(i,t[i.tagName]))}}t["a"]={flag:"xml",methods:{exportBpmnXML:function(e){void 0===e&&(e={});var t=s.replace("${targetNamespace}",this.prop.$extra.targetNamespace||"Examples");for(var o in this.prop.$extra)if("targetNamespace"!==o&&"id"!==o){var p=this.prop.$extra[o];t+="object"==Object(r["a"])(p)?c(o,p,a,!0)+"\n":a+"<"+o+">"+p+"</"+o+">\n"}var h=this.prop.$extra.id||"myProcess",f=this.prop.$title||"My Process";for(var m in t+=a+"<initNum>"+this.prop.$max+"</initNum>\n",t+=a+'<process id="'+h+'" name="'+f+'">\n',this.prop.$areas){var g=this.prop.$areas[m];t+=d(m,"swimlane",g),t+=' name="'+m+'" title="'+g.name+'"';var u="";for(var b in g)"left"!==b&&"top"!==b&&"width"!==b&&"height"!==b&&"name"!==b&&("object"==Object(r["a"])(g[b])?u+=c(b,g[b],n):t+=" "+b+'="'+g[b]+'"');t+=""===u?"/>\n":">"+u+"\n"+i+"</swimlane>\n"}for(var v in this.prop.$memos){var w=this.prop.$memos[v];t+=d(v,"memo",w),t+=">"+w.text+"\n"+i+"</memo>\n"}for(var y in this.prop.$nodes){var x=this.prop.$nodes[y],F=e[x.type]||x.type;t+=d(y,F,x);var _="";for(var S in x)"left"===S||"top"===S||"width"===S||"height"===S||"type"===S||("areaId"===S&&null!=x.areaId?t+=' swimlane="'+x.areaId+'"':"object"==Object(r["a"])(x[S])?_+=c(S,x[S],n):t+=" "+S+'="'+x[S]+'"');t+=""===_?"/>\n":">"+_+"\n"+i+"</"+F+">\n"}for(var $ in this.prop.$lines){var O=this.prop.$lines[$];t+=i+'<sequenceFlow id="'+$+'" sourceRef="'+O.from+'" targetRef="'+O.to+'"';var C="";for(var I in O)"from"!==I&&"to"!==I&&("object"==Object(r["a"])(O[I])?C+=c(I,O[I],n):t+=" "+I+'="'+O[I]+'"');t+=""===C?"/>\n":">"+C+"\n"+i+"</sequenceFlow>\n"}return t+(a+"</process>\n")+l},loadBpmnXML:function(e,t){void 0===t&&(t={});var o={extra:{}};if("string"==typeof e){var a=e;window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1?(e=new ActivexObject("MSXML2.DOMDocument")).loadXML(a):e=(new DOMParser).parseFromString(a,"text/xml")}var i=e.getElementsByTagName("definitions")[0];o.extra.targetNamespace=i.getAttribute("targetNamespace");for(var n=0;n<i.childNodes.length;n++){var s=i.childNodes[n];if("string"!=typeof s.data){var l=s.tagName;if("process"!==l){if("initNum"===l){o.initNum=parseInt(s.textContent,10);continue}o.extra[l]={},s.childNodes.length>0&&"string"==typeof s.childNodes[0].data?o.extra[l]=s.childNodes[0].data:h(s,o.extra[l])}else{o.extra.id=s.getAttribute("id"),o.title=s.getAttribute("name"),o.lines={},o.nodes={},o.areas={};for(var d=0;d<s.childNodes.length;++d){var c=s.childNodes[d];if("string"!=typeof c.data){var p=c.tagName,f=c.getAttribute("id");if("swimlane"===p){o.areas[f]={},h(c,o.areas[f]),delete o.areas[f].id,o.areas[f].name=o.areas[f].title,delete o.areas[f].title;var m=o.areas[f].g.split(",");delete o.areas[f].g,o.areas[f].left=parseFloat(m[0]),o.areas[f].top=parseFloat(m[1]),o.areas[f].width=parseFloat(m[2]),o.areas[f].height=parseFloat(m[3])}else if("memo"===p){"object"!=Object(r["a"])(o.memos)&&(o.memos={}),o.memos[f]={},h(c,o.memos[f]),delete o.memos[f].id;var g=o.memos[f].g.split(",");delete o.memos[f].g,o.memos[f].left=parseFloat(g[0]),o.memos[f].top=parseFloat(g[1]),o.memos[f].width=parseFloat(g[2]),o.memos[f].height=parseFloat(g[3])}else if("sequenceFlow"===p)o.lines[f]={},h(c,o.lines[f]),delete o.lines[f].id,o.lines[f].from=o.lines[f].sourceRef,o.lines[f].to=o.lines[f].targetRef,delete o.lines[f].sourceRef,delete o.lines[f].targetRef;else{o.nodes[f]={},h(c,o.nodes[f]),delete o.nodes[f].id,void 0!==o.nodes[f].swimlane&&(o.nodes[f].areaId=o.nodes[f].swimlane,delete o.nodes[f].swimlane);var u=o.nodes[f].g.split(",");delete o.nodes[f].g,o.nodes[f].left=parseFloat(u[0]),o.nodes[f].top=parseFloat(u[1]),o.nodes[f].width=parseFloat(u[2]),o.nodes[f].height=parseFloat(u[3]),o.nodes[f].type=t[c.tagName]||c.tagName}}}}}}this.loadData(o)}}}},"36bd":function(e,t,o){"use strict";var r=o("4bf8"),a=o("77f1"),i=o("9def");e.exports=function(e){var t=r(this),o=i(t.length),n=arguments.length,s=a(n>1?arguments[1]:void 0,o),l=n>2?arguments[2]:void 0,d=void 0===l?o:a(l,o);while(d>s)t[s++]=e;return t}},"4b87":function(e,t,o){"use strict";o("57e7");var r=o("743b"),a=o("752d");
/**
 * GooFlow-Vue - Web端流程设计器
 * @author foolegg126 (sdlddr)
 * @version v1.1.0
 * @license Commercially licensed to 宜通世纪科技股份有限公司-91440101731569620Y(自动运维系统)
 **/t["a"]={flag:"dragadd",methods:{_initDragAddOper:function(){if(this.prop.$editable&&this.$refs.$tool){var e=this;Object(r["a"])(this.$refs.$tool.$el,"mousedown","li",{},function(t,o){var r=o.getAttribute("type"),i=o.title;if(e.prop.$dragAddOper&&"cursor"!==r&&"multi"!==r&&!a["a"].isDrawingLine(r)){var n="",s=a["a"].getCoor(t,e.$refs.$workArea),l=e.prop.$nodeCustoms[r],d={width:104,height:26,type:r,title:null!=i&&""!==i?i:"--------",left:s.X,top:s.Y,canOver:!0};if(void 0!==l&&null!=l){l.width&&(d.width=l.width),l.height&&(d.height=l.height);var c='<i class="'+l.class+'" style="width:'+d.width+"px;height:"+d.height+'px;"></i>';n='<table cellspacing="0" style="width:'+d.width*e.scale+"px;height:"+d.height*e.scale+'px;margin:-1px"><tr><td class="ico">'+c+"</td></tr></table>"}else d.type.indexOf(" round")>-1?(d.width=26,d.height=26,d.title=""):d.type.indexOf(" rhomb")>0?(d.width=30,d.height=30,d.title=""):"group"===d.type?(d.width=200,d.height=100):"memo"===d.type?(d.width=140,d.height=54):n='<table cellspacing="1" style="width:'+(d.width*e.scale-2)+"px;height:"+(d.height*e.scale-2)+'px;"><tr><td class="ico"><i class="ico_'+d.type+'"></i></td><td><div>'+d.title+"</div></td></tr></table>";""===n&&(n='<table cellspacing="0" style="width:'+(d.width*e.scale-2)+"px;height:"+(d.height*e.scale-2)+'px;"><tr><td class="ico"><i class="ico_'+d.type+'"></i> '+d.title+"</td></tr></table>"),e.$refs.$ghost.setData("type",r),e.$refs.$ghost.html(n),e.$refs.$ghost.css({cursor:"move"}),e._bindMoveEvent(t,d,function(t,o,r,a,i){if(o.$refs.$ghost.removeData("type"),!(a<0||i<0)&&t){if("group"===d.type){o.switchToolBtn("group");var n=["red","yellow","blue","green","milk"];o.addArea((new Date).getTime(),{name:o.prop.$areaPrefix+o.prop.$max,left:a/o.scale,top:i/o.scale,color:n[o.prop.$max%5],width:200,height:100})}else"memo"===d.type?(o.switchToolBtn("memo"),o.addMemo((new Date).getTime(),{text:"",left:a/o.scale,top:i/o.scale,width:140,height:54})):(o.switchToolBtn("cursor"),e.addNode((new Date).getTime(),{name:o.prop.$nodePrefix+o.prop.$max,left:a/o.scale,top:i/o.scale,width:d.width,height:d.height,type:d.type}));o.prop.$max++}},"move",d.width,d.height)}})}}}}},"5f0c":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,'\n.GooFlow .ico_instruct:before,.GooFlow .ico_test:before{content:"\\E649"\n}\n.GooFlow .ico_circleStart:before{content:"\\E60C"\n}\n.GooFlow .ico_circleEnd:before{content:"\\E606"\n}\n.GooFlow .ico_judge:before{content:"\\E62B"\n}\n.GooFlow .ico_trigger:before{content:"\\E68F"\n}\n.GooFlow .ico_dataDispose:before{content:"\\E742"\n}\n.GooFlow .ico_target:before{content:"\\E872"\n}',""])},"6c7b":function(e,t,o){var r=o("5ca1");r(r.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},"716c":function(e,t,o){var r=o("2760");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=o("499e").default;a("00c033be",r,!0,{sourceMap:!1,shadowMode:!1})},8465:function(e,t,o){"use strict";
/**
 * GooFlow-Vue - Web端流程设计器
 * @author foolegg126 (sdlddr)
 * @version v1.1.0
 * @license Commercially licensed to 宜通世纪科技股份有限公司-91440101731569620Y(自动运维系统)
 **/t["a"]=function(){CanvasRenderingContext2D.prototype.roundRect=function(e,t,o,r,a){return o<2*a&&(a=o/2),r<2*a&&(a=r/2),this.beginPath(),this.moveTo(e+a,t),this.arcTo(e+o,t,e+o,t+r,a),this.arcTo(e+o,t+r,e,t+r,a),this.arcTo(e,t+r,e,t,a),this.arcTo(e,t,e+o,t,a),this.closePath(),this},CanvasRenderingContext2D.prototype.BezierEllipse=function(e,t,o,r){var a=.5522848,i=o*a,n=r*a;return this.beginPath(),this.moveTo(e-o,t),this.bezierCurveTo(e-o,t-n,e-i,t-r,e,t-r),this.bezierCurveTo(e+i,t-r,e+o,t-n,e+o,t),this.bezierCurveTo(e+o,t+n,e+i,t+r,e,t+r),this.bezierCurveTo(e-i,t+r,e-o,t+n,e-o,t),this.closePath(),this}}},ab00:function(e,t,o){"use strict";var r=o("716c"),a=o.n(r);a.a},c9dc:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Row",{staticStyle:{"margin-top":"20px"},attrs:{gutter:16}},[o("Col",{attrs:{span:"16"}},[o("Card",[o("goo-flow",{ref:"gooFlow",attrs:{property:e.myProps,global:e.global,plugIns:e.plugIns}})],1)],1),o("Col",{attrs:{span:"8"}},[o("Card",{class:{flashBorder:e.active}},[o("Form",{ref:"propsForm",attrs:{model:e.propsForm,"label-width":100,rules:e.propsFormValidate}},["node"==e.nowType?o("div",[o("FormItem",{attrs:{label:"节点名称",prop:"name"}},[o("Input",{staticStyle:{width:"250px"},attrs:{maxlength:30,disabled:""},model:{value:e.propsForm.name,callback:function(t){e.$set(e.propsForm,"name",t)},expression:"propsForm.name"}})],1),o("FormItem",{attrs:{label:"节点类型",prop:"keySelect"}},[o("Select",{staticStyle:{width:"250px"},attrs:{disabled:""},model:{value:e.propsForm.type,callback:function(t){e.$set(e.propsForm,"type",t)},expression:"propsForm.type"}},[o("Option",{key:"start round mix",attrs:{value:"start round mix"}},[e._v("开始节点")]),e._l(e.global.remarks.toolBtns,function(t,r,a){return o("Option",{key:t,attrs:{value:r}},[e._v(e._s(t))])}),o("Option",{key:"end round mix",attrs:{value:"end round mix"}},[e._v("结束节点")])],2)],1),o("FormItem",{attrs:{label:"节点说明",prop:"desc"}},[o("Input",{staticStyle:{width:"250px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},disabled:""},model:{value:e.propsForm.extra.desc,callback:function(t){e.$set(e.propsForm.extra,"desc",t)},expression:"propsForm.extra.desc"}})],1)],1):e._e(),"line"==e.nowType?o("div",[o("FormItem",{attrs:{label:"关系",prop:"keySelect"}},[e.propsForm.extra.editAble?o("Select",{staticStyle:{width:"250px"},model:{value:e.propsForm.name,callback:function(t){e.$set(e.propsForm,"name",t)},expression:"propsForm.name"}},[o("Option",{attrs:{value:"满足"}},[e._v("满足")]),o("Option",{attrs:{value:"不满足"}},[e._v("不满足")])],1):o("Select",{staticStyle:{width:"250px"},attrs:{disabled:"",placeholder:"该线段不允许修改关系"}},[o("Option",{attrs:{value:""}})],1)],1)],1):""==e.nowType?o("div",[o("FormItem",{attrs:{label:"没有选中的节点"}})],1):e._e(),"line"==e.nowType?o("FormItem",[o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.propsFormSubmit}},[e._v("保存属性")]),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"warning"},on:{click:e.cancelReg}},[e._v("取消")])],1):e._e()],1)],1)],1)],1)],1)},a=[],i=(o("57e7"),o("7f7f"),o("ade3")),n=o("2380"),s=o("5410"),l=o("6ed2"),d=o("f673"),c=o("9fec"),p=o("4b87"),h=o("645d"),f=o("1971"),m=o("2c3c"),g=(o("bc3a"),o("70e5")),u={name:"DemoBase",components:{GooFlow:n["a"]},data:function(){var e;return{dataType:["neCategory","neType","neProducer"],userInfo:JSON.parse(localStorage.getItem("userInfo")),propsForm:{nodeName:"",nodeType:""},propsFormValidate:{nodeName:[{required:!0,message:"操作指令不能为空",trigger:"blur"}]},oldData:{},nowId:"",nowType:"",submitLoading:!1,maxLength:20,myProps:(e={id:"aaaabbb",width:"1200",height:"650",haveHead:!0,headLabel:!0,headBtns:["save","undo","redo","reload","print"]},Object(i["a"])(e,"headBtns",["save","undo","redo","reload"]),Object(i["a"])(e,"haveTool",!0),Object(i["a"])(e,"dragAddOper",!0),Object(i["a"])(e,"useOperStack",!0),Object(i["a"])(e,"haveMulti",!0),Object(i["a"])(e,"haveDirDashed",!0),Object(i["a"])(e,"toolBtns",["start round mix","end round mix","instruct","circleStart","judge","trigger","dataDispose"]),Object(i["a"])(e,"toolTextWidth",60),Object(i["a"])(e,"auth",g["a"]),e),global:s["a"],plugIns:[l["a"],d["a"],c["a"],p["a"],h["a"],f["a"],m["a"]],active:!1,procedureId:"",baseObj:{desc:"",editAble:!0,delAble:!0}}},computed:{},methods:{DownloadFile:function(e,t){this.$refs.gooFlow.exportDataFile(e,t)},loadData:function(e){this.$refs.gooFlow.$refs.$lineOper.hide(),this.$refs.gooFlow.$refs.$mpFrom.hide(),this.$refs.gooFlow.$refs.$mpTo.hide(),this.$refs.gooFlow.clearData(),this.procedureId=this.$store.state.yt.processId,this.$refs.gooFlow.loadData(JSON.parse(e.json))},propsFormSubmit:function(){this.nowId&&(this.oldData=this.deepClone(this.propsForm),this.$refs.gooFlow.setName(this.nowId,this.propsForm.name,this.nowType),this.$refs.gooFlow.setItemExtra(this.nowId,this.nowType,this.propsForm))},cancelReg:function(){this.propsForm=this.deepClone(this.oldData)},saveProcedureJson:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var o in this.$refs.gooFlow.prop.$lines)this.$refs.gooFlow.prop.$lines[o].marked=!1;var r={userName:this.userInfo.username,procedureId:this.procedureId,json:JSON.stringify(this.$refs.gooFlow.exportData())};this.postRequest("/operation/procedure/saveProcedureJson",r).then(function(o){0===o.code?t&&e.$emit("success"):e.$Message.error({content:o.result,duration:10,closable:!0})})}},created:function(){},mounted:function(){var e=this;s["a"].remarks.toolBtns={cursor:"选择指针",multi:"多选",direct:"有向连线",dirDashed:"有向虚线",segment:"无向连线",segDashed:"无向虚线",start:"入口节点",end:"结束节点",instruct:"指令节点",circleStart:"循环节点",circleEnd:"循环结束",judge:"判断节点",trigger:"触发节点",dataDispose:"数据节点",target:"指标节点",test:"测试节点",group:"区域编辑",memo:"添加便笺",plug:"附加插件"};var t=this.$refs.gooFlow,o=this;window.outerWidth<=1400&&t.reinitSize(750,485),t.bindOperEvent({onItemFocus:function(e,r){t.markItem(e,r,!1),console.log(t.getItemInfo(e,r)),o.active=!0,o.nowId=e,o.nowType=r,o.oldData=o.deepClone(t.getItemInfo(e,r)),o.propsForm=t.getItemInfo(e,r)},onItemBlur:function(e,t){o.active=!1,o.nowId="",o.nowType="",o.propsForm={}},onBtnSaveClick:function(){console.dir(t.exportData()),o.saveProcedureJson()},onFreshClick:function(){o.$Modal.confirm({title:"重新载入",content:"您确认重新载入流程图吗?",onOk:function(){o.loadData(o.procedureId)}})},onItemAdd:function(r,a,i){if("line"==a){if(i.extra||(i.extra=e.deepClone(e.baseObj)),!i.name)if(i.extra.editAble){var n=t.getItemInfo(i.from,"node");t.getItemInfo(i.to,"node");"circleStart"==n.type?(i.name="进入循环",i.extra.editAble=!1):"circleEnd"==n.type?(i.name="退出循环",i.extra.editAble=!1):"judge"==n.type?(i.name="满足",o.$Message.warning({content:"注意:判断节点要有两条关系线，<span class='highLight'>满足</span>与<span class='highLight'>不满足</span>",duration:10,closable:!0})):(i.name="无条件",i.extra.editAble=!1)}else i.name="",i.extra.editAble=!1}else if("area"==a||"memo"==a)i.extra||(i.extra=e.deepClone(e.baseObj));else if("node"==a&&(i.extra||(i.extra=e.deepClone(e.baseObj)),i)){var s={id:r,processId:e.procedureId,processName:t.prop.$title,creater:e.userInfo.username},l=(a=i.type,"/operation/Node");a.indexOf("start")>=0?(l+="Start",s.type=0):a.indexOf("end")>=0?(l+="End",s.type=1):a.indexOf("instruct")>=0?(l+="Instruct",s.type=2):a.indexOf("circleStart")>=0?(l+="Circle",s.type=7,s.loopId=r):a.indexOf("circleEnd")>=0?(l+="Circle",s.type=7,s.loopId=--r):a.indexOf("judge")>=0?(l+="Judge",s.type=6):a.indexOf("trigger")>=0?(l+="Trigger",s.type=8):a.indexOf("dataDispose")>=0?(l+="DataDispose",s.type=4):a.indexOf("target")>=0&&(l+="target",s.type=9,o.$Message.success("指标节点开发中")),e.postYTRequest(l,s).then(function(e){0==e.code?"circleStart"==i.type?(i.name="循环开始",i.extra.loopId=r,o.$nextTick(function(){var e=o.deepClone(i);e.type="circleEnd",e.top+=200,e.name="循环结束",e.extra.loopId=r;var a=r+1;t.addNode(a,e);var n={M:i.left-60,alt:!0,from:""+a,marked:!1,dash:!0,name:"",to:""+r,type:"lr",extra:{desc:"",editAble:!1,delAble:!1}},s=a+1;t.addLine(s,n),console.log("id:"+r),console.log("endNodeId:"+a),console.log("lineId:"+s)})):i.type.indexOf("end")>=0?i.name="结束节点":i.type.indexOf("start")>=0&&(i.name="开始节点"):o.$Message.error({content:e.result,duration:10,closable:!0})})}},onItemDbClick:function(e,r){var a=t.getItemInfo(e,r);return"node"==r?(console.log(a.type),o.$emit("onItemDbClick",e,a.type),!1):"line"!=r&&void 0},onItemDel:function(e,r){var a=t.getItemInfo(e,r);if(!a.extra.delAble)return o.$Message.error("该节点不允许删除"),!1;var i=confirm("确定删除吗");if(!i)return!1;a.type&&(a.type.indexOf("circleStart")>=0?delete t.prop.$nodes[1*e+1]:a.type.indexOf("circleEnd")>=0&&delete t.prop.$nodes[1*e-1]),o.$Message.success("删除成功")}})}},b=u,v=(o("ab00"),o("2877")),w=Object(v["a"])(b,r,a,!1,null,null,null);w.options.__file="print.vue";t["default"]=w.exports}}]);