import{s as E,f as d,a as x,g as h,h as y,Q as v,c as _,d as A,j as p,i as D,C as o,w,B as F}from"../chunks/scheduler.ax1uQ8OT.js";import{S as H,i as S}from"../chunks/index.bPGVb4YX.js";import{g as j}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.fT66DL04.js";function T(i){let t,e,u,c="OECU電技OBの会（Discordサーバー）への招待",n,a,f="クラブの略称をアルファベットで入力してください。",g,s,B='<div class="input-group input-group-divider grid-cols-[1fr_auto]"><input name="name" type="text" placeholder="クラブの略称をアルファベットで入力"/> <button class="variant-filled-secondary">入力</button></div>',C,b;return{c(){t=d("div"),e=d("div"),u=d("h1"),u.textContent=c,n=x(),a=d("p"),a.textContent=f,g=x(),s=d("form"),s.innerHTML=B,this.h()},l(l){t=h(l,"DIV",{class:!0});var m=y(t);e=h(m,"DIV",{class:!0});var r=y(e);u=h(r,"H1",{class:!0,"data-svelte-h":!0}),v(u)!=="svelte-12uw6r6"&&(u.textContent=c),n=_(r),a=h(r,"P",{"data-svelte-h":!0}),v(a)!=="svelte-uwqqmg"&&(a.textContent=f),g=_(r),s=h(r,"FORM",{name:!0,"data-svelte-h":!0}),v(s)!=="svelte-1x5wa3w"&&(s.innerHTML=B),r.forEach(A),m.forEach(A),this.h()},h(){p(u,"class","h1"),p(s,"name","form"),p(e,"class","space-y-5"),p(t,"class","container h-full mx-auto flex justify-center items-center")},m(l,m){D(l,t,m),o(t,e),o(e,u),o(e,n),o(e,a),o(e,g),o(e,s),C||(b=w(s,"submit",i[0]),C=!0)},p:F,i:F,o:F,d(l){l&&A(t),C=!1,b()}}}const U="sdnejnu893ufjnjk";async function q(i){let t=new TextEncoder("utf-8").encode(i),e=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(e)).map(function(n){return n.toString(16).padStart(2,"0")}).join("")}function L(i){const t=j();async function e(u){const c="70996d823688894ce7e02bb2a806b9617bc78b7153aadb91580ca96477ac9b03";if(u.preventDefault(),await q(U+document.form.name.value.toUpperCase())!=c){const f={type:"alert",title:"Error",body:"入力が合いませんでした。"};t.trigger(f);return}const a={type:"confirm",title:"電技OBの会にようこそ",body:'あらかじめ、Discordのアカウントを作ってからアクセスしてください。<br/><a class="anchor" href="https://discord.gg/fPasnTVH">Discord invite URL</a><br/>2024/01/01 21:00~23:00 にビデオミーティングを開催予定です。参加お待ちしていますー。もちろんテキストのみの参加でも大歓迎！',image:"https://chart.googleapis.com/chart?cht=qr&chs=600x300&chld=L|0&chl=https%3A%2F%2Fdiscord.gg%2FfPasnTVH"};t.trigger(a)}return[e]}class V extends H{constructor(t){super(),S(this,t,L,T,E,{})}}export{V as component};
