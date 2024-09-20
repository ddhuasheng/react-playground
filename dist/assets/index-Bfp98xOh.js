import{j as r,r as a}from"./react@18.3.1-C7uJT17l.js";import{c as z}from"./react-dom@18.3.1_react@18.3.1-CuMhX0yi.js";import{H as S}from"./allotment@1.20.2_react-dom@18.3.1_react@18.3.1-B73lRibt.js";import{s as F,z as P,a as L,u as I}from"./fflate@0.8.2-xzzAInUR.js";import{j as O}from"./jszip@3.10.1-CfZwaLQZ.js";import{F as T}from"./file-saver@2.0.5-B7S-oRCE.js";import{c as D}from"./copy-to-clipboard@3.3.3-GjJ3dCGM.js";import{f as Z,g as H,h as $,i as U}from"./@ant-design_icons@5.5.1_react-dom@18.3.1_react@18.3.1-CKa09NWZ.js";import{s as R}from"./antd@5.20.6_react-dom@18.3.1_react@18.3.1-DfXeQfex.js";import{c as k}from"./classnames@2.5.1-CndtHUNX.js";import{d as B}from"./@monaco-editor_react@4.6.0_monaco-editor@0.51.0_react-dom@18.3.1_react@18.3.1-Bw5J7hfI.js";import{s as K}from"./@typescript_ata@0.9.7_typescript@5.5.3-CDH1coxg.js";import{t as W}from"./typescript@5.5.3-vs0YrxPP.js";import{l as N}from"./loadsh@0.0.4-Cs1kYJjW.js";import"./scheduler@0.23.2-CzFDRTuY.js";import"./toggle-selection@1.0.6-BHUZwh74.js";import"./@babel_runtime@7.25.6-DiS1YWA7.js";import"./@ant-design_icons-svg@4.4.2-4XUbuOLO.js";import"./@ant-design_colors@7.1.0-G2uXqmX4.js";import"./@ctrl_tinycolor@3.6.1-DOFZgDuz.js";import"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1-CFaE7ohe.js";import"./react-is@18.3.1-DcfIKM1A.js";import"./@ant-design_cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1-kednbi32.js";import"./@emotion_hash@0.8.0-WldOFDRm.js";import"./@emotion_unitless@0.7.5-BWzHn38B.js";import"./stylis@4.3.4-OW4gUFyn.js";import"./@ant-design_cssinjs-utils@1.1.0_react-dom@18.3.1_react@18.3.1-gHd9LT7W.js";import"./rc-motion@2.9.3_react-dom@18.3.1_react@18.3.1-Bpqotp58.js";import"./rc-pagination@4.2.0_react-dom@18.3.1_react@18.3.1-C2qWPnQ1.js";import"./rc-picker@4.6.14_dayjs@1.11.13_react-dom@18.3.1_react@18.3.1-MP73KQAX.js";import"./rc-notification@5.6.1_react-dom@18.3.1_react@18.3.1-DzA1UhRO.js";import"./@monaco-editor_loader@1.4.0_monaco-editor@0.51.0-UJ2oDQtS.js";import"./state-local@1.0.7-BBNhjlcY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function J(){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:r.jsx("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})}const q="_header_s00pf_1",V="_logo_s00pf_12",j={header:q,logo:V},x=t=>{const e=t.split(".").pop();return["js","jsx"].includes(e)?"javascript":["ts","tsx"].includes(e)?"typescript":["css"].includes(e)?"css":["json"].includes(e)?"json":"javascript"};function Y(t){const e=F(t),o=P(e,{level:9}),n=L(o,!0);return btoa(n)}function X(t){const e=atob(t),o=F(e,!0),n=I(o);return L(n)}async function G(t){const e=new O;Object.keys(t).forEach(n=>{e.file(n,t[n].value)});const o=await e.generateAsync({type:"blob"});T.saveAs(o,`code_${Date.now().toString().slice(-6)}.zip`)}const _="App.tsx",M="App.css",y="import-map.json",C="main.tsx",Q=`import { useState } from 'react'\r
import './App.css'\r
\r
function App() {\r
  const [count, setCount] = useState(0)\r
\r
  return (\r
    <>\r
      <h1>Hello World</h1>\r
      <div className="card">\r
        <button onClick={() => setCount((count) => count + 1)}>\r
          count is {count}\r
        </button>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default App\r
`,ee=`:root {\r
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
  font-weight: 400;\r
  line-height: 1.5;\r
  color: rgb(255 255 255 / 87%);\r
  text-rendering: optimizelegibility;\r
  text-size-adjust: 100%;\r
  background-color: #242424;\r
  color-scheme: light dark;\r
  font-synthesis: none;\r
}\r
\r
#root {\r
  max-width: 1280px;\r
  padding: 2rem;\r
  margin: 0 auto;\r
  text-align: center;\r
}\r
\r
body {\r
  display: flex;\r
  min-width: 320px;\r
  min-height: 100vh;\r
  margin: 0;\r
  place-items: center;\r
}\r
\r
h1 {\r
  font-size: 3.2em;\r
  line-height: 1.1;\r
}\r
\r
button {\r
  padding: 0.6em 1.2em;\r
  font-family: inherit;\r
  font-size: 1em;\r
  font-weight: 500;\r
  cursor: pointer;\r
  background-color: #1a1a1a;\r
  border: 1px solid transparent;\r
  border-radius: 8px;\r
  transition: border-color 0.25s;\r
}\r
\r
button:hover {\r
  border-color: #646cff;\r
}\r
\r
button:focus,\r
button:focus-visible {\r
  outline: 4px auto -webkit-focus-ring-color;\r
}\r
\r
@media (prefers-color-scheme: light) {\r
  :root {\r
    color: #213547;\r
    background-color: #fff;\r
  }\r
\r
  button {\r
    background-color: #f9f9f9;\r
  }\r
}\r
`,te=`import React from 'react'\r
import ReactDOM from 'react-dom/client'\r
\r
import App from './App.tsx'\r
\r
ReactDOM.createRoot(document.getElementById('root')!).render(\r
  <React.StrictMode>\r
    <App />\r
  </React.StrictMode>\r
)\r
`,re=`{\r
  "imports": {\r
    "react": "https://esm.sh/react@18.2.0",\r
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"\r
  }\r
}\r
`,ne={[_]:{language:x(_),name:_,value:Q},[M]:{language:x(M),name:M,value:ee},[C]:{language:x(C),name:C,value:te},[y]:{language:x(y),name:y,value:re}},v=a.createContext({selectedFileName:"App.tsx"}),se=()=>{let t;try{const e=window.location.hash.slice(1);t=JSON.parse(X(e))}catch(e){console.error(e)}return t},oe=({children:t})=>{const[e,o]=a.useState(se()||ne),[n,s]=a.useState("App.tsx"),[c,m]=a.useState("light"),l=i=>{const u=x(i);o({...e,[i]:{language:u,value:"",name:i}})},f=i=>{const{[i]:u,...p}=e;n===i&&s(Object.keys(e)[0]),o(p)},g=(i,u)=>{if(!e[i]||u===void 0||u===null||u===i)return;const{[i]:p,...h}=e,b={[u]:{...p,name:u,language:x(u)}};n===i&&s(u),o({...h,...b})};return a.useEffect(()=>{const i=Y(JSON.stringify(e));window.location.hash=i},[e]),r.jsx(v.Provider,{value:{files:e,selectedFileName:n,theme:c,setTheme:m,setSelectedFileName:s,setFiles:o,addFile:l,removeFile:f,updateFileName:g},children:t})};function ie(){const{theme:t,setTheme:e,files:o}=a.useContext(v);return r.jsxs("div",{className:j.header,children:[r.jsxs("div",{className:j.logo,children:[r.jsx(J,{}),r.jsx("span",{children:"React Playground"})]}),r.jsxs("div",{className:j.links,children:[t==="light"&&r.jsx(Z,{title:"切换暗色主题",className:j.theme,onClick:()=>e("dark")}),t==="dark"&&r.jsx(H,{title:"切换亮色主题",className:j.theme,onClick:()=>e("light")}),r.jsx($,{style:{marginLeft:"10px"},title:"分享代码",onClick:()=>{D(window.location.href),R.success("分享链接已复制。")}}),r.jsx(U,{style:{marginLeft:"10px"},title:"下载代码",onClick:async()=>{await G(o),R.success("下载完成")}})]})]})}const ce="_tabs_nsmo5_1",ae="_actived_nsmo5_31",le="_add_nsmo5_54",w={tabs:ce,"tab-item":"_tab-item_nsmo5_21",actived:ae,"tabs-item-input":"_tabs-item-input_nsmo5_43",add:le};function me({value:t,actived:e,creating:o,readonly:n,onClick:s,onEditComplete:c,onRemove:m}){const[l,f]=a.useState(t),[g,i]=a.useState(o),u=a.useRef(null),p=()=>{n||(i(!0),setTimeout(()=>{var d;(d=u.current)==null||d.focus()}))},h=d=>{d.key==="Enter"&&(i(!1),c(l))},b=()=>{i(!1),c(l)},E=d=>{d.stopPropagation(),!n&&m()};return a.useEffect(()=>{o&&setTimeout(()=>{var d;(d=u.current)==null||d.focus()})},[o]),r.jsx("div",{className:k(w["tab-item"],e?w.actived:null),onClick:s,children:g?r.jsx("input",{className:k(w["tabs-item-input"]),type:"text",ref:u,value:l,onBlur:()=>b(),onKeyDown:d=>h(d),onChange:d=>f(d.target.value)}):r.jsxs(r.Fragment,{children:[r.jsx("span",{onDoubleClick:()=>p(),children:l}),!n&&r.jsx("span",{style:{marginLeft:5,display:"flex"},onClick:d=>E(d),children:r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",children:[r.jsx("line",{stroke:"#999",x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{stroke:"#999",x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})}const ue=[_,C,y];function pe(){const{files:t,removeFile:e,addFile:o,updateFileName:n,setSelectedFileName:s,selectedFileName:c}=a.useContext(v),[m,l]=a.useState([""]),[f,g]=a.useState(!1);a.useEffect(()=>{l(Object.keys(t))},[t]);const i=(p,h)=>{n(h,p),g(!1)},u=()=>{o("Comp"+Math.random().toString().substring(2,6)+".tsx"),g(!0)};return r.jsxs("div",{className:w.tabs,children:[m.map((p,h,b)=>r.jsx(me,{value:p,readonly:ue.includes(p),actived:c===p,creating:f&&h===b.length-1,onClick:()=>s(p),onEditComplete:E=>i(E,p),onRemove:()=>e(p)},p)),r.jsx("div",{className:w.add,onClick:u,children:"+"})]})}function de(t){return K({projectName:"my-ata",typescript:W,logger:console,delegate:{receivedFile:(o,n)=>{t(o,n)}}})}function fe({file:t,onChange:e,options:o}){const n=(s,c)=>{s.addCommand(c.KeyMod.CtrlCmd|c.KeyCode.KeyL,()=>{var l;(l=s.getAction("editor.action.formatDocument"))==null||l.run()}),c.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:c.languages.typescript.JsxEmit.React,esModuleInterop:!0,allowImportingTsExtensions:!0});const m=de((l,f)=>{c.languages.typescript.typescriptDefaults.addExtraLib(l,`file://${f}`)});s.onDidChangeModelContent(()=>{m(s.getValue())}),m(s.getValue())};return r.jsx(B,{height:"100%",path:t.name,language:t.language,value:t.value,onMount:n,onChange:e,options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,tabSize:2,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6},...o}})}function ge(){const{selectedFileName:t,files:e,setFiles:o,theme:n}=a.useContext(v),s=m=>{const l=e[t];l.value=m,o({...e,[t]:l})},c=e[t];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[r.jsx(pe,{}),r.jsx(fe,{file:c,onChange:N.debounce(s,500),options:{theme:`vs-${n}`}})]})}function he(t){return new Worker("/react-playground/assets/compiler.worker-C63qs1_m.js",{name:t==null?void 0:t.name})}const xe=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Preview</title>\r
</head>\r
\r
<body>\r
  <script>\r
    window.addEventListener('error', (e) => {\r
      window.parent.postMessage({\r
        type: 'error',\r
        content: e.message.toString()\r
      })\r
    })\r
  <\/script>\r
  <script type="importmap"><\/script>\r
  <script type="module" id="appSrc"><\/script>\r
  <div id="root"></div>\r
</body>\r
\r
</html>`,ye="_msg_v5z09_1",ve="_error_v5z09_17",be="_warn_v5z09_21",je="_dismiss_v5z09_33",A={msg:ye,error:ve,warn:be,dismiss:je};function we({type:t,content:e}){const[o,n]=a.useState(!1);return a.useEffect(()=>{n(!!e)},[e]),o?r.jsxs("div",{className:k(A.msg,A[t]),children:[r.jsx("pre",{dangerouslySetInnerHTML:{__html:e}}),r.jsx("button",{className:A.dismiss,onClick:()=>n(!1),children:"✕"})]}):null}function _e(){const{files:t}=a.useContext(v),[e,o]=a.useState(""),n=a.useRef(),[s,c]=a.useState({type:"warning",content:""}),m=()=>{const i=xe.replace('<script type="importmap"><\/script>',`<script type="importmap">${t[y].value}<\/script>`).replace('<script type="module" id="appSrc"><\/script>',`<script type="module" id="appSrc">${e}<\/script>`);return URL.createObjectURL(new Blob([i],{type:"text/html"}))},[l,f]=a.useState(m());a.useEffect(N.debounce(()=>{setTimeout(()=>{var i;(i=n.current)==null||i.postMessage({type:"COMPILE",data:t})})},500),[t]),a.useEffect(()=>{f(m())},[t[y].value,e]);const g=i=>{c(i.data)};return a.useEffect(()=>{n.current||(n.current=new he,n.current.addEventListener("message",({data:i})=>{i.type==="COMPILED_CODE"&&o(i.data)}))},[]),a.useEffect(()=>(window.addEventListener("message",g),()=>{window.removeEventListener("message",g)}),[]),r.jsxs("div",{style:{height:"100%"},children:[r.jsx("iframe",{src:l,style:{width:"100%",height:"100%",padding:0,border:"none"}}),r.jsx(we,{...s})]})}function Ce(){const{theme:t}=a.useContext(v);return r.jsxs("div",{className:t,style:{height:"100vh"},children:[r.jsx(ie,{}),r.jsx("div",{style:{height:"calc(100vh - 50px)"},children:r.jsxs(S,{defaultSizes:[100,100],children:[r.jsx(S.Pane,{minSize:0,children:r.jsx(ge,{})}),r.jsx(S.Pane,{minSize:0,children:r.jsx(_e,{})})]})})]})}function Ee(){return r.jsx(oe,{children:r.jsx(Ce,{})})}z(document.getElementById("root")).render(r.jsx(Ee,{}));
