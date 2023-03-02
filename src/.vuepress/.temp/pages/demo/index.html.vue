<template><div><h2 id="catalog" tabindex="-1"><a class="header-anchor" href="#catalog" aria-hidden="true">#</a> Catalog</h2>
<ul>
<li>
<p><RouterLink to="/demo/markdown.html">Markdown Enhance</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/page.html">Page Config</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/disable.html">Function Disable</RouterLink></p>
</li>
<li>
<p><RouterLink to="/demo/encrypt.html">Encryption Demo</RouterLink></p>
</li>
</ul>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrImportExport<span class="token punctuation">.</span>btnExportAsHTMLClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\DBGridEh1Export.Html'</span><span class="token punctuation">;</span>

  SaveDBGridEhToExportFile<span class="token punctuation">(</span>TDBGridEhExportAsHTML<span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> RBSaveAll<span class="token punctuation">.</span>Checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


