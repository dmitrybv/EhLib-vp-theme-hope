import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,f as r}from"./app.ac77cf73.js";const a={},i=r('<h1 id="adjusting-grid-for-sorting-data" tabindex="-1"><a class="header-anchor" href="#adjusting-grid-for-sorting-data" aria-hidden="true">#</a> Adjusting grid for sorting data</h1><p><code>TDBGridEh</code> allows showing special sortmarking bitmaps (small triangles) in the right part of title cell. In order to automatically mark the title by sortmarking bitmaps you have to add <code>dghAutoSortMarking</code> to <code>OptionsEh</code> property. Add <code>dghMultiSortMarking</code> to <code>OptionsEh</code> in order to allow sortmarking in several columns simultaneously. Set <code>Column.Title.TitleButton</code> to <code>true</code> value for titles which will have possibility to change sortmarkers at run time. Or you can set <code>ColumnDefValues.Title.TitleButton</code> to allow setting sortmarking for all columns where <code>Column.Title.TitleButton</code> is not changed. At runtime, clicking on title will change sortmarking. Holding <code>Ctrl</code> key allows to mark several columns simultaneously. After user changes sormarking grid will call <code>OnSortMarkingChanged</code> event or will pass action to special object, if it is registered. Special object will use <code>Grid.SortLocal</code> property to determine how to sort data: locally or on the server. If you write <code>OnSortMarkingChanged</code>, you can use <code>TDBGrid.SortMarkedColumns</code> property to access the sortmarked columns and <code>TColumnEh.Title.SortMarker</code> property to get state of the sortmarker.</p>',2),n=[i];function l(d,s){return t(),e("div",null,n)}const g=o(a,[["render",l],["__file","30-adjusting-grid-for-sorting-data.html.vue"]]);export{g as default};