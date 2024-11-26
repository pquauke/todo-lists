(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,'/* copy + paste with Ctrl + Z afterwords, for correct formatting */\n\n/* standards ________________________________________________________________*/\n:root {\n  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  \n  --black010: rgba(0, 0, 0, 0.1);\n  --black050: rgba(0, 0, 0, 0.5);\n  \n  --gray010:rgba(128, 128, 128, 0.1);\n  --gray050:rgba(128, 128, 128, 0.5);\n  --white010: rgba(255, 255, 255, 0.1);\n  --white050: rgba(255, 255, 255, 0.5);\n\n  --accent: lightsteelblue;\n\n  --shadow: 0 0 0.5rem var(--black050);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  \n  outline: none;\n  \n  font-size: 1rem;\n  line-height: 1.5rem;\n  \n  /* border: 1px solid red; */\n}\n\n/* elements _________________________________________________________________*/\n\nhr {\n  border: 1px solid var(--color-black050);\n  width: 75%;\n}\n\n.button,.material-symbols-outlined {\n  cursor: pointer;\n}\n\n/* segments _________________________________________________________________*/\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  /* >header {\n    width: 100vw;\n  } */\n  >main {\n    width: clamp(300px, 100%, 900px);\n    >.container{\n      display: flex;\n      flex-direction: column;\n      gap: 1rem;\n    }\n  }\n  /* >footer {\n    width: 100vw;\n  } */\n}\n\n.noteBookContainer {\n  box-shadow: var(--shadow);\n  padding: 1rem;\n  border-radius: 1rem;\n\n  >.noteBook {\n    line-height: 2rem;\n    \n    >.note {\n      display: flex;\n      margin: 0.5rem 0;\n      \n      >.text {\n        order: 4;\n        flex: 1;\n        margin: 0 0.5rem;\n        background-color: var(--black010);\n        border-radius: 0.25rem;\n      }\n      >.markImportantIcon {order: 1; }\n      >.markDoneIcon {order: 2;}\n      >.date {order: 3; margin-left: 0.25rem;}\n      >.deleteIcon {order: 5;}\n    }\n  }\n}\n\n[data-markimportant = "notImportant"] {\n  color: var(--black010);\n}\n\n.addIcon {\n  margin-left: 24px;\n}\n\n.addNotebook {\n  box-shadow: var(--shadow);\n  padding: 1rem;\n  border-radius: 1rem;\n  color: var(--black050);\n  order: 1000;\n}\n\n.deleteNotebook {\n  color: var(--black050);\n  display: inline;\n  float: right;\n}\n\n.date {\n  position: relative;\n  color: var(--black050);\n\n  >.dateIcon {\n    cursor: pointer;\n  }\n  >.dateInput {\n    position: absolute;\n    opacity: 0;\n    pointer-events: none;\n    width: 0;\n  }\n  >.dateText {\n    display: inline;\n    vertical-align: top;\n    margin-left: 0.25rem;\n  }\n}\n',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),c=n.n(s),u=n(56),d=n.n(u),l=n(540),m=n.n(l),h=n(113),f=n.n(h),g=n(208),b={};b.styleTagTransform=f(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=m(),a()(g.A,b),g.A&&g.A.locals&&g.A.locals;const p=function({parentSelector:t,htmlTag:e,innerHTML:n=" ",attributes:r={}}){const a=document.createElement(e);a.innerHTML=n;for(const[t,e]of Object.entries(r))a.setAttribute(t,e);document.querySelector(t).appendChild(a)},w=function(){const t=function(e,n="container"){const r=[];for(const[a,o]of Object.entries(e))o.domProperties&&r.push({parentSelector:`[data-id="${n}"]`,htmlTag:o.domProperties.htmlTag,...""!==o.domProperties.innerHTML&&{innerHTML:o.domProperties.innerHTML},attributes:o.domProperties.attributes}),"object"!=typeof o||Array.isArray(o)||r.push(...t(o,a));return r};return{changeParent:function(t,e,n){n[t]=e[t],delete e[t]},flattenForDOMaddElement:t}}(),y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function _(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:_({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:_({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:_({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const x={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function P(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const S={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(T.matchPattern);if(!n)return null;const r=n[0],a=t.match(T.parsePattern);if(!a)return null;let o=T.valueCallback?T.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const E={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=y[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>k[t],localize:x,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function O(){return D}Math.pow(10,8);const L=6048e5,W=Symbol.for("constructDateFrom");function C(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&W in t?t[W](e):t instanceof Date?new t.constructor(e):new Date(e)}function H(t,e){return C(e||t,t)}function q(t){const e=H(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function j(t,e){const n=H(t,e?.in);return n.setHours(0,0,0,0),n}function N(t,e){const n=H(t,e?.in);return function(t,e,n){const[r,a]=function(t,...e){const n=C.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=j(r),i=j(a),s=+o-q(o),c=+i-q(i);return Math.round((s-c)/864e5)}(n,function(t,e){const n=H(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function A(t,e){const n=O(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=H(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function I(t,e){return A(t,{...e,weekStartsOn:1})}function Y(t,e){const n=H(t,e?.in),r=n.getFullYear(),a=C(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=I(a),i=C(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=I(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function F(t,e){const n=H(t,e?.in),r=+I(n)-+function(t,e){const n=Y(t,e),r=C(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),I(r)}(n);return Math.round(r/L)+1}function z(t,e){const n=H(t,e?.in),r=n.getFullYear(),a=O(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=C(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=A(i,e),c=C(e?.in||t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=A(c,e);return+n>=+s?r+1:+n>=+u?r:r-1}function B(t,e){const n=H(t,e?.in),r=+A(n,e)-+function(t,e){const n=O(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=z(t,e),o=C(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),A(o,e)}(n,e);return Math.round(r/L)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},X={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const a=z(t,r),o=a>0?a:1-a;return"YY"===e?Q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(Y(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=B(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){const r=F(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=N(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return J(r);case"XXXX":case"XX":return U(r);default:return U(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return J(r);case"xxxx":case"xx":return U(r);default:return U(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(r,":");default:return"GMT"+U(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(r,":");default:return"GMT"+U(r,":")}},t:function(t,e,n){return Q(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return Q(+t,e.length)}};function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+Q(o,2)}function J(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):U(t,e)}function U(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:K,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return R(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",R(r,e)).replace("{{time}}",K(a,e))}},Z=/^D+$/,tt=/^Y+$/,et=["D","DD","YY","YYYY"];function nt(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+H(t)));var e}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,it=/''/g,st=/[a-zA-Z]/;function ct(t){const e=t.match(ot);return e?e[1].replace(it,"'"):t}let ut={};function dt(t){document.querySelector(".container").innerHTML="",w.flattenForDOMaddElement(t).forEach((t=>{p(t)})),lt(),mt(),function(t,e){document.querySelectorAll(".text").forEach((t=>{t.addEventListener("blur",(()=>{const n=t.dataset.id,{foundObject:r,key:a}=ht(e,n),o=t.innerHTML;r[a].domProperties.innerHTML=o,dt(e),gt(e)}))}))}(0,t),document.querySelectorAll(".text").forEach((t=>{t.addEventListener("keydown",(e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),t.blur())}))})),function(t,e){document.querySelectorAll(".deleteNotebook").forEach((t=>{t.addEventListener("click",(()=>{const n=t.dataset.id,r=document.querySelector(`[data-id="${n}"]`).parentElement.dataset.id,{foundObject:a,key:o}=ht(e,r);delete a[o],dt(e),gt(e)}))}))}(0,t),function(t,e){document.querySelectorAll(".deleteIcon").forEach((t=>{t.addEventListener("click",(()=>{const n=t.dataset.id,r=document.querySelector(`[data-id="${n}"]`).parentElement.dataset.id,{foundObject:a,key:o}=ht(e,r);delete a[o],dt(e),gt(e)}))}))}(0,t),function(t,e){document.querySelectorAll(".markDoneIcon").forEach((t=>{t.addEventListener("click",(()=>{const n=t.dataset.id,r=(document.querySelector(`[data-id="${n}"]`).parentElement,n),{foundObject:a,key:o}=ht(e,r);"check_box"==a[o].domProperties.innerHTML?a[o].domProperties.innerHTML="check_box_outline_blank":a[o].domProperties.innerHTML="check_box",dt(e),gt(e)}))}))}(0,t),function(t,e){document.querySelectorAll(".markImportantIcon").forEach((t=>{t.addEventListener("click",(()=>{const n=t.dataset.id,{foundObject:r,key:a}=ht(e,n);"important"==r[a].domProperties.attributes["data-markimportant"]?r[a].domProperties.attributes["data-markimportant"]="notImportant":r[a].domProperties.attributes["data-markimportant"]="important",dt(e),gt(e)}))}))}(0,t),ft()}function lt(){document.querySelectorAll(".addNotebook").forEach((t=>{t.addEventListener("click",(()=>{const t=Date.now(),e={[t+1]:{domProperties:{htmlTag:"div",attributes:{"data-id":[t+1],class:"noteBookContainer"}},[t+2]:{domProperties:{htmlTag:"div",innerHTML:"Notebook",attributes:{"data-id":[t+2],class:"noteBook"}}},[t+3]:{domProperties:{htmlTag:"div",innerHTML:"add",attributes:{"data-id":[t+3],class:"material-symbols-outlined addIcon"}}},[t+4]:{domProperties:{htmlTag:"div",innerHTML:"delete Notebook",attributes:{"data-id":[t+4],class:"deleteNotebook button"}}}}};Object.assign(ut,e),dt(ut),gt(ut)}))}))}function mt(){document.querySelectorAll(".addIcon").forEach((t=>{t.addEventListener("click",(()=>{const e=Date.now(),n={[e+1]:{domProperties:{htmlTag:"div",attributes:{"data-id":e+1,class:"note"}},[e+2]:{domProperties:{htmlTag:"div",attributes:{"data-id":e+2,class:"text",contenteditable:"true"}}},[e+3]:{domProperties:{htmlTag:"div",innerHTML:"delete",attributes:{"data-id":e+3,class:"material-symbols-outlined deleteIcon"}}},[e+4]:{domProperties:{htmlTag:"div",innerHTML:"check_box_outline_blank",attributes:{"data-id":e+4,class:"material-symbols-outlined markDoneIcon"}}},[e+5]:{domProperties:{htmlTag:"div",innerHTML:"priority_high",attributes:{"data-id":e+5,"data-markimportant":"notImportant",class:"material-symbols-outlined markImportantIcon"}}},[e+6]:{domProperties:{htmlTag:"div",attributes:{"data-id":e+6,class:"date"}},[e+7]:{domProperties:{htmlTag:"input",attributes:{"data-id":e+7,type:"date",class:"dateInput"}}},[e+8]:{domProperties:{htmlTag:"div",innerHTML:"calendar_month",attributes:{"data-id":e+8,class:"material-symbols-outlined button dateIcon"}}},[e+9]:{domProperties:{htmlTag:"div",innerHTML:"CW‒‒",attributes:{"data-id":e+9,class:"dateText"}}}}}},r=t.dataset.id,a=document.querySelector(`[data-id="${r}"]`).previousSibling.dataset.id,{foundObject:o,key:i}=ht(ut,a);Object.assign(o[i],n),dt(ut),gt(ut)}))}))}function ht(t,e){for(const n in t){if(n==e)return{foundObject:t,key:n};if("object"==typeof t[n]){const r=ht(t[n],e);if(r)return r}}}function ft(){document.querySelectorAll(".dateIcon").forEach((t=>{t.addEventListener("click",(()=>{t.previousSibling.showPicker()}))})),document.querySelectorAll(".dateInput").forEach((t=>{t.addEventListener("change",(()=>{const e=t.dataset.id,{foundObject:n,key:r}=ht(ut,e),a=t.value;n[r].domProperties.attributes.value=a;n[parseInt(r)+2].domProperties.innerHTML=""!==a?`CW${function(t,e,n){const r=O(),a=n?.locale??r.locale??E,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=H(t,n?.in);if(!nt(s))throw new RangeError("Invalid time value");let c=e.match(at).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,V[e])(t,a.formatLong):t})).join("").match(rt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ct(t)};if(X[e])return{isToken:!0,value:t};if(e.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return tt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return Z.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),et.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,X[o[0]])(s,o,a.localize,u)})).join("")}(a,"w")}`:"CW‒‒",dt(ut),gt(ut)}))}))}function gt(t){localStorage.clear(),localStorage.setItem("noteBook",JSON.stringify(t))}Date.now(),Object.assign(ut,{addNotebook:{domProperties:{htmlTag:"div",innerHTML:"add new Notebook",attributes:{"data-id":"addNotebook",class:"addNotebook button"}}}}),dt(ut),function(t){const e=JSON.parse(localStorage.getItem("noteBook"));Object.assign(t,e)}(ut),dt(ut)})();