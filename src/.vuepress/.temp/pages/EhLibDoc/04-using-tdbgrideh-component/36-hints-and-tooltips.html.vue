<template><div><h1 id="hints-and-tooltips" tabindex="-1"><a class="header-anchor" href="#hints-and-tooltips" aria-hidden="true">#</a> Hints and Tooltips</h1>
<p><code v-pre>Hints</code> and <code v-pre>Tooltips</code> are special text hints, which are shown in small additional window (usually in a yellow color) while the mouse is above a specified place of grid. To show <code v-pre>Hints</code> and <code v-pre>Tooltips</code> in <code v-pre>DBGridEh</code> it is required to set <code v-pre>ShowHint</code> property to True. Hints usually contain additional information about a data in the cell. Tooltips usually contain a full-text of cell if it doesn’t fit in the cell. To show <code v-pre>Tooltips</code> in <code v-pre>DBGridEh</code>, use the <code v-pre>Column.ToolTips</code>, <code v-pre>Column.Title.ToolTips</code>, and <code v-pre>Column.Footer.ToolTips</code> properties. Besides, there are events <code v-pre>Column</code>.<code v-pre>OnDataHintShow</code> and <code v-pre>Column.DBGridEh</code> that allow to form <code v-pre>Hints</code> for cell dynamically. Use these events to set <code v-pre>Text</code>, <code v-pre>Font</code>, <code v-pre>Color</code>, <code v-pre>Position</code> or the other parameters of hint window for every cell of the grid. These events will be called only if <code v-pre>Grid.ShowHint</code> is set to<code v-pre>True</code>. During the calling event the grid is positioned on required record.  So you can access fields values from dataset.</p>
<p>Hint and Tooltips are special text prompts that appear in a small additional window (usually yellow) when you hover over a specific area of the window. To enable <code v-pre>Hint</code> and <code v-pre>Tooltips</code> in <code v-pre>DBGridEh</code> you need to set <code v-pre>DBGridEh.ShowHint</code> property to <code v-pre>True</code>.
In the <code v-pre>Hint</code>, it is usually displayed additional information.
In <code v-pre>Tooltips</code> it is usually displayed the full text, which is not fully fit in the cell data and cropped when drawing.
To display Tooltips'ov <code v-pre>DBGridEh</code> use in the following properties properties:</p>
<p><code v-pre>property DBGridEh.ShowHint: Boolean</code></p>
<dd>Show hints and Tooltips in the grid.</dd>
<p><code v-pre>property Column.ToolTips: Boolean</code></p>
<dd>Show tooltips in the column data cells.</dd>
<p><code v-pre>property Column.Title.ToolTips: Boolean</code></p>
<dd>Show tooltips in the column header.</dd>
<p><code v-pre>property Column.Title.Hint: String</code></p>
<dd>Hint text for the column header.</dd>
<p><code v-pre>property Column.Footer.ToolTips: Boolean</code></p>
<dd>Show tooltips in the column footer cell.</dd>
<p><code v-pre>property DBGridEh.ColumnDefValues.ToolTips: Boolean</code></p>
<dd>Show tooltips in the cells of all the data column grid.</dd>
<p><code v-pre>property DBGridEh.ColumnDefValues.Title.ToolTips: Boolean</code></p>
<dd>Show tooltips titles of all columns grid.</dd>
<br>
<p>You can use the <code v-pre>Column.OnDataHintShow</code> or <code v-pre>DBGridEh.OnDataHintShow</code> event for dynamic formation of <code v-pre>Hint</code> or <code v-pre>Tooltipos</code> for data cells. Use these events to set the text font, color, position or other parameters of the info window (hint) for each cell in the column grid. These events will be called only if <code v-pre>Grid.ShowHint</code> set to True. At the time of the call event grid will set the current record in the dataset according to the number of grid lines, so that you can access data record. You can call the method for standard event processing <code v-pre>DBGridEh.DefaultFillDataHintShowInfo</code>.</p>
<p>You can use the <code v-pre>Column.OnHintShowPause</code> or <code v-pre>DBGridEh.OnHintShowPause</code> event to determine the delay before displaying the hint. In the event handler, you must set <code v-pre>HintPause</code> to the delay in milliseconds, that must elapse before displaying tips. If you set <code v-pre>HintPause</code>, it also set the <code v-pre>Processed</code> to <code v-pre>True</code> to avoid causing method for standard event processing.</p>
<h3 id="customize-the-subtitlefilter-filtering-columns" tabindex="-1"><a class="header-anchor" href="#customize-the-subtitlefilter-filtering-columns" aria-hidden="true">#</a> Customize the SubtitleFilter filtering columns.</h3>
<p>Use the sub-properties of property TDBGridEh.STFilter to customize the display area of the filter data by columns (called Subtitle Filter). This is usually a separate line just under the heading Grid. However, you can configure this field so that it appears in the header as a button drop-down list. In version 6, the opportunity to customize the color of cells dividing lines color, font and icon display mode drop-down list.
TDBGridEh.STFilter</p>
<p><code v-pre>InstantApply: Boolean</code></p>
<dd>Defines if filter will be applied on chanching or clising of droped down list of filtered values (STFilter)</dd>
<p><code v-pre>Local: Boolean</code></p>
<dd>Grid does not use it, but object that perform filtering can determine whether it will filter locally in dataset or on the server (by adding filter expressions in SQL 'WHERE' clause)</dd>
<p><code v-pre>Location: TSTFilterLocationEh</code></p>
<dd>Defines the location STFilter. Under the title (stflUnderTitleFilterEh) or in the title (stflInTitleFilterEh). When in the title then STFilter doesn't support edit line to enter filter expression.</dd>
<p><code v-pre>Visible: Boolean</code></p>
<dd>Specifies whether the filter row is visible. </dd>
<p><code v-pre>Color: TColor</code></p>
<dd>Specifies the background color for the title cells.</dd>
<p><code v-pre>Font: TFont</code></p>
<dd>Controls the font in which the title cells displays its data.</dd>
<p><code v-pre>ParentFont: Boolean</code></p>
<dd>Determines where a control looks for its font information.</dd>
<p><code v-pre>HorzLineColor: TColor</code></p>
<dd>Color of the horizontal lines in the footer area.</dd>
<p><code v-pre>RowHeight: Integer</code></p>
<dd>Specifies the height of footer row in text lines.</dd>
<p><code v-pre>RowLines: Integer</code></p>
<dd>
  Specifies the height of footer row in text lines
  Full row height = height in pixels of RowLines + RowHeight.
</dd>
<p><code v-pre>VertLineColor: TColor</code></p>
<dd>Color vertical lines in the footer area.</dd>
<p><code v-pre>FilterButtonDrawTime: TDBGridFilterButtonDrawTimeEh</code></p>
<dd>Specifies when it is to draw buttons for DropedDown filter list.</dd>
</div></template>


