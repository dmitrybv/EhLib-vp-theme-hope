<template><div><h1 id="access-to-protected-class-methods" tabindex="-1"><a class="header-anchor" href="#access-to-protected-class-methods" aria-hidden="true">#</a> Access to protected class methods</h1>
<p>In complex programs and algorithms the use the Grid, you may need to access the protected fields, methods, or properties of a class.
The <code v-pre>Object Pascal</code> language has the opportunity to access protected data.
For this purpose, the module to which you plan to use access, declare a class that derives from <code v-pre>TDBGridEh</code> while changing nothing in the class. In the requited place of code, perform the conversion to this. <code v-pre>Object Pascal</code> allows to access to all methods of the class if it is declared in the same module.</p>
<p>Below is an example code:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">unit</span> Unit1<span class="token punctuation">;</span>

<span class="token keyword">type</span>
  TfrVertGrid <span class="token operator">=</span> <span class="token keyword">class</span><span class="token punctuation">(</span>TFrame<span class="token punctuation">)</span>
  … 
    Grid1<span class="token punctuation">:</span> TDBGridEh<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">implementation</span>

<span class="token keyword">type</span>
  TDBGridEhCrack <span class="token operator">=</span> <span class="token keyword">class</span><span class="token punctuation">(</span>TDBGridEh<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">procedure</span> TfrVertGrid<span class="token punctuation">.</span>ToolButton1Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  TDBGridEhCrack<span class="token punctuation">(</span>Grid1<span class="token punctuation">)</span><span class="token punctuation">.</span>ProptectedMethod<span class="token punctuation">;</span> 
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


