<template><div><h1 id="event-to-indicate-accurately-when-to-hide-duplicate-values" tabindex="-1"><a class="header-anchor" href="#event-to-indicate-accurately-when-to-hide-duplicate-values" aria-hidden="true">#</a> Event to indicate accurately when to hide duplicate values</h1>
<p><code v-pre>Column</code> property <code v-pre>TColumnEh.HideDuplicates</code> customizes the display of the column so as to hide the value in the cell if it matches the value in the previous record.
There are situations when it is necessary to point out that actually started a new value in the cell, even if the text representation of the values matched. For example: User names can be the same, but user ID is not same. Accordingly, the same name with different ID’s are not duplicates.
Use <code v-pre>OnGetHideDuplicatesValueKeyValue</code> event assign KeyValue parameter the value that identify unique value for every new display value of the column.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh1Columns3GetHideDuplicatesValue <span class="token punctuation">(</span>
Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> <span class="token keyword">var</span> KeyValue<span class="token punctuation">:</span> Variant<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  KeyValue<span class="token punctuation">:</span> <span class="token operator">=</span> MemTableEh1 <span class="token punctuation">[</span><span class="token string">'EmpNo'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
</code></pre></div><p>Demo: See the Demo project to use OnGetHideDuplicatesValue event in the folder –<br>
<code v-pre>&lt;EhLib Dir\Demos\DBGridEh.HideDuplicates&gt;</code></p>
</div></template>


