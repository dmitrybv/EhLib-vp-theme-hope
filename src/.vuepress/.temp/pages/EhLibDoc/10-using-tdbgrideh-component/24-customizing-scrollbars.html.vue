<template><div><h1 id="customizing-scrollbars" tabindex="-1"><a class="header-anchor" href="#customizing-scrollbars" aria-hidden="true">#</a> Customizing scrollbars</h1>
<p><code v-pre>TDBGridEh</code> and vertical scrollbar.
If you work with different types of dataset you can notice that for some types of dataset the DBGrid shows vertical scrollbar correctly,
but for other dataset their vertical scrollbar has only three positions independently of record count in dataset.
To adjust the vertical scrollbar accommodation the <code v-pre>DBGrid</code> uses <code v-pre>RecordCount</code> and <code v-pre>RecNo</code> property of <code v-pre>DataSet</code> component.
But some dataset holds <code v-pre>-1</code> in <code v-pre>RecordCount</code> and <code v-pre>RecNo.DataSet</code> function <code v-pre>IsSequenced</code> indicates whether the
underlying database table uses record numbers to indicate the order of records.
When <code v-pre>IsSequenced</code> returns <code v-pre>True</code> value, applications can safely use the <code v-pre>RecNo</code> property to navigate through
records in the dataset and <code v-pre>DBGrid</code> can use <code v-pre>RecNo</code> property to show thumb position in vertical scrollbar.
But when <code v-pre>IsSequenced</code> returns <code v-pre>False</code> value, <code v-pre>DBGrid</code> can not define current record position and it shows
vertical scrollbar in three positions.
<code v-pre>DBGridEh</code> component has possibility to show proportional scrollbar for no sequenced dataset.
To do it we need to activate SumList and create list of record bookmars.
Set <code v-pre>SumList.Active</code> to <code v-pre>True</code> and <code v-pre>SumList.VirtualRecords</code> to <code v-pre>True</code>.
<code v-pre>SumList</code> will run through dataset and create list of  records bookmarks.
If you use client/sever technology to access database <code v-pre>SumList</code> will force dataset to fetch all records,
but this operation can take much time.
Keep in mind that <code v-pre>VirtualRecords</code> will work only for full relationship bookmarks dataset,
it means that <code v-pre>DataSet.ComapreBookmark</code> function has to return &gt; 0 if <code v-pre>record1</code> is after <code v-pre>record2</code>
(i.e. record to which <code v-pre>bookmark1</code> indicates has to be after record to which <code v-pre>bookmark2</code> indicates).
It must return <code v-pre>0</code> if <code v-pre>bookmark1</code> and <code v-pre>bookmark2</code> points to the same record, and value <code v-pre>&lt; 0</code> if record1 is before <code v-pre>record2</code>.
<code v-pre>TBDEDataSet</code> in most cases support full relationship bookmarks.</p>
<p>You can control the horizontal and vertical scrolling bar using the <code v-pre>Grid.VertScrollBar</code> and <code v-pre>Grid.HorzScrollBar</code> properties of <code v-pre>TGridScrollBarEh</code> type.
The <code v-pre>TGridScrollBarEh</code> class contains the following properties:</p>
<dd>
<p><code v-pre>Tracking: Boolean</code>
Specifies whether or not the position in the grid to change immediately when user change the position of the slider when the user clicked the mouse and drags the slider.</p>
<p><code v-pre>Visible: Boolean</code>
Specifies permanent visibility slider bar. (The property is out of date, use VisibleMode)</p>
<p><code v-pre>SmoothStep: Boolean</code>
Sets the scroll step of the grid in which the grid is not specified on the border of the cell, and pixel-by-pixel. When SmoothStep, the grid visually scroll more smoothly, with the end of the scroll bar does not guarantee that the left-top cell of the grid will start at the border of the visible area of the grid. SmoothStep mode only works when the grid is bind to the DataSet of TMemTableEh type.</p>
<p><code v-pre>VisibleMode: TScrollBarVisibleModeEh</code>
Sets the scrollbar show mode:</p>
<dl><dd>
<p><code v-pre>sbAlwaysShowEh</code> - the scroll bar is always displayed.</p>
<p><code v-pre>sbNeverShowEh</code> - scroll bar is always hidden.</p>
<p><code v-pre>sbAutoShowEh</code> - the scroll bar is displayed only if the grid is not reduced in the visible area of the client window.</p>
</dd></dl> 
<p><code v-pre>Height: Integer</code>
For the horizontal scroll bar sets the height of the strip. For vertical property is not available.</p>
<p><code v-pre>Width: Integer</code>
For the vertical scroll bar sets the width of the strip. For horizontal scroll feature is not available.</p>
<p><code v-pre>ExtraPanel: TDBGridEhScrollBarPanel</code>
The property is available only for horizontal stripes. The property specifies the parameters of the additional panel that is displayed in the left part of the band. A detailed description, see the next section.</p>
<p>To customize scollbars you need to use subprtoperties of HorzScrollBar and VertScrollBar properties.</p>
<p><code v-pre>Tracking: Boolean</code>			This property …</p>
<p><code v-pre>SmoothStep: Boolean</code>			…</p>
<p><code v-pre>ExtScrollBar: TScrollBar;</code>	…</p>
<p><code v-pre>Visible: Boolean;</code>			…</p>
<p><code v-pre>VisibleMode: TScrollBarVisibleModeEh;</code>
<code v-pre>sbAlwaysShowEh</code>		Always shows scrollbar.</p>
<p><code v-pre>sbNeverShowEh</code>		Never shows scrollbar.</p>
<p><code v-pre>sbAutoShowEh</code>		Shows or hides scrollbar automatically depending on visible area of grid.</p>
</dd>
<p>If <code v-pre>DBGridEh</code> is connected to <code v-pre>DataSet</code> of <code v-pre>TMemTableEh</code> type then on vertical scrolling grid doesn’t change position of active record.</p>
</div></template>


