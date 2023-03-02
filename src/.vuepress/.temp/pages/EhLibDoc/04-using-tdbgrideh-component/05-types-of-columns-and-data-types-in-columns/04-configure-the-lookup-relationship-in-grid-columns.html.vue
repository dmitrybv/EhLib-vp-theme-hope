<template><div><h1 id="configure-the-lookup-relationship-in-grid-columns" tabindex="-1"><a class="header-anchor" href="#configure-the-lookup-relationship-in-grid-columns" aria-hidden="true">#</a> Configure the lookup relationship in grid columns</h1>
<h4 id="general-concepts-about-lookup-fields" tabindex="-1"><a class="header-anchor" href="#general-concepts-about-lookup-fields" aria-hidden="true">#</a> General concepts about lookup fields.</h4>
<p>Before describing the possiblites of the grid when working with lookup fields, lets consider what is a lookup field in terms of the standard <code v-pre>TField</code> class. Lookpup field – is a field of <code v-pre>DataSet</code> with a <code v-pre>TField</code> configured in such a way that it show text from the dictionary field basing on the code of a key field of dataset. The second DataSet serves as a dictionary. Typically, lookup fields are created at the Design-Time based on field DataSet selected from the database. When configuring fields in the <code v-pre>DataSet</code> the designer creates a Persistent field based on the selected fields from the database, and then adds calculated and lookup fields. To configure the lookup field, you can use a dialog to add a new field in <code v-pre>DataSet</code>.</p>
<p><img src="@source/images/Lookup fields Dialog.png" alt="" loading="lazy"></p>
<p>You can also fill TField properties in the Object Inspector as follows:</p>
<ul>
<li>Set <code v-pre>FieldKind = fkLookup</code></li>
<li>Set <code v-pre>KeyField</code> to the field name that contains the code values in the original DataSet</li>
<li>Set <code v-pre>LookupDataSet</code> to DataSet that contains dictionary values</li>
<li>Set <code v-pre>LookupKeyFields</code> to a field name that contains the code values in the dictionary DataSet</li>
<li>Set <code v-pre>LookupResultField</code> to a field name in dictionary DataSet whose content should be displayed instead of the code.</li>
</ul>
<h4 id="lookup-columns-in-the-grid" tabindex="-1"><a class="header-anchor" href="#lookup-columns-in-the-grid" aria-hidden="true">#</a> Lookup columns in the grid.</h4>
<p>DBGridEh and DBVertGridEh automatically determine then Field.FieldKind is lookup and create a cell with a dropdown list so that it looks like a LookupComboBox.</p>
<p>In addition, the column (<code v-pre>TColumnEh</code> and <code v-pre>TFieldRow</code>) contain additional properties for the empowerment of working with lookup fields.</p>
<p><img src="@source/images/DBGridEh.LookupComboBox.png" alt="" loading="lazy"></p>
<p>To display multiple fields in the drop-down list  fill the Column.LookupDisplayFields property by the list of field names separated by a semicolon - <code v-pre>;</code>.
By default, the drop-down list displays a single column with the value specified in the field <code v-pre>TField.LookupResultField</code>. You can customize the list so that it displays multiple fields from the DataSet specified property TField.LookupDataSet.</p>
<ul>
<li>
<p>Method 1: Fill <code v-pre>TColumnEh.DropDownBox.ListFieldNames</code> property by the list of fields. Several fields are separated by semicolons - <code v-pre>;</code>.</p>
</li>
<li>
<p>Method 2: Fill <code v-pre>TColumnEh.DropDownBox.Columns</code> collection with elements. With this method, you can also customize the font and the other a property of each column drop-down list.</p>
</li>
</ul>
<h4 id="configure-lookup-relationships-directly-into-the-grid-column" tabindex="-1"><a class="header-anchor" href="#configure-lookup-relationships-directly-into-the-grid-column" aria-hidden="true">#</a> Configure lookup relationships directly into the grid column.</h4>
<p><code v-pre>DBGridEh</code> and <code v-pre>DBVertGridEh</code> has the ability to create lookup relationships directly into grid columns. To do this, use the sub-properties of <code v-pre>TColumn.LookupParams</code> property. Fill in the sub-properties similar to how it is configured in the TField. In this case, leave TColumn.FieldName property empty.
The <code v-pre>TColumn.LookupParams</code> property has the following subproperties:
<br></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> KeyFieldNames<span class="token punctuation">:</span> <span class="token keyword">String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><dd>Defines a field (or fields) in Grid.DataSource.DataSet that specifies the value to search LookupDataSet. Several fields are separated by ';'.</dd>
<br>
<br>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> LookupCache<span class="token punctuation">:</span> Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><dd>Specifies whether to copy the key values in the internal buffer to speed up the operation of drawing a grid of cells.</dd>
<br>
<br>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> LookupDataSet<span class="token punctuation">:</span> TDataSet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><dd>Specifies the dataset record values to be displayed in the lookup control instead of the field KeyField</dd>
<br>
<br>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> LookupDisplayFieldName<span class="token punctuation">:</span> <span class="token keyword">String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><dd>Specify the field whose value will be displayed on the screen.</dd>
<br>
<br>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> LookupKeyFieldNames<span class="token punctuation">:</span> <span class="token keyword">String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><dd>Defines a field (or fields) in LookupDataSet value will be used to search records for the value of the field specified by KeyFieldNames property.</dd>
<br>
<p>With a large number of customized lookup columns in the grid, drawing data may be slow because Search lookup values occurs in each cell drawing. But drawing can be accelerated, if you use TMemTableEh as a DataSet. MemTableEh provides the ability to create in DBGridEh associated buffer values found and dynamically update it as a data changes in MemTableEh.</p>
</div></template>


