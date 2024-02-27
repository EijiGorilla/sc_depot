/*! For license information please see 2475.9c806afb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_depot=self.webpackChunksc_depot||[]).push([[2475],{22475:(t,e,r)=>{r.r(e),r.d(e,{DateEngine:()=>n});class n{constructor(){this._formatterCache=new Map,this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(t){return new Date(t)}increase(t){return new Date(t.getTime()+864e5)}formatToIsoDateString(t){const e=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return"".concat(e,"-").concat(r.toString().padStart(2,"0"),"-").concat(n.toString().padStart(2,"0"))}isoToTimeZone(t,e){const r=this._toDate(t),n=this._getFormatter(e).formatToParts(r),[a]=n.filter((t=>{let{type:e}=t;return"timeZoneName"===e})).map((t=>{let{value:e}=t;return e})),o=this._getTimeZoneOffsetInMins(a),i=r.getMinutes()-(r.getTimezoneOffset()-o);return r.setMinutes(i),r}same(t,e){return t.getTime()===e.getTime()}_toDate(t){return new Date(t)}_getFormatter(t){let e=this._formatterCache.get(t);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:t,...this._commonDateTimeFormatterOptions}),this._formatterCache.set(t,e)),e}_getTimeZoneOffsetInMins(t){const[e,...r]=t.slice(3),[n,a]=r.join("").split(":");return("+"===e?1:-1)*(60*Number(n)+Number(a||0))}}}}]);
//# sourceMappingURL=2475.9c806afb.chunk.js.map