(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{443:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(433),c=n(432);function o(e){Object(c.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(0,0,0,0),t}function l(e,t){Object(c.a)(2,arguments);var n=o(e),r=o(t);return n.getTime()===r.getTime()}},451:function(e,t,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("1db0c2f4",content,!0,{sourceMap:!1})},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(433),c=n(432);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()<Date.now()}},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(433),c=n(432);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()>Date.now()}},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(433),c=n(441),o=n(432);function l(e,t){Object(o.a)(1,arguments);var n=t||{},l=n.locale,f=l&&l.options&&l.options.weekStartsOn,v=null==f?0:Object(c.a)(f),O=null==n.weekStartsOn?v:Object(c.a)(n.weekStartsOn);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=Object(r.a)(e),j=w.getDay(),d=(j<O?7:0)+j-O;return w.setDate(w.getDate()-d),w.setHours(0,0,0,0),w}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(443),c=n(432);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e,Date.now())}},457:function(e,t,n){"use strict";n(451)},458:function(e,t,n){var r=n(61)(!1);r.push([e.i,".mt-05[data-v-836ace3a]{margin-top:.05rem}",""]),e.exports=r},460:function(e,t,n){"use strict";n.r(t);n(44);var r=n(470),c=n(452),o=n(495),l=n(454),f=n(433),v=n(441),O=n(432);function w(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=w(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var j=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=w(e))&&(n&&(n+=" "),n+=t);return n},d=n(35),m=Object(d.b)({props:{week:{type:Object,required:!0}},setup:function(e){var t=Object(d.a)((function(){return new Date(e.week.week)})),n=Object(d.a)((function(){return Object(r.a)(new Date,t.value,{weekStartsOn:1})?"current":Object(c.a)(t.value)?"past":"future"})),w=Object(d.a)((function(){return"".concat(Object(o.a)(Object(l.a)(t.value,{weekStartsOn:1}),"MMM d")," → ").concat(Object(o.a)(function(e,t){Object(O.a)(1,arguments);var n=t||{},r=n.locale,c=r&&r.options&&r.options.weekStartsOn,o=null==c?0:Object(v.a)(c),l=null==n.weekStartsOn?o:Object(v.a)(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=Object(f.a)(e),j=w.getDay(),d=6+(j<l?-7:0)-(j-l);return w.setDate(w.getDate()+d),w.setHours(23,59,59,999),w}(t.value,{weekStartsOn:1}),"MMM d"))}));return{format:o.a,weekStatus:n,weekDates:w,clsx:j}}}),y=(n(457),n(15)),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-start space-x-2"},[n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tl"},expression:"{ theme: 'tl' }"}],staticClass:"relative flex items-center justify-center flex-none w-10 h-10 font-mono text-sm font-semibold border rounded-lg shadow",class:e.clsx({"text-pink-600":"current"===e.weekStatus,"bg-gray-100 text-gray-500":"past"===e.weekStatus,"bg-white":"future"===e.weekStatus}),attrs:{content:e.weekDates}},[e._v("\n    W"+e._s(e.week.number)+"\n    "),["current","past"].includes(e.weekStatus)?[n("TIcon",{staticClass:"absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1",class:"current"===e.weekStatus?"text-pink-600":"text-gray-700",attrs:{icon:"current"===e.weekStatus?"hourglass-half":"check-circle"}})]:e._e()],2),e._v(" "),n("div",[e.week.events.length||e.week.milestones.length?[e.week.events.length?n("ul",{staticClass:"mt-1 text-xs",class:{"opacity-75":"past"===e.weekStatus}},e._l(e.week.events,(function(t){return n("li",{key:t.slug,staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:"current"===e.weekStatus?"text-pink-600":"text-gray-300",attrs:{icon:"calendar-day"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold"},[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v("\n              "+e._s(e.format(new Date(t.date),"MMM d"))+"\n            ")])])])})),0):e._e(),e._v(" "),e.week.milestones.length?n("ul",{staticClass:"mt-1 text-xs",class:{"opacity-75":"past"===e.weekStatus}},e._l(e.week.milestones,(function(t){return n("li",{key:t.slug,staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:"current"===e.weekStatus?"text-pink-600":"text-gray-300",attrs:{icon:"check-square"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold"},[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v("Due "+e._s(e.format(new Date(t.deadline),"MMM d")))])])])})),0):e._e()]:n("p",{staticClass:"text-xs italic text-gray-400"},[e._v("—")])],2)])}),[],!1,null,"836ace3a",null);t.default=component.exports;installComponents(component,{TIcon:n(151).default})},461:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(30),n(19),n(33),n(20),n(37);var r=n(10),c=(n(32),n(29),n(107),n(35)),o=n(452),l=n(455),f=n(453),v=n(433),O=n(432);var w=n(443);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=function(e){var t=Object(c.a)((function(){return e.map((function(e){return d(d({},e),{},{date:new Date(e.date)})}))})),n=Object(c.a)((function(){return t.value.filter((function(e){var t=e.date;return Object(o.a)(t)&&!Object(l.a)(t)}))})),r=Object(c.a)((function(){return t.value.filter((function(e){var t=e.date;return Object(f.a)(t)||Object(l.a)(t)}))})),j=Object(c.a)((function(){var e=r.value.map((function(e){return e.date})),t=function(e,t){Object(O.a)(2,arguments);var n=Object(v.a)(e);if(isNaN(n))return new Date(NaN);var r,c,o=n.getTime();return(null==t?[]:"function"==typeof t.forEach?t:Array.prototype.slice.call(t)).forEach((function(e){var t=Object(v.a)(e);if(isNaN(t))return r=new Date(NaN),void(c=NaN);var n=Math.abs(o-t.getTime());(null==r||n<c)&&(r=t,c=n)})),r}(new Date,e);return r.value.find((function(e){var n=e.date;return Object(w.a)(n,t)}))}));return{events:t,pastEvents:n,currentEvent:j,futureEvents:r,isToday:l.a,isFuture:f.a,isPast:o.a,isSameDay:w.a}}},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(454),c=n(432);function o(e,t,n){Object(c.a)(2,arguments);var o=Object(r.a)(e,n),l=Object(r.a)(t,n);return o.getTime()===l.getTime()}},472:function(e,t,n){"use strict";n.r(t);n(30),n(19),n(33),n(20),n(37);var r=n(10),c=(n(32),n(29),n(35)),o=n(441),l=n(433),f=n(432);function v(e,t){Object(f.a)(2,arguments);var n=Object(l.a)(e),r=Object(o.a)(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function O(e,t){Object(f.a)(2,arguments);var n=Object(o.a)(t),r=7*n;return v(e,r)}var w=n(454);var j=n(470),d=n(461);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(c.b)({props:{timeline:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(e){var t=Object(d.a)(e.events).pastEvents;return{compiledTimeline:Object(c.d)(function(t){var n=t.timeline;if(!n)return[];var r=0;return n.map((function(t){var n=function(e,t){Object(f.a)(1,arguments);var n=e||{},r=Object(l.a)(n.start),c=Object(l.a)(n.end),o=c.getTime();if(!(r.getTime()<=o))throw new RangeError("Invalid interval");var v=Object(w.a)(r,t),j=Object(w.a)(c,t);v.setHours(15),j.setHours(15),o=j.getTime();for(var d=[],m=v;m.getTime()<=o;)m.setHours(0),d.push(Object(l.a)(m)),(m=O(m,1)).setHours(15);return d}({start:new Date(t.startDate),end:new Date(t.endDate)},{weekStartsOn:1}).map((function(t){var n=r,c=function(e,t){return t.filter((function(t){return Object(j.a)(new Date(e),new Date(t.date),{weekStartsOn:1})}))}(t,e.events),o=function(e,t){return t.filter((function(t){return Object(j.a)(new Date(e),new Date(t.deadline),{weekStartsOn:1})}))}(t,e.milestones);return r++,{number:n,events:c,milestones:o,week:t}}));return y(y({},t),{},{weeks:n})}))}(e.timeline)),pastEvents:t}}}),h=n(15),component=Object(h.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full",class:{"pt-8":e.pastEvents.length}},[n("div",{staticClass:"w-full p-8 mx-auto bg-white border shadow-lg rounded-xl"},[e.compiledTimeline.length?n("ul",{staticClass:"space-y-8"},e._l(e.compiledTimeline,(function(t){return n("li",{key:t.startDate},[n("h3",{staticClass:"flex items-center justify-between mb-4 text-xs font-semibold tracking-wide uppercase"},[n("span",[e._v(e._s(t.title))]),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",theme:"tl"},expression:"{ placement: 'right', theme: 'tl' }"}],staticClass:"py-1 pl-2 text-gray-500",attrs:{content:t.description}},[n("TIcon",{attrs:{icon:"question-circle"}})],1)]),e._v(" "),n("div",{staticClass:"space-y-4"},e._l(t.weeks,(function(e){return n("TimelineWeek",{key:e.number,attrs:{week:e}})})),1)])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(151).default,TimelineWeek:n(460).default})}}]);