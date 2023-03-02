<template><div><h1 id="control-data-input-in-the-inplaceeditor" tabindex="-1"><a class="header-anchor" href="#control-data-input-in-the-inplaceeditor" aria-hidden="true">#</a> Control data input in the InplaceEditor</h1>
<p>After the user has entered the data in the cell editor and press <code v-pre>Enter</code>, or tried to move to the next cell the <code v-pre>grid</code> transfers the data entered from the editor in the <code v-pre>Field</code> like this <code v-pre>Field.AsString := InplaceEditor.Text</code>.</p>
<p>Before the data transfer the <code v-pre>TColumnEh.OnUpdateData</code> event occurs, where you can perform additional checks, replace the text or to take on itself the management of data entry in the field Field.</p>
<p>The event has the following parameters:</p>
<p><code v-pre>Sender: TObject</code></p>
<dd>TColumnEh that calls the event.</dd>
<br>
<p><code v-pre>var Text: string</code></p>
<dd>The text from the editor of the cell to be written into the field.</dd>
<br>
<p><code v-pre>var Value: Variant</code></p>
<dd>The value of the cell editor in a variable of type Variant. In some cases, the 
   value is passed as Variant type. To determine which of the two variable contains the value use UseText parameter.</dd>
<br>
<p><code v-pre>var UseText: Boolean</code></p>
<dd>Determines which parameter Text or Value should be used to record the values in the field.</dd>
<br>
<p><code v-pre>var Handled: Boolean</code></p>
<dd>Set Handled to True to indicate that you have processed the event and do not need to call a method to write the value in the field by default.</dd>
<br>
<p>In this event, you can change the Text and the Value that will record in the DataSet. You can also change UseText value to indicate which parameter should be used for recording. If it is used Value parameter, the recording will TField.AsVariant property to write value.</p>
<p>You are free to write the value in the field using the following code:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh1Columns2UpdateData<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">;</span> <span class="token keyword">var</span> Text<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> Value<span class="token punctuation">:</span> Variant<span class="token punctuation">;</span> <span class="token keyword">var</span> UseText<span class="token punctuation">,</span> Handled<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> UseText
    <span class="token keyword">then</span> TColumnEh<span class="token punctuation">(</span>Sender<span class="token punctuation">)</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>AsString <span class="token operator">:=</span> Text
    <span class="token keyword">else</span> TColumnEh<span class="token punctuation">(</span>Sender<span class="token punctuation">)</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>AsVariant <span class="token operator">:=</span> Value<span class="token punctuation">;</span>
  Handled <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also directly call the <code v-pre>DataSet.Post</code> to finish editing the recording immediately after recording the data in the field.</p>
</div></template>


