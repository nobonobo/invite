import{s as w,f as d,a as B,g as h,h as A,Q as x,c as F,d as y,j as p,i as H,C as o,w as E,B as b}from"../chunks/scheduler.ax1uQ8OT.js";import{S as D,i as S}from"../chunks/index.bPGVb4YX.js";import{g as j}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.fT66DL04.js";function T(i){let t,e,a,c="OECU電技OBの会（Discordサーバー）への招待",u,s,f="クラブの略称をアルファベットで入力してください。",g,n,C='<div class="input-group input-group-divider grid-cols-[1fr_auto]"><input name="name" type="text" placeholder="クラブの略称をアルファベットで入力"/> <button class="variant-filled-secondary">入力</button></div>',v,_;return{c(){t=d("div"),e=d("div"),a=d("h1"),a.textContent=c,u=B(),s=d("p"),s.textContent=f,g=B(),n=d("form"),n.innerHTML=C,this.h()},l(l){t=h(l,"DIV",{class:!0});var m=A(t);e=h(m,"DIV",{class:!0});var r=A(e);a=h(r,"H1",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-12uw6r6"&&(a.textContent=c),u=F(r),s=h(r,"P",{"data-svelte-h":!0}),x(s)!=="svelte-uwqqmg"&&(s.textContent=f),g=F(r),n=h(r,"FORM",{name:!0,"data-svelte-h":!0}),x(n)!=="svelte-1x5wa3w"&&(n.innerHTML=C),r.forEach(y),m.forEach(y),this.h()},h(){p(a,"class","h1"),p(n,"name","form"),p(e,"class","space-y-5"),p(t,"class","container h-full mx-auto flex justify-center items-center")},m(l,m){H(l,t,m),o(t,e),o(e,a),o(e,u),o(e,s),o(e,g),o(e,n),v||(_=E(n,"submit",i[0]),v=!0)},p:b,i:b,o:b,d(l){l&&y(t),v=!1,_()}}}const U="sdnejnu893ufjnjk";async function q(i){let t=new TextEncoder("utf-8").encode(i),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(function(u){return u.toString(16).padStart(2,"0")}).join("")}function L(i){const t=j();async function e(a){const c="70996d823688894ce7e02bb2a806b9617bc78b7153aadb91580ca96477ac9b03";if(a.preventDefault(),await q(U+document.form.name.value.toUpperCase())!=c){const f={type:"alert",title:"Error",body:"入力が合いませんでした。"};t.trigger(f);return}const s={type:"confirm",title:"電技OBの会にようこそ",body:'あらかじめ、Discordのアカウントを作ってからアクセスしてください。<br/><a class="anchor" href="https://discord.gg/fPasnTVH">Discord invite URL</a>',image:"https://chart.googleapis.com/chart?cht=qr&chs=600x300&chld=L|0&chl=https%3A%2F%2Fdiscord.gg%2FfPasnTVH"};t.trigger(s)}return[e]}class V extends D{constructor(t){super(),S(this,t,L,T,w,{})}}export{V as component};
