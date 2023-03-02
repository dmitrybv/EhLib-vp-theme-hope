<template><div><h1 id="grouping-rows-by-category" tabindex="-1"><a class="header-anchor" href="#grouping-rows-by-category" aria-hidden="true">#</a> Grouping rows by Category</h1>
<p><code v-pre>TDBVertGridEh</code> component allows you to group rows into categories. Use sub-properties of <code v-pre>TDBVertGridEh</code>.</p>
<p><code v-pre>RowCategories</code> property to manage a categories.</p>
<p>Grid lines can be grouped into categories based on:</p>
<ul>
<li>Сategory name</li>
<li>Field type</li>
<li>Presence / absence of values in the current record.</li>
</ul>
<p>To activate the grouping by category, set <code v-pre>TDBVertGridEh.RowCategories.Active</code> property to <code v-pre>True</code>.</p>
<p><img src="@source/images/clip0038.png" alt="" loading="lazy"></p>
<p>Type used to group categories defined by the property <code v-pre>CategoryGroupingType</code>. <code v-pre>CategoryGroupingType</code> has <code v-pre>TCategoryGroupingTypeEh</code> type and can contain the following values:</p>
<dl>
<dd>
<p><code v-pre>cgtFieldRowCategoryNameEh</code> - Form category basing on <code v-pre>TFieldRowEh.CategoryName</code> property value. The number of categories determined by the number of unique values in the list of <code v-pre>TDBVertGridEh.Rows[i].CategoryName</code> values. Additional properties of the categories can be set using the properties of the <code v-pre>TDBVertGridEh.RowCategories</code>.CategoryProps collection.</p>
</dd>
<dd>
<p><code v-pre>cgtEmptyNotEmptyValueEh</code> - To form category based on the presence of values in fields in <code v-pre>DataSet</code>. The grid line will fall into one of two categories. Category 1 - a field in which the values of the current record is not Null. Category 1 - a field in which the values of the current record = Null.</p>
</dd>
<dd>
<p><code v-pre>cgtFieldDataTypeEh</code> - To form category based on the type of fields. Fields will fall into one of the following categories: Text fields, numeric fields, Logical fields, field type DateTime fields such as BLOB, another type of field.</p>
</dd>
</dl>
<p>With the <code v-pre>TDBVertGridEh.RowCategories.CategoryProps</code> property you can specify additional parameters such as:</p>
<p><code v-pre>DisplayText</code> – The text that will be displayed in the grid</p>
<p><code v-pre>DefaultExpanded</code> – Status Expanded / Collapsed category as the branches of a tree on the first grid displayed on the screen.
Simply create a collection element listed as the Name property in the name of the category and is additionally specify a property.</p>
<p>Use sub-properties of a <code v-pre>TDBVertGridEh.RowCategories</code> property to set <code v-pre>Color</code> <code v-pre>Font</code> <code v-pre>ParentFont</code> to adjust the font and color of the grouping string category.</p>
<p>Using the <code v-pre>TDBVertGridEh.RowCategories.RowMoveOptions</code> property you can allow <code v-pre>Categories</code> to move by mouse at the <code v-pre>Run-Time</code>, and move the items from category to category.</p>
<p>Use <code v-pre>OnRowCategoriesNodeExpanded</code> and <code v-pre>OnRowCategoriesNodeCollapsed</code> events to perform certain actions when a user opens and closes certain category.</p>
</div></template>


