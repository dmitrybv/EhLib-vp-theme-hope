import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,f as r}from"./app.ac77cf73.js";const i={},s=r('<h1 id="records-sorting" tabindex="-1"><a class="header-anchor" href="#records-sorting" aria-hidden="true">#</a> Records sorting</h1><p><code>TMemTableEh</code> has two methods of the sorting:</p><ul><li><p>Sorting with dynamic supporting of the changes, when the added record is automatically move to the necessary position to support order of the sorting.</p></li><li><p>And sorting without dynamic supporting of the changes.</p></li></ul><ol><li><p>Use the <code>SortOrder</code> property to sort data with dynamic support of the changes. Separate several fields by comma. Add ‘DESC’ after fieldname to sort data in inverse sequence. Sorting occurs at the TRecordsViewEh object, so physically the records doesn’t move inside internal array TRecordsListEh.</p></li><li><p>Use <code>SortByFields</code> procedure to sort data without dynamic support of the changes. The string that define sorting must have same format as for <code>SortOrder</code> property. Sorting occurs on the level of <code>TRecordsListEh</code>, i.e. records are sorted physically in the internal array of data.</p></li></ol><p>When you use <code>EhlibMTE</code> unit for automatic sorting in <code>DBGridEh</code> you can use global variable <code>SortInView</code> of <code>Boolean</code> type to define the type of sorting that will be executed when <code>DBGridEh</code> performs sorting after sorting markers in titles of grid are changed.</p>',5),a=[s];function d(c,n){return o(),t("div",null,a)}const p=e(i,[["render",d],["__file","11-records-sorting.html.vue"]]);export{p as default};
