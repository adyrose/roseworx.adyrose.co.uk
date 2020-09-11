!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=335)}({0:function(e,t,n){"use strict";n.d(t,"b",(function(){return s.a})),n.d(t,"d",(function(){return o.a})),n.d(t,"a",(function(){return i.a})),n.d(t,"e",(function(){return r.a})),n.d(t,"c",(function(){return c}));var i=n(4),s=n(5),o=n(23),r=n(3);n(34);const a={toRadians:e=>e*Math.PI/180,getQuadraticBezierLength:(e,t,n)=>{let i,s,o,r,a,c,l,u,h,d,f,y,g;return y=2*t.x,g=2*t.y,a=e.x-y+n.x,d=e.y-g+n.y,o=y-2*e.x,u=g-2*e.y,h=i=4*(a*a+d*d),h+=s=4*(a*o+d*u),h+=r=o*o+u*u,h=2*Math.sqrt(h),l=2*i*(c=Math.sqrt(i)),f=s/c,i=4*r*i-s*s,r=2*Math.sqrt(r),(l*h+c*s*(h-r)+i*Math.log((2*c+f+h)/(f+r)))/(4*l)},getCoordinatesFromAngle:(e,t,n)=>({x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}),getAngle:(e,t)=>{let n=e.x-t.x,i=e.y-t.y,s=Math.atan2(-i,-n);return s*=180/Math.PI,s<0&&(s+=360),s},getDistance:(e,t)=>Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)),isInsideCircle:(e,t,n)=>(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)<=n*n,isInsideSector:(e,t,n,i,s)=>{function o(e,t,n,i){let s=(e.x+t)*Math.cos(n),o=(e.y+t)*Math.sin(n);return-s*i.y+o*i.x>0}let r={x:e.x-t.x,y:e.y-t.y};return!o(t,n,i,r)&&o(t,n,s,r)&&r.x*r.x+r.y*r.y<=n*n},isInsideArc:(e,t,n,i,s,o)=>a.isInsideSector(e,t,n,s,o)&&!a.isInsideCircle(e,t,i),closestPointOnCircumference:(e,t,n)=>({x:t.x+n*((e.x-t.x)/Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))),y:t.y+n*((e.y-t.y)/Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)))}),resolveCollision:(e,t,n=!1)=>{if(a.getDistance({x:e.x,y:e.y},{x:t.x,y:t.y})-e.radius-t.radius<=0){const i=e.velocity.x-t.velocity.x,s=e.velocity.y-t.velocity.y;if(i*(t.x-e.x)+s*(t.y-e.y)>=0){const i=-Math.atan2(t.y-e.y,t.x-e.x),s=a.rotateVelocities(e.velocity,i),o=a.rotateVelocities(t.velocity,i),r={x:s.x*(e.mass-t.mass)/(e.mass+t.mass)+2*o.x*t.mass/(e.mass+t.mass),y:s.y},c={x:o.x*(t.mass-e.mass)/(e.mass+t.mass)+2*s.x*t.mass/(e.mass+t.mass),y:o.y},l=a.rotateVelocities(r,-i),u=a.rotateVelocities(c,-i);e.velocity.x=l.x,e.velocity.y=l.y,n||(t.velocity.x=u.x,t.velocity.y=u.y)}}},rotateVelocities:(e,t)=>({x:e.x*Math.cos(t)-e.y*Math.sin(t),y:e.x*Math.sin(t)+e.y*Math.cos(t)})};var c=a},2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a}));var i=n(3),s=n(5);class o{constructor(e,t=!1){e&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{e?[...document.querySelectorAll(e)].map(e=>{const n=t?this.execute(e,e.hasAttribute("data-rwx-manual-control")):this.execute(e);this.addIME(e.id,n)}):this.execute()})):this.error("No execute method (this.execute) defined on instance.")}validateParameter(e,t,n){return typeof e===t||(this.error(`<${n}> expected parameter of type ${t} but got ${typeof e}.`),!1)}commence(e){const t=this.getIME(e);t&&t.scrolledIntoView()}getIMES(){return this.internalMap}addIME(e,t){let n=e;n?this.internalMap[n]&&this.error(`Duplicate ID #${e} detected. Things may not work as expected, please use unique ID's per Component.`):n=i.a.uniqueId(),this.internalMap[n]=t}getIME(e){return this.internalMap&&this.internalMap[e]?this.internalMap[e]:(Object.keys(this.internalMap).length>0&&this.error(`No element detected with id - ${e} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(e,t,n,i){if(!t||!i||!this.validateParameter(i,"function","addEvent"))return;const s=this.getIME(e);s&&!s.customEventsEnabled||s&&s.addEvent(t,i,n)}error(e){a(e,`{Core} (${this.resourceName})`)}}class r{constructor(e){this.resourceName=this.constructor.name,e&&(e.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),e.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),e.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),e.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()),e.enableMouseTracking&&(this.mouse={},this.lastmouse={},this.mousedEvent=this.mousedEvent.bind(this),window.addEventListener("mousemove",this.mousedEvent),window.addEventListener("touchmove",this.mousedEvent)))}mousedEvent(e){if(this.canvasDimensions=this.canvas.getBoundingClientRect(),e.target!==this.canvas)return;let t="touchmove"==e.type?e.touches[0].clientX:e.clientX;t-=this.canvasDimensions.left;let n="touchmove"==e.type?e.touches[0].clientY:e.clientY;n-=this.canvasDimensions.top,this.mouse={x:t,y:n},this.moused&&this.moused(),this.lastmouse=this.mouse}declareEvent(e){this[e]=[],this.availableEvents.push(e)}addEvent(e,t,n){this.availableEvents.includes(n)?"function"==typeof t?this[n].push({id:e,event:t}):this.error("addEvent - event parameter must be a function."):this.error("No custom event detected with name - "+n)}executeEvent(e,t){if(0==this[e].length)return;const n=this[e].filter(e=>e.id==t);0!=n.length&&n.map(e=>e.event())}setScrollTrigger(e){this.scrollTriggerOffset=window.innerHeight-e}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&!this.dontClearRect&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}elFullSizeAbsolute(){this.el.style.position="absolute",this.el.style.top="0px",this.el.style.left="0px",this.el.style.right="0px",this.el.style.bottom="0px",this.el.style.width="100%",this.el.style.height="100%"}createCanvas(){this.canvas=document.createElement("canvas"),this.c=this.canvas.getContext("2d"),this.el.appendChild(this.canvas),this.sizeCanvas()}sizeCanvas(){let e=this.el.getBoundingClientRect(),t=s.a.scale(this.canvas,this.c,this.canvasWidth||e.width,this.canvasHeight||e.height);this.width=this.canvas.width/t,this.height=this.canvas.height/t}error(e){a(e,`{Component} (${this.resourceName})`)}}const a=(e,t)=>{console.warn(`[rwx] ${t} - ${e}`)}},23:function(e,t,n){"use strict";const i={randomInt:(e,t)=>Math.floor(Math.random()*(t-e+1)+e),randomFloat:(e,t)=>Math.random()*(t-e)+e};t.a=i},3:function(e,t,n){"use strict";const i={uniqueIdList:[],uniqueId:()=>{const e="_"+Math.random().toString(36).substr(2,12);return i.uniqueIdList.includes(e)?i.uniqueId():(i.uniqueIdList.push(e),e)},setCookie:(e,t,n)=>{var i=new Date;i.setDate(i.getDate()+n);var s=escape(t)+(null==n?"":"; expires="+i.toUTCString());document.cookie=e+"="+s},getCookie:e=>{var t,n,i,s=document.cookie.split(";");for(t=0;t<s.length;t++)if(n=s[t].substr(0,s[t].indexOf("=")),i=s[t].substr(s[t].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))==e)return unescape(i)},safeCloneArrayOfObjects:e=>{let t=[...e];return t.map((e,n)=>{t[n]=i.safeCloneObject(t[n])}),t},safeCloneObject:e=>Object.assign({},e),safeCloneArray:e=>[...e],shuffleArray:e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}},isHexValue:e=>/^#(?:[0-9a-f]{3}){1,2}$/i.test(e),convertHexToRGB:e=>{var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}};t.a=i},335:function(e,t,n){"use strict";n.r(t);var i,s,o,r=n(0),a=!0;function c(e,t){const n=document.getElementById(e+"-demo");if(!n)return console.log("No Demo Canvas ID Found "+e),!1;const i=n.getContext("2d");r.b.scale(n,i,300,300);const s=document.getElementById(e+"-result");return s&&t&&(s.style.color="#3eee3e",s.textContent="Result : "+t),i.strokeStyle="#3eee3e",i.fillStyle="#3eee3e",i.lineWidth=3,i}function l(e,t,n=!1){const i=document.getElementById(e+"-result");if(i){i.style.color="#3eee3e";let e="Result : "+t;n&&(e+="\r\n"+n,i.style.whiteSpace="pre"),i.textContent=e}}window.addEventListener("load",()=>{l("getCookie","Is Great"),function(){let e=["a","b","c","d","e","f"];r.e.shuffleArray(e),l("shuffleArray",JSON.stringify(e))}(),function(){const e=[{a:"b"},{c:"d"},{e:"f"}],t=r.e.safeCloneArrayOfObjects(e);e[0]={g:"h"},e[2].e="i",l("safeCloneArrayOfObjects",JSON.stringify(t),"arr: "+JSON.stringify(e))}(),function(){const e={a:"b",c:"d",e:"f"},t=r.e.safeCloneObject(e);e.a="g",l("safeCloneObject",JSON.stringify(t),"obj: "+JSON.stringify(e))}(),function(){const e=["a","b","c","d","e","f"],t=r.e.safeCloneArray(e);e[3]="g",l("safeCloneArray",JSON.stringify(t),"arr: "+JSON.stringify(e))}(),l("uniqueId",r.e.uniqueId()),l("randomInt",r.d.randomInt(0,10)),l("randomFloat",r.d.randomFloat(0,1)),l("toRadians",r.c.toRadians(30)),function(){const e=c("getQuadraticBezierLength",r.c.getQuadraticBezierLength({x:50,y:50},{x:333,y:33},{x:250,y:250}));if(!e)return;e.beginPath(),e.moveTo(50,50),e.quadraticCurveTo(333,33,250,250),e.stroke(),e.closePath()}(),function(){const e=c("getDistance",r.c.getDistance({x:35,y:35},{x:265,y:265}));if(!e)return;e.beginPath(),e.moveTo(35,35),e.lineTo(265,265),e.stroke(),e.closePath(),e.strokeStyle="#000000",e.beginPath(),e.arc(35,35,10,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(265,265,10,0,2*Math.PI),e.stroke(),e.closePath()}(),function(){const e=c("isInsideCircle",r.c.isInsideCircle({x:175,y:175},{x:150,y:150},100));if(!e)return;e.beginPath(),e.arc(175,175,10,0,2*Math.PI),e.stroke(),e.closePath(),e.strokeStyle="#000000",e.beginPath(),e.arc(150,150,100,0,2*Math.PI),e.stroke(),e.closePath()}(),function(){const e=c("isInsideSector",r.c.isInsideSector({x:200,y:50},{x:150,y:150},150,r.c.toRadians(270),r.c.toRadians(360)));if(!e)return;e.beginPath(),e.arc(200,50,10,0,2*Math.PI),e.stroke(),e.closePath(),e.strokeStyle="#000000",e.globalCompositeOperation="destination-over",r.b.drawSector(e,{x:150,y:150},150,r.c.toRadians(270),r.c.toRadians(360))}(),function(){const e=c("isInsideArc",r.c.isInsideArc({x:50,y:100},{x:150,y:150},150,100,r.c.toRadians(180),r.c.toRadians(240)));if(!e)return;e.beginPath(),e.arc(50,100,10,0,2*Math.PI),e.stroke(),e.closePath(),e.strokeStyle="#000000",e.globalCompositeOperation="destination-over",r.b.drawArc(e,{x:150,y:150},150,50,r.c.toRadians(180),r.c.toRadians(240))}(),function(){let e=r.c.closestPointOnCircumference({x:130,y:190},{x:150,y:150},100);const t=c("closestPointOnCircumference",`{x: ${e.x}, y: ${e.y}}`);if(!t)return;t.beginPath(),t.arc(e.x,e.y,10,0,2*Math.PI),t.stroke(),t.closePath(),t.strokeStyle="#000000",t.beginPath(),t.arc(130,190,10,0,2*Math.PI),t.stroke(),t.closePath(),t.beginPath(),t.arc(150,150,100,0,2*Math.PI),t.stroke(),t.closePath()}(),function(){let e=r.c.getCoordinatesFromAngle({x:133,y:133},r.c.toRadians(120),80);const t=c("getCoordinatesFromAngle",`{x: ${e.x}, y: ${e.y}}`);if(!t)return;t.beginPath(),t.arc(e.x,e.y,10,0,2*Math.PI),t.stroke(),t.closePath(),t.strokeStyle="#000000",t.beginPath(),t.arc(133,133,10,0,2*Math.PI),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(133,133),t.lineTo(e.x,e.y),t.stroke(),t.closePath(),t.fillStyle="#000000",t.fillText("120 degrees",153,133),t.fillText("80 length",123,183)}(),function(){const e=c("getAngle",r.c.getAngle({x:200,y:200},{x:33,y:33}));if(!e)return;e.beginPath(),e.moveTo(200,200),e.lineTo(195,195),e.stroke(),e.closePath(),e.strokeStyle="#000000",e.beginPath(),e.arc(200,200,10,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.arc(33,33,10,0,2*Math.PI),e.stroke(),e.closePath()}(),function(){const e=c("drawSector");if(!e)return;r.b.drawSector(e,{x:150,y:150},150,r.c.toRadians(270),r.c.toRadians(360))}(),function(){const e=c("drawArc");if(!e)return;r.b.drawArc(e,{x:150,y:150},150,50,r.c.toRadians(180),r.c.toRadians(240))}(),function(){const e=c("fromTo");if(!e)return;(i=function(){if(a)return;e.clearRect(0,0,window.innerWidth,window.innerHeight);let t=r.a.fromTo(40,260,"circle1x","easeInOutQuad",2e3,()=>{console.log("fromTo done")}),n=r.a.fromTo(40,260,"circle1y","easeInOutQuad",2e3);e.beginPath(),e.arc(t,n,20,0,2*Math.PI),e.stroke(),e.fill(),window.requestAnimationFrame(i)})()}(),function(){const e=c("fromToBezier");if(!e)return;(s=function(){if(a)return;e.clearRect(0,0,window.innerWidth,window.innerHeight);let{x:t,y:n}=r.a.fromToBezier({x:40,y:40},{x:70,y:300},{x:300,y:0},{x:260,y:260},"circleBezier","easeInOutQuint",2e3,()=>{console.log("fromToBezier done")});e.beginPath(),e.arc(t,n,20,0,2*Math.PI),e.stroke(),e.fill(),window.requestAnimationFrame(s)})()}(),function(){const e=c("getEasingValue");if(!e)return;(o=function(){if(a)return;e.clearRect(0,0,window.innerWidth,window.innerHeight);let t=r.a.getEasingValue("getEasingValue","easeInCubic",2e3,()=>{console.log("getEasingValue done")}),n=r.a.fromToCalc(40,260,t);e.beginPath(),e.arc(n,30,20,0,2*Math.PI),e.stroke(),e.fill(),e.beginPath(),e.arc(n,130,20,0,2*Math.PI),e.stroke(),e.fill(),e.beginPath(),e.arc(n,230,20,0,2*Math.PI),e.stroke(),e.fill(),window.requestAnimationFrame(o)})()}(),"animate-helpers"==window.location.hash.replace("#","")&&(a=!1,i(),s(),o()),rwx.tabs.addEvent("js-helpers",3,"tabShow",()=>{a=!1,i(),s(),o()}),rwx.tabs.addEvent("js-helpers",3,"tabHide",()=>{a=!0})})},34:function(e,t,n){"use strict";const i={hasAncestor:(e,t)=>{const n=e.parentNode;return!n.matches("body")&&(n.matches(t)?n:i.hasAncestor(n,t))}};t.a=i},4:function(e,t,n){"use strict";var i=n(2);const s={EasingFunctions:{linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},sanitizeEasing(e,t){return s.EasingFunctions[e]||this[t+"Easing"]?e:(this[t+"Easing"]=!0,Object(i.c)(`no '${e}'' easing function for id - ${t}, falling back to 'linear' timing.`,"(rwxAnimateHelpers)"),"linear")},sanitizeDuration(e,t){return Number.isInteger(e)||this[t+"Duration"]?e:(this[t+"Duration"]=!0,Object(i.c)(`duration for id - ${t} must be an integer, falling back to '1000'.`,"(rwxAnimateHelpers)"),1e3)},easingFunction(e,t,n){this[n]||(this[n]=performance.now());let i=(performance.now()-this[n])/t,o=s.EasingFunctions[e](i);return performance.now()-this[n]>t?1:o.toFixed(8)},deleteVars(e){delete this[e+"Easing"],delete this[e+"Duration"],delete this[e+"Ease"]}},o={getEasingValue:function(e,t="linear",n=1e3,i=(()=>{})){if(!e)return;this[e+"Easing"]||(this[e+"Easing"]=s.sanitizeEasing(t,e)),this[e+"Duration"]||(this[e+"Duration"]=s.sanitizeDuration(n,e));let o=s.easingFunction(this[e+"Easing"],this[e+"Duration"],e+"Ease",i);return o>=1?(i(),s.deleteVars(e),1):o},fromTo:function(e,t,n,i="linear",s=1e3,r=(()=>{})){let a=o.getEasingValue(n,i,s,r);return o.fromToCalc(e,t,a)},fromToCalc:function(e,t,n){return e+(t-e)*n},fromToBezier:function(e,t,n,i,o,r="linear",a=1e3,c=(()=>{})){if(!o)return;this[o+"Easing"]||(this[o+"Easing"]=s.sanitizeEasing(r,o)),this[o+"Duration"]||(this[o+"Duration"]=s.sanitizeDuration(a,o));let l=s.easingFunction(this[o+"Easing"],this[o+"Duration"],o+"Ease",c),u=3*(t.x-e.x),h=3*(n.x-t.x)-u,d=i.x-e.x-u-h,f=3*(t.y-e.y),y=3*(n.y-t.y)-f,g=i.y-e.y-f-y,m=d*(l*l*l)+h*(l*l)+u*l+e.x,x=g*(l*l*l)+y*(l*l)+f*l+e.y;return l>=1?(s.deleteVars(o),c(),{x:i.x,y:i.y}):{x:m,y:x}}};t.a=o},5:function(e,t,n){"use strict";const i={scale:(e,t,n,i)=>{const s=window.devicePixelRatio||1,o=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,r=s/o;return s!==o?(e.width=n*r,e.height=i*r,e.style.width=n+"px",e.style.height=i+"px"):(e.width=n,e.height=i,e.style.width="",e.style.height=""),t.scale(r,r),r},drawSector:(e,t,n,i,s)=>{e.beginPath(),e.arc(t.x,t.y,n/2,i,s),e.lineWidth=n,e.stroke(),e.closePath()},drawArc:(e,t,n,i,s,o)=>{e.beginPath(),e.arc(t.x,t.y,n-i/2,s,o),e.lineWidth=i,e.stroke(),e.closePath()}};t.a=i}});
//# sourceMappingURL=toolboxpage.024069de.js.map