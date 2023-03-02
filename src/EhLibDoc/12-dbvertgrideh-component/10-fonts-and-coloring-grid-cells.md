# Set fonts and coloring grid cells using events


To control the rendering content of cells in the grid data partition, there are two types of events.

Type	1	event to replace the rendering parameters. It's events like `TDBVertGridEh.OnGetCellParams` and `TFieldRowEh.OnGetCellParams`. In these events, it is necessary to replace the parameters such as font, font, text alignment, the number of pictures `ImageList`, etc., but drawing itself carries the internal code of the grid.

Type	2 	events in which event handler executes rendering the cell contents.

Here is a list of events that you can use to customize the font attributes and color of the cell before the data is printed. At the time of calling all of the following events DataSet will already be on the record, the contents of which it is necessary to render, so you can access the field values using the methods like TDataSet.FieldByName(..).Value. Do not change the properties of the grid or columns inside those events. This may cause a program loops.

`TDBVertGridEh.OnGetCellParams`

<dd>Use this event to replace the font settings and the background color of the cell before rendering. Event parameters are similar to the events for TDBGridEh.OnGetCellParams.</dd>

`TFieldRowEh.OnGetCellParams`
<dd>Use this event to replace the cell parameters a particular column before rendering. Parameters are similar to the events soybtiya TColumnEh.OnGetCellParams.</dd>

`TDBVertGridEh.OnAdvDrawDataCell` and `TFieldRowEh.OnAdvDrawDataCell`

<dd>Use this event to draw the data in the data cells of the grid. The event code set Processed argument to True to specify that you have handled the process of drawing. If Processed leave False, the grid method will render the contents of a cell using default method. You can, if necessary, change the ARect and Params and cause Grid.DefaultDrawRowDataCell or leave Processed able to False and do not induce Grid.DefaultDrawRowDataCell. To change the data output to the screen, use the event parameters Params and Grid.Canvas if you draw a cell data function on their own using GDI.</dd>
