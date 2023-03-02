<template><div><h1 id="setting-grouping-in-rows-and-columns-of-a-table" tabindex="-1"><a class="header-anchor" href="#setting-grouping-in-rows-and-columns-of-a-table" aria-hidden="true">#</a> Setting grouping in rows and columns of a table.</h1>
<p>To set up grouping rows in a table, you must correctly fill in the <code v-pre>OutlineLevel</code> and <code v-pre>OutlineNodeCollapsed</code> properties of the <code v-pre>TXlsFileRowEh</code> class in the <code v-pre>Worksheet</code>.</p>
<p><code v-pre>Rows</code> collection or <code v-pre>Worksheet.Columns</code> if you are grouping columns.</p>
<p><code v-pre>OutlineLevel</code> sets the grouping level of the entry.</p>
<p>In the screenshot below, the values that must be assigned to the OutlineLevel property for each table record are indicated in red.</p>
<p><img src="@source/images/clip0081.png" alt="Alt text" loading="lazy"></p>
<p>Rows 1 and 9 have grouping level zero.</p>
<p>Record number 1 is a table header and does not participate in the grouping.</p>
<p>Record number 9 is a level 1 group heading. The level heading must have a value in OutlineLevel one less than the level of the group it describes (Group Heading 1 - 1 = 0)</p>
<p>Records 4 and 8 are headers for the level 2 group. Accordingly, `OutlineLevel contains the value 1.</p>
<p>For records 4, 8 and 9, you can also specify that the group is collapsed. To do this, set the <code v-pre>OutlineNodeCollapsed</code> property to <code v-pre>True</code>. In this case, also, for records that are included in the collapsed group, you must set the <code v-pre>Visible</code> property to <code v-pre>False</code>.</p>
<p>If the group header records are above the group, then the <code v-pre>TXlsWorksheetEh.OutlineRowsSummaryBelow</code> property must be set to <code v-pre>False</code>.</p>
<p>The <code v-pre>OutlineLevel</code> and <code v-pre>OutlineNodeCollapsed</code> properties for the <code v-pre>TXlsFileColumnEh</code> classes are filled in the same way when grouped by columns.</p>
</div></template>


