<template><div><h1 id="adjusting-grid-for-sorting-data" tabindex="-1"><a class="header-anchor" href="#adjusting-grid-for-sorting-data" aria-hidden="true">#</a> Adjusting grid for sorting data</h1>
<p><code v-pre>TDBGridEh</code> allows showing special sortmarking bitmaps (small triangles) in the right part of title cell.
In order to automatically mark the title by sortmarking bitmaps you have to add <code v-pre>dghAutoSortMarking</code> to <code v-pre>OptionsEh</code> property.
Add <code v-pre>dghMultiSortMarking</code> to <code v-pre>OptionsEh</code> in order to allow sortmarking in several columns simultaneously.
Set <code v-pre>Column.Title.TitleButton</code> to <code v-pre>true</code> value for titles which will have possibility to change sortmarkers at run time.
Or you can set <code v-pre>ColumnDefValues.Title.TitleButton</code> to allow setting sortmarking for all columns
where <code v-pre>Column.Title.TitleButton</code> is not changed.
At runtime, clicking on title will change sortmarking.
Holding <code v-pre>Ctrl</code> key allows to mark several columns simultaneously.
After user changes sormarking grid will call <code v-pre>OnSortMarkingChanged</code> event or will pass action to special object,
if it is registered.
Special object will use <code v-pre>Grid.SortLocal</code> property to determine how to sort data: locally or on the server.
If you write <code v-pre>OnSortMarkingChanged</code>, you can use <code v-pre>TDBGrid.SortMarkedColumns</code> property to access the sortmarked
columns and <code v-pre>TColumnEh.Title.SortMarker</code> property to get state of the sortmarker.</p>
</div></template>


