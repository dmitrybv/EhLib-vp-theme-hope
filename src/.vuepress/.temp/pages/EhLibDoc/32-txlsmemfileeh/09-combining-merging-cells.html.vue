<template><div><h1 id="combining-merging-cells" tabindex="-1"><a class="header-anchor" href="#combining-merging-cells" aria-hidden="true">#</a> Combining (Merging) cells</h1>
<p>Use the <code v-pre>TXlsWorksheetEh.MergeCell</code> and <code v-pre>TXlsWorksheetEh.UnmergerCell</code> methods to merge cells and remove the merge.</p>
<p>The <code v-pre>MergeCell</code> procedure has the following calling interface:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> MergeCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> ColCount<span class="token punctuation">,</span> RowCount<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code v-pre>Col</code> and <code v-pre>Row</code> parameters point to the underlying column and row. Values start at 0.</p>
<p>The <code v-pre>ColCount</code> and <code v-pre>RowCount</code> parameters must contain the number of columns and rows to combine based on the underlying column.</p>
<p>Those. to merge two cells horizontally, call a method with parameters:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Sheet<span class="token punctuation">.</span>MergeCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code v-pre>UnmergerCell</code> procedure has the following call parameters:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> UnmergerCell<span class="token punctuation">(</span>Col<span class="token punctuation">,</span> Row<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


