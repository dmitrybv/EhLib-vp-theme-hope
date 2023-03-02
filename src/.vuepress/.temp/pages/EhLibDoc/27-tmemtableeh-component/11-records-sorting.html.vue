<template><div><h1 id="records-sorting" tabindex="-1"><a class="header-anchor" href="#records-sorting" aria-hidden="true">#</a> Records sorting</h1>
<p><code v-pre>TMemTableEh</code> has two methods of the sorting:</p>
<ul>
<li>
<p>Sorting with dynamic supporting of the changes, when the added record is automatically move to the necessary position to support order of the sorting.</p>
</li>
<li>
<p>And sorting without dynamic supporting of the changes.</p>
</li>
</ul>
<ol>
<li>
<p>Use the <code v-pre>SortOrder</code> property to sort data with dynamic support of the changes. Separate several fields by comma. Add ‘DESC’ after fieldname to sort data in inverse sequence. Sorting occurs at the TRecordsViewEh object, so physically the records doesn’t move inside internal array TRecordsListEh.</p>
</li>
<li>
<p>Use <code v-pre>SortByFields</code> procedure to sort data without dynamic support of the changes. The string that define sorting must have same format as for <code v-pre>SortOrder</code> property. Sorting occurs on the level of <code v-pre>TRecordsListEh</code>, i.e. records are sorted physically in the internal array of data.</p>
</li>
</ol>
<p>When you use <code v-pre>EhlibMTE</code> unit for automatic sorting in <code v-pre>DBGridEh</code> you can use global variable <code v-pre>SortInView</code> of <code v-pre>Boolean</code> type to define the type of sorting that will be executed when <code v-pre>DBGridEh</code> performs sorting after sorting markers in titles of grid are changed.</p>
</div></template>


