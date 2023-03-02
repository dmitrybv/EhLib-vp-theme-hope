<template><div><h1 id="accessing-grid-columns" tabindex="-1"><a class="header-anchor" href="#accessing-grid-columns" aria-hidden="true">#</a> Accessing grid columns</h1>
<p>You can use the following properties and methods for accessing the grid columns:</p>
<h5 id="dbgrideh-columns" tabindex="-1"><a class="header-anchor" href="#dbgrideh-columns" aria-hidden="true">#</a> DBGridEh.Columns</h5>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> Columns<span class="token punctuation">:</span> TDBGridColumnsEh<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The main collection of columns<br>
<br/></p>
<h5 id="dbgrideh-visiblecolumns" tabindex="-1"><a class="header-anchor" href="#dbgrideh-visiblecolumns" aria-hidden="true">#</a> DBGridEh.VisibleColumns</h5>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> VisibleColumns<span class="token punctuation">:</span> TColumnsEhList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns
<br/>
<br/>
<br/></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> DBGridEh<span class="token punctuation">.</span>FieldColumns<span class="token punctuation">[</span><span class="token keyword">const</span> FieldName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">]</span><span class="token punctuation">:</span> TColumnEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Search a column by name field. If the column, which <code v-pre>TColumnEh.FieldName = FieldName</code> is not found, an exception is thrown.
<br/>
<br/>
<br/></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> FindFieldColumn<span class="token punctuation">(</span><span class="token keyword">const</span> FieldName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Search column name field. If the column, which <code v-pre>TColumnEh.FieldName = FieldName</code> is not found then it returns nil.
<br/>
<br/>
<br/></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> SortMarkedColumns<span class="token punctuation">:</span> TColumnsEhList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>List of columns where sorting markers are set with the <code v-pre>TColumnEh.Title.SortMarker</code> property.
<br/>
<br/>
<br/></p>
<h5 id="dbgrideh-visiblecolumns-1" tabindex="-1"><a class="header-anchor" href="#dbgrideh-visiblecolumns-1" aria-hidden="true">#</a> DBGridEh.VisibleColumns</h5>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">property</span> DBGridEh<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">:</span> TColumnsEhList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>  <dd>List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns.</dd>
  <br/>
  <br/>
  <dt><code>property DBGridEh.FieldColumns[const FieldName: String]: TColumnEh</code></dt>
  <br/>
  <dd>Search a column by name field. If the column, which TColumnEh.FieldName = FieldName is not found, an exception is thrown.</dd>
  <br/>
  <br/>
  <dt><code>function FindFieldColumn(const FieldName: String): TColumnEh;</code></dt>
  <br/>
  <dd>Search column name field. If the column, which TColumnEh.FieldName = FieldName is not found then it returns nil.</dd>
  <br/>
  <br/>
  <dt><code>property SortMarkedColumns: TColumnsEhList</code></dt>
  <br/>
  <dd>List of columns wher sorting markers are set with the TColumnEh.Title.SortMarker property.</dd>
  <br/>
  <br/>
<dl>
</dl>
<h1 id="heading1" tabindex="-1"><a class="header-anchor" href="#heading1" aria-hidden="true">#</a> heading1</h1>
<h2 id="heading1-1" tabindex="-1"><a class="header-anchor" href="#heading1-1" aria-hidden="true">#</a> heading1</h2>
<h1 id="heading2" tabindex="-1"><a class="header-anchor" href="#heading2" aria-hidden="true">#</a> heading2</h1>
<h2 id="heading2-1" tabindex="-1"><a class="header-anchor" href="#heading2-1" aria-hidden="true">#</a> heading2</h2>
<h1 id="heading1-example" tabindex="-1"><a class="header-anchor" href="#heading1-example" aria-hidden="true">#</a> heading1 example</h1>
<p>text</p>
<h2 id="heading2-example" tabindex="-1"><a class="header-anchor" href="#heading2-example" aria-hidden="true">#</a> heading2 example</h2>
<p>text</p>
<h3 id="heading3-example" tabindex="-1"><a class="header-anchor" href="#heading3-example" aria-hidden="true">#</a> heading3 example</h3>
<p>text</p>
<h4 id="heading4-example" tabindex="-1"><a class="header-anchor" href="#heading4-example" aria-hidden="true">#</a> heading4 example</h4>
<p>text</p>
<h5 id="heading5-example" tabindex="-1"><a class="header-anchor" href="#heading5-example" aria-hidden="true">#</a> heading5 example</h5>
<p>text</p>
<h6 id="heading6-example" tabindex="-1"><a class="header-anchor" href="#heading6-example" aria-hidden="true">#</a> heading6 example</h6>
<blockquote>
<p>text</p>
</blockquote>
</div></template>


