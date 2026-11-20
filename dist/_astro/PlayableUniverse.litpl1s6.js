import{j as F,l as ba,m as vl,n as Sl,o as Ml,g as Ar,p as El,q as yl,r as bl,a as wr,s as Tl,t as Al,u as wl,v as Rl,w as Cl,x as Pl,k as Ll,y as Nl,z as Dl,A as Il}from"./index.DakNSfDz.js";import{r as bt}from"./index.B52nOzfP.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ys="187",Ul=0,Ta=1,Fl=2,sr=1,Ol=2,Ei=3,kn=0,Ot=1,Qt=2,oi=0,bi=1,Aa=2,wa=3,Ra=4,Bl=5,si=100,zl=101,Gl=102,Hl=103,kl=104,Vl=200,Wl=201,Xl=202,ql=203,bo=204,To=205,Yl=206,Kl=207,Zl=208,$l=209,Jl=210,Ql=211,jl=212,ec=213,tc=214,is=0,rs=1,ss=2,Ti=3,as=4,os=5,ls=6,cs=7,Ao=0,nc=1,ic=2,vn=0,wo=1,Ro=2,Co=3,Po=4,Lo=5,No=6,Do=7,Io=300,ci=301,Ai=302,Rr=303,Cr=304,us=1e3,xn=1001,ds=1002,Tt=1003,rc=1004,Ui=1005,Ft=1006,Pr=1007,Pn=1008,Xt=1009,Uo=1010,Fo=1011,wi=1012,Ks=1013,ln=1014,sn=1015,cn=1016,Zs=1017,$s=1018,ui=1020,Oo=35902,Bo=35899,zo=1021,Go=1022,an=1023,Dn=1026,Ln=1027,Ho=1028,Js=1029,Vn=1030,Qs=1031,js=1033,ar=33776,or=33777,lr=33778,cr=33779,hs=35840,fs=35841,ps=35842,ms=35843,gs=36196,_s=37492,xs=37496,vs=37488,Ss=37489,hr=37490,Ms=37491,Es=37808,ys=37809,bs=37810,Ts=37811,As=37812,ws=37813,Rs=37814,Cs=37815,Ps=37816,Ls=37817,Ns=37818,Ds=37819,Is=37820,Us=37821,Fs=36492,Os=36494,Bs=36495,zs=36283,Gs=36284,fr=36285,Hs=36286,sc=3200,Ca=0,ac=1,Cn="",Wt="srgb",pr="srgb-linear",mr="linear",Je="srgb",Lr=7680,oc=519,lc=512,cc=513,uc=514,ko=515,dc=516,hc=517,Vo=518,Wo=519,fc=35044,Pa="300 es",en=2e3,gr=2001;function pc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mc(){const i=_r("canvas");return i.style.display="block",i}const La={};function Na(...i){const e="THREE."+i.shift();console.log(e,...i)}function Xo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Xo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Xo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ur(...i){const e=i.join(" ");e in La||(La[e]=!0,De(...i))}function gc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const _c={[is]:is,[ss]:ls,[as]:as,[Ti]:os,[rs]:rs,[ls]:ss,[cs]:cs,[os]:Ti};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,ks=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function xc(i,e){return(i%e+e)%e}function Dr(i,e,t){return(1-t)*i+t*e}function vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ea(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sc(i,e){if(e.constructor===Float32Array)return i;const t=ea(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Mc(i,e){if(e.constructor===Float32Array)return i;const t=ea(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class We{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],p=n[r+2],g=n[r+3],h=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(g!==y||c!==h||l!==m||p!==x){let f=c*h+l*m+p*x+g*y;f<0&&(h=-h,m=-m,x=-x,y=-y,f=-f);let u=1-o;if(f<.9995){const S=Math.acos(f),w=Math.sin(S);u=Math.sin(u*S)/w,o=Math.sin(o*S)/w,c=c*u+h*o,l=l*u+m*o,p=p*u+x*o,g=g*u+y*o}else{c=c*u+h*o,l=l*u+m*o,p=p*u+x*o,g=g*u+y*o;const S=1/Math.sqrt(c*c+l*l+p*p+g*g);c*=S,l*=S,p*=S,g*=S}}e[t]=c,e[t+1]=l,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],p=n[r+3],g=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+p*g+c*m-l*h,e[t+1]=c*x+p*h+l*g-o*m,e[t+2]=l*x+p*m+o*h-c*g,e[t+3]=p*x-o*g-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),p=o(r/2),g=o(s/2),h=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*p*g+l*m*x,this._y=l*m*g-h*p*x,this._z=l*p*x+h*m*g,this._w=l*p*g-h*m*x;break;case"YXZ":this._x=h*p*g+l*m*x,this._y=l*m*g-h*p*x,this._z=l*p*x-h*m*g,this._w=l*p*g+h*m*x;break;case"ZXY":this._x=h*p*g-l*m*x,this._y=l*m*g+h*p*x,this._z=l*p*x+h*m*g,this._w=l*p*g-h*m*x;break;case"ZYX":this._x=h*p*g-l*m*x,this._y=l*m*g+h*p*x,this._z=l*p*x-h*m*g,this._w=l*p*g+h*m*x;break;case"YZX":this._x=h*p*g+l*m*x,this._y=l*m*g+h*p*x,this._z=l*p*x-h*m*g,this._w=l*p*g-h*m*x;break;case"XZY":this._x=h*p*g-l*m*x,this._y=l*m*g-h*p*x,this._z=l*p*x+h*m*g,this._w=l*p*g+h*m*x;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],p=t[6],g=t[10],h=n+o+g;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,p=t._w;return this._x=n*p+a*o+r*l-s*c,this._y=r*p+a*c+s*o-n*l,this._z=s*p+a*l+n*c-r*o,this._w=a*p-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),p=Math.sin(l);c=Math.sin(c*l)/p,t=Math.sin(t*l)/p,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),p=2*(o*t-s*r),g=2*(s*n-a*t);return this.x=t+c*l+a*g-o*p,this.y=n+c*p+o*l-s*g,this.z=r+c*g+s*p-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new H,Da=new fi;class Fe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=c,p[6]=n,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],p=n[4],g=n[7],h=n[2],m=n[5],x=n[8],y=r[0],f=r[3],u=r[6],S=r[1],w=r[4],E=r[7],R=r[2],b=r[5],d=r[8];return s[0]=a*y+o*S+c*R,s[3]=a*f+o*w+c*b,s[6]=a*u+o*E+c*d,s[1]=l*y+p*S+g*R,s[4]=l*f+p*w+g*b,s[7]=l*u+p*E+g*d,s[2]=h*y+m*S+x*R,s[5]=h*f+m*w+x*b,s[8]=h*u+m*E+x*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8];return t*a*p-t*o*l-n*s*p+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=p*a-o*l,h=o*c-p*s,m=l*s-a*c,x=t*g+n*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=g*y,e[1]=(r*l-p*n)*y,e[2]=(o*n-r*a)*y,e[3]=h*y,e[4]=(p*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Fe,Ia=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ua=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ec(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:Ia,fromXYZ:Ua,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Ia,fromXYZ:Ua,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}const He=Ec();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class yc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yn===void 0&&(Yn=_r("canvas")),Yn.width=e.width,Yn.height=e.height;const r=Yn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bc=0;class ta{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fr(r[a].image)):s.push(Fr(r[a]))}else s=Fr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Tc=0;const Or=new H;class Dt extends qn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=xn,r=xn,s=Ft,a=Pn,o=an,c=Xt,l=Dt.DEFAULT_ANISOTROPY,p=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Ri(),this.name="",this.source=new ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Io;Dt.DEFAULT_ANISOTROPY=1;class pt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],p=c[4],g=c[8],h=c[1],m=c[5],x=c[9],y=c[2],f=c[6],u=c[10];if(Math.abs(p-h)<.01&&Math.abs(g-y)<.01&&Math.abs(x-f)<.01){if(Math.abs(p+h)<.1&&Math.abs(g+y)<.1&&Math.abs(x+f)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(m+1)/2,R=(u+1)/2,b=(p+h)/4,d=(g+y)/4,M=(x+f)/4;return w>E&&w>R?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=b/n,s=d/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=M/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=d/s,r=M/s),this.set(n,r,s,t),this}let S=Math.sqrt((f-x)*(f-x)+(g-y)*(g-y)+(h-p)*(h-p));return Math.abs(S)<.001&&(S=1),this.x=(f-x)/S,this.y=(g-y)/S,this.z=(h-p)/S,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Dt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ta(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qo extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wc extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class lt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,p,g,h,m,x,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,p,g,h,m,x,y,f)}set(e,t,n,r,s,a,o,c,l,p,g,h,m,x,y,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=p,u[10]=g,u[14]=h,u[3]=m,u[7]=x,u[11]=y,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),p=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const h=a*p,m=a*g,x=o*p,y=o*g;t[0]=c*p,t[4]=-c*g,t[8]=l,t[1]=m+x*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*p,m=c*g,x=l*p,y=l*g;t[0]=h+y*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*g,t[5]=a*p,t[9]=-o,t[2]=m*o-x,t[6]=y+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*p,m=c*g,x=l*p,y=l*g;t[0]=h-y*o,t[4]=-a*g,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*p,t[9]=y-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*p,m=a*g,x=o*p,y=o*g;t[0]=c*p,t[4]=x*l-m,t[8]=h*l+y,t[1]=c*g,t[5]=y*l+h,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*p,t[4]=y-h*g,t[8]=x*g+m,t[1]=g,t[5]=a*p,t[9]=-o*p,t[2]=-l*p,t[6]=m*g+x,t[10]=h-y*g}else if(e.order==="XZY"){const h=a*c,m=a*l,x=o*c,y=o*l;t[0]=c*p,t[4]=-g,t[8]=l*p,t[1]=h*g+y,t[5]=a*p,t[9]=m*g-x,t[2]=x*g-m,t[6]=o*p,t[10]=y*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rc,e,Cc)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),yn.crossVectors(n,Gt),yn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),yn.crossVectors(n,Gt)),yn.normalize(),Fi.crossVectors(Gt,yn),r[0]=yn.x,r[4]=Fi.x,r[8]=Gt.x,r[1]=yn.y,r[5]=Fi.y,r[9]=Gt.y,r[2]=yn.z,r[6]=Fi.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],p=n[1],g=n[5],h=n[9],m=n[13],x=n[2],y=n[6],f=n[10],u=n[14],S=n[3],w=n[7],E=n[11],R=n[15],b=r[0],d=r[4],M=r[8],I=r[12],P=r[1],A=r[5],D=r[9],z=r[13],L=r[2],V=r[6],Z=r[10],q=r[14],se=r[3],K=r[7],ie=r[11],re=r[15];return s[0]=a*b+o*P+c*L+l*se,s[4]=a*d+o*A+c*V+l*K,s[8]=a*M+o*D+c*Z+l*ie,s[12]=a*I+o*z+c*q+l*re,s[1]=p*b+g*P+h*L+m*se,s[5]=p*d+g*A+h*V+m*K,s[9]=p*M+g*D+h*Z+m*ie,s[13]=p*I+g*z+h*q+m*re,s[2]=x*b+y*P+f*L+u*se,s[6]=x*d+y*A+f*V+u*K,s[10]=x*M+y*D+f*Z+u*ie,s[14]=x*I+y*z+f*q+u*re,s[3]=S*b+w*P+E*L+R*se,s[7]=S*d+w*A+E*V+R*K,s[11]=S*M+w*D+E*Z+R*ie,s[15]=S*I+w*z+E*q+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],p=e[2],g=e[6],h=e[10],m=e[14],x=e[3],y=e[7],f=e[11],u=e[15],S=c*m-l*h,w=o*m-l*g,E=o*h-c*g,R=a*m-l*p,b=a*h-c*p,d=a*g-o*p;return t*(y*S-f*w+u*E)-n*(x*S-f*R+u*b)+r*(x*w-y*R+u*d)-s*(x*E-y*b+f*d)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],p=e[10];return t*(a*p-o*l)-n*(s*p-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=e[9],h=e[10],m=e[11],x=e[12],y=e[13],f=e[14],u=e[15],S=t*o-n*a,w=t*c-r*a,E=t*l-s*a,R=n*c-r*o,b=n*l-s*o,d=r*l-s*c,M=p*y-g*x,I=p*f-h*x,P=p*u-m*x,A=g*f-h*y,D=g*u-m*y,z=h*u-m*f,L=S*z-w*D+E*A+R*P-b*I+d*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=(o*z-c*D+l*A)*V,e[1]=(r*D-n*z-s*A)*V,e[2]=(y*d-f*b+u*R)*V,e[3]=(h*b-g*d-m*R)*V,e[4]=(c*P-a*z-l*I)*V,e[5]=(t*z-r*P+s*I)*V,e[6]=(f*E-x*d-u*w)*V,e[7]=(p*d-h*E+m*w)*V,e[8]=(a*D-o*P+l*M)*V,e[9]=(n*P-t*D-s*M)*V,e[10]=(x*b-y*E+u*S)*V,e[11]=(g*E-p*b-m*S)*V,e[12]=(o*I-a*A-c*M)*V,e[13]=(t*A-n*I+r*M)*V,e[14]=(y*w-x*R-f*S)*V,e[15]=(p*R-g*w+h*S)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,p=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,p*o+n,p*c-r*a,0,l*c-r*o,p*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,p=a+a,g=o+o,h=s*l,m=s*p,x=s*g,y=a*p,f=a*g,u=o*g,S=c*l,w=c*p,E=c*g,R=n.x,b=n.y,d=n.z;return r[0]=(1-(y+u))*R,r[1]=(m+E)*R,r[2]=(x-w)*R,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(h+u))*b,r[6]=(f+S)*b,r[7]=0,r[8]=(x+w)*d,r[9]=(f-S)*d,r[10]=(1-(h+y))*d,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),c=Kn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yt.copy(this);const l=1/a,p=1/o,g=1/c;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=p,Yt.elements[5]*=p,Yt.elements[6]*=p,Yt.elements[8]*=g,Yt.elements[9]*=g,Yt.elements[10]*=g,t.setFromRotationMatrix(Yt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,p=2*s/(t-e),g=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let x,y;if(c)x=s/(a-s),y=a*s/(a-s);else if(o===en)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===gr)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=g,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,p=2/(t-e),g=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,y;if(c)x=1/(a-s),y=a/(a-s);else if(o===en)x=-2/(a-s),y=-(a+s)/(a-s);else if(o===gr)x=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=g,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new H,Yt=new lt,Rc=new H(0,0,0),Cc=new H(1,1,1),yn=new H,Fi=new H,Gt=new H,Fa=new lt,Oa=new fi;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],p=r[9],g=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pc=0;const Ba=new H,Zn=new fi,dn=new lt,Oi=new H,_i=new H,Lc=new H,Nc=new fi,za=new H(1,0,0),Ga=new H(0,1,0),Ha=new H(0,0,1),ka={type:"added"},Dc={type:"removed"},$n={type:"childadded",child:null},Br={type:"childremoved",child:null};class Bt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new H,t=new Wn,n=new fi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Fe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return Ba.copy(e).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(_i,Oi,this.up):dn.lookAt(Oi,_i,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(dn),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ka),$n.child=e,this.dispatchEvent($n),$n.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ka),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,Lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Nc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const g=c[l];s(e.shapes,g)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),p=a(e.images),g=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new H(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ic={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),u=this._getHandJoint(l,y);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const p=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],h=p.position.distanceTo(g.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ic)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Bi={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=xc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Gr(a,s,e+1/3),this.g=Gr(a,s,e),this.b=Gr(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Wt){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=Yo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return He.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const p=(o+a)/2;if(o===a)c=0,l=0;else{const g=a-o;switch(l=p<=.5?g/(a+o):g/(2-a-o),a){case n:c=(r-s)/g+(r<s?6:0);break;case r:c=(s-n)/g+2;break;case s:c=(n-r)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=p,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Wt){He.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Bi);const n=Dr(bn.h,Bi.h,t),r=Dr(bn.s,Bi.s,t),s=Dr(bn.l,Bi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ve;Ve.NAMES=Yo;class ia{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uc extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kt=new H,hn=new H,Hr=new H,fn=new H,Jn=new H,Qn=new H,Va=new H,kr=new H,Vr=new H,Wr=new H,Xr=new pt,qr=new pt,Yr=new pt;class jt{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),hn.subVectors(n,t),Hr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(hn),c=Kt.dot(Hr),l=hn.dot(hn),p=hn.dot(Hr),g=a*l-o*o;if(g===0)return s.set(0,0,0),null;const h=1/g,m=(l*c-o*p)*h,x=(a*p-o*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Xr.setScalar(0),qr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(e,t),qr.fromBufferAttribute(e,n),Yr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xr,s.x),a.addScaledVector(qr,s.y),a.addScaledVector(Yr,s.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),hn.subVectors(e,t),Kt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Kt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Jn.subVectors(r,n),Qn.subVectors(s,n),kr.subVectors(e,n);const c=Jn.dot(kr),l=Qn.dot(kr);if(c<=0&&l<=0)return t.copy(n);Vr.subVectors(e,r);const p=Jn.dot(Vr),g=Qn.dot(Vr);if(p>=0&&g<=p)return t.copy(r);const h=c*g-p*l;if(h<=0&&c>=0&&p<=0&&c-p>0)return a=c/(c-p),t.copy(n).addScaledVector(Jn,a);Wr.subVectors(e,s);const m=Jn.dot(Wr),x=Qn.dot(Wr);if(x>=0&&m<=x)return t.copy(s);const y=m*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Qn,o);const f=p*x-m*g;if(f<=0&&g-p>=0&&m-x>=0)return Va.subVectors(s,r),o=(g-p)/(g-p+(m-x)),t.copy(r).addScaledVector(Va,o);const u=1/(f+y+h);return a=y*u,o=h*u,t.copy(n).addScaledVector(Jn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Gi.subVectors(this.max,xi),jn.subVectors(e.a,xi),ei.subVectors(e.b,xi),ti.subVectors(e.c,xi),Tn.subVectors(ei,jn),An.subVectors(ti,ei),On.subVectors(jn,ti);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-On.z,On.y,Tn.z,0,-Tn.x,An.z,0,-An.x,On.z,0,-On.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-On.y,On.x,0];return!Kr(t,jn,ei,ti,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,jn,ei,ti,Gi))?!1:(Hi.crossVectors(Tn,An),t=[Hi.x,Hi.y,Hi.z],Kr(t,jn,ei,ti,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new H,new H,new H,new H,new H,new H,new H,new H],Zt=new H,zi=new Ci,jn=new H,ei=new H,ti=new H,Tn=new H,An=new H,On=new H,xi=new H,Gi=new H,Hi=new H,Bn=new H;function Kr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bn.fromArray(i,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),p=n.dot(Bn);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>o)return!1}return!0}const ft=new H,ki=new We;let Fc=0;class Nn extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=e!==void 0?ea(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Mc(e,this.array)}}class Ko extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zo extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Oc=new Ci,vi=new H,Zr=new H;class Sr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Zr)),this.expandByPoint(vi.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bc=0;const Vt=new lt,$r=new Bt,ni=new H,Ht=new Ci,Si=new Ci,St=new H;class zt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Zo:Ko)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ht.min,Si.min),Ht.expandByPoint(St),St.addVectors(Ht.max,Si.max),Ht.expandByPoint(St)):(Ht.expandByPoint(Si.min),Ht.expandByPoint(Si.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)St.fromBufferAttribute(o,l),c&&(ni.fromBufferAttribute(e,l),St.add(ni)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new H,c[I]=new H;const p=new H,g=new H,h=new H,m=new We,x=new We,y=new We,f=new H,u=new H;function S(I,P,A){l[I]=l[P]=l[A]=1,p.fromBufferAttribute(n,I),g.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),m.fromBufferAttribute(s,I),x.fromBufferAttribute(s,P),y.fromBufferAttribute(s,A),g.sub(p),h.sub(p),x.sub(m),y.sub(m);const D=1/(x.x*y.y-y.x*x.y);isFinite(D)&&(f.copy(g).multiplyScalar(y.y).addScaledVector(h,-x.y).multiplyScalar(D),u.copy(h).multiplyScalar(x.x).addScaledVector(g,-y.x).multiplyScalar(D),o[I].add(f),o[P].add(f),o[A].add(f),c[I].add(u),c[P].add(u),c[A].add(u))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,P=w.length;I<P;++I){const A=w[I],D=A.start,z=A.count;for(let L=D,V=D+z;L<V;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new H,R=new H,b=new H,d=new H;function M(I){b.fromBufferAttribute(r,I),d.copy(b);const P=o[I];E.copy(P),E.sub(b.multiplyScalar(b.dot(P))).normalize(),R.crossVectors(d,P);const D=R.dot(c[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,D)}for(let I=0,P=n.count;I<P;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,p=new H,g=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,f),o.add(p),c.add(p),l.add(p),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,p=o.itemSize,g=o.normalized,h=new l.constructor(c.length*p);let m=0,x=0;for(let y=0,f=c.length;y<f;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*p;for(let u=0;u<p;u++)h[x++]=l[m++]}return new Nn(h,p,g)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let p=0,g=l.length;p<g;p++){const h=l[p],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let g=0,h=l.length;g<h;g++){const m=l[g];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],g=s[l];for(let h=0,m=g.length;h<m;h++)p.push(g[h].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,p=a.length;l<p;l++){const g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jr=new H,zc=new H,Gc=new Fe;class Rn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Jr.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Jr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gc.getNormalMatrix(e),r=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hc=0;class Pi extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=bi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=To,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new H,Qr=new H,Vi=new H,Wi=new H;class ra{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=Wi.dot(this.direction),c=-Wi.dot(Vi),l=Wi.lengthSq(),p=Math.abs(1-a*a);let g,h,m,x;if(p>0)if(g=a*c-o,h=a*o-c,x=s*p,g>=0)if(h>=-x)if(h<=x){const y=1/p;g*=y,h*=y,m=g*(g+a*h+2*o)+h*(a*g+h+2*c)+l}else h=s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;else h=-s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;else h<=-x?(g=Math.max(0,-(-a*s+o)),h=g>0?-s:Math.min(Math.max(-s,-c),s),m=-g*g+h*(h+2*c)+l):h<=x?(g=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(g=Math.max(0,-(a*s+o)),h=g>0?s:Math.min(Math.max(-s,-c),s),m=-g*g+h*(h+2*c)+l);else h=a>0?-s:s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Qr).addScaledVector(Vi,h),m}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),p>=0?(s=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),g>=0?(o=(e.min.z-h.z)*g,c=(e.max.z-h.z)*g):(o=(e.max.z-h.z)*g,c=(e.min.z-h.z)*g),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,p=o.z,g=e.x-a.x,h=e.y-a.y,m=e.z-a.z,x=t.x-a.x,y=t.y-a.y,f=t.z-a.z,u=n.x-a.x,S=n.y-a.y,w=n.z-a.z,E=Math.abs(c),R=Math.abs(l),b=Math.abs(p);let d,M,I,P,A,D,z,L,V,Z,q,se;if(E>=R&&E>=b?(I=c,D=g,V=x,se=u,c>=0?(d=l,M=p,P=h,A=m,z=y,L=f,Z=S,q=w):(d=p,M=l,P=m,A=h,z=f,L=y,Z=w,q=S)):R>=b?(I=l,D=h,V=y,se=S,l>=0?(d=p,M=c,P=m,A=g,z=f,L=x,Z=w,q=u):(d=c,M=p,P=g,A=m,z=x,L=f,Z=u,q=w)):(I=p,D=m,V=f,se=w,p>=0?(d=c,M=l,P=g,A=h,z=x,L=y,Z=u,q=S):(d=l,M=c,P=h,A=g,z=y,L=x,Z=S,q=u)),I===0)return null;const K=d/I,ie=M/I,re=1/I,Ee=P-K*D,Pe=A-ie*D,j=z-K*V,me=L-ie*V,Se=Z-K*se,Ce=q-ie*se,ge=Se*me-Ce*j,Ne=Ee*Ce-Pe*Se,it=j*Pe-me*Ee;if(r){if(ge<0||Ne<0||it<0)return null}else if((ge<0||Ne<0||it<0)&&(ge>0||Ne>0||it>0))return null;const we=ge+Ne+it;if(we===0)return null;const Ye=re*(ge*D+Ne*V+it*se);return(we>0?Ye<0:Ye>0)?null:this.at(Ye/we,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wa=new lt,zn=new ra,Xi=new Sr,Xa=new H,qi=new H,Yi=new H,Ki=new H,jr=new H,Zi=new H,qa=new H,$i=new H;class Pt extends Bt{constructor(e=new zt,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const p=o[c],g=s[c];p!==0&&(jr.fromBufferAttribute(g,e),a?Zi.addScaledVector(jr,p):Zi.addScaledVector(jr.sub(t),p))}t.add(Zi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Xi.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Xi,Xa)===null||zn.origin.distanceToSquared(Xa)>(e.far-e.near)**2))&&(Wa.copy(s).invert(),zn.copy(e.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,g=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const f=h[x],u=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=S,R=w;E<R;E+=3){const b=o.getX(E),d=o.getX(E+1),M=o.getX(E+2);r=Ji(this,u,e,n,l,p,g,b,d,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=x,u=y;f<u;f+=3){const S=o.getX(f),w=o.getX(f+1),E=o.getX(f+2);r=Ji(this,a,e,n,l,p,g,S,w,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const f=h[x],u=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=S,R=w;E<R;E+=3){const b=E,d=E+1,M=E+2;r=Ji(this,u,e,n,l,p,g,b,d,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=x,u=y;f<u;f+=3){const S=f,w=f+1,E=f+2;r=Ji(this,a,e,n,l,p,g,S,w,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function kc(i,e,t,n,r,s,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===kn,o),c===null)return null;$i.copy(o),$i.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($i);return l<t.near||l>t.far?null:{distance:l,point:$i.clone(),object:i}}function Ji(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,qi),i.getVertexPosition(c,Yi),i.getVertexPosition(l,Ki);const p=kc(i,e,t,n,qi,Yi,Ki,qa);if(p){const g=new H;jt.getBarycoord(qa,qi,Yi,Ki,g),r&&(p.uv=jt.getInterpolatedAttribute(r,o,c,l,g,new We)),s&&(p.uv1=jt.getInterpolatedAttribute(s,o,c,l,g,new We)),a&&(p.normal=jt.getInterpolatedAttribute(a,o,c,l,g,new H),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};jt.getNormal(qi,Yi,Ki,h.normal),p.face=h,p.barycoord=g}return p}class Vc extends Dt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Tt,p=Tt,g,h){super(null,a,o,c,l,p,r,s,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gn=new Sr,Wc=new We(.5,.5),Qi=new H;class xr{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],p=s[4],g=s[5],h=s[6],m=s[7],x=s[8],y=s[9],f=s[10],u=s[11],S=s[12],w=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-a,m-p,u-x,R-S).normalize(),r[1].setComponents(l+a,m+p,u+x,R+S).normalize(),r[2].setComponents(l+o,m+g,u+y,R+w).normalize(),r[3].setComponents(l-o,m-g,u-y,R-w).normalize(),n)r[4].setComponents(c,h,f,E).normalize(),r[5].setComponents(l-c,m-h,u-f,R-E).normalize();else if(r[4].setComponents(l-c,m-h,u-f,R-E).normalize(),t===en)r[5].setComponents(l+c,m+h,u+f,R+E).normalize();else if(t===gr)r[5].setComponents(c,h,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Wc.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qi.x=r.normal.x>0?e.max.x:e.min.x,Qi.y=r.normal.y>0?e.max.y:e.min.y,Qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ya=new lt;class sa{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Ya.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new xr),n[r].setFromProjectionMatrix(Ya,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new xr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new sa().copy(this)}}class $o extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ka=new lt,Vs=new ra,ji=new Sr,er=new H;class Xc extends Bt{constructor(e=new zt,t=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),ji.radius+=s,e.ray.intersectsSphere(ji)===!1)return;Ka.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(Ka);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,g=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=h,y=m;x<y;x++){const f=l.getX(x);er.fromBufferAttribute(g,f),Za(er,f,c,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let x=h,y=m;x<y;x++)er.fromBufferAttribute(g,x),Za(er,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Za(i,e,t,n,r,s,a){const o=Vs.distanceSqToPoint(i);if(o<t){const c=new H;Vs.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jo extends Dt{constructor(e=[],t=ci,n,r,s,a,o,c,l,p){super(e,t,n,r,s,a,o,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class di extends Dt{constructor(e,t,n=ln,r,s,a,o=Tt,c=Tt,l,p=Dn,g=1){if(p!==Dn&&p!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,r,s,a,o,c,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qo extends di{constructor(e,t=ln,n=ci,r,s,a=Tt,o=Tt,c,l=Dn){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,s,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jo extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pi extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],p=[],g=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(g,2));function x(y,f,u,S,w,E,R,b,d,M,I){const P=E/d,A=R/M,D=E/2,z=R/2,L=b/2,V=d+1,Z=M+1;let q=0,se=0;const K=new H;for(let ie=0;ie<Z;ie++){const re=ie*A-z;for(let Ee=0;Ee<V;Ee++){const Pe=Ee*P-D;K[y]=Pe*S,K[f]=re*w,K[u]=L,l.push(K.x,K.y,K.z),K[y]=0,K[f]=0,K[u]=b>0?1:-1,p.push(K.x,K.y,K.z),g.push(Ee/d),g.push(1-ie/M),q+=1}}for(let ie=0;ie<M;ie++)for(let re=0;re<d;re++){const Ee=h+re+V*ie,Pe=h+re+V*(ie+1),j=h+(re+1)+V*(ie+1),me=h+(re+1)+V*ie;c.push(Ee,Pe,me),c.push(Pe,j,me),se+=6}o.addGroup(m,se,I),m+=se,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mr extends zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const p=[],g=[],h=[],m=[];let x=0;const y=[],f=n/2;let u=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(p),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(m,2));function S(){const E=new H,R=new H;let b=0;const d=(t-e)/n;for(let M=0;M<=s;M++){const I=[],P=M/s,A=P*(t-e)+e;for(let D=0;D<=r;D++){const z=D/r,L=z*c+o,V=Math.sin(L),Z=Math.cos(L);R.x=A*V,R.y=-P*n+f,R.z=A*Z,g.push(R.x,R.y,R.z),E.set(V,d,Z).normalize(),h.push(E.x,E.y,E.z),m.push(z,1-P),I.push(x++)}y.push(I)}for(let M=0;M<r;M++)for(let I=0;I<s;I++){const P=y[I][M],A=y[I+1][M],D=y[I+1][M+1],z=y[I][M+1];(e>0||I!==0)&&(p.push(P,A,z),b+=3),(t>0||I!==s-1)&&(p.push(A,D,z),b+=3)}l.addGroup(u,b,0),u+=b}function w(E){const R=x,b=new We,d=new H;let M=0;const I=E===!0?e:t,P=E===!0?1:-1;for(let D=1;D<=r;D++)g.push(0,f*P,0),h.push(0,P,0),m.push(.5,.5),x++;const A=x;for(let D=0;D<=r;D++){const L=D/r*c+o,V=Math.cos(L),Z=Math.sin(L);d.x=I*Z,d.y=f*P,d.z=I*V,g.push(d.x,d.y,d.z),h.push(0,P,0),b.x=V*.5+.5,b.y=Z*.5*P+.5,m.push(b.x,b.y),x++}for(let D=0;D<r;D++){const z=R+D,L=A+D;E===!0?p.push(L,L+1,z):p.push(L+1,L,z),M+=3}l.addGroup(u,M,E===!0?1:2),u+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class aa extends Mr{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new aa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends zt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),p(),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(s.slice(),3)),this.setAttribute("uv",new rt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new H,E=new H,R=new H;for(let b=0;b<t.length;b+=3)m(t[b+0],w),m(t[b+1],E),m(t[b+2],R),c(w,E,R,S)}function c(S,w,E,R){const b=R+1,d=[];for(let M=0;M<=b;M++){d[M]=[];const I=S.clone().lerp(E,M/b),P=w.clone().lerp(E,M/b),A=b-M;for(let D=0;D<=A;D++)D===0&&M===b?d[M][D]=I:d[M][D]=I.clone().lerp(P,D/A)}for(let M=0;M<b;M++)for(let I=0;I<2*(b-M)-1;I++){const P=Math.floor(I/2);I%2===0?(h(d[M][P+1]),h(d[M+1][P]),h(d[M][P])):(h(d[M][P+1]),h(d[M+1][P+1]),h(d[M+1][P]))}}function l(S){const w=new H;for(let E=0;E<s.length;E+=3)w.x=s[E+0],w.y=s[E+1],w.z=s[E+2],w.normalize().multiplyScalar(S),s[E+0]=w.x,s[E+1]=w.y,s[E+2]=w.z}function p(){const S=new H;for(let w=0;w<s.length;w+=3){S.x=s[w+0],S.y=s[w+1],S.z=s[w+2];const E=f(S)/2/Math.PI+.5,R=u(S)/Math.PI+.5;a.push(E,1-R)}x(),g()}function g(){for(let S=0;S<a.length;S+=6){const w=a[S+0],E=a[S+2],R=a[S+4],b=Math.max(w,E,R),d=Math.min(w,E,R);b>.9&&d<.1&&(w<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,w){const E=S*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function x(){const S=new H,w=new H,E=new H,R=new H,b=new We,d=new We,M=new We;for(let I=0,P=0;I<s.length;I+=9,P+=6){S.set(s[I+0],s[I+1],s[I+2]),w.set(s[I+3],s[I+4],s[I+5]),E.set(s[I+6],s[I+7],s[I+8]),b.set(a[P+0],a[P+1]),d.set(a[P+2],a[P+3]),M.set(a[P+4],a[P+5]),R.copy(S).add(w).add(E).divideScalar(3);const A=f(R);y(b,P+0,S,A),y(d,P+2,w,A),y(M,P+4,E,A)}}function y(S,w,E,R){R<0&&S.x===1&&(a[w]=S.x-1),E.x===0&&E.z===0&&(a[w]=R/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.vertices,e.indices,e.radius,e.detail)}}class la extends oa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new la(e.radius,e.detail)}}class Li extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,p=c+1,g=e/o,h=t/c,m=[],x=[],y=[],f=[];for(let u=0;u<p;u++){const S=u*h-a;for(let w=0;w<l;w++){const E=w*g-s;x.push(E,-S,0),y.push(0,0,1),f.push(w/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const w=S+l*u,E=S+l*(u+1),R=S+1+l*(u+1),b=S+1+l*u;m.push(w,E,b),m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class ca extends zt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],p=[];let g=e;const h=(t-e)/r,m=new H,x=new We;for(let y=0;y<=r;y++){for(let f=0;f<=n;f++){const u=s+f/n*a;m.x=g*Math.cos(u),m.y=g*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,p.push(x.x,x.y)}g+=h}for(let y=0;y<r;y++){const f=y*(n+1);for(let u=0;u<n;u++){const S=u+f,w=S,E=S+n+1,R=S+n+2,b=S+1;o.push(w,E,b),o.push(E,R,b)}}this.setIndex(o),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ua extends zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const p=[],g=new H,h=new H,m=[],x=[],y=[],f=[];for(let u=0;u<=n;u++){const S=[],w=u/n,E=a+w*o,R=e*Math.cos(E),b=Math.sqrt(e*e-R*R);let d=0;u===0&&a===0?d=.5/t:u===n&&c===Math.PI&&(d=-.5/t);for(let M=0;M<=t;M++){const I=M/t,P=r+I*s;g.x=-b*Math.cos(P),g.y=R,g.z=b*Math.sin(P),x.push(g.x,g.y,g.z),h.copy(g).normalize(),y.push(h.x,h.y,h.z),f.push(I+d,1-w),S.push(l++)}p.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const w=p[u][S+1],E=p[u][S],R=p[u+1][S],b=p[u+1][S+1];(u!==0||a>0)&&m.push(w,E,b),(u!==n-1||c<Math.PI)&&m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class da extends zt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],p=[],g=[],h=new H,m=new H,x=new H;for(let y=0;y<=n;y++){const f=a+y/n*o;for(let u=0;u<=r;u++){const S=u/r*s;m.x=(e+t*Math.cos(f))*Math.cos(S),m.y=(e+t*Math.cos(f))*Math.sin(S),m.z=t*Math.sin(f),l.push(m.x,m.y,m.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),x.subVectors(m,h).normalize(),p.push(x.x,x.y,x.z),g.push(u/r),g.push(y/n)}}for(let y=1;y<=n;y++)for(let f=1;f<=r;f++){const u=(r+1)*y+f-1,S=(r+1)*(y-1)+f-1,w=(r+1)*(y-1)+f,E=(r+1)*y+f;c.push(u,S,E),c.push(S,w,E)}this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if($a(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if($a(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=hi(i[t]);for(const r in n)e[r]=n[r]}return e}function $a(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function el(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Yc={clone:hi,merge:Nt};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=qc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[n].value=new We().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $c extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jc extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qc extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tr=new H,nr=new fi,tn=new H;class tl extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tr,nr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,nr,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tr,nr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tr,nr,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wn=new H,Ja=new We,Qa=new We;class Jt extends tl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jc extends tl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=-90,ri=1;class Ws extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(ii,ri,e,t);r.layers=this.layers,this.add(r);const s=new Jt(ii,ri,e,t);s.layers=this.layers,this.add(s);const a=new Jt(ii,ri,e,t);a.layers=this.layers,this.add(a);const o=new Jt(ii,ri,e,t);o.layers=this.layers,this.add(o);const c=new Jt(ii,ri,e,t);c.layers=this.layers,this.add(c);const l=new Jt(ii,ri,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,p]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class eu extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const ja=new lt;class tu{constructor(e,t,n=0,r=1/0){this.ray=new ra(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ja.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ja),this}intersectObject(e,t=!0,n=[]){return Xs(e,this,n,t),n.sort(eo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Xs(e[r],this,n,t);return n.sort(eo),n}}function eo(i,e){return i.distance-e.distance}function Xs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Xs(s[a],e,t,!0)}}function to(i,e,t,n){const r=nu(n);switch(t){case zo:return i*e;case Ho:return i*e/r.components*r.byteLength;case Js:return i*e/r.components*r.byteLength;case Vn:return i*e*2/r.components*r.byteLength;case Qs:return i*e*2/r.components*r.byteLength;case Go:return i*e*3/r.components*r.byteLength;case an:return i*e*4/r.components*r.byteLength;case js:return i*e*4/r.components*r.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fs:case ms:return Math.max(i,16)*Math.max(e,8)/4;case hs:case ps:return Math.max(i,8)*Math.max(e,8)/2;case gs:case _s:case vs:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xs:case hr:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fs:case Os:case Bs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zs:case Gs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fr:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nu(i){switch(i){case Xt:case Uo:return{byteLength:1,components:1};case wi:case Fo:case cn:return{byteLength:2,components:1};case Zs:case $s:return{byteLength:2,components:4};case ln:case Ks:case sn:return{byteLength:4,components:1};case Oo:case Bo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ys}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ys);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function iu(i){const e=new WeakMap;function t(o,c){const l=o.array,p=o.usage,g=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){const p=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,p);else{g.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<g.length;m++){const x=g[h],y=g[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,g[h]=y)}g.length=h+1;for(let m=0,x=g.length;m<x;m++){const y=g[m];i.bufferSubData(l,y.start*p.BYTES_PER_ELEMENT,p,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Du="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ad=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ah=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Th=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ph=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:ru,alphahash_pars_fragment:su,alphamap_fragment:au,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:uu,aomap_pars_fragment:du,batching_pars_vertex:hu,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:Eu,color_fragment:yu,color_pars_fragment:bu,color_pars_vertex:Tu,color_vertex:Au,common:wu,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Nu,colorspace_fragment:Du,colorspace_pars_fragment:Iu,envmap_fragment:Uu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Ou,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:Zu,envmap_vertex:zu,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:ku,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:Yu,lights_pars_begin:Ku,lights_toon_fragment:$u,lights_toon_pars_fragment:Ju,lights_phong_fragment:Qu,lights_phong_pars_fragment:ju,lights_physical_fragment:ed,lights_physical_pars_fragment:td,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:rd,lightprobes_pars_fragment:sd,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:hd,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphinstance_vertex:gd,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:vd,morphtarget_vertex:Sd,normal_fragment_begin:Md,normal_fragment_maps:Ed,normal_pars_fragment:yd,normal_pars_vertex:bd,normal_vertex:Td,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Nd,premultiplied_alpha_fragment:Dd,project_vertex:Id,dithering_fragment:Ud,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:kd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:Kd,tonemapping_fragment:Zd,tonemapping_pars_fragment:$d,transmission_fragment:Jd,transmission_pars_fragment:Qd,uv_pars_fragment:jd,uv_pars_vertex:eh,uv_vertex:th,worldpos_vertex:nh,background_vert:ih,background_frag:rh,backgroundCube_vert:sh,backgroundCube_frag:ah,cube_vert:oh,cube_frag:lh,depth_vert:ch,depth_frag:uh,distance_vert:dh,distance_frag:hh,equirect_vert:fh,equirect_frag:ph,linedashed_vert:mh,linedashed_frag:gh,meshbasic_vert:_h,meshbasic_frag:xh,meshlambert_vert:vh,meshlambert_frag:Sh,meshmatcap_vert:Mh,meshmatcap_frag:Eh,meshnormal_vert:yh,meshnormal_frag:bh,meshphong_vert:Th,meshphong_frag:Ah,meshphysical_vert:wh,meshphysical_frag:Rh,meshtoon_vert:Ch,meshtoon_frag:Ph,points_vert:Lh,points_frag:Nh,shadow_vert:Dh,shadow_frag:Ih,sprite_vert:Uh,sprite_frag:Fh},_e={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},rn={basic:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Nt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Nt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Nt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Nt([_e.points,_e.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Nt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Nt([_e.common,_e.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Nt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Nt([_e.sprite,_e.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Nt([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Nt([_e.lights,_e.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};rn.physical={uniforms:Nt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ir={r:0,b:0,g:0},Oh=new lt,il=new Fe;il.set(-1,0,0,0,1,0,0,0,1);function Bh(i,e,t,n,r,s){const a=new Ve(0);let o=r===!0?0:1,c,l,p=null,g=0,h=null;function m(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const E=S.backgroundBlurriness>0;w=e.get(w,E)}return w}function x(S){let w=!1;const E=m(S);E===null?f(a,o):E&&E.isColor&&(f(E,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){const E=m(w);E&&E.isCubeTexture?(l===void 0&&(l=new Pt(new pi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:hi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,b,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Oh.makeRotationFromEuler(w.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(il),l.material.toneMapped=He.getTransfer(E.colorSpace)!==Je,(p!==E||g!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,p=E,g=E.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Pt(new Li(2,2),new Xn({name:"BackgroundMaterial",uniforms:hi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=He.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=E,g=E.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(ir,el(i)),t.buffers.color.setClear(ir.r,ir.g,ir.b,w,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:x,addToRenderList:y,dispose:u}}function zh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(A,D,z,L,V){let Z=!1;const q=g(A,L,z,D);s!==q&&(s=q,l(s.object)),Z=m(A,L,z,V),Z&&x(A,L,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(A,D,z,L),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function p(A){return i.deleteVertexArray(A)}function g(A,D,z,L){const V=L.wireframe===!0;let Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);const q=A.isInstancedMesh===!0?A.id:0;let se=Z[q];se===void 0&&(se={},Z[q]=se);let K=se[z.id];K===void 0&&(K={},se[z.id]=K);let ie=K[V];return ie===void 0&&(ie=h(c()),K[V]=ie),ie}function h(A){const D=[],z=[],L=[];for(let V=0;V<t;V++)D[V]=0,z[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:A,attributes:{},index:null}}function m(A,D,z,L){const V=s.attributes,Z=D.attributes;let q=0;const se=z.getAttributes();for(const K in se)if(se[K].location>=0){const re=V[K];let Ee=Z[K];if(Ee===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(Ee=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(Ee=A.instanceColor)),re===void 0||re.attribute!==Ee||Ee&&re.data!==Ee.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function x(A,D,z,L){const V={},Z=D.attributes;let q=0;const se=z.getAttributes();for(const K in se)if(se[K].location>=0){let re=Z[K];re===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const Ee={};Ee.attribute=re,re&&re.data&&(Ee.data=re.data),V[K]=Ee,q++}s.attributes=V,s.attributesNum=q,s.index=L}function y(){const A=s.newAttributes;for(let D=0,z=A.length;D<z;D++)A[D]=0}function f(A){u(A,0)}function u(A,D){const z=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;z[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),V[A]!==D&&(i.vertexAttribDivisor(A,D),V[A]=D)}function S(){const A=s.newAttributes,D=s.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==A[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function w(A,D,z,L,V,Z,q){q===!0?i.vertexAttribIPointer(A,D,z,V,Z):i.vertexAttribPointer(A,D,z,L,V,Z)}function E(A,D,z,L){y();const V=L.attributes,Z=z.getAttributes(),q=D.defaultAttributeValues;for(const se in Z){const K=Z[se];if(K.location>=0){let ie=V[se];if(ie===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),ie!==void 0){const re=ie.normalized,Ee=ie.itemSize,Pe=e.get(ie);if(Pe===void 0)continue;const j=Pe.buffer,me=Pe.type,Se=Pe.bytesPerElement,Ce=me===i.INT||me===i.UNSIGNED_INT||ie.gpuType===Ks;if(ie.isInterleavedBufferAttribute){const ge=ie.data,Ne=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,it=ie.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let we=0;we<K.locationSize;we++)u(K.location+we,ge.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let we=0;we<K.locationSize;we++)f(K.location+we);i.bindBuffer(i.ARRAY_BUFFER,j);for(let we=0;we<K.locationSize;we++)w(K.location+we,Ee/K.locationSize,me,re,Ne*Se,(it+Ee/K.locationSize*we)*Se,Ce)}else{if(ie.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)u(K.location+ge,ie.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<K.locationSize;ge++)f(K.location+ge);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ge=0;ge<K.locationSize;ge++)w(K.location+ge,Ee/K.locationSize,me,re,Ee*Se,Ee/K.locationSize*ge*Se,Ce)}}else if(q!==void 0){const re=q[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(K.location,re);break;case 3:i.vertexAttrib3fv(K.location,re);break;case 4:i.vertexAttrib4fv(K.location,re);break;default:i.vertexAttrib1fv(K.location,re)}}}}S()}function R(){I();for(const A in n){const D=n[A];for(const z in D){const L=D[z];for(const V in L){const Z=L[V];for(const q in Z)p(Z[q].object),delete Z[q];delete L[V]}}delete n[A]}}function b(A){if(n[A.id]===void 0)return;const D=n[A.id];for(const z in D){const L=D[z];for(const V in L){const Z=L[V];for(const q in Z)p(Z[q].object),delete Z[q];delete L[V]}}delete n[A.id]}function d(A){for(const D in n){const z=n[D];for(const L in z){const V=z[L];if(V[A.id]===void 0)continue;const Z=V[A.id];for(const q in Z)p(Z[q].object),delete Z[q];delete V[A.id]}}}function M(A){for(const D in n){const z=n[D],L=A.isInstancedMesh===!0?A.id:0,V=z[L];if(V!==void 0){for(const Z in V){const q=V[Z];for(const se in q)p(q[se].object),delete q[se];delete V[Z]}delete z[L],Object.keys(z).length===0&&delete n[D]}}}function I(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:d,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function Gh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,p){p!==0&&(i.drawArraysInstanced(n,c,l,p),t.update(l,n,p))}function o(c,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,p);let h=0;for(let m=0;m<p;m++)h+=l[m];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Hh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(d){return!(d!==an&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){const M=d===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Xt&&d!==sn&&!M&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=c(l);p!==l&&(De("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:E,maxSamples:R,samples:b}}function kh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Rn,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const m=g.length!==0||h||n!==0||r;return r=h,n=g.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,h){t=p(g,h,0)},this.setState=function(g,h,m){const x=g.clippingPlanes,y=g.clipIntersection,f=g.clipShadows,u=i.get(g);if(!r||x===null||x.length===0||s&&!f)s?p(null):l();else{const S=s?0:n,w=S*4;let E=u.clippingState||null;c.value=E,E=p(x,h,w,m);for(let R=0;R!==w;++R)E[R]=t[R];u.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,h,m,x){const y=g!==null?g.length:0;let f=null;if(y!==0){if(f=c.value,x!==!0||f===null){const u=m+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let w=0,E=m;w!==y;++w,E+=4)a.copy(g[w]).applyMatrix4(S,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}class ha extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pi(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:oi});s.uniforms.tEquirect.value=t;const a=new Pt(r,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ft),new Ws(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const no=256,Vh=3,Wh=20,rl=256,sl=16,Xh=3,qh=new H,Yh=new Ve;class vr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new Pt(new pi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=qh}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),p=this._getSourceTarget(!0);t>0&&(p.texture.mipmapsAutoUpdate=!1);const g=c.autoClear,h=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(Yh));const f=new Ws(n,r,p);return f.position.copy(o),f.update(c,e),c.autoClear=g,c.autoClearColor=h,c.autoClearDepth=m,c.autoClearStencil=x,e.background=y,t>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=so(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(no,vc(e))}_fromTexture(e,t){e.mapping===ci||e.mapping===Ai?this._setSize(e.image.length===0?no:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=io(e,!1,!1),n=Math.log2(e)-Vh;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=io(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ci||e.mapping===Ai?(this._cubemapMaterial===null&&(this._cubemapMaterial=so()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ro()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Kh(),this._integrationMaterial=Zh());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/sl);for(let a=0;a<=n;a++){const o=vr.lodToRoughness(a,n);if(a>n-Xh)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(rl*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$h());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function io(i,e,t){return new ha(i,{minFilter:Pn,generateMipmaps:e,type:cn,colorSpace:pr,depthBuffer:t})}function Ni(i,e,t){return new Xn({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:Ot,blending:oi,depthTest:!1,depthWrite:!1})}function Kh(){return Ni("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zh(){return Ni("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $h(){return Ni("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wh}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ro(){return Ni("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function so(){return Ni("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Rr||m===Cr)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new ha(x.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,x=m===Rr||m===Cr,y=m===ci||m===Ai;if(x||y){let f=t.get(h);const u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new vr(i)),f=x?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const S=h.image;return x&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new vr(i)),f=x?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",p),f.texture):null}}}return h}function o(h,m){return m===Rr?h.mapping=ci:m===Cr&&(h.mapping=Ai),h}function c(h){let m=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&m++;return m===x}function l(h){const m=h.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function p(h){const m=h.target;m.removeEventListener("dispose",p);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Qh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ur("WebGLRenderer: "+n+" extension not supported."),r}}}function jh(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(x=>delete r[x]);function o(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const f in x.attributes)e.remove(x.attributes[f]);x.removeEventListener("dispose",o),delete r[x.id],a.unregister(x);const y=s.get(x);y&&(e.remove(y),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function p(x){const y=x.attributes;for(const f in y)e.update(y[f],i.ARRAY_BUFFER)}function g(x){const y=x.index,f=x.attributes.position;let u=0;if(f===void 0)return;const S=y!==null?y.array.length:f.array.length/3-1,w=f.count>=65535?Zo:Ko,E=new w(Math.ceil(S/3)*6,1),R=E.array;if(y!==null){const d=y.array;u=y.version;for(let M=0,I=0;M<S;M+=3){const P=d[M+0],A=d[M+1],D=d[M+2];R[I++]=P,R[I++]=A,R[I++]=A,R[I++]=D,R[I++]=D,R[I++]=P}}else{u=f.version;for(let d=0,M=0;d<S;d+=3){const I=d+0,P=d+1,A=d+2;R[M++]=I,R[M++]=P,R[M++]=P,R[M++]=A,R[M++]=A,R[M++]=I}}E.version=u;const b=s.get(x);b&&e.remove(b),s.set(x,E)}function h(x){const y=s.get(x);if(y){const f=x.index;f!==null&&y.version<f.version&&g(x)}else g(x);return s.get(x)}function m(){for(const x in r){const y=r[x].deref();y!==void 0&&c(y)}}return{get:l,update:p,getWireframeAttribute:h,dispose:m}}function ef(i,e,t){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function c(g,h){i.drawElements(n,h,s,g*a),t.update(h,n,1)}function l(g,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,g*a,m),t.update(h,n,m))}function p(g,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,g,0,m);let y=0;for(let f=0;f<m;f++)y+=h[f];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function tf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nf(i,e,t){const n=new WeakMap,r=new pt;function s(a,o,c){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let h=n.get(o);if(h===void 0||h.count!==g){let I=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),x===!0&&(w=2),y===!0&&(w=3);let E=o.attributes.position.count*w,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*R*4*g),d=new qo(b,E,R,g);d.type=sn,d.needsUpdate=!0;const M=w*4;for(let P=0;P<g;P++){const A=f[P],D=u[P],z=S[P],L=E*R*4*P;for(let V=0;V<A.count;V++){const Z=V*M;m===!0&&(r.fromBufferAttribute(A,V),b[L+Z+0]=r.x,b[L+Z+1]=r.y,b[L+Z+2]=r.z,b[L+Z+3]=0),x===!0&&(r.fromBufferAttribute(D,V),b[L+Z+4]=r.x,b[L+Z+5]=r.y,b[L+Z+6]=r.z,b[L+Z+7]=0),y===!0&&(r.fromBufferAttribute(z,V),b[L+Z+8]=r.x,b[L+Z+9]=r.y,b[L+Z+10]=r.z,b[L+Z+11]=z.itemSize===4?r.w:1)}}h={count:g,texture:d,size:new We(E,R)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];const x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function rf(i,e,t,n,r){let s=new WeakMap;function a(l){const p=r.render.frame,g=l.geometry,h=e.get(l,g);if(s.get(h)!==p&&(e.update(h),s.set(h,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==p&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,p))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return h}function o(){s=new WeakMap}function c(l){const p=l.target;p.removeEventListener("dispose",c),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const sf={[wo]:"LINEAR_TONE_MAPPING",[Ro]:"REINHARD_TONE_MAPPING",[Co]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[No]:"AGX_TONE_MAPPING",[Do]:"NEUTRAL_TONE_MAPPING",[Lo]:"CUSTOM_TONE_MAPPING"};function af(i,e,t,n,r,s){const a=new on(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const p=new zt;p.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new rt([0,2,0,0,2,0],2));const g=new $c({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(p,g),m=new jc(-1,1,1,-1,0,1);let x=null,y=null,f=!1,u,S=null,w=[],E=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),c!==null&&c.setSize(R,b);for(let d=0;d<w.length;d++){const M=w[d];M.setSize&&M.setSize(R,b)}},this.setEffects=function(R){w=R,E=w.length>0&&w[0].isRenderPass===!0;const b=a.width,d=a.height;w.length>0&&o===null&&(o=new on(b,d,{type:cn,depthBuffer:!1,stencilBuffer:!1}),c=new on(b,d,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&w.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new di(b,d),s===!0&&(l.format=Ln,l.type=ui)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<w.length;I++){const P=w[I];P.setSize&&P.setSize(b,d),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(R,b){if(f||R.toneMapping===vn&&w.length===0)return!1;if(S=b,b!==null){const d=b.width,M=b.height;(a.width!==d||a.height!==M)&&this.setSize(d,M)}return E===!1&&R.setRenderTarget(a),u=R.toneMapping,R.toneMapping=vn,!0},this.hasRenderPass=function(){return E},this.end=function(R,b){R.toneMapping=u,f=!0;let d=a,M=o;for(let I=0;I<w.length;I++){const P=w[I];P.enabled!==!1&&(P.render(R,M,d,b),P.needsSwap!==!1&&(d=M,M=M===o?c:o))}if(x!==R.outputColorSpace||y!==R.toneMapping){x=R.outputColorSpace,y=R.toneMapping,g.defines={},He.getTransfer(x)===Je&&(g.defines.SRGB_TRANSFER="");const I=sf[y];I&&(g.defines[I]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=d.texture,R.setRenderTarget(S),R.render(h,m),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),p.dispose(),g.dispose()}}const al=new Dt,ol=new di(1,1),ll=new Qo(1),cl=new qo,ul=new wc,dl=new Jo,ao=[],oo=[],lo=new Float32Array(16),co=new Float32Array(9),uo=new Float32Array(4);function mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ao[r];if(s===void 0&&(s=new Float32Array(r),ao[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Er(i,e){let t=oo[e];t===void 0&&(t=new Int32Array(e),oo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;uo.set(n),i.uniformMatrix2fv(this.addr,!1,uo),gt(t,n)}}function hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;co.set(n),i.uniformMatrix3fv(this.addr,!1,co),gt(t,n)}}function ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;lo.set(n),i.uniformMatrix4fv(this.addr,!1,lo),gt(t,n)}}function pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function yr(i){return i.version===0&&(i.compareFunction=Wo,i.needsUpdate=!0),i}function Ef(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=yr(ol):s=al,t.setTexture2D(e||s,r)}function yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ul,r)}function bf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=yr(ll):s=dl,t.setTextureCube(e||s,r)}function Tf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cl,r)}function Af(i){switch(i){case 5126:return of;case 35664:return lf;case 35665:return cf;case 35666:return uf;case 35674:return df;case 35675:return hf;case 35676:return ff;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return _f;case 5125:return xf;case 36294:return vf;case 36295:return Sf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return yf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Tf}}function wf(i,e){i.uniform1fv(this.addr,e)}function Rf(i,e){const t=mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Cf(i,e){const t=mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Pf(i,e){const t=mi(e,this.size,4);i.uniform4fv(this.addr,t)}function Lf(i,e){const t=mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nf(i,e){const t=mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Df(i,e){const t=mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function If(i,e){i.uniform1iv(this.addr,e)}function Uf(i,e){i.uniform2iv(this.addr,e)}function Ff(i,e){i.uniform3iv(this.addr,e)}function Of(i,e){i.uniform4iv(this.addr,e)}function Bf(i,e){i.uniform1uiv(this.addr,e)}function zf(i,e){i.uniform2uiv(this.addr,e)}function Gf(i,e){i.uniform3uiv(this.addr,e)}function Hf(i,e){i.uniform4uiv(this.addr,e)}function kf(i,e,t){const n=this.cache,r=e.length,s=Er(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=yr(ol):a=al;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Vf(i,e,t){const n=this.cache,r=e.length,s=Er(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ul,s[a])}function Wf(i,e,t){const n=this.cache,r=e.length,s=Er(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yr(ll):a=dl;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Xf(i,e,t){const n=this.cache,r=e.length,s=Er(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cl,s[a])}function qf(i){switch(i){case 5126:return wf;case 35664:return Rf;case 35665:return Cf;case 35666:return Pf;case 35674:return Lf;case 35675:return Nf;case 35676:return Df;case 5124:case 35670:return If;case 35667:case 35671:return Uf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return Gf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}class Yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Af(t.type)}}class Kf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qf(t.type)}}class Zf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const es=/(\w+)(\])?(\[|\.)?/g;function ho(i,e){i.seq.push(e),i.map[e.id]=e}function $f(i,e,t){const n=i.name,r=n.length;for(es.lastIndex=0;;){const s=es.exec(n),a=es.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ho(t,l===void 0?new Yf(o,i,e):new Kf(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new Zf(o),ho(t,g)),t=g}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$f(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function fo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Jf=37297;let Qf=0;function jf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const po=new Fe;function ep(i){He._getMatrix(po,He.workingColorSpace,i);const e=`mat3( ${po.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jf(i.getShaderSource(e),o)}else return s}function tp(i,e){const t=ep(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const np={[wo]:"Linear",[Ro]:"Reinhard",[Co]:"Cineon",[Po]:"ACESFilmic",[No]:"AgX",[Do]:"Neutral",[Lo]:"Custom"};function ip(i,e){const t=np[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rr=new H;function rp(){He.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),e=rr.y.toFixed(4),t=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yi).join(`
`)}function ap(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function op(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function yi(i){return i!==""}function go(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _o(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(lp,cp)}function cp(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return qs(t)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xo(i){return i.replace(up,dp)}function dp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hp={[sr]:"SHADOWMAP_TYPE_PCF",[Ei]:"SHADOWMAP_TYPE_VSM"};function fp(i){return hp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pp={[Ai]:"ENVMAP_MODE_REFRACTION"};function mp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gp={[Ao]:"ENVMAP_BLENDING_MULTIPLY",[nc]:"ENVMAP_BLENDING_MIX",[ic]:"ENVMAP_BLENDING_ADD"};function _p(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gp[i.combine]||"ENVMAP_BLENDING_NONE"}function xp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fp(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=mp(t),g=_p(t),h=sp(t),m=ap(s),x=r.createProgram();let y,f,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yi).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(yi).join(`
`),f.length>0&&(f+=`
`)):(y=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),f=[vo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==vn?ip("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,tp("linearToOutputTexel",t.outputColorSpace),rp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),a=qs(a),a=go(a,t),a=_o(a,t),o=qs(o),o=go(o,t),o=_o(o,t),a=xo(a),o=xo(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=u+y+a,w=u+f+o,E=fo(r,r.VERTEX_SHADER,S),R=fo(r,r.FRAGMENT_SHADER,w);r.attachShader(x,E),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(P){if(i.debug.checkShaderErrors){const A=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(E)||"",z=r.getShaderInfoLog(R)||"",L=A.trim(),V=D.trim(),Z=z.trim();let q=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,E,R);else{const K=mo(r,E,"vertex"),ie=mo(r,R,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+K+`
`+ie)}else L!==""?De("WebGLProgram: Program Info Log:",L):(V===""||Z==="")&&(se=!1);se&&(P.diagnostics={runnable:q,programLog:L,vertexShader:{log:V,prefix:y},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(E),r.deleteShader(R),d=new dr(r,x),M=op(r,x)}let d;this.getUniforms=function(){return d===void 0&&b(this),d};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(x,Jf)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=R,this}let vp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mp(e),t.set(e,n)),n}}class Mp{constructor(e){this.id=vp++,this.code=e,this.usedTimes=0}}function Ep(i){return i===Vn||i===hr||i===fr}function yp(i,e,t,n,r,s){const a=new na,o=new Sp,c=new Set,l=[],p=new Map,g=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(d){return c.add(d),d===0?"uv":`uv${d}`}function x(d,M,I,P,A,D){const z=P.fog,L=A.geometry,V=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?P.environment:null,Z=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,q=e.get(d.envMap||V,Z),se=h[d.type];let K=n.precision;d.precision!==null&&(K=n.getMaxPrecision(d.precision),K!==d.precision&&De("WebGLProgram.getParameters:",d.precision,"not supported, using",K,"instead."));const ie=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=ie!==void 0?ie.length:0;let Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let Pe,j,me,Se;if(se){const pe=rn[se];Pe=pe.vertexShader,j=pe.fragmentShader}else{Pe=d.vertexShader,j=d.fragmentShader;const pe=o.getVertexShaderStage(d),Ke=o.getFragmentShaderStage(d);o.update(d,pe,Ke),me=pe.id,Se=Ke.id}const Ce=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Ne=A.isInstancedMesh===!0,it=A.isBatchedMesh===!0,we=!!d.map,Ye=!!d.matcap,$e=!!q,Be=$e&&q.isPMREMTexture===!0,ct=!!d.aoMap,st=!!d.lightMap,_t=!!d.bumpMap&&d.wireframe===!1,Qe=!!d.normalMap,kt=!!d.displacementMap,dt=!!d.emissiveMap,Mt=!!d.metalnessMap,xt=!!d.roughnessMap,It=d.anisotropy>0,U=d.clearcoat>0,Et=d.diffuseRoughness>0,tt=d.dispersion>0,je=d.retroreflectivity>0,de=d.iridescence>0,at=d.sheen>0,Re=d.transmission>0,Le=It&&!!d.anisotropyMap,T=U&&!!d.clearcoatMap,_=U&&!!d.clearcoatNormalMap,O=U&&!!d.clearcoatRoughnessMap,ne=Et&&!!d.diffuseRoughnessMap,ee=de&&!!d.iridescenceMap,ae=de&&!!d.iridescenceThicknessMap,ce=at&&!!d.sheenColorMap,$=at&&!!d.sheenRoughnessMap,Q=!!d.specularMap,oe=!!d.specularColorMap,C=!!d.specularIntensityMap,J=Re&&!!d.transmissionMap,Y=Re&&!!d.thicknessMap,le=!!d.gradientMap,k=!!d.alphaMap,te=d.alphaTest>0,ue=!!d.alphaHash,Ae=!!d.extensions;let W=vn;d.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(W=i.toneMapping);const ve=Be?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ie={shaderID:se,shaderType:d.type,shaderName:d.name,vertexShader:Pe,fragmentShader:j,defines:d.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:K,batching:it,batchingColor:it&&A._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&A.instanceColor!==null,instancingMorph:Ne&&A.morphTexture!==null,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:we,matcap:Ye,envMap:$e,envMapMode:$e&&q.mapping,envMapPMREM:Be,envMapMaxLod:Be?ve.length-1:null,envMapSize:Be?ve[0].width:null,aoMap:ct,lightMap:st,bumpMap:_t,normalMap:Qe,displacementMap:kt,emissiveMap:dt,normalMapObjectSpace:Qe&&d.normalMapType===ac,normalMapTangentSpace:Qe&&d.normalMapType===Ca,packedNormalMap:Qe&&d.normalMapType===Ca&&Ep(d.normalMap.format),metalnessMap:Mt,roughnessMap:xt,anisotropy:It,anisotropyMap:Le,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:O,diffuseRoughness:Et,diffuseRoughnessMap:ne,dispersion:tt,retroreflection:je,iridescence:de,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:at,sheenColorMap:ce,sheenRoughnessMap:$,specularMap:Q,specularColorMap:oe,specularIntensityMap:C,transmission:Re,transmissionMap:J,thicknessMap:Y,gradientMap:le,opaque:d.transparent===!1&&d.blending===bi&&d.alphaToCoverage===!1,alphaMap:k,alphaTest:te,alphaHash:ue,combine:d.combine,mapUv:we&&m(d.map.channel),aoMapUv:ct&&m(d.aoMap.channel),lightMapUv:st&&m(d.lightMap.channel),bumpMapUv:_t&&m(d.bumpMap.channel),normalMapUv:Qe&&m(d.normalMap.channel),displacementMapUv:kt&&m(d.displacementMap.channel),emissiveMapUv:dt&&m(d.emissiveMap.channel),metalnessMapUv:Mt&&m(d.metalnessMap.channel),roughnessMapUv:xt&&m(d.roughnessMap.channel),anisotropyMapUv:Le&&m(d.anisotropyMap.channel),clearcoatMapUv:T&&m(d.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&m(d.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(d.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(d.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(d.sheenColorMap.channel),sheenRoughnessMapUv:$&&m(d.sheenRoughnessMap.channel),specularMapUv:Q&&m(d.specularMap.channel),specularColorMapUv:oe&&m(d.specularColorMap.channel),specularIntensityMapUv:C&&m(d.specularIntensityMap.channel),transmissionMapUv:J&&m(d.transmissionMap.channel),thicknessMapUv:Y&&m(d.thicknessMap.channel),alphaMapUv:k&&m(d.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Qe||It),vertexNormals:!!L.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(we||k),fog:!!z,useFog:d.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||L.attributes.normal===void 0&&Qe===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(pe=>pe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:W,decodeVideoTexture:we&&d.map.isVideoTexture===!0&&He.getTransfer(d.map.colorSpace)===Je,decodeVideoTextureEmissive:dt&&d.emissiveMap.isVideoTexture===!0&&He.getTransfer(d.emissiveMap.colorSpace)===Je,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Qt,flipSided:d.side===Ot,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Ae&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&d.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function y(d){const M=[];if(d.shaderID?M.push(d.shaderID):(M.push(d.customVertexShaderID),M.push(d.customFragmentShaderID)),d.defines!==void 0)for(const I in d.defines)M.push(I),M.push(d.defines[I]);return d.isRawShaderMaterial===!1&&(f(M,d),u(M,d),M.push(i.outputColorSpace)),M.push(d.customProgramCacheKey),M.join()}function f(d,M){d.push(M.precision),d.push(M.outputColorSpace),d.push(M.envMapMode),d.push(M.envMapPMREM),d.push(M.envMapMaxLod),d.push(M.envMapSize),d.push(M.mapUv),d.push(M.alphaMapUv),d.push(M.lightMapUv),d.push(M.aoMapUv),d.push(M.bumpMapUv),d.push(M.normalMapUv),d.push(M.displacementMapUv),d.push(M.emissiveMapUv),d.push(M.metalnessMapUv),d.push(M.roughnessMapUv),d.push(M.anisotropyMapUv),d.push(M.clearcoatMapUv),d.push(M.clearcoatNormalMapUv),d.push(M.clearcoatRoughnessMapUv),d.push(M.diffuseRoughnessMapUv),d.push(M.iridescenceMapUv),d.push(M.iridescenceThicknessMapUv),d.push(M.sheenColorMapUv),d.push(M.sheenRoughnessMapUv),d.push(M.specularMapUv),d.push(M.specularColorMapUv),d.push(M.specularIntensityMapUv),d.push(M.transmissionMapUv),d.push(M.thicknessMapUv),d.push(M.combine),d.push(M.fogExp2),d.push(M.sizeAttenuation),d.push(M.morphTargetsCount),d.push(M.numSunLights),d.push(M.numDirLights),d.push(M.numPointLights),d.push(M.numSpotLights),d.push(M.numSpotLightMaps),d.push(M.numHemiLights),d.push(M.numRectAreaLights),d.push(M.numSunLightShadows),d.push(M.numDirLightShadows),d.push(M.numPointLightShadows),d.push(M.numSpotLightShadows),d.push(M.numSpotLightShadowsWithMaps),d.push(M.numLightProbes),d.push(M.numLightProbeGrids),d.push(M.shadowMapType),d.push(M.toneMapping),d.push(M.numClippingPlanes),d.push(M.numClipIntersection),d.push(M.depthPacking)}function u(d,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function S(d){const M=h[d.type];let I;if(M){const P=rn[M];I=Yc.clone(P.uniforms)}else I=d.uniforms;return I}function w(d,M){let I=p.get(M);return I!==void 0?++I.usedTimes:(I=new xp(i,M,d,r),l.push(I),p.set(M,I)),I}function E(d){if(--d.usedTimes===0){const M=l.indexOf(d);l[M]=l[l.length-1],l.pop(),p.delete(d.cacheKey),d.destroy()}}function R(d){o.remove(d)}function b(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:S,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:b}}function bp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Tp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function So(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,y,f,u){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:f,group:u},i[e]=S):(S.id=h.id,S.object=h,S.geometry=m,S.material=x,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=f,S.group=u),e++,S}function c(h,m,x,y,f,u,S){S.reversedDepth===!0&&(f=-f);const w=o(h,m,x,y,f,u);x.transmission>0?n.push(w):x.transparent===!0?r.push(w):t.push(w)}function l(h,m,x,y,f,u){const S=o(h,m,x,y,f,u);x.transmission>0?n.unshift(S):x.transparent===!0?r.unshift(S):t.unshift(S)}function p(h,m){t.length>1&&t.sort(h||Tp),n.length>1&&n.sort(m||So),r.length>1&&r.sort(m||So)}function g(){for(let h=e,m=i.length;h<m;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:g,sort:p}}function Ap(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Mo,i.set(n,[a])):r>=s.length?(a=new Mo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Ve};break;case"SpotLight":t={position:new H,direction:new H,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Rp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cp=0;function Pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lp(i){const e=new wp,t=Rp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new lt,a=new lt;function o(l){let p=0,g=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,x=0,y=0,f=0,u=0,S=0,w=0,E=0,R=0,b=0,d=0,M=0,I=0,P=0;l.sort(Pp);for(let D=0,z=l.length;D<z;D++){const L=l[D],V=L.color,Z=L.intensity,q=L.distance;let se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Vn?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=V.r*Z,g+=V.g*Z,h+=V.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],Z);P++}else if(L.isSunLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=se;const Ee=ie.getViewportCount();for(let Pe=0;Pe<Ee;Pe++)n.sunShadowMatrix[y+Pe]=ie.getMatrix(Pe),n.sunShadowCascade[y+Pe]=ie._cascadeData[Pe];y+=Ee,x++}n.sun[m]=K,m++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.directionalShadow[f]=re,n.directionalShadowMap[f]=se,n.directionalShadowMatrix[f]=L.shadow.matrix,R++}n.directional[f]=K,f++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(V).multiplyScalar(Z),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[S]=K;const ie=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,ie.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[S]=ie.matrix,L.castShadow){const re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.spotShadow[S]=re,n.spotShadowMap[S]=se,d++}S++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(V).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=K,w++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const ie=L.shadow,re=t.get(L);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,n.pointShadow[u]=re,n.pointShadowMap[u]=se,n.pointShadowMatrix[u]=L.shadow.matrix,b++}n.point[u]=K,u++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[E]=K,E++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=h;const A=n.hash;(A.sunLength!==m||A.directionalLength!==f||A.pointLength!==u||A.spotLength!==S||A.rectAreaLength!==w||A.hemiLength!==E||A.numSunShadows!==x||A.numDirectionalShadows!==R||A.numPointShadows!==b||A.numSpotShadows!==d||A.numSpotMaps!==M||A.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=w,n.point.length=u,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,A.sunLength=m,A.directionalLength=f,A.pointLength=u,A.spotLength=S,A.rectAreaLength=w,A.hemiLength=E,A.numSunShadows=x,A.numDirectionalShadows=R,A.numPointShadows=b,A.numSpotShadows=d,A.numSpotMaps=M,A.numLightProbes=P,n.version=Cp++)}function c(l,p){let g=0,h=0,m=0,x=0,y=0,f=0;const u=p.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const E=l[S];if(E.isSunLight){const R=n.sun[g];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),g++}else if(E.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),h++}else if(E.isSpotLight){const R=n.spot[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),x++}else if(E.isRectAreaLight){const R=n.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),a.identity(),s.copy(E.matrixWorld),s.premultiply(u),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const R=n.hemi[f];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(u),f++}}}return{setup:o,setupView:c,state:n}}function Eo(i){const e=new Lp(i),t=[],n=[],r=[];function s(g){p.camera=g,t.length=0,n.length=0,r.length=0}function a(g){g.isLightProbeGrid?r.push(g):t.push(g)}function o(g){n.push(g)}function c(){e.setup(t),r.sort((g,h)=>g.priority-h.priority||g.id-h.id)}function l(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Np(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Eo(i),e.set(r,[o])):s>=a.length?(o=new Eo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Up=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Fp=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],yo=new lt,Mi=new H,ts=new H;function Op(i,e,t){let n=new xr;const r=new We,s=new We,a=new pt,o=new Jc,c=new Qc,l={},p=t.maxTextureSize,g={[kn]:Ot,[Ot]:kn,[Qt]:Qt},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new zt;x.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pt(x,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let u=this.type;this.render=function(b,d,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===Ol&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);const I=i.getRenderTarget(),P=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=u!==this.type;z&&d.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=b.length;L<V;L++){const Z=b[L],q=Z.shadow;if(q===void 0){De("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const se=q.getFrameExtents();r.multiply(se),s.copy(q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/se.x),r.x=s.x*se.x,q.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/se.y),r.y=s.y*se.y,q.mapSize.y=s.y));const K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ei){if(Z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new on(r.x,r.y,{format:Vn,type:cn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new di(r.x,r.y,sn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Dn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tt,q.map.depthTexture.magFilter=Tt}else Z.isPointLight?(q.map=new ha(r.x),q.map.depthTexture=new Qo(r.x,ln)):(q.map=new on(r.x,r.y),q.map.depthTexture=new di(r.x,r.y,ln)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Dn,this.type===sr?(q.map.depthTexture.compareFunction=K?Vo:ko,q.map.depthTexture.minFilter=Ft,q.map.depthTexture.magFilter=Ft):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tt,q.map.depthTexture.magFilter=Tt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const ie=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,M);const re=q.camera.layers.mask&4294967294?q.camera.layers:M.layers;for(let Ee=0;Ee<ie;Ee++){const Pe=q.getCamera(Ee);if(Z.isPointLight){const j=q.camera,me=q.matrix,Se=Z.distance||j.far;Se!==j.far&&(j.far=Se,j.updateProjectionMatrix()),Mi.setFromMatrixPosition(Z.matrixWorld),j.position.copy(Mi),ts.copy(j.position),ts.add(Up[Ee]),j.up.copy(Fp[Ee]),j.lookAt(ts),j.updateMatrixWorld(),me.makeTranslation(-Mi.x,-Mi.y,-Mi.z),yo.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(yo,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(q.map),i.clear());const j=q.getViewport(Ee);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),D.viewport(a)}n=q.getFrustum(Ee),E(d,M,Pe,Z,re,this.type)}q.isPointLightShadow!==!0&&this.type===Ei&&S(q,M),q.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(I,P,A)};function S(b,d){const M=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new on(r.x,r.y,{format:Vn,type:cn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(d,null,M,h,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(d,null,M,m,y,null)}function w(b,d,M,I){let P=null;const A=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)P=A;else if(P=M.isPointLight===!0?c:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){const D=P.uuid,z=d.uuid;let L=l[D];L===void 0&&(L={},l[D]=L);let V=L[z];V===void 0&&(V=P.clone(),L[z]=V,d.addEventListener("dispose",R)),P=V}if(P.visible=d.visible,P.wireframe=d.wireframe,I===Ei?P.side=d.shadowSide!==null?d.shadowSide:d.side:P.side=d.shadowSide!==null?d.shadowSide:g[d.side],P.alphaMap=d.alphaMap,P.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,P.map=d.map,P.clipShadows=d.clipShadows,P.clippingPlanes=d.clippingPlanes,P.clipIntersection=d.clipIntersection,P.displacementMap=d.displacementMap,P.displacementScale=d.displacementScale,P.displacementBias=d.displacementBias,P.wireframeLinewidth=d.wireframeLinewidth,P.linewidth=d.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=i.properties.get(P);D.light=M}return P}function E(b,d,M,I,P,A){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Ei)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const L=e.update(b),V=b.material;if(Array.isArray(V)){const Z=L.groups;for(let q=0,se=Z.length;q<se;q++){const K=Z[q],ie=V[K.materialIndex];if(ie&&ie.visible){const re=w(b,ie,I,A);b.onBeforeShadow(i,b,d,M,L,re,K),i.renderBufferDirect(M,null,L,re,b,K),b.onAfterShadow(i,b,d,M,L,re,K)}}}else if(V.visible){const Z=w(b,V,I,A);b.onBeforeShadow(i,b,d,M,L,Z,null),i.renderBufferDirect(M,null,L,Z,b,null),b.onAfterShadow(i,b,d,M,L,Z,null)}}const z=b.children;for(let L=0,V=z.length;L<V;L++)E(z[L],d,M,I,P,A)}function R(b){b.target.removeEventListener("dispose",R);for(const M in l){const I=l[M],P=b.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function Bp(i,e){function t(){let C=!1;const J=new pt;let Y=null;const le=new pt(0,0,0,0);return{setMask:function(k){Y!==k&&!C&&(i.colorMask(k,k,k,k),Y=k)},setLocked:function(k){C=k},setClear:function(k,te,ue,Ae,W){W===!0&&(k*=Ae,te*=Ae,ue*=Ae),J.set(k,te,ue,Ae),le.equals(J)===!1&&(i.clearColor(k,te,ue,Ae),le.copy(J))},reset:function(){C=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,Y=null,le=null,k=null;return{setReversed:function(te){if(J!==te){const ue=e.get("EXT_clip_control");te?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),J=te;const Ae=k;k=null,this.setClear(Ae)}},getReversed:function(){return J},setTest:function(te){te?ge(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(te){Y!==te&&!C&&(i.depthMask(te),Y=te)},setFunc:function(te){if(J&&(te=_c[te]),le!==te){switch(te){case is:i.depthFunc(i.NEVER);break;case rs:i.depthFunc(i.ALWAYS);break;case ss:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case as:i.depthFunc(i.EQUAL);break;case os:i.depthFunc(i.GEQUAL);break;case ls:i.depthFunc(i.GREATER);break;case cs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=te}},setLocked:function(te){C=te},setClear:function(te){k!==te&&(k=te,J&&(te=1-te),i.clearDepth(te))},reset:function(){C=!1,Y=null,le=null,k=null,J=!1}}}function r(){let C=!1,J=null,Y=null,le=null,k=null,te=null,ue=null,Ae=null,W=null;return{setTest:function(ve){C||(ve?ge(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(ve){J!==ve&&!C&&(i.stencilMask(ve),J=ve)},setFunc:function(ve,Ie,pe){(Y!==ve||le!==Ie||k!==pe)&&(i.stencilFunc(ve,Ie,pe),Y=ve,le=Ie,k=pe)},setOp:function(ve,Ie,pe){(te!==ve||ue!==Ie||Ae!==pe)&&(i.stencilOp(ve,Ie,pe),te=ve,ue=Ie,Ae=pe)},setLocked:function(ve){C=ve},setClear:function(ve){W!==ve&&(i.clearStencil(ve),W=ve)},reset:function(){C=!1,J=null,Y=null,le=null,k=null,te=null,ue=null,Ae=null,W=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let p={},g={},h={},m=new WeakMap,x=[],y=null,f=!1,u=null,S=null,w=null,E=null,R=null,b=null,d=null,M=new Ve(0,0,0),I=0,P=!1,A=null,D=null,z=null,L=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,se=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=se>=2);let ie=null,re={};const Ee=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),j=new pt().fromArray(Ee),me=new pt().fromArray(Pe);function Se(C,J,Y,le){const k=new Uint8Array(4),te=i.createTexture();i.bindTexture(C,te),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<Y;ue++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,k):i.texImage2D(J+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,k);return te}const Ce={};Ce[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Ti),_t(!1),Qe(Ta),ge(i.CULL_FACE),ct(oi);function ge(C){p[C]!==!0&&(i.enable(C),p[C]=!0)}function Ne(C){p[C]!==!1&&(i.disable(C),p[C]=!1)}function it(C,J){return h[C]!==J?(i.bindFramebuffer(C,J),h[C]=J,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function we(C,J){let Y=x,le=!1;if(C){Y=m.get(J),Y===void 0&&(Y=[],m.set(J,Y));const k=C.textures;if(Y.length!==k.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let te=0,ue=k.length;te<ue;te++)Y[te]=i.COLOR_ATTACHMENT0+te;Y.length=k.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function Ye(C){return y!==C?(i.useProgram(C),y=C,!0):!1}const $e={[si]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[Gl]:i.FUNC_REVERSE_SUBTRACT};$e[Hl]=i.MIN,$e[kl]=i.MAX;const Be={[Vl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[Yl]:i.DST_ALPHA,[ql]:i.ONE_MINUS_SRC_COLOR,[To]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[Kl]:i.ONE_MINUS_DST_ALPHA,[Ql]:i.CONSTANT_COLOR,[jl]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[tc]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(C,J,Y,le,k,te,ue,Ae,W,ve){if(C===oi){f===!0&&(Ne(i.BLEND),f=!1);return}if(f===!1&&(ge(i.BLEND),f=!0),C!==Bl){if(C!==u||ve!==P){if((S!==si||R!==si)&&(i.blendEquation(i.FUNC_ADD),S=si,R=si),ve)switch(C){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.ONE,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",C);break}else switch(C){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wa:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ra:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",C);break}w=null,E=null,b=null,d=null,M.set(0,0,0),I=0,u=C,P=ve}return}k=k||J,te=te||Y,ue=ue||le,(J!==S||k!==R)&&(i.blendEquationSeparate($e[J],$e[k]),S=J,R=k),(Y!==w||le!==E||te!==b||ue!==d)&&(i.blendFuncSeparate(Be[Y],Be[le],Be[te],Be[ue]),w=Y,E=le,b=te,d=ue),(Ae.equals(M)===!1||W!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,W),M.copy(Ae),I=W),u=C,P=!1}function st(C,J){C.side===Qt?Ne(i.CULL_FACE):ge(i.CULL_FACE);let Y=C.side===Ot;J&&(Y=!Y),_t(Y),C.blending===bi&&C.transparent===!1?ct(oi):ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const le=C.stencilWrite;o.setTest(le),le&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),dt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(C){A!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),A=C)}function Qe(C){C!==Ul?(ge(i.CULL_FACE),C!==D&&(C===Ta?i.cullFace(i.BACK):C===Fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),D=C}function kt(C){C!==z&&(q&&i.lineWidth(C),z=C)}function dt(C,J,Y){C?(ge(i.POLYGON_OFFSET_FILL),(L!==J||V!==Y)&&(L=J,V=Y,a.getReversed()&&(J=-J,Y=-Y),i.polygonOffset(J,Y))):Ne(i.POLYGON_OFFSET_FILL)}function Mt(C){C?ge(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function xt(C){C===void 0&&(C=i.TEXTURE0+Z-1),ie!==C&&(i.activeTexture(C),ie=C)}function It(C,J,Y){Y===void 0&&(ie===null?Y=i.TEXTURE0+Z-1:Y=ie);let le=re[Y];le===void 0&&(le={type:void 0,texture:void 0},re[Y]=le),(le.type!==C||le.texture!==J)&&(ie!==Y&&(i.activeTexture(Y),ie=Y),i.bindTexture(C,J||Ce[C]),le.type=C,le.texture=J)}function U(){const C=re[ie];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Et(){try{i.compressedTexImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function je(){try{i.texSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function de(){try{i.texSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function Le(){try{i.texStorage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function _(){try{i.texImage2D(...arguments)}catch(C){qe("WebGLState:",C)}}function O(){try{i.texImage3D(...arguments)}catch(C){qe("WebGLState:",C)}}function ne(C){return g[C]!==void 0?g[C]:i.getParameter(C)}function ee(C,J){g[C]!==J&&(i.pixelStorei(C,J),g[C]=J)}function ae(C){j.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function ce(C){me.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),me.copy(C))}function $(C,J){let Y=l.get(J);Y===void 0&&(Y=new WeakMap,l.set(J,Y));let le=Y.get(C);le===void 0&&(le=i.getUniformBlockIndex(J,C.name),i.uniformBlockBinding(J,le,le),Y.set(C,le))}function Q(C,J,Y){const k=l.get(J).get(C);c[k]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,k,Y),c[k]=Y)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},g={},ie=null,re={},h={},c={},m=new WeakMap,x=[],y=null,f=!1,u=null,S=null,w=null,E=null,R=null,b=null,d=null,M=new Ve(0,0,0),I=0,P=!1,A=null,D=null,z=null,L=null,V=null,j.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ge,disable:Ne,bindFramebuffer:it,drawBuffers:we,useProgram:Ye,setBlending:ct,setMaterial:st,setFlipSided:_t,setCullFace:Qe,setLineWidth:kt,setPolygonOffset:dt,setScissorTest:Mt,activeTexture:xt,bindTexture:It,unbindTexture:U,compressedTexImage2D:Et,compressedTexImage3D:tt,texImage2D:_,texImage3D:O,pixelStorei:ee,getParameter:ne,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Le,texStorage3D:T,texSubImage2D:je,texSubImage3D:de,compressedTexSubImage2D:at,compressedTexSubImage3D:Re,scissor:ae,viewport:ce,reset:oe}}function zp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,p=new WeakMap,g=new Set;let h;const m=new WeakMap,x=new Set,y=new FinalizationRegistry(T=>x.delete(T));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(T,_){return f?new OffscreenCanvas(T,_):_r("canvas")}function S(T,_,O){let ne=1;const ee=Le(T);if((ee.width>O||ee.height>O)&&(ne=O/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(ne*ee.width),ce=Math.floor(ne*ee.height);h===void 0&&(h=u(ae,ce));const $=_?u(ae,ce):h;return $.width=ae,$.height=ce,$.getContext("2d").drawImage(T,0,0,ae,ce),De("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+ce+")."),$}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function w(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,O,ne,ee,ae=!1){if(T!==null){if(i[T]!==void 0)return i[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce;ne&&(ce=e.get("EXT_texture_norm16"),ce||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),O===i.SHORT&&ce&&($=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),O===i.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),O===i.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const Q=ae?mr:He.getTransfer(ee);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Q===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),O===i.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function d(T,_){let O;return T?_===null||_===ln||_===ui?O=i.DEPTH24_STENCIL8:_===sn?O=i.DEPTH32F_STENCIL8:_===wi&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ln||_===ui?O=i.DEPTH_COMPONENT24:_===sn?O=i.DEPTH_COMPONENT32F:_===wi&&(O=i.DEPTH_COMPONENT16),O}function M(T,_){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tt&&T.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function I(T){const _=new WeakRef(T);n.get(T).__ref=_,x.add(_),y.register(T,_,_)}function P(T){const _=n.get(T).__ref;_!==void 0&&(x.delete(_),y.unregister(_))}function A(T){z(T.target)}function D(T){L(T.target)}function z(T){T.removeEventListener("dispose",A),P(T),Z(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&g.delete(T)}function L(T){T.removeEventListener("dispose",D),P(T),se(T)}function V(){for(const T of x){const _=T.deref();_!==void 0&&(_.isRenderTarget===!0?L(_):z(_))}x.clear(),g.clear()}function Z(T){const _=n.get(T);if(_.__webglInit===void 0)return;const O=T.source,ne=m.get(O);if(ne){const ee=ne[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&q(T),Object.keys(ne).length===0&&m.delete(O)}n.remove(T)}function q(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const O=T.source,ne=m.get(O);delete ne[_.__cacheKey],a.memory.textures--}function se(T){const _=n.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();const O=T.depthTexture;if(O&&O.renderTarget===T&&z(O),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let ae=0;ae<_.__webglFramebuffer[ee].length;ae++)i.deleteFramebuffer(_.__webglFramebuffer[ee][ae]);else i.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[ee]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const ne=T.textures;for(let ee=0,ae=ne.length;ee<ae;ee++){const ce=n.get(ne[ee]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ne[ee])}n.remove(T)}let K=0;function ie(){K=0}function re(){return K}function Ee(T){K=T}function Pe(){const T=K;return T>=r.maxTextures&&De("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,T}function j(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function me(T,_){const O=n.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const ne=T.image;if(ne===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,T,_);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Se(T,_){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){st(O,T,_);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Ce(T,_){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){st(O,T,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ge(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){_t(O,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const Ne={[us]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[ds]:i.MIRRORED_REPEAT},it={[Tt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[Ui]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},we={[lc]:i.NEVER,[Wo]:i.ALWAYS,[cc]:i.LESS,[ko]:i.LEQUAL,[uc]:i.EQUAL,[Vo]:i.GEQUAL,[dc]:i.GREATER,[hc]:i.NOTEQUAL};function Ye(T,_){if(_.type===sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===Pr||_.magFilter===Ui||_.magFilter===Pn||_.minFilter===Ft||_.minFilter===Pr||_.minFilter===Ui||_.minFilter===Pn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ne[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ne[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ne[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Tt||_.minFilter!==Ui&&_.minFilter!==Pn||_.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A),I(_));const ne=_.source;let ee=m.get(ne);ee===void 0&&(ee={},m.set(ne,ee));const ae=j(_);if(ae!==T.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[ae].usedTimes++;const ce=ee[T.__cacheKey];ce!==void 0&&(ee[T.__cacheKey].usedTimes--,ce.usedTimes===0&&q(_)),T.__cacheKey=ae,T.__webglTexture=ee[ae].texture}return O}function Be(T,_,O){return Math.floor(Math.floor(T/O)/_)}function ct(T,_,O,ne){const ae=T.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,ne,_.data);else{ae.sort((C,J)=>C.start-J.start);let ce=0;for(let C=1;C<ae.length;C++){const J=ae[ce],Y=ae[C],le=J.start+J.count,k=Be(Y.start,_.width,4),te=Be(J.start,_.width,4);Y.start<=le+1&&k===te&&Be(Y.start+Y.count-1,_.width,4)===k?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++ce,ae[ce]=Y)}ae.length=ce+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let C=0,J=ae.length;C<J;C++){const Y=ae[C],le=Math.floor(Y.start/4),k=Math.ceil(Y.count/4),te=le%_.width,ue=Math.floor(le/_.width),Ae=k,W=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue),t.texSubImage2D(i.TEXTURE_2D,0,te,ue,Ae,W,O,ne,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function st(T,_,O){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=$e(T,_),ae=_.source;t.bindTexture(ne,T.__webglTexture,i.TEXTURE0+O);const ce=n.get(ae);if(ae.version!==ce.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const W=He.getPrimaries(He.workingColorSpace),ve=_.colorSpace===Cn?null:He.getPrimaries(_.colorSpace),Ie=_.colorSpace===Cn||W===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=S(_.image,!1,r.maxTextureSize);Q=Re(_,Q);const oe=s.convert(_.format,_.colorSpace),C=s.convert(_.type);let J=b(_.internalFormat,oe,C,_.normalized,_.colorSpace,_.isVideoTexture);Ye(ne,_);let Y;const le=_.mipmaps,k=_.isVideoTexture!==!0,te=ce.__version===void 0||ee===!0,ue=ae.dataReady,Ae=M(_,Q);if(_.isDepthTexture)J=d(_.format===Ln,_.type),te&&(k?t.texStorage2D(i.TEXTURE_2D,1,J,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,J,Q.width,Q.height,0,oe,C,null));else if(_.isDataTexture)if(le.length>0){k&&te&&t.texStorage2D(i.TEXTURE_2D,Ae,J,le[0].width,le[0].height);for(let W=0,ve=le.length;W<ve;W++)Y=le[W],k?ue&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Y.width,Y.height,oe,C,Y.data):t.texImage2D(i.TEXTURE_2D,W,J,Y.width,Y.height,0,oe,C,Y.data);_.generateMipmaps=!1}else k?(te&&t.texStorage2D(i.TEXTURE_2D,Ae,J,Q.width,Q.height),ue&&ct(_,Q,oe,C)):t.texImage2D(i.TEXTURE_2D,0,J,Q.width,Q.height,0,oe,C,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){k&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,J,le[0].width,le[0].height,Q.depth);for(let W=0,ve=le.length;W<ve;W++)if(Y=le[W],_.format!==an)if(oe!==null)if(k){if(ue)if(_.layerUpdates.size>0){const Ie=to(Y.width,Y.height,_.format,_.type);for(const pe of _.layerUpdates){const Ke=Y.data.subarray(pe*Ie/Y.data.BYTES_PER_ELEMENT,(pe+1)*Ie/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,pe,Y.width,Y.height,1,oe,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Y.width,Y.height,Q.depth,oe,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,J,Y.width,Y.height,Q.depth,0,Y.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Y.width,Y.height,Q.depth,oe,C,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,J,Y.width,Y.height,Q.depth,0,oe,C,Y.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{k&&te&&t.texStorage2D(i.TEXTURE_2D,Ae,J,le[0].width,le[0].height);for(let W=0,ve=le.length;W<ve;W++)Y=le[W],_.format!==an?oe!==null?k?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Y.width,Y.height,oe,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,W,J,Y.width,Y.height,0,Y.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ue&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Y.width,Y.height,oe,C,Y.data):t.texImage2D(i.TEXTURE_2D,W,J,Y.width,Y.height,0,oe,C,Y.data)}else if(_.isDataArrayTexture)if(k){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,J,Q.width,Q.height,Q.depth),ue)if(_.layerUpdates.size>0){const W=to(Q.width,Q.height,_.format,_.type);for(const ve of _.layerUpdates){const Ie=Q.data.subarray(ve*W/Q.data.BYTES_PER_ELEMENT,(ve+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Q.width,Q.height,1,oe,C,Ie)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,C,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,Q.width,Q.height,Q.depth,0,oe,C,Q.data);else if(_.isData3DTexture)k?(te&&t.texStorage3D(i.TEXTURE_3D,Ae,J,Q.width,Q.height,Q.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,C,Q.data)):t.texImage3D(i.TEXTURE_3D,0,J,Q.width,Q.height,Q.depth,0,oe,C,Q.data);else if(_.isFramebufferTexture){if(te)if(k)t.texStorage2D(i.TEXTURE_2D,Ae,J,Q.width,Q.height);else{let W=Q.width,ve=Q.height;for(let Ie=0;Ie<Ae;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,J,W,ve,0,oe,C,null),W>>=1,ve>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const W=i.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Q.parentNode!==W){W.appendChild(Q),g.add(_),W.onpaint=ve=>{const Ie=ve.changedElements;for(const pe of g)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},W.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const Ie=i.RGBA,pe=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,Ke,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(k&&te){const W=Le(le[0]);t.texStorage2D(i.TEXTURE_2D,Ae,J,W.width,W.height)}for(let W=0,ve=le.length;W<ve;W++)Y=le[W],k?ue&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,oe,C,Y):t.texImage2D(i.TEXTURE_2D,W,J,oe,C,Y);_.generateMipmaps=!1}else if(k){if(te){const W=Le(Q);t.texStorage2D(i.TEXTURE_2D,Ae,J,W.width,W.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,C,Q)}else t.texImage2D(i.TEXTURE_2D,0,J,oe,C,Q);w(_)&&_.mipmapsAutoUpdate===!0&&E(ne),ce.__version=ae.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function _t(T,_,O){if(_.image.length!==6)return;const ne=$e(T,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const ae=n.get(ee);if(ee.version!==ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const ce=He.getPrimaries(He.workingColorSpace),$=_.colorSpace===Cn?null:He.getPrimaries(_.colorSpace),Q=_.colorSpace===Cn||ce===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!oe&&!C?J[pe]=S(_.image[pe],!0,r.maxCubemapSize):J[pe]=C?_.image[pe].image:_.image[pe],J[pe]=Re(_,J[pe]);const Y=J[0],le=s.convert(_.format,_.colorSpace),k=s.convert(_.type);let te=b(_.internalFormat,le,k,_.normalized,_.colorSpace);const ue=_.isVideoTexture!==!0,Ae=ae.__version===void 0||ne===!0,W=ee.dataReady;let ve=M(_,Y);Ye(i.TEXTURE_CUBE_MAP,_);let Ie;if(_.isDepthTexture){if(te=d(_.format===Ln,_.type),Ae)if(ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,te,Y.width,Y.height);else for(let pe=0;pe<6;pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,te,Y.width,Y.height,0,le,k,null)}else if(oe){ue&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,te,Y.width,Y.height);for(let pe=0;pe<6;pe++){Ie=J[pe].mipmaps;for(let Ke=0;Ke<Ie.length;Ke++){const ut=Ie[Ke];_.format!==an?le!==null?ue?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke,0,0,ut.width,ut.height,le,ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke,te,ut.width,ut.height,0,ut.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke,0,0,ut.width,ut.height,le,k,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke,te,ut.width,ut.height,0,le,k,ut.data)}}}else{if(Ie=_.mipmaps,ue&&Ae){Ie.length>0&&ve++;const pe=Le(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,te,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(C){ue?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,J[pe].width,J[pe].height,le,k,J[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,te,J[pe].width,J[pe].height,0,le,k,J[pe].data);for(let Ke=0;Ke<Ie.length;Ke++){const Mn=Ie[Ke].image[pe].image;ue?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke+1,0,0,Mn.width,Mn.height,le,k,Mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke+1,te,Mn.width,Mn.height,0,le,k,Mn.data)}}else{ue?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,le,k,J[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,te,le,k,J[pe]);for(let Ke=0;Ke<Ie.length;Ke++){const ut=Ie[Ke];ue?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke+1,0,0,le,k,ut.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ke+1,te,le,k,ut.image[pe])}}}w(_)&&_.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),ae.__version=ee.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Qe(T,_,O,ne,ee,ae){const ce=s.convert(O.format,O.colorSpace),$=s.convert(O.type),Q=b(O.internalFormat,ce,$,O.normalized,O.colorSpace),oe=n.get(_),C=n.get(O);if(C.__renderTarget=_,!oe.__hasExternalTextures){const J=Math.max(1,_.width>>ae),Y=Math.max(1,_.height>>ae);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ae,Q,J,Y,_.depth,0,ce,$,null):t.texImage2D(ee,ae,Q,J,Y,0,ce,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,C.__webglTexture,0,je(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,C.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const ne=_.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,ae=d(_.stencilBuffer,ee),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(_),ae,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,T)}else{const ne=_.textures;for(let ee=0;ee<ne.length;ee++){const ae=ne[ee],ce=s.convert(ae.format,ae.colorSpace),$=s.convert(ae.type),Q=b(ae.internalFormat,ce,$,ae.normalized,ae.colorSpace);de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(_),Q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(T,_,O){const ne=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(_.depthTexture);ee.__renderTarget=_;const ae=ne?_.depthTexture.image[0]:_.depthTexture.image;(!ee.__webglTexture||ae.width!==_.width||ae.height!==_.height)&&(ae.width=_.width,ae.height=_.height,_.depthTexture.needsUpdate=!0),ne?ge(_.depthTexture,0):me(_.depthTexture,0);const ce=ee.__webglTexture,$=je(_),Q=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,oe=_.depthTexture.format===Ln?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Dn)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Q,ce,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Q,ce,0);else if(_.depthTexture.format===Ln)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Q,ce,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(T){const _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const ne=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){const ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=ne}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let ne=0;ne<6;ne++)dt(_.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?dt(_.__webglFramebuffer[0],T,0):dt(_.__webglFramebuffer,T,0);else if(O){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),kt(_.__webglDepthbuffer[ne],T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),kt(_.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,_,O){const ne=n.get(T);_!==void 0&&Qe(ne.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Mt(T)}function It(T){const _=T.texture,O=n.get(T),ne=n.get(_);T.addEventListener("dispose",D),I(T);const ee=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ce=ee.length>1;if(ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[$][Q]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ce)for(let $=0,Q=ee.length;$<Q;$++){const oe=n.get(ee[$]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&de(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){const Q=ee[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const oe=s.convert(Q.format,Q.colorSpace),C=s.convert(Q.type),J=b(Q.internalFormat,oe,C,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),Y=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,J,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Qe(O.__webglFramebuffer[$][Q],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Qe(O.__webglFramebuffer[$],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(_)?E(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let $=0,Q=ee.length;$<Q;$++){const oe=ee[$],C=n.get(oe);let J=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),Ye(J,oe),Qe(O.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+$,J,0),w(oe)&&E(J)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,ne.__webglTexture),Ye($,_),_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Qe(O.__webglFramebuffer[Q],T,_,i.COLOR_ATTACHMENT0,$,Q);else Qe(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,$,0);w(_)?E($):_.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&Mt(T)}function U(T){const _=T.textures;for(let O=0,ne=_.length;O<ne;O++){const ee=_[O];if(w(ee)&&ee.mipmapsAutoUpdate===!0){const ae=R(T),ce=n.get(ee).__webglTexture;t.bindTexture(ae,ce),E(ae),t.unbindTexture()}}}const Et=[];function tt(T){if(T.samples>0){if(de(T)===!1){const _=T.textures,O=T.width,ne=T.height;let ee=i.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(T),$=_.length>1;if($)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const C=n.get(_[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,O,ne,0,0,O,ne,ee,i.NEAREST),c===!0&&(Et.length=0,Et.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Et.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[oe]);const C=n.get(_[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function je(T){return Math.min(r.maxSamples,T.samples)}function de(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function at(T){const _=a.render.frame;p.get(T)!==_&&(p.set(T,_),T.update())}function Re(T,_){const O=T.colorSpace,ne=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==pr&&O!==Cn&&(He.getTransfer(O)===Je?(ne!==an||ee!==Xt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),_}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Pe,this.resetTextureUnits=ie,this.getTextureUnits=re,this.setTextureUnits=Ee,this.setTexture2D=me,this.setTexture2DArray=Se,this.setTexture3D=Ce,this.setTextureCube=ge,this.rebindTextures=xt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=de,this.dispose=V}function Gp(i,e){function t(n,r=Cn){let s;const a=He.getTransfer(r);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Zs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$s)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uo)return i.BYTE;if(n===Fo)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===Ks)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===zo)return i.ALPHA;if(n===Go)return i.RGB;if(n===an)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===Ln)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===Vn)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===js)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hs||n===fs||n===ps||n===ms)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gs||n===_s||n===xs||n===vs||n===Ss||n===hr||n===Ms)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gs||n===_s)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vs)return s.COMPRESSED_R11_EAC;if(n===Ss)return s.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return s.COMPRESSED_RG11_EAC;if(n===Ms)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Es||n===ys||n===bs||n===Ts||n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ls||n===Ns||n===Ds||n===Is||n===Us)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Es)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ys)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ts)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===As)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ws)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ps)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ls)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ns)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ds)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Is)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Us)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===Os||n===Bs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fs)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Os)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zs||n===Gs||n===fr||n===Hs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xn({vertexShader:Hp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wp extends qn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,p=null,g=null,h=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",f=new Vp,u={},S=t.getContextAttributes();let w=null,E=null;const R=[],b=[],d=new We;let M=null,I=null;const P=new Jt;P.viewport=new pt;const A=new Jt;A.viewport=new pt;const D=[P,A],z=new eu;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let me=R[j];return me===void 0&&(me=new zr,R[j]=me),me.getTargetRaySpace()},this.getControllerGrip=function(j){let me=R[j];return me===void 0&&(me=new zr,R[j]=me),me.getGripSpace()},this.getHand=function(j){let me=R[j];return me===void 0&&(me=new zr,R[j]=me),me.getHandSpace()};function Z(j){const me=b.indexOf(j.inputSource);if(me===-1)return;const Se=R[me];Se!==void 0&&(Se.update(j.inputSource,j.frame,l||a),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",se);for(let j=0;j<R.length;j++){const me=b[j];me!==null&&(b[j]=null,R[j].disconnect(me))}L=null,V=null,f.reset();for(const j in u)delete u[j];if(e.setRenderTarget(w),m=null,h=null,g=null,r=null,E=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(d.width,d.height,!1),I!==null){const j=I.camera;j.fov=I.fov,j.zoom=I.zoom,j.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return g===null&&y&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(d),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ce=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?Ln:Dn,Ce=S.stencil?ui:ln);const Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};g=this.getBinding(),h=g.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new on(h.textureWidth,h.textureHeight,{format:an,type:Xt,depthTexture:new di(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new on(m.framebufferWidth,m.framebufferHeight,{format:an,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function se(j){for(let me=0;me<j.removed.length;me++){const Se=j.removed[me],Ce=b.indexOf(Se);Ce>=0&&(b[Ce]=null,R[Ce].disconnect(Se))}for(let me=0;me<j.added.length;me++){const Se=j.added[me];let Ce=b.indexOf(Se);if(Ce===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=b.length){b.push(Se),Ce=Ne;break}else if(b[Ne]===null){b[Ne]=Se,Ce=Ne;break}if(Ce===-1)break}const ge=R[Ce];ge&&ge.connect(Se)}}function K(j,me){me===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(me.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let me=j.near,Se=j.far;f.texture!==null&&(f.depthNear>0&&(me=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),z.near=A.near=P.near=me,z.far=A.far=P.far=Se,(L!==z.near||V!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,V=z.far),z.layers.mask=j.layers.mask|6,P.layers.mask=z.layers.mask&-5,A.layers.mask=z.layers.mask&-3;const Ce=j.parent,ge=z.cameras;K(z,Ce);for(let Ne=0;Ne<ge.length;Ne++)K(ge[Ne],Ce);z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&j.isPerspectiveCamera&&(I={camera:j,fov:j.fov,zoom:j.zoom}),ie(j,z,Ce)};function ie(j,me,Se){Se===null?j.matrix.copy(me.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(me.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(me.projectionMatrix),j.projectionMatrixInverse.copy(me.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ks*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function(j){return u[j]};let re=null;function Ee(j,me){if(p=me.getViewerPose(l||a),x=me,p!==null){const Se=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ce=!1;Se.length!==z.cameras.length&&(z.cameras.length=0,Ce=!0);for(let we=0;we<Se.length;we++){const Ye=Se[we];let $e=null;if(m!==null)$e=m.getViewport(Ye);else{const ct=g.getViewSubImage(h,Ye);$e=ct.viewport,we===0&&(e.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(E))}let Be=D[we];Be===void 0&&(Be=new Jt,Be.layers.enable(we),Be.viewport=new pt,D[we]=Be),Be.matrix.fromArray(Ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set($e.x,$e.y,$e.width,$e.height),we===0&&(z.matrix.copy(Be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ce===!0&&z.cameras.push(Be)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){g=n.getBinding();const we=g.getDepthInformation(Se[0]);we&&we.isValid&&we.texture&&f.init(we,r.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),g=n.getBinding();for(let we=0;we<Se.length;we++){const Ye=Se[we].camera;if(Ye){let $e=u[Ye];$e||($e=new jo,u[Ye]=$e);const Be=g.getCameraImage(Ye);$e.sourceTexture=Be}}}}for(let Se=0;Se<R.length;Se++){const Ce=b[Se],ge=R[Se];Ce!==null&&ge!==void 0&&ge.update(Ce,me,l||a)}re&&re(j,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),x=null}const Pe=new nl;Pe.setAnimationLoop(Ee),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const Xp=new lt,hl=new Fe;hl.set(-1,0,0,0,1,0,0,0,1);function qp(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,el(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,S,w,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(f,u):u.isMeshLambertMaterial?(s(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(f,u),g(f,u)):u.isMeshPhongMaterial?(s(f,u),p(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,E)):u.isMeshMatcapMaterial?(s(f,u),x(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),y(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,S,w):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ot&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ot&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const S=e.get(u),w=S.envMap,E=S.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(E)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(hl),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,S,w){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=w*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function p(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function g(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function y(f,u){const S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yp(i,e,t,n){let r={},s={};function a(S,w){const E=w.program;n.uniformBlockBinding(S,E,r[S.id])}function o(S,w){let E=r[S.id];E===void 0&&(x(S),E=c(S),r[S.id]=E,S.addEventListener("dispose",f));const R=w.program;n.updateUBOMapping(S,R);const b=e.render.frame;s[S.id]!==b&&(l(S),s[S.id]=b)}function c(S){const w=i.createBuffer(),E=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(S){const w=r[S.id],E=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,d=E.length;b<d;b++){const M=E[b];if(Array.isArray(M))for(let I=0,P=M.length;I<P;I++)p(M[I],b,I,R);else p(M,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,E,R){if(h(S,w,E,R)===!0){const b=S.__offset,d=S.value;if(Array.isArray(d)){let M=0;for(let I=0;I<d.length;I++){const P=d[I],A=y(P,!0);g(P,S.__data,M),M+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else g(d,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,S.__data)}}function g(S,w,E){typeof S=="number"||typeof S=="boolean"?w[E]=S:S.isMatrix3?(w[E]=S.elements[0],w[E+1]=S.elements[1],w[E+2]=S.elements[2],w[E+3]=0,w[E+4]=S.elements[3],w[E+5]=S.elements[4],w[E+6]=S.elements[5],w[E+7]=0,w[E+8]=S.elements[6],w[E+9]=S.elements[7],w[E+10]=S.elements[8],w[E+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-E),E):S.toArray(w,E)}function h(S,w,E,R){const b=S.value,d=w+"_"+E;if(Array.isArray(b)){R[d]===void 0&&(R[d]=[]);const M=R[d];let I=!1;for(let P=0;P<b.length;P++)m(b[P],M,P)===!0&&(I=!0);return I}return m(b,R,d)}function m(S,w,E){if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:ArrayBuffer.isView(S)?w[E]=S.slice():w[E]=S.clone(),!0;{const R=w[E];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function x(S){const w=S.uniforms;let E=0;const R=16;for(let d=0,M=w.length;d<M;d++){const I=Array.isArray(w[d])?w[d]:[w[d]];for(let P=0,A=I.length;P<A;P++){const D=I[P],z=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(w[d])||Array.isArray(D.value);let V=E;for(let q=0,se=z.length;q<se;q++){const K=z[q],ie=y(K,L),re=E%R,Ee=re%ie.boundary,Pe=re+Ee;E+=Ee,Pe!==0&&R-Pe<ie.storage&&(E+=R-Pe),q===0&&(V=E),E+=ie.storage}const Z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Z((E-V)/Float32Array.BYTES_PER_ELEMENT),D.__offset=V}}const b=E%R;return b>0&&(E+=R-b),S.__size=E,S.__cache={},this}function y(S,w){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(S){const w=S.target;w.removeEventListener("dispose",f),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(const S in r)i.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:u}}const Kp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function Zp(){return nn===null&&(nn=new Vc(Kp,16,16,Vn,cn),nn.name="DFG_LUT",nn.minFilter=Ft,nn.magFilter=Ft,nn.wrapS=xn,nn.wrapT=xn,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class $p{constructor(e={}){const{canvas:t=mc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Xt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const y=m,f=new Set([js,Qs,Js]),u=new Set([Xt,ln,wi,ui,Zs,$s]),S=new Uint32Array(4),w=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let R=null,b=null;const d=[],M=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let A=!1,D=null,z=null,L=null,V=null;this._outputColorSpace=Wt;let Z=0,q=0,se=null,K=-1,ie=null;const re=new pt,Ee=new pt;let Pe=null;const j=new Ve(0);let me=0,Se=t.width,Ce=t.height,ge=1,Ne=null,it=null;const we=new pt(0,0,Se,Ce),Ye=new pt(0,0,Se,Ce);let $e=!1;const Be=new xr,ct=new sa;let st=!1,_t=!1;const Qe=new lt,kt=new H,dt=new pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function It(){return se===null?ge:1}let U=n;function Et(v,N){return t.getContext(v,N)}let tt,je,de,at,Re,Le,T,_,O,ne,ee,ae,ce,$,Q,oe,C,J,Y,le,k,te,ue;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ys}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const N="webgl2";if(U=Et(N,v),U===null)throw Et(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),qe("WebGLRenderer: "+v.message),v}function Ae(){tt=new Qh(U),tt.init(),k=new Gp(U,tt),je=new Hh(U,tt,e,k),de=new Bp(U,tt),je.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),z=U.createFramebuffer(),L=U.createFramebuffer(),V=U.createFramebuffer(),at=new tf(U),Re=new bp,Le=new zp(U,tt,de,Re,je,k,at),T=new Jh(P),_=new iu(U),te=new zh(U,_),O=new jh(U,_,at,te),ne=new rf(U,O,_,te,at),J=new nf(U,je,Le),Q=new kh(Re),ee=new yp(P,T,tt,je,te,Q),ae=new qp(P,Re),ce=new Ap,$=new Np(tt),C=new Bh(P,T,de,ne,x,c),oe=new Op(P,ne,je),ue=new Yp(U,at,je,de),Y=new Gh(U,tt,at),le=new ef(U,tt,at),at.programs=ee.programs,P.capabilities=je,P.extensions=tt,P.properties=Re,P.renderLists=ce,P.shadowMap=oe,P.state=de,P.info=at}y!==Xt&&(I=new af(y,t.width,t.height,o,r,s));const W=new Wp(P,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=tt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=tt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(v){v!==void 0&&(ge=v,this.setSize(Se,Ce,!1))},this.getSize=function(v){return v.set(Se,Ce)},this.setSize=function(v,N,X=!0){if(W.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,Ce=N,t.width=Math.floor(v*ge),t.height=Math.floor(N*ge),X===!0&&(t.style.width=v+"px",t.style.height=N+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Se*ge,Ce*ge).floor()},this.setDrawingBufferSize=function(v,N,X){Se=v,Ce=N,ge=X,t.width=Math.floor(v*X),t.height=Math.floor(N*X),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(y===Xt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(re)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,N,X,B){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,N,X,B),de.viewport(re.copy(we).multiplyScalar(It()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,N,X,B){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,N,X,B),de.scissor(Ee.copy(Ye).multiplyScalar(It()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){de.setScissorTest($e=v)},this.setOpaqueSort=function(v){Ne=v},this.setTransparentSort=function(v){it=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,X=!0){let B=0;if(v){let G=!1;if(se!==null){const fe=se.texture.format;G=f.has(fe)}if(G){const fe=se.texture.type,Me=u.has(fe),he=C.getClearColor(),xe=C.getClearAlpha(),Te=he.r,Ue=he.g,ze=he.b;Me?(S[0]=Te,S[1]=Ue,S[2]=ze,S[3]=xe,U.clearBufferuiv(U.COLOR,0,S)):(w[0]=Te,w[1]=Ue,w[2]=ze,w[3]=xe,U.clearBufferiv(U.COLOR,0,w))}else B|=U.COLOR_BUFFER_BIT}N&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),C.dispose(),ce.dispose(),$.dispose(),Le.dispose(),Re.dispose(),T.dispose(),ne.dispose(),O.dispose(),te.dispose(),ue.dispose(),ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",pa),W.removeEventListener("sessionend",ma),In.stop()};function ve(v){v.preventDefault(),Na("WebGLRenderer: Context Lost."),A=!0}function Ie(){Na("WebGLRenderer: Context Restored."),A=!1;const v=at.autoReset,N=oe.enabled,X=oe.autoUpdate,B=oe.needsUpdate,G=oe.type;Ae(),at.autoReset=v,oe.enabled=N,oe.autoUpdate=X,oe.needsUpdate=B,oe.type=G}function pe(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const N=v.target;N.removeEventListener("dispose",Ke),ut(N)}function ut(v){Mn(v),Re.remove(v)}function Mn(v){const N=Re.get(v).programs;N!==void 0&&(N.forEach(function(X){ee.releaseProgram(X)}),v.isShaderMaterial&&ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,X,B,G,fe){N===null&&(N=Mt);const Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,he=gl(v,N,X,B,G);de.setMaterial(B,Me);let xe=X.index,Te=1;if(B.wireframe===!0){if(xe=O.getWireframeAttribute(X),xe===void 0)return;Te=2}const Ue=X.drawRange,ze=X.attributes.position;let ye=Ue.start*Te,Ge=(Ue.start+Ue.count)*Te;fe!==null&&(ye=Math.max(ye,fe.start*Te),Ge=Math.min(Ge,(fe.start+fe.count)*Te)),xe!==null?(ye=Math.max(ye,0),Ge=Math.min(Ge,xe.count)):ze!=null&&(ye=Math.max(ye,0),Ge=Math.min(Ge,ze.count));const ht=Ge-ye;if(ht<0||ht===1/0)return;te.setup(G,B,he,X,xe);let nt,et=Y;if(xe!==null&&(nt=_.get(xe),et=le,et.setIndex(nt)),G.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*It()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(G.isLine){let At=B.linewidth;At===void 0&&(At=1),de.setLineWidth(At*It()),G.isLineSegments?et.setMode(U.LINES):G.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else G.isPoints?et.setMode(U.POINTS):G.isSprite&&et.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const At=G._multiDrawStarts,be=G._multiDrawCounts,Lt=G._multiDrawCount,Ze=xe?_.get(xe).bytesPerElement:1,Un=Re.get(B).currentProgram.getUniforms();for(let wt=0;wt<Lt;wt++)Un.setValue(U,"_gl_DrawID",wt),et.render(At[wt]/Ze,be[wt])}else if(G.isInstancedMesh)et.renderInstances(ye,ht,G.count);else if(X.isInstancedBufferGeometry){const At=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,At);et.renderInstances(ye,ht,be)}else et.render(ye,ht)};function fa(v,N,X,B){D!==null&&v.isNodeMaterial&&D.setObject(B,v),st===!0&&Q.setState(v,X,!1),v.transparent===!0&&v.side===Qt&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,gi(v,N,B),v.side=kn,v.needsUpdate=!0,gi(v,N,B),v.side=Qt):gi(v,N,B)}this.compile=function(v,N,X=null){X===null&&(X=v),D!==null&&D.renderStart(v,N,X),b=$.get(X),b.init(N),M.push(b),X.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),v!==X&&v.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),_t=this.localClippingEnabled,st=Q.init(this.clippingPlanes,_t),st===!0&&Q.setGlobalState(this.clippingPlanes,N),D!==null&&oe.render(b.state.shadowsArray,X,N);const B=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const he=fe[Me];fa(he,X,N,G),B.add(he)}else fa(fe,X,N,G),B.add(fe)}),b=M.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(v,N,X=null){const B=this.compile(v,N,X);return new Promise(G=>{function fe(){if(B.forEach(function(Me){const xe=Re.get(Me).currentProgram;(xe===void 0||xe.isReady())&&B.delete(Me)}),B.size===0){G(v);return}setTimeout(fe,10)}tt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let br=null;function pl(v){br&&br(v)}function pa(){In.stop()}function ma(){In.start()}const In=new nl;In.setAnimationLoop(pl),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(v){br=v,W.setAnimationLoop(v),v===null?In.stop():In.start()},W.addEventListener("sessionstart",pa),W.addEventListener("sessionend",ma),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;D!==null&&D.renderStart(v,N);const X=W.enabled===!0&&W.isPresenting===!0,B=I!==null&&(se===null||X)&&I.begin(P,se);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,se),b=$.get(v,M.length),b.init(N),b.state.textureUnits=Le.getTextureUnits(),M.push(b),Qe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ct.setFromArrayCamera(N):Be.setFromProjectionMatrix(Qe,en,N.reversedDepth),_t=this.localClippingEnabled,st=Q.init(this.clippingPlanes,_t),R=ce.get(v,d.length),R.init(),d.push(R),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Tr(Me,N,-1/0,P.sortObjects)}Tr(v,N,0,P.sortObjects),R.finish(),D!==null&&D.updateLights(b.state.lightsArray),P.sortObjects===!0&&R.sort(Ne,it),xt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,xt&&C.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),st===!0&&Q.beginShadows();const G=b.state.shadowsArray;if(oe.render(G,v,N),st===!0&&Q.endShadows(),(B&&I.hasRenderPass())===!1){const Me=R.opaque,he=R.transmissive;if(b.setupLights(),N.isArrayCamera){const xe=N.cameras;if(he.length>0)for(let Te=0,Ue=xe.length;Te<Ue;Te++){const ze=xe[Te];_a(Me,he,v,ze)}xt&&C.render(v);for(let Te=0,Ue=xe.length;Te<Ue;Te++){const ze=xe[Te];ga(R,v,ze,ze.viewport)}}else he.length>0&&_a(Me,he,v,N),xt&&C.render(v),ga(R,v,N)}se!==null&&q===0&&(Le.updateMultisampleRenderTarget(se),Le.updateRenderTargetMipmap(se)),B&&I.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),te.resetDefaultState(),K=-1,ie=null,M.pop(),M.length>0?(b=M[M.length-1],Le.setTextureUnits(b.state.textureUnits),st===!0&&Q.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,d.pop(),d.length>0?R=d[d.length-1]:R=null,D!==null&&D.renderEnd()};function Tr(v,N,X,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const Me=N.isArrayCamera?ct:Be;if(!v.frustumCulled||v.intersectsFrustum(Me)){B&&dt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qe);const he=ne.update(v),xe=v.material;xe.visible&&R.push(v,he,xe,X,dt.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){const Me=N.isArrayCamera?ct:Be;if(!v.frustumCulled||v.intersectsFrustum(Me)){const he=ne.update(v),xe=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),dt.copy(v.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),dt.copy(he.boundingSphere.center)),dt.applyMatrix4(v.matrixWorld).applyMatrix4(Qe)),Array.isArray(xe)){const Te=he.groups;for(let Ue=0,ze=Te.length;Ue<ze;Ue++){const ye=Te[Ue],Ge=xe[ye.materialIndex];Ge&&Ge.visible&&R.push(v,he,Ge,X,dt.z,ye,N)}}else xe.visible&&R.push(v,he,xe,X,dt.z,null,N)}}}const fe=v.children;for(let Me=0,he=fe.length;Me<he;Me++)Tr(fe[Me],N,X,B)}function ga(v,N,X,B){const{opaque:G,transmissive:fe,transparent:Me}=v;b.setupLightsView(X),st===!0&&Q.setGlobalState(P.clippingPlanes,X),B&&de.viewport(re.copy(B)),G.length>0&&Di(G,N,X),fe.length>0&&Di(fe,N,X),Me.length>0&&Di(Me,N,X),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function _a(v,N,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const ye=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:ye?cn:Xt,minFilter:Pn,samples:Math.max(4,je.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const fe=b.state.transmissionRenderTarget[B.id],Me=B.viewport||re;fe.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const he=P.getRenderTarget(),xe=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(fe),P.getClearColor(j),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),xt&&C.render(X);const Ue=P.toneMapping;P.toneMapping=vn;const ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),st===!0&&Q.setGlobalState(P.clippingPlanes,B),Di(v,X,B),Le.updateMultisampleRenderTarget(fe),Le.updateRenderTargetMipmap(fe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ge=0,ht=N.length;Ge<ht;Ge++){const nt=N[Ge],{object:et,geometry:At,material:be,group:Lt}=nt;if(be.side===Qt&&et.layers.test(B.layers)){const Ze=be.side;be.side=Ot,be.needsUpdate=!0,xa(et,X,B,At,be,Lt),be.side=Ze,be.needsUpdate=!0,ye=!0}}ye===!0&&(Le.updateMultisampleRenderTarget(fe),Le.updateRenderTargetMipmap(fe))}P.setRenderTarget(he,xe,Te),P.setClearColor(j,me),ze!==void 0&&(B.viewport=ze),P.toneMapping=Ue}function Di(v,N,X){const B=N.isScene===!0?N.overrideMaterial:null;for(let G=0,fe=v.length;G<fe;G++){const Me=v[G],{object:he,geometry:xe,group:Te}=Me;let Ue=Me.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),he.layers.test(X.layers)&&xa(he,N,X,xe,Ue,Te)}}function xa(v,N,X,B,G,fe){D!==null&&G.isNodeMaterial&&D.setObject(v,G),v.onBeforeRender(P,N,X,B,G,fe),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(P,N,X,B,v,fe),G.transparent===!0&&G.side===Qt&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,P.renderBufferDirect(X,N,B,G,v,fe),G.side=kn,G.needsUpdate=!0,P.renderBufferDirect(X,N,B,G,v,fe),G.side=Qt):P.renderBufferDirect(X,N,B,G,v,fe),v.onAfterRender(P,N,X,B,G,fe)}function va(v){let N=0;for(const X of v)X.texture!==null&&N++;return N}function gi(v,N,X){N.isScene!==!0&&(N=Mt);const B=Re.get(v),G=b.state.lights,fe=b.state.shadowsArray,Me=G.state.version,he=ee.getParameters(v,G.state,fe,N,X,b.state.lightProbeGridArray),xe=ee.getProgramCacheKey(he);let Te=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=T.get(v.envMap||B.environment,Ue),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",Ke),Te=new Map,B.programs=Te,B.programVariants=new Map);let ze=Te.get(xe);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===Me)return Ma(v,he),ze}else he.uniforms=ee.getUniforms(v),D!==null&&v.isNodeMaterial&&D.build(v,X,he),v.onBeforeCompile(he,P),ze=ee.acquireProgram(he,xe),Te.set(xe,ze),B.uniforms=he.uniforms;const ye=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=Q.uniform),Ma(v,he),B.needsLights=xl(v),B.lightsStateVersion=Me,B.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=va(b.state.lightProbeGridArray),B.currentProgram=ze,B.uniformsList=null,ze}function ml(v,N,X,B,G){const fe=Re.get(v),Me=fe.currentProgram.id+","+B+","+G;let he=fe.programVariants.get(Me);return he===void 0?(he=gi(v,N,X),fe.programVariants.set(Me,he)):(fe.currentProgram=he,fe.uniformsList=null,fe.outputColorSpace=B,fe.toneMapping=G),he}function Sa(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=dr.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Ma(v,N){const X=Re.get(v);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function gl(v,N,X,B,G){N.isScene!==!0&&(N=Mt),Le.resetTextureUnits();const fe=N.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,he=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:He.workingColorSpace,xe=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Te=T.get(B.envMap||Me,xe),Ue=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!X.morphAttributes.position,Ge=!!X.morphAttributes.normal,ht=!!X.morphAttributes.color;let nt=vn;B.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(nt=P.toneMapping);const et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=et!==void 0?et.length:0,be=Re.get(B),Lt=b.state.lights;if(st===!0&&(_t===!0||v!==ie)){const ot=v===ie&&B.id===K;Q.setState(B,v,ot)}let Ze=!1,Un=!1;B.version===be.__version?be.needsLights&&be.lightsStateVersion!==Lt.state.version||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Te||B.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==ze||be.morphTargets!==ye||be.morphNormals!==Ge||be.morphColors!==ht||be.morphTargetsCount!==At||be.numLightProbeGrids!==va(b.state.lightProbeGridArray)?Ze=!0:(be.outputColorSpace!==he||be.toneMapping!==nt)&&(Un=!0):(Ze=!0,be.__version=B.version);let wt=be.currentProgram;(Ze===!0||Un===!0)&&(wt=Un===!0?ml(B,N,G,he,nt):gi(B,N,G),D&&B.isNodeMaterial&&D.onUpdateProgram(B,wt,be));let Ii=!1,En=!1,Fn=!1;const Xe=wt.getUniforms(),yt=be.uniforms;if(de.useProgram(wt.program)&&(Ii=!0,En=!0,Fn=!0),B.id!==K&&(K=B.id,En=!0),Ii||ie!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Xe.setValue(U,"projectionMatrix",v.projectionMatrix),Xe.setValue(U,"viewMatrix",v.matrixWorldInverse);const vt=Xe.map.cameraPosition;vt!==void 0&&vt.setValue(U,kt.setFromMatrixPosition(v.matrixWorld)),je.logarithmicDepthBuffer&&Xe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Xe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),ie!==v&&(ie=v,En=!0,Fn=!0)}if(be.needsLights&&(Lt.state.sunShadowMap.length>0&&Xe.setValue(U,"sunShadowMap",Lt.state.sunShadowMap,Le),Lt.state.directionalShadowMap.length>0&&Xe.setValue(U,"directionalShadowMap",Lt.state.directionalShadowMap,Le),Lt.state.spotShadowMap.length>0&&Xe.setValue(U,"spotShadowMap",Lt.state.spotShadowMap,Le),Lt.state.pointShadowMap.length>0&&Xe.setValue(U,"pointShadowMap",Lt.state.pointShadowMap,Le)),G.isSkinnedMesh){Xe.setOptional(U,G,"bindMatrix"),Xe.setOptional(U,G,"bindMatrixInverse");const ot=G.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),Xe.setValue(U,"boneTexture",ot.boneTexture,Le))}G.isBatchedMesh&&(Xe.setOptional(U,G,"batchingTexture"),Xe.setValue(U,"batchingTexture",G._matricesTexture,Le),Xe.setOptional(U,G,"batchingIdTexture"),Xe.setValue(U,"batchingIdTexture",G._indirectTexture,Le),Xe.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Xe.setValue(U,"batchingColorTexture",G._colorsTexture,Le));const qt=X.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&J.update(G,X,wt),(En||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,Xe.setValue(U,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(yt.envMapIntensity.value=N.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Zp()),En){if(Xe.setValue(U,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&_l(yt,Fn),fe&&B.fog===!0&&ae.refreshFogUniforms(yt,fe),ae.refreshMaterialUniforms(yt,B,ge,Ce,b.state.transmissionRenderTarget[v.id]),be.needsLights&&be.numLightProbeGrids>0){const ot=E;let vt=0;for(const un of b.state.lightProbeGridArray)un.texture!==null&&(ot.textures[vt]=un.texture,ot.min[vt]=un.boundingBox.min,ot.max[vt]=un.boundingBox.max,ot.resolution[vt]=un.resolution,vt++);for(const un in ot)ot[un].length=vt;yt.probesSH.value=ot.textures,yt.probesMin.value=ot.min,yt.probesMax.value=ot.max,yt.probesResolution.value=ot.resolution}dr.upload(U,Sa(be),yt,Le)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(dr.upload(U,Sa(be),yt,Le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Xe.setValue(U,"center",G.center),Xe.setValue(U,"modelViewMatrix",G.modelViewMatrix),Xe.setValue(U,"normalMatrix",G.normalMatrix),Xe.setValue(U,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const ot=B.uniformsGroups;for(let vt=0,un=ot.length;vt<un;vt++){const ya=ot[vt];ue.update(ya,wt),ue.bind(ya,wt)}}return wt}function _l(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(v,N,X){const B=Re.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=N,Re.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const X=Re.get(v);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,X=0){se=v,Z=N,q=X;let B=null,G=!1,fe=!1;if(v){const he=Re.get(v);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),re.copy(v.viewport),Ee.copy(v.scissor),Pe=v.scissorTest,de.viewport(re),de.scissor(Ee),de.setScissorTest(Pe),K=-1;return}else if(he.__webglFramebuffer===void 0)Le.setupRenderTarget(v);else if(he.__hasExternalTextures)Le.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(v)}}const xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Te=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?B=Te[N][X]:B=Te[N],G=!0):v.samples>0&&Le.useMultisampledRTT(v)===!1?B=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?B=Te[X]:B=Te,re.copy(v.viewport),Ee.copy(v.scissor),Pe=v.scissorTest}else re.copy(we).multiplyScalar(ge).floor(),Ee.copy(Ye).multiplyScalar(ge).floor(),Pe=$e;if(X!==0&&(B=z),de.bindFramebuffer(U.FRAMEBUFFER,B)&&de.drawBuffers(v,B),de.viewport(re),de.scissor(Ee),de.setScissorTest(Pe),G){const he=Re.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,X)}else if(fe){const he=N;for(let xe=0;xe<v.textures.length;xe++){const Te=Re.get(v.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,Te.__webglTexture,X,he)}}else if(v!==null&&X!==0){const he=Re.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,X)}K=-1};function Ea(v){const N=Re.get(v);return(N.__readFormat!==v.format||N.__readType!==v.type)&&(N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=je.textureFormatReadable(v.format),N.__typeReadable=je.textureTypeReadable(v.type)),N}this.readRenderTargetPixels=function(v,N,X,B,G,fe,Me,he=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Te=v.textures[he],Ue=Te.format,ze=Te.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const ye=Ea(Te);if(ye.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&X>=0&&X<=v.height-G&&U.readPixels(N,X,B,G,k.convert(Ue),k.convert(ze),fe)}finally{const Te=se!==null?Re.get(se).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,N,X,B,G,fe,Me,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe)if(N>=0&&N<=v.width-B&&X>=0&&X<=v.height-G){de.bindFramebuffer(U.FRAMEBUFFER,xe);const Te=v.textures[he],Ue=Te.format,ze=Te.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const ye=Ea(Te);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(N,X,B,G,k.convert(Ue),k.convert(ze),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const ht=se!==null?Re.get(se).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,ht);const nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gc(U,nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ge),U.deleteSync(nt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,X=0){const B=Math.pow(2,-X),G=Math.floor(v.image.width*B),fe=Math.floor(v.image.height*B),Me=N!==null?N.x:0,he=N!==null?N.y:0;Le.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Me,he,G,fe),de.unbindTexture()},this.copyTextureToTexture=function(v,N,X=null,B=null,G=0,fe=0){let Me,he,xe,Te,Ue,ze,ye,Ge,ht;const nt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(X!==null)Me=X.max.x-X.min.x,he=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,Te=X.min.x,Ue=X.min.y,ze=X.isBox3?X.min.z:0;else{const Xe=Math.pow(2,-G);Me=Math.floor(nt.width*Xe),he=Math.floor(nt.height*Xe),v.isDataArrayTexture?xe=nt.depth:v.isData3DTexture?xe=Math.floor(nt.depth*Xe):xe=1,Te=0,Ue=0,ze=0}B!==null?(ye=B.x,Ge=B.y,ht=B.z):(ye=0,Ge=0,ht=0);const et=k.convert(N.format),At=k.convert(N.type);let be;N.isData3DTexture?(Le.setTexture3D(N,0),be=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Le.setTexture2DArray(N,0),be=U.TEXTURE_2D_ARRAY):(Le.setTexture2D(N,0),be=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const Lt=de.getParameter(U.UNPACK_ROW_LENGTH),Ze=de.getParameter(U.UNPACK_IMAGE_HEIGHT),Un=de.getParameter(U.UNPACK_SKIP_PIXELS),wt=de.getParameter(U.UNPACK_SKIP_ROWS),Ii=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,nt.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,nt.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),de.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),de.pixelStorei(U.UNPACK_SKIP_IMAGES,ze);const En=v.isDataArrayTexture||v.isData3DTexture,Fn=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const Xe=Re.get(v),yt=Re.get(N),qt=Re.get(Xe.__renderTarget),ot=Re.get(yt.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,qt.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let vt=0;vt<xe;vt++)En&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,G,ze+vt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(N).__webglTexture,fe,ht+vt)),U.blitFramebuffer(Te,Ue,Te+Me,Ue+he,ye,Ge,ye+Me,Ge+he,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||Re.has(v)){const Xe=Re.get(v),yt=Re.get(N);de.bindFramebuffer(U.READ_FRAMEBUFFER,L),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let qt=0;qt<xe;qt++)En?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xe.__webglTexture,G,ze+qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xe.__webglTexture,G),Fn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,fe,ht+qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,fe),G!==0?U.blitFramebuffer(Te,Ue,Te+Me,Ue+he,ye,Ge,ye+Me,Ge+he,U.COLOR_BUFFER_BIT,U.NEAREST):Fn?U.copyTexSubImage3D(be,fe,ye,Ge,ht+qt,Te,Ue,Me,he):U.copyTexSubImage2D(be,fe,ye,Ge,Te,Ue,Me,he);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Fn?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(be,fe,ye,Ge,ht,Me,he,xe,et,At,nt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(be,fe,ye,Ge,ht,Me,he,xe,et,nt.data):U.texSubImage3D(be,fe,ye,Ge,ht,Me,he,xe,et,At,nt):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,ye,Ge,Me,he,et,At,nt.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,ye,Ge,nt.width,nt.height,et,nt.data):U.texSubImage2D(U.TEXTURE_2D,fe,ye,Ge,Me,he,et,At,nt);de.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Un),de.pixelStorei(U.UNPACK_SKIP_ROWS,wt),de.pixelStorei(U.UNPACK_SKIP_IMAGES,Ii),fe===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(be),de.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&Le.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Le.setTextureCube(v,0):v.isData3DTexture?Le.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Le.setTexture2DArray(v,0):Le.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){Z=0,q=0,se=null,de.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const ai={description:"Senior DevOps / Observability Engineer with 5 years of experience in autonomous infra and high-scale Kubernetes ecosystems. Expert in architecting Observability as Code (Grafana, Prometheus) and Agentic AI infrastructure. Specialized in multi-cloud reliability (AWS, OCI, Azure) for fintech platforms, achieving 40% FinOps savings. Two-time recipient of the Power Performer (Zebpay) and Star Spot (Vivvix) awards.",approach:"I architect Observability as Code and Agentic AI systems to make infrastructure self-healing and reliable.",stats:[{value:"40%",label:"FinOps Savings"},{value:"35%",label:"Faster Builds"},{value:"99.99%",label:"Uptime"},{value:"40%",label:"Faster RCA"}],education:{degree:"Bachelor of Technology, Computer Science",school:"MANIT Bhopal",period:"2016 – 2020"}},$t=[{company:"Nymcard",role:"DevOps Engineer",period:"Feb 2026 - Present",location:"Abu Dhabi, UAE (Remote)",technologies:["Kubernetes","Kafka","PostgreSQL","RabbitMQ","Grafana","GitHub Actions","Flux","Argo CD","LLMs","Agentic AI","GitOps"],achievements:["Automated operator-based lifecycle management for stateful services (Kafka, PostgreSQL, RabbitMQ) for 99.99% uptime, routing SLO alerts to Grafana.","Built GitHub Actions CI/CD and managed GitOps (Flux/Argo CD) across 8+ Kubernetes clusters, reducing deployment toil for 50+ engineers.","Architected an Agentic AI Observability Assistant using LLMs to correlate signals, cutting production incident resolution time (RCA) by 40%."]},{company:"Zebpay",role:"DevOps Engineer",period:"May 2024 - Dec 2025",location:"New Delhi, India",awards:["Power Performer (2x)"],technologies:["AWS","Prometheus","Grafana","Thanos","Loki","OpenTelemetry","GitHub Actions","Trivy","Semgrep","Opencost","Azure APIM","AWS API Gateway","EKS","Karpenter","Cilium","OPA","Terraform","Helm"],achievements:["Deployed centralized observability (Prometheus, Grafana, Thanos, Loki, OTel) across AWS accounts, establishing SLOs and VM monitoring.","Modularized GitHub Actions CI/CD with integrated SAST (Trivy, Semgrep), reducing build times by 35% and automating image hardening.","Slashed cloud spend by 40% via a FinOps initiative (Opencost) focusing on intelligent scaling, capacity reservations, and consolidation.","Orchestrated zero-downtime migration from Azure APIM to AWS API Gateway for 2T requests/month, optimizing API latency and backend integration.","Upgraded AWS EKS clusters with Karpenter (autoscaling), Cilium, and OPA (compliance) using custom Terraform modules and Helm charts."]},{company:"Rizzle",role:"DevOps Engineer",period:"Sep 2023 - Apr 2024",location:"Hyderabad, India",technologies:["AWS","Terraform","CloudFormation","CloudWatch","Grafana","Kubernetes","Argo CD","Jenkins","Node.js","Slack"],achievements:["Provisioned AWS infrastructure via Terraform and CloudFormation, integrating CloudWatch metrics into Managed Grafana to reduce MTTR by 25%.","Optimized Kubernetes manifests and HPA scaling for media workloads, improving resource utilization by 20% and eliminating OOM pod evictions.","Automated delivery via Argo CD/Jenkins and built Node.js Slack integration tools, shortening deployment cycles for internal teams."]},{company:"Vivvix (Numerator + Kantar / Now MediaRadar)",role:"DevOps Engineer",period:"Mar 2021 - Aug 2023",location:"Pune, India",awards:["Star Spot Award"],technologies:["Airflow","Grafana","AWS Lambda","CloudWatch","X-Ray","Azure AKS","Terraform","Atlantis","Azure Pipelines","Snowflake","Databricks","AWS DMS"],achievements:["Led migration of ETL pipelines from Airflow 1.10 to 2.x with hardened CI/CD flows and Grafana dashboards.","Standardized application logging/tracing for AWS Lambda using CloudWatch, X-Ray, and Grafana.","Bootstrapped Azure AKS clusters and provisioned multi-cloud infrastructure using Terraform and Atlantis.","Cut deployment times by 50% via re-architecting parallel execution and caching in Azure Pipelines.","Optimized Snowflake/Databricks FinOps and deployed AWS DMS autoscaling to reduce data costs by 40%."]}],Jp=[{title:"Autonomous RCA Agent",technologies:["LLMs","Prometheus","Python","Agentic AI","Grafana","Observability"],description:"Developed an LLM agent correlating Prometheus metrics with deployment logs to accelerate incident root cause analysis.",link:"#"},{title:"Multi-Cluster Observability Platform",technologies:["AWS","Azure","Thanos","OpenTelemetry","Prometheus","Grafana"],description:"Unified AWS/Azure monitoring plane using Thanos and OpenTelemetry for long term metrics and tracing.",link:"#"}],fl=[{category:"Platform & IaC",skills:["Terraform","Kubernetes","EKS","AKS","Rancher","Helm","Docker"]},{category:"SRE & Observability",skills:["Prometheus","Grafana","Thanos","Loki","Tempo","OpenTelemetry","CloudWatch","Opsgenie","SLO/SLI"]},{category:"CI/CD & DevSecOps",skills:["GitHub Actions","Azure Pipelines","Argo CD","Jenkins","CircleCI","Trivy","Semgrep"]},{category:"Cloud Ecosystem",skills:["AWS (Lambda, EKS, ECS, RDS, MSK, DMS)","Azure (ADF, Databricks, AKS, APIM)","OCI","GCP"]},{category:"AI & Automation",skills:["LLM Agentic Workflows","AI Observability","Python","Go","Bash","Node.js"]}],Qp=[{name:"Email",value:"wiwek13@gmail.com",href:"mailto:wiwek13@gmail.com"},{name:"LinkedIn",value:"https://www.linkedin.com/in/wiwek13/",href:"https://www.linkedin.com/in/wiwek13/"},{name:"Location",value:"Indore, MP, India",href:"#"},{name:"Phone",value:"+91 8989879834",href:"tel:+918989879834"}];class jp{ctx=null;enabled=!0;ambientGain=null;ambientOsc=null;init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startOceanAmbience(){if(this.enabled&&(this.init(),!(!this.ctx||this.ambientOsc)))try{this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.setValueAtTime(45,this.ctx.currentTime),this.ambientGain.gain.setValueAtTime(.018,this.ctx.currentTime),this.ambientOsc.connect(this.ambientGain),this.ambientGain.connect(this.ctx.destination),this.ambientOsc.start()}catch{}}stopOceanAmbience(){if(this.ambientOsc){try{this.ambientOsc.stop(),this.ambientOsc.disconnect()}catch{}this.ambientOsc=null,this.ambientGain=null}}playSonar(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1400,this.ctx.currentTime),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.35)}playShipBell(){this.enabled&&(this.init(),this.ctx&&[0,.1].forEach((e,t)=>{if(!this.ctx)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(t===0?1800:2200,this.ctx.currentTime+e),r.gain.setValueAtTime(.09,this.ctx.currentTime+e),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e+.25),n.connect(r),r.connect(this.ctx.destination),n.start(this.ctx.currentTime+e),n.stop(this.ctx.currentTime+e+.25)}))}playFoghorn(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(110,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.6),t.gain.setValueAtTime(.18,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.6),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.6)}playTriumph(){if(!this.enabled||(this.init(),!this.ctx))return;[261.63,329.63,392,523.25].forEach((t,n)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(t,this.ctx.currentTime+n*.08),s.gain.setValueAtTime(.08,this.ctx.currentTime+n*.08),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.08+.4),r.connect(s),s.connect(this.ctx.destination),r.start(this.ctx.currentTime+n*.08),r.stop(this.ctx.currentTime+n*.08+.4)})}}const Ut=new jp,ns={ocean:{name:"Deep Ocean",primaryHex:61695,accentHex:65443,waterHex:137003,skyHex:67604,primaryCss:"#00f0ff",accentCss:"#00ffa3",bgCss:"bg-[#010814]"},golden:{name:"Golden Sunset",primaryHex:16758784,accentHex:16729344,waterHex:2363656,skyHex:1312515,primaryCss:"#ffb800",accentCss:"#ff4500",bgCss:"bg-[#140703]"},bermuda:{name:"Bermuda Radar",primaryHex:65382,accentHex:3407616,waterHex:140304,skyHex:70151,primaryCss:"#00ff66",accentCss:"#33ff00",bgCss:"bg-[#011207]"},arctic:{name:"Arctic Voyage",primaryHex:7387391,accentHex:11766015,waterHex:529710,skyHex:264215,primaryCss:"#70b8ff",accentCss:"#b388ff",bgCss:"bg-[#040817]"}},gn=[{id:"origin",code:"01",name:"Helmsman’s Anchorage",vesselType:"Command Flagship",callsign:"K8S-ORIGIN",period:"2016 – Present",location:"Indore, India / Remote",badge:"SLO: 99.99%",metric:"99.99% UPTIME",description:ai.description,approach:ai.approach,stats:ai.stats,education:ai.education,angle:0,radius:20,elevation:0},{id:"nymcard",code:"02",name:"Nymcard Flagship",vesselType:"Stateful Operator Cruiser",callsign:"NYM-K8S-01",period:"Feb 2026 – Present",location:"Abu Dhabi, UAE (Remote)",badge:"40% RCA GAIN",metric:"RCA -40%",description:"Automated lifecycle management for stateful clusters (Kafka, PostgreSQL, RabbitMQ) for 99.99% uptime. Managed GitOps (Flux/Argo CD) across 8+ clusters and architected Agentic AI observability tools.",achievements:$t[0].achievements,technologies:$t[0].technologies,angle:Math.PI*2*(1/7),radius:25,elevation:.5},{id:"zebpay",code:"03",name:"Zebpay Ocean Freighter",vesselType:"2T+ Request Cargo Vessel",callsign:"ZEB-FINOPS-2T",period:"May 2024 – Dec 2025",location:"New Delhi, India",badge:"POWER PERFORMER (2X)",metric:"40% FINOPS SAVED",description:"Led cloud spend reduction of 40% via FinOps (Opencost) intelligent scaling. Orchestrated zero-downtime migration from Azure APIM to AWS API Gateway for 2T requests/month, and scaled EKS with Karpenter and Cilium.",achievements:$t[1].achievements,technologies:$t[1].technologies,awards:$t[1].awards,angle:Math.PI*2*(2/7),radius:22,elevation:-.5},{id:"rizzle",code:"04",name:"Rizzle Media Vessel",vesselType:"High-Throughput HPA Cutter",callsign:"RIZ-MEDIA-K8S",period:"Sep 2023 – Apr 2024",location:"Hyderabad, India",badge:"ZERO OOM EVICTIONS",metric:"MTTR -25%",description:"Optimized Kubernetes manifests and dynamic HPA scaling for media processing workloads, improving resource utilization by 20% and eliminating OOM pod evictions while shortening deploy cycles.",achievements:$t[2].achievements,technologies:$t[2].technologies,angle:Math.PI*2*(3/7),radius:26,elevation:.3},{id:"vivvix",code:"05",name:"Vivvix Data Armada",vesselType:"Multi-Cloud ETL Carrier",callsign:"VIV-PIPELINE-50",period:"Mar 2021 – Aug 2023",location:"Pune, India",badge:"STAR SPOT AWARD",metric:"DEPLOYS 50% FASTER",description:"Migrated ETL pipelines from Airflow 1.10 to 2.x, bootstrapped Azure AKS clusters and Terraform multi-cloud IaC, cutting deployment times by 50% via parallel execution in Azure Pipelines.",achievements:$t[3].achievements,technologies:$t[3].technologies,awards:$t[3].awards,angle:Math.PI*2*(4/7),radius:21,elevation:-.4},{id:"ai-labs",code:"06",name:"Agentic AI Drydock",vesselType:"Autonomous Systems Yard",callsign:"DRYDOCK-AI-O11Y",period:"Active Production R&D",location:"Cloud Distributed",badge:"SELF-HEALING GITOPS",metric:"AUTONOMOUS RCA",description:"AI agents that ingest OpenTelemetry spans and Prometheus metric anomalies, correlate them with GitOps commits, and autonomously generate root cause analysis and healing actions.",projects:Jp,technologies:["Agentic AI","Python","OpenTelemetry","Thanos","Prometheus","Flux CD"],angle:Math.PI*2*(5/7),radius:27,elevation:.6},{id:"skills-mesh",code:"07",name:"Harbor Skill Warehouse",vesselType:"Full Platform Arsenal",callsign:"HARBOR-ARSENAL-05",period:"5 Core Domains",location:"Multi-Cloud Ecosystem",badge:"ENTERPRISE STACK",metric:"5 ARCH DOMAINS",description:"The master container warehouse containing enterprise-grade technologies across Container Orchestration, Observability as Code, DevSecOps, Cloud Infrastructures, and AI Automation.",skillCategories:fl,angle:Math.PI*2*(6/7),radius:23,elevation:-.3}],nm=()=>{const i=bt.useRef(null),[e,t]=bt.useState("ocean"),[n,r]=bt.useState(!0),[s,a]=bt.useState(0),[o,c]=bt.useState(!1),[l,p]=bt.useState(!1),[g,h]=bt.useState(!1),[m,x]=bt.useState(0),[y,f]=bt.useState(!1),[u,S]=bt.useState(!1),[w,E]=bt.useState("ALL HARBORS OPERATIONAL · 99.99% SLO"),R=bt.useRef({sailTo:()=>{},triggerStorm:()=>{},updateTheme:()=>{}}),b=gn[s],d=ns[e],M=()=>{const A=!n;Ut.enabled=A,r(A),A?(Ut.playSonar(),Ut.startOceanAmbience()):Ut.stopOceanAmbience()},I=bt.useCallback(A=>{const D=gn[A];a(A),c(!0),Ut.playSonar(),x(z=>z+50),R.current.sailTo&&R.current.sailTo(D.angle,D.radius)},[]),P=bt.useCallback(()=>{f(!0),E("CRITICAL STORM SURGE · 81.2% SLO (CARGO TOSSING)"),Ut.playFoghorn(),R.current.triggerStorm(!0),setTimeout(()=>{Ut.playTriumph(),f(!1),E("ALL HARBORS OPERATIONAL · 99.99% SLO (RECONCILED)"),R.current.triggerStorm(!1),x(A=>A+150)},4e3)},[]);return bt.useEffect(()=>{if(!u)return;const A=setInterval(()=>{a(D=>{const z=(D+1)%gn.length;return I(z),z})},7e3);return()=>clearInterval(A)},[u,I]),bt.useEffect(()=>{const A=i.current;if(!A)return;const D=new Uc,z=ns[e];D.background=new Ve(z.skyHex),D.fog=new ia(z.waterHex,.015);const L=new Jt(55,A.clientWidth/A.clientHeight,.1,1e3);L.position.set(0,16,36);const V=new $p({antialias:!0,powerPreference:"high-performance"});V.setSize(A.clientWidth,A.clientHeight),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.appendChild(V.domElement);const Z=1200,q=new zt,se=new Float32Array(Z*3);for(let k=0;k<Z*3;k+=3)se[k]=(Math.random()-.5)*220,se[k+1]=Math.random()*80+5,se[k+2]=(Math.random()-.5)*220;q.setAttribute("position",new Nn(se,3));const K=new $o({color:16777215,size:.8,transparent:!0,opacity:.5}),ie=new Xc(q,K);D.add(ie);const re=140,Ee=64,Pe=new Li(re,re,Ee,Ee);Pe.rotateX(-Math.PI/2);const j=Pe.attributes.position,me=new Float32Array(j.array),Se=new _n({color:z.waterHex,wireframe:!0,transparent:!0,opacity:.35}),Ce=new Pt(Pe,Se);D.add(Ce);let ge=!1;const Ne=(k,te,ue)=>{const Ae=ge?2.6:1,W=ge?2:1;return Ae*(Math.sin(k*.12+ue*1.6*W)*.8+Math.cos(te*.14+ue*1.3*W)*.6+Math.sin((k+te)*.08+ue*1.9*W)*.35)},it=new Hn;D.add(it);const we=new Hn,Ye=new da(3.6,.22,12,48),$e=new _n({color:z.primaryHex,wireframe:!0}),Be=new Pt(Ye,$e);we.add(Be);for(let k=0;k<7;k++){const te=k/7*Math.PI*2,ue=new Mr(.12,.12,3.6,8),Ae=new _n({color:z.primaryHex,wireframe:!0}),W=new Pt(ue,Ae);W.position.set(Math.cos(te)*1.8,Math.sin(te)*1.8,0),W.rotation.z=te+Math.PI/2,we.add(W)}we.position.y=4.5,it.add(we);const ct=new aa(5,28,16,1,!0);ct.rotateX(Math.PI/2),ct.translate(0,0,14);const st=new _n({color:z.primaryHex,transparent:!0,opacity:.12,side:Qt}),_t=new Pt(ct,st),Qe=new Pt(ct,st);Qe.rotation.y=Math.PI,_t.position.y=5.5,Qe.position.y=5.5,it.add(_t),it.add(Qe);const kt=new ca(18,18.3,64),dt=new _n({color:z.primaryHex,side:Qt,transparent:!0,opacity:.2}),Mt=new Pt(kt,dt);Mt.rotation.x=Math.PI/2,Mt.position.y=.2,D.add(Mt);const xt=[],It=new la(1.8),U=new ua(.4,8,8);gn.forEach((k,te)=>{const ue=new Hn,Ae=Math.cos(k.angle)*k.radius,W=Math.sin(k.angle)*k.radius;ue.position.set(Ae,0,W);const ve=te===0,Ie=new _n({color:ve?z.accentHex:z.primaryHex,wireframe:!0}),pe=new Pt(It,Ie);ue.add(pe);const Ke=new _n({color:ve?z.accentHex:z.primaryHex}),ut=new Pt(U,Ke);ut.position.y=2.4,ue.add(ut),D.add(ue),xt.push({group:ue,mesh:pe,beacon:ut,station:k,index:te})});const Et=[],tt=new pi(1.4,.7,.7),je=new _n({color:z.primaryHex,wireframe:!0,transparent:!0,opacity:.75});for(let k=0;k<35;k++){const te=new Pt(tt,je),ue=9+Math.random()*22,Ae=Math.random()*Math.PI*2,W=Math.cos(Ae)*ue,ve=Math.sin(Ae)*ue;te.position.set(W,0,ve),te.rotation.y=Math.random()*Math.PI,D.add(te),Et.push({mesh:te,baseX:W,baseZ:ve,angle:Ae,dist:ue,bobOffset:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*.02})}const de=new tu,at=new We,Re=k=>{const te=A.getBoundingClientRect();at.x=(k.clientX-te.left)/te.width*2-1,at.y=-((k.clientY-te.top)/te.height)*2+1,de.setFromCamera(at,L);const ue=de.intersectObjects(xt.map(W=>W.mesh));if(ue.length>0){const W=xt.find(ve=>ve.mesh===ue[0].object);if(W){I(W.index);return}}const Ae=de.intersectObjects(Et.map(W=>W.mesh));if(Ae.length>0){Ut.playShipBell(),x(ve=>ve+100);const W=Et.find(ve=>ve.mesh===Ae[0].object);W&&(W.mesh.position.y+=2.5)}else Ut.playSonar(),x(W=>W+10)};let Le=!1,T={x:0,y:0};const _=new H(0,2,0),O={radius:36,theta:0,phi:Math.PI/3.4},ne={radius:36,theta:0,phi:Math.PI/3.4},ee=k=>{k.target===V.domElement&&(Le=!0,T={x:k.clientX,y:k.clientY},Ut.startOceanAmbience())},ae=k=>{if(!Le)return;const te=k.clientX-T.x,ue=k.clientY-T.y;ne.theta-=te*.005,ne.phi=Math.max(.18,Math.min(Math.PI/2-.05,ne.phi-ue*.005)),T={x:k.clientX,y:k.clientY}},ce=()=>{Le=!1},$=k=>{ne.radius=Math.max(14,Math.min(55,ne.radius+k.deltaY*.03))},Q=k=>{(k.key==="a"||k.key==="ArrowLeft")&&(ne.theta-=.08),(k.key==="d"||k.key==="ArrowRight")&&(ne.theta+=.08),(k.key==="w"||k.key==="ArrowUp")&&(ne.radius=Math.max(14,ne.radius-3)),(k.key==="s"||k.key==="ArrowDown")&&(ne.radius=Math.min(55,ne.radius+3))};R.current.sailTo=(k,te)=>{ne.theta=k,ne.phi=Math.PI/3.2,ne.radius=te+9},R.current.triggerStorm=k=>{ge=k},R.current.updateTheme=k=>{D.background=new Ve(k.skyHex),D.fog&&(D.fog.color=new Ve(k.waterHex)),Se.color.setHex(k.waterHex),$e.color.setHex(k.primaryHex),dt.color.setHex(k.primaryHex),st.color.setHex(k.primaryHex),je.color.setHex(k.primaryHex),xt.forEach(te=>{const ue=te.index===s;te.mesh.material.color.setHex(ue?k.accentHex:k.primaryHex),te.beacon.material.color.setHex(ue?k.accentHex:k.primaryHex)})},A.addEventListener("click",Re),A.addEventListener("mousedown",ee),window.addEventListener("mousemove",ae),window.addEventListener("mouseup",ce),A.addEventListener("wheel",$,{passive:!0}),window.addEventListener("keydown",Q);let oe,C=performance.now(),J=0;const Y=()=>{const k=performance.now(),te=Math.min((k-C)/1e3,.1);C=k,J+=te,O.theta+=(ne.theta-O.theta)*.06,O.phi+=(ne.phi-O.phi)*.06,O.radius+=(ne.radius-O.radius)*.06,L.position.x=O.radius*Math.sin(O.phi)*Math.sin(O.theta),L.position.y=O.radius*Math.cos(O.phi),L.position.z=O.radius*Math.sin(O.phi)*Math.cos(O.theta),L.lookAt(_);const ue=Pe.attributes.position,Ae=ue.array;for(let W=0;W<Ae.length;W+=3){const ve=me[W],Ie=me[W+2];Ae[W+1]=Ne(ve,Ie,J)}ue.needsUpdate=!0,we.rotation.z+=.008,_t.rotation.y+=.015,Qe.rotation.y+=.015,Mt.rotation.z+=.002,xt.forEach(W=>{const ve=Ne(W.group.position.x,W.group.position.z,J);W.group.position.y=ve+W.station.elevation,W.mesh.rotation.y+=.01,W.mesh.rotation.x=Math.sin(J*2+W.index)*.08,W.mesh.rotation.z=Math.cos(J*2+W.index)*.08}),Et.forEach(W=>{W.angle+=.0015,W.mesh.position.x=Math.cos(W.angle)*W.dist,W.mesh.position.z=Math.sin(W.angle)*W.dist,W.mesh.position.y=Ne(W.mesh.position.x,W.mesh.position.z,J+W.bobOffset),W.mesh.rotation.y+=W.rotSpeed,W.mesh.rotation.x=Math.sin(J*3)*.06}),V.render(D,L),oe=requestAnimationFrame(Y)};Y();const le=()=>{A&&(L.aspect=A.clientWidth/A.clientHeight,L.updateProjectionMatrix(),V.setSize(A.clientWidth,A.clientHeight))};return window.addEventListener("resize",le),()=>{cancelAnimationFrame(oe),A.removeEventListener("click",Re),A.removeEventListener("mousedown",ee),window.removeEventListener("mousemove",ae),window.removeEventListener("mouseup",ce),A.removeEventListener("wheel",$),window.removeEventListener("keydown",Q),window.removeEventListener("resize",le),V.domElement.parentNode&&V.domElement.parentNode.removeChild(V.domElement),V.dispose(),Ut.stopOceanAmbience()}},[I,s,e]),bt.useEffect(()=>{R.current.updateTheme(ns[e])},[e]),F.jsxs("div",{className:`relative w-full h-screen ${d.bgCss} overflow-hidden select-none font-mono text-white transition-colors duration-700`,children:[F.jsxs("header",{className:"absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[F.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-black/80 border border-white/10 px-3.5 py-2.5 rounded-2xl backdrop-blur-md pointer-events-auto shadow-2xl",children:[F.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0",children:F.jsx(ba,{className:"text-2xl",style:{color:d.primaryCss}})}),F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-wider text-white",children:"VIVEK KUSHWAH"}),F.jsx("span",{className:"text-[10px] text-gray-500 font-mono hidden sm:inline",children:"[PLATFORM HELMSMAN]"})]}),F.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs",children:[F.jsx("span",{className:`w-2 h-2 rounded-full ${y?"bg-red-500 animate-ping":"bg-emerald-400"}`}),F.jsx("span",{className:y?"text-red-400 font-bold":"text-gray-400",children:w})]})]}),F.jsx("div",{className:"h-6 w-[1px] bg-white/10 hidden sm:block"}),F.jsxs("div",{className:"hidden sm:flex flex-col text-right",children:[F.jsx("span",{className:"text-[9px] text-gray-400 uppercase font-mono",children:"Cargo Salvaged"}),F.jsxs("span",{className:"text-xs font-bold text-amber-400",children:[m," PTS"]})]})]}),F.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[F.jsxs("button",{onClick:()=>{S(!u),Ut.playSonar()},title:"Automatic guided cruise across all company fleet milestones",className:`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${u?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-black/75 border-white/10 text-gray-300 hover:text-white"}`,children:[u?F.jsx(vl,{className:"text-cyan-400"}):F.jsx(Sl,{className:"text-cyan-400"}),F.jsx("span",{className:"hidden sm:inline",children:u?"PAUSE CRUISE":"TOUR FLEET"})]}),F.jsxs("button",{onClick:P,disabled:y,title:"Simulate Kubernetes Storm Surge & automated GitOps reconciliation",className:`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${y?"bg-red-500/20 border-red-500 text-red-300":"bg-black/75 border-white/10 text-gray-300 hover:border-red-500/50 hover:text-red-400"}`,children:[F.jsx(Ml,{className:y?"animate-bounce text-red-400":"text-yellow-400"}),F.jsx("span",{className:"hidden sm:inline",children:"STORM SURGE"})]}),F.jsxs("button",{onClick:()=>{p(!0),Ut.playSonar()},className:"px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md",children:[F.jsx(Ar,{style:{color:d.primaryCss}}),F.jsx("span",{className:"hidden sm:inline",children:"HARBOR MANIFEST"})]}),F.jsx("div",{className:"flex items-center gap-1 bg-black/75 border border-white/10 p-1 rounded-xl backdrop-blur-md",children:["ocean","golden","bermuda","arctic"].map(A=>F.jsx("button",{onClick:()=>{t(A),Ut.playSonar()},style:{backgroundColor:e===A?d.primaryCss:"transparent",color:e===A?"#000":"#888"},className:"px-2 py-1 rounded-lg text-[10px] uppercase font-bold transition-all hover:text-white",children:A},A))}),F.jsx("button",{onClick:M,title:n?"Mute Ocean Soundscape":"Enable Ocean Soundscape",className:"p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md",children:n?F.jsx(El,{className:"text-base",style:{color:d.primaryCss}}):F.jsx(yl,{className:"text-base text-gray-500"})}),F.jsx("button",{onClick:()=>h(!0),className:"p-2.5 rounded-xl bg-black/75 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md",children:F.jsx(bl,{className:"text-base"})})]})]}),F.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"}),o&&b&&F.jsxs("div",{className:"absolute top-24 right-4 sm:right-6 z-40 max-w-md w-[calc(100%-2rem)] bg-[#090d16]/95 border rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.85)] animate-fade-in",style:{borderColor:`${d.primaryCss}60`},children:[F.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10 mb-3",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsxs("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-white font-mono",children:[b.code," // ",b.vesselType]}),F.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded border",style:{backgroundColor:`${d.primaryCss}15`,borderColor:`${d.primaryCss}40`,color:d.primaryCss},children:b.badge})]}),F.jsx("button",{onClick:()=>c(!1),className:"text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10",children:F.jsx(wr,{className:"text-xl"})})]}),F.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white mb-0.5",children:b.name}),F.jsxs("div",{className:"text-[11px] text-gray-400 mb-3 font-mono flex items-center justify-between",children:[F.jsx("span",{children:b.period}),F.jsx("span",{children:b.location})]}),F.jsx("p",{className:"text-xs text-gray-300 font-sans leading-relaxed mb-4",children:b.description}),b.stats&&F.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4",children:b.stats.map(A=>F.jsxs("div",{className:"p-2 rounded-lg bg-white/5 border border-white/5 text-center",children:[F.jsx("div",{className:"text-sm font-bold",style:{color:d.primaryCss},children:A.value}),F.jsx("div",{className:"text-[9px] text-gray-400 font-mono uppercase",children:A.label})]},A.label))}),b.education&&F.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5 mb-4 flex items-center gap-2.5",children:[F.jsx(Tl,{className:"text-xl shrink-0",style:{color:d.primaryCss}}),F.jsxs("div",{children:[F.jsx("div",{className:"text-xs font-bold text-white",children:b.education.degree}),F.jsxs("div",{className:"text-[10px] text-gray-400",children:[b.education.school," (",b.education.period,")"]})]})]}),b.achievements&&F.jsxs("div",{className:"mb-4",children:[F.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-mono",children:"Vessel Operational Feats:"}),F.jsx("ul",{className:"space-y-1.5 max-h-36 overflow-y-auto pr-1",children:b.achievements.map((A,D)=>F.jsxs("li",{className:"flex items-start gap-2 text-[11px] text-gray-300 font-sans leading-relaxed",children:[F.jsx(Al,{className:"text-xs shrink-0 mt-0.5",style:{color:d.primaryCss}}),F.jsx("span",{children:A})]},D))})]}),b.technologies&&F.jsx("div",{className:"mb-4",children:F.jsx("div",{className:"flex flex-wrap gap-1",children:b.technologies.map(A=>F.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-mono",children:A},A))})}),b.skillCategories&&F.jsx("div",{className:"space-y-2 mb-4 max-h-40 overflow-y-auto pr-1",children:b.skillCategories.map(A=>F.jsxs("div",{className:"p-2 rounded-lg bg-white/5 border border-white/5",children:[F.jsx("div",{className:"text-[10px] font-bold mb-1 font-mono",style:{color:d.primaryCss},children:A.category}),F.jsx("div",{className:"flex flex-wrap gap-1",children:A.skills.map(D=>F.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-gray-300 font-mono",children:D},D))})]},A.category))}),F.jsxs("div",{className:"pt-3 border-t border-white/10 flex items-center justify-between gap-2",children:[F.jsxs("button",{onClick:()=>{const A=(s-1+gn.length)%gn.length;I(A)},className:"px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono flex items-center gap-1 transition-colors",children:[F.jsx(wl,{})," PREV PORT"]}),F.jsxs("span",{className:"text-[10px] text-gray-400 font-mono",children:[s+1," / ",gn.length]}),F.jsxs("button",{onClick:()=>{const A=(s+1)%gn.length;I(A)},style:{backgroundColor:d.primaryCss},className:"px-3 py-1.5 rounded-lg text-black text-xs font-bold font-mono flex items-center gap-1 hover:bg-white transition-colors",children:["NEXT PORT ",F.jsx(Rl,{})]})]})]}),F.jsxs("footer",{className:"absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none",children:[F.jsxs("div",{className:"flex items-center gap-1.5 bg-black/85 border border-white/15 p-2 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full shadow-2xl",children:[F.jsxs("span",{className:"text-[10px] text-gray-400 font-bold px-2 hidden lg:flex items-center gap-1 font-mono",children:[F.jsx(Cl,{style:{color:d.primaryCss}}),F.jsx("span",{children:"PORTS:"})]}),gn.map((A,D)=>{const z=s===D;return F.jsxs("button",{onClick:()=>I(D),style:{borderColor:z?d.primaryCss:"rgba(255,255,255,0.08)",backgroundColor:z?`${d.primaryCss}25`:"rgba(255,255,255,0.04)",color:z?"#fff":"#aaa"},className:"px-3 py-2 rounded-xl text-xs whitespace-nowrap border font-mono transition-all flex items-center gap-1.5 hover:text-white hover:bg-white/10",children:[F.jsx("span",{className:"text-[10px] opacity-60",children:A.code}),F.jsx("span",{children:A.name.split(" ")[0]})]},A.id)})]}),F.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[F.jsxs("div",{className:"bg-black/80 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-md text-[10px] text-gray-400 hidden xl:flex items-center gap-2 font-mono",children:[F.jsx("span",{children:"CLICK CARGO = RESCUE"}),F.jsx("span",{className:"text-gray-600",children:"·"}),F.jsx("span",{children:"DRAG = 360° STEER"}),F.jsx("span",{className:"text-gray-600",children:"·"}),F.jsx("span",{children:"SCROLL = ZOOM"})]}),F.jsxs("a",{href:"/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf",target:"_blank",className:"px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md shadow-lg",children:[F.jsx(Ar,{style:{color:d.primaryCss}}),F.jsx("span",{children:"PDF Resume"})]})]})]}),l&&F.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in",children:F.jsxs("div",{className:"w-full max-w-2xl bg-[#080d16] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl",children:[F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-white/10 mb-8",children:[F.jsxs("div",{children:[F.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[F.jsx("span",{children:"HARBOR MANIFEST"}),F.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-white/10 border border-white/10",style:{color:d.primaryCss},children:"FULL SPEC"})]}),F.jsx("p",{className:"text-xs text-gray-400 font-mono mt-1",children:"Vivek Kushwah · Senior Platform & Observability Architect"})]}),F.jsx("button",{onClick:()=>p(!1),className:"p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors",children:F.jsx(wr,{className:"text-2xl"})})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-3",style:{color:d.primaryCss},children:"// 01 EXECUTIVE EXPEDITION"}),F.jsx("p",{className:"text-sm text-gray-300 font-sans leading-relaxed mb-4",children:ai.description}),F.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:ai.stats.map(A=>F.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10 text-center",children:[F.jsx("div",{className:"text-base font-bold",style:{color:d.primaryCss},children:A.value}),F.jsx("div",{className:"text-[10px] text-gray-400 font-mono uppercase",children:A.label})]},A.label))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:d.primaryCss},children:"// 02 ENTERPRISE FLEET VOYAGES"}),F.jsx("div",{className:"space-y-6",children:$t.map(A=>F.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all",children:[F.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[F.jsxs("div",{className:"text-base font-bold text-white flex items-center gap-2",children:[F.jsx("span",{children:A.company}),F.jsxs("span",{className:"text-xs text-gray-400 font-normal",children:["· ",A.role]})]}),F.jsx("span",{className:"text-[11px] font-mono text-gray-400",children:A.period})]}),F.jsx("div",{className:"text-xs text-gray-400 font-mono mb-3",children:A.location}),A.awards&&F.jsx("div",{className:"flex gap-2 mb-3",children:A.awards.map(D=>F.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1 font-mono",children:[F.jsx(Pl,{})," ",D]},D))}),F.jsx("ul",{className:"space-y-2 mb-4",children:A.achievements.map((D,z)=>F.jsxs("li",{className:"flex items-start gap-2 text-xs text-gray-300 font-sans leading-relaxed",children:[F.jsx("span",{style:{color:d.primaryCss},children:"▸"}),F.jsx("span",{children:D})]},z))}),F.jsx("div",{className:"flex flex-wrap gap-1",children:A.technologies.map(D=>F.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono",children:D},D))})]},A.company))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:d.primaryCss},children:"// 03 PLATFORM SKILL ARSENAL"}),F.jsx("div",{className:"space-y-3",children:fl.map(A=>F.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[F.jsx("div",{className:"text-xs font-bold text-white mb-2 font-mono",children:A.category}),F.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.skills.map(D=>F.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded bg-black/50 border border-white/10 text-gray-300 font-mono",children:D},D))})]},A.category))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:d.primaryCss},children:"// 04 COASTAL RADIO TRANSMISSIONS"}),F.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Qp.map(A=>F.jsx("a",{href:A.href,target:A.href.startsWith("http")?"_blank":"_self",className:"p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between text-xs",children:F.jsxs("div",{className:"flex items-center gap-2.5",children:[A.name==="Email"&&F.jsx(Ll,{style:{color:d.primaryCss}}),A.name==="LinkedIn"&&F.jsx(Nl,{style:{color:d.primaryCss}}),A.name==="Location"&&F.jsx(Dl,{style:{color:d.primaryCss}}),A.name==="Phone"&&F.jsx(Il,{style:{color:d.primaryCss}}),F.jsxs("div",{children:[F.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-mono",children:A.name}),F.jsx("div",{className:"text-white font-medium",children:A.value})]})]})},A.name))})]})]}),F.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[F.jsxs("a",{href:"/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf",target:"_blank",style:{backgroundColor:d.primaryCss},className:"flex-1 py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 hover:bg-white transition-colors",children:[F.jsx(Ar,{className:"text-base"}),F.jsx("span",{children:"Download PDF Resume"})]}),F.jsx("button",{onClick:()=>p(!1),className:"py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase",children:"Close Manifest"})]})]})}),g&&F.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:F.jsxs("div",{className:"bg-[#080d16] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative text-left",children:[F.jsx("button",{onClick:()=>h(!1),className:"absolute top-5 right-5 text-gray-400 hover:text-white",children:F.jsx(wr,{className:"text-2xl"})}),F.jsxs("h3",{className:"text-lg font-bold text-white mb-3 flex items-center gap-2 font-mono",children:[F.jsx(ba,{style:{color:d.primaryCss}}),F.jsx("span",{children:"Kubernetes High Seas Navigation"})]}),F.jsx("p",{className:"text-xs text-gray-400 leading-relaxed font-sans mb-4",children:"You are exploring Vivek Kushwah's Cloud-Native Kubernetes ecosystem on the open digital sea. Each vessel represents a career milestone, and floating containers represent deployed workloads."}),F.jsxs("ul",{className:"text-xs space-y-2.5 text-gray-300 font-mono mb-6",children:[F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:d.primaryCss}}),F.jsx("strong",{children:"Ports Dock:"})," Click any port below to sail right up to that ship and open its manifest card!"]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:d.primaryCss}}),F.jsx("strong",{children:"Click Cargo:"})," Click any floating ISO container to salvage it and log points."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:d.primaryCss}}),F.jsx("strong",{children:"Tour Fleet:"})," Click [TOUR FLEET] for an automated guided cruise across all tenures."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:d.primaryCss}}),F.jsx("strong",{children:"Storm Surge:"})," Inject chaos to test how GitOps auto-heals troubled waters."]})]}),F.jsx("button",{onClick:()=>h(!1),style:{backgroundColor:d.primaryCss},className:"w-full py-2.5 rounded-xl text-black text-xs font-bold font-mono uppercase",children:"Take the Helm"})]})})]})};export{nm as PlayableUniverse};
