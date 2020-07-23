!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=347)}({1:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return o}));var r=i(3);class n{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const i=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,i)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,i){return typeof e===t||(this.error(`<${i}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let i=e;i?this.internalMap[i]&&this.error(`Duplicate ID #${e} found. Things may not work as expected, please use unique ID's per Component.`):i=r.a.uniqueId(),this.internalMap[i]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element found with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,i,r){if(!t||!r||!this.validateParameter(r,"function","addEvent"))return;const n=this.getIME(e);n&&!n.customEventsEnabled||n&&n.addEvent(t,r,i)}error(e){o(e,`{Core} (${this.resourceName})`)}}class s{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()))}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,i){this.availableEvents.includes(i)?"function"==typeof t?this[i].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event found with name - "+i)}executeEvent(e,t){if(0==this[e].length)return;const i=this[e].filter(e=>e.id==t);0!=i.length&&i.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}error(e){o(e,`{Component} (${this.resourceName})`)}}const o=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},3:function(e,t,i){"use strict";const r={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return r.uniqueIdList.includes(e)?r.uniqueId():(r.uniqueIdList.push(e),e)},setCookie:(e,t,i)=>{var r=new Date;r.setDate(r.getDate()+i);var n=escape(t)+(null==i?"":"; expires="+r.toUTCString());document.cookie=e+"="+n},getCookie:e=>{var t,i,r,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(i=n[t].substr(0,n[t].indexOf("=")),r=n[t].substr(n[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e)return unescape(r)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,i)=>{t[i]=r.safeCloneObject(t[i])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}};t.a=r},333:function(e,t,i){},347:function(e,t,i){"use strict";i.r(t);var r=i(1);i(333);class n extends r.b{constructor(){super("[rwx-number-switcher]")}execute(e){const t=e.hasAttribute("data-rwx-number-switcher-initial-value")?e.getAttribute("data-rwx-number-switcher-initial-value"):0,i=e.hasAttribute("data-rwx-number-switcher-stop-at-zero");return new s(e,t,i)}switch(e,t){if(!this.validateParameter(t,"number","switch"))return;const i=this.getIME(e);i&&i.switch(t)}}class s extends r.a{constructor(e,t,i){super({enableCustomEvents:!0,enableAnimationLoop:!0}),this.el=e,isNaN(t)?this.error("Initial value needs to be number"):(this.stopAtZero=i,this.htmlDefinition(),this.duration=1,t=parseInt(t),this.prevValue=t,this.format=new Intl.NumberFormat("en-GB",{style:"decimal"}),this.updateText(t))}htmlDefinition(){this.elValue=document.createElement("span"),this.elValue.classList.add("value"),this.el.appendChild(this.elValue)}updateText(e){this.elValue.innerText=this.formatNumber(e)}formatNumber(e){let t=this.format.formatToParts(e).filter(e=>"decimal"!=e.type&&"fraction"!=e.type),i="";return t.map(e=>i+=e.value),i}animate(){let e=this.prevValue+this.counter;this.prevValue<this.newValue&&e>this.newValue||this.prevValue>this.newValue&&e<this.newValue?(this.el.classList.remove("pulsate"),this.updateText(this.newValue),this.prevValue=this.newValue,this.stopAnimation=!0):this.updateText(e),this.counter+=this.prevValue<this.newValue?this.increment:-this.increment}switch(e,t=!1){if((e=parseInt(e))!=this.prevValue){if(this.counter=0,this.stopAtZero&&(e=e<0?0:e),this.newValue=e,this.increment=Math.abs(this.prevValue-this.newValue)/60/this.duration,this.el.classList.add("pulsate"),t)return this.updateText(e),void setTimeout(()=>{this.el.classList.remove("pulsate")},1e3);this.startAnimation()}}}var o=new n;document.getElementById("setNumberDemo").addEventListener("click",()=>{const e=document.getElementById("setNumberVal").value;[...document.querySelectorAll("[rwx-number-switcher]")].map(t=>{o.switch(t.id,parseInt(e))})})}});
//# sourceMappingURL=numberswitcherpage.a8268153.js.map