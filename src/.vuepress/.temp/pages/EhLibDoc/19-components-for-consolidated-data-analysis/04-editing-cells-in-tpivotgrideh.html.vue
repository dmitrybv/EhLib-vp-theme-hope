<template><div><h1 id="editing-cells-in-tpivotgrideh" tabindex="-1"><a class="header-anchor" href="#editing-cells-in-tpivotgrideh" aria-hidden="true">#</a> Editing cells in TPivotGridEh</h1>
<p><code v-pre>TPivotGridEh</code> added the ability to change data cells. It is assumed that the structure of data generation is configured in such a way that the cell <code v-pre>TPivotGridEh</code> corresponds to the data cell in the source data and in the source database table. When the user changes the data in the cells of the event handler code <code v-pre>TPivotGridEh.OnSetDataCellEditorValue</code> should record the entered value in the source database table.</p>
<p>In this case, the internal tables and <code v-pre>TPivotGridEh</code> aggregates calculate automatically.</p>
<p>To enable changes in <code v-pre>TPivotGridEh</code> cells, write the event handler <code v-pre>TPivotGridEh.OnGetDataCellEditorParams</code>.</p>
<p>For an example of using cell editing technology, see the Demo Project <code v-pre>PivotGridEh.EditCells\Project1.dpr</code></p>
</div></template>


