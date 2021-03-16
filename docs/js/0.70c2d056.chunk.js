(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,i){"use strict";i.d(e,"b",(function(){return x.a})),i.d(e,"d",(function(){return n.a})),i.d(e,"a",(function(){return s.a})),i.d(e,"e",(function(){return y.a})),i.d(e,"c",(function(){return r}));var s=i(4),x=i(5),n=i(23),y=i(3);i(34);const a={toRadians:t=>t*Math.PI/180,getQuadraticBezierLength:(t,e,i)=>{let s,x,n,y,a,r,o,c,h,l,u,d,p;return d=2*e.x,p=2*e.y,a=t.x-d+i.x,l=t.y-p+i.y,n=d-2*t.x,c=p-2*t.y,h=s=4*(a*a+l*l),h+=x=4*(a*n+l*c),h+=y=n*n+c*c,h=2*Math.sqrt(h),o=2*s*(r=Math.sqrt(s)),u=x/r,s=4*y*s-x*x,y=2*Math.sqrt(y),(o*h+r*x*(h-y)+s*Math.log((2*r+u+h)/(u+y)))/(4*o)},getCoordinatesFromAngle:(t,e,i)=>({x:t.x+i*Math.cos(e),y:t.y+i*Math.sin(e)}),getAngle:(t,e)=>{let i=t.x-e.x,s=t.y-e.y,x=Math.atan2(-s,-i);return x*=180/Math.PI,x<0&&(x+=360),x},getDistance:(t,e)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),isInsideCircle:(t,e,i)=>(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)<=i*i,isInsideSector:(t,e,i,s,x)=>{function n(t,e,i,s){let x=(t.x+e)*Math.cos(i),n=(t.y+e)*Math.sin(i);return-x*s.y+n*s.x>0}let y={x:t.x-e.x,y:t.y-e.y};return!n(e,i,s,y)&&n(e,i,x,y)&&y.x*y.x+y.y*y.y<=i*i},isInsideArc:(t,e,i,s,x,n)=>a.isInsideSector(t,e,i,x,n)&&!a.isInsideCircle(t,e,s),closestPointOnCircumference:(t,e,i)=>({x:e.x+i*((t.x-e.x)/Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))),y:e.y+i*((t.y-e.y)/Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}),resolveCollision:(t,e,i=!1)=>{if(a.getDistance({x:t.x,y:t.y},{x:e.x,y:e.y})-t.radius-e.radius<=0){const s=t.velocity.x-e.velocity.x,x=t.velocity.y-e.velocity.y;if(s*(e.x-t.x)+x*(e.y-t.y)>=0){const s=-Math.atan2(e.y-t.y,e.x-t.x),x=a.rotateVelocities(t.velocity,s),n=a.rotateVelocities(e.velocity,s),y={x:x.x*(t.mass-e.mass)/(t.mass+e.mass)+2*n.x*e.mass/(t.mass+e.mass),y:x.y},r={x:n.x*(e.mass-t.mass)/(t.mass+e.mass)+2*x.x*e.mass/(t.mass+e.mass),y:n.y},o=a.rotateVelocities(y,-s),c=a.rotateVelocities(r,-s);t.velocity.x=o.x,t.velocity.y=o.y,i||(e.velocity.x=c.x,e.velocity.y=c.y)}}},rotateVelocities:(t,e)=>({x:t.x*Math.cos(e)-t.y*Math.sin(e),y:t.x*Math.sin(e)+t.y*Math.cos(e)})};var r=a},15:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return x}));class s{constructor(t,e,i,s,x,n,y=1,a={x:0,y:0}){Object.assign(this,{x:t,y:e,size:i,shape:s,color:x,c:n,mass:y,velocity:a}),this.setRadius(i)}setRadius(t){this.radius=t/2,this.size=t}update(t,e){this.x=t,this.y=e,this.draw()}draw(){this.c.beginPath(),this.c.fillStyle=this.color,this[this.shape](),this.c.fill(),this.c.closePath()}square(){this.c.rect(this.x-this.radius,this.y-this.radius,this.size,this.size)}circle(){this.c.arc(this.x,this.y,this.radius,0,2*Math.PI)}}const x=["square","circle"]},17:function(t,e,i){"use strict";i.d(e,"a",(function(){return y})),i.d(e,"b",(function(){return a}));var s=i(2),x=i(15);const n=["horizontal","vertical","slanted","wrap"];class y extends s.b{constructor(t){super(`[${t}]`,!0),this.component=t,this.shapeDefault="circle",this.colorDefault="#FFFFFF",this.orientationDefault="horizontal",this.backgroundColorDefault="#000000"}execute(t,e){let i=t.hasAttribute(`data-${this.component}-value`);if(!i)return void this.error(`There is no value (data-${this.component}-value) attribute detected on the ${this.component} element.`);if(i=t.getAttribute(`data-${this.component}-value`),!i)return void this.error(`There is no value in the (data-${this.component}-value) attribute.`);let y=t.hasAttribute(`data-${this.component}-orientation`)?t.getAttribute(`data-${this.component}-orientation`):this.orientationDefault,a=t.hasAttribute(`data-${this.component}-shape`)?t.getAttribute(`data-${this.component}-shape`):this.shapeDefault,r=t.hasAttribute(`data-${this.component}-color`)?t.getAttribute(`data-${this.component}-color`):this.colorDefault,o=t.hasAttribute(`data-${this.component}-background-color`)?t.getAttribute(`data-${this.component}-background-color`):this.backgroundColorDefault;return x.b.includes(a)||(this.error(`${a} is not a valid shape. Valid shapes include ['${x.b.join("', '")}']. Using '${this.shapeDefault}'.`),a=this.shapeDefault),n.includes(y)||(Object(s.c)(`${y} is not a valid orientation. Valid orientations include ['${n.join("', '")}']. Using '${rwxBitFontOrientationDefault}'.`,"rwxBitFont"),y=rwxBitFontOrientationDefault),this.execute2(t,e,i,y,a,r,o)}}const a=(t,e,i,s,x=!1)=>{if(!(t=r(t,e)))return;let n=[],y=c(i,x),a=0,h=[];if("wrap"==e&&t.includes("*")){let x=t.join("").split("*");n=x.map((t,n)=>o(t.length,n,x.length,e,i,s,y))}else n.push(o(t.length,0,0,e,i,s,y));let u=n[a].x,d=n[a].y;return t.map((t,e)=>{if("*"==t)return a+=1,u=n[a].x,void(d=n[a].y);if(" "!==t){let e=[];l[t].map(t=>{e.push({x:u+t.x*y.particleGap,y:d+t.y*y.particleGap})}),h.push({bitx:u,bity:d,matrix:e,dimensions:y})}u+=n[a].bitXPlus,d+=n[a].bitYPlus}),h},r=(t,e)=>{const i=[...t.toUpperCase()],x=Object.keys(l);x.push(" "),"wrap"==e&&x.push("*");const n=i.filter(t=>!x.includes(t));return n.length>0?(Object(s.c)(`[${n}] ${n.length>1?"are not supported bits":"is not a supported bit"}. Supported bits are [${Object.keys(l)}]. CASE INSENSITIVE. Note - '*' (carriage return) is only allowed if the 'wrap' orientation is specified.`,"rwxBitFont"),!1):i},o=(t,e=0,i=0,s,x,n,y)=>{let a,r,o,c;return"slanted"==s?(c=y.bitSize+y.bitSpacing,o=y.bitSpacing+20,r=n/2-(y.bitSpacing+20)*t/2,a=x/2-(t*y.bitSize+(t-1)*y.bitSpacing)/2):"wrap"==s?(c=y.bitSize+y.bitSpacing,o=0,r=n/2-(i*y.bitSize+(i-1)*y.bitSpacing)/2+e*(y.bitSize+1.5*y.bitSpacing),a=x/2-(t*y.bitSize+(t-1)*y.bitSpacing)/2):"vertical"==s?(c=0,o=y.bitSize+y.bitSpacing,a=x/2-y.bitSize/2,r=n/2-(t*y.bitSize+(t-1)*y.bitSpacing)/2):"horizontal"==s&&(c=y.bitSize+y.bitSpacing,o=0,r=n/2-y.bitSize/2,a=x/2-(t*y.bitSize+(t-1)*y.bitSpacing)/2),{x:a,y:r,bitXPlus:c,bitYPlus:o}},c=(t,e)=>e?h[e]:t<=500?h.sm:t>500&&t<=750?h.md:t>750&&t<=1e3?h.lg:t>1e3?h.xl:void 0,h={sm:{particleSize:2,particleGap:5,bitSize:20,bitSpacing:10},md:{particleSize:4,particleGap:10,bitSize:40,bitSpacing:25},lg:{particleSize:6,particleGap:15,bitSize:60,bitSpacing:40},xl:{particleSize:8,particleGap:20,bitSize:80,bitSpacing:55}},l={A:[{x:0,y:4},{x:.5,y:3},{x:1,y:2},{x:1.5,y:1},{x:2,y:0},{x:2.5,y:1},{x:3,y:2},{x:3.5,y:3},{x:4,y:4},{x:1.5,y:2.65},{x:2.5,y:2.65}],B:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:3.8,y:.5},{x:3.8,y:1.5},{x:3.8,y:2.5},{x:3.8,y:3.5},{x:3,y:4},{x:2,y:4},{x:1,y:4},{x:0,y:4},{x:0,y:3},{x:0,y:2},{x:0,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2}],C:[{x:1,y:.3},{x:2,y:0},{x:4,y:.3},{x:3,y:0},{x:3,y:4},{x:4,y:3.7},{x:2,y:4},{x:1,y:3.7},{x:.3,y:3},{x:0,y:2},{x:.3,y:1}],D:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:4},{x:2,y:3.9},{x:3,y:3.5},{x:3.8,y:2.8},{x:4,y:2},{x:3.8,y:1.2},{x:3,y:.5},{x:2,y:.1},{x:1,y:0}],E:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4}],F:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2}],G:[{x:1,y:.3},{x:2,y:0},{x:4,y:.3},{x:3,y:0},{x:3,y:4},{x:3.7,y:3.6},{x:2,y:4},{x:1,y:3.7},{x:.3,y:3},{x:0,y:2},{x:.3,y:1},{x:4,y:2.85},{x:4,y:2},{x:3,y:2},{x:2,y:2}],H:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4}],I:[{x:0,y:0},{x:1,y:0},{x:3,y:0},{x:4,y:0},{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:0,y:4},{x:1,y:4},{x:3,y:4},{x:4,y:4}],J:[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2.9,y:2.9},{x:2.4,y:3.6},{x:1.6,y:3.6},{x:1.1,y:2.9}],K:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:2.2},{x:2,y:1.5},{x:3,y:.8},{x:4,y:0},{x:2,y:2.8},{x:3,y:3.4},{x:4,y:4}],L:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4}],M:[{x:0,y:4},{x:0,y:3},{x:0,y:2},{x:0,y:1},{x:0,y:0},{x:.5,y:1},{x:1,y:2},{x:1.5,y:3},{x:2,y:4},{x:2.5,y:3},{x:3,y:2},{x:3.5,y:1},{x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4}],N:[{x:0,y:4},{x:0,y:3},{x:0,y:2},{x:0,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:2},{x:3,y:3},{x:4,y:4},{x:4,y:3},{x:4,y:2},{x:4,y:1},{x:4,y:0}],O:[{x:1,y:.3},{x:2,y:0},{x:3,y:.3},{x:3.7,y:1},{x:4,y:2},{x:3.7,y:3},{x:3,y:3.7},{x:2,y:4},{x:1,y:3.7},{x:.3,y:3},{x:0,y:2},{x:.3,y:1}],P:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:1,y:0},{x:2,y:0},{x:1,y:2},{x:2,y:2},{x:3,y:.1},{x:3.8,y:.35},{x:4,y:1},{x:3.8,y:1.65},{x:3,y:1.9}],Q:[{x:1,y:.3},{x:2,y:0},{x:3,y:.3},{x:3.7,y:1},{x:4,y:2},{x:3.7,y:3},{x:3,y:3.7},{x:2,y:4},{x:1,y:3.7},{x:.3,y:3},{x:0,y:2},{x:.3,y:1},{x:3.6,y:4},{x:2.35,y:3.35}],R:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:3.8,y:.5},{x:3.8,y:1.5},{x:3,y:2},{x:2,y:2},{x:1,y:2},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:3,y:3},{x:3.8,y:4}],S:[{x:3.8,y:.5},{x:3,y:0},{x:2,y:0},{x:1,y:0},{x:.2,y:.5},{x:.2,y:1.5},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:3.8,y:2.5},{x:3.8,y:3.5},{x:3,y:4},{x:2,y:4},{x:1,y:4},{x:.2,y:3.5}],T:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4}],U:[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:.5,y:3.6},{x:1.25,y:3.9},{x:2,y:4},{x:2.75,y:3.9},{x:3.5,y:3.6},{x:4,y:3},{x:4,y:2},{x:4,y:1},{x:4,y:0}],V:[{x:0,y:0},{x:.5,y:1},{x:1,y:2},{x:1.5,y:3},{x:2,y:4},{x:2.5,y:3},{x:3,y:2},{x:3.5,y:1},{x:4,y:0}],W:[{x:0,y:0},{x:.25,y:1},{x:.5,y:2},{x:.75,y:3},{x:1,y:4},{x:1.25,y:3},{x:1.5,y:2},{x:1.75,y:1},{x:2,y:0},{x:2.25,y:1},{x:2.5,y:2},{x:2.75,y:3},{x:3,y:4},{x:3.25,y:3},{x:3.5,y:2},{x:3.75,y:1},{x:4,y:0}],X:[{x:0,y:0},{x:.66,y:.66},{x:1.32,y:1.32},{x:2,y:2},{x:2.66,y:2.66},{x:3.32,y:3.32},{x:4,y:4},{x:4,y:0},{x:3.32,y:.66},{x:2.66,y:1.32},{x:1.32,y:2.66},{x:.66,y:3.32},{x:0,y:4}],Y:[{x:0,y:0},{x:.7,y:.7},{x:1.4,y:1.4},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:4,y:0},{x:3.3,y:.7},{x:2.6,y:1.4}],Z:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:3.2,y:.8},{x:2.4,y:1.6},{x:1.6,y:2.4},{x:.8,y:3.2},{x:0,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:4}],1:[{x:2,y:4},{x:2,y:3},{x:2,y:2},{x:2,y:1},{x:2,y:0},{x:1,y:0},{x:1,y:4},{x:1,y:4},{x:3,y:4}],2:[{x:.1,y:1.6},{x:.4,y:.7},{x:1.2,y:.15},{x:2.2,y:.1},{x:3.2,y:.3},{x:3.9,y:1},{x:3.5,y:1.85},{x:2.6,y:2.4},{x:1.7,y:2.9},{x:.8,y:3.4},{x:.1,y:4},{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:3.9,y:4}],3:[{x:.15,y:1},{x:.7,y:.3},{x:1.5,y:.1},{x:2.35,y:.1},{x:3.2,y:.3},{x:3.8,y:.8},{x:3.65,y:1.55},{x:2.9,y:2},{x:2,y:2},{x:3.65,y:2.45},{x:3.8,y:3.2},{x:3.2,y:3.7},{x:2.35,y:3.9},{x:1.5,y:3.9},{x:.7,y:3.7},{x:.15,y:3}],4:[{x:3,y:4},{x:3,y:3},{x:3,y:2},{x:3,y:1},{x:3,y:0},{x:2.2,y:.6},{x:1.4,y:1.4},{x:.6,y:2.2},{x:0,y:3},{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:4,y:3}],5:[{x:4,y:0},{x:3,y:0},{x:2,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:1.6},{x:2,y:1.6},{x:3,y:1.7},{x:3.8,y:2.2},{x:4,y:3},{x:3.6,y:3.7},{x:2.7,y:4},{x:1.7,y:4},{x:.7,y:3.9},{x:0,y:3.4}],6:[{x:3.9,y:.3},{x:2.9,y:0},{x:1.9,y:.1},{x:1,y:.3},{x:.3,y:.9},{x:0,y:1.7},{x:0,y:2.6},{x:.2,y:3.5},{x:1,y:3.9},{x:2,y:4},{x:3,y:3.9},{x:3.7,y:3.4},{x:4,y:2.7},{x:3.6,y:2},{x:2.8,y:1.8},{x:1.8,y:1.8},{x:.9,y:2.2}],7:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:3.35,y:.8},{x:2.55,y:1.5},{x:1.9,y:2.3},{x:1.3,y:3.1},{x:.8,y:4}],8:[{x:2,y:0},{x:1.15,y:.1},{x:.35,y:.3},{x:.1,y:1},{x:.35,y:1.7},{x:1.15,y:1.9},{x:2,y:2},{x:2.85,y:2.1},{x:3.65,y:2.3},{x:3.9,y:3},{x:3.65,y:3.7},{x:2.85,y:3.9},{x:2,y:4},{x:1.15,y:3.9},{x:.35,y:3.7},{x:.1,y:3},{x:.35,y:2.3},{x:1.15,y:2.1},{x:2.85,y:1.9},{x:3.65,y:1.7},{x:3.9,y:1},{x:3.65,y:.3},{x:2.85,y:.1}],9:[{x:2,y:0},{x:1.15,y:.05},{x:.35,y:.4},{x:.1,y:1.1},{x:.35,y:1.9},{x:1.15,y:2.2},{x:2,y:2.3},{x:2.85,y:2.2},{x:3.65,y:1.9},{x:3.9,y:1.1},{x:3.65,y:.4},{x:2.85,y:.05},{x:3.3,y:2.7},{x:2.9,y:3.3},{x:2.5,y:4}],0:[{x:2,y:0},{x:1.15,y:.2},{x:.5,y:.6},{x:.2,y:1.3},{x:.1,y:2},{x:.2,y:2.7},{x:.5,y:3.4},{x:1.15,y:3.8},{x:2,y:4},{x:2.85,y:3.8},{x:3.5,y:3.4},{x:3.8,y:2.7},{x:3.9,y:2},{x:3.8,y:1.3},{x:3.5,y:.6},{x:2.85,y:.2}],"!":[{x:2,y:0},{x:2,y:.8},{x:2,y:1.6},{x:2,y:2.4},{x:2,y:4}],"?":[{x:.9,y:1},{x:1.2,y:.3},{x:2,y:0},{x:2.8,y:.3},{x:3.1,y:1},{x:2.65,y:1.55},{x:2,y:1.8},{x:2,y:2.6},{x:2,y:4}],",":[{x:0,y:4},{x:.5,y:3.5},{x:1,y:3}]}},2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return y})),i.d(e,"c",(function(){return a}));var s=i(3),x=i(5);class n{constructor(t,e=!1){t&&(this.internalMap={}),this.resourceName=this.constructor.name,this.execute?(this.execute=this.execute.bind(this),window.addEventListener("load",()=>{this.selector=t,this.canHaveManualControl=e,this.scanDOM()})):this.error("No execute method (this.execute) defined on instance.")}scanDOM(){this.selector?[...document.querySelectorAll(this.selector)].map(t=>{for(let e in this.internalMap)if(this.internalMap[e].el===t)return;const e=this.canHaveManualControl?this.execute(t,t.hasAttribute("data-rwx-manual-control")):this.execute(t);this.addIME(t.id,e)}):this.execute()}validateParameter(t,e,i){return typeof t===e||(this.error(`<${i}> expected parameter of type ${e} but got ${typeof t}.`),!1)}commence(t){const e=this.getIME(t);e&&e.scrolledIntoView()}getIMES(){return this.internalMap}addIME(t,e){let i=t;i?this.internalMap[i]&&this.error(`Duplicate ID #${t} detected. Things may not work as expected, please use unique ID's per Component.`):i=s.a.uniqueId(),this.internalMap[i]=e}getIME(t){return this.internalMap&&this.internalMap[t]?this.internalMap[t]:(Object.keys(this.internalMap).length>0&&this.error(`No element detected with id - ${t} \n[rwx] Possible ID's on this page are - ${Object.keys(this.internalMap).join(", ")}`),!1)}addEvent(t,e,i,s){if(!e||!s||!this.validateParameter(s,"function","addEvent"))return;const x=this.getIME(t);x&&!x.customEventsEnabled||x&&x.addEvent(e,s,i)}error(t){a(t,`{Core} (${this.resourceName})`)}}class y{constructor(t){this.resourceName=this.constructor.name,t&&(t.enableCustomEvents&&(this.customEventsEnabled=!0,this.availableEvents=[]),t.enableAnimationLoop&&(this.stopAnimation=!0,this.animateLoop=this.animateLoop.bind(this)),t.enableResizeDebounce&&(this.debounceThreshold=250,this.resizeDebounce()),t.enableScrollIntoView&&(this.stopScroll=!1,this.setScrollTrigger(200),this.scrollEvent=this.scrollEvent.bind(this),this.scroll()),t.enableMouseTracking&&(this.mouse={},this.lastmouse={},this.mousedEvent=this.mousedEvent.bind(this),window.addEventListener("mousemove",this.mousedEvent),window.addEventListener("touchmove",this.mousedEvent)))}mousedEvent(t){if(this.canvasDimensions=this.canvas.getBoundingClientRect(),t.target!==this.canvas)return;let e="touchmove"==t.type?t.touches[0].clientX:t.clientX;e-=this.canvasDimensions.left;let i="touchmove"==t.type?t.touches[0].clientY:t.clientY;i-=this.canvasDimensions.top,this.mouse={x:e,y:i},this.moused&&this.moused(),this.lastmouse=this.mouse}declareEvent(t){this[t]=[],this.availableEvents.push(t)}addEvent(t,e,i){this.availableEvents.includes(i)?"function"==typeof e?this[i].push({id:t,event:e}):this.error("addEvent - event parameter must be a function."):this.error("No custom event detected with name - "+i)}executeEvent(t,e){if(0==this[t].length)return;const i=this[t].filter(t=>t.id==e);0!=i.length&&i.map(t=>t.event())}setScrollTrigger(t){this.scrollTriggerOffset=window.innerHeight-t}scroll(){this.scrollErrorReported=!1,setTimeout(()=>{this.scrollEvent()},500),window.addEventListener("scroll",this.scrollEvent)}scrollEvent(){if(this.stopScroll)return;if(!this.scrolledIntoView)return void(this.scrollErrorReported||(this.error("No scrolledIntoView method (this.scrolledIntoView) defined on instance."),this.scrollErrorReported=!0));if(!this.el)return void(this.scrollErrorReported||(this.error("No element (this.el) defined on instance."),this.scrollErrorReported=!0));this.el.getBoundingClientRect().top<this.scrollTriggerOffset&&this.scrolledIntoView()}resizeDebounce(){this.debounceErrorReported=!1,window.addEventListener("resize",()=>{this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.resize?this.resize():this.debounceErrorReported||(this.error("No resize method (this.resize) defined on instance."),this.debounceErrorReported=!0)},this.debounceThreshold)})}startAnimation(){this.stopAnimation=!1,this.animateLoop()}animateLoop(){this.animate?this.stopAnimation||(requestAnimationFrame(this.animateLoop),this.c&&this.canvas&&!this.dontClearRect&&this.c.clearRect(0,0,this.canvas.width,this.canvas.height),this.animate()):this.error("No animate method (this.animate) defined on instance.")}elFullSizeAbsolute(){this.el.style.position="absolute",this.el.style.top="0px",this.el.style.left="0px",this.el.style.right="0px",this.el.style.bottom="0px",this.el.style.width="100%",this.el.style.height="100%"}createCanvas(){this.canvas=document.createElement("canvas"),this.c=this.canvas.getContext("2d"),this.el.appendChild(this.canvas),this.sizeCanvas()}sizeCanvas(){let t=this.el.getBoundingClientRect(),e=x.a.scale(this.canvas,this.c,this.canvasWidth||t.width,this.canvasHeight||t.height);this.width=this.canvas.width/e,this.height=this.canvas.height/e}error(t){a(t,`{Component} (${this.resourceName})`)}}const a=(t,e)=>{console.warn(`[rwx] ${e} - ${t}`)}},23:function(t,e,i){"use strict";const s={randomInt:(t,e)=>Math.floor(Math.random()*(e-t+1)+t),randomFloat:(t,e)=>Math.random()*(e-t)+t};e.a=s},3:function(t,e,i){"use strict";const s={uniqueIdList:[],uniqueId:()=>{const t="_"+Math.random().toString(36).substr(2,12);return s.uniqueIdList.includes(t)?s.uniqueId():(s.uniqueIdList.push(t),t)},setCookie:(t,e,i)=>{var s=new Date;s.setDate(s.getDate()+i);var x=escape(e)+(null==i?"":"; expires="+s.toUTCString());document.cookie=t+"="+x},getCookie:t=>{var e,i,s,x=document.cookie.split(";");for(e=0;e<x.length;e++)if(i=x[e].substr(0,x[e].indexOf("=")),s=x[e].substr(x[e].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==t)return unescape(s)},safeCloneArrayOfObjects:t=>{let e=[...t];return e.map((t,i)=>{e[i]=s.safeCloneObject(e[i])}),e},safeCloneObject:t=>Object.assign({},t),safeCloneArray:t=>[...t],shuffleArray:t=>{for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}},isHexValue:t=>/^#(?:[0-9a-f]{3}){1,2}$/i.test(t),convertHexToRGB:t=>{var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}};e.a=s},34:function(t,e,i){"use strict";const s={hasAncestor:(t,e)=>{const i=t.parentNode;return!i.matches("body")&&(i.matches(e)?i:s.hasAncestor(i,e))}};e.a=s},4:function(t,e,i){"use strict";var s=i(2);const x={EasingFunctions:{linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t*t:(4-2*t)*t-1,easeInCubic:t=>t*t*t,easeOutCubic:t=>--t*t*t+1,easeInOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1- --t*t*t*t,easeInOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1+--t*t*t*t*t,easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,easeInElastic:t=>(.04-.04/t)*Math.sin(25*t)+1,easeOutElastic:t=>.04*t/--t*Math.sin(25*t),easeInOutElastic:t=>(t-=.5)<0?(.02+.01/t)*Math.sin(50*t):(.02-.01/t)*Math.sin(50*t)+1},sanitizeEasing(t,e){return x.EasingFunctions[t]||this[e+"Easing"]?t:(this[e+"Easing"]=!0,Object(s.c)(`no '${t}'' easing function for id - ${e}, falling back to 'linear' timing.`,"(rwxAnimateHelpers)"),"linear")},sanitizeDuration(t,e){return Number.isInteger(t)||this[e+"Duration"]?t:(this[e+"Duration"]=!0,Object(s.c)(`duration for id - ${e} must be an integer, falling back to '1000'.`,"(rwxAnimateHelpers)"),1e3)},easingFunction(t,e,i){this[i]||(this[i]=performance.now());let s=(performance.now()-this[i])/e,n=x.EasingFunctions[t](s);return performance.now()-this[i]>e?1:n.toFixed(8)},deleteVars(t){delete this[t+"Easing"],delete this[t+"Duration"],delete this[t+"Ease"]}},n={getEasingValue:function(t,e="linear",i=1e3,s=(()=>{})){if(!t)return;this[t+"Easing"]||(this[t+"Easing"]=x.sanitizeEasing(e,t)),this[t+"Duration"]||(this[t+"Duration"]=x.sanitizeDuration(i,t));let n=x.easingFunction(this[t+"Easing"],this[t+"Duration"],t+"Ease",s);return n>=1?(s(),x.deleteVars(t),1):n},fromTo:function(t,e,i,s="linear",x=1e3,y=(()=>{})){let a=n.getEasingValue(i,s,x,y);return n.fromToCalc(t,e,a)},fromToCalc:function(t,e,i){return t+(e-t)*i},fromToBezier:function(t,e,i,s,n,y="linear",a=1e3,r=(()=>{})){if(!n)return;this[n+"Easing"]||(this[n+"Easing"]=x.sanitizeEasing(y,n)),this[n+"Duration"]||(this[n+"Duration"]=x.sanitizeDuration(a,n));let o=x.easingFunction(this[n+"Easing"],this[n+"Duration"],n+"Ease",r),c=3*(e.x-t.x),h=3*(i.x-e.x)-c,l=s.x-t.x-c-h,u=3*(e.y-t.y),d=3*(i.y-e.y)-u,p=s.y-t.y-u-d,m=l*(o*o*o)+h*(o*o)+c*o+t.x,g=p*(o*o*o)+d*(o*o)+u*o+t.y;return o>=1?(x.deleteVars(n),r(),{x:s.x,y:s.y}):{x:m,y:g}}};e.a=n},5:function(t,e,i){"use strict";const s={scale:(t,e,i,s)=>{const x=window.devicePixelRatio||1,n=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,y=x/n;return x!==n?(t.width=i*y,t.height=s*y,t.style.width=i+"px",t.style.height=s+"px"):(t.width=i,t.height=s,t.style.width="",t.style.height=""),e.scale(y,y),y},drawSector:(t,e,i,s,x)=>{t.beginPath(),t.arc(e.x,e.y,i/2,s,x),t.lineWidth=i,t.stroke(),t.closePath()},drawArc:(t,e,i,s,x,n)=>{t.beginPath(),t.arc(e.x,e.y,i-s/2,x,n),t.lineWidth=s,t.stroke(),t.closePath()}};e.a=s}}]);
//# sourceMappingURL=0.70c2d056.chunk.js.map