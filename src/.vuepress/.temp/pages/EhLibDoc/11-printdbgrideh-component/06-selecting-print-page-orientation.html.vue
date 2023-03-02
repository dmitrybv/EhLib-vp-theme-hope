<template><div><h1 id="selecting-print-page-orientation" tabindex="-1"><a class="header-anchor" href="#selecting-print-page-orientation" aria-hidden="true">#</a> Selecting print page orientation</h1>
<p><code v-pre>TPrintDBGridEh</code> doesn’t have special properties to set page orientation.
To do it, you need to set orientation of virtual printer before calling <code v-pre>Print</code> or <code v-pre>Preview</code> procedure. Like this code:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">uses</span> PrViewEh<span class="token punctuation">,</span> Printers<span class="token punctuation">.</span>
<span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>
<span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>bPreviewClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  PrinterPreview<span class="token punctuation">.</span>Orientation <span class="token operator">:=</span> poLandscape<span class="token punctuation">;</span>
  PrintDBGridEh1<span class="token punctuation">.</span>Preview<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


