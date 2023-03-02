import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,d as t,w as e,b as a,f as c,r as i}from"./app.ac77cf73.js";const u={},r=n("h2",{id:"catalog",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#catalog","aria-hidden":"true"},"#"),a(" Catalog")],-1),d=c(`<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrImportExport<span class="token punctuation">.</span>btnExportAsHTMLClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">&#39;\\DBGridEh1Export.Html&#39;</span><span class="token punctuation">;</span>

  SaveDBGridEhToExportFile<span class="token punctuation">(</span>TDBGridEhExportAsHTML<span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> RBSaveAll<span class="token punctuation">.</span>Checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(m,v){const s=i("RouterLink");return o(),l("div",null,[r,n("ul",null,[n("li",null,[n("p",null,[t(s,{to:"/demo/markdown.html"},{default:e(()=>[a("Markdown Enhance")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/demo/page.html"},{default:e(()=>[a("Page Config")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/demo/disable.html"},{default:e(()=>[a("Function Disable")]),_:1})])]),n("li",null,[n("p",null,[t(s,{to:"/demo/encrypt.html"},{default:e(()=>[a("Encryption Demo")]),_:1})])])]),d])}const b=p(u,[["render",k],["__file","index.html.vue"]]);export{b as default};
