import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,f as r}from"./app.ac77cf73.js";const a="/online-help-vuepress-hope/assets/clip0038.77598633.png",d={},i=r('<h1 id="grouping-rows-by-category" tabindex="-1"><a class="header-anchor" href="#grouping-rows-by-category" aria-hidden="true">#</a> Grouping rows by Category</h1><p><code>TDBVertGridEh</code> component allows you to group rows into categories. Use sub-properties of <code>TDBVertGridEh</code>.</p><p><code>RowCategories</code> property to manage a categories.</p><p>Grid lines can be grouped into categories based on:</p><ul><li>Сategory name</li><li>Field type</li><li>Presence / absence of values in the current record.</li></ul><p>To activate the grouping by category, set <code>TDBVertGridEh.RowCategories.Active</code> property to <code>True</code>.</p><p><img src="'+a+'" alt="" loading="lazy"></p><p>Type used to group categories defined by the property <code>CategoryGroupingType</code>. <code>CategoryGroupingType</code> has <code>TCategoryGroupingTypeEh</code> type and can contain the following values:</p><dl><dd><p><code>cgtFieldRowCategoryNameEh</code> - Form category basing on <code>TFieldRowEh.CategoryName</code> property value. The number of categories determined by the number of unique values in the list of <code>TDBVertGridEh.Rows[i].CategoryName</code> values. Additional properties of the categories can be set using the properties of the <code>TDBVertGridEh.RowCategories</code>.CategoryProps collection.</p></dd><dd><p><code>cgtEmptyNotEmptyValueEh</code> - To form category based on the presence of values in fields in <code>DataSet</code>. The grid line will fall into one of two categories. Category 1 - a field in which the values of the current record is not Null. Category 1 - a field in which the values of the current record = Null.</p></dd><dd><p><code>cgtFieldDataTypeEh</code> - To form category based on the type of fields. Fields will fall into one of the following categories: Text fields, numeric fields, Logical fields, field type DateTime fields such as BLOB, another type of field.</p></dd></dl><p>With the <code>TDBVertGridEh.RowCategories.CategoryProps</code> property you can specify additional parameters such as:</p><p><code>DisplayText</code> – The text that will be displayed in the grid</p><p><code>DefaultExpanded</code> – Status Expanded / Collapsed category as the branches of a tree on the first grid displayed on the screen. Simply create a collection element listed as the Name property in the name of the category and is additionally specify a property.</p><p>Use sub-properties of a <code>TDBVertGridEh.RowCategories</code> property to set <code>Color</code> <code>Font</code> <code>ParentFont</code> to adjust the font and color of the grouping string category.</p><p>Using the <code>TDBVertGridEh.RowCategories.RowMoveOptions</code> property you can allow <code>Categories</code> to move by mouse at the <code>Run-Time</code>, and move the items from category to category.</p><p>Use <code>OnRowCategoriesNodeExpanded</code> and <code>OnRowCategoriesNodeCollapsed</code> events to perform certain actions when a user opens and closes certain category.</p>',15),c=[i];function s(n,p){return o(),t("div",null,c)}const h=e(d,[["render",s],["__file","06-grouping-rows-by-category.html.vue"]]);export{h as default};