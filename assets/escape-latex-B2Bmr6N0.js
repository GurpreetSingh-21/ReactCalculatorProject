import{g as d}from"./complex.js-BLv2k-Vl.js";var l=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h={"{":"\\{","}":"\\}","\\":"\\textbackslash{}","#":"\\#",$:"\\$","%":"\\%","&":"\\&","^":"\\textasciicircum{}",_:"\\_","~":"\\textasciitilde{}"},m={"–":"\\--","—":"\\---"," ":"~","	":"\\qquad{}","\r\n":"\\newline{}","\n":"\\newline{}"},F=function(a,r){return l({},a,r)},_=function(t){for(var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.preserveFormatting,n=r===void 0?!1:r,p=a.escapeMapFn,o=p===void 0?F:p,e=String(t),i="",u=o(l({},h),n?l({},m):{}),f=Object.keys(u),g=function(){var c=!1;f.forEach(function(s,v){c||e.length>=s.length&&e.slice(0,s.length)===s&&(i+=u[f[v]],e=e.slice(s.length,e.length),c=!0)}),c||(i+=e.slice(0,1),e=e.slice(1,e.length))};e;)g();return i};const b=d(_);export{b as e};
