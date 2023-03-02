<template><div><h1 id="working-with-memtableeh-in-the-with-datadriver-mode" tabindex="-1"><a class="header-anchor" href="#working-with-memtableeh-in-the-with-datadriver-mode" aria-hidden="true">#</a> Working with MemTableEh in the 'with datadriver' mode</h1>
<p>If <code v-pre>TMemTableEh.DataDriver</code> property is assigned then MemTable works in 'with datadriver' mode.</p>
<p>In this case internal array will be created automatically when <code v-pre>MemTableEh</code> become active. The structure of array is delivered by the <code v-pre>DataDriver</code> component.</p>
<p>If <code v-pre>FetchAllOnOpen</code> property is <code v-pre>True</code> then MemTableEh loads all records from DataDriver on open.</p>
<p>If <code v-pre>FetchAllOnOpen</code> is <code v-pre>False</code> then MemTableEh will not load records until application call Next or FetchRecords methods.</p>
<p>Method <code v-pre>Next</code> checks that cursor is positioned at end of <code v-pre>MemTableEh</code>, if not then it fetch next record and move to the next record in provider.</p>
<p>Method <code v-pre>FetchRecords</code> fetch more records from <code v-pre>DataDriver</code> and add it at the end of internal array of MemTable.</p>
<p>This method takes one parameter - an amount of records which need to fetch. To fetch all record it is needed to pass ‘-1’ as parameter. When <code v-pre>MemTable</code> connected to <code v-pre>DBGridEh</code> the Grid calls <code v-pre>FetchRecords</code> by itself via <code v-pre>IMemTableEh</code> interface to display all visible records in the view area.</p>
<p>If <code v-pre>CachedUpdates</code> property is <code v-pre>False</code> then changes are transferred right after <code v-pre>Post</code> method.</p>
<p>If <code v-pre>CachedUpdates</code> is <code v-pre>True</code> then data are not transferred until the <code v-pre>ApplyUpdates</code> method is called.</p>
</div></template>


