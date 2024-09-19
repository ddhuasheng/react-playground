import{j as o,r as l}from"./react@18.3.1-s8EYNKtE.js";import{c as L}from"./react-dom@18.3.1_react@18.3.1-BcYmX3JC.js";import{H as R}from"./allotment@1.20.2_react-dom@18.3.1_react@18.3.1-B2tePUSx.js";import{c as E}from"./classnames@2.5.1-DruX3ml_.js";import{d as N}from"./@monaco-editor_react@4.6.0_monaco-editor@0.51.0_react-dom@18.3.1_react@18.3.1-BTTenJcm.js";import{s as P}from"./@typescript_ata@0.9.7_typescript@5.5.3-CDH1coxg.js";import{t as F}from"./typescript@5.5.3-oGsUyYu4.js";import{l as k}from"./loadsh@0.0.4-C41Yyf1m.js";import{b as O}from"./@babel_standalone@7.25.6-uQGCugCR.js";import"./scheduler@0.23.2-CzFDRTuY.js";import"./@monaco-editor_loader@1.4.0_monaco-editor@0.51.0-UJ2oDQtS.js";import"./state-local@1.0.7-BBNhjlcY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();function I(){return o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",className:"iconify iconify--logos",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:o.jsx("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})}const T="_header_1plzg_1",z="_logo_1plzg_10",M={header:T,logo:z};function Z(){return o.jsx("div",{className:M.header,children:o.jsxs("div",{className:M.logo,children:[o.jsx(I,{}),o.jsx("span",{children:"React Playground"})]})})}const h=t=>{const e=t.split(".").pop();return["js","jsx"].includes(e)?"javascript":["ts","tsx"].includes(e)?"typescript":["css"].includes(e)?"css":["json"].includes(e)?"json":"javascript"},j="App.tsx",S="App.css",x="import-map.json",y="main.tsx",D=`import { useState } from 'react'\r
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
`,U=`:root {\r
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
`,H=`import React from 'react'\r
import ReactDOM from 'react-dom/client'\r
\r
import App from './App.tsx'\r
\r
ReactDOM.createRoot(document.getElementById('root')!).render(\r
  <React.StrictMode>\r
    <App />\r
  </React.StrictMode>\r
)\r
`,B=`{\r
  "imports": {\r
    "react": "https://esm.sh/react@18.2.0",\r
    "react-dom/client": "https://esm.sh/react-dom@18.2.0"\r
  }\r
}\r
`,w=l.createContext({selectedFileName:"App.tsx"}),W=({children:t})=>{const[e,s]=l.useState({[j]:{language:h(j),name:j,value:D},[S]:{language:h(S),name:S,value:U},[y]:{language:h(y),name:y,value:H},[x]:{language:h(x),name:x,value:B}}),[n,r]=l.useState("App.tsx"),c=a=>{const u=h(a);s({...e,[a]:{language:u,value:"",name:a}})},i=a=>{const{[a]:u,...f}=e;n===a&&r(Object.keys(e)[0]),s(f)},p=(a,u)=>{if(!e[a]||u===void 0||u===null||u===a)return;const{[a]:f,...g}=e,m={[u]:{...f,name:u,language:h(u)}};n===a&&r(u),s({...g,...m})};return o.jsx(w.Provider,{value:{files:e,selectedFileName:n,setSelectedFileName:r,setFiles:s,addFile:c,removeFile:i,updateFileName:p},children:t})},$="_tabs_qwx8k_1",q="_actived_qwx8k_31",J="_add_qwx8k_54",b={tabs:$,"tab-item":"_tab-item_qwx8k_21",actived:q,"tabs-item-input":"_tabs-item-input_qwx8k_43",add:J};function K({value:t,actived:e,creating:s,readonly:n,onClick:r,onEditComplete:c,onRemove:i}){const[p,a]=l.useState(t),[u,f]=l.useState(s),g=l.useRef(null),m=()=>{n||(f(!0),setTimeout(()=>{var d;(d=g.current)==null||d.focus()}))},v=d=>{d.key==="Enter"&&(f(!1),c(p))},C=()=>{f(!1),c(p)},_=d=>{d.stopPropagation(),!n&&i()};return l.useEffect(()=>{s&&setTimeout(()=>{var d;(d=g.current)==null||d.focus()})},[s]),o.jsx("div",{className:E(b["tab-item"],e?b.actived:null),onClick:r,children:u?o.jsx("input",{className:E(b["tabs-item-input"]),type:"text",ref:g,value:p,onBlur:()=>C(),onKeyDown:d=>v(d),onChange:d=>a(d.target.value)}):o.jsxs(o.Fragment,{children:[o.jsx("span",{onDoubleClick:()=>m(),children:p}),!n&&o.jsx("span",{style:{marginLeft:5,display:"flex"},onClick:d=>_(d),children:o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",children:[o.jsx("line",{stroke:"#999",x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{stroke:"#999",x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})}const V=[j,y,x];function Y(){const{files:t,removeFile:e,addFile:s,updateFileName:n,setSelectedFileName:r,selectedFileName:c}=l.useContext(w),[i,p]=l.useState([""]),[a,u]=l.useState(!1);l.useEffect(()=>{p(Object.keys(t))},[t]);const f=(m,v)=>{n(v,m),u(!1)},g=()=>{s("Comp"+Math.random().toString().substring(2,8)+".tsx"),u(!0)};return o.jsxs("div",{className:b.tabs,children:[i.map((m,v,C)=>o.jsx(K,{value:m,readonly:V.includes(m),actived:c===m,creating:a&&v===C.length-1,onClick:()=>r(m),onEditComplete:_=>f(_,m),onRemove:()=>e(m)},m)),o.jsx("div",{className:b.add,onClick:g,children:"+"})]})}function X(t){return P({projectName:"my-ata",typescript:F,logger:console,delegate:{receivedFile:(s,n)=>{console.log("自动下载的包",n),t(s,n)}}})}function G({file:t,onChange:e,options:s}){const n=(r,c)=>{r.addCommand(c.KeyMod.CtrlCmd|c.KeyCode.KeyL,()=>{var p;(p=r.getAction("editor.action.formatDocument"))==null||p.run()}),c.languages.typescript.typescriptDefaults.setCompilerOptions({jsx:c.languages.typescript.JsxEmit.React,esModuleInterop:!0});const i=X((p,a)=>{c.languages.typescript.typescriptDefaults.addExtraLib(p,`file://${a}`)});r.onDidChangeModelContent(()=>{i(r.getValue())}),i(r.getValue())};return o.jsx(N,{height:"100%",path:t.name,language:t.language,value:t.value,onMount:n,onChange:e,options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,tabSize:2,scrollbar:{verticalScrollbarSize:6,horizontalScrollbarSize:6},...s}})}function Q(){const{selectedFileName:t,files:e,setFiles:s}=l.useContext(w),n=c=>{const i=e[t];i.value=c,s({...e,[t]:i})},r=e[t];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[o.jsx(Y,{}),o.jsx(G,{file:r,onChange:k.debounce(n,500)})]})}const ee=(t,e)=>{let s=e;const n=/import\s+React/g;return(t.endsWith(".jsx")||t.endsWith(".tsx"))&&!n.test(e)&&(s=`import React from 'react';
${e}`),s},A=(t,e,s)=>{const n=ee(t,e);let r="";try{r=O.transform(n,{filename:t,presets:["react","typescript"],plugins:[re(s)],retainLines:!0}).code}catch(c){console.log(c)}return r},te=t=>{const e=t[y];return A(y,e.value,t)};function re(t){return{visitor:{ImportDeclaration(e){const s=e.node.source.value;if(s.startsWith(".")){const n=ne(t,s);if(!n)return;n.name.endsWith(".css")?e.node.source.value=oe(n):n.name.endsWith(".json")?e.node.source.value=se(n):e.node.source.value=URL.createObjectURL(new Blob([A(n.name,n.value,t)],{type:"application/javascript"}))}}}}}const ne=(t,e)=>{let s=e.split("./").pop();if(s.includes(".")){const n=Object.keys(t).filter(r=>r.endsWith(".js")||r.endsWith(".ts")||r.endsWith(".tsx")||r.endsWith(".jsx")).find(r=>r.split(".").includes(s));n&&(s=n)}return t[s]},se=t=>{const e=`export default ${t.value}`;return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))},oe=t=>{const s=`
(() => {
  const stylesheet = document.createElement('style');
  stylesheet.id = 'style_${Date.now()}_${t.name}';
  document.head.appendChild(stylesheet);

  const styles = document.createTextNode(\`${t.value}\`);
  stylesheet.innerHTML = ''; 
  stylesheet.appendChild(styles)
})()
  `;return URL.createObjectURL(new Blob([s],{type:"application/javascript"}))},ce=`<!doctype html>\r
<html lang="en">\r
\r
<head>\r
  <meta charset="UTF-8" />\r
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
  <title>Preview</title>\r
</head>\r
\r
<body>\r
  <script type="importmap"><\/script>\r
  <script type="module" id="appSrc"><\/script>\r
  <div id="root"></div>\r
</body>\r
\r
</html>`;function ie(){const{files:t}=l.useContext(w),[e,s]=l.useState(""),n=()=>{const i=ce.replace('<script type="importmap"><\/script>',`<script type="importmap">${t[x].value}<\/script>`).replace('<script type="module" id="appSrc"><\/script>',`<script type="module" id="appSrc">${e}<\/script>`);return URL.createObjectURL(new Blob([i],{type:"text/html"}))},[r,c]=l.useState(n());return l.useEffect(()=>{s(te(t))},[t]),l.useEffect(()=>{c(n())},[t[x].value,e]),console.log(r),o.jsx("div",{style:{height:"100%"},children:o.jsx("iframe",{src:r,style:{width:"100%",height:"100%",padding:0,border:"none"}})})}function ae(){return o.jsxs("div",{style:{height:"100vh"},children:[o.jsx(Z,{}),o.jsxs(R,{defaultSizes:[100,100],children:[o.jsx(R.Pane,{minSize:500,children:o.jsx(Q,{})}),o.jsx(R.Pane,{minSize:0,children:o.jsx(ie,{})})]})]})}function le(){return o.jsx(W,{children:o.jsx(ae,{})})}L(document.getElementById("root")).render(o.jsx(le,{}));
