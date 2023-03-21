# Hints and Tooltips


`Hints` and `Tooltips` are special text hints, which are shown in small additional window (usually in a yellow color) while the mouse is above a specified place of grid. To show `Hints` and `Tooltips` in `DBGridEh` it is required to set `ShowHint` property to True. Hints usually contain additional information about a data in the cell. Tooltips usually contain a full-text of cell if it doesn’t fit in the cell. To show `Tooltips` in `DBGridEh`, use the `Column.ToolTips`, `Column.Title.ToolTips`, and `Column.Footer.ToolTips` properties. Besides, there are events `Column`.`OnDataHintShow` and `Column.DBGridEh` that allow to form `Hints` for cell dynamically. Use these events to set `Text`, `Font`, `Color`, `Position` or the other parameters of hint window for every cell of the grid. These events will be called only if `Grid.ShowHint` is set to`True`. During the calling event the grid is positioned on required record.  So you can access fields values from dataset.

Hint and Tooltips are special text prompts that appear in a small additional window (usually yellow) when you hover over a specific area of the window. To enable `Hint` and `Tooltips` in `DBGridEh` you need to set `DBGridEh.ShowHint` property to `True`.
In the `Hint`, it is usually displayed additional information. 
In `Tooltips` it is usually displayed the full text, which is not fully fit in the cell data and cropped when drawing. 
To display Tooltips'ov `DBGridEh` use in the following properties properties:

`property DBGridEh.ShowHint: Boolean` 
<sh>Show hints and Tooltips in the grid.</sh>

`property Column.ToolTips: Boolean` 
<sh>Show tooltips in the column data cells.</sh>

`property Column.Title.ToolTips: Boolean` 
<sh>Show tooltips in the column header.</sh>

`property Column.Title.Hint: String` 
<sh>Hint text for the column header.</sh>

`property Column.Footer.ToolTips: Boolean` 
<sh>Show tooltips in the column footer cell.</sh>

`property DBGridEh.ColumnDefValues.ToolTips: Boolean` 
<sh>Show tooltips in the cells of all the data column grid.</sh>

`property DBGridEh.ColumnDefValues.Title.ToolTips: Boolean` 
<sh>Show tooltips titles of all columns grid.</sh>
<br>

You can use the `Column.OnDataHintShow` or `DBGridEh.OnDataHintShow` event for dynamic formation of `Hint` or `Tooltipos` for data cells. Use these events to set the text font, color, position or other parameters of the info window (hint) for each cell in the column grid. These events will be called only if `Grid.ShowHint` set to True. At the time of the call event grid will set the current record in the dataset according to the number of grid lines, so that you can access data record. You can call the method for standard event processing `DBGridEh.DefaultFillDataHintShowInfo`.

You can use the `Column.OnHintShowPause` or `DBGridEh.OnHintShowPause` event to determine the delay before displaying the hint. In the event handler, you must set `HintPause` to the delay in milliseconds, that must elapse before displaying tips. If you set `HintPause`, it also set the `Processed` to `True` to avoid causing method for standard event processing.

### Customize the SubtitleFilter filtering columns.
Use the sub-properties of property TDBGridEh.STFilter to customize the display area of the filter data by columns (called Subtitle Filter). This is usually a separate line just under the heading Grid. However, you can configure this field so that it appears in the header as a button drop-down list. In version 6, the opportunity to customize the color of cells dividing lines color, font and icon display mode drop-down list.
TDBGridEh.STFilter

`InstantApply: Boolean`

<sh>Defines if filter will be applied on chanching or clising of droped down list of filtered values (STFilter)</sh>

`Local: Boolean`

<sh>Grid does not use it, but object that perform filtering can determine whether it will filter locally in dataset or on the server (by adding filter expressions in SQL 'WHERE' clause)</sh>

`Location: TSTFilterLocationEh`

<sh>Defines the location STFilter. Under the title (stflUnderTitleFilterEh) or in the title (stflInTitleFilterEh). When in the title then STFilter doesn't support edit line to enter filter expression.</sh>

`Visible: Boolean`

<sh>Specifies whether the filter row is visible. </sh>

`Color: TColor`

<sh>Specifies the background color for the title cells.</sh>

`Font: TFont`
<sh>Controls the font in which the title cells displays its data.</sh>

`ParentFont: Boolean`

<sh>Determines where a control looks for its font information.</sh>

`HorzLineColor: TColor`

<sh>Color of the horizontal lines in the footer area.</sh>

`RowHeight: Integer`

<sh>Specifies the height of footer row in text lines.</sh>

`RowLines: Integer`

<sh>
  Specifies the height of footer row in text lines
  Full row height = height in pixels of RowLines + RowHeight.
</sh>

`VertLineColor: TColor`

<sh>Color vertical lines in the footer area.</sh>

`FilterButtonDrawTime: TDBGridFilterButtonDrawTimeEh`

<sh>Specifies when it is to draw buttons for DropedDown filter list.</sh>

