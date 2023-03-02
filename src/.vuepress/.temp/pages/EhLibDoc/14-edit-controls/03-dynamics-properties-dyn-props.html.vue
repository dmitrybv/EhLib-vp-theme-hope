<template><div><h1 id="dynamics-properties-in-components-dynprops" tabindex="-1"><a class="header-anchor" href="#dynamics-properties-in-components-dynprops" aria-hidden="true">#</a> Dynamics properties in components - DynProps</h1>
<p>DynVarsEh is declared in a module class TDynVarsEh which implements a dynamic collection of scalar variables.
Property of the type declared in the component can store a collection of named dynamic set of variables.</p>
<p>Property type TDynVarsEh is declared with the following components and classes:</p>
<ul>
<li><code v-pre>TDBGridEh.DynProps</code></li>
<li><code v-pre>TColumnEh.DynProps</code></li>
<li><code v-pre>TDBEditEh.DynProps</code></li>
<li><code v-pre>TDBDateTimeEditEh.DynProps</code></li>
<li><code v-pre>TDBComboBoxEh.DynProps</code></li>
<li><code v-pre>TDBNumberEditEh.DynProps</code></li>
<li><code v-pre>TDBCheckBoxEh.DynProps</code></li>
</ul>
<p>Collection <code v-pre>TDynVarsEh</code> generated from class <code v-pre>TCollection</code>. In <code v-pre>Design-Time</code> can create the elements of the type <code v-pre>TDynVarEh</code> with the following properties:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">public</span>    
    <span class="token keyword">property</span> AsBoolean<span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsCurrency<span class="token punctuation">:</span> Currency<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsDateTime<span class="token punctuation">:</span> TDateTime<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsFloat<span class="token punctuation">:</span> Double<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsInteger<span class="token punctuation">:</span> LongInt<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsRefObject<span class="token punctuation">:</span> TObject<span class="token punctuation">;</span>
    <span class="token keyword">property</span> AsString<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
    <span class="token keyword">property</span> IsNull<span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
<span class="token keyword">published</span>
    <span class="token keyword">property</span> <span class="token keyword">Name</span><span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
    <span class="token keyword">property</span> Value<span class="token punctuation">:</span> Variant<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In <code v-pre>Run-Time</code> collection items can be created dynamically by assigning values.</p>
<p>When reading a collection of values <code v-pre>DBEditEh1.DynProps ['Var1'].Value</code>, if the item in the collection named <code v-pre>'Var1'</code> is present in the list, it returns the value of the variable. If the element name is not present, it returns the value Unassigned.</p>
<p>When assigning values, the algorithm checks for the item in the collection.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>DBEditEh1<span class="token punctuation">.</span>DynProps <span class="token punctuation">[</span><span class="token string">'Var1'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value<span class="token punctuation">:</span> <span class="token operator">=</span> <span class="token string">'StrValue1'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the item named <code v-pre>'Var1'</code> isn’t in the list, a new element is created in the collection and is assigned with the specified value.</p>
</div></template>


