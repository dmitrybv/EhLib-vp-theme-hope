# Events and properties to control the reaction of the mouse

The grid contains the standard event `OnMouseDown`; `OnMouseMove`; `OnMouseUp`; to handle mouse events.
In the event you can use the following methods to determine the number of the cell that worked Event 

```pascal:no-line-numbers
function MouseCoord(X, Y: Integer): TGridCoord;
```

function returns the position of the cell in the coordinates of the client area of the grid. 
If `X, Y` coordinates do not fall in a cell, one of the values or `TGridCoord.X` `TGridCoord.Y` will be `-1`.

Grid provides a set of events in which the coordinates are transmitted cells in which there was a click.

`TDBGridEh.OnCellClick`
<sh>
The event occurs only when you click on the cells in the data section.
The event is passed a column Column: TColumnEh, which clicked. 
</sh>
<br>

`TDBGridEh.OnCellMouseClick`
<sh>
The event occurs when user clicks any cell in the grid.
The event have the following parameters

`Grid: TCustomGridEh`	Grid in which the event occurred
Cell: TGridCoord		The cell in which the event occurred

`Button: TMouseButton`	Type of pressed button 

`Shift: TShiftState;` 	State of additional buttons

`X, Y: Integer;` 		The coordinates of the mouse relative to the cell

`var Processed: Boolean`	Set Processed in True to indicate that you have been treated in a reaction event and call the default handler is not necessary.

In the event you can call the default handler - `TCustomGridEh.DefaultCellMouseClick`.
</sh>

Useful methods and properties for obtaining data on the area of the grid in which the event occurred:

```pascal:no-line-numbers
function GetCellAreaType(ACol, ARow: Integer; 
  var AreaCol, AreaRow: Integer): TCellAreaTypeEh;
```

get the type of horizontal and vertical grid area in which the event occurred. 
Horizontally the grid is divided into the following areas:

<sh>

 `hctIndicatorEh`	Indicator area

 `hctDataEh` 		Data area 

</sh>

 Vertically the grid is divided into the following areas:
 <sh>

 `vctTitleEh`		header area

 `vctSubTitleEh`		The area under the heading filter

 `vctDataEh`		data area

 `vctAboveFooterEh`	The area between the footer and data

 `vctFooterEh`		footer area
  </sh>
<br>

`TDBGridEh.OnGetBtnParams`
<sh>Event occurs by clicking on the header and is used for special painting of a pressed title.</sh>

`TDBGridEh.OnTitleBtnClick`
<sh>The event is called when you click in the header area that is configured to work as a button. To trigger events in the header the Column.Title.TitleButton property should be set to True.</sh>

`TDBGridEh.OnTitleClick`
<sh>The event is called when you click in the header area.</sh>
