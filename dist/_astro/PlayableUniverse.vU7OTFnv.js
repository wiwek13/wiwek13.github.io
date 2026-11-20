import{j as F,l as Ma,m as gl,g as Rr,n as _l,o as xl,p as vl,q as Sl,a as Cr,r as Ml,s as El,t as yl,k as bl,u as Tl,v as Al,w as wl}from"./index.BvI7llzW.js";import{r as Pt}from"./index.B52nOzfP.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ks="187",Rl=0,Ea=1,Cl=2,rr=1,Pl=2,Si=3,Gn=0,Ot=1,Qt=2,si=0,yi=1,ya=2,ba=3,Ta=4,Ll=5,ri=100,Dl=101,Nl=102,Il=103,Ul=104,Fl=200,Ol=201,Bl=202,zl=203,Eo=204,yo=205,Gl=206,Hl=207,kl=208,Vl=209,Wl=210,Xl=211,ql=212,Yl=213,Kl=214,rs=0,ss=1,as=2,bi=3,os=4,ls=5,cs=6,ds=7,bo=0,Zl=1,$l=2,_n=0,To=1,Ao=2,wo=3,Ro=4,Co=5,Po=6,Lo=7,Do=300,oi=301,Ti=302,Pr=303,Lr=304,us=1e3,gn=1001,hs=1002,yt=1003,Jl=1004,Ni=1005,Ft=1006,Dr=1007,Cn=1008,Wt=1009,No=1010,Io=1011,Ai=1012,Zs=1013,ln=1014,sn=1015,cn=1016,$s=1017,Js=1018,li=1020,Uo=35902,Fo=35899,Oo=1021,Bo=1022,an=1023,Dn=1026,Pn=1027,zo=1028,Qs=1029,Hn=1030,js=1031,ea=1033,sr=33776,ar=33777,or=33778,lr=33779,fs=35840,ps=35841,ms=35842,gs=35843,_s=36196,xs=37492,vs=37496,Ss=37488,Ms=37489,ur=37490,Es=37491,ys=37808,bs=37809,Ts=37810,As=37811,ws=37812,Rs=37813,Cs=37814,Ps=37815,Ls=37816,Ds=37817,Ns=37818,Is=37819,Us=37820,Fs=37821,Os=36492,Bs=36494,zs=36495,Gs=36283,Hs=36284,hr=36285,ks=36286,Ql=3200,Aa=0,jl=1,Rn="",Vt="srgb",fr="srgb-linear",pr="linear",Je="srgb",Nr=7680,ec=519,tc=512,nc=513,ic=514,Go=515,rc=516,sc=517,Ho=518,ko=519,ac=35044,wa="300 es",en=2e3,mr=2001;function oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lc(){const i=gr("canvas");return i.style.display="block",i}const Ra={};function Ca(...i){const e="THREE."+i.shift();console.log(e,...i)}function Vo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Vo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Vo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cr(...i){const e=i.join(" ");e in Ra||(Ra[e]=!0,De(...i))}function cc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const dc={[rs]:rs,[as]:cs,[os]:os,[bi]:ls,[ss]:ss,[cs]:as,[ds]:ds,[ls]:bi};class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ir=Math.PI/180,Vs=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function hc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ta(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fc(i,e){if(e.constructor===Float32Array)return i;const t=ta(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function pc(i,e){if(e.constructor===Float32Array)return i;const t=ta(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class We{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],p=n[r+2],g=n[r+3],h=s[a+0],m=s[a+1],v=s[a+2],T=s[a+3];if(g!==T||c!==h||l!==m||p!==v){let f=c*h+l*m+p*v+g*T;f<0&&(h=-h,m=-m,v=-v,T=-T,f=-f);let u=1-o;if(f<.9995){const M=Math.acos(f),A=Math.sin(M);u=Math.sin(u*M)/A,o=Math.sin(o*M)/A,c=c*u+h*o,l=l*u+m*o,p=p*u+v*o,g=g*u+T*o}else{c=c*u+h*o,l=l*u+m*o,p=p*u+v*o,g=g*u+T*o;const M=1/Math.sqrt(c*c+l*l+p*p+g*g);c*=M,l*=M,p*=M,g*=M}}e[t]=c,e[t+1]=l,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],p=n[r+3],g=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+p*g+c*m-l*h,e[t+1]=c*v+p*h+l*g-o*m,e[t+2]=l*v+p*m+o*h-c*g,e[t+3]=p*v-o*g-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),p=o(r/2),g=o(s/2),h=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*p*g+l*m*v,this._y=l*m*g-h*p*v,this._z=l*p*v+h*m*g,this._w=l*p*g-h*m*v;break;case"YXZ":this._x=h*p*g+l*m*v,this._y=l*m*g-h*p*v,this._z=l*p*v-h*m*g,this._w=l*p*g+h*m*v;break;case"ZXY":this._x=h*p*g-l*m*v,this._y=l*m*g+h*p*v,this._z=l*p*v+h*m*g,this._w=l*p*g-h*m*v;break;case"ZYX":this._x=h*p*g-l*m*v,this._y=l*m*g+h*p*v,this._z=l*p*v-h*m*g,this._w=l*p*g+h*m*v;break;case"YZX":this._x=h*p*g+l*m*v,this._y=l*m*g+h*p*v,this._z=l*p*v-h*m*g,this._w=l*p*g-h*m*v;break;case"XZY":this._x=h*p*g-l*m*v,this._y=l*m*g-h*p*v,this._z=l*p*v+h*m*g,this._w=l*p*g+h*m*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],p=t[6],g=t[10],h=n+o+g;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,p=t._w;return this._x=n*p+a*o+r*l-s*c,this._y=r*p+a*c+s*o-n*l,this._z=s*p+a*l+n*c-r*o,this._w=a*p-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),p=Math.sin(l);c=Math.sin(c*l)/p,t=Math.sin(t*l)/p,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),p=2*(o*t-s*r),g=2*(s*n-a*t);return this.x=t+c*l+a*g-o*p,this.y=n+c*p+o*l-s*g,this.z=r+c*g+s*p-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new G,Pa=new ui;class Ie{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=c,p[6]=n,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],p=n[4],g=n[7],h=n[2],m=n[5],v=n[8],T=r[0],f=r[3],u=r[6],M=r[1],A=r[4],E=r[7],w=r[2],y=r[5],d=r[8];return s[0]=a*T+o*M+c*w,s[3]=a*f+o*A+c*y,s[6]=a*u+o*E+c*d,s[1]=l*T+p*M+g*w,s[4]=l*f+p*A+g*y,s[7]=l*u+p*E+g*d,s[2]=h*T+m*M+v*w,s[5]=h*f+m*A+v*y,s[8]=h*u+m*E+v*d,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8];return t*a*p-t*o*l-n*s*p+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=p*a-o*l,h=o*c-p*s,m=l*s-a*c,v=t*g+n*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/v;return e[0]=g*T,e[1]=(r*l-p*n)*T,e[2]=(o*n-r*a)*T,e[3]=h*T,e[4]=(p*t-r*c)*T,e[5]=(r*s-o*t)*T,e[6]=m*T,e[7]=(n*c-l*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Or.makeScale(e,t)),this}rotate(e){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Or.makeRotation(-e)),this}translate(e,t){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Ie,La=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Da=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mc(){const i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?pr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:pr,toXYZ:La,fromXYZ:Da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:La,fromXYZ:Da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const He=mc();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class gc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xn===void 0&&(Xn=gr("canvas")),Xn.width=e.width,Xn.height=e.height;const r=Xn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _c=0;class na{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Br(r[a].image)):s.push(Br(r[a]))}else s=Br(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let xc=0;const zr=new G;class Dt extends Wn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=gn,r=gn,s=Ft,a=Cn,o=an,c=Wt,l=Dt.DEFAULT_ANISOTROPY,p=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=wi(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Do)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Do;Dt.DEFAULT_ANISOTROPY=1;class ft{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],p=c[4],g=c[8],h=c[1],m=c[5],v=c[9],T=c[2],f=c[6],u=c[10];if(Math.abs(p-h)<.01&&Math.abs(g-T)<.01&&Math.abs(v-f)<.01){if(Math.abs(p+h)<.1&&Math.abs(g+T)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,E=(m+1)/2,w=(u+1)/2,y=(p+h)/4,d=(g+T)/4,S=(v+f)/4;return A>E&&A>w?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=y/n,s=d/n):E>w?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=y/r,s=S/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=d/s,r=S/s),this.set(n,r,s,t),this}let M=Math.sqrt((f-v)*(f-v)+(g-T)*(g-T)+(h-p)*(h-p));return Math.abs(M)<.001&&(M=1),this.x=(f-v)/M,this.y=(g-T)/M,this.z=(h-p)/M,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vc extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Dt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wo extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sc extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ot{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,p,g,h,m,v,T,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,p,g,h,m,v,T,f)}set(e,t,n,r,s,a,o,c,l,p,g,h,m,v,T,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=p,u[10]=g,u[14]=h,u[3]=m,u[7]=v,u[11]=T,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),s=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),p=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const h=a*p,m=a*g,v=o*p,T=o*g;t[0]=c*p,t[4]=-c*g,t[8]=l,t[1]=m+v*l,t[5]=h-T*l,t[9]=-o*c,t[2]=T-h*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*p,m=c*g,v=l*p,T=l*g;t[0]=h+T*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*g,t[5]=a*p,t[9]=-o,t[2]=m*o-v,t[6]=T+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*p,m=c*g,v=l*p,T=l*g;t[0]=h-T*o,t[4]=-a*g,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*p,t[9]=T-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*p,m=a*g,v=o*p,T=o*g;t[0]=c*p,t[4]=v*l-m,t[8]=h*l+T,t[1]=c*g,t[5]=T*l+h,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,v=o*c,T=o*l;t[0]=c*p,t[4]=T-h*g,t[8]=v*g+m,t[1]=g,t[5]=a*p,t[9]=-o*p,t[2]=-l*p,t[6]=m*g+v,t[10]=h-T*g}else if(e.order==="XZY"){const h=a*c,m=a*l,v=o*c,T=o*l;t[0]=c*p,t[4]=-g,t[8]=l*p,t[1]=h*g+T,t[5]=a*p,t[9]=m*g-v,t[2]=v*g-m,t[6]=o*p,t[10]=T*g+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mc,e,Ec)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Mn.crossVectors(n,Gt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Mn.crossVectors(n,Gt)),Mn.normalize(),Ii.crossVectors(Gt,Mn),r[0]=Mn.x,r[4]=Ii.x,r[8]=Gt.x,r[1]=Mn.y,r[5]=Ii.y,r[9]=Gt.y,r[2]=Mn.z,r[6]=Ii.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],p=n[1],g=n[5],h=n[9],m=n[13],v=n[2],T=n[6],f=n[10],u=n[14],M=n[3],A=n[7],E=n[11],w=n[15],y=r[0],d=r[4],S=r[8],N=r[12],C=r[1],U=r[5],k=r[9],Z=r[13],D=r[2],K=r[6],Q=r[10],W=r[14],re=r[3],q=r[7],te=r[11],ne=r[15];return s[0]=a*y+o*C+c*D+l*re,s[4]=a*d+o*U+c*K+l*q,s[8]=a*S+o*k+c*Q+l*te,s[12]=a*N+o*Z+c*W+l*ne,s[1]=p*y+g*C+h*D+m*re,s[5]=p*d+g*U+h*K+m*q,s[9]=p*S+g*k+h*Q+m*te,s[13]=p*N+g*Z+h*W+m*ne,s[2]=v*y+T*C+f*D+u*re,s[6]=v*d+T*U+f*K+u*q,s[10]=v*S+T*k+f*Q+u*te,s[14]=v*N+T*Z+f*W+u*ne,s[3]=M*y+A*C+E*D+w*re,s[7]=M*d+A*U+E*K+w*q,s[11]=M*S+A*k+E*Q+w*te,s[15]=M*N+A*Z+E*W+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],p=e[2],g=e[6],h=e[10],m=e[14],v=e[3],T=e[7],f=e[11],u=e[15],M=c*m-l*h,A=o*m-l*g,E=o*h-c*g,w=a*m-l*p,y=a*h-c*p,d=a*g-o*p;return t*(T*M-f*A+u*E)-n*(v*M-f*w+u*y)+r*(v*A-T*w+u*d)-s*(v*E-T*y+f*d)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],p=e[10];return t*(a*p-o*l)-n*(s*p-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=e[9],h=e[10],m=e[11],v=e[12],T=e[13],f=e[14],u=e[15],M=t*o-n*a,A=t*c-r*a,E=t*l-s*a,w=n*c-r*o,y=n*l-s*o,d=r*l-s*c,S=p*T-g*v,N=p*f-h*v,C=p*u-m*v,U=g*f-h*T,k=g*u-m*T,Z=h*u-m*f,D=M*Z-A*k+E*U+w*C-y*N+d*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/D;return e[0]=(o*Z-c*k+l*U)*K,e[1]=(r*k-n*Z-s*U)*K,e[2]=(T*d-f*y+u*w)*K,e[3]=(h*y-g*d-m*w)*K,e[4]=(c*C-a*Z-l*N)*K,e[5]=(t*Z-r*C+s*N)*K,e[6]=(f*E-v*d-u*A)*K,e[7]=(p*d-h*E+m*A)*K,e[8]=(a*k-o*C+l*S)*K,e[9]=(n*C-t*k-s*S)*K,e[10]=(v*y-T*E+u*M)*K,e[11]=(g*E-p*y-m*M)*K,e[12]=(o*N-a*U-c*S)*K,e[13]=(t*U-n*N+r*S)*K,e[14]=(T*A-v*w-f*M)*K,e[15]=(p*w-g*A+h*M)*K,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,p=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,p*o+n,p*c-r*a,0,l*c-r*o,p*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,p=a+a,g=o+o,h=s*l,m=s*p,v=s*g,T=a*p,f=a*g,u=o*g,M=c*l,A=c*p,E=c*g,w=n.x,y=n.y,d=n.z;return r[0]=(1-(T+u))*w,r[1]=(m+E)*w,r[2]=(v-A)*w,r[3]=0,r[4]=(m-E)*y,r[5]=(1-(h+u))*y,r[6]=(f+M)*y,r[7]=0,r[8]=(v+A)*d,r[9]=(f-M)*d,r[10]=(1-(h+T))*d,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),c=qn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yt.copy(this);const l=1/a,p=1/o,g=1/c;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=p,Yt.elements[5]*=p,Yt.elements[6]*=p,Yt.elements[8]*=g,Yt.elements[9]*=g,Yt.elements[10]*=g,t.setFromRotationMatrix(Yt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,p=2*s/(t-e),g=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let v,T;if(c)v=s/(a-s),T=a*s/(a-s);else if(o===en)v=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===mr)v=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=g,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,p=2/(t-e),g=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let v,T;if(c)v=1/(a-s),T=a/(a-s);else if(o===en)v=-2/(a-s),T=-(a+s)/(a-s);else if(o===mr)v=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=g,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new G,Yt=new ot,Mc=new G(0,0,0),Ec=new G(1,1,1),Mn=new G,Ii=new G,Gt=new G,Na=new ot,Ia=new ui;class kn{constructor(e=0,t=0,n=0,r=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],p=r[9],g=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Na.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Na,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yc=0;const Ua=new G,Yn=new ui,un=new ot,Ui=new G,mi=new G,bc=new G,Tc=new ui,Fa=new G(1,0,0),Oa=new G(0,1,0),Ba=new G(0,0,1),za={type:"added"},Ac={type:"removed"},Kn={type:"childadded",child:null},Gr={type:"childremoved",child:null};class Bt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new G,t=new kn,n=new ui,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ie}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Fa,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ba,e)}translateOnAxis(e,t){return Ua.copy(e).applyQuaternion(this.quaternion),this.position.add(Ua.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fa,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ba,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ui.copy(e):Ui.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(mi,Ui,this.up):un.lookAt(Ui,mi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(un),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(za),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(za),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,Tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const g=c[l];s(e.shapes,g)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),p=a(e.images),g=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new G(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mi extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wc={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const T of e.hand.values()){const f=t.getJointPose(T,n),u=this._getHandJoint(l,T);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const p=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],h=p.position.distanceTo(g.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Xo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=uc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=kr(a,s,e+1/3),this.g=kr(a,s,e),this.b=kr(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Xo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return He.workingToColorSpace(wt.copy(this),e),Math.round(ke(wt.r*255,0,255))*65536+Math.round(ke(wt.g*255,0,255))*256+Math.round(ke(wt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const p=(o+a)/2;if(o===a)c=0,l=0;else{const g=a-o;switch(l=p<=.5?g/(a+o):g/(2-a-o),a){case n:c=(r-s)/g+(r<s?6:0);break;case r:c=(s-n)/g+2;break;case s:c=(n-r)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=p,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Vt){He.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Fi);const n=Ur(En.h,Fi.h,t),r=Ur(En.s,Fi.s,t),s=Ur(En.l,Fi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ve;Ve.NAMES=Xo;class ra{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new ra(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rc extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kt=new G,hn=new G,Vr=new G,fn=new G,Zn=new G,$n=new G,Ga=new G,Wr=new G,Xr=new G,qr=new G,Yr=new ft,Kr=new ft,Zr=new ft;class jt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),hn.subVectors(n,t),Vr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(hn),c=Kt.dot(Vr),l=hn.dot(hn),p=hn.dot(Vr),g=a*l-o*o;if(g===0)return s.set(0,0,0),null;const h=1/g,m=(l*c-o*p)*h,v=(a*p-o*c)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Yr.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),Yr.fromBufferAttribute(e,t),Kr.fromBufferAttribute(e,n),Zr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yr,s.x),a.addScaledVector(Kr,s.y),a.addScaledVector(Zr,s.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),hn.subVectors(e,t),Kt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Kt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zn.subVectors(r,n),$n.subVectors(s,n),Wr.subVectors(e,n);const c=Zn.dot(Wr),l=$n.dot(Wr);if(c<=0&&l<=0)return t.copy(n);Xr.subVectors(e,r);const p=Zn.dot(Xr),g=$n.dot(Xr);if(p>=0&&g<=p)return t.copy(r);const h=c*g-p*l;if(h<=0&&c>=0&&p<=0&&c-p>0)return a=c/(c-p),t.copy(n).addScaledVector(Zn,a);qr.subVectors(e,s);const m=Zn.dot(qr),v=$n.dot(qr);if(v>=0&&m<=v)return t.copy(s);const T=m*l-c*v;if(T<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector($n,o);const f=p*v-m*g;if(f<=0&&g-p>=0&&m-v>=0)return Ga.subVectors(s,r),o=(g-p)/(g-p+(m-v)),t.copy(r).addScaledVector(Ga,o);const u=1/(f+T+h);return a=T*u,o=h*u,t.copy(n).addScaledVector(Zn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Bi.subVectors(this.max,gi),Jn.subVectors(e.a,gi),Qn.subVectors(e.b,gi),jn.subVectors(e.c,gi),yn.subVectors(Qn,Jn),bn.subVectors(jn,Qn),Fn.subVectors(Jn,jn);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,bn.z,0,-bn.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-Fn.y,Fn.x,0];return!$r(t,Jn,Qn,jn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,Jn,Qn,jn,Bi))?!1:(zi.crossVectors(yn,bn),t=[zi.x,zi.y,zi.z],$r(t,Jn,Qn,jn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new G,new G,new G,new G,new G,new G,new G,new G],Zt=new G,Oi=new Ri,Jn=new G,Qn=new G,jn=new G,yn=new G,bn=new G,Fn=new G,gi=new G,Bi=new G,zi=new G,On=new G;function $r(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){On.fromArray(i,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=t.dot(On),p=n.dot(On);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>o)return!1}return!0}const ht=new G,Gi=new We;let Cc=0;class Ln extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=e!==void 0?ta(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):pc(e,this.array)}}class qo extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yo extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Pc=new Ri,_i=new G,Jr=new G;class Mr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Jr)),this.expandByPoint(_i.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lc=0;const kt=new ot,Qr=new Bt,ei=new G,Ht=new Ri,xi=new Ri,vt=new G;class Xt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?Yo:qo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ht.min,xi.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,xi.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(xi.min),Ht.expandByPoint(xi.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)vt.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(e,l),vt.add(ei)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new G,c[N]=new G;const p=new G,g=new G,h=new G,m=new We,v=new We,T=new We,f=new G,u=new G;function M(N,C,U){l[N]=l[C]=l[U]=1,p.fromBufferAttribute(n,N),g.fromBufferAttribute(n,C),h.fromBufferAttribute(n,U),m.fromBufferAttribute(s,N),v.fromBufferAttribute(s,C),T.fromBufferAttribute(s,U),g.sub(p),h.sub(p),v.sub(m),T.sub(m);const k=1/(v.x*T.y-T.x*v.y);isFinite(k)&&(f.copy(g).multiplyScalar(T.y).addScaledVector(h,-v.y).multiplyScalar(k),u.copy(h).multiplyScalar(v.x).addScaledVector(g,-T.x).multiplyScalar(k),o[N].add(f),o[C].add(f),o[U].add(f),c[N].add(u),c[C].add(u),c[U].add(u))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,C=A.length;N<C;++N){const U=A[N],k=U.start,Z=U.count;for(let D=k,K=k+Z;D<K;D+=3)M(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const E=new G,w=new G,y=new G,d=new G;function S(N){y.fromBufferAttribute(r,N),d.copy(y);const C=o[N];E.copy(C),E.sub(y.multiplyScalar(y.dot(C))).normalize(),w.crossVectors(d,C);const k=w.dot(c[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,k)}for(let N=0,C=n.count;N<C;++N)l[N]&&S(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,p=new G,g=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),T=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,f),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,f),o.add(p),c.add(p),l.add(p),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),n.setXYZ(h+0,p.x,p.y,p.z),n.setXYZ(h+1,p.x,p.y,p.z),n.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,p=o.itemSize,g=o.normalized,h=new l.constructor(c.length*p);let m=0,v=0;for(let T=0,f=c.length;T<f;T++){o.isInterleavedBufferAttribute?m=c[T]*o.data.stride+o.offset:m=c[T]*p;for(let u=0;u<p;u++)h[v++]=l[m++]}return new Ln(h,p,g)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let p=0,g=l.length;p<g;p++){const h=l[p],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let g=0,h=l.length;g<h;g++){const m=l[g];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],g=s[l];for(let h=0,m=g.length;h<m;h++)p.push(g[h].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,p=a.length;l<p;l++){const g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jr=new G,Dc=new G,Nc=new Ie;class wn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jr.subVectors(n,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(jr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nc.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ic=0;class Ci extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=yi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=yo,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new G,es=new G,Hi=new G,ki=new G;class sa{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){es.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hi),o=ki.dot(this.direction),c=-ki.dot(Hi),l=ki.lengthSq(),p=Math.abs(1-a*a);let g,h,m,v;if(p>0)if(g=a*c-o,h=a*o-c,v=s*p,g>=0)if(h>=-v)if(h<=v){const T=1/p;g*=T,h*=T,m=g*(g+a*h+2*o)+h*(a*g+h+2*c)+l}else h=s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;else h=-s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;else h<=-v?(g=Math.max(0,-(-a*s+o)),h=g>0?-s:Math.min(Math.max(-s,-c),s),m=-g*g+h*(h+2*c)+l):h<=v?(g=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(g=Math.max(0,-(a*s+o)),h=g>0?s:Math.min(Math.max(-s,-c),s),m=-g*g+h*(h+2*c)+l);else h=a>0?-s:s,g=Math.max(0,-(a*h+o)),m=-g*g+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(es).addScaledVector(Hi,h),m}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),p>=0?(s=(e.min.y-h.y)*p,a=(e.max.y-h.y)*p):(s=(e.max.y-h.y)*p,a=(e.min.y-h.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),g>=0?(o=(e.min.z-h.z)*g,c=(e.max.z-h.z)*g):(o=(e.max.z-h.z)*g,c=(e.min.z-h.z)*g),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,p=o.z,g=e.x-a.x,h=e.y-a.y,m=e.z-a.z,v=t.x-a.x,T=t.y-a.y,f=t.z-a.z,u=n.x-a.x,M=n.y-a.y,A=n.z-a.z,E=Math.abs(c),w=Math.abs(l),y=Math.abs(p);let d,S,N,C,U,k,Z,D,K,Q,W,re;if(E>=w&&E>=y?(N=c,k=g,K=v,re=u,c>=0?(d=l,S=p,C=h,U=m,Z=T,D=f,Q=M,W=A):(d=p,S=l,C=m,U=h,Z=f,D=T,Q=A,W=M)):w>=y?(N=l,k=h,K=T,re=M,l>=0?(d=p,S=c,C=m,U=g,Z=f,D=v,Q=A,W=u):(d=c,S=p,C=g,U=m,Z=v,D=f,Q=u,W=A)):(N=p,k=m,K=f,re=A,p>=0?(d=c,S=l,C=g,U=h,Z=v,D=T,Q=u,W=M):(d=l,S=c,C=h,U=g,Z=T,D=v,Q=M,W=u)),N===0)return null;const q=d/N,te=S/N,ne=1/N,Se=C-q*k,Le=U-te*k,$=Z-q*K,fe=D-te*K,xe=Q-q*re,Te=W-te*re,pe=xe*fe-Te*$,Ce=Se*Te-Le*xe,lt=$*Le-fe*Se;if(r){if(pe<0||Ce<0||lt<0)return null}else if((pe<0||Ce<0||lt<0)&&(pe>0||Ce>0||lt>0))return null;const Re=pe+Ce+lt;if(Re===0)return null;const Ye=ne*(pe*k+Ce*K+lt*re);return(Re>0?Ye<0:Ye>0)?null:this.at(Ye/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class An extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ha=new ot,Bn=new sa,Vi=new Mr,ka=new G,Wi=new G,Xi=new G,qi=new G,ts=new G,Yi=new G,Va=new G,Ki=new G;class Ut extends Bt{constructor(e=new Xt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const p=o[c],g=s[c];p!==0&&(ts.fromBufferAttribute(g,e),a?Yi.addScaledVector(ts,p):Yi.addScaledVector(ts.sub(t),p))}t.add(Yi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(Vi.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Vi,ka)===null||Bn.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Ha.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,g=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,T=h.length;v<T;v++){const f=h[v],u=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,w=A;E<w;E+=3){const y=o.getX(E),d=o.getX(E+1),S=o.getX(E+2);r=Zi(this,u,e,n,l,p,g,y,d,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let f=v,u=T;f<u;f+=3){const M=o.getX(f),A=o.getX(f+1),E=o.getX(f+2);r=Zi(this,a,e,n,l,p,g,M,A,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,T=h.length;v<T;v++){const f=h[v],u=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,w=A;E<w;E+=3){const y=E,d=E+1,S=E+2;r=Zi(this,u,e,n,l,p,g,y,d,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),T=Math.min(c.count,m.start+m.count);for(let f=v,u=T;f<u;f+=3){const M=f,A=f+1,E=f+2;r=Zi(this,a,e,n,l,p,g,M,A,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Uc(i,e,t,n,r,s,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Gn,o),c===null)return null;Ki.copy(o),Ki.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:i}}function Zi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,qi);const p=Uc(i,e,t,n,Wi,Xi,qi,Va);if(p){const g=new G;jt.getBarycoord(Va,Wi,Xi,qi,g),r&&(p.uv=jt.getInterpolatedAttribute(r,o,c,l,g,new We)),s&&(p.uv1=jt.getInterpolatedAttribute(s,o,c,l,g,new We)),a&&(p.normal=jt.getInterpolatedAttribute(a,o,c,l,g,new G),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new G,materialIndex:0};jt.getNormal(Wi,Xi,qi,h.normal),p.face=h,p.barycoord=g}return p}class Fc extends Dt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=yt,p=yt,g,h){super(null,a,o,c,l,p,r,s,g,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zn=new Mr,Oc=new We(.5,.5),$i=new G;class _r{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],p=s[4],g=s[5],h=s[6],m=s[7],v=s[8],T=s[9],f=s[10],u=s[11],M=s[12],A=s[13],E=s[14],w=s[15];if(r[0].setComponents(l-a,m-p,u-v,w-M).normalize(),r[1].setComponents(l+a,m+p,u+v,w+M).normalize(),r[2].setComponents(l+o,m+g,u+T,w+A).normalize(),r[3].setComponents(l-o,m-g,u-T,w-A).normalize(),n)r[4].setComponents(c,h,f,E).normalize(),r[5].setComponents(l-c,m-h,u-f,w-E).normalize();else if(r[4].setComponents(l-c,m-h,u-f,w-E).normalize(),t===en)r[5].setComponents(l+c,m+h,u+f,w+E).normalize();else if(t===mr)r[5].setComponents(c,h,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=Oc.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($i.x=r.normal.x>0?e.max.x:e.min.x,$i.y=r.normal.y>0?e.max.y:e.min.y,$i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Wa=new ot;class aa{constructor(){this.coordinateSystem=en,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Wa.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new _r),n[r].setFromProjectionMatrix(Wa,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new _r),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new aa().copy(this)}}class Ko extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xa=new ot,Ws=new sa,Ji=new Mr,Qi=new G;class Bc extends Bt{constructor(e=new Xt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=s,e.ray.intersectsSphere(Ji)===!1)return;Xa.copy(r).invert(),Ws.copy(e.ray).applyMatrix4(Xa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,g=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=h,T=m;v<T;v++){const f=l.getX(v);Qi.fromBufferAttribute(g,f),qa(Qi,f,c,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let v=h,T=m;v<T;v++)Qi.fromBufferAttribute(g,v),qa(Qi,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qa(i,e,t,n,r,s,a){const o=Ws.distanceSqToPoint(i);if(o<t){const c=new G;Ws.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zo extends Dt{constructor(e=[],t=oi,n,r,s,a,o,c,l,p){super(e,t,n,r,s,a,o,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ci extends Dt{constructor(e,t,n=ln,r,s,a,o=yt,c=yt,l,p=Dn,g=1){if(p!==Dn&&p!==Pn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:g};super(h,r,s,a,o,c,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $o extends ci{constructor(e,t=ln,n=oi,r,s,a=yt,o=yt,c,l=Dn){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,s,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jo extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hi extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],p=[],g=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(g,2));function v(T,f,u,M,A,E,w,y,d,S,N){const C=E/d,U=w/S,k=E/2,Z=w/2,D=y/2,K=d+1,Q=S+1;let W=0,re=0;const q=new G;for(let te=0;te<Q;te++){const ne=te*U-Z;for(let Se=0;Se<K;Se++){const Le=Se*C-k;q[T]=Le*M,q[f]=ne*A,q[u]=D,l.push(q.x,q.y,q.z),q[T]=0,q[f]=0,q[u]=y>0?1:-1,p.push(q.x,q.y,q.z),g.push(Se/d),g.push(1-te/S),W+=1}}for(let te=0;te<S;te++)for(let ne=0;ne<d;ne++){const Se=h+ne+K*te,Le=h+ne+K*(te+1),$=h+(ne+1)+K*(te+1),fe=h+(ne+1)+K*te;c.push(Se,Le,fe),c.push(Le,$,fe),re+=6}o.addGroup(m,re,N),m+=re,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Er extends Xt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),p(),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(s.slice(),3)),this.setAttribute("uv",new St(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new G,E=new G,w=new G;for(let y=0;y<t.length;y+=3)m(t[y+0],A),m(t[y+1],E),m(t[y+2],w),c(A,E,w,M)}function c(M,A,E,w){const y=w+1,d=[];for(let S=0;S<=y;S++){d[S]=[];const N=M.clone().lerp(E,S/y),C=A.clone().lerp(E,S/y),U=y-S;for(let k=0;k<=U;k++)k===0&&S===y?d[S][k]=N:d[S][k]=N.clone().lerp(C,k/U)}for(let S=0;S<y;S++)for(let N=0;N<2*(y-S)-1;N++){const C=Math.floor(N/2);N%2===0?(h(d[S][C+1]),h(d[S+1][C]),h(d[S][C])):(h(d[S][C+1]),h(d[S+1][C+1]),h(d[S+1][C]))}}function l(M){const A=new G;for(let E=0;E<s.length;E+=3)A.x=s[E+0],A.y=s[E+1],A.z=s[E+2],A.normalize().multiplyScalar(M),s[E+0]=A.x,s[E+1]=A.y,s[E+2]=A.z}function p(){const M=new G;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const E=f(M)/2/Math.PI+.5,w=u(M)/Math.PI+.5;a.push(E,1-w)}v(),g()}function g(){for(let M=0;M<a.length;M+=6){const A=a[M+0],E=a[M+2],w=a[M+4],y=Math.max(A,E,w),d=Math.min(A,E,w);y>.9&&d<.1&&(A<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function m(M,A){const E=M*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function v(){const M=new G,A=new G,E=new G,w=new G,y=new We,d=new We,S=new We;for(let N=0,C=0;N<s.length;N+=9,C+=6){M.set(s[N+0],s[N+1],s[N+2]),A.set(s[N+3],s[N+4],s[N+5]),E.set(s[N+6],s[N+7],s[N+8]),y.set(a[C+0],a[C+1]),d.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),w.copy(M).add(A).add(E).divideScalar(3);const U=f(w);T(y,C+0,M,U),T(d,C+2,A,U),T(S,C+4,E,U)}}function T(M,A,E,w){w<0&&M.x===1&&(a[A]=M.x-1),E.x===0&&E.z===0&&(a[A]=w/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.vertices,e.indices,e.radius,e.detail)}}class oa extends Er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oa(e.radius,e.detail)}}class la extends Er{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new la(e.radius,e.detail)}}class yr extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,p=c+1,g=e/o,h=t/c,m=[],v=[],T=[],f=[];for(let u=0;u<p;u++){const M=u*h-a;for(let A=0;A<l;A++){const E=A*g-s;v.push(E,-M,0),T.push(0,0,1),f.push(A/o),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const A=M+l*u,E=M+l*(u+1),w=M+1+l*(u+1),y=M+1+l*u;m.push(A,E,y),m.push(E,w,y)}this.setIndex(m),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(T,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class xr extends Xt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],p=[];let g=e;const h=(t-e)/r,m=new G,v=new We;for(let T=0;T<=r;T++){for(let f=0;f<=n;f++){const u=s+f/n*a;m.x=g*Math.cos(u),m.y=g*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,p.push(v.x,v.y)}g+=h}for(let T=0;T<r;T++){const f=T*(n+1);for(let u=0;u<n;u++){const M=u+f,A=M,E=M+n+1,w=M+n+2,y=M+1;o.push(A,E,y),o.push(E,w,y)}}this.setIndex(o),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vr extends Xt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const p=[],g=new G,h=new G,m=[],v=[],T=[],f=[];for(let u=0;u<=n;u++){const M=[],A=u/n,E=a+A*o,w=e*Math.cos(E),y=Math.sqrt(e*e-w*w);let d=0;u===0&&a===0?d=.5/t:u===n&&c===Math.PI&&(d=-.5/t);for(let S=0;S<=t;S++){const N=S/t,C=r+N*s;g.x=-y*Math.cos(C),g.y=w,g.z=y*Math.sin(C),v.push(g.x,g.y,g.z),h.copy(g).normalize(),T.push(h.x,h.y,h.z),f.push(N+d,1-A),M.push(l++)}p.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){const A=p[u][M+1],E=p[u][M],w=p[u+1][M],y=p[u+1][M+1];(u!==0||a>0)&&m.push(A,E,y),(u!==n-1||c<Math.PI)&&m.push(E,w,y)}this.setIndex(m),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(T,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function di(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ya(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ya(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=di(i[t]);for(const r in n)e[r]=n[r]}return e}function Ya(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Gc={clone:di,merge:Lt};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=kc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[n].value=new We().fromArray(r.value);break;case"v3":this.uniforms[n].value=new G().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vc extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wc extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xc extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ji=new G,er=new ui,tn=new G;class jo extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ji,er,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ji,er,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new G,Ka=new We,Za=new We;class Jt extends jo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,Za),t.subVectors(Za,Ka)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qc extends jo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=-90,ni=1;class Xs extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(ti,ni,e,t);r.layers=this.layers,this.add(r);const s=new Jt(ti,ni,e,t);s.layers=this.layers,this.add(s);const a=new Jt(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Jt(ti,ni,e,t);o.layers=this.layers,this.add(o);const c=new Jt(ti,ni,e,t);c.layers=this.layers,this.add(c);const l=new Jt(ti,ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,p]=this.children,g=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=T,e.setRenderTarget(n,5,r),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Yc extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const $a=new ot;class Kc{constructor(e,t,n=0,r=1/0){this.ray=new sa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $a.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($a),this}intersectObject(e,t=!0,n=[]){return qs(e,this,n,t),n.sort(Ja),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)qs(e[r],this,n,t);return n.sort(Ja),n}}function Ja(i,e){return i.distance-e.distance}function qs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)qs(s[a],e,t,!0)}}function Qa(i,e,t,n){const r=Zc(n);switch(t){case Oo:return i*e;case zo:return i*e/r.components*r.byteLength;case Qs:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case js:return i*e*2/r.components*r.byteLength;case Bo:return i*e*3/r.components*r.byteLength;case an:return i*e*4/r.components*r.byteLength;case ea:return i*e*4/r.components*r.byteLength;case sr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ps:case gs:return Math.max(i,16)*Math.max(e,8)/4;case fs:case ms:return Math.max(i,8)*Math.max(e,8)/2;case _s:case xs:case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vs:case ur:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ts:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ps:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Os:case Bs:case zs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gs:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hr:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zc(i){switch(i){case Wt:case No:return{byteLength:1,components:1};case Ai:case Io:case cn:return{byteLength:2,components:1};case $s:case Js:return{byteLength:2,components:4};case ln:case Zs:case sn:return{byteLength:4,components:1};case Uo:case Fo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function el(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $c(i){const e=new WeakMap;function t(o,c){const l=o.array,p=o.usage,g=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){const p=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,p);else{g.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<g.length;m++){const v=g[h],T=g[m];T.start<=v.start+v.count+1?v.count=Math.max(v.count,T.start+T.count-v.start):(++h,g[h]=T)}g.length=h+1;for(let m=0,v=g.length;m<v;m++){const T=g[m];i.bufferSubData(l,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Jc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qc=`#ifdef USE_ALPHAHASH
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
#endif`,jc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
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
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#endif`,Kd=`uniform sampler2D dfgLUT;
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
}`,Zd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,du=`#if defined( USE_MORPHCOLORS )
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
#endif`,uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hu=`#ifdef USE_MORPHTARGETS
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
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
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
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uu=`float getShadowMask() {
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
}`,Fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
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
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#ifdef USE_TRANSMISSION
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $u=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform float backgroundBlurriness;
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
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nh=`#include <common>
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
}`,ih=`#if DEPTH_PACKING == 3200
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
}`,rh=`#define DISTANCE
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
}`,sh=`#define DISTANCE
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
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lh=`uniform float scale;
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
}`,ch=`uniform vec3 diffuse;
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
}`,dh=`#include <common>
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
}`,uh=`uniform vec3 diffuse;
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
}`,hh=`#define LAMBERT
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
}`,fh=`#define LAMBERT
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
}`,ph=`#define MATCAP
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
}`,mh=`#define MATCAP
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
}`,gh=`#define NORMAL
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
}`,_h=`#define NORMAL
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
}`,xh=`#define PHONG
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
}`,vh=`#define PHONG
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
}`,Sh=`#define STANDARD
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
}`,Mh=`#define STANDARD
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
}`,Eh=`#define TOON
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
}`,yh=`#define TOON
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
}`,bh=`uniform float size;
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
}`,Th=`uniform vec3 diffuse;
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
}`,Ah=`#include <common>
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
}`,wh=`uniform vec3 color;
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
}`,Rh=`uniform float rotation;
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
}`,Ch=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Jc,alphahash_pars_fragment:Qc,alphamap_fragment:jc,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:rd,batching_pars_vertex:sd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:dd,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:xd,color_vertex:vd,common:Sd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Ed,displacementmap_vertex:yd,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:kd,envmap_vertex:Dd,fog_vertex:Nd,fog_pars_vertex:Id,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Hd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Zd,lights_fragment_maps:$d,lights_fragment_end:Jd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:ru,map_particle_fragment:su,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:lu,morphinstance_vertex:cu,morphcolor_vertex:du,morphnormal_vertex:uu,morphtarget_pars_vertex:hu,morphtarget_vertex:fu,normal_fragment_begin:pu,normal_fragment_maps:mu,normal_pars_fragment:gu,normal_pars_vertex:_u,normal_vertex:xu,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:yu,opaque_fragment:bu,packing:Tu,premultiplied_alpha_fragment:Au,project_vertex:wu,dithering_fragment:Ru,dithering_pars_fragment:Cu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Nu,shadowmap_vertex:Iu,shadowmask_pars_fragment:Uu,skinbase_vertex:Fu,skinning_pars_vertex:Ou,skinning_vertex:Bu,skinnormal_vertex:zu,specularmap_fragment:Gu,specularmap_pars_fragment:Hu,tonemapping_fragment:ku,tonemapping_pars_fragment:Vu,transmission_fragment:Wu,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:Ku,worldpos_vertex:Zu,background_vert:$u,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:ju,cube_vert:eh,cube_frag:th,depth_vert:nh,depth_frag:ih,distance_vert:rh,distance_frag:sh,equirect_vert:ah,equirect_frag:oh,linedashed_vert:lh,linedashed_frag:ch,meshbasic_vert:dh,meshbasic_frag:uh,meshlambert_vert:hh,meshlambert_frag:fh,meshmatcap_vert:ph,meshmatcap_frag:mh,meshnormal_vert:gh,meshnormal_frag:_h,meshphong_vert:xh,meshphong_frag:vh,meshphysical_vert:Sh,meshphysical_frag:Mh,meshtoon_vert:Eh,meshtoon_frag:yh,points_vert:bh,points_frag:Th,shadow_vert:Ah,shadow_frag:wh,sprite_vert:Rh,sprite_frag:Ch},ge={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},rn={basic:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Lt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Lt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Lt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Lt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Lt([ge.points,ge.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Lt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Lt([ge.common,ge.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Lt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Lt([ge.sprite,ge.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Lt([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Lt([ge.lights,ge.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};rn.physical={uniforms:Lt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const tr={r:0,b:0,g:0},Ph=new ot,tl=new Ie;tl.set(-1,0,0,0,1,0,0,0,1);function Lh(i,e,t,n,r,s){const a=new Ve(0);let o=r===!0?0:1,c,l,p=null,g=0,h=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const E=M.backgroundBlurriness>0;A=e.get(A,E)}return A}function v(M){let A=!1;const E=m(M);E===null?f(a,o):E&&E.isColor&&(f(E,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,A){const E=m(A);E&&E.isCubeTexture?(l===void 0&&(l=new Ut(new hi(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:di(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,y,d){this.matrixWorld.copyPosition(d.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ph.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tl),l.material.toneMapped=He.getTransfer(E.colorSpace)!==Je,(p!==E||g!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,p=E,g=E.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ut(new yr(2,2),new Vn({name:"BackgroundMaterial",uniforms:di(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=He.getTransfer(E.colorSpace)!==Je,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,p=E,g=E.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,A){M.getRGB(tr,Qo(i)),t.buffers.color.setClear(tr.r,tr.g,tr.b,A,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:v,addToRenderList:T,dispose:u}}function Dh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(U,k,Z,D,K){let Q=!1;const W=g(U,D,Z,k);s!==W&&(s=W,l(s.object)),Q=m(U,D,Z,K),Q&&v(U,D,Z,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,E(U,k,Z,D),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function p(U){return i.deleteVertexArray(U)}function g(U,k,Z,D){const K=D.wireframe===!0;let Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);const W=U.isInstancedMesh===!0?U.id:0;let re=Q[W];re===void 0&&(re={},Q[W]=re);let q=re[Z.id];q===void 0&&(q={},re[Z.id]=q);let te=q[K];return te===void 0&&(te=h(c()),q[K]=te),te}function h(U){const k=[],Z=[],D=[];for(let K=0;K<t;K++)k[K]=0,Z[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:D,object:U,attributes:{},index:null}}function m(U,k,Z,D){const K=s.attributes,Q=k.attributes;let W=0;const re=Z.getAttributes();for(const q in re)if(re[q].location>=0){const ne=K[q];let Se=Q[q];if(Se===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function v(U,k,Z,D){const K={},Q=k.attributes;let W=0;const re=Z.getAttributes();for(const q in re)if(re[q].location>=0){let ne=Q[q];ne===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor));const Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),K[q]=Se,W++}s.attributes=K,s.attributesNum=W,s.index=D}function T(){const U=s.newAttributes;for(let k=0,Z=U.length;k<Z;k++)U[k]=0}function f(U){u(U,0)}function u(U,k){const Z=s.newAttributes,D=s.enabledAttributes,K=s.attributeDivisors;Z[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),K[U]!==k&&(i.vertexAttribDivisor(U,k),K[U]=k)}function M(){const U=s.newAttributes,k=s.enabledAttributes;for(let Z=0,D=k.length;Z<D;Z++)k[Z]!==U[Z]&&(i.disableVertexAttribArray(Z),k[Z]=0)}function A(U,k,Z,D,K,Q,W){W===!0?i.vertexAttribIPointer(U,k,Z,K,Q):i.vertexAttribPointer(U,k,Z,D,K,Q)}function E(U,k,Z,D){T();const K=D.attributes,Q=Z.getAttributes(),W=k.defaultAttributeValues;for(const re in Q){const q=Q[re];if(q.location>=0){let te=K[re];if(te===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){const ne=te.normalized,Se=te.itemSize,Le=e.get(te);if(Le===void 0)continue;const $=Le.buffer,fe=Le.type,xe=Le.bytesPerElement,Te=fe===i.INT||fe===i.UNSIGNED_INT||te.gpuType===Zs;if(te.isInterleavedBufferAttribute){const pe=te.data,Ce=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,lt=te.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)u(q.location+Re,pe.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Re=0;Re<q.locationSize;Re++)f(q.location+Re);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Re=0;Re<q.locationSize;Re++)A(q.location+Re,Se/q.locationSize,fe,ne,Ce*xe,(lt+Se/q.locationSize*Re)*xe,Te)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)u(q.location+pe,te.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<q.locationSize;pe++)f(q.location+pe);i.bindBuffer(i.ARRAY_BUFFER,$);for(let pe=0;pe<q.locationSize;pe++)A(q.location+pe,Se/q.locationSize,fe,ne,Se*xe,Se/q.locationSize*pe*xe,Te)}}else if(W!==void 0){const ne=W[re];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(q.location,ne);break;case 3:i.vertexAttrib3fv(q.location,ne);break;case 4:i.vertexAttrib4fv(q.location,ne);break;default:i.vertexAttrib1fv(q.location,ne)}}}}M()}function w(){N();for(const U in n){const k=n[U];for(const Z in k){const D=k[Z];for(const K in D){const Q=D[K];for(const W in Q)p(Q[W].object),delete Q[W];delete D[K]}}delete n[U]}}function y(U){if(n[U.id]===void 0)return;const k=n[U.id];for(const Z in k){const D=k[Z];for(const K in D){const Q=D[K];for(const W in Q)p(Q[W].object),delete Q[W];delete D[K]}}delete n[U.id]}function d(U){for(const k in n){const Z=n[k];for(const D in Z){const K=Z[D];if(K[U.id]===void 0)continue;const Q=K[U.id];for(const W in Q)p(Q[W].object),delete Q[W];delete K[U.id]}}}function S(U){for(const k in n){const Z=n[k],D=U.isInstancedMesh===!0?U.id:0,K=Z[D];if(K!==void 0){for(const Q in K){const W=K[Q];for(const re in W)p(W[re].object),delete W[re];delete K[Q]}delete Z[D],Object.keys(Z).length===0&&delete n[k]}}}function N(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfObject:S,releaseStatesOfProgram:d,initAttributes:T,enableAttribute:f,disableUnusedAttributes:M}}function Nh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,p){p!==0&&(i.drawArraysInstanced(n,c,l,p),t.update(l,n,p))}function o(c,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,p);let h=0;for(let m=0;m<p;m++)h+=l[m];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ih(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(d){return!(d!==an&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(d){const S=d===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Wt&&d!==sn&&!S&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=c(l);p!==l&&(De("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:v,maxTextureSize:T,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:y}}function Uh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new wn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){const m=g.length!==0||h||n!==0||r;return r=h,n=g.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,h){t=p(g,h,0)},this.setState=function(g,h,m){const v=g.clippingPlanes,T=g.clipIntersection,f=g.clipShadows,u=i.get(g);if(!r||v===null||v.length===0||s&&!f)s?p(null):l();else{const M=s?0:n,A=M*4;let E=u.clippingState||null;c.value=E,E=p(v,h,A,m);for(let w=0;w!==A;++w)E[w]=t[w];u.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,h,m,v){const T=g!==null?g.length:0;let f=null;if(T!==0){if(f=c.value,v!==!0||f===null){const u=m+T*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<u)&&(f=new Float32Array(u));for(let A=0,E=m;A!==T;++A,E+=4)a.copy(g[A]).applyMatrix4(M,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,f}}class ca extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:si});s.uniforms.tEquirect.value=t;const a=new Ut(r,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ft),new Xs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ja=256,Fh=3,Oh=20,nl=256,il=16,Bh=3,zh=new G,Gh=new Ve;class Sr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new Ut(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=zh}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),p=this._getSourceTarget(!0);t>0&&(p.texture.mipmapsAutoUpdate=!1);const g=c.autoClear,h=c.autoClearColor,m=c.autoClearDepth,v=c.autoClearStencil,T=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,T===null&&(e.background=c.getClearColor(Gh));const f=new Xs(n,r,p);return f.position.copy(o),f.update(c,e),c.autoClear=g,c.autoClearColor=h,c.autoClearDepth=m,c.autoClearStencil=v,e.background=T,t>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=to(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ja,hc(e))}_fromTexture(e,t){e.mapping===oi||e.mapping===Ti?this._setSize(e.image.length===0?ja:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=eo(e,!1,!1),n=Math.log2(e)-Fh;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=eo(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===oi||e.mapping===Ti?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=to()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Hh(),this._integrationMaterial=kh());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/il);for(let a=0;a<=n;a++){const o=Sr.lodToRoughness(a,n);if(a>n-Bh)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(nl*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Vh());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function eo(i,e,t){return new ca(i,{minFilter:Cn,generateMipmaps:e,type:cn,colorSpace:fr,depthBuffer:t})}function Pi(i,e,t){return new Vn({name:i,uniforms:e,vertexShader:Be.cube_vert,fragmentShader:t,side:Ot,blending:si,depthTest:!1,depthWrite:!1})}function Hh(){return Pi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nl}u

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
	`)}function kh(){return Pi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:il}},`

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
	`)}function Vh(){return Pi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Oh}
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
	`)}function to(){return Pi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function no(){return Pi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Pr||m===Lr)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const T=new ca(v.height);return T.fromEquirectangularTexture(i,h),e.set(h,T),h.addEventListener("dispose",l),o(T.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,v=m===Pr||m===Lr,T=m===oi||m===Ti;if(v||T){let f=t.get(h);const u=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Sr(i)),f=v?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const M=h.image;return v&&M&&M.height>0||T&&M&&c(M)?(n===null&&(n=new Sr(i)),f=v?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",p),f.texture):null}}}return h}function o(h,m){return m===Pr?h.mapping=oi:m===Lr&&(h.mapping=Ti),h}function c(h){let m=0;const v=6;for(let T=0;T<v;T++)h[T]!==void 0&&m++;return m===v}function l(h){const m=h.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function p(h){const m=h.target;m.removeEventListener("dispose",p);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Xh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&cr("WebGLRenderer: "+n+" extension not supported."),r}}}function qh(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const f in v.attributes)e.remove(v.attributes[f]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const T=s.get(v);T&&(e.remove(T),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,T){return r[T.id]!==void 0||(T.addEventListener("dispose",o),r[T.id]=new WeakRef(T),a.register(T,T.id,T),t.memory.geometries++),T}function p(v){const T=v.attributes;for(const f in T)e.update(T[f],i.ARRAY_BUFFER)}function g(v){const T=v.index,f=v.attributes.position;let u=0;if(f===void 0)return;const M=T!==null?T.array.length:f.array.length/3-1,A=f.count>=65535?Yo:qo,E=new A(Math.ceil(M/3)*6,1),w=E.array;if(T!==null){const d=T.array;u=T.version;for(let S=0,N=0;S<M;S+=3){const C=d[S+0],U=d[S+1],k=d[S+2];w[N++]=C,w[N++]=U,w[N++]=U,w[N++]=k,w[N++]=k,w[N++]=C}}else{u=f.version;for(let d=0,S=0;d<M;d+=3){const N=d+0,C=d+1,U=d+2;w[S++]=N,w[S++]=C,w[S++]=C,w[S++]=U,w[S++]=U,w[S++]=N}}E.version=u;const y=s.get(v);y&&e.remove(y),s.set(v,E)}function h(v){const T=s.get(v);if(T){const f=v.index;f!==null&&T.version<f.version&&g(v)}else g(v);return s.get(v)}function m(){for(const v in r){const T=r[v].deref();T!==void 0&&c(T)}}return{get:l,update:p,getWireframeAttribute:h,dispose:m}}function Yh(i,e,t){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function c(g,h){i.drawElements(n,h,s,g*a),t.update(h,n,1)}function l(g,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,g*a,m),t.update(h,n,m))}function p(g,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,g,0,m);let T=0;for(let f=0;f<m;f++)T+=h[f];t.update(T,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function Kh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zh(i,e,t){const n=new WeakMap,r=new ft;function s(a,o,c){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let h=n.get(o);if(h===void 0||h.count!==g){let N=function(){d.dispose(),n.delete(o),o.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),T===!0&&(A=3);let E=o.attributes.position.count*A,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const y=new Float32Array(E*w*4*g),d=new Wo(y,E,w,g);d.type=sn,d.needsUpdate=!0;const S=A*4;for(let C=0;C<g;C++){const U=f[C],k=u[C],Z=M[C],D=E*w*4*C;for(let K=0;K<U.count;K++){const Q=K*S;m===!0&&(r.fromBufferAttribute(U,K),y[D+Q+0]=r.x,y[D+Q+1]=r.y,y[D+Q+2]=r.z,y[D+Q+3]=0),v===!0&&(r.fromBufferAttribute(k,K),y[D+Q+4]=r.x,y[D+Q+5]=r.y,y[D+Q+6]=r.z,y[D+Q+7]=0),T===!0&&(r.fromBufferAttribute(Z,K),y[D+Q+8]=r.x,y[D+Q+9]=r.y,y[D+Q+10]=r.z,y[D+Q+11]=Z.itemSize===4?r.w:1)}}h={count:g,texture:d,size:new We(E,w)},n.set(o,h),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let T=0;T<l.length;T++)m+=l[T];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function $h(i,e,t,n,r){let s=new WeakMap;function a(l){const p=r.render.frame,g=l.geometry,h=e.get(l,g);if(s.get(h)!==p&&(e.update(h),s.set(h,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==p&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,p))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return h}function o(){s=new WeakMap}function c(l){const p=l.target;p.removeEventListener("dispose",c),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const Jh={[To]:"LINEAR_TONE_MAPPING",[Ao]:"REINHARD_TONE_MAPPING",[wo]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Po]:"AGX_TONE_MAPPING",[Lo]:"NEUTRAL_TONE_MAPPING",[Co]:"CUSTOM_TONE_MAPPING"};function Qh(i,e,t,n,r,s){const a=new on(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const p=new Xt;p.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new St([0,2,0,0,2,0],2));const g=new Vc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ut(p,g),m=new qc(-1,1,1,-1,0,1);let v=null,T=null,f=!1,u,M=null,A=[],E=!1;this.setSize=function(w,y){a.setSize(w,y),o!==null&&o.setSize(w,y),c!==null&&c.setSize(w,y);for(let d=0;d<A.length;d++){const S=A[d];S.setSize&&S.setSize(w,y)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;const y=a.width,d=a.height;A.length>0&&o===null&&(o=new on(y,d,{type:cn,depthBuffer:!1,stencilBuffer:!1}),c=new on(y,d,{type:cn,depthBuffer:!1,stencilBuffer:!1}));const S=r===!0&&A.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new ci(y,d),s===!0&&(l.format=Pn,l.type=li)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<A.length;N++){const C=A[N];C.setSize&&C.setSize(y,d),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(w,y){if(f||w.toneMapping===_n&&A.length===0)return!1;if(M=y,y!==null){const d=y.width,S=y.height;(a.width!==d||a.height!==S)&&this.setSize(d,S)}return E===!1&&w.setRenderTarget(a),u=w.toneMapping,w.toneMapping=_n,!0},this.hasRenderPass=function(){return E},this.end=function(w,y){w.toneMapping=u,f=!0;let d=a,S=o;for(let N=0;N<A.length;N++){const C=A[N];C.enabled!==!1&&(C.render(w,S,d,y),C.needsSwap!==!1&&(d=S,S=S===o?c:o))}if(v!==w.outputColorSpace||T!==w.toneMapping){v=w.outputColorSpace,T=w.toneMapping,g.defines={},He.getTransfer(v)===Je&&(g.defines.SRGB_TRANSFER="");const N=Jh[T];N&&(g.defines[N]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=d.texture,w.setRenderTarget(M),w.render(h,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),p.dispose(),g.dispose()}}const rl=new Dt,sl=new ci(1,1),al=new $o(1),ol=new Wo,ll=new Sc,cl=new Zo,io=[],ro=[],so=new Float32Array(16),ao=new Float32Array(9),oo=new Float32Array(4);function fi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=io[r];if(s===void 0&&(s=new Float32Array(r),io[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=ro[e];t===void 0&&(t=new Int32Array(e),ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;oo.set(n),i.uniformMatrix2fv(this.addr,!1,oo),gt(t,n)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ao.set(n),i.uniformMatrix3fv(this.addr,!1,ao),gt(t,n)}}function af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;so.set(n),i.uniformMatrix4fv(this.addr,!1,so),gt(t,n)}}function of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Tr(i){return i.version===0&&(i.compareFunction=ko,i.needsUpdate=!0),i}function mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Tr(sl):s=rl,t.setTexture2D(e||s,r)}function gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ll,r)}function _f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Tr(al):s=cl,t.setTextureCube(e||s,r)}function xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ol,r)}function vf(i){switch(i){case 5126:return jh;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return df;case 5125:return uf;case 36294:return hf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}function Sf(i,e){i.uniform1fv(this.addr,e)}function Mf(i,e){const t=fi(e,this.size,2);i.uniform2fv(this.addr,t)}function Ef(i,e){const t=fi(e,this.size,3);i.uniform3fv(this.addr,t)}function yf(i,e){const t=fi(e,this.size,4);i.uniform4fv(this.addr,t)}function bf(i,e){const t=fi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tf(i,e){const t=fi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Af(i,e){const t=fi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wf(i,e){i.uniform1iv(this.addr,e)}function Rf(i,e){i.uniform2iv(this.addr,e)}function Cf(i,e){i.uniform3iv(this.addr,e)}function Pf(i,e){i.uniform4iv(this.addr,e)}function Lf(i,e){i.uniform1uiv(this.addr,e)}function Df(i,e){i.uniform2uiv(this.addr,e)}function Nf(i,e){i.uniform3uiv(this.addr,e)}function If(i,e){i.uniform4uiv(this.addr,e)}function Uf(i,e,t){const n=this.cache,r=e.length,s=br(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tr(sl):a=rl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ff(i,e,t){const n=this.cache,r=e.length,s=br(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ll,s[a])}function Of(i,e,t){const n=this.cache,r=e.length,s=br(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Tr(al):a=cl;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Bf(i,e,t){const n=this.cache,r=e.length,s=br(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ol,s[a])}function zf(i){switch(i){case 5126:return Sf;case 35664:return Mf;case 35665:return Ef;case 35666:return yf;case 35674:return bf;case 35675:return Tf;case 35676:return Af;case 5124:case 35670:return wf;case 35667:case 35671:return Rf;case 35668:case 35672:return Cf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return Df;case 36295:return Nf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Bf}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vf(t.type)}}class Hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zf(t.type)}}class kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function lo(i,e){i.seq.push(e),i.map[e.id]=e}function Vf(i,e,t){const n=i.name,r=n.length;for(ns.lastIndex=0;;){const s=ns.exec(n),a=ns.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){lo(t,l===void 0?new Gf(o,i,e):new Hf(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new kf(o),lo(t,g)),t=g}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Vf(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wf=37297;let Xf=0;function qf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const uo=new Ie;function Yf(i){He._getMatrix(uo,He.workingColorSpace,i);const e=`mat3( ${uo.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case pr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ho(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+qf(i.getShaderSource(e),o)}else return s}function Kf(i,e){const t=Yf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Zf={[To]:"Linear",[Ao]:"Reinhard",[wo]:"Cineon",[Ro]:"ACESFilmic",[Po]:"AgX",[Lo]:"Neutral",[Co]:"Custom"};function $f(i,e){const t=Zf[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new G;function Jf(){He.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ei).join(`
`)}function jf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ep(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ei(i){return i!==""}function fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function po(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(i){return i.replace(tp,np)}function np(i,e){const t=Be[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ys(t)}const ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mo(i){return i.replace(ip,rp)}function rp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function go(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const sp={[rr]:"SHADOWMAP_TYPE_PCF",[Si]:"SHADOWMAP_TYPE_VSM"};function ap(i){return sp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const op={[Ti]:"ENVMAP_MODE_REFRACTION"};function lp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":op[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cp={[bo]:"ENVMAP_BLENDING_MULTIPLY",[Zl]:"ENVMAP_BLENDING_MIX",[$l]:"ENVMAP_BLENDING_ADD"};function dp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cp[i.combine]||"ENVMAP_BLENDING_NONE"}function up(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ap(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=lp(t),g=dp(t),h=Qf(t),m=jf(s),v=r.createProgram();let T,f,u=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ei).join(`
`),T.length>0&&(T+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ei).join(`
`),f.length>0&&(f+=`
`)):(T=[go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),f=[go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Be.tonemapping_pars_fragment:"",t.toneMapping!==_n?$f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Kf("linearToOutputTexel",t.outputColorSpace),Jf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),a=Ys(a),a=fo(a,t),a=po(a,t),o=Ys(o),o=fo(o,t),o=po(o,t),a=mo(a),o=mo(o),t.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,T=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,f=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=u+T+a,A=u+f+o,E=co(r,r.VERTEX_SHADER,M),w=co(r,r.FRAGMENT_SHADER,A);r.attachShader(v,E),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function y(C){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(E)||"",Z=r.getShaderInfoLog(w)||"",D=U.trim(),K=k.trim(),Q=Z.trim();let W=!0,re=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,E,w);else{const q=ho(r,E,"vertex"),te=ho(r,w,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+q+`
`+te)}else D!==""?De("WebGLProgram: Program Info Log:",D):(K===""||Q==="")&&(re=!1);re&&(C.diagnostics={runnable:W,programLog:D,vertexShader:{log:K,prefix:T},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(E),r.deleteShader(w),d=new dr(r,v),S=ep(r,v)}let d;this.getUniforms=function(){return d===void 0&&y(this),d};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,Wf)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let hp=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pp(e),t.set(e,n)),n}}class pp{constructor(e){this.id=hp++,this.code=e,this.usedTimes=0}}function mp(i){return i===Hn||i===ur||i===hr}function gp(i,e,t,n,r,s){const a=new ia,o=new fp,c=new Set,l=[],p=new Map,g=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(d){return c.add(d),d===0?"uv":`uv${d}`}function v(d,S,N,C,U,k){const Z=C.fog,D=U.geometry,K=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?C.environment:null,Q=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,W=e.get(d.envMap||K,Q),re=h[d.type];let q=n.precision;d.precision!==null&&(q=n.getMaxPrecision(d.precision),q!==d.precision&&De("WebGLProgram.getParameters:",d.precision,"not supported, using",q,"instead."));const te=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ne=te!==void 0?te.length:0;let Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let Le,$,fe,xe;if(re){const me=rn[re];Le=me.vertexShader,$=me.fragmentShader}else{Le=d.vertexShader,$=d.fragmentShader;const me=o.getVertexShaderStage(d),$e=o.getFragmentShaderStage(d);o.update(d,me,$e),fe=me.id,xe=$e.id}const Te=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ce=U.isInstancedMesh===!0,lt=U.isBatchedMesh===!0,Re=!!d.map,Ye=!!d.matcap,Ze=!!W,Ue=Ze&&W.isPMREMTexture===!0,pt=!!d.aoMap,st=!!d.lightMap,Mt=!!d.bumpMap&&d.wireframe===!1,Qe=!!d.normalMap,zt=!!d.displacementMap,rt=!!d.emissiveMap,dt=!!d.metalnessMap,Nt=!!d.roughnessMap,je=d.anisotropy>0,P=d.clearcoat>0,Rt=d.diffuseRoughness>0,et=d.dispersion>0,tt=d.retroreflectivity>0,ue=d.iridescence>0,ct=d.sheen>0,Ae=d.transmission>0,Pe=je&&!!d.anisotropyMap,b=P&&!!d.clearcoatMap,_=P&&!!d.clearcoatNormalMap,O=P&&!!d.clearcoatRoughnessMap,ie=Rt&&!!d.diffuseRoughnessMap,j=ue&&!!d.iridescenceMap,V=ue&&!!d.iridescenceThicknessMap,ee=ct&&!!d.sheenColorMap,I=ct&&!!d.sheenRoughnessMap,H=!!d.specularMap,se=!!d.specularColorMap,R=!!d.specularIntensityMap,J=Ae&&!!d.transmissionMap,Y=Ae&&!!d.thicknessMap,le=!!d.gradientMap,ae=!!d.alphaMap,ce=d.alphaTest>0,be=!!d.alphaHash,Oe=!!d.extensions;let oe=_n;d.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(oe=i.toneMapping);const we=Ue?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Fe={shaderID:re,shaderType:d.type,shaderName:d.name,vertexShader:Le,fragmentShader:$,defines:d.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:q,batching:lt,batchingColor:lt&&U._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,instancingMorph:Ce&&U.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:Re,matcap:Ye,envMap:Ze,envMapMode:Ze&&W.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?we.length-1:null,envMapSize:Ue?we[0].width:null,aoMap:pt,lightMap:st,bumpMap:Mt,normalMap:Qe,displacementMap:zt,emissiveMap:rt,normalMapObjectSpace:Qe&&d.normalMapType===jl,normalMapTangentSpace:Qe&&d.normalMapType===Aa,packedNormalMap:Qe&&d.normalMapType===Aa&&mp(d.normalMap.format),metalnessMap:dt,roughnessMap:Nt,anisotropy:je,anisotropyMap:Pe,clearcoat:P,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:O,diffuseRoughness:Rt,diffuseRoughnessMap:ie,dispersion:et,retroreflection:tt,iridescence:ue,iridescenceMap:j,iridescenceThicknessMap:V,sheen:ct,sheenColorMap:ee,sheenRoughnessMap:I,specularMap:H,specularColorMap:se,specularIntensityMap:R,transmission:Ae,transmissionMap:J,thicknessMap:Y,gradientMap:le,opaque:d.transparent===!1&&d.blending===yi&&d.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:be,combine:d.combine,mapUv:Re&&m(d.map.channel),aoMapUv:pt&&m(d.aoMap.channel),lightMapUv:st&&m(d.lightMap.channel),bumpMapUv:Mt&&m(d.bumpMap.channel),normalMapUv:Qe&&m(d.normalMap.channel),displacementMapUv:zt&&m(d.displacementMap.channel),emissiveMapUv:rt&&m(d.emissiveMap.channel),metalnessMapUv:dt&&m(d.metalnessMap.channel),roughnessMapUv:Nt&&m(d.roughnessMap.channel),anisotropyMapUv:Pe&&m(d.anisotropyMap.channel),clearcoatMapUv:b&&m(d.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(d.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(d.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(d.iridescenceMap.channel),iridescenceThicknessMapUv:V&&m(d.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(d.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(d.sheenRoughnessMap.channel),specularMapUv:H&&m(d.specularMap.channel),specularColorMapUv:se&&m(d.specularColorMap.channel),specularIntensityMapUv:R&&m(d.specularIntensityMap.channel),transmissionMapUv:J&&m(d.transmissionMap.channel),thicknessMapUv:Y&&m(d.thicknessMap.channel),alphaMapUv:ae&&m(d.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Qe||je),vertexNormals:!!D.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Re||ae),fog:!!Z,useFog:d.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||D.attributes.normal===void 0&&Qe===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(me=>me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:d.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Re&&d.map.isVideoTexture===!0&&He.getTransfer(d.map.colorSpace)===Je,decodeVideoTextureEmissive:rt&&d.emissiveMap.isVideoTexture===!0&&He.getTransfer(d.emissiveMap.colorSpace)===Je,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Qt,flipSided:d.side===Ot,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:Oe&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&d.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function T(d){const S=[];if(d.shaderID?S.push(d.shaderID):(S.push(d.customVertexShaderID),S.push(d.customFragmentShaderID)),d.defines!==void 0)for(const N in d.defines)S.push(N),S.push(d.defines[N]);return d.isRawShaderMaterial===!1&&(f(S,d),u(S,d),S.push(i.outputColorSpace)),S.push(d.customProgramCacheKey),S.join()}function f(d,S){d.push(S.precision),d.push(S.outputColorSpace),d.push(S.envMapMode),d.push(S.envMapPMREM),d.push(S.envMapMaxLod),d.push(S.envMapSize),d.push(S.mapUv),d.push(S.alphaMapUv),d.push(S.lightMapUv),d.push(S.aoMapUv),d.push(S.bumpMapUv),d.push(S.normalMapUv),d.push(S.displacementMapUv),d.push(S.emissiveMapUv),d.push(S.metalnessMapUv),d.push(S.roughnessMapUv),d.push(S.anisotropyMapUv),d.push(S.clearcoatMapUv),d.push(S.clearcoatNormalMapUv),d.push(S.clearcoatRoughnessMapUv),d.push(S.diffuseRoughnessMapUv),d.push(S.iridescenceMapUv),d.push(S.iridescenceThicknessMapUv),d.push(S.sheenColorMapUv),d.push(S.sheenRoughnessMapUv),d.push(S.specularMapUv),d.push(S.specularColorMapUv),d.push(S.specularIntensityMapUv),d.push(S.transmissionMapUv),d.push(S.thicknessMapUv),d.push(S.combine),d.push(S.fogExp2),d.push(S.sizeAttenuation),d.push(S.morphTargetsCount),d.push(S.numSunLights),d.push(S.numDirLights),d.push(S.numPointLights),d.push(S.numSpotLights),d.push(S.numSpotLightMaps),d.push(S.numHemiLights),d.push(S.numRectAreaLights),d.push(S.numSunLightShadows),d.push(S.numDirLightShadows),d.push(S.numPointLightShadows),d.push(S.numSpotLightShadows),d.push(S.numSpotLightShadowsWithMaps),d.push(S.numLightProbes),d.push(S.numLightProbeGrids),d.push(S.shadowMapType),d.push(S.toneMapping),d.push(S.numClippingPlanes),d.push(S.numClipIntersection),d.push(S.depthPacking)}function u(d,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),d.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),d.push(a.mask)}function M(d){const S=h[d.type];let N;if(S){const C=rn[S];N=Gc.clone(C.uniforms)}else N=d.uniforms;return N}function A(d,S){let N=p.get(S);return N!==void 0?++N.usedTimes:(N=new up(i,S,d,r),l.push(N),p.set(S,N)),N}function E(d){if(--d.usedTimes===0){const S=l.indexOf(d);l[S]=l[l.length-1],l.pop(),p.delete(d.cacheKey),d.destroy()}}function w(d){o.remove(d)}function y(){o.dispose()}return{getParameters:v,getProgramCacheKey:T,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:y}}function _p(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _o(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,v,T,f,u){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:v,materialVariant:a(h),groupOrder:T,renderOrder:h.renderOrder,z:f,group:u},i[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=v,M.materialVariant=a(h),M.groupOrder=T,M.renderOrder=h.renderOrder,M.z=f,M.group=u),e++,M}function c(h,m,v,T,f,u,M){M.reversedDepth===!0&&(f=-f);const A=o(h,m,v,T,f,u);v.transmission>0?n.push(A):v.transparent===!0?r.push(A):t.push(A)}function l(h,m,v,T,f,u){const M=o(h,m,v,T,f,u);v.transmission>0?n.unshift(M):v.transparent===!0?r.unshift(M):t.unshift(M)}function p(h,m){t.length>1&&t.sort(h||xp),n.length>1&&n.sort(m||_o),r.length>1&&r.sort(m||_o)}function g(){for(let h=e,m=i.length;h<m;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:g,sort:p}}function vp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new xo,i.set(n,[a])):r>=s.length?(a=new xo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Mp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ep=0;function yp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bp(i){const e=new Sp,t=Mp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new ot,a=new ot;function o(l){let p=0,g=0,h=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,v=0,T=0,f=0,u=0,M=0,A=0,E=0,w=0,y=0,d=0,S=0,N=0,C=0;l.sort(yp);for(let k=0,Z=l.length;k<Z;k++){const D=l[k],K=D.color,Q=D.intensity,W=D.distance;let re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hn?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=K.r*Q,g+=K.g*Q,h+=K.b*Q;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],Q);C++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,ne=t.get(D);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[v]=ne,n.sunShadowMap[v]=re;const Se=te.getViewportCount();for(let Le=0;Le<Se;Le++)n.sunShadowMatrix[T+Le]=te.getMatrix(Le),n.sunShadowCascade[T+Le]=te._cascadeData[Le];T+=Se,v++}n.sun[m]=q,m++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,ne=t.get(D);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=re,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=q,f++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(K).multiplyScalar(Q),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[M]=q;const te=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,te.updateMatrices(D),D.castShadow&&N++),n.spotLightMatrix[M]=te.matrix,D.castShadow){const ne=t.get(D);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[M]=ne,n.spotShadowMap[M]=re,d++}M++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(K).multiplyScalar(Q),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[A]=q,A++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const te=D.shadow,ne=t.get(D);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[u]=ne,n.pointShadowMap[u]=re,n.pointShadowMatrix[u]=D.shadow.matrix,y++}n.point[u]=q,u++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(Q),q.groundColor.copy(D.groundColor).multiplyScalar(Q),n.hemi[E]=q,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=h;const U=n.hash;(U.sunLength!==m||U.directionalLength!==f||U.pointLength!==u||U.spotLength!==M||U.rectAreaLength!==A||U.hemiLength!==E||U.numSunShadows!==v||U.numDirectionalShadows!==w||U.numPointShadows!==y||U.numSpotShadows!==d||U.numSpotMaps!==S||U.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=f,n.spot.length=M,n.rectArea.length=A,n.point.length=u,n.hemi.length=E,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=d,n.spotShadowMap.length=d,n.spotLightMatrix.length=d+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,U.sunLength=m,U.directionalLength=f,U.pointLength=u,U.spotLength=M,U.rectAreaLength=A,U.hemiLength=E,U.numSunShadows=v,U.numDirectionalShadows=w,U.numPointShadows=y,U.numSpotShadows=d,U.numSpotMaps=S,U.numLightProbes=C,n.version=Ep++)}function c(l,p){let g=0,h=0,m=0,v=0,T=0,f=0;const u=p.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){const E=l[M];if(E.isSunLight){const w=n.sun[g];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),g++}else if(E.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),h++}else if(E.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),v++}else if(E.isRectAreaLight){const w=n.rectArea[T];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),a.identity(),s.copy(E.matrixWorld),s.premultiply(u),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const w=n.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),f++}}}return{setup:o,setupView:c,state:n}}function vo(i){const e=new bp(i),t=[],n=[],r=[];function s(g){p.camera=g,t.length=0,n.length=0,r.length=0}function a(g){g.isLightProbeGrid?r.push(g):t.push(g)}function o(g){n.push(g)}function c(){e.setup(t),r.sort((g,h)=>g.priority-h.priority||g.id-h.id)}function l(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Tp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vo(i),e.set(r,[o])):s>=a.length?(o=new vo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ap=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
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
}`,Rp=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Cp=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],So=new ot,vi=new G,is=new G;function Pp(i,e,t){let n=new _r;const r=new We,s=new We,a=new ft,o=new Wc,c=new Xc,l={},p=t.maxTextureSize,g={[Gn]:Ot,[Ot]:Gn,[Qt]:Qt},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Ap,fragmentShader:wp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ut(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let u=this.type;this.render=function(y,d,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;this.type===Pl&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rr);const N=i.getRenderTarget(),C=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(si),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Z=u!==this.type;Z&&d.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(K=>K.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,K=y.length;D<K;D++){const Q=y[D],W=Q.shadow;if(W===void 0){De("WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const re=W.getFrameExtents();r.multiply(re),s.copy(W.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/re.x),r.x=s.x*re.x,W.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/re.y),r.y=s.y*re.y,W.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Si){if(Q.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new on(r.x,r.y,{format:Hn,type:cn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),W.map.texture.name=Q.name+".shadowMap",W.map.depthTexture=new ci(r.x,r.y,sn),W.map.depthTexture.name=Q.name+".shadowMapDepth",W.map.depthTexture.format=Dn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt}else Q.isPointLight?(W.map=new ca(r.x),W.map.depthTexture=new $o(r.x,ln)):(W.map=new on(r.x,r.y),W.map.depthTexture=new ci(r.x,r.y,ln)),W.map.depthTexture.name=Q.name+".shadowMap",W.map.depthTexture.format=Dn,this.type===rr?(W.map.depthTexture.compareFunction=q?Ho:Go,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Q.isPointLight!==!0&&W.updateMatrices(Q,S);const ne=W.camera.layers.mask&4294967294?W.camera.layers:S.layers;for(let Se=0;Se<te;Se++){const Le=W.getCamera(Se);if(Q.isPointLight){const $=W.camera,fe=W.matrix,xe=Q.distance||$.far;xe!==$.far&&($.far=xe,$.updateProjectionMatrix()),vi.setFromMatrixPosition(Q.matrixWorld),$.position.copy(vi),is.copy($.position),is.add(Rp[Se]),$.up.copy(Cp[Se]),$.lookAt(is),$.updateMatrixWorld(),fe.makeTranslation(-vi.x,-vi.y,-vi.z),So.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),W._frustum.setFromProjectionMatrix(So,$.coordinateSystem,$.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(W.map),i.clear());const $=W.getViewport(Se);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),k.viewport(a)}n=W.getFrustum(Se),E(d,S,Le,Q,ne,this.type)}W.isPointLightShadow!==!0&&this.type===Si&&M(W,S),W.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(N,C,U)};function M(y,d){const S=e.update(T);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null?y.mapPass=new on(r.x,r.y,{format:Hn,type:cn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value.set(y.map.width,y.map.height),h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(d,null,S,h,T,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value.set(y.map.width,y.map.height),m.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(d,null,S,m,T,null)}function A(y,d,S,N){let C=null;const U=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0)C=U;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&d.clipShadows===!0&&Array.isArray(d.clippingPlanes)&&d.clippingPlanes.length!==0||d.displacementMap&&d.displacementScale!==0||d.alphaMap&&d.alphaTest>0||d.map&&d.alphaTest>0||d.alphaToCoverage===!0){const k=C.uuid,Z=d.uuid;let D=l[k];D===void 0&&(D={},l[k]=D);let K=D[Z];K===void 0&&(K=C.clone(),D[Z]=K,d.addEventListener("dispose",w)),C=K}if(C.visible=d.visible,C.wireframe=d.wireframe,N===Si?C.side=d.shadowSide!==null?d.shadowSide:d.side:C.side=d.shadowSide!==null?d.shadowSide:g[d.side],C.alphaMap=d.alphaMap,C.alphaTest=d.alphaToCoverage===!0?.5:d.alphaTest,C.map=d.map,C.clipShadows=d.clipShadows,C.clippingPlanes=d.clippingPlanes,C.clipIntersection=d.clipIntersection,C.displacementMap=d.displacementMap,C.displacementScale=d.displacementScale,C.displacementBias=d.displacementBias,C.wireframeLinewidth=d.wireframeLinewidth,C.linewidth=d.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const k=i.properties.get(C);k.light=S}return C}function E(y,d,S,N,C,U){if(y.visible===!1)return;if(y.layers.test(C)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&U===Si)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const D=e.update(y),K=y.material;if(Array.isArray(K)){const Q=D.groups;for(let W=0,re=Q.length;W<re;W++){const q=Q[W],te=K[q.materialIndex];if(te&&te.visible){const ne=A(y,te,N,U);y.onBeforeShadow(i,y,d,S,D,ne,q),i.renderBufferDirect(S,null,D,ne,y,q),y.onAfterShadow(i,y,d,S,D,ne,q)}}}else if(K.visible){const Q=A(y,K,N,U);y.onBeforeShadow(i,y,d,S,D,Q,null),i.renderBufferDirect(S,null,D,Q,y,null),y.onAfterShadow(i,y,d,S,D,Q,null)}}const Z=y.children;for(let D=0,K=Z.length;D<K;D++)E(Z[D],d,S,N,C,U)}function w(y){y.target.removeEventListener("dispose",w);for(const S in l){const N=l[S],C=y.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function Lp(i,e){function t(){let R=!1;const J=new ft;let Y=null;const le=new ft(0,0,0,0);return{setMask:function(ae){Y!==ae&&!R&&(i.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){R=ae},setClear:function(ae,ce,be,Oe,oe){oe===!0&&(ae*=Oe,ce*=Oe,be*=Oe),J.set(ae,ce,be,Oe),le.equals(J)===!1&&(i.clearColor(ae,ce,be,Oe),le.copy(J))},reset:function(){R=!1,Y=null,le.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,Y=null,le=null,ae=null;return{setReversed:function(ce){if(J!==ce){const be=e.get("EXT_clip_control");ce?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),J=ce;const Oe=ae;ae=null,this.setClear(Oe)}},getReversed:function(){return J},setTest:function(ce){ce?pe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!R&&(i.depthMask(ce),Y=ce)},setFunc:function(ce){if(J&&(ce=dc[ce]),le!==ce){switch(ce){case rs:i.depthFunc(i.NEVER);break;case ss:i.depthFunc(i.ALWAYS);break;case as:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case os:i.depthFunc(i.EQUAL);break;case ls:i.depthFunc(i.GEQUAL);break;case cs:i.depthFunc(i.GREATER);break;case ds:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ce}},setLocked:function(ce){R=ce},setClear:function(ce){ae!==ce&&(ae=ce,J&&(ce=1-ce),i.clearDepth(ce))},reset:function(){R=!1,Y=null,le=null,ae=null,J=!1}}}function r(){let R=!1,J=null,Y=null,le=null,ae=null,ce=null,be=null,Oe=null,oe=null;return{setTest:function(we){R||(we?pe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(we){J!==we&&!R&&(i.stencilMask(we),J=we)},setFunc:function(we,Fe,me){(Y!==we||le!==Fe||ae!==me)&&(i.stencilFunc(we,Fe,me),Y=we,le=Fe,ae=me)},setOp:function(we,Fe,me){(ce!==we||be!==Fe||Oe!==me)&&(i.stencilOp(we,Fe,me),ce=we,be=Fe,Oe=me)},setLocked:function(we){R=we},setClear:function(we){oe!==we&&(i.clearStencil(we),oe=we)},reset:function(){R=!1,J=null,Y=null,le=null,ae=null,ce=null,be=null,Oe=null,oe=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let p={},g={},h={},m=new WeakMap,v=[],T=null,f=!1,u=null,M=null,A=null,E=null,w=null,y=null,d=null,S=new Ve(0,0,0),N=0,C=!1,U=null,k=null,Z=null,D=null,K=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,re=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=re>=2);let te=null,ne={};const Se=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),$=new ft().fromArray(Se),fe=new ft().fromArray(Le);function xe(R,J,Y,le){const ae=new Uint8Array(4),ce=i.createTexture();i.bindTexture(R,ce),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<Y;be++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(J+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ce}const Te={};Te[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(bi),Mt(!1),Qe(Ea),pe(i.CULL_FACE),pt(si);function pe(R){p[R]!==!0&&(i.enable(R),p[R]=!0)}function Ce(R){p[R]!==!1&&(i.disable(R),p[R]=!1)}function lt(R,J){return h[R]!==J?(i.bindFramebuffer(R,J),h[R]=J,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Re(R,J){let Y=v,le=!1;if(R){Y=m.get(J),Y===void 0&&(Y=[],m.set(J,Y));const ae=R.textures;if(Y.length!==ae.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,be=ae.length;ce<be;ce++)Y[ce]=i.COLOR_ATTACHMENT0+ce;Y.length=ae.length,le=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,le=!0);le&&i.drawBuffers(Y)}function Ye(R){return T!==R?(i.useProgram(R),T=R,!0):!1}const Ze={[ri]:i.FUNC_ADD,[Dl]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};Ze[Il]=i.MIN,Ze[Ul]=i.MAX;const Ue={[Fl]:i.ZERO,[Ol]:i.ONE,[Bl]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[Wl]:i.SRC_ALPHA_SATURATE,[kl]:i.DST_COLOR,[Gl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[Vl]:i.ONE_MINUS_DST_COLOR,[Hl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[Kl]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(R,J,Y,le,ae,ce,be,Oe,oe,we){if(R===si){f===!0&&(Ce(i.BLEND),f=!1);return}if(f===!1&&(pe(i.BLEND),f=!0),R!==Ll){if(R!==u||we!==C){if((M!==ri||w!==ri)&&(i.blendEquation(i.FUNC_ADD),M=ri,w=ri),we)switch(R){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",R);break}else switch(R){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ba:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ta:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",R);break}A=null,E=null,y=null,d=null,S.set(0,0,0),N=0,u=R,C=we}return}ae=ae||J,ce=ce||Y,be=be||le,(J!==M||ae!==w)&&(i.blendEquationSeparate(Ze[J],Ze[ae]),M=J,w=ae),(Y!==A||le!==E||ce!==y||be!==d)&&(i.blendFuncSeparate(Ue[Y],Ue[le],Ue[ce],Ue[be]),A=Y,E=le,y=ce,d=be),(Oe.equals(S)===!1||oe!==N)&&(i.blendColor(Oe.r,Oe.g,Oe.b,oe),S.copy(Oe),N=oe),u=R,C=!1}function st(R,J){R.side===Qt?Ce(i.CULL_FACE):pe(i.CULL_FACE);let Y=R.side===Ot;J&&(Y=!Y),Mt(Y),R.blending===yi&&R.transparent===!1?pt(si):pt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const le=R.stencilWrite;o.setTest(le),le&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),rt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function Qe(R){R!==Rl?(pe(i.CULL_FACE),R!==k&&(R===Ea?i.cullFace(i.BACK):R===Cl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),k=R}function zt(R){R!==Z&&(W&&i.lineWidth(R),Z=R)}function rt(R,J,Y){R?(pe(i.POLYGON_OFFSET_FILL),(D!==J||K!==Y)&&(D=J,K=Y,a.getReversed()&&(J=-J,Y=-Y),i.polygonOffset(J,Y))):Ce(i.POLYGON_OFFSET_FILL)}function dt(R){R?pe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Nt(R){R===void 0&&(R=i.TEXTURE0+Q-1),te!==R&&(i.activeTexture(R),te=R)}function je(R,J,Y){Y===void 0&&(te===null?Y=i.TEXTURE0+Q-1:Y=te);let le=ne[Y];le===void 0&&(le={type:void 0,texture:void 0},ne[Y]=le),(le.type!==R||le.texture!==J)&&(te!==Y&&(i.activeTexture(Y),te=Y),i.bindTexture(R,J||Te[R]),le.type=R,le.texture=J)}function P(){const R=ne[te];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function tt(){try{i.texSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function ue(){try{i.texSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function Pe(){try{i.texStorage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function O(){try{i.texImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ie(R){return g[R]!==void 0?g[R]:i.getParameter(R)}function j(R,J){g[R]!==J&&(i.pixelStorei(R,J),g[R]=J)}function V(R){$.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function ee(R){fe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),fe.copy(R))}function I(R,J){let Y=l.get(J);Y===void 0&&(Y=new WeakMap,l.set(J,Y));let le=Y.get(R);le===void 0&&(le=i.getUniformBlockIndex(J,R.name),i.uniformBlockBinding(J,le,le),Y.set(R,le))}function H(R,J,Y){const ae=l.get(J).get(R);c[ae]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,Y),c[ae]=Y)}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},g={},te=null,ne={},h={},c={},m=new WeakMap,v=[],T=null,f=!1,u=null,M=null,A=null,E=null,w=null,y=null,d=null,S=new Ve(0,0,0),N=0,C=!1,U=null,k=null,Z=null,D=null,K=null,$.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ce,bindFramebuffer:lt,drawBuffers:Re,useProgram:Ye,setBlending:pt,setMaterial:st,setFlipSided:Mt,setCullFace:Qe,setLineWidth:zt,setPolygonOffset:rt,setScissorTest:dt,activeTexture:Nt,bindTexture:je,unbindTexture:P,compressedTexImage2D:Rt,compressedTexImage3D:et,texImage2D:_,texImage3D:O,pixelStorei:j,getParameter:ie,updateUBOMapping:I,uniformBlockBinding:H,texStorage2D:Pe,texStorage3D:b,texSubImage2D:tt,texSubImage3D:ue,compressedTexSubImage2D:ct,compressedTexSubImage3D:Ae,scissor:V,viewport:ee,reset:se}}function Dp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,p=new WeakMap,g=new Set;let h;const m=new WeakMap,v=new Set,T=new FinalizationRegistry(b=>v.delete(b));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(b,_){return f?new OffscreenCanvas(b,_):gr("canvas")}function M(b,_,O){let ie=1;const j=Pe(b);if((j.width>O||j.height>O)&&(ie=O/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(ie*j.width),ee=Math.floor(ie*j.height);h===void 0&&(h=u(V,ee));const I=_?u(V,ee):h;return I.width=V,I.height=ee,I.getContext("2d").drawImage(b,0,0,V,ee),De("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+ee+")."),I}else return"data"in b&&De("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function A(b){return b.generateMipmaps}function E(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,_,O,ie,j,V=!1){if(b!==null){if(i[b]!==void 0)return i[b];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee;ie&&(ee=e.get("EXT_texture_norm16"),ee||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===i.RED&&(O===i.FLOAT&&(I=i.R32F),O===i.HALF_FLOAT&&(I=i.R16F),O===i.UNSIGNED_BYTE&&(I=i.R8),O===i.UNSIGNED_SHORT&&ee&&(I=ee.R16_EXT),O===i.SHORT&&ee&&(I=ee.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(I=i.R8UI),O===i.UNSIGNED_SHORT&&(I=i.R16UI),O===i.UNSIGNED_INT&&(I=i.R32UI),O===i.BYTE&&(I=i.R8I),O===i.SHORT&&(I=i.R16I),O===i.INT&&(I=i.R32I)),_===i.RG&&(O===i.FLOAT&&(I=i.RG32F),O===i.HALF_FLOAT&&(I=i.RG16F),O===i.UNSIGNED_BYTE&&(I=i.RG8),O===i.UNSIGNED_SHORT&&ee&&(I=ee.RG16_EXT),O===i.SHORT&&ee&&(I=ee.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(I=i.RG8UI),O===i.UNSIGNED_SHORT&&(I=i.RG16UI),O===i.UNSIGNED_INT&&(I=i.RG32UI),O===i.BYTE&&(I=i.RG8I),O===i.SHORT&&(I=i.RG16I),O===i.INT&&(I=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(I=i.RGB8UI),O===i.UNSIGNED_SHORT&&(I=i.RGB16UI),O===i.UNSIGNED_INT&&(I=i.RGB32UI),O===i.BYTE&&(I=i.RGB8I),O===i.SHORT&&(I=i.RGB16I),O===i.INT&&(I=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),O===i.UNSIGNED_INT&&(I=i.RGBA32UI),O===i.BYTE&&(I=i.RGBA8I),O===i.SHORT&&(I=i.RGBA16I),O===i.INT&&(I=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&ee&&(I=ee.RGB16_EXT),O===i.SHORT&&ee&&(I=ee.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(I=i.R11F_G11F_B10F)),_===i.RGBA){const H=V?pr:He.getTransfer(j);O===i.FLOAT&&(I=i.RGBA32F),O===i.HALF_FLOAT&&(I=i.RGBA16F),O===i.UNSIGNED_BYTE&&(I=H===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ee&&(I=ee.RGBA16_EXT),O===i.SHORT&&ee&&(I=ee.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function d(b,_){let O;return b?_===null||_===ln||_===li?O=i.DEPTH24_STENCIL8:_===sn?O=i.DEPTH32F_STENCIL8:_===Ai&&(O=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ln||_===li?O=i.DEPTH_COMPONENT24:_===sn?O=i.DEPTH_COMPONENT32F:_===Ai&&(O=i.DEPTH_COMPONENT16),O}function S(b,_){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==yt&&b.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function N(b){const _=new WeakRef(b);n.get(b).__ref=_,v.add(_),T.register(b,_,_)}function C(b){const _=n.get(b).__ref;_!==void 0&&(v.delete(_),T.unregister(_))}function U(b){Z(b.target)}function k(b){D(b.target)}function Z(b){b.removeEventListener("dispose",U),C(b),Q(b),b.isVideoTexture&&p.delete(b),b.isHTMLTexture&&g.delete(b)}function D(b){b.removeEventListener("dispose",k),C(b),re(b)}function K(){for(const b of v){const _=b.deref();_!==void 0&&(_.isRenderTarget===!0?D(_):Z(_))}v.clear(),g.clear()}function Q(b){const _=n.get(b);if(_.__webglInit===void 0)return;const O=b.source,ie=m.get(O);if(ie){const j=ie[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&W(b),Object.keys(ie).length===0&&m.delete(O)}n.remove(b)}function W(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const O=b.source,ie=m.get(O);delete ie[_.__cacheKey],a.memory.textures--}function re(b){const _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();const O=b.depthTexture;if(O&&O.renderTarget===b&&Z(O),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let V=0;V<_.__webglFramebuffer[j].length;V++)i.deleteFramebuffer(_.__webglFramebuffer[j][V]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const ie=b.textures;for(let j=0,V=ie.length;j<V;j++){const ee=n.get(ie[j]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(ie[j])}n.remove(b)}let q=0;function te(){q=0}function ne(){return q}function Se(b){q=b}function Le(){const b=q;return b>=r.maxTextures&&De("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),q+=1,b}function $(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function fe(b,_){const O=n.get(b);if(b.isVideoTexture&&ct(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const ie=b.image;if(ie===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function xe(b,_){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){st(O,b,_);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function Te(b,_){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){st(O,b,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function pe(b,_){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Mt(O,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const Ce={[us]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[hs]:i.MIRRORED_REPEAT},lt={[yt]:i.NEAREST,[Jl]:i.NEAREST_MIPMAP_NEAREST,[Ni]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},Re={[tc]:i.NEVER,[ko]:i.ALWAYS,[nc]:i.LESS,[Go]:i.LEQUAL,[ic]:i.EQUAL,[Ho]:i.GEQUAL,[rc]:i.GREATER,[sc]:i.NOTEQUAL};function Ye(b,_){if(_.type===sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===Dr||_.magFilter===Ni||_.magFilter===Cn||_.minFilter===Ft||_.minFilter===Dr||_.minFilter===Ni||_.minFilter===Cn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ce[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ce[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ce[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yt||_.minFilter!==Ni&&_.minFilter!==Cn||_.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",U),N(_));const ie=_.source;let j=m.get(ie);j===void 0&&(j={},m.set(ie,j));const V=$(_);if(V!==b.__cacheKey){j[V]===void 0&&(j[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[V].usedTimes++;const ee=j[b.__cacheKey];ee!==void 0&&(j[b.__cacheKey].usedTimes--,ee.usedTimes===0&&W(_)),b.__cacheKey=V,b.__webglTexture=j[V].texture}return O}function Ue(b,_,O){return Math.floor(Math.floor(b/O)/_)}function pt(b,_,O,ie){const V=b.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,ie,_.data);else{V.sort((R,J)=>R.start-J.start);let ee=0;for(let R=1;R<V.length;R++){const J=V[ee],Y=V[R],le=J.start+J.count,ae=Ue(Y.start,_.width,4),ce=Ue(J.start,_.width,4);Y.start<=le+1&&ae===ce&&Ue(Y.start+Y.count-1,_.width,4)===ae?J.count=Math.max(J.count,Y.start+Y.count-J.start):(++ee,V[ee]=Y)}V.length=ee+1;const I=t.getParameter(i.UNPACK_ROW_LENGTH),H=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,J=V.length;R<J;R++){const Y=V[R],le=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),ce=le%_.width,be=Math.floor(le/_.width),Oe=ae,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,ce,be,Oe,oe,O,ie,_.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,I),t.pixelStorei(i.UNPACK_SKIP_PIXELS,H),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function st(b,_,O){let ie=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=i.TEXTURE_3D);const j=Ze(b,_),V=_.source;t.bindTexture(ie,b.__webglTexture,i.TEXTURE0+O);const ee=n.get(V);if(V.version!==ee.__version||j===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const oe=He.getPrimaries(He.workingColorSpace),we=_.colorSpace===Rn?null:He.getPrimaries(_.colorSpace),Fe=_.colorSpace===Rn||oe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let H=M(_.image,!1,r.maxTextureSize);H=Ae(_,H);const se=s.convert(_.format,_.colorSpace),R=s.convert(_.type);let J=y(_.internalFormat,se,R,_.normalized,_.colorSpace,_.isVideoTexture);Ye(ie,_);let Y;const le=_.mipmaps,ae=_.isVideoTexture!==!0,ce=ee.__version===void 0||j===!0,be=V.dataReady,Oe=S(_,H);if(_.isDepthTexture)J=d(_.format===Pn,_.type),ce&&(ae?t.texStorage2D(i.TEXTURE_2D,1,J,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,J,H.width,H.height,0,se,R,null));else if(_.isDataTexture)if(le.length>0){ae&&ce&&t.texStorage2D(i.TEXTURE_2D,Oe,J,le[0].width,le[0].height);for(let oe=0,we=le.length;oe<we;oe++)Y=le[oe],ae?be&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Y.width,Y.height,se,R,Y.data):t.texImage2D(i.TEXTURE_2D,oe,J,Y.width,Y.height,0,se,R,Y.data);_.generateMipmaps=!1}else ae?(ce&&t.texStorage2D(i.TEXTURE_2D,Oe,J,H.width,H.height),be&&pt(_,H,se,R)):t.texImage2D(i.TEXTURE_2D,0,J,H.width,H.height,0,se,R,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ae&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,J,le[0].width,le[0].height,H.depth);for(let oe=0,we=le.length;oe<we;oe++)if(Y=le[oe],_.format!==an)if(se!==null)if(ae){if(be)if(_.layerUpdates.size>0){const Fe=Qa(Y.width,Y.height,_.format,_.type);for(const me of _.layerUpdates){const $e=Y.data.subarray(me*Fe/Y.data.BYTES_PER_ELEMENT,(me+1)*Fe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,me,Y.width,Y.height,1,se,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,H.depth,se,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,J,Y.width,Y.height,H.depth,0,Y.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Y.width,Y.height,H.depth,se,R,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,J,Y.width,Y.height,H.depth,0,se,R,Y.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ae&&ce&&t.texStorage2D(i.TEXTURE_2D,Oe,J,le[0].width,le[0].height);for(let oe=0,we=le.length;oe<we;oe++)Y=le[oe],_.format!==an?se!==null?ae?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Y.width,Y.height,se,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,J,Y.width,Y.height,0,Y.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?be&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Y.width,Y.height,se,R,Y.data):t.texImage2D(i.TEXTURE_2D,oe,J,Y.width,Y.height,0,se,R,Y.data)}else if(_.isDataArrayTexture)if(ae){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,J,H.width,H.height,H.depth),be)if(_.layerUpdates.size>0){const oe=Qa(H.width,H.height,_.format,_.type);for(const we of _.layerUpdates){const Fe=H.data.subarray(we*oe/H.data.BYTES_PER_ELEMENT,(we+1)*oe/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,H.width,H.height,1,se,R,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,se,R,H.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,J,H.width,H.height,H.depth,0,se,R,H.data);else if(_.isData3DTexture)ae?(ce&&t.texStorage3D(i.TEXTURE_3D,Oe,J,H.width,H.height,H.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,se,R,H.data)):t.texImage3D(i.TEXTURE_3D,0,J,H.width,H.height,H.depth,0,se,R,H.data);else if(_.isFramebufferTexture){if(ce)if(ae)t.texStorage2D(i.TEXTURE_2D,Oe,J,H.width,H.height);else{let oe=H.width,we=H.height;for(let Fe=0;Fe<Oe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,J,oe,we,0,se,R,null),oe>>=1,we>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),H.parentNode!==oe){oe.appendChild(H),g.add(_),oe.onpaint=we=>{const Fe=we.changedElements;for(const me of g)Fe.includes(me.image)&&(me.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,H);else{const Fe=i.RGBA,me=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,me,$e,H)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(ae&&ce){const oe=Pe(le[0]);t.texStorage2D(i.TEXTURE_2D,Oe,J,oe.width,oe.height)}for(let oe=0,we=le.length;oe<we;oe++)Y=le[oe],ae?be&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,se,R,Y):t.texImage2D(i.TEXTURE_2D,oe,J,se,R,Y);_.generateMipmaps=!1}else if(ae){if(ce){const oe=Pe(H);t.texStorage2D(i.TEXTURE_2D,Oe,J,oe.width,oe.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,R,H)}else t.texImage2D(i.TEXTURE_2D,0,J,se,R,H);A(_)&&_.mipmapsAutoUpdate===!0&&E(ie),ee.__version=V.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Mt(b,_,O){if(_.image.length!==6)return;const ie=Ze(b,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const V=n.get(j);if(j.version!==V.__version||ie===!0){t.activeTexture(i.TEXTURE0+O);const ee=He.getPrimaries(He.workingColorSpace),I=_.colorSpace===Rn?null:He.getPrimaries(_.colorSpace),H=_.colorSpace===Rn||ee===I?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const se=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,J=[];for(let me=0;me<6;me++)!se&&!R?J[me]=M(_.image[me],!0,r.maxCubemapSize):J[me]=R?_.image[me].image:_.image[me],J[me]=Ae(_,J[me]);const Y=J[0],le=s.convert(_.format,_.colorSpace),ae=s.convert(_.type);let ce=y(_.internalFormat,le,ae,_.normalized,_.colorSpace);const be=_.isVideoTexture!==!0,Oe=V.__version===void 0||ie===!0,oe=j.dataReady;let we=S(_,Y);Ye(i.TEXTURE_CUBE_MAP,_);let Fe;if(_.isDepthTexture){if(ce=d(_.format===Pn,_.type),Oe)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,Y.width,Y.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,Y.width,Y.height,0,le,ae,null)}else if(se){be&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ce,Y.width,Y.height);for(let me=0;me<6;me++){Fe=J[me].mipmaps;for(let $e=0;$e<Fe.length;$e++){const _t=Fe[$e];_.format!==an?le!==null?be?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,_t.width,_t.height,le,_t.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,ce,_t.width,_t.height,0,_t.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,0,0,_t.width,_t.height,le,ae,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e,ce,_t.width,_t.height,0,le,ae,_t.data)}}}else{if(Fe=_.mipmaps,be&&Oe){Fe.length>0&&we++;const me=Pe(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ce,me.width,me.height)}for(let me=0;me<6;me++)if(R){be?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,J[me].width,J[me].height,le,ae,J[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,J[me].width,J[me].height,0,le,ae,J[me].data);for(let $e=0;$e<Fe.length;$e++){const vn=Fe[$e].image[me].image;be?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,vn.width,vn.height,le,ae,vn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,ce,vn.width,vn.height,0,le,ae,vn.data)}}else{be?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,le,ae,J[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,le,ae,J[me]);for(let $e=0;$e<Fe.length;$e++){const _t=Fe[$e];be?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,0,0,le,ae,_t.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,$e+1,ce,le,ae,_t.image[me])}}}A(_)&&_.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),V.__version=j.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Qe(b,_,O,ie,j,V){const ee=s.convert(O.format,O.colorSpace),I=s.convert(O.type),H=y(O.internalFormat,ee,I,O.normalized,O.colorSpace),se=n.get(_),R=n.get(O);if(R.__renderTarget=_,!se.__hasExternalTextures){const J=Math.max(1,_.width>>V),Y=Math.max(1,_.height>>V);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,V,H,J,Y,_.depth,0,ee,I,null):t.texImage2D(j,V,H,J,Y,0,ee,I,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,R.__webglTexture,0,tt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,R.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(b,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const ie=_.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,V=d(_.stencilBuffer,j),ee=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(_),V,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(_),V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,b)}else{const ie=_.textures;for(let j=0;j<ie.length;j++){const V=ie[j],ee=s.convert(V.format,V.colorSpace),I=s.convert(V.type),H=y(V.internalFormat,ee,I,V.normalized,V.colorSpace);ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(_),H,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(_),H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(b,_,O){const ie=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(_.depthTexture);j.__renderTarget=_;const V=ie?_.depthTexture.image[0]:_.depthTexture.image;(!j.__webglTexture||V.width!==_.width||V.height!==_.height)&&(V.width=_.width,V.height=_.height,_.depthTexture.needsUpdate=!0),ie?pe(_.depthTexture,0):fe(_.depthTexture,0);const ee=j.__webglTexture,I=tt(_),H=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,se=_.depthTexture.format===Pn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Dn)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,H,ee,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,se,H,ee,0);else if(_.depthTexture.format===Pn)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,H,ee,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,se,H,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(b){const _=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const ie=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ie){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=ie}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let ie=0;ie<6;ie++)rt(_.__webglFramebuffer[ie],b,ie);else b.texture.mipmaps.length>0?rt(_.__webglFramebuffer[0],b,0):rt(_.__webglFramebuffer,b,0);else if(O){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=i.createRenderbuffer(),zt(_.__webglDepthbuffer[ie],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),zt(_.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,V)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(b,_,O){const ie=n.get(b);_!==void 0&&Qe(ie.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&dt(b)}function je(b){const _=b.texture,O=n.get(b),ie=n.get(_);b.addEventListener("dispose",k),N(b);const j=b.textures,V=b.isWebGLCubeRenderTarget===!0,ee=j.length>1;if(ee||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=_.version,a.memory.textures++),V){O.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps.length>0){O.__webglFramebuffer[I]=[];for(let H=0;H<_.mipmaps.length;H++)O.__webglFramebuffer[I][H]=i.createFramebuffer()}else O.__webglFramebuffer[I]=i.createFramebuffer()}else{if(_.mipmaps.length>0){O.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)O.__webglFramebuffer[I]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ee)for(let I=0,H=j.length;I<H;I++){const se=n.get(j[I]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ue(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let I=0;I<j.length;I++){const H=j[I];O.__webglColorRenderbuffer[I]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[I]);const se=s.convert(H.format,H.colorSpace),R=s.convert(H.type),J=y(H.internalFormat,se,R,H.normalized,H.colorSpace,b.isXRRenderTarget===!0),Y=tt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,O.__webglColorRenderbuffer[I])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)Qe(O.__webglFramebuffer[I][H],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,H);else Qe(O.__webglFramebuffer[I],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);A(_)?E(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ee){for(let I=0,H=j.length;I<H;I++){const se=j[I],R=n.get(se);let J=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),Ye(J,se),Qe(O.__webglFramebuffer,b,se,i.COLOR_ATTACHMENT0+I,J,0),A(se)&&E(J)}t.unbindTexture()}else{let I=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(I=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(I,ie.__webglTexture),Ye(I,_),_.mipmaps.length>0)for(let H=0;H<_.mipmaps.length;H++)Qe(O.__webglFramebuffer[H],b,_,i.COLOR_ATTACHMENT0,I,H);else Qe(O.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,I,0);A(_)?E(I):_.mipmaps.length>0&&i.texParameteri(I,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&dt(b)}function P(b){const _=b.textures;for(let O=0,ie=_.length;O<ie;O++){const j=_[O];if(A(j)&&j.mipmapsAutoUpdate===!0){const V=w(b),ee=n.get(j).__webglTexture;t.bindTexture(V,ee),E(V),t.unbindTexture()}}}const Rt=[];function et(b){if(b.samples>0){if(ue(b)===!1){const _=b.textures,O=b.width,ie=b.height;let j=i.COLOR_BUFFER_BIT;const V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(b),I=_.length>1;if(I)for(let se=0;se<_.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let se=0;se<_.length;se++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),I){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[se]);const R=n.get(_[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,O,ie,0,0,O,ie,j,i.NEAREST),c===!0&&(Rt.length=0,Rt.push(i.COLOR_ATTACHMENT0+se),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Rt.push(V),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),I)for(let se=0;se<_.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ee.__webglColorRenderbuffer[se]);const R=n.get(_[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function tt(b){return Math.min(r.maxSamples,b.samples)}function ue(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(b){const _=a.render.frame;p.get(b)!==_&&(p.set(b,_),b.update())}function Ae(b,_){const O=b.colorSpace,ie=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==fr&&O!==Rn&&(He.getTransfer(O)===Je?(ie!==an||j!==Wt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),_}function Pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Se,this.setTexture2D=fe,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=pe,this.rebindTextures=Nt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ue,this.dispose=K}function Np(i,e){function t(n,r=Rn){let s;const a=He.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===$s)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Js)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===No)return i.BYTE;if(n===Io)return i.SHORT;if(n===Ai)return i.UNSIGNED_SHORT;if(n===Zs)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Oo)return i.ALPHA;if(n===Bo)return i.RGB;if(n===an)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===Pn)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===Qs)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===js)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===sr||n===ar||n===or||n===lr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fs||n===ps||n===ms||n===gs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ps)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_s||n===xs||n===vs||n===Ss||n===Ms||n===ur||n===Es)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_s||n===xs)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ss)return s.COMPRESSED_R11_EAC;if(n===Ms)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return s.COMPRESSED_RG11_EAC;if(n===Es)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ys||n===bs||n===Ts||n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ls||n===Ds||n===Ns||n===Is||n===Us||n===Fs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ys)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ts)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===As)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ps)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ls)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ds)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ns)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Is)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Us)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fs)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Os||n===Bs||n===zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Os)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gs||n===Hs||n===hr||n===ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Fp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:Ip,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Op extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,p=null,g=null,h=null,m=null,v=null;const T=typeof XRWebGLBinding<"u",f=new Fp,u={},M=t.getContextAttributes();let A=null,E=null;const w=[],y=[],d=new We;let S=null,N=null;const C=new Jt;C.viewport=new ft;const U=new Jt;U.viewport=new ft;const k=[C,U],Z=new Yc;let D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=w[$];return fe===void 0&&(fe=new Hr,w[$]=fe),fe.getHandSpace()};function Q($){const fe=y.indexOf($.inputSource);if(fe===-1)return;const xe=w[fe];xe!==void 0&&(xe.update($.inputSource,$.frame,l||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",re);for(let $=0;$<w.length;$++){const fe=y[$];fe!==null&&(y[$]=null,w[$].disconnect(fe))}D=null,K=null,f.reset();for(const $ in u)delete u[$];if(e.setRenderTarget(A),m=null,h=null,g=null,r=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(d.width,d.height,!1),N!==null){const $=N.camera;$.fov=N.fov,$.zoom=N.zoom,$.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(d),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,pe=null;M.depth&&(pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?Pn:Dn,Te=M.stencil?li:ln);const Ce={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};g=this.getBinding(),h=g.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new on(h.textureWidth,h.textureHeight,{format:an,type:Wt,depthTexture:new ci(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new on(m.framebufferWidth,m.framebufferHeight,{format:an,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function re($){for(let fe=0;fe<$.removed.length;fe++){const xe=$.removed[fe],Te=y.indexOf(xe);Te>=0&&(y[Te]=null,w[Te].disconnect(xe))}for(let fe=0;fe<$.added.length;fe++){const xe=$.added[fe];let Te=y.indexOf(xe);if(Te===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=y.length){y.push(xe),Te=Ce;break}else if(y[Ce]===null){y[Ce]=xe,Te=Ce;break}if(Te===-1)break}const pe=w[Te];pe&&pe.connect(xe)}}function q($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let fe=$.near,xe=$.far;f.texture!==null&&(f.depthNear>0&&(fe=f.depthNear),f.depthFar>0&&(xe=f.depthFar)),Z.near=U.near=C.near=fe,Z.far=U.far=C.far=xe,(D!==Z.near||K!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),D=Z.near,K=Z.far),Z.layers.mask=$.layers.mask|6,C.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;const Te=$.parent,pe=Z.cameras;q(Z,Te);for(let Ce=0;Ce<pe.length;Ce++)q(pe[Ce],Te);Z.projectionMatrix.copy(C.projectionMatrix),Z.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&$.isPerspectiveCamera&&(N={camera:$,fov:$.fov,zoom:$.zoom}),te($,Z,Te)};function te($,fe,xe){xe===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Z)},this.getCameraTexture=function($){return u[$]};let ne=null;function Se($,fe){if(p=fe.getViewerPose(l||a),v=fe,p!==null){const xe=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Te=!1;xe.length!==Z.cameras.length&&(Z.cameras.length=0,Te=!0);for(let Re=0;Re<xe.length;Re++){const Ye=xe[Re];let Ze=null;if(m!==null)Ze=m.getViewport(Ye);else{const pt=g.getViewSubImage(h,Ye);Ze=pt.viewport,Re===0&&(e.setRenderTargetTextures(E,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(E))}let Ue=k[Re];Ue===void 0&&(Ue=new Jt,Ue.layers.enable(Re),Ue.viewport=new ft,k[Re]=Ue),Ue.matrix.fromArray(Ye.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ye.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Re===0&&(Z.matrix.copy(Ue.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Te===!0&&Z.cameras.push(Ue)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=n.getBinding();const Re=g.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&f.init(Re,r.renderState)}if(pe&&pe.includes("camera-access")&&T){e.state.unbindTexture(),g=n.getBinding();for(let Re=0;Re<xe.length;Re++){const Ye=xe[Re].camera;if(Ye){let Ze=u[Ye];Ze||(Ze=new Jo,u[Ye]=Ze);const Ue=g.getCameraImage(Ye);Ze.sourceTexture=Ue}}}}for(let xe=0;xe<w.length;xe++){const Te=y[xe],pe=w[xe];Te!==null&&pe!==void 0&&pe.update(Te,fe,l||a)}ne&&ne($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Le=new el;Le.setAnimationLoop(Se),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const Bp=new ot,dl=new Ie;dl.set(-1,0,0,0,1,0,0,0,1);function zp(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Qo(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,M,A,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(f,u):u.isMeshLambertMaterial?(s(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(f,u),g(f,u)):u.isMeshPhongMaterial?(s(f,u),p(f,u),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(f,u),h(f,u),u.isMeshPhysicalMaterial&&m(f,u,E)):u.isMeshMatcapMaterial?(s(f,u),v(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),T(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(a(f,u),u.isLineDashedMaterial&&o(f,u)):u.isPointsMaterial?c(f,u,M,A):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Ot&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Ot&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const M=e.get(u),A=M.envMap,E=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(dl),f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function a(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function o(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,M,A){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*M,f.scale.value=A*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function p(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function g(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,M){f.ior.value=u.ior,u.diffuseRoughness>0&&(f.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=u.diffuseRoughnessMap,t(u.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.retroreflectivity>0&&(f.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,u){u.matcap&&(f.matcap.value=u.matcap)}function T(f,u){const M=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gp(i,e,t,n){let r={},s={};function a(M,A){const E=A.program;n.uniformBlockBinding(M,E,r[M.id])}function o(M,A){let E=r[M.id];E===void 0&&(v(M),E=c(M),r[M.id]=E,M.addEventListener("dispose",f));const w=A.program;n.updateUBOMapping(M,w);const y=e.render.frame;s[M.id]!==y&&(l(M),s[M.id]=y)}function c(M){const A=i.createBuffer(),E=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){const A=r[M.id],E=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,d=E.length;y<d;y++){const S=E[y];if(Array.isArray(S))for(let N=0,C=S.length;N<C;N++)p(S[N],y,N,w);else p(S,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,E,w){if(h(M,A,E,w)===!0){const y=M.__offset,d=M.value;if(Array.isArray(d)){let S=0;for(let N=0;N<d.length;N++){const C=d[N],U=T(C,!0);g(C,M.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else g(d,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,A,E){typeof M=="number"||typeof M=="boolean"?A[E]=M:M.isMatrix3?(A[E]=M.elements[0],A[E+1]=M.elements[1],A[E+2]=M.elements[2],A[E+3]=0,A[E+4]=M.elements[3],A[E+5]=M.elements[4],A[E+6]=M.elements[5],A[E+7]=0,A[E+8]=M.elements[6],A[E+9]=M.elements[7],A[E+10]=M.elements[8],A[E+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-E),E):M.toArray(A,E)}function h(M,A,E,w){const y=M.value,d=A+"_"+E;if(Array.isArray(y)){w[d]===void 0&&(w[d]=[]);const S=w[d];let N=!1;for(let C=0;C<y.length;C++)m(y[C],S,C)===!0&&(N=!0);return N}return m(y,w,d)}function m(M,A,E){if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:ArrayBuffer.isView(M)?A[E]=M.slice():A[E]=M.clone(),!0;{const w=A[E];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function v(M){const A=M.uniforms;let E=0;const w=16;for(let d=0,S=A.length;d<S;d++){const N=Array.isArray(A[d])?A[d]:[A[d]];for(let C=0,U=N.length;C<U;C++){const k=N[C],Z=Array.isArray(k.value)?k.value:[k.value],D=Array.isArray(A[d])||Array.isArray(k.value);let K=E;for(let W=0,re=Z.length;W<re;W++){const q=Z[W],te=T(q,D),ne=E%w,Se=ne%te.boundary,Le=ne+Se;E+=Se,Le!==0&&w-Le<te.storage&&(E+=w-Le),W===0&&(K=E),E+=te.storage}const Q=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new Q((E-K)/Float32Array.BYTES_PER_ELEMENT),k.__offset=K}}const y=E%w;return y>0&&(E+=w-y),M.__size=E,M.__cache={},this}function T(M,A){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):De("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(M){const A=M.target;A.removeEventListener("dispose",f),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function u(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:u}}const Hp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function kp(){return nn===null&&(nn=new Fc(Hp,16,16,Hn,cn),nn.name="DFG_LUT",nn.minFilter=Ft,nn.magFilter=Ft,nn.wrapS=gn,nn.wrapT=gn,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class Vp{constructor(e={}){const{canvas:t=lc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Wt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const T=m,f=new Set([ea,js,Qs]),u=new Set([Wt,ln,Ai,li,$s,Js]),M=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,y=null;const d=[],S=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1,k=null,Z=null,D=null,K=null;this._outputColorSpace=Vt;let Q=0,W=0,re=null,q=-1,te=null;const ne=new ft,Se=new ft;let Le=null;const $=new Ve(0);let fe=0,xe=t.width,Te=t.height,pe=1,Ce=null,lt=null;const Re=new ft(0,0,xe,Te),Ye=new ft(0,0,xe,Te);let Ze=!1;const Ue=new _r,pt=new aa;let st=!1,Mt=!1;const Qe=new ot,zt=new G,rt=new ft,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function je(){return re===null?pe:1}let P=n;function Rt(x,L){return t.getContext(x,L)}let et,tt,ue,ct,Ae,Pe,b,_,O,ie,j,V,ee,I,H,se,R,J,Y,le,ae,ce,be;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ks}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",me,!1),P===null){const L="webgl2";if(P=Rt(L,x),P===null)throw Rt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(x){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),qe("WebGLRenderer: "+x.message),x}function Oe(){et=new Xh(P),et.init(),ae=new Np(P,et),tt=new Ih(P,et,e,ae),ue=new Lp(P,et),tt.reversedDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),Z=P.createFramebuffer(),D=P.createFramebuffer(),K=P.createFramebuffer(),ct=new Kh(P),Ae=new _p,Pe=new Dp(P,et,ue,Ae,tt,ae,ct),b=new Wh(C),_=new $c(P),ce=new Dh(P,_),O=new qh(P,_,ct,ce),ie=new $h(P,O,_,ce,ct),J=new Zh(P,tt,Pe),H=new Uh(Ae),j=new gp(C,b,et,tt,ce,H),V=new zp(C,Ae),ee=new vp,I=new Tp(et),R=new Lh(C,b,ue,ie,v,c),se=new Pp(C,ie,tt),be=new Gp(P,ct,tt,ue),Y=new Nh(P,et,ct),le=new Yh(P,et,ct),ct.programs=j.programs,C.capabilities=tt,C.extensions=et,C.properties=Ae,C.renderLists=ee,C.shadowMap=se,C.state=ue,C.info=ct}T!==Wt&&(N=new Qh(T,t.width,t.height,o,r,s));const oe=new Op(C,P);this.xr=oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(x){x!==void 0&&(pe=x,this.setSize(xe,Te,!1))},this.getSize=function(x){return x.set(xe,Te)},this.setSize=function(x,L,X=!0){if(oe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=x,Te=L,t.width=Math.floor(x*pe),t.height=Math.floor(L*pe),X===!0&&(t.style.width=x+"px",t.style.height=L+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(xe*pe,Te*pe).floor()},this.setDrawingBufferSize=function(x,L,X){xe=x,Te=L,pe=X,t.width=Math.floor(x*X),t.height=Math.floor(L*X),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(T===Wt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,L,X,B){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,L,X,B),ue.viewport(ne.copy(Re).multiplyScalar(je()).round())},this.getScissor=function(x){return x.copy(Ye)},this.setScissor=function(x,L,X,B){x.isVector4?Ye.set(x.x,x.y,x.z,x.w):Ye.set(x,L,X,B),ue.scissor(Se.copy(Ye).multiplyScalar(je()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(x){ue.setScissorTest(Ze=x)},this.setOpaqueSort=function(x){Ce=x},this.setTransparentSort=function(x){lt=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,X=!0){let B=0;if(x){let z=!1;if(re!==null){const he=re.texture.format;z=f.has(he)}if(z){const he=re.texture.type,ve=u.has(he),de=R.getClearColor(),_e=R.getClearAlpha(),ye=de.r,Ne=de.g,ze=de.b;ve?(M[0]=ye,M[1]=Ne,M[2]=ze,M[3]=_e,P.clearBufferuiv(P.COLOR,0,M)):(A[0]=ye,A[1]=Ne,A[2]=ze,A[3]=_e,P.clearBufferiv(P.COLOR,0,A))}else B|=P.COLOR_BUFFER_BIT}L&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),R.dispose(),ee.dispose(),I.dispose(),Pe.dispose(),Ae.dispose(),b.dispose(),ie.dispose(),O.dispose(),ce.dispose(),be.dispose(),j.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ua),oe.removeEventListener("sessionend",ha),Nn.stop()};function we(x){x.preventDefault(),Ca("WebGLRenderer: Context Lost."),U=!0}function Fe(){Ca("WebGLRenderer: Context Restored."),U=!1;const x=ct.autoReset,L=se.enabled,X=se.autoUpdate,B=se.needsUpdate,z=se.type;Oe(),ct.autoReset=x,se.enabled=L,se.autoUpdate=X,se.needsUpdate=B,se.type=z}function me(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $e(x){const L=x.target;L.removeEventListener("dispose",$e),_t(L)}function _t(x){vn(x),Ae.remove(x)}function vn(x){const L=Ae.get(x).programs;L!==void 0&&(L.forEach(function(X){j.releaseProgram(X)}),x.isShaderMaterial&&j.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,X,B,z,he){L===null&&(L=dt);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=fl(x,L,X,B,z);ue.setMaterial(B,ve);let _e=X.index,ye=1;if(B.wireframe===!0){if(_e=O.getWireframeAttribute(X),_e===void 0)return;ye=2}const Ne=X.drawRange,ze=X.attributes.position;let Me=Ne.start*ye,Ge=(Ne.start+Ne.count)*ye;he!==null&&(Me=Math.max(Me,he.start*ye),Ge=Math.min(Ge,(he.start+he.count)*ye)),_e!==null?(Me=Math.max(Me,0),Ge=Math.min(Ge,_e.count)):ze!=null&&(Me=Math.max(Me,0),Ge=Math.min(Ge,ze.count));const ut=Ge-Me;if(ut<0||ut===1/0)return;ce.setup(z,B,de,X,_e);let it,nt=Y;if(_e!==null&&(it=_.get(_e),nt=le,nt.setIndex(it)),z.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*je()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(z.isLine){let bt=B.linewidth;bt===void 0&&(bt=1),ue.setLineWidth(bt*je()),z.isLineSegments?nt.setMode(P.LINES):z.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else z.isPoints?nt.setMode(P.POINTS):z.isSprite&&nt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const bt=z._multiDrawStarts,Ee=z._multiDrawCounts,Ct=z._multiDrawCount,Ke=_e?_.get(_e).bytesPerElement:1,In=Ae.get(B).currentProgram.getUniforms();for(let Tt=0;Tt<Ct;Tt++)In.setValue(P,"_gl_DrawID",Tt),nt.render(bt[Tt]/Ke,Ee[Tt])}else if(z.isInstancedMesh)nt.renderInstances(Me,ut,z.count);else if(X.isInstancedBufferGeometry){const bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,bt);nt.renderInstances(Me,ut,Ee)}else nt.render(Me,ut)};function da(x,L,X,B){k!==null&&x.isNodeMaterial&&k.setObject(B,x),st===!0&&H.setState(x,X,!1),x.transparent===!0&&x.side===Qt&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,pi(x,L,B),x.side=Gn,x.needsUpdate=!0,pi(x,L,B),x.side=Qt):pi(x,L,B)}this.compile=function(x,L,X=null){X===null&&(X=x),k!==null&&k.renderStart(x,L,X),y=I.get(X),y.init(L),S.push(y),X.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),x!==X&&x.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(y.pushLight(z),z.castShadow&&y.pushShadow(z))}),y.setupLights(),k!==null&&k.updateLights(y.state.lightsArray),Mt=this.localClippingEnabled,st=H.init(this.clippingPlanes,Mt),st===!0&&H.setGlobalState(this.clippingPlanes,L),k!==null&&se.render(y.state.shadowsArray,X,L);const B=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const de=he[ve];da(de,X,L,z),B.add(de)}else da(he,X,L,z),B.add(he)}),y=S.pop(),k!==null&&k.renderEnd(),B},this.compileAsync=function(x,L,X=null){const B=this.compile(x,L,X);return new Promise(z=>{function he(){if(B.forEach(function(ve){const _e=Ae.get(ve).currentProgram;(_e===void 0||_e.isReady())&&B.delete(ve)}),B.size===0){z(x);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ar=null;function ul(x){Ar&&Ar(x)}function ua(){Nn.stop()}function ha(){Nn.start()}const Nn=new el;Nn.setAnimationLoop(ul),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(x){Ar=x,oe.setAnimationLoop(x),x===null?Nn.stop():Nn.start()},oe.addEventListener("sessionstart",ua),oe.addEventListener("sessionend",ha),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(x,L);const X=oe.enabled===!0&&oe.isPresenting===!0,B=N!==null&&(re===null||X)&&N.begin(C,re);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(L),L=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,re),y=I.get(x,S.length),y.init(L),y.state.textureUnits=Pe.getTextureUnits(),S.push(y),Qe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?pt.setFromArrayCamera(L):Ue.setFromProjectionMatrix(Qe,en,L.reversedDepth),Mt=this.localClippingEnabled,st=H.init(this.clippingPlanes,Mt),w=ee.get(x,d.length),w.init(),d.push(w),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const ve=C.xr.getDepthSensingMesh();ve!==null&&wr(ve,L,-1/0,C.sortObjects)}wr(x,L,0,C.sortObjects),w.finish(),k!==null&&k.updateLights(y.state.lightsArray),C.sortObjects===!0&&w.sort(Ce,lt),Nt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Nt&&R.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),st===!0&&H.beginShadows();const z=y.state.shadowsArray;if(se.render(z,x,L),st===!0&&H.endShadows(),(B&&N.hasRenderPass())===!1){const ve=w.opaque,de=w.transmissive;if(y.setupLights(),L.isArrayCamera){const _e=L.cameras;if(de.length>0)for(let ye=0,Ne=_e.length;ye<Ne;ye++){const ze=_e[ye];pa(ve,de,x,ze)}Nt&&R.render(x);for(let ye=0,Ne=_e.length;ye<Ne;ye++){const ze=_e[ye];fa(w,x,ze,ze.viewport)}}else de.length>0&&pa(ve,de,x,L),Nt&&R.render(x),fa(w,x,L)}re!==null&&W===0&&(Pe.updateMultisampleRenderTarget(re),Pe.updateRenderTargetMipmap(re)),B&&N.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),ce.resetDefaultState(),q=-1,te=null,S.pop(),S.length>0?(y=S[S.length-1],Pe.setTextureUnits(y.state.textureUnits),st===!0&&H.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,d.pop(),d.length>0?w=d[d.length-1]:w=null,k!==null&&k.renderEnd()};function wr(x,L,X,B){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){const ve=L.isArrayCamera?pt:Ue;if(!x.frustumCulled||x.intersectsFrustum(ve)){B&&rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Qe);const de=ie.update(x),_e=x.material;_e.visible&&w.push(x,de,_e,X,rt.z,null,L)}}else if(x.isMesh||x.isLine||x.isPoints){const ve=L.isArrayCamera?pt:Ue;if(!x.frustumCulled||x.intersectsFrustum(ve)){const de=ie.update(x),_e=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),rt.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),rt.copy(de.boundingSphere.center)),rt.applyMatrix4(x.matrixWorld).applyMatrix4(Qe)),Array.isArray(_e)){const ye=de.groups;for(let Ne=0,ze=ye.length;Ne<ze;Ne++){const Me=ye[Ne],Ge=_e[Me.materialIndex];Ge&&Ge.visible&&w.push(x,de,Ge,X,rt.z,Me,L)}}else _e.visible&&w.push(x,de,_e,X,rt.z,null,L)}}}const he=x.children;for(let ve=0,de=he.length;ve<de;ve++)wr(he[ve],L,X,B)}function fa(x,L,X,B){const{opaque:z,transmissive:he,transparent:ve}=x;y.setupLightsView(X),st===!0&&H.setGlobalState(C.clippingPlanes,X),B&&ue.viewport(ne.copy(B)),z.length>0&&Li(z,L,X),he.length>0&&Li(he,L,X),ve.length>0&&Li(ve,L,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function pa(x,L,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[B.id]===void 0){const Me=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[B.id]=new on(1,1,{generateMipmaps:!0,type:Me?cn:Wt,minFilter:Cn,samples:Math.max(4,tt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const he=y.state.transmissionRenderTarget[B.id],ve=B.viewport||ne;he.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);const de=C.getRenderTarget(),_e=C.getActiveCubeFace(),ye=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor($),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Nt&&R.render(X);const Ne=C.toneMapping;C.toneMapping=_n;const ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),y.setupLightsView(B),st===!0&&H.setGlobalState(C.clippingPlanes,B),Li(x,X,B),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Ge=0,ut=L.length;Ge<ut;Ge++){const it=L[Ge],{object:nt,geometry:bt,material:Ee,group:Ct}=it;if(Ee.side===Qt&&nt.layers.test(B.layers)){const Ke=Ee.side;Ee.side=Ot,Ee.needsUpdate=!0,ma(nt,X,B,bt,Ee,Ct),Ee.side=Ke,Ee.needsUpdate=!0,Me=!0}}Me===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he))}C.setRenderTarget(de,_e,ye),C.setClearColor($,fe),ze!==void 0&&(B.viewport=ze),C.toneMapping=Ne}function Li(x,L,X){const B=L.isScene===!0?L.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const ve=x[z],{object:de,geometry:_e,group:ye}=ve;let Ne=ve.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),de.layers.test(X.layers)&&ma(de,L,X,_e,Ne,ye)}}function ma(x,L,X,B,z,he){k!==null&&z.isNodeMaterial&&k.setObject(x,z),x.onBeforeRender(C,L,X,B,z,he),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(C,L,X,B,x,he),z.transparent===!0&&z.side===Qt&&z.forceSinglePass===!1?(z.side=Ot,z.needsUpdate=!0,C.renderBufferDirect(X,L,B,z,x,he),z.side=Gn,z.needsUpdate=!0,C.renderBufferDirect(X,L,B,z,x,he),z.side=Qt):C.renderBufferDirect(X,L,B,z,x,he),x.onAfterRender(C,L,X,B,z,he)}function ga(x){let L=0;for(const X of x)X.texture!==null&&L++;return L}function pi(x,L,X){L.isScene!==!0&&(L=dt);const B=Ae.get(x),z=y.state.lights,he=y.state.shadowsArray,ve=z.state.version,de=j.getParameters(x,z.state,he,L,X,y.state.lightProbeGridArray),_e=j.getProgramCacheKey(de);let ye=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=b.get(x.envMap||B.environment,Ne),B.envMapRotation=B.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",$e),ye=new Map,B.programs=ye,B.programVariants=new Map);let ze=ye.get(_e);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===ve)return xa(x,de),ze}else de.uniforms=j.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,X,de),x.onBeforeCompile(de,C),ze=j.acquireProgram(de,_e),ye.set(_e,ze),B.uniforms=de.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=H.uniform),xa(x,de),B.needsLights=ml(x),B.lightsStateVersion=ve,B.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.sunLights.value=z.state.sun,Me.sunLightShadows.value=z.state.sunShadow,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.sunShadowMatrix.value=z.state.sunShadowMatrix,Me.sunShadowCascade.value=z.state.sunShadowCascade,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=ga(y.state.lightProbeGridArray),B.currentProgram=ze,B.uniformsList=null,ze}function hl(x,L,X,B,z){const he=Ae.get(x),ve=he.currentProgram.id+","+B+","+z;let de=he.programVariants.get(ve);return de===void 0?(de=pi(x,L,X),he.programVariants.set(ve,de)):(he.currentProgram=de,he.uniformsList=null,he.outputColorSpace=B,he.toneMapping=z),de}function _a(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=dr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function xa(x,L){const X=Ae.get(x);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function fl(x,L,X,B,z){L.isScene!==!0&&(L=dt),Pe.resetTextureUnits();const he=L.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,de=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:He.workingColorSpace,_e=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,ye=b.get(B.envMap||ve,_e),Ne=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!X.morphAttributes.position,Ge=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let it=_n;B.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(it=C.toneMapping);const nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=nt!==void 0?nt.length:0,Ee=Ae.get(B),Ct=y.state.lights;if(st===!0&&(Mt===!0||x!==te)){const at=x===te&&B.id===q;H.setState(B,x,at)}let Ke=!1,In=!1;B.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Ct.state.version||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==ye||B.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==H.numPlanes||Ee.numIntersection!==H.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==ze||Ee.morphTargets!==Me||Ee.morphNormals!==Ge||Ee.morphColors!==ut||Ee.morphTargetsCount!==bt||Ee.numLightProbeGrids!==ga(y.state.lightProbeGridArray)?Ke=!0:(Ee.outputColorSpace!==de||Ee.toneMapping!==it)&&(In=!0):(Ke=!0,Ee.__version=B.version);let Tt=Ee.currentProgram;(Ke===!0||In===!0)&&(Tt=In===!0?hl(B,L,z,de,it):pi(B,L,z),k&&B.isNodeMaterial&&k.onUpdateProgram(B,Tt,Ee));let Di=!1,Sn=!1,Un=!1;const Xe=Tt.getUniforms(),Et=Ee.uniforms;if(ue.useProgram(Tt.program)&&(Di=!0,Sn=!0,Un=!0),B.id!==q&&(q=B.id,Sn=!0),Di||te!==x){ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Xe.setValue(P,"projectionMatrix",x.projectionMatrix),Xe.setValue(P,"viewMatrix",x.matrixWorldInverse);const xt=Xe.map.cameraPosition;xt!==void 0&&xt.setValue(P,zt.setFromMatrixPosition(x.matrixWorld)),tt.logarithmicDepthBuffer&&Xe.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Xe.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,Sn=!0,Un=!0)}if(Ee.needsLights&&(Ct.state.sunShadowMap.length>0&&Xe.setValue(P,"sunShadowMap",Ct.state.sunShadowMap,Pe),Ct.state.directionalShadowMap.length>0&&Xe.setValue(P,"directionalShadowMap",Ct.state.directionalShadowMap,Pe),Ct.state.spotShadowMap.length>0&&Xe.setValue(P,"spotShadowMap",Ct.state.spotShadowMap,Pe),Ct.state.pointShadowMap.length>0&&Xe.setValue(P,"pointShadowMap",Ct.state.pointShadowMap,Pe)),z.isSkinnedMesh){Xe.setOptional(P,z,"bindMatrix"),Xe.setOptional(P,z,"bindMatrixInverse");const at=z.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),Xe.setValue(P,"boneTexture",at.boneTexture,Pe))}z.isBatchedMesh&&(Xe.setOptional(P,z,"batchingTexture"),Xe.setValue(P,"batchingTexture",z._matricesTexture,Pe),Xe.setOptional(P,z,"batchingIdTexture"),Xe.setValue(P,"batchingIdTexture",z._indirectTexture,Pe),Xe.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&Xe.setValue(P,"batchingColorTexture",z._colorsTexture,Pe));const qt=X.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&J.update(z,X,Tt),(Sn||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Xe.setValue(P,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Et.envMapIntensity.value=L.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=kp()),Sn){if(Xe.setValue(P,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&pl(Et,Un),he&&B.fog===!0&&V.refreshFogUniforms(Et,he),V.refreshMaterialUniforms(Et,B,pe,Te,y.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const at=E;let xt=0;for(const dn of y.state.lightProbeGridArray)dn.texture!==null&&(at.textures[xt]=dn.texture,at.min[xt]=dn.boundingBox.min,at.max[xt]=dn.boundingBox.max,at.resolution[xt]=dn.resolution,xt++);for(const dn in at)at[dn].length=xt;Et.probesSH.value=at.textures,Et.probesMin.value=at.min,Et.probesMax.value=at.max,Et.probesResolution.value=at.resolution}dr.upload(P,_a(Ee),Et,Pe)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(dr.upload(P,_a(Ee),Et,Pe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Xe.setValue(P,"center",z.center),Xe.setValue(P,"modelViewMatrix",z.modelViewMatrix),Xe.setValue(P,"normalMatrix",z.normalMatrix),Xe.setValue(P,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const at=B.uniformsGroups;for(let xt=0,dn=at.length;xt<dn;xt++){const Sa=at[xt];be.update(Sa,Tt),be.bind(Sa,Tt)}}return Tt}function pl(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function ml(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(x,L,X){const B=Ae.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ae.get(x.texture).__webglTexture=L,Ae.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const X=Ae.get(x);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,X=0){re=x,Q=L,W=X;let B=null,z=!1,he=!1;if(x){const de=Ae.get(x);if(de.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(x.viewport),Se.copy(x.scissor),Le=x.scissorTest,ue.viewport(ne),ue.scissor(Se),ue.setScissorTest(Le),q=-1;return}else if(de.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);else if(de.__hasExternalTextures)Pe.rebindTextures(x,Ae.get(x.texture).__webglTexture,Ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&Ae.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);const ye=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[L])?B=ye[L][X]:B=ye[L],z=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?B=Ae.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?B=ye[X]:B=ye,ne.copy(x.viewport),Se.copy(x.scissor),Le=x.scissorTest}else ne.copy(Re).multiplyScalar(pe).floor(),Se.copy(Ye).multiplyScalar(pe).floor(),Le=Ze;if(X!==0&&(B=Z),ue.bindFramebuffer(P.FRAMEBUFFER,B)&&ue.drawBuffers(x,B),ue.viewport(ne),ue.scissor(Se),ue.setScissorTest(Le),z){const de=Ae.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,X)}else if(he){const de=L;for(let _e=0;_e<x.textures.length;_e++){const ye=Ae.get(x.textures[_e]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+_e,ye.__webglTexture,X,de)}}else if(x!==null&&X!==0){const de=Ae.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,X)}q=-1};function va(x){const L=Ae.get(x);return(L.__readFormat!==x.format||L.__readType!==x.type)&&(L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=tt.textureFormatReadable(x.format),L.__typeReadable=tt.textureTypeReadable(x.type)),L}this.readRenderTargetPixels=function(x,L,X,B,z,he,ve,de=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve],Array.isArray(_e)&&(_e=_e[0])),_e){ue.bindFramebuffer(P.FRAMEBUFFER,_e);try{const ye=x.textures[de],Ne=ye.format,ze=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de);const Me=va(ye);if(Me.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-B&&X>=0&&X<=x.height-z&&P.readPixels(L,X,B,z,ae.convert(Ne),ae.convert(ze),he)}finally{const ye=re!==null?Ae.get(re).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,L,X,B,z,he,ve,de=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve],Array.isArray(_e)&&(_e=_e[0])),_e)if(L>=0&&L<=x.width-B&&X>=0&&X<=x.height-z){ue.bindFramebuffer(P.FRAMEBUFFER,_e);const ye=x.textures[de],Ne=ye.format,ze=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de);const Me=va(ye);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(L,X,B,z,ae.convert(Ne),ae.convert(ze),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const ut=re!==null?Ae.get(re).__webglFramebuffer:null;ue.bindFramebuffer(P.FRAMEBUFFER,ut);const it=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cc(P,it,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ge),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Ge),P.deleteSync(it),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,X=0){const B=Math.pow(2,-X),z=Math.floor(x.image.width*B),he=Math.floor(x.image.height*B),ve=L!==null?L.x:0,de=L!==null?L.y:0;Pe.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,ve,de,z,he),ue.unbindTexture()},this.copyTextureToTexture=function(x,L,X=null,B=null,z=0,he=0){let ve,de,_e,ye,Ne,ze,Me,Ge,ut;const it=x.isCompressedTexture?x.mipmaps[he]:x.image;if(X!==null)ve=X.max.x-X.min.x,de=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,ye=X.min.x,Ne=X.min.y,ze=X.isBox3?X.min.z:0;else{const Xe=Math.pow(2,-z);ve=Math.floor(it.width*Xe),de=Math.floor(it.height*Xe),x.isDataArrayTexture?_e=it.depth:x.isData3DTexture?_e=Math.floor(it.depth*Xe):_e=1,ye=0,Ne=0,ze=0}B!==null?(Me=B.x,Ge=B.y,ut=B.z):(Me=0,Ge=0,ut=0);const nt=ae.convert(L.format),bt=ae.convert(L.type);let Ee;L.isData3DTexture?(Pe.setTexture3D(L,0),Ee=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Pe.setTexture2DArray(L,0),Ee=P.TEXTURE_2D_ARRAY):(Pe.setTexture2D(L,0),Ee=P.TEXTURE_2D),ue.activeTexture(P.TEXTURE0),ue.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),ue.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ue.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Ct=ue.getParameter(P.UNPACK_ROW_LENGTH),Ke=ue.getParameter(P.UNPACK_IMAGE_HEIGHT),In=ue.getParameter(P.UNPACK_SKIP_PIXELS),Tt=ue.getParameter(P.UNPACK_SKIP_ROWS),Di=ue.getParameter(P.UNPACK_SKIP_IMAGES);ue.pixelStorei(P.UNPACK_ROW_LENGTH,it.width),ue.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it.height),ue.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),ue.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),ue.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);const Sn=x.isDataArrayTexture||x.isData3DTexture,Un=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const Xe=Ae.get(x),Et=Ae.get(L),qt=Ae.get(Xe.__renderTarget),at=Ae.get(Et.__renderTarget);ue.bindFramebuffer(P.READ_FRAMEBUFFER,qt.__webglFramebuffer),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let xt=0;xt<_e;xt++)Sn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(x).__webglTexture,z,ze+xt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(L).__webglTexture,he,ut+xt)),P.blitFramebuffer(ye,Ne,ye+ve,Ne+de,Me,Ge,Me+ve,Ge+de,P.DEPTH_BUFFER_BIT,P.NEAREST);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||Ae.has(x)){const Xe=Ae.get(x),Et=Ae.get(L);ue.bindFramebuffer(P.READ_FRAMEBUFFER,D),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,K);for(let qt=0;qt<_e;qt++)Sn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xe.__webglTexture,z,ze+qt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xe.__webglTexture,z),Un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,he,ut+qt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,he),z!==0?P.blitFramebuffer(ye,Ne,ye+ve,Ne+de,Me,Ge,Me+ve,Ge+de,P.COLOR_BUFFER_BIT,P.NEAREST):Un?P.copyTexSubImage3D(Ee,he,Me,Ge,ut+qt,ye,Ne,ve,de):P.copyTexSubImage2D(Ee,he,Me,Ge,ye,Ne,ve,de);ue.bindFramebuffer(P.READ_FRAMEBUFFER,null),ue.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Un?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(Ee,he,Me,Ge,ut,ve,de,_e,nt,bt,it.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,he,Me,Ge,ut,ve,de,_e,nt,it.data):P.texSubImage3D(Ee,he,Me,Ge,ut,ve,de,_e,nt,bt,it):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,Me,Ge,ve,de,nt,bt,it.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,Me,Ge,it.width,it.height,nt,it.data):P.texSubImage2D(P.TEXTURE_2D,he,Me,Ge,ve,de,nt,bt,it);ue.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),ue.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ke),ue.pixelStorei(P.UNPACK_SKIP_PIXELS,In),ue.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),ue.pixelStorei(P.UNPACK_SKIP_IMAGES,Di),he===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&P.generateMipmap(Ee),ue.unbindTexture()},this.initRenderTarget=function(x){Ae.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){Q=0,W=0,re=null,ue.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}const ii={description:"Senior DevOps / Observability Engineer with 5 years of experience in autonomous infra and high-scale Kubernetes ecosystems. Expert in architecting Observability as Code (Grafana, Prometheus) and Agentic AI infrastructure. Specialized in multi-cloud reliability (AWS, OCI, Azure) for fintech platforms, achieving 40% FinOps savings. Two-time recipient of the Power Performer (Zebpay) and Star Spot (Vivvix) awards.",approach:"I architect Observability as Code and Agentic AI systems to make infrastructure self-healing and reliable.",stats:[{value:"40%",label:"FinOps Savings"},{value:"35%",label:"Faster Builds"},{value:"99.99%",label:"Uptime"},{value:"40%",label:"Faster RCA"}],education:{degree:"Bachelor of Technology, Computer Science",school:"MANIT Bhopal",period:"2016 – 2020"}},$t=[{company:"Nymcard",role:"DevOps Engineer",period:"Feb 2026 - Present",location:"Abu Dhabi, UAE (Remote)",technologies:["Kubernetes","Kafka","PostgreSQL","RabbitMQ","Grafana","GitHub Actions","Flux","Argo CD","LLMs","Agentic AI","GitOps"],achievements:["Automated operator-based lifecycle management for stateful services (Kafka, PostgreSQL, RabbitMQ) for 99.99% uptime, routing SLO alerts to Grafana.","Built GitHub Actions CI/CD and managed GitOps (Flux/Argo CD) across 8+ Kubernetes clusters, reducing deployment toil for 50+ engineers.","Architected an Agentic AI Observability Assistant using LLMs to correlate signals, cutting production incident resolution time (RCA) by 40%."]},{company:"Zebpay",role:"DevOps Engineer",period:"May 2024 - Dec 2025",location:"New Delhi, India",awards:["Power Performer (2x)"],technologies:["AWS","Prometheus","Grafana","Thanos","Loki","OpenTelemetry","GitHub Actions","Trivy","Semgrep","Opencost","Azure APIM","AWS API Gateway","EKS","Karpenter","Cilium","OPA","Terraform","Helm"],achievements:["Deployed centralized observability (Prometheus, Grafana, Thanos, Loki, OTel) across AWS accounts, establishing SLOs and VM monitoring.","Modularized GitHub Actions CI/CD with integrated SAST (Trivy, Semgrep), reducing build times by 35% and automating image hardening.","Slashed cloud spend by 40% via a FinOps initiative (Opencost) focusing on intelligent scaling, capacity reservations, and consolidation.","Orchestrated zero-downtime migration from Azure APIM to AWS API Gateway for 2T requests/month, optimizing API latency and backend integration.","Upgraded AWS EKS clusters with Karpenter (autoscaling), Cilium, and OPA (compliance) using custom Terraform modules and Helm charts."]},{company:"Rizzle",role:"DevOps Engineer",period:"Sep 2023 - Apr 2024",location:"Hyderabad, India",technologies:["AWS","Terraform","CloudFormation","CloudWatch","Grafana","Kubernetes","Argo CD","Jenkins","Node.js","Slack"],achievements:["Provisioned AWS infrastructure via Terraform and CloudFormation, integrating CloudWatch metrics into Managed Grafana to reduce MTTR by 25%.","Optimized Kubernetes manifests and HPA scaling for media workloads, improving resource utilization by 20% and eliminating OOM pod evictions.","Automated delivery via Argo CD/Jenkins and built Node.js Slack integration tools, shortening deployment cycles for internal teams."]},{company:"Vivvix (Numerator + Kantar / Now MediaRadar)",role:"DevOps Engineer",period:"Mar 2021 - Aug 2023",location:"Pune, India",awards:["Star Spot Award"],technologies:["Airflow","Grafana","AWS Lambda","CloudWatch","X-Ray","Azure AKS","Terraform","Atlantis","Azure Pipelines","Snowflake","Databricks","AWS DMS"],achievements:["Led migration of ETL pipelines from Airflow 1.10 to 2.x with hardened CI/CD flows and Grafana dashboards.","Standardized application logging/tracing for AWS Lambda using CloudWatch, X-Ray, and Grafana.","Bootstrapped Azure AKS clusters and provisioned multi-cloud infrastructure using Terraform and Atlantis.","Cut deployment times by 50% via re-architecting parallel execution and caching in Azure Pipelines.","Optimized Snowflake/Databricks FinOps and deployed AWS DMS autoscaling to reduce data costs by 40%."]}],Wp=[{title:"Autonomous RCA Agent",technologies:["LLMs","Prometheus","Python","Agentic AI","Grafana","Observability"],description:"Developed an LLM agent correlating Prometheus metrics with deployment logs to accelerate incident root cause analysis.",link:"#"},{title:"Multi-Cluster Observability Platform",technologies:["AWS","Azure","Thanos","OpenTelemetry","Prometheus","Grafana"],description:"Unified AWS/Azure monitoring plane using Thanos and OpenTelemetry for long term metrics and tracing.",link:"#"}],Mo=[{category:"Platform & IaC",skills:["Terraform","Kubernetes","EKS","AKS","Rancher","Helm","Docker"]},{category:"SRE & Observability",skills:["Prometheus","Grafana","Thanos","Loki","Tempo","OpenTelemetry","CloudWatch","Opsgenie","SLO/SLI"]},{category:"CI/CD & DevSecOps",skills:["GitHub Actions","Azure Pipelines","Argo CD","Jenkins","CircleCI","Trivy","Semgrep"]},{category:"Cloud Ecosystem",skills:["AWS (Lambda, EKS, ECS, RDS, MSK, DMS)","Azure (ADF, Databricks, AKS, APIM)","OCI","GCP"]},{category:"AI & Automation",skills:["LLM Agentic Workflows","AI Observability","Python","Go","Bash","Node.js"]}],Xp=[{name:"Email",value:"wiwek13@gmail.com",href:"mailto:wiwek13@gmail.com"},{name:"LinkedIn",value:"https://www.linkedin.com/in/wiwek13/",href:"https://www.linkedin.com/in/wiwek13/"},{name:"Location",value:"Indore, MP, India",href:"#"},{name:"Phone",value:"+91 8989879834",href:"tel:+918989879834"}];class qp{ctx=null;enabled=!0;droneOsc=null;droneGain=null;init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startDrone(){if(this.enabled&&(this.init(),!(!this.ctx||this.droneOsc)))try{this.droneOsc=this.ctx.createOscillator(),this.droneGain=this.ctx.createGain(),this.droneOsc.type="sine",this.droneOsc.frequency.setValueAtTime(55,this.ctx.currentTime),this.droneGain.gain.setValueAtTime(.015,this.ctx.currentTime),this.droneOsc.connect(this.droneGain),this.droneGain.connect(this.ctx.destination),this.droneOsc.start()}catch{}}stopDrone(){if(this.droneOsc){try{this.droneOsc.stop(),this.droneOsc.disconnect()}catch{}this.droneOsc=null,this.droneGain=null}}playLaser(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(920,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.12),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.12)}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1500,this.ctx.currentTime),t.gain.setValueAtTime(.06,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playChaos(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(180,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.4),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.005,this.ctx.currentTime+.4),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.4)}playHeal(){if(!this.enabled||(this.init(),!this.ctx))return;[330,440,554,659].forEach((t,n)=>{if(!this.ctx)return;const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(t,this.ctx.currentTime+n*.06),s.gain.setValueAtTime(.05,this.ctx.currentTime+n*.06),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.06+.3),r.connect(s),s.connect(this.ctx.destination),r.start(this.ctx.currentTime+n*.06),r.stop(this.ctx.currentTime+n*.06+.3)})}}const It=new qp,ir={cyber:{name:"Cyber Neon",primaryHex:62463,accentHex:16711807,bgHex:461070,primaryCss:"#00f3ff",accentCss:"#ff007f",bgCss:"bg-[#07090e]",borderCss:"border-[#00f3ff]/30"},matrix:{name:"Matrix CRT",primaryHex:65382,accentHex:3407616,bgHex:198660,primaryCss:"#00ff66",accentCss:"#33ff00",bgCss:"bg-[#030804]",borderCss:"border-[#00ff66]/30"},solar:{name:"Solar Flare",primaryHex:16755200,accentHex:16724736,bgHex:787971,primaryCss:"#ffaa00",accentCss:"#ff3300",bgCss:"bg-[#0c0603]",borderCss:"border-[#ffaa00]/30"},void:{name:"Deep Ice",primaryHex:6333946,accentHex:10980346,bgHex:329487,primaryCss:"#60a5fa",accentCss:"#a78bfa",bgCss:"bg-[#05070f]",borderCss:"border-[#60a5fa]/30"}},Zp=()=>{const i=Pt.useRef(null),[e,t]=Pt.useState("cyber"),[n,r]=Pt.useState(!0),[s,a]=Pt.useState(null),[o,c]=Pt.useState(!1),[l,p]=Pt.useState(!1),[g,h]=Pt.useState(0),[m,v]=Pt.useState(!1),[T,f]=Pt.useState("OPTIMAL · 99.99% SLO"),u=Pt.useRef({flyTo:()=>{},triggerChaos:()=>{}}),M=Pt.useRef(null),A=Pt.useRef(ir[e]);A.current=ir[e],Pt.useEffect(()=>{M.current&&M.current(ir[e])},[e]);const E=Pt.useCallback(()=>{v(!0),f("DEGRADED · 82.4% (CHAOS INJECTED)"),It.playChaos(),h(d=>d+50),u.current.triggerChaos&&u.current.triggerChaos(),setTimeout(()=>{It.playHeal(),v(!1),f("OPTIMAL · 99.99% SLO (RECONCILED)")},3200)},[]),w=()=>{const d=!n;It.enabled=d,r(d),d?(It.playClick(),It.startDrone()):It.stopDrone()};Pt.useEffect(()=>{const d=i.current;if(!d)return;const S=new Rc;S.background=new Ve(A.current.bgHex),S.fog=new ra(A.current.bgHex,.016);const N=new Jt(55,d.clientWidth/d.clientHeight,.1,1e3);N.position.set(0,14,38);const C=new Vp({antialias:!0,powerPreference:"high-performance",alpha:!1});C.setSize(d.clientWidth,d.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.appendChild(C.domElement);const U=1400,k=new Xt,Z=new Float32Array(U*3),D=new Float32Array(U);for(let V=0;V<U;V++){const ee=V*3;Z[ee]=(Math.random()-.5)*220,Z[ee+1]=(Math.random()-.5)*220,Z[ee+2]=(Math.random()-.5)*220,D[V]=Math.random()*.8+.2}k.setAttribute("position",new Ln(Z,3));const K=new Ko({color:16777215,size:.9,transparent:!0,opacity:.45}),Q=new Bc(k,K);S.add(Q);const W=new Mi;S.add(W);const re=new la(4.2,1),q=new An({color:A.current.primaryHex,wireframe:!0,transparent:!0,opacity:.35}),te=new Ut(re,q);W.add(te);const ne=new vr(2.4,16,16),Se=new An({color:A.current.accentHex,wireframe:!0,transparent:!0,opacity:.2}),Le=new Ut(ne,Se);W.add(Le);const $=new An({color:A.current.primaryHex,side:Qt,transparent:!0,opacity:.15}),fe=new Ut(new xr(18,18.2,64),$);fe.rotation.x=Math.PI/2,S.add(fe);const xe=new An({color:A.current.accentHex,side:Qt,transparent:!0,opacity:.12}),Te=new Ut(new xr(26,26.2,64),xe);Te.rotation.x=Math.PI/2.3,S.add(Te);const pe=[{id:"origin",code:"01",title:"ORIGIN // VIVEK KUSHWAH",subtitle:"Platform Architect & Autonomous SRE",category:"Identity & Philosophy",badge:"SLO: 99.99%",description:ii.description,approach:ii.approach,stats:ii.stats,education:ii.education,targetPhi:Math.PI/3,targetTheta:0},{id:"nymcard",code:"02",title:"NYMCARD // AGENTIC AI & K8S",subtitle:"Abu Dhabi, UAE (Remote) · Feb 2026 - Present",category:"Career Tenure",badge:"40% RCA SPEEDUP",description:"Senior DevOps / SRE leading autonomous stateful operator infrastructure, multi-cluster GitOps (8+ clusters), and LLM-powered incident root cause analysis.",achievements:$t[0].achievements,technologies:$t[0].technologies,targetPhi:Math.PI/3.2,targetTheta:Math.PI*2*(1/7)},{id:"zebpay",code:"03",title:"ZEBPAY // 2T+ FINOPS & API GATEWAY",subtitle:"New Delhi · May 2024 - Dec 2025",category:"Career Tenure",badge:"POWER PERFORMER (2X)",description:"Engineered centralized observability (Prometheus/Thanos/OTel), executed zero-downtime 2T req/mo API Gateway migration, and led FinOps initiative reducing cloud spend by 40%.",achievements:$t[1].achievements,technologies:$t[1].technologies,awards:$t[1].awards,targetPhi:Math.PI/2.8,targetTheta:Math.PI*2*(2/7)},{id:"rizzle",code:"04",title:"RIZZLE // MEDIA WORKLOAD HPA",subtitle:"Hyderabad · Sep 2023 - Apr 2024",category:"Career Tenure",badge:"ZERO OOM EVICTIONS",description:"Optimized Kubernetes manifests and dynamic HPA scaling for high-throughput media workloads, eliminating OOM evictions and cutting MTTR by 25%.",achievements:$t[2].achievements,technologies:$t[2].technologies,targetPhi:Math.PI/3.5,targetTheta:Math.PI*2*(3/7)},{id:"vivvix",code:"05",title:"VIVVIX // MULTI-CLOUD PIPELINES",subtitle:"Pune · Mar 2021 - Aug 2023",category:"Career Tenure",badge:"STAR SPOT AWARD",description:"Bootstrapped Azure AKS clusters, migrated Airflow ETL to 2.x, and re-architected parallel execution pipelines to cut deployment cycles by 50%.",achievements:$t[3].achievements,technologies:$t[3].technologies,awards:$t[3].awards,targetPhi:Math.PI/2.6,targetTheta:Math.PI*2*(4/7)},{id:"ai-labs",code:"06",title:"AUTONOMOUS RCA & O11Y PLATFORM",subtitle:"Self-Healing Distributed Systems",category:"Production Projects",badge:"AGENTIC AI LABS",description:"LLM agents correlating OpenTelemetry traces and Prometheus metric spikes with GitOps commits to autonomously heal infrastructure drift.",projects:Wp,technologies:["Agentic AI","Python","OpenTelemetry","Thanos","Kubernetes","Flux CD"],targetPhi:Math.PI/3.1,targetTheta:Math.PI*2*(5/7)},{id:"skills-mesh",code:"07",title:"PLATFORM SKILL MATRIX & ARCHITECTURE",subtitle:"Full Enterprise Tech Constellation",category:"Technical Stack",badge:"5 EXPERTISE DOMAINS",description:"Production-tested tooling across Kubernetes orchestration, Observability as Code, DevSecOps pipelines, multi-cloud platforms, and AI automation.",skillCategories:Mo,targetPhi:Math.PI/2.9,targetTheta:Math.PI*2*(6/7)}],Ce=[],lt=new oa(1.6);pe.forEach((V,ee)=>{const I=ee/pe.length*Math.PI*2,H=18+ee%2*5,se=Math.cos(I)*H,R=Math.sin(I)*H,J=ee%2===0?2:-2,Y=ee===1||ee===2,le=new An({color:Y?A.current.accentHex:A.current.primaryHex,wireframe:!0}),ae=new Ut(lt,le);ae.position.set(se,J,R),ae.userData={sectorId:V.id,index:ee},S.add(ae),Ce.push({mesh:ae,data:V,orbitAngle:I,initialAngle:I,orbitRadius:H,orbitSpeed:.0018*(ee%2===0?1:-1),baseY:J})});const Re=[],Ye=new hi(.5,.5,.5),Ze=new An({color:A.current.primaryHex,wireframe:!0,transparent:!0,opacity:.7});for(let V=0;V<50;V++){const ee=new Ut(Ye,Ze),I=10+Math.random()*20,H=Math.random()*Math.PI*2,se=(Math.random()-.5)*12;ee.position.set(Math.cos(H)*I,se,Math.sin(H)*I),S.add(ee),Re.push({mesh:ee,basePos:new G(Math.cos(H)*I,se,Math.sin(H)*I),vel:new G(0,0,0),orbitAngle:H,orbitRadius:I,orbitSpeed:(Math.random()*.003+.001)*(V%2===0?1:-1)})}u.current.triggerChaos=()=>{Re.forEach(V=>{V.vel.set((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5)})};const Ue=[],pt=new vr(.22,6,6),st=V=>{It.playLaser();const ee=new An({color:A.current.accentHex}),I=new Ut(pt,ee);I.position.copy(N.position);const H=V?new G().subVectors(V,N.position).normalize():new G(0,0,-1).applyQuaternion(N.quaternion).normalize();S.add(I),Ue.push({mesh:I,vel:H.multiplyScalar(1.4),alive:0})},Mt=new Kc,Qe=new We,zt=V=>{const ee=d.getBoundingClientRect();Qe.x=(V.clientX-ee.left)/ee.width*2-1,Qe.y=-((V.clientY-ee.top)/ee.height)*2+1,Mt.setFromCamera(Qe,N);const I=Mt.intersectObjects(Ce.map(H=>H.mesh));if(I.length>0){const H=Ce.find(se=>se.mesh===I[0].object);H&&(It.playClick(),a(H.data),st(H.mesh.position),h(se=>se+100))}else st(),h(H=>H+15)};let rt=!1,dt={x:0,y:0};const Nt=new G(0,0,0),je={radius:38,theta:0,phi:Math.PI/3.2},P={radius:38,theta:0,phi:Math.PI/3.2},Rt=V=>{V.target===C.domElement&&(rt=!0,dt={x:V.clientX,y:V.clientY},It.startDrone())},et=V=>{if(!rt)return;const ee=V.clientX-dt.x,I=V.clientY-dt.y;P.theta-=ee*.005,P.phi=Math.max(.15,Math.min(Math.PI/2-.08,P.phi-I*.005)),dt={x:V.clientX,y:V.clientY}},tt=()=>{rt=!1},ue=V=>{P.radius=Math.max(14,Math.min(55,P.radius+V.deltaY*.03))},ct=V=>{V.touches.length===1&&(rt=!0,dt={x:V.touches[0].clientX,y:V.touches[0].clientY},It.startDrone())},Ae=V=>{if(!rt||V.touches.length!==1)return;const ee=V.touches[0].clientX-dt.x,I=V.touches[0].clientY-dt.y;P.theta-=ee*.007,P.phi=Math.max(.15,Math.min(Math.PI/2-.08,P.phi-I*.007)),dt={x:V.touches[0].clientX,y:V.touches[0].clientY}},Pe=()=>{rt=!1},b=V=>{V.code==="Space"&&(V.preventDefault(),st(),h(ee=>ee+15)),(V.key==="a"||V.key==="ArrowLeft")&&(P.theta-=.08),(V.key==="d"||V.key==="ArrowRight")&&(P.theta+=.08),(V.key==="w"||V.key==="ArrowUp")&&(P.radius=Math.max(14,P.radius-3)),(V.key==="s"||V.key==="ArrowDown")&&(P.radius=Math.min(55,P.radius+3))};u.current.flyTo=(V,ee,I)=>{P.theta=V,P.phi=ee,P.radius=I,It.playClick()},d.addEventListener("click",zt),d.addEventListener("mousedown",Rt),window.addEventListener("mousemove",et),window.addEventListener("mouseup",tt),d.addEventListener("wheel",ue,{passive:!0}),d.addEventListener("touchstart",ct,{passive:!0}),window.addEventListener("touchmove",Ae,{passive:!0}),window.addEventListener("touchend",Pe),window.addEventListener("keydown",b),M.current=V=>{S.background=new Ve(V.bgHex),S.fog&&(S.fog.color=new Ve(V.bgHex)),q.color.setHex(V.primaryHex),Se.color.setHex(V.accentHex),$.color.setHex(V.primaryHex),xe.color.setHex(V.accentHex),Ze.color.setHex(V.primaryHex),Ce.forEach((ee,I)=>{const H=I===1||I===2;ee.mesh.material.color.setHex(H?V.accentHex:V.primaryHex)})};let _,O=performance.now();const ie=()=>{const V=performance.now(),ee=Math.min((V-O)/1e3,.1);O=V,je.theta+=(P.theta-je.theta)*.06,je.phi+=(P.phi-je.phi)*.06,je.radius+=(P.radius-je.radius)*.06,N.position.x=je.radius*Math.sin(je.phi)*Math.sin(je.theta),N.position.y=je.radius*Math.cos(je.phi),N.position.z=je.radius*Math.sin(je.phi)*Math.cos(je.theta),N.lookAt(Nt),W.rotation.y+=.004,W.rotation.x+=.002,Q.rotation.y+=2e-4,fe.rotation.z+=.001,Te.rotation.z-=.0015,Ce.forEach(I=>{I.orbitAngle+=I.orbitSpeed,I.mesh.position.x=Math.cos(I.orbitAngle)*I.orbitRadius,I.mesh.position.z=Math.sin(I.orbitAngle)*I.orbitRadius,I.mesh.rotation.y+=.012,I.mesh.rotation.x+=.006}),Re.forEach(I=>{I.orbitAngle+=I.orbitSpeed;const H=Math.cos(I.orbitAngle)*I.orbitRadius,se=Math.sin(I.orbitAngle)*I.orbitRadius,R=I.basePos.y;I.vel.x+=(H-I.mesh.position.x)*.04,I.vel.y+=(R-I.mesh.position.y)*.04,I.vel.z+=(se-I.mesh.position.z)*.04,I.vel.multiplyScalar(.92),I.mesh.position.add(I.vel),I.mesh.rotation.x+=.02,I.mesh.rotation.y+=.02});for(let I=Ue.length-1;I>=0;I--){const H=Ue[I];H.mesh.position.add(H.vel),H.alive+=ee,H.alive>2.8&&(S.remove(H.mesh),Ue.splice(I,1))}C.render(S,N),_=requestAnimationFrame(ie)};ie();const j=()=>{d&&(N.aspect=d.clientWidth/d.clientHeight,N.updateProjectionMatrix(),C.setSize(d.clientWidth,d.clientHeight))};return window.addEventListener("resize",j),()=>{cancelAnimationFrame(_),d.removeEventListener("click",zt),d.removeEventListener("mousedown",Rt),window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",tt),d.removeEventListener("wheel",ue),d.removeEventListener("touchstart",ct),window.removeEventListener("touchmove",Ae),window.removeEventListener("touchend",Pe),window.removeEventListener("keydown",b),window.removeEventListener("resize",j),C.domElement.parentNode&&C.domElement.parentNode.removeChild(C.domElement),C.dispose(),It.stopDrone()}},[]);const y=ir[e];return F.jsxs("div",{className:`relative w-full h-screen ${y.bgCss} overflow-hidden select-none font-mono text-white transition-colors duration-700`,children:[F.jsxs("header",{className:"absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[F.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 bg-black/70 border border-white/10 px-3 sm:px-4 py-2 rounded-xl backdrop-blur-md pointer-events-auto shadow-2xl",children:[F.jsx("div",{className:"w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0",children:F.jsx(Ma,{className:"text-xl",style:{color:y.primaryCss}})}),F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-wider text-white",children:"VIVEK KUSHWAH"}),F.jsx("span",{className:"text-[10px] text-gray-500 font-mono hidden sm:inline",children:"[PLATFORM ARCHITECT]"})]}),F.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-xs",children:[F.jsx("span",{className:`w-2 h-2 rounded-full ${m?"bg-red-500 animate-ping":"bg-emerald-400"}`}),F.jsx("span",{className:m?"text-red-400 font-bold":"text-gray-400",children:T})]})]}),F.jsx("div",{className:"h-6 w-[1px] bg-white/10 hidden sm:block"}),F.jsxs("div",{className:"hidden sm:flex flex-col text-right",children:[F.jsx("span",{className:"text-[9px] text-gray-400 uppercase",children:"Telemetry PTS"}),F.jsx("span",{className:"text-xs font-bold text-amber-400",children:g})]})]}),F.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[F.jsxs("button",{onClick:E,disabled:m,title:"Inject Chaos Engineering into 3D Kubernetes Pods",className:`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all backdrop-blur-md ${m?"bg-red-500/20 border-red-500 text-red-300":"bg-black/70 border-white/10 text-gray-300 hover:border-red-500/50 hover:text-red-400"}`,children:[F.jsx(gl,{className:m?"animate-bounce text-red-400":"text-yellow-400"}),F.jsx("span",{className:"hidden sm:inline",children:"CHAOS INJECT"})]}),F.jsxs("button",{onClick:()=>{c(!0),It.playClick()},className:"px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md",children:[F.jsx(Rr,{style:{color:y.primaryCss}}),F.jsx("span",{children:"DOSSIER VIEW"})]}),F.jsx("div",{className:"flex items-center gap-1 bg-black/70 border border-white/10 p-1 rounded-xl backdrop-blur-md",children:["cyber","matrix","solar","void"].map(d=>F.jsx("button",{onClick:()=>{t(d),It.playClick()},style:{backgroundColor:e===d?y.primaryCss:"transparent",color:e===d?"#000":"#888"},className:"px-2 py-1 rounded-lg text-[10px] uppercase font-bold transition-all hover:text-white",children:d},d))}),F.jsx("button",{onClick:w,title:n?"Mute Procedural Audio":"Enable Audio",className:"p-2.5 rounded-xl bg-black/70 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md",children:n?F.jsx(_l,{className:"text-base",style:{color:y.primaryCss}}):F.jsx(xl,{className:"text-base text-gray-500"})}),F.jsx("button",{onClick:()=>p(!0),className:"p-2.5 rounded-xl bg-black/70 border border-white/10 text-gray-300 hover:text-white transition-colors backdrop-blur-md",children:F.jsx(vl,{className:"text-base"})})]})]}),F.jsx("div",{ref:i,className:"w-full h-full cursor-crosshair"}),F.jsxs("footer",{className:"absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none",children:[F.jsxs("div",{className:"flex items-center gap-1.5 bg-black/80 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl pointer-events-auto overflow-x-auto max-w-full",children:[F.jsx("span",{className:"text-[10px] text-gray-500 font-bold px-2 hidden md:inline",children:"TELEPORT:"}),[{id:"origin",label:"01 Identity",theta:0,phi:Math.PI/3.2,radius:25},{id:"nymcard",label:"02 Nymcard",theta:Math.PI*2*(1/7),phi:Math.PI/3.2,radius:24},{id:"zebpay",label:"03 Zebpay",theta:Math.PI*2*(2/7),phi:Math.PI/2.8,radius:24},{id:"rizzle",label:"04 Rizzle",theta:Math.PI*2*(3/7),phi:Math.PI/3.5,radius:24},{id:"vivvix",label:"05 Vivvix",theta:Math.PI*2*(4/7),phi:Math.PI/2.6,radius:24},{id:"ai-labs",label:"06 AI Labs",theta:Math.PI*2*(5/7),phi:Math.PI/3.1,radius:25},{id:"skills-mesh",label:"07 Stack",theta:Math.PI*2*(6/7),phi:Math.PI/2.9,radius:25}].map(d=>F.jsxs("button",{onClick:()=>u.current.flyTo(d.theta,d.phi,d.radius),className:"px-2.5 py-1.5 rounded-xl text-[10px] whitespace-nowrap bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/20 text-gray-300 hover:text-white transition-all flex items-center gap-1",children:[F.jsx(Sl,{className:"text-[10px]",style:{color:y.primaryCss}}),F.jsx("span",{children:d.label})]},d.id))]}),F.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[F.jsxs("div",{className:"bg-black/80 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md text-[10px] text-gray-400 hidden lg:flex items-center gap-2",children:[F.jsx("span",{children:"CLICK / SPACE = SHOOT"}),F.jsx("span",{className:"text-gray-600",children:"·"}),F.jsx("span",{children:"DRAG = 360° ORBIT"}),F.jsx("span",{className:"text-gray-600",children:"·"}),F.jsx("span",{children:"SCROLL = ZOOM"})]}),F.jsxs("a",{href:"/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf",target:"_blank",className:"px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 transition-colors backdrop-blur-md shadow-lg",children:[F.jsx(Rr,{style:{color:y.primaryCss}}),F.jsx("span",{children:"PDF Resume"})]})]})]}),s&&F.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:F.jsxs("div",{className:"bg-[#0b0e14] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-2xl w-full relative shadow-[0_0_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto",children:[F.jsx("button",{onClick:()=>a(null),className:"absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10",children:F.jsx(Cr,{className:"text-2xl"})}),F.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[F.jsxs("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 border border-white/20 text-white",children:[s.code," // ",s.category]}),F.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded border",style:{backgroundColor:`${y.primaryCss}15`,borderColor:`${y.primaryCss}40`,color:y.primaryCss},children:s.badge})]}),F.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mb-1",children:s.title}),F.jsx("p",{className:"text-xs text-gray-400 mb-6 font-mono",children:s.subtitle}),F.jsx("div",{className:"text-sm text-gray-300 leading-relaxed font-sans font-light mb-6",children:s.description}),s.approach&&F.jsx("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 mb-6 border-l-4",style:{borderLeftColor:y.accentCss},children:F.jsxs("p",{className:"text-xs sm:text-sm text-gray-200 italic font-sans font-normal",children:['"',s.approach,'"']})}),s.stats&&F.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6",children:s.stats.map(d=>F.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-3 text-center",children:[F.jsx("div",{className:"text-lg font-bold",style:{color:y.primaryCss},children:d.value}),F.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-mono",children:d.label})]},d.label))}),s.education&&F.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center gap-3",children:[F.jsx(Ml,{className:"text-2xl",style:{color:y.primaryCss}}),F.jsxs("div",{children:[F.jsx("div",{className:"text-xs font-bold text-white",children:s.education.degree}),F.jsxs("div",{className:"text-[11px] text-gray-400",children:[s.education.school," (",s.education.period,")"]})]})]}),s.achievements&&F.jsxs("div",{className:"mb-6",children:[F.jsx("h3",{className:"text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider font-mono",children:"Key Production Achievements:"}),F.jsx("ul",{className:"space-y-2.5",children:s.achievements.map((d,S)=>F.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-gray-300 font-sans leading-relaxed",children:[F.jsx(El,{className:"text-sm shrink-0 mt-0.5",style:{color:y.primaryCss}}),F.jsx("span",{children:d})]},S))})]}),s.technologies&&F.jsxs("div",{className:"mb-6",children:[F.jsx("h3",{className:"text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider font-mono",children:"Orchestration Stack:"}),F.jsx("div",{className:"flex flex-wrap gap-1.5",children:s.technologies.map(d=>F.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-mono",children:d},d))})]}),s.projects&&F.jsx("div",{className:"space-y-4 mb-6",children:s.projects.map(d=>F.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10",children:[F.jsx("div",{className:"text-sm font-bold text-white mb-1",children:d.title}),F.jsx("div",{className:"text-xs text-gray-300 font-sans mb-3",children:d.description}),F.jsx("div",{className:"flex flex-wrap gap-1",children:d.technologies.map(S=>F.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono",children:S},S))})]},d.title))}),s.skillCategories&&F.jsx("div",{className:"space-y-4 mb-6",children:s.skillCategories.map(d=>F.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[F.jsx("div",{className:"text-xs font-bold mb-2 font-mono",style:{color:y.primaryCss},children:d.category}),F.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.skills.map(S=>F.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/5 text-gray-300 font-mono",children:S},S))})]},d.category))}),F.jsx("button",{onClick:()=>a(null),style:{backgroundColor:y.primaryCss},className:"w-full py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors",children:"Return to Playable SRE Universe"})]})}),o&&F.jsx("div",{className:"fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-fade-in",children:F.jsxs("div",{className:"w-full max-w-2xl bg-[#090c12] border-l border-white/10 h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between shadow-2xl",children:[F.jsxs("div",{children:[F.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-white/10 mb-8",children:[F.jsxs("div",{children:[F.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[F.jsx("span",{children:"SYSTEM DOSSIER"}),F.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-white/10 border border-white/10",style:{color:y.primaryCss},children:"FULL SPEC"})]}),F.jsx("p",{className:"text-xs text-gray-400 font-mono mt-1",children:"Vivek Kushwah · Senior Platform & Observability Architect"})]}),F.jsx("button",{onClick:()=>c(!1),className:"p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors",children:F.jsx(Cr,{className:"text-2xl"})})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-3",style:{color:y.primaryCss},children:"// 01 EXECUTIVE SUMMARY"}),F.jsx("p",{className:"text-sm text-gray-300 font-sans leading-relaxed mb-4",children:ii.description}),F.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:ii.stats.map(d=>F.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10 text-center",children:[F.jsx("div",{className:"text-base font-bold",style:{color:y.primaryCss},children:d.value}),F.jsx("div",{className:"text-[10px] text-gray-400 font-mono uppercase",children:d.label})]},d.label))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:y.primaryCss},children:"// 02 ENTERPRISE TENURES"}),F.jsx("div",{className:"space-y-6",children:$t.map(d=>F.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all",children:[F.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[F.jsxs("div",{className:"text-base font-bold text-white flex items-center gap-2",children:[F.jsx("span",{children:d.company}),F.jsxs("span",{className:"text-xs text-gray-400 font-normal",children:["· ",d.role]})]}),F.jsx("span",{className:"text-[11px] font-mono text-gray-400",children:d.period})]}),F.jsx("div",{className:"text-xs text-gray-400 font-mono mb-3",children:d.location}),d.awards&&F.jsx("div",{className:"flex gap-2 mb-3",children:d.awards.map(S=>F.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-1 font-mono",children:[F.jsx(yl,{})," ",S]},S))}),F.jsx("ul",{className:"space-y-2 mb-4",children:d.achievements.map((S,N)=>F.jsxs("li",{className:"flex items-start gap-2 text-xs text-gray-300 font-sans leading-relaxed",children:[F.jsx("span",{style:{color:y.primaryCss},children:"▸"}),F.jsx("span",{children:S})]},N))}),F.jsx("div",{className:"flex flex-wrap gap-1",children:d.technologies.map(S=>F.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-mono",children:S},S))})]},d.company))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:y.primaryCss},children:"// 03 TECHNICAL CONSTELLATION"}),F.jsx("div",{className:"space-y-3",children:Mo.map(d=>F.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[F.jsx("div",{className:"text-xs font-bold text-white mb-2 font-mono",children:d.category}),F.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.skills.map(S=>F.jsx("span",{className:"text-[11px] px-2.5 py-1 rounded bg-black/50 border border-white/10 text-gray-300 font-mono",children:S},S))})]},d.category))})]}),F.jsxs("div",{className:"mb-8",children:[F.jsx("h3",{className:"text-xs font-mono font-bold tracking-widest uppercase mb-4",style:{color:y.primaryCss},children:"// 04 SECURE COMM CHANNELS"}),F.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Xp.map(d=>F.jsx("a",{href:d.href,target:d.href.startsWith("http")?"_blank":"_self",className:"p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between text-xs",children:F.jsxs("div",{className:"flex items-center gap-2.5",children:[d.name==="Email"&&F.jsx(bl,{style:{color:y.primaryCss}}),d.name==="LinkedIn"&&F.jsx(Tl,{style:{color:y.primaryCss}}),d.name==="Location"&&F.jsx(Al,{style:{color:y.primaryCss}}),d.name==="Phone"&&F.jsx(wl,{style:{color:y.primaryCss}}),F.jsxs("div",{children:[F.jsx("div",{className:"text-[10px] text-gray-400 uppercase font-mono",children:d.name}),F.jsx("div",{className:"text-white font-medium",children:d.value})]})]})},d.name))})]})]}),F.jsxs("div",{className:"pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[F.jsxs("a",{href:"/Vivek_Kushwah_Senior_Platform_Engineer_latest.pdf",target:"_blank",style:{backgroundColor:y.primaryCss},className:"flex-1 py-3 rounded-xl text-black font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2 hover:bg-white transition-colors",children:[F.jsx(Rr,{className:"text-base"}),F.jsx("span",{children:"Download Full PDF Resume"})]}),F.jsx("button",{onClick:()=>c(!1),className:"py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase",children:"Close Dossier"})]})]})}),l&&F.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:F.jsxs("div",{className:"bg-[#0b0e14] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full relative text-left",children:[F.jsx("button",{onClick:()=>p(!1),className:"absolute top-5 right-5 text-gray-400 hover:text-white",children:F.jsx(Cr,{className:"text-2xl"})}),F.jsxs("h3",{className:"text-lg font-bold text-white mb-3 flex items-center gap-2 font-mono",children:[F.jsx(Ma,{style:{color:y.primaryCss}}),F.jsx("span",{children:"Playable Universe Flight Controls"})]}),F.jsx("p",{className:"text-xs text-gray-400 leading-relaxed font-sans mb-4",children:"You are inside Vivek Kushwah's interactive 3D SRE universe. Every orbit represents a real production milestone and platform tier."}),F.jsxs("ul",{className:"text-xs space-y-2.5 text-gray-300 font-mono mb-6",children:[F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:y.primaryCss}}),F.jsx("strong",{children:"Click & Drag:"})," Orbit camera 360° across the cluster."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:y.primaryCss}}),F.jsx("strong",{children:"Left Click / Space:"})," Fire OTel telemetry packets."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:y.primaryCss}}),F.jsx("strong",{children:"Click Any Sector:"})," Inspect deep career metrics & achievements."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:y.primaryCss}}),F.jsx("strong",{children:"Bottom Dock:"})," Instant cinematic fly-through camera teleport."]}),F.jsxs("li",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:y.primaryCss}}),F.jsx("strong",{children:"Chaos Inject:"})," Simulate pod blast & GitOps auto-healing."]})]}),F.jsx("button",{onClick:()=>p(!1),style:{backgroundColor:y.primaryCss},className:"w-full py-2.5 rounded-xl text-black text-xs font-bold font-mono uppercase",children:"Enter Cockpit"})]})})]})};export{Zp as PlayableUniverse};
