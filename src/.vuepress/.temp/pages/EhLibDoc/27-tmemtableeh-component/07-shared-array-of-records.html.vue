<template><div><h1 id="using-shared-array-of-records-by-several-tmemtableeh-s" tabindex="-1"><a class="header-anchor" href="#using-shared-array-of-records-by-several-tmemtableeh-s" aria-hidden="true">#</a> Using shared array of records by several TMemTableEh’s</h1>
<p><code v-pre>TMemTableEh</code> allows to use a same array of records by several <code v-pre>TMemTableEh</code> components. But only one main <code v-pre>TMemTableEh</code> must be holder of the array.</p>
<p>Others will connect to this array using <code v-pre>ExternalMemData</code> property use it. Other <code v-pre>TMemTableEh</code> components access external data of the main <code v-pre>TMemTableEh</code> ignoring local filter of main <code v-pre>TMemTableEh</code>. <code v-pre>DataDriver</code> property can be assigned only for main <code v-pre>MemTable</code>.</p>
<p>Sorting and filtration in each MemTableEh components don’t affect to each other.</p>
</div></template>


