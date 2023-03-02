<template><div><h1 id="definition-of-table-columns" tabindex="-1"><a class="header-anchor" href="#definition-of-table-columns" aria-hidden="true">#</a> Definition of table columns</h1>
<p>Use the <code v-pre>Columns</code> collection to define properties for table columns.</p>
<p>The collection does not require adding columns to define the list of columns. <code v-pre>Columns</code> in a collection are created automatically when accessing collection items.</p>
<p>For example the code:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> <span class="token number">20</span><span class="token punctuation">;</span>
</code></pre></div><p>Creates a list of five columns in the collection (if they are not already in the collection) and assigns the heel of the column a width of 20 Width Units. Column numbering in the collection starts from zero.</p>
<p>The size of the unit column width in Excel is set according to the following rule:</p>
<p>Column width measured as the number of characters of the maximum digit width of the numbers 0, 1, 2, …, 9 as rendered in the normal style's font. There are 4 pixels of margin padding (two on each side), plus 1 pixel padding for the gridlines.</p>
<p>Use <code v-pre>TXlsFileColumnsEh.ScreenToXlsWidth</code> function to convert screen column width to width in <code v-pre>Excel</code> units.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>ScreenToXlsWidth<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code v-pre>Sheet.Columns</code> collection contains objects of type <code v-pre>TXlsFileColumnEh</code>.</p>
<p><code v-pre>TXlsFileColumnEh</code> class contains the following properties:</p>
<p><code v-pre>property OutlineLevel: Integer;</code></p>
<dd>Grouping level. The property is used when grouping columns in a table. If column does not participate in the grouping, then the value contains 0.</dd>
<br>
<p><code v-pre>property OutlineNodeCollapsed;</code></p>
<dd>The group header is collapsed. The property is used when grouping columns in a table. If the column is a group header and the group is collapsed, then the property contains True. Columns that are in a collapsed group also need to set the Visible property to False.</dd>
<br>
<p><code v-pre>property Width: Double;</code></p>
<dd>Column width in Excel units of width.</dd>
<br>
<p><code v-pre>property Visible: Boolean;</code></p>
<dd>The column is visible.</dd>
<br>
</div></template>


