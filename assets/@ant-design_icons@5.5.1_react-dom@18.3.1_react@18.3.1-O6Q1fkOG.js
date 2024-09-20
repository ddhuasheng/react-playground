import{r,W as h}from"./react@18.3.1-DCuS0edz.js";import{f as x,g as f,k as E,h as k,d as I,j as c}from"./@babel_runtime@7.25.6-DiS1YWA7.js";import{C as M,a as P,b as W,D as B,E as U,I as q,L as G,M as H,S as J,c as K}from"./@ant-design_icons-svg@4.4.2-4XUbuOLO.js";import{c as Q}from"./classnames@2.5.1-DruX3ml_.js";import{g as V,b as X}from"./@ant-design_colors@7.1.0-G2uXqmX4.js";import{b as Y,g as Z,a as nn}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1-CtmwK0xI.js";var O=r.createContext({});function en(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function on(n,e){Y(n,"[@ant-design/icons] ".concat(e))}function R(n){return x(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(x(n.icon)==="object"||typeof n.icon=="function")}function $(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var a=n[o];switch(o){case"class":e.className=a,delete e.class;break;default:delete e[o],e[en(o)]=a}return e},{})}function T(n,e,o){return o?h.createElement(n.tag,f(f({key:e},$(n.attrs)),o),(n.children||[]).map(function(a,i){return T(a,"".concat(e,"-").concat(n.tag,"-").concat(i))})):h.createElement(n.tag,f({key:e},$(n.attrs)),(n.children||[]).map(function(a,i){return T(a,"".concat(e,"-").concat(n.tag,"-").concat(i))}))}function S(n){return V(n)[0]}function _(n){return n?Array.isArray(n)?n:[n]:[]}var rn=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,an=function(e){var o=r.useContext(O),a=o.csp,i=o.prefixCls,s=rn;i&&(s=s.replace(/anticon/g,i)),r.useEffect(function(){var d=e.current,u=Z(d);nn(s,"@ant-design-icons",{prepend:!0,csp:a,attachTo:u})},[])},tn=["icon","className","onClick","style","primaryColor","secondaryColor"],g={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function ln(n){var e=n.primaryColor,o=n.secondaryColor;g.primaryColor=e,g.secondaryColor=o||S(e),g.calculated=!!o}function cn(){return f({},g)}var C=function(e){var o=e.icon,a=e.className,i=e.onClick,s=e.style,d=e.primaryColor,u=e.secondaryColor,v=E(e,tn),y=r.useRef(),m=g;if(d&&(m={primaryColor:d,secondaryColor:u||S(d)}),an(y),on(R(o),"icon should be icon definiton, but got ".concat(o)),!R(o))return null;var l=o;return l&&typeof l.icon=="function"&&(l=f(f({},l),{},{icon:l.icon(m.primaryColor,m.secondaryColor)})),T(l.icon,"svg-".concat(l.name),f(f({className:a,onClick:i,style:s,"data-icon":l.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},v),{},{ref:y}))};C.displayName="IconReact";C.getTwoToneColors=cn;C.setTwoToneColors=ln;function N(n){var e=_(n),o=k(e,2),a=o[0],i=o[1];return C.setTwoToneColors({primaryColor:a,secondaryColor:i})}function sn(){var n=C.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var fn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];N(X.primary);var t=r.forwardRef(function(n,e){var o=n.className,a=n.icon,i=n.spin,s=n.rotate,d=n.tabIndex,u=n.onClick,v=n.twoToneColor,y=E(n,fn),m=r.useContext(O),l=m.prefixCls,w=l===void 0?"anticon":l,F=m.rootClassName,z=Q(F,w,I(I({},"".concat(w,"-").concat(a.name),!!a.name),"".concat(w,"-spin"),!!i||a.name==="loading"),o),p=d;p===void 0&&u&&(p=-1);var A=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,j=_(v),b=k(j,2),D=b[0],L=b[1];return r.createElement("span",c({role:"img","aria-label":a.name},y,{ref:e,tabIndex:p,onClick:u,className:z}),r.createElement(C,{icon:a,primaryColor:D,secondaryColor:L,style:A}))});t.displayName="AntdIcon";t.getTwoToneColor=sn;t.setTwoToneColor=N;var dn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:M}))},En=r.forwardRef(dn),un=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:P}))},kn=r.forwardRef(un),mn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:W}))},On=r.forwardRef(mn),Cn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:B}))},Sn=r.forwardRef(Cn),gn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:U}))},_n=r.forwardRef(gn),yn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:q}))},Nn=r.forwardRef(yn),vn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:G}))},Fn=r.forwardRef(vn),wn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:H}))},zn=r.forwardRef(wn),pn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:J}))},An=r.forwardRef(pn),Tn=function(e,o){return r.createElement(t,c({},e,{ref:o,icon:K}))},jn=r.forwardRef(Tn);export{O as I,Nn as R,En as a,kn as b,_n as c,Fn as d,On as e,zn as f,jn as g,An as h,Sn as i};
