const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Calculator-DNrddjpg.js","assets/react-BpGoLUa4.js","assets/scheduler-CzFDRTuY.js","assets/mathjs-gcrQXb_T.js","assets/@babel-BlZK9Wcr.js","assets/decimal.js-Dtyavigz.js","assets/complex.js-BLv2k-Vl.js","assets/fraction.js-DqatKmli.js","assets/typed-function-BLyDoq9U.js","assets/seedrandom-BOf-GX2B.js","assets/javascript-natural-sort-C_XCHaXE.js","assets/escape-latex-B2Bmr6N0.js"])))=>i.map(i=>d[i]);
import{r as f,j as i,c as g}from"./react-BpGoLUa4.js";import"./scheduler-CzFDRTuY.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const E="modulepreload",v=function(a){return"/ReactCalculatorProject/"+a},m={},P=function(c,l,d){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(l.map(n=>{if(n=v(n),n in m)return;m[n]=!0;const u=n.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${p}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":E,u||(s.as="script"),s.crossOrigin="",s.href=n,o&&s.setAttribute("nonce",o),document.head.appendChild(s),u)return new Promise((h,y)=>{s.addEventListener("load",h),s.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${n}`)))})}))}function r(t){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t}return e.then(t=>{for(const o of t||[])o.status==="rejected"&&r(o.reason);return c().catch(r)})},j=f.lazy(()=>P(()=>import("./Calculator-DNrddjpg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),L=()=>i.jsx("div",{children:i.jsx(f.Suspense,{fallback:i.jsx("div",{children:"Loading..."}),children:i.jsx(j,{})})});g(document.getElementById("root")).render(i.jsx(f.StrictMode,{children:i.jsx(L,{})}));
