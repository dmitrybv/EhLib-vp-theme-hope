<template><div><h1 id="global-setting-for-tdbvertgrideh-and-tdbgrideh-classes" tabindex="-1"><a class="header-anchor" href="#global-setting-for-tdbvertgrideh-and-tdbgrideh-classes" aria-hidden="true">#</a> Global setting for TDBVertGridEh and TDBGridEh classes</h1>
<p>There are TDBAxisGridEhCenter class and global functions are declared in the DBAxisGridsEh.pas module</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">function</span> SetDBAxisGridEhCenter<span class="token punctuation">(</span>NewGridCenter<span class="token punctuation">:</span> TDBAxisGridEhCenter<span class="token punctuation">)</span><span class="token punctuation">:</span> TDBAxisGridEhCenter<span class="token punctuation">;</span>
  <span class="token keyword">function</span> DBAxisGridEhCenter<span class="token punctuation">:</span> TDBAxisGridEhCenter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>They are intended for the implementation of a single point for the modification of certain features in the <code v-pre>DBGridEh</code> and <code v-pre>DBVerGridEh</code> components. To change the behavior of all the grids in the project, write your class and heir of TDBAxisGridEhCenter and registered it once anywhere in the project by using the next function.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>SetDBAxisGridEhCenter<span class="token punctuation">(</span>TMyDBAxisGridEhCenter<span class="token punctuation">.</span>Create<span class="token punctuation">)</span><span class="token punctuation">.</span>Free<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The function returns an old class that can be immediately removed.</p>
<p>The methods that can be overridden in <code v-pre>TDBAxisGridEhCenter</code>:</p>
<p><code v-pre>procedure EditButtonDefaultAction(…); virtual;</code></p>
<dl><dd>
<p>Occurs when <code v-pre>EditButton</code> is pressed in any editor cell component of any <code v-pre>TDBGridEh</code> or <code v-pre>TDBVertGridEh</code> class. You can override this virtual procedure to write your actions when you click on <code v-pre>EditButton</code>. To override the action clicking on the level of the individual grid use the <code v-pre>OnEditButtonDown</code> and <code v-pre>OnEditButtonClick</code> event.</p>
</dd></dl>
<br>
<p><code v-pre>procedure EditButtonDefaultActionForImage(…); virtual;</code></p>
<dd>
<p>Occurs when <code v-pre>EditButton</code> is pressed in any editor cell component of any <code v-pre>TDBGridEh</code> or <code v-pre>TDBVertGridEh</code> class for Blob field type which is the type of <code v-pre>BlobType=ftGraphic</code>.</p>
</dd>
<br>
<p><code v-pre>procedure EditButtonDefaultActionText(…); virtual;</code></p>
<dd>
<p>Occurs when <code v-pre>EditButton</code> is pressed in any editor cell component of any class or <code v-pre>TDBGridEh</code> <code v-pre>TDBVertGridEh</code> text field.</p>
</dd>
<br>
<p><code v-pre>procedure FormSystemPopupMenuForColumn(…); virtual;</code></p>
<dd>
<p>Intended to form the <code v-pre>Popup</code> menu that opens when user clicks on when <code v-pre>EditButton</code> any editor cell component of any <code v-pre>TDBGridEh</code> or <code v-pre>TDBVertGridEh</code> class. In the current implementation, the procedure is called only for graphic <code v-pre>Blob</code> fields.</p>
</dd>
<br>
</div></template>


