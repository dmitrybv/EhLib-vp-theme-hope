import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,f as a}from"./app.ac77cf73.js";const i={},c=a('<h1 id="data-row-height" tabindex="-1"><a class="header-anchor" href="#data-row-height" aria-hidden="true">#</a> Data row height</h1><p>Use <code>RowHeight</code> and <code>RowLines</code> properties to specify the height of data row. Full height of data row is calculated as height in text lines of <code>RowLines</code> plus <code>RowHeight</code>. Set <code>RowSizingAllowed</code> to <code>True</code> value so that user can change height of row using mouse at run time.</p><p>Set <code>Column.WordWrap</code> to <code>True</code> value to break a long text in data row to a multiline. In reality, text will be wrapped only when height of row is bigger than height of one text line.</p><h3 id="individual-height-of-each-data-row" tabindex="-1"><a class="header-anchor" href="#individual-height-of-each-data-row" aria-hidden="true">#</a> Individual height of each data row.</h3><p><code>TDBGridEh</code> can work in mode when the height of every row is calculated dynamically depending on the text in the grid cells or size of image in the cell (When DrawGraphicData value is True). Include <code>dghAutoFitRowHeight</code> in <code>OptionsEh</code> property to force grid to calculate height for every row. This mode works only when the grid is connected to the <code>DataSet</code> of <code>TMemTableEh</code> type. When <code>dghAutoFitRowHeight</code> is included, grid calculates the height of the row dynamically using cell text (<code>TColumnEh.WordWrap</code> property also influence it) and for column the fields of which have <code>ftGraphic</code> type. To avoid surplus recalculation, grid recalculates heights, but not for after every change of properties. For instance, grid does not update heights if the <code>Font</code> property was changed. In such cases it is necessary to call <code>UpdateAllDataRowHeights</code> method. For more flexible calculation of the heights the grid has an <code>OnGetRowHeight</code> event, in which you can specify the height of row. During the event calling, the <code>MemTableEh</code> positions on record and we can calculate the height of this record, so you can use <code>MemTableEh</code> properties to access fields values.</p>',5),h=[c];function d(r,n){return o(),t("div",null,h)}const g=e(i,[["render",d],["__file","14-data-row-height.html.vue"]]);export{g as default};
