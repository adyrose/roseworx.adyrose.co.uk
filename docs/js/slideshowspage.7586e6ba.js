!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=355)}({2:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return a}));var s=i(3),n=i(5);class o{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const i=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,i)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,i){return typeof e===t||(this.error(`<${i}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let i=e;i?this.internalMap[i]&&this.error(`Duplicate ID #${e} detected. Things may not work as expected, please use unique ID's per Component.`):i=s.a.uniqueId(),this.internalMap[i]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element detected with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,i,s){if(!t||!s||!this.validateParameter(s,"function","addEvent"))return;const n=this.getIME(e);n&&!n.customEventsEnabled||n&&n.addEvent(t,s,i)}error(e){a(e,`{Core} (${this.resourceName})`)}}class r{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()),e.enableMouseTracking&&(this.mouse={},this.lastmouse={},this.mousedEvent=this.mousedEvent.bind(this),window.addEventListener("mousemove",this.mousedEvent),window.addEventListener("touchmove",this.mousedEvent)))}mousedEvent(e){if(this.canvasDimensions=this.canvas.getBoundingClientRect(),e.target!==this.canvas)return;let t="touchmove"==e.type?e.touches[0].clientX:e.clientX;t-=this.canvasDimensions.left;let i="touchmove"==e.type?e.touches[0].clientY:e.clientY;i-=this.canvasDimensions.top,this.mouse={x:t,y:i},this.moused&&this.moused(),this.lastmouse=this.mouse}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,i){this.availableEvents.includes(i)?"function"==typeof t?this[i].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event detected with name - "+i)}executeEvent(e,t){if(0==this[e].length)return;const i=this[e].filter(e=>e.id==t);0!=i.length&&i.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&!this.dontClearRect&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}elFullSizeAbsolute(){this.el.style.position="absolute",this.el.style.top="0px",this.el.style.left="0px",this.el.style.right="0px",this.el.style.bottom="0px",this.el.style.width="100%",this.el.style.height="100%"}createCanvas(){this.canvas=document.createElement("canvas"),this.c=this.canvas.getContext("2d"),this.el.appendChild(this.canvas),this.sizeCanvas()}sizeCanvas(){let e=this.el.getBoundingClientRect(),t=n.a.scale(this.canvas,this.c,this.canvasWidth||e.width,this.canvasHeight||e.height);this.width=this.canvas.width/t,this.height=this.canvas.height/t}error(e){a(e,`{Component} (${this.resourceName})`)}}const a=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},3:function(e,t,i){"use strict";const s={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return s.uniqueIdList.includes(e)?s.uniqueId():(s.uniqueIdList.push(e),e)},setCookie:(e,t,i)=>{var s=new Date;s.setDate(s.getDate()+i);var n=escape(t)+(null==i?"":"; expires="+s.toUTCString());document.cookie=e+"="+n},getCookie:e=>{var t,i,s,n=document.cookie.split(";");for(t=0;t<n.length;t++)if(i=n[t].substr(0,n[t].indexOf("=")),s=n[t].substr(n[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e)return unescape(s)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,i)=>{t[i]=s.safeCloneObject(t[i])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}},isHexValue:e=>/^#(?:[0-9a-f]{3}){1,2}$/i.test(e),convertHexToRGB:e=>{var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}};t.a=s},341:function(e,t,i){},355:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i(3);i(341);class o extends s.b{constructor(){super("[rwx-slideshow]")}execute(e){return new r(e)}}class r{constructor(e){this.slideshow=e,this.slides=[...this.slideshow.querySelectorAll(".slide")],0!=this.slides.length&&(this.nextslide=this.nextslide.bind(this),this.prevslide=this.prevslide.bind(this),this.addEventListeners=this.addEventListeners.bind(this),this.generateHTML(),this.addEventListeners(),this.width=this.slideshow.getBoundingClientRect().width,this.backgroundColors=["#84fab0","#8fd3f4","#f78ca0","#fbc2eb","#fa709a","#a6c1ee","#f9748f","#d4fc79","#96e6a1","#84fab0","#fee140","#8fd3f4","#fd868c","#fe9a8b"],n.a.shuffleArray(this.backgroundColors),this.counter=0,this.init())}generateHTML(){this.background=document.createElement("div"),this.background.classList.add("rwx-slideshow-background");const e=document.createElement("button");e.classList.add("no-decoration"),e.classList.add("prev-slide"),e.addEventListener("click",this.prevslide),this.prevslidebutton=e;const t=document.createElement("button");t.classList.add("next-slide"),t.classList.add("no-decoration"),t.addEventListener("click",this.nextslide),this.nextslidebutton=t,this.slidesContainer=document.createElement("div"),this.slidesContainer.classList.add("slide-container"),this.slides.map(e=>this.slidesContainer.appendChild(e)),this.slideshow.appendChild(this.background),this.slideshow.appendChild(e),this.slideshow.appendChild(t),this.slideshow.appendChild(this.slidesContainer)}addEventListeners(){document.body.addEventListener("keyup",e=>{switch(e.keyCode){case 39:this.nextslide();break;case 37:this.prevslide()}})}init(){this.background.style.backgroundImage=`linear-gradient(to right,${this.backgroundColors.join(",")})`,this.background.style.backgroundSize=this.backgroundColors.length*this.width+"px 100%",this.background.style.backgroundPosition="0 0",this.slidesContainer.style.width=100*this.slides.length+"%",this.slides.map(e=>{e.style.width=this.width+"px";let t=e.querySelector(".slide-content"),i=e.querySelector(".slide-title");e.addEventListener("mousemove",(function(s){let n=e.getBoundingClientRect(),o=n.width/2,r=n.height/2,a=s.x>=o?Math.abs(o-s.x):-(o-s.x),h=s.y>=r?r-s.y:Math.abs(r-s.y);t.style.transform=`rotateY(${a/100}deg) rotateX(${h/30}deg) translate(${a/40}px, ${h/30}px)`,i.style.transform=`rotateY(${a/100}deg) rotateX(${h/30}deg) translate(${a/40}px, ${h/30}px)`}))})}nextslide(){this.counter<this.slides.length-1&&(this.nextslidebutton.focus(),this.counter++,this.slideInToView(),this.background.style.backgroundPosition=`-${this.width*this.counter}px 0`)}prevslide(){this.counter>0&&(this.prevslidebutton.focus(),this.counter--,this.slideInToView(),this.background.style.backgroundPosition=`-${this.width*this.counter}px 0`)}slideInToView(){this.slides.map((e,t)=>{let i=.2;t==this.counter&&(i=1),e.style.transform=`translateX(${-100*this.counter}%) scale(${i})`})}}new o;window.addEventListener("load",()=>{const e=document.getElementById("slideshowdemocontainer");e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px"})},5:function(e,t,i){"use strict";const s={scale:(e,t,i,s)=>{const n=window.devicePixelRatio||1,o=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,r=n/o;return n!==o?(e.width=i*r,e.height=s*r,e.style.width=i+"px",e.style.height=s+"px"):(e.width=i,e.height=s,e.style.width="",e.style.height=""),t.scale(r,r),r},drawSector:(e,t,i,s,n)=>{e.beginPath(),e.arc(t.x,t.y,i/2,s,n),e.lineWidth=i,e.stroke(),e.closePath()},drawArc:(e,t,i,s,n,o)=>{e.beginPath(),e.arc(t.x,t.y,i-s/2,n,o),e.lineWidth=s,e.stroke(),e.closePath()}};t.a=s}});
//# sourceMappingURL=slideshowspage.7586e6ba.js.map