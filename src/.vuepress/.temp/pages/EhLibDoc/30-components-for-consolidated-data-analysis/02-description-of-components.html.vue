<template><div><h1 id="description-of-components-of-data-analysis" tabindex="-1"><a class="header-anchor" href="#description-of-components-of-data-analysis" aria-hidden="true">#</a> Description of components of data analysis</h1>
<p>To create the elementary form for operation with components of consolidated data analysis do the following steps:</p>
<ol>
<li>Place on the form and set up DataSet which will be the supplier of data for PivotDataSource.</li>
<li>Place on the form PivotDataSource.</li>
<li>Set PivotDataSource.DataSet property to be pointed on DataSet which is set up on step 1.</li>
<li>Place on the form PivotGridEh and PivotGridToolBoxEh.</li>
<li>Set PivotGridEh.PivotDataSource and PivotGridToolBoxEh.PivotDataSource properties to be pointed on PivotDataSource which is set up on step</li>
</ol>
<p>Next steps are usually performed in Run-Time:</p>
<ol start="6">
<li>Creation of structure of the internal buffer table in PivotDataSource based on DataSet fields or from scratch.</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PivotDataSourceEh1<span class="token punctuation">.</span>PivotFields<span class="token punctuation">.</span>RebuildPivotFields<span class="token punctuation">;</span>
</code></pre></div><br>
<ol start="7">
<li>Loading data from DataSet to PivotDataSource.</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PivotDataSourceEh1<span class="token punctuation">.</span>CreateAndFillSourceTable<span class="token punctuation">;</span>
</code></pre></div><br>
<ol start="8">
<li>Setup sections and fields with consolidated data.</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PivotDataSourceEh1<span class="token punctuation">.</span>ColumnFields<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'SaleDate.Year'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
PivotDataSourceEh1<span class="token punctuation">.</span>RowFields<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'ShipVIA'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">with</span> PivotDataSourceEh1<span class="token punctuation">.</span>ValueFieldDefs<span class="token punctuation">.</span>Add <span class="token keyword">do</span>
<span class="token keyword">begin</span>
  PivotFieldName <span class="token operator">:=</span> <span class="token string">'AmountPiad'</span><span class="token punctuation">;</span>
  SumFunction <span class="token operator">:=</span> svtSumEh<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><br>
<p>Usually settings of sections are stored in the configuration file or database.</p>
<ol start="9">
<li>Formation of the consolidated report.</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PivotDataSourceEh1<span class="token punctuation">.</span>BuildPivotData<span class="token punctuation">;</span>
</code></pre></div><br>
<p>When you call BuildPivotData again, <code v-pre>TPivotGridEh</code> saves the column width, expanded / minimized groups, and filters.</p>
<p>Demo project of using components of the consolidated analysis of the data, see the library archive:
<code v-pre>&lt;EhLib archive&gt;\Demos\PivotGridEh.SimpleDemo\PivotGridEh.SimpleDemo.dpr</code></p>
</div></template>


