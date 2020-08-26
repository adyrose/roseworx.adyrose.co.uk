!function(e){var t={};function i(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=354)}({2:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return n})),i.d(t,"c",(function(){return r}));var s=i(3);i(4);class o{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const i=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,i)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,i){return typeof e===t||(this.error(`<${i}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let i=e;i?this.internalMap[i]&&this.error(`Duplicate ID #${e} detected. Things may not work as expected, please use unique ID's per Component.`):i=s.a.uniqueId(),this.internalMap[i]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element detected with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,i,s){if(!t||!s||!this.validateParameter(s,"function","addEvent"))return;const o=this.getIME(e);o&&!o.customEventsEnabled||o&&o.addEvent(t,s,i)}error(e){r(e,`{Core} (${this.resourceName})`)}}class n{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()),e.enableMouseTracking&&(this.mouse={},this.lastmouse={},this.mousedEvent=this.mousedEvent.bind(this),window.addEventListener("mousemove",this.mousedEvent),window.addEventListener("touchmove",this.mousedEvent)))}mousedEvent(e){if(this.canvasDimensions=this.canvas.getBoundingClientRect(),e.target!==this.canvas)return;let t="touchmove"==e.type?e.touches[0].pageX:e.clientX;t-=this.canvasDimensions.left;let i="touchmove"==e.type?e.touches[0].pageY:e.clientY;i-=this.canvasDimensions.top,this.mouse={x:t,y:i},this.moused&&this.moused(),this.lastmouse=this.mouse}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,i){this.availableEvents.includes(i)?"function"==typeof t?this[i].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event detected with name - "+i)}executeEvent(e,t){if(0==this[e].length)return;const i=this[e].filter(e=>e.id==t);0!=i.length&&i.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}error(e){r(e,`{Component} (${this.resourceName})`)}}const r=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},3:function(e,t,i){"use strict";const s={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return s.uniqueIdList.includes(e)?s.uniqueId():(s.uniqueIdList.push(e),e)},setCookie:(e,t,i)=>{var s=new Date;s.setDate(s.getDate()+i);var o=escape(t)+(null==i?"":"; expires="+s.toUTCString());document.cookie=e+"="+o},getCookie:e=>{var t,i,s,o=document.cookie.split(";");for(t=0;t<o.length;t++)if(i=o[t].substr(0,o[t].indexOf("=")),s=o[t].substr(o[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e)return unescape(s)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,i)=>{t[i]=s.safeCloneObject(t[i])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}};t.a=s},338:function(e,t,i){},354:function(e,t,i){"use strict";i.r(t);var s=i(2);class o extends s.b{constructor(){super(),this.noticeBoxDelay=5,this.defaultPosition="bottom-left",this.positions=["top-left","bottom-left","top-right","bottom-right"]}execute(){this.htmlDefinition()}htmlDefinition(){this.el=document.createElement("div"),this.el.classList.add("rwx-notice-box"),this.el.classList.add("--bottom-left"),this.valueEl=document.createElement("span"),this.valueEl.classList.add("value"),this.el.appendChild(this.valueEl),document.body.appendChild(this.el)}setPosition(e){this.positions.map(e=>this.el.classList.remove("--"+e)),this.el.classList.add("--"+e)}setConfig(e){e?(void 0!==e.delay&&"number"==typeof e.delay&&(this.noticeBoxDelay=e.delay),void 0!==e.position&&this.positions.includes(e.position)&&this.setPosition(e.position)):this.error("setConfig - requires an object")}setValue(e,t=!1,i=!1){clearTimeout(this.noticeBoxTimeout),""!=e&&(this.valueEl.innerText=e,this.el.classList.add("show")),t||""!=e||(t=!0),t&&(this.noticeBoxTimeout=setTimeout(()=>{this.el.classList.remove("show"),i&&i()},1e3*this.noticeBoxDelay))}close(){this.el.classList.remove("show")}}var n=new o;i(338),document.getElementById("setValueDemo").addEventListener("click",()=>{const e=document.getElementById("setValueVal").value;n.setValue(e,!0,()=>{console.log("done")})})},4:function(e,t,i){"use strict";const s={scale:(e,t,i,s)=>{const o=window.devicePixelRatio||1,n=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,r=o/n;return o!==n?(e.width=i*r,e.height=s*r,e.style.width=i+"px",e.style.height=s+"px"):(e.width=i,e.height=s,e.style.width="",e.style.height=""),t.scale(r,r),r},drawSector:(e,t,i,s,o)=>{e.beginPath(),e.arc(t.x,t.y,i/2,s,o),e.lineWidth=i,e.stroke(),e.closePath()},drawArc:(e,t,i,s,o,n)=>{e.beginPath(),e.arc(t.x,t.y,i-s/2,o,n),e.lineWidth=s,e.stroke(),e.closePath()}};t.a=s}});
//# sourceMappingURL=noticeboxpage.3f6d81e5.js.map