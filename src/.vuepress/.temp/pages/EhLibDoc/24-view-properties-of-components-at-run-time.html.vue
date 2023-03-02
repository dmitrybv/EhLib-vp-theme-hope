<template><div><h1 id="view-properties-of-components-at-run-time" tabindex="-1"><a class="header-anchor" href="#view-properties-of-components-at-run-time" aria-hidden="true">#</a> View properties of components at Run-Time</h1>
<p>When using the library it is possible to call a special <code v-pre>Form</code> of <code v-pre>Object Inspector</code> type. This form can be used to debug the component at run time by changing the values of the component properties.</p>
<p><img src="@source/images/clip0009.png" alt="" loading="lazy"></p>
<p>To start using the form, add the unit <code v-pre>ObjectInspectorEh</code> in the Uses section of your module and call the global procedure - <code v-pre>ShowObjectInspectorForm</code>.</p>
<p>The procedure shows a <code v-pre>Form</code> with a list of properties the explored component in the same manner as <code v-pre>Design-Time</code> Object Inspector. You can use it to configure the properties of the components at <code v-pre>Run-Time</code>.</p>
<p>The procedure has the following parameters:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ShowObjectInspectorForm<span class="token punctuation">(</span>
                  Component<span class="token punctuation">:</span> TObject<span class="token punctuation">;</span> <span class="token comment">// Component to inpsect</span>
                  FormBounds<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>  <span class="token comment">// Bounds of the Form</span>
                  NewForm<span class="token punctuation">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">False</span> <span class="token comment">// Show as a new Form</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


