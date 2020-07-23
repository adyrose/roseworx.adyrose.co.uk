!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=341)}({1:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return o}));var i=s(2);class n{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const s=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,s)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,s){return typeof e===t||(this.error(`<${s}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let s=e;s?this.internalMap[s]&&this.error(`Duplicate ID #${e} found. Things may not work as expected, please use unique ID's per Component.`):s=i.a.uniqueId(),this.internalMap[s]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element found with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,s,i){if(!t||!i||!this.validateParameter(i,"function","addEvent"))return;const n=this.getIME(e);n&&!n.customEventsEnabled||n&&n.addEvent(t,i,s)}error(e){o(e,`{Core} (${this.resourceName})`)}}class r{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()))}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,s){this.availableEvents.includes(s)?"function"==typeof t?this[s].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event found with name - "+s)}executeEvent(e,t){if(0==this[e].length)return;const s=this[e].filter(e=>e.id==t);0!=s.length&&s.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}error(e){o(e,`{Component} (${this.resourceName})`)}}const o=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},2:function(e,t,s){"use strict";const i={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return i.uniqueIdList.includes(e)?i.uniqueId():(i.uniqueIdList.push(e),e)},setCookie:(e,t,s)=>{var i=new Date;i.setDate(i.getDate()+s);var n=escape(t)+(null==s?"":"; expires="+i.toUTCString());document.cookie=e+"="+n},getCookie:e=>{var t,s,i,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(s=n[t].substr(0,n[t].indexOf("=")),i=n[t].substr(n[t].indexOf("=")+1),(s=s.replace(/^\s+|\s+$/g,""))==e)return unescape(i)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,s)=>{t[s]=i.safeCloneObject(t[s])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}},zOpaqueIn:e=>{e.classList.contains("zOpaqueOut")&&e.classList.remove("zOpaqueOut"),e.classList.add("zOpaqueIn")},zOpaqueOut:e=>{e.classList.add("zOpaqueOut")}};t.a=i},328:function(e,t,s){},33:function(e,t,s){"use strict";s(1);t.a=class{constructor(e){this.target=e,this.target.classList.add("rwx-animateable-border"),this.target.style.position="relative",this.paddingX=60,this.paddingY=40,this.active=this.active.bind(this),this.unactive=this.unactive.bind(this),window.requestAnimationFrame(()=>{this.measurements()})}active(){this.activated=!0,this.el.classList.add("active")}unactive(){this.unactivated=!0,this.el.classList.remove("active")}recalculate(){this.target.removeChild(this.el),this.measurements()}measurements(){let e=this.target.getBoundingClientRect(),t=e.width+this.paddingX,s=e.height+this.paddingY,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"width",t),i.setAttributeNS(null,"height",s),i.style.top=`-${this.paddingY/2}px`,i.style.left=`-${this.paddingX/2}px`;let n=document.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttributeNS(null,"width",t),n.setAttributeNS(null,"height",s),n.setAttributeNS(null,"stroke-dasharray",`${s} ${t}`),n.setAttributeNS(null,"stroke-dashoffset","-"+2*t),i.appendChild(n),this.el=i,this.target.appendChild(i)}}},341:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s(33);class r extends i.b{constructor(){super(),this.svgPaddingX=60,this.svgPaddingY=40,this.items=[],this.buttons=[],this.activeButton=1}execute(){this.htmlDefinition()}accessible(){this.el.setAttribute("tabIndex",1),this.el.focus(),this.keyDown=e=>{e.preventDefault(),37!=e.keyCode&&39!=e.keyCode&&9!=e.keyCode||(this.buttons[this.activeButton].unactive(),this.activeButton=0==this.activeButton?1:0,this.buttons[this.activeButton].active()),32!=e.keyCode&&13!=e.keyCode||this.buttons[this.activeButton].target.click()},this.el.addEventListener("keydown",this.keyDown)}unaccessible(){this.el.removeAttribute("tabIndex"),this.el.removeEventListener("keydown",this.keyDown)}htmlDefinition(){this.el=document.createElement("div"),this.el.classList.add("rwx-duo-selector"),this.el.id="rwx-duo-selector",document.body.appendChild(this.el)}selected(e){this.callback(e),this.opened=!1,this.unaccessible(),this.items.map(e=>e.classList.add("remove")),setTimeout(()=>{this.el.innerHTML="",this.items=[],this.buttons.map(e=>e.unactive()),this.buttons=[],this.el.classList.remove("active")},1e3)}validateOptions(e){return e?e.length<2?(this.error("setValues - requires at least 2 objects."),!1):(e.length>2&&this.error("setValues - only accepts 2 objects, using first 2."),!!(e[0].value&&e[0].displayName&&e[1].value&&e[1].displayName)||(this.error("setValues - value and displayName required."),!1)):(this.error("setValues - requires an array of objects."),!1)}setValues(e){if(!this.validateOptions(e)||this.opened)return;let t,s,i;e=e.slice(0,2);let r=[];this.opened=!0,this.el.classList.add("active"),this.accessible();for(let n of e)t=document.createElement("div"),t.classList.add("rwx-duo-selector-item"),s=document.createElement("div"),s.classList.add("rwx-duo-selector-item-button"),i=document.createElement("button"),i.classList.add("no-decoration"),i.innerText=n.displayName,i.classList.add("text"),s.addEventListener("click",()=>{this.selected(n.value)}),s.appendChild(i),t.appendChild(s),r.push(s),this.items.push(t),this.el.appendChild(t);return r.map(e=>{this.buttons.push(new n.a(e))}),new Promise((e,t)=>{this.callback=e})}}var o=new r;s(328),document.getElementById("setValuesDemo").addEventListener("click",()=>{const e=document.getElementById("setValue1Val").value,t=document.getElementById("setValue2Val").value,s=document.getElementById("selectedValue"),i=[{displayName:e,value:e},{displayName:t,value:t}];o.setValues(i).then(e=>{s.innerText=`You selected '${e}'`})})}});
//# sourceMappingURL=duoselectorpage.fd274627.js.map