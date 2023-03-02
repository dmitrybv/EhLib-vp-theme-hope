import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as s}from"./app.ac77cf73.js";const t={},o=s(`<h1 id="save-load-data-from-to-the-file-s" tabindex="-1"><a class="header-anchor" href="#save-load-data-from-to-the-file-s" aria-hidden="true">#</a> Save/load data from/to the file (s)</h1><p>In <code>MemTableEh</code> has the ability to save data to a file and load the data from the file.</p><p>When saving data <code>MemTableEh</code> writes the internal structure of the array and writing the array.</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> SaveToFile<span class="token punctuation">(</span><span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> Format<span class="token punctuation">:</span> TDfmStreamFormatEh <span class="token operator">=</span> dfmTextEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> TDfmStreamFormatEh <span class="token operator">=</span> <span class="token punctuation">(</span>dfmBinaryEh<span class="token punctuation">,</span> dfmTextEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><dd>Writes the contents of the internal FileName dataset components TMemTableEh.</dd><br><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> LoadFromFile<span class="token punctuation">(</span><span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><dd>Loads data from a file FileName into the internal data array components TMemTableEh. In this case, the old structure and the contents of the internal components of the array is removed.</dd><p>Demo: An example of using functions to save and load data to / from a file in the main library of the demonstration project – <code>&lt;EhLib_Dir\\Demos\\MainDemo&gt;</code></p>`,9),p=[o];function c(r,l){return n(),e("div",null,p)}const u=a(t,[["render",c],["__file","19-save-load-data-from-to-file.html.vue"]]);export{u as default};