!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=353)}({2:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return o}));var s=i(3);i(4);class n{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const i=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,i)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,i){return typeof e===t||(this.error(`<${i}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let i=e;i?this.internalMap[i]&&this.error(`Duplicate ID #${e} detected. Things may not work as expected, please use unique ID's per Component.`):i=s.a.uniqueId(),this.internalMap[i]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element detected with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,i,s){if(!t||!s||!this.validateParameter(s,"function","addEvent"))return;const n=this.getIME(e);n&&!n.customEventsEnabled||n&&n.addEvent(t,s,i)}error(e){o(e,`{Core} (${this.resourceName})`)}}class r{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()),e.enableMouseTracking&&(this.mouse={},this.lastmouse={},this.mousedEvent=this.mousedEvent.bind(this),window.addEventListener("mousemove",this.mousedEvent),window.addEventListener("touchmove",this.mousedEvent)))}mousedEvent(e){if(this.canvasDimensions=this.canvas.getBoundingClientRect(),e.target!==this.canvas)return;let t="touchmove"==e.type?e.touches[0].pageX:e.clientX;t-=this.canvasDimensions.left;let i="touchmove"==e.type?e.touches[0].pageY:e.clientY;i-=this.canvasDimensions.top,this.mouse={x:t,y:i},this.moused&&this.moused(),this.lastmouse=this.mouse}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,i){this.availableEvents.includes(i)?"function"==typeof t?this[i].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event detected with name - "+i)}executeEvent(e,t){if(0==this[e].length)return;const i=this[e].filter(e=>e.id==t);0!=i.length&&i.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}error(e){o(e,`{Component} (${this.resourceName})`)}}const o=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},3:function(e,t,i){"use strict";const s={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return s.uniqueIdList.includes(e)?s.uniqueId():(s.uniqueIdList.push(e),e)},setCookie:(e,t,i)=>{var s=new Date;s.setDate(s.getDate()+i);var n=escape(t)+(null==i?"":"; expires="+s.toUTCString());document.cookie=e+"="+n},getCookie:e=>{var t,i,s,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(i=n[t].substr(0,n[t].indexOf("=")),s=n[t].substr(n[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e)return unescape(s)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,i)=>{t[i]=s.safeCloneObject(t[i])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}};t.a=s},336:function(e,t,i){},35:function(e,t,i){"use strict";i(2);t.a=class{constructor(e){this.target=e,this.target.classList.add("rwx-animateable-border"),this.target.style.position="relative",this.paddingX=60,this.paddingY=40,this.active=this.active.bind(this),this.unactive=this.unactive.bind(this),window.requestAnimationFrame(()=>{this.measurements()})}active(){this.activated=!0,this.el.classList.add("active")}unactive(){this.unactivated=!0,this.el.classList.remove("active")}recalculate(){this.target.removeChild(this.el),this.measurements()}measurements(){let e=this.target.getBoundingClientRect(),t=e.width+this.paddingX,i=e.height+this.paddingY,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"width",t),s.setAttributeNS(null,"height",i),s.style.top=`-${this.paddingY/2}px`,s.style.left=`-${this.paddingX/2}px`;let n=document.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttributeNS(null,"width",t),n.setAttributeNS(null,"height",i),n.setAttributeNS(null,"stroke-dasharray",`${i} ${t}`),n.setAttributeNS(null,"stroke-dashoffset","-"+2*t),s.appendChild(n),this.el=s,this.target.appendChild(s)}}},353:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i(35);class r extends s.b{constructor(){super(),this.items=[],this.buttons=[],this.activeButton=1}execute(){this.htmlDefinition()}accessible(){this.el.setAttribute("tabIndex",1),this.el.focus(),this.keyDown=e=>{e.preventDefault(),37!=e.keyCode&&39!=e.keyCode&&9!=e.keyCode||(this.buttons[this.activeButton].unactive(),this.activeButton=0==this.activeButton?1:0,this.buttons[this.activeButton].active()),32!=e.keyCode&&13!=e.keyCode||this.buttons[this.activeButton].target.click()},this.el.addEventListener("keydown",this.keyDown)}unaccessible(){this.el.removeAttribute("tabIndex"),this.el.removeEventListener("keydown",this.keyDown)}htmlDefinition(){this.el=document.createElement("div"),this.el.classList.add("rwx-duo-selector"),this.el.id="rwx-duo-selector",document.body.appendChild(this.el)}selected(e){this.callback(e),this.opened=!1,this.unaccessible(),this.items.map(e=>e.classList.add("remove")),setTimeout(()=>{this.el.innerHTML="",this.items=[],this.buttons.map(e=>e.unactive()),this.buttons=[],this.el.classList.remove("active")},1e3)}validateOptions(e){return e?e.length<2?(this.error("setValues - requires at least 2 objects."),!1):(e.length>2&&this.error("setValues - only accepts 2 objects, using first 2."),!!(e[0].value&&e[0].displayName&&e[1].value&&e[1].displayName)||(this.error("setValues - value and displayName required."),!1)):(this.error("setValues - requires an array of objects."),!1)}setValues(e){if(!this.validateOptions(e)||this.opened)return;let t,i,s;e=e.slice(0,2);let r=[];this.opened=!0,this.el.classList.add("active"),this.accessible();for(let n of e)t=document.createElement("div"),t.classList.add("rwx-duo-selector-item"),i=document.createElement("div"),i.classList.add("rwx-duo-selector-item-button"),s=document.createElement("button"),s.classList.add("no-decoration"),s.innerText=n.displayName,s.classList.add("text"),i.addEventListener("click",()=>{this.selected(n.value)}),i.appendChild(s),t.appendChild(i),r.push(i),this.items.push(t),this.el.appendChild(t);return r.map(e=>{this.buttons.push(new n.a(e))}),new Promise((e,t)=>{this.callback=e})}}var o=new r;i(336),document.getElementById("setValuesDemo").addEventListener("click",()=>{const e=document.getElementById("setValue1Val").value,t=document.getElementById("setValue2Val").value,i=document.getElementById("selectedValue"),s=[{displayName:e,value:e},{displayName:t,value:t}];o.setValues(s).then(e=>{i.innerText=`You selected '${e}'`})})},4:function(e,t,i){"use strict";const s={scale:(e,t,i,s)=>{const n=window.devicePixelRatio||1,r=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,o=n/r;return n!==r?(e.width=i*o,e.height=s*o,e.style.width=i+"px",e.style.height=s+"px"):(e.width=i,e.height=s,e.style.width="",e.style.height=""),t.scale(o,o),o},drawSector:(e,t,i,s,n)=>{e.beginPath(),e.arc(t.x,t.y,i/2,s,n),e.lineWidth=i,e.stroke(),e.closePath()},drawArc:(e,t,i,s,n,r)=>{e.beginPath(),e.arc(t.x,t.y,i-s/2,n,r),e.lineWidth=s,e.stroke(),e.closePath()}};t.a=s}});
//# sourceMappingURL=duoselectorpage.45df5634.js.map