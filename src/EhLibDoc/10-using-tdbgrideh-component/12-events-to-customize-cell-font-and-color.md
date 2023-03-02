# Events to customize cell’s font attributes and color

There are several events that allow you to customize cell’s font attributes and color before the cell data will be drawn. In the time of calling these events the `DataSet` is positioned on the record that need to draw, so in the events you can access field values using such methods as `TDataSet.FieldByName(..).Value`. Do not change grid properties or columns properties in these events. It can bring to recirculation of the program.

`TDBGridEh.OnDrawColumnCell`
<dd>Write OnDrawColumnCell event to overload the standard method of the drawing cell. This event is called after standard drawing, so the information will be drawn above standard-drawn contents of cell. You may print the additional data, using methods of TDBGridEh(Sender).Canvas property.</dd>
<br>

`TDBGridEh.OnDrawDataCell`
<dd>Do not write an OnDrawDataCell event handler. OnDrawDataCell is obsolete and included for backward compatibility.</dd>
<br>

`TColumnEh.OnAdvDrawDataCell` or `TDBGridEh.OnAdvDrawDataCell`
<dd>

Write this event to draw data in the grid cell. In code of the event we set Processed parameter in True value to define that the process of drawing was performed in event. Otherwise grid will call method for default drawing of cell data. You may, if necessary, change such parameters as ARect or Params. After changing the parameters call `Grid.DefaultDrawColumnDataCell` method and set Processed to True value. You can also leave Processed parameter in False state and don’t call `Grid.DefaultDrawColumnDataCell`. In that case, grid will call default drawing procedure using changed parameters. Use Grid.Canvas property to draw data in the cell by yourself.

</dd>
<br>

`TDBGridEh.OnGetCellParams` and `TColumnEh.OnGetCellParams` event

Parameters:

`Sender: TObject`
<dd>Grid, that call the Event</dd>
<br>

`Column: TColumnEh`
<dd>The column for which the event is called</dd>
<br>

`AFont : TFont`
<dd>Font that will be used to paint a cell. You can change the font properties to specify properties of the new font rendering</dd>
<br>

`var Background: TColor`
<dd>The background color that will be used to paint a cell. You can change this parameter to specify a new color</dd>
<br>

`State: TGridDrawState`
<dd>The status of the cell</dd>
<br>

Write `OnGetCellParams` event to set such parameters as `Font`, cell color or other parameters of cell before cell will be drawn. If it is needed to change parameters only in a specified column then use  column event - `TColumnEh.OnGetCellParams`. In this event you may change `Font`, `Color`, `Alignment`, `ImageIndex`, `Text`, checkbox's state and also such properties of a Params parameter as:

`BlankCell: Boolean.`

Set this property to true to show cell as an empty cell with 3D border.
`SuppressActiveCellColor: Boolean.`

Set this property to forbid the color of active cell to overlay the color that is set in Background property.

`TextEditing: Boolean` 
Set this property to forbid showing of cell text editor. 

These events are also called when grid request Font and Color for inplace editor.
If you want to draw data by yourself use `OnAdvDrawDataCell` event.

Use this event to replace the cell parameters for particular column before rendering. This event has an expanded set of parameters compared to the `TDBGridEh.OnGetCellParams` event.
This event is fired, not only before rendering a grid. In some cases, the event is called to request additional cell parameters. For example, before opening `InplaceEditor` grids causing the event and check `Params.TextEditing` option to allow you to open `InplaceEditor` for the current cell.

The `TColumnEh.OnGetCellParams` event has the following parameters :
<dd>

`Sender: TObject`
Grid, which causes Event

`EditMode: Boolean`
The value is True if the event is caused by cell text editor. This same event is called when rendering a grid cell. In this case EditMode equals False.

`Params: TColCellParamsEh`
Additional parameters rendering. You can change the properties of this parameter in the event handler to change the format of the rendering of the current cell.

<dl>

<dd>

`Alignment: TAlignment`
Text alignment.

`Background: TColor`
background color

`BlankCell: Boolean`
An empty cell with 3D frame

`SuppressActiveCellColor: Boolean`	
Use color Params.Background even if it is a current cell

`CheckboxState:TCheckBoxState`
Checkbox status if the column is set to show checkboxes

`Col: Longint`	
Column number of the cell, which is drawn at the moment.

`CellRect: TRect`	
The size and the cell borders

`Font: TFont`	
Font to be used for drawing text

`ImageIndex: Integer`	
Number of pictures from Column.ImageList

`ReadOnly: Boolean`	
The cell read-only

`Row: Longint`	
Row cell line number, which is drawn at this point.

`State: TGridDrawState`	
Cell status

`Text: String`	
The text to be rendered in the cell

`TextEditing: Boolean`	
For the current cell, it is allowed to open InplaceEditor

`DrawCellByThemes:Boolean`	
Draw the cell background using the scheme.

`TextIsLink: Boolean`	
The text in the cell is a link reference.

`ImageIsLink: Boolean`	
Picture from Column.ImageList a link reference.
</dd>

</dl>

</dd>
