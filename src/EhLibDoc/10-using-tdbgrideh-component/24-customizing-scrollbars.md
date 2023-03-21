# Customizing scrollbars


 `TDBGridEh` and vertical scrollbar. 
If you work with different types of dataset you can notice that for some types of dataset the DBGrid shows vertical scrollbar correctly, 
but for other dataset their vertical scrollbar has only three positions independently of record count in dataset. 
To adjust the vertical scrollbar accommodation the `DBGrid` uses `RecordCount` and `RecNo` property of `DataSet` component. 
But some dataset holds `-1` in `RecordCount` and `RecNo.DataSet` function `IsSequenced` indicates whether the 
underlying database table uses record numbers to indicate the order of records. 
When `IsSequenced` returns `True` value, applications can safely use the `RecNo` property to navigate through 
records in the dataset and `DBGrid` can use `RecNo` property to show thumb position in vertical scrollbar. 
But when `IsSequenced` returns `False` value, `DBGrid` can not define current record position and it shows 
vertical scrollbar in three positions. 
`DBGridEh` component has possibility to show proportional scrollbar for no sequenced dataset. 
To do it we need to activate SumList and create list of record bookmars. 
Set `SumList.Active` to `True` and `SumList.VirtualRecords` to `True`. 
`SumList` will run through dataset and create list of  records bookmarks. 
If you use client/sever technology to access database `SumList` will force dataset to fetch all records, 
but this operation can take much time. 
Keep in mind that `VirtualRecords` will work only for full relationship bookmarks dataset, 
it means that `DataSet.ComapreBookmark` function has to return > 0 if `record1` is after `record2` 
(i.e. record to which `bookmark1` indicates has to be after record to which `bookmark2` indicates). 
It must return `0` if `bookmark1` and `bookmark2` points to the same record, and value `< 0` if record1 is before `record2`. 
`TBDEDataSet` in most cases support full relationship bookmarks.

You can control the horizontal and vertical scrolling bar using the `Grid.VertScrollBar` and `Grid.HorzScrollBar` properties of `TGridScrollBarEh` type. 
The `TGridScrollBarEh` class contains the following properties:
<sh>

`Tracking: Boolean`
Specifies whether or not the position in the grid to change immediately when user change the position of the slider when the user clicked the mouse and drags the slider.

`Visible: Boolean`
Specifies permanent visibility slider bar. (The property is out of date, use VisibleMode)

`SmoothStep: Boolean`
Sets the scroll step of the grid in which the grid is not specified on the border of the cell, and pixel-by-pixel. When SmoothStep, the grid visually scroll more smoothly, with the end of the scroll bar does not guarantee that the left-top cell of the grid will start at the border of the visible area of the grid. SmoothStep mode only works when the grid is bind to the DataSet of TMemTableEh type.

`VisibleMode: TScrollBarVisibleModeEh`
Sets the scrollbar show mode:

<dl><sh>

`sbAlwaysShowEh` - the scroll bar is always displayed.

`sbNeverShowEh` - scroll bar is always hidden.

`sbAutoShowEh` - the scroll bar is displayed only if the grid is not reduced in the visible area of the client window.

</sh></dl> 

`Height: Integer`
For the horizontal scroll bar sets the height of the strip. For vertical property is not available.

`Width: Integer`
For the vertical scroll bar sets the width of the strip. For horizontal scroll feature is not available.

`ExtraPanel: TDBGridEhScrollBarPanel`
The property is available only for horizontal stripes. The property specifies the parameters of the additional panel that is displayed in the left part of the band. A detailed description, see the next section.

To customize scollbars you need to use subprtoperties of HorzScrollBar and VertScrollBar properties. 

`Tracking: Boolean`			This property …

`SmoothStep: Boolean`			…

`ExtScrollBar: TScrollBar;`	…

`Visible: Boolean;`			…

`VisibleMode: TScrollBarVisibleModeEh;`
			`sbAlwaysShowEh`		Always shows scrollbar.

`sbNeverShowEh`		Never shows scrollbar.

`sbAutoShowEh`		Shows or hides scrollbar automatically depending on visible area of grid.

</sh>

If `DBGridEh` is connected to `DataSet` of `TMemTableEh` type then on vertical scrolling grid doesn’t change position of active record.
