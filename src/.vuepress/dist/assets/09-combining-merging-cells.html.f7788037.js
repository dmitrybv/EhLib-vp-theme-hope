import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,f as s}from"./app.ac77cf73.js";const o={},t=s(`<h1 id="combining-merging-cells" tabindex="-1"><a class="header-anchor" href="#combining-merging-cells" aria-hidden="true">#</a> Combining (Merging) cells</h1><p>Use the <code>TXlsWorksheetEh.MergeCell</code> and <code>TXlsWorksheetEh.UnmergerCell</code> methods to merge cells and remove the merge.</p><p>The <code>MergeCell</code> procedure has the following calling interface:</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> MergeCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> ColCount<span class="token punctuation">,</span> RowCount<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code>Col</code> and <code>Row</code> parameters point to the underlying column and row. Values start at 0.</p><p>The <code>ColCount</code> and <code>RowCount</code> parameters must contain the number of columns and rows to combine based on the underlying column.</p><p>Those. to merge two cells horizontally, call a method with parameters:</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code>Sheet<span class="token punctuation">.</span>MergeCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code>UnmergerCell</code> procedure has the following call parameters:</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> UnmergerCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,10),c=[t];function l(p,r){return e(),a("div",null,c)}const d=n(o,[["render",l],["__file","09-combining-merging-cells.html.vue"]]);export{d as default};