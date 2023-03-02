# Other features and events of the component

`property Options: TDBVHGridOptions`

Property type set. It may contain the following values.

<dl>
<dd>
	
`dgvhEditing`
<dl><dd>The grid is allowed to open the text editor by clicking on the Enter or F2 Key.</dd></dl>
	
`dgvhAlwaysShowEditor`
<dl>
	<dd>Always display the text editor of the cell during the transition from line to line.</dd>
</dl>
	
`dgvhLabelCol`
<dl>
	<dd>Display column with header fields.</dd>
</dl>
	
`dgvhRowResize`
<dl>
	<dd>Permission is granted to change the row height using the mouse.</dd>
</dl>
	
`dgvhRowMove`
<dl>
	<dd>Permission is granted to move the line with the mouse.</dd>
</dl>
	
`dgvhColLines`
<dl>
	<dd>Draw a vertical dividing lines</dd>
</dl>
	
`dgvhRowLines`
<dl>
	<dd>Draw a horizontal dividing line</dd>
</dl>
	
`dgvhTabs`
<dl>
	<dd>Edit the Tab key in the grid. By Tab to move the cursor to the next line.</dd>
</dl>
	
`dgvhAlwaysShowSelection`
<dl>
	<dd>Always draw a selection on the grid. When the grid does not have the input focus area will be displayed gray color.</dd>
</dl>
	
`dgvhConfirmDelete`
<dl>
	<dd>Show confirmation dialog before removing the recording Ctrl + Delete</dd>
</dl>
	
`dgvhCancelOnExit`
<dl>
	<dd>Exit Edit Mode dataset methods DataSet.Cancel if grid included in append mode recording, but did not do any changes to the rows.</dd>
</dl>

</dd>
</dl>

`property OptionsEh: TDBVHGridOptionsEh`

Property type is set. It may contain the following values.

<dl>
<dd>

`dgvhHighlightFocusEh`

<dl>
	<dd>Highlight the current cell color or style.</dd>
</dl>
	
`dgvhClearSelectionEh`

<dl>
	<dd>Clear selection when navigating Grid</dd>
</dl>
	
`dgvhEnterToNextRowEh`

<dl>
	<dd>Go to the next line when you press the VK_ENTER</dd>
</dl>
	
`dgvhTabToNextRowEh`

<dl>
	<dd>Go to the next line when you press the VK_TAB</dd>
</dl>
	
`dgvhHotTrackEh`

<dl>
	<dd>Highlight the cell on which the mouse cursor</dd>
</dl>
	
`dgvhRowsIsTabControlsEh`

<dl>
	<dd>Set grid lines act as a set of individual controls. Ie it is not allowed to move to the next and previous record using navigation keys. By clicking on the VK_TAB on the last line of the grid control is transferred to the next control on the form in the order TabOrder.</dd>
</dl>

</dd>
</dl>
<br>

`property AllowedOperations: TDBGridEhAllowedOperations`

Set an allowed operations on a DataSet. 

`alopInsertEh` – Insert new recordings at any place of the grid (actually DataSet) is allowed.

`alopUpdateEh` – Changing the values of an existing record is allowed.

`alopDeleteEh` – Deleting records is allowed.

`alopAppendEh` – Adding records to the end of the grid is allowed.


