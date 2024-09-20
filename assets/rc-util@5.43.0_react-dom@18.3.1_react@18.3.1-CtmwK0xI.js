import{g as m,f as g,i as x,l as J,h as G}from"./@babel_runtime@7.25.6-DiS1YWA7.js";import{r as l,W as ee}from"./react@18.3.1-DCuS0edz.js";import{r as S}from"./react-is@18.3.1-DcfIKM1A.js";import{R as C,a as ne}from"./react-dom@18.3.1_react@18.3.1-B5gAUVkY.js";function j(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function re(n,e){if(!n)return!1;if(n.contains)return n.contains(e);for(var r=e;r;){if(r===n)return!0;r=r.parentNode}return!1}var U="data-rc-order",I="data-rc-priority",te="rc-util-key",A=new Map;function B(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):te}function N(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function ae(n){return n==="queue"?"prependQueue":n?"prepend":"append"}function T(n){return Array.from((A.get(n)||n).children).filter(function(e){return e.tagName==="STYLE"})}function Q(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!j())return null;var r=e.csp,t=e.prepend,i=e.priority,u=i===void 0?0:i,o=ae(t),c=o==="prependQueue",s=document.createElement("style");s.setAttribute(U,o),c&&u&&s.setAttribute(I,"".concat(u)),r!=null&&r.nonce&&(s.nonce=r==null?void 0:r.nonce),s.innerHTML=n;var f=N(e),d=f.firstChild;if(t){if(c){var E=(e.styles||T(f)).filter(function(v){if(!["prepend","prependQueue"].includes(v.getAttribute(U)))return!1;var z=Number(v.getAttribute(I)||0);return u>=z});if(E.length)return f.insertBefore(s,E[E.length-1].nextSibling),s}f.insertBefore(s,d)}else f.appendChild(s);return s}function V(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=N(e);return(e.styles||T(r)).find(function(t){return t.getAttribute(B(e))===n})}function Ie(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=V(n,e);if(r){var t=N(e);t.removeChild(r)}}function ue(n,e){var r=A.get(n);if(!r||!re(document,r)){var t=Q("",e),i=t.parentNode;A.set(n,i),n.removeChild(t)}}function Le(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=N(r),i=T(t),u=m(m({},r),{},{styles:i});ue(t,u);var o=V(e,u);if(o){var c,s;if((c=u.csp)!==null&&c!==void 0&&c.nonce&&o.nonce!==((s=u.csp)===null||s===void 0?void 0:s.nonce)){var f;o.nonce=(f=u.csp)===null||f===void 0?void 0:f.nonce}return o.innerHTML!==n&&(o.innerHTML=n),o}var d=Q(n,u);return d.setAttribute(B(u),e),d}function Y(n){var e;return n==null||(e=n.getRootNode)===null||e===void 0?void 0:e.call(n)}function oe(n){return Y(n)instanceof ShadowRoot}function Pe(n){return oe(n)?Y(n):null}var M={},ie=function(e){};function ce(n,e){}function se(n,e){}function fe(){M={}}function q(n,e,r){!e&&!M[r]&&(n(!1,r),M[r]=!0)}function R(n,e){q(ce,n,e)}function le(n,e){q(se,n,e)}R.preMessage=ie;R.resetWarned=fe;R.noteOnce=le;function we(n,e,r){var t=l.useRef({});return(!("value"in t.current)||r(t.current.condition,e))&&(t.current.value=n(),t.current.condition=e),t.current.value}var De=function(e,r){typeof e=="function"?e(r):g(e)==="object"&&e&&"current"in e&&(e.current=r)},Fe=function(e){var r,t,i=S.isMemo(e)?e.type.type:e.type;return!(typeof i=="function"&&!((r=i.prototype)!==null&&r!==void 0&&r.render)&&i.$$typeof!==S.ForwardRef||typeof e=="function"&&!((t=e.prototype)!==null&&t!==void 0&&t.render)&&e.$$typeof!==S.ForwardRef)};function L(n){return l.isValidElement(n)&&!S.isFragment(n)}Number(l.version.split(".")[0])>=19;function P(n){return n instanceof HTMLElement||n instanceof SVGElement}function de(n){return n&&g(n)==="object"&&P(n.nativeElement)?n.nativeElement:P(n)?n:null}function Ke(n){var e=de(n);if(e)return e;if(n instanceof ee.Component){var r;return(r=C.findDOMNode)===null||r===void 0?void 0:r.call(C,n)}return null}var Z=function(e){return+setTimeout(e,16)},$=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(Z=function(e){return window.requestAnimationFrame(e)},$=function(e){return window.cancelAnimationFrame(e)});var w=0,y=new Map;function X(n){y.delete(n)}var Ee=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;w+=1;var t=w;function i(u){if(u===0)X(t),e();else{var o=Z(function(){i(u-1)});y.set(t,o)}}return i(r),t};Ee.cancel=function(n){var e=y.get(n);return X(n),$(e)};function be(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function i(u,o){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=t.has(u);if(R(!s,"Warning: There may be circular references"),s)return!1;if(u===o)return!0;if(r&&c>1)return!1;t.add(u);var f=c+1;if(Array.isArray(u)){if(!Array.isArray(o)||u.length!==o.length)return!1;for(var d=0;d<u.length;d++)if(!i(u[d],o[d],f))return!1;return!0}if(u&&o&&g(u)==="object"&&g(o)==="object"){var E=Object.keys(u);return E.length!==Object.keys(o).length?!1:E.every(function(v){return i(u[v],o[v],f)})}return!1}return i(n,e)}var D=j()?l.useLayoutEffect:l.useEffect,He=function(e,r){var t=l.useRef(!0);D(function(){return e(t.current)},r),D(function(){return t.current=!1,function(){t.current=!0}},[])};function h(n,e){for(var r=n,t=0;t<e.length;t+=1){if(r==null)return;r=r[e[t]]}return r}function k(n,e,r,t){if(!e.length)return r;var i=J(e),u=i[0],o=i.slice(1),c;return!n&&typeof u=="number"?c=[]:Array.isArray(n)?c=x(n):c=m({},n),t&&r===void 0&&o.length===1?delete c[u][o[0]]:c[u]=k(c[u],o,r,t),c}function _(n,e,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.length&&t&&r===void 0&&!h(n,e.slice(0,-1))?n:k(n,e,r,t)}function ve(n){return g(n)==="object"&&n!==null&&Object.getPrototypeOf(n)===Object.prototype}function F(n){return Array.isArray(n)?[]:{}}var ge=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function We(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var t=F(e[0]);return e.forEach(function(i){function u(o,c){var s=new Set(c),f=h(i,o),d=Array.isArray(f);if(d||ve(f)){if(!s.has(f)){s.add(f);var E=h(t,o);d?t=_(t,o,[]):(!E||g(E)!=="object")&&(t=_(t,o,F(f))),ge(f).forEach(function(v){u([].concat(x(o),[v]),s)})}}else t=_(t,o,f)}u([])}),t}function K(n){var e=l.useRef();e.current=n;var r=l.useCallback(function(){for(var t,i=arguments.length,u=new Array(i),o=0;o<i;o++)u[o]=arguments[o];return(t=e.current)===null||t===void 0?void 0:t.call.apply(t,[e].concat(u))},[]);return r}function xe(n){var e=l.useRef(!1),r=l.useState(n),t=G(r,2),i=t[0],u=t[1];l.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]);function o(c,s){s&&e.current||u(c)}return[i,o]}function Ge(n){var e=l.useReducer(function(c){return c+1},0),r=G(e,2),t=r[1],i=l.useRef(n),u=K(function(){return i.current}),o=K(function(c){i.current=typeof c=="function"?c(i.current):c,t()});return[u,o]}var me=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,pe=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Se="".concat(me," ").concat(pe).split(/[\s\n]+/),Ne="aria-",Re="data-";function b(n,e){return n.indexOf(e)===0}function je(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;e===!1?r={aria:!0,data:!0,attr:!0}:e===!0?r={aria:!0}:r=m({},e);var t={};return Object.keys(n).forEach(function(i){(r.aria&&(i==="role"||b(i,Ne))||r.data&&b(i,Re)||r.attr&&Se.includes(i))&&(t[i]=n[i])}),t}var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var r=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||r>=a.F1&&r<=a.F12)return!1;switch(r){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE||e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY||e>=a.A&&e<=a.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&e===0)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},p=m({},ne),_e=p.version,Ae=p.render;p.unmountComponentAtNode;var O;try{var Me=Number((_e||"").split(".")[0]);Me>=18&&(O=p.createRoot)}catch{}function H(n){var e=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&g(e)==="object"&&(e.usingClientEntryPoint=n)}var W="__rc_react_root__";function he(n,e){H(!0);var r=e[W]||O(e);H(!1),r.render(n),e[W]=r}function Te(n,e){Ae(n,e)}function Be(n,e){if(O){he(n,e);return}Te(n,e)}export{a as K,Le as a,R as b,j as c,we as d,Be as e,Ee as f,Pe as g,xe as h,be as i,Ge as j,K as k,De as l,We as m,Ke as n,je as p,Ie as r,Fe as s,He as u,ce as w};
