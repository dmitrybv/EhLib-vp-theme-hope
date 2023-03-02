<template><div><h1 id="blackout-of-the-grid-while-loading-a-data" tabindex="-1"><a class="header-anchor" href="#blackout-of-the-grid-while-loading-a-data" aria-hidden="true">#</a> &quot;Blackout&quot; of the grid while loading a data</h1>
<p><code v-pre>TDBGridEh</code> allows you to &quot;black out&quot; (dim) grid while loading data. This allows you to show the user that a melon time <code v-pre>DataSet</code> loads data from the server. Grid in the dark makes a smooth transition from the standard picture to a darkened and back. Use <code v-pre>StartLoadingStatus</code> <code v-pre>FinishLoadingStatus</code> methods to display the status of downloading and reset it back respectively.</p>
<p>You can call methods that reload the data in <code v-pre>DataSet</code> between calls to these methods.</p>
<p><img src="@source/images/clip0034.png" alt="" loading="lazy"></p>
<p><code v-pre>StartLoadingStatus</code> and <code v-pre>FinishLoadingStatus</code> procedures have the following parameters:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> StartLoadingStatus<span class="token punctuation">(</span>
<span class="token keyword">const</span> LoadingCaption <span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span> <span class="token comment">// Text for Downloading status</span>
RenderDuration<span class="token punctuation">:</span> Integer <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// Duration of the transition state</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">procedure</span> FinishLoadingStatus<span class="token punctuation">(</span>
RenderDuration<span class="token punctuation">:</span> Integer <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// Duration of the transition state</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


