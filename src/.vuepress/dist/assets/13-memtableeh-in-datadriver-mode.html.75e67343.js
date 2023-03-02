import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,f as d}from"./app.ac77cf73.js";const a={},r=d('<h1 id="working-with-memtableeh-in-the-with-datadriver-mode" tabindex="-1"><a class="header-anchor" href="#working-with-memtableeh-in-the-with-datadriver-mode" aria-hidden="true">#</a> Working with MemTableEh in the &#39;with datadriver&#39; mode</h1><p>If <code>TMemTableEh.DataDriver</code> property is assigned then MemTable works in &#39;with datadriver&#39; mode.</p><p>In this case internal array will be created automatically when <code>MemTableEh</code> become active. The structure of array is delivered by the <code>DataDriver</code> component.</p><p>If <code>FetchAllOnOpen</code> property is <code>True</code> then MemTableEh loads all records from DataDriver on open.</p><p>If <code>FetchAllOnOpen</code> is <code>False</code> then MemTableEh will not load records until application call Next or FetchRecords methods.</p><p>Method <code>Next</code> checks that cursor is positioned at end of <code>MemTableEh</code>, if not then it fetch next record and move to the next record in provider.</p><p>Method <code>FetchRecords</code> fetch more records from <code>DataDriver</code> and add it at the end of internal array of MemTable.</p><p>This method takes one parameter - an amount of records which need to fetch. To fetch all record it is needed to pass ‘-1’ as parameter. When <code>MemTable</code> connected to <code>DBGridEh</code> the Grid calls <code>FetchRecords</code> by itself via <code>IMemTableEh</code> interface to display all visible records in the view area.</p><p>If <code>CachedUpdates</code> property is <code>False</code> then changes are transferred right after <code>Post</code> method.</p><p>If <code>CachedUpdates</code> is <code>True</code> then data are not transferred until the <code>ApplyUpdates</code> method is called.</p>',10),c=[r];function i(h,n){return o(),t("div",null,c)}const p=e(a,[["render",i],["__file","13-memtableeh-in-datadriver-mode.html.vue"]]);export{p as default};
