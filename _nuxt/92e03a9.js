(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,12,14,21],{452:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("1eb89c8e",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n.r(e);var r=n(10),o=Object(r.b)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:t.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:t.resource.url,target:"_blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(152).default})},457:function(t,e,n){"use strict";n(452)},458:function(t,e,n){var r=n(56)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},459:function(t,e,n){"use strict";n.r(e);var r=n(10),o=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(457),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},460:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(10),o=n(462),l=n(465),c=n(482),v=n(469),f=function(t){var e=Object(r.a)((function(){return Object(o.a)(t.date)})),n=Object(r.a)((function(){return Object(l.a)(t.date)}));return{isLive:Object(r.a)((function(){var e=Object(c.a)(new Date,t.date);return e>=0&&e<=120})),isFutureDate:e,isTodayDate:n,isInOneHour:Object(r.a)((function(){var e=Object(c.a)(t.date,new Date);return e<=60&&e>=0})),isPastDate:Object(r.a)((function(){return Object(v.a)(t.date)}))}}},461:function(t,e,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("58ecba5e",content,!0,{sourceMap:!1})},463:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("52760e26",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n.r(e);n(29),n(23),n(24),n(33),n(19),n(37);var r=n(11),o=n(529),l=n(10),c=n(460);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(l.b)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.date),n=Object(c.a)(f(f({},t.tlEvent),{},{date:e})),r=n.isPastDate,v=n.isFutureDate,d=n.isLive,m=n.isInOneHour,h=Object(l.a)((function(){return t.tlEvent.resources||t.tlEvent.forms||t.tlEvent.meetings})),O=Object(l.a)((function(){return d.value?"Taking":r.value?"Took":"Takes"}));return{format:o.a,eventDate:e,hasResources:h,isInOneHour:m,isLive:d,isPastDate:r,isFutureDate:v,verb:O}}}),m=(n(470),n(16)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastDate&&!t.isLive,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.eventDate}}):t._e(),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n            "+t._s(t.tlEvent.title)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.title)+"\n        ")])],t._v(" "),n("div",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.verb)+" place on\n          "+t._s(t.format(t.eventDate,"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.$md.render(t.tlEvent.description))}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[(t.isInOneHour||t.isLive)&&t.tlEvent.meetings&&t.tlEvent.meetings.length?[n("EventListItemResourceList",{attrs:{resources:t.tlEvent.meetings,title:"Meeting Rooms"}})]:t.isCurrentEvent?[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n          Other event links will be posted soon!\n        ")])]:t._e(),t._v(" "),t.isLive||t.isPastDate||t.showResources||t.tlEvent.showResources?[t.tlEvent.forms&&t.tlEvent.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.resources&&t.tlEvent.resources.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.resources,title:"Resources"}}):t._e()]:t._e()],2):t._e()],1)])}),[],!1,null,"4126baa0",null);e.default=component.exports;installComponents(component,{Stamp:n(467).default,TIcon:n(152).default,EventListItemResourceList:n(468).default,WrapperContentBox:n(459).default})},467:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(460),l=Object(r.b)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(o.a)({date:t.date}),n=e.isLive,l=e.isFutureDate,c=e.isTodayDate,text=Object(r.a)((function(){return n.value?"live!":c.value?"today!":"next"})),v=Object(r.a)((function(){return l.value&&!c.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:l,isTodayDate:c,text:text,classNames:v,isLive:n}}}),c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,n){"use strict";n.r(e);var r=n(10),o=Object(r.b)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(456).default})},470:function(t,e,n){"use strict";n(461)},471:function(t,e,n){var r=n(56)(!1);r.push([t.i,".title-link:hover .icon[data-v-4126baa0]{display:inline-block}",""]),t.exports=r},473:function(t,e,n){"use strict";n(463)},474:function(t,e,n){var r=n(56)(!1);r.push([t.i,".milestone-grid[data-v-29793383]{display:grid;grid-gap:1rem;grid-template-columns:auto 1fr}.shadow-inner-pink[data-v-29793383]{--tw-shadow:inset 0 4px 8px 0 rgba(250,30,90,0.15);box-shadow:0 0 #fa1e5a,0 0 #fa1e5a,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #fa1e5a),var(--tw-ring-shadow,0 0 #fa1e5a),var(--tw-shadow)}.title-link:hover .icon[data-v-29793383]{display:inline-block}",""]),t.exports=r},478:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(529),l=Object(r.b)({props:{milestone:{type:Object,required:!0},alwaysShowTasks:{type:Boolean}},setup:function(){var t=Object(r.e)(!1);return{showTasks:t,toggleTasks:function(){return t.value=!t.value},format:o.a}}}),c=(n(473),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 bg-pink-100 border shadow-inner-pink lg:p-6 rounded-xl"},[n("article",{staticClass:"relative pt-8 lg:pt-0 milestone-grid"},[n("div",{staticClass:"-mt-1 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("header",{staticClass:"flex items-center space-x-4"},[n("div",[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.milestone.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold text-pink-900 hover:underline"},[t._v("\n            "+t._s(t.milestone.title)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-pink-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("ClientOnly",[n("p",{staticClass:"text-lg"},[t._v("\n            Due\n            "+t._s(t.format(new Date(t.milestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n          ")])])],1)]),t._v(" "),n("div"),t._v(" "),n("main",{staticClass:"space-y-8"},[n("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.milestone.description))}}),t._v(" "),t.milestone.todos.length?[t.alwaysShowTasks?t._e():n("p",[t.showTasks?n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks||t.alwaysShowTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.milestone.todos,(function(e){return n("li",{key:e.name,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-pink-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),e.resources?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t,"on-pink":""}})],1)})),0):t._e()])])})),0):t._e()]:t._e()],2)])])}),[],!1,null,"29793383",null);e.default=component.exports;installComponents(component,{TIcon:n(152).default,ResourceListItem:n(456).default})},488:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("7cd9aaea",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(488)},494:function(t,e,n){var r=n(56)(!1);r.push([t.i,".link-grid[data-v-0e5491d9]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}",""]),t.exports=r},503:function(t,e,n){"use strict";n.r(e);n(29),n(23),n(33),n(19),n(37);var r=n(11),o=(n(35),n(24),n(10)),l=n(469),c=n(462);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=Object(o.b)({props:{milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=t.milestones.map((function(t){return f(f({},t),{},{deadline:new Date(t.deadline)})})),n=Object(o.a)((function(){return e.filter((function(t){var e=t.deadline;return Object(l.a)(e)}))})),r=Object(o.a)((function(){return e.filter((function(t){var e=t.deadline;return Object(c.a)(e)}))})),v=Object(o.a)((function(){return r.value&&r.value.length?r.value[0]:null}));return{pastMilestones:n,futureMilestones:r,currentMilestone:v}}}),m=(n(493),n(16)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentMilestone?n("MilestoneListItem",{attrs:{milestone:t.currentMilestone}}):t._e()],1)}),[],!1,null,"0e5491d9",null);e.default=component.exports;installComponents(component,{MilestoneListItem:n(478).default})},504:function(t,e,n){"use strict";n.r(e);var r=n(10),o=Object(r.b)({props:{show:{type:Boolean},events:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(r.e)(!1);return{showEvents:t,toggle:function(){return t.value=!t.value}}}}),l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[t.show?n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.slug},[n("EventListItem",{attrs:{"tl-event":t,"is-past-event":"","show-resources":"","show-permalink":""}})],1)})),0):t._e()]:n("div",[n("p",[t._v("No Past Events.")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EventListItem:n(466).default})},505:function(t,e,n){"use strict";n.r(e);var r=n(10),o=Object(r.b)({props:{events:{type:Array,default:function(){return[]}}},setup:function(){return{}}}),l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[n("div",{staticClass:"flex justify-end mb-8"},[n("div",{staticClass:"flex space-x-4 text-gray-500 focus:outline-none active:outline-none"},[n("p",{staticClass:"text-center"},[t._v("Future Events")]),t._v(" "),n("p",{staticClass:"text-center"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}})],1)])]),t._v(" "),n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.slug},[n("EventListItem",{attrs:{"tl-event":t,"show-permalink":""}})],1)})),0)]:n("div",[n("p",[t._v("No Past Events.")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(152).default,EventListItem:n(466).default})},526:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(29),n(23),n(33),n(19),n(37),n(11)),l=(n(35),n(24),n(153),n(484)),c=n(469),v=n(465),f=n(462),d=n(513),m=n(454);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(r.b)({props:{events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=function(t){var e=Object(r.a)((function(){return t.map((function(t){return O(O({},t),{},{date:Object(l.a)(t.date)})}))})),n=Object(r.a)((function(){return e.value.filter((function(t){var e=t.date;return Object(c.a)(e)&&!Object(v.a)(e)}))})),o=Object(r.a)((function(){return e.value.filter((function(t){var e=t.date;return Object(f.a)(e)||Object(v.a)(e)}))})),h=Object(r.a)((function(){var t=o.value.map((function(t){return t.date})),e=Object(d.a)(new Date,t);return o.value.find((function(t){var n=t.date;return Object(m.a)(n,e)}))}));return{events:e,pastEvents:n,currentEvent:h,futureEvents:o,isToday:v.a,isFuture:f.a,isPast:c.a,isSameDay:m.a}}(t.events);return{pastEvents:e.pastEvents,currentEvent:e.currentEvent,futureEvents:e.futureEvents,isToday:e.isToday,showPastEvents:Object(r.e)(!1)}}}),x=n(16),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-8"},[t.milestones.length?n("Milestones",{attrs:{milestones:t.milestones}}):t._e()],1),t._v(" "),t.pastEvents.length?n("div",[n("div",{staticClass:"flex items-start justify-end h-8"},[n("button",{staticClass:"flex space-x-4 text-gray-500 focus:outline-none active:outline-none",on:{click:function(e){t.showPastEvents=!t.showPastEvents}}},[n("p",{staticClass:"text-center"},[t._v("\n          "+t._s(t.showPastEvents?"Hide":"Show")+" Past Events\n        ")]),t._v(" "),n("p",{staticClass:"text-center"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.showPastEvents?"eye-slash":"chevron-up"}})],1)])]),t._v(" "),n("EventsPast",{attrs:{events:t.pastEvents,show:t.showPastEvents}})],1):t._e(),t._v(" "),n("div",{staticClass:"mb-8"},[n("ClientOnly",[n("EventListItem",{attrs:{"tl-event":t.currentEvent,"is-current-event":"","show-permalink":""}})],1)],1),t._v(" "),t.futureEvents.length?n("EventsFuture",{attrs:{events:t.futureEvents.filter((function(e){return e.slug!==t.currentEvent.slug}))}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Milestones:n(503).default,TIcon:n(152).default,EventsPast:n(504).default,EventListItem:n(466).default,EventsFuture:n(505).default})}}]);