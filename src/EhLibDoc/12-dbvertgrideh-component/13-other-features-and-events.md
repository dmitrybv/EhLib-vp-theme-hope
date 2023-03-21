# Other features and events of the component

`property Options: TDBVHGridOptions`

Property type set. It may contain the following values.

<dl>
<sh>
	
`dgvhEditing`
<dl><sh>The grid is allowed to open the text editor by clicking on the Enter or F2 Key.</sh></dl>
	
`dgvhAlwaysShowEditor`
<dl>
	<sh>Always display the text editor of the cell during the transition from line to line.</sh>
</dl>
	
`dgvhLabelCol`
<dl>
	<sh>Display column with header fields.</sh>
</dl>
	
`dgvhRowResize`
<dl>
	<sh>Permission is granted to change the row height using the mouse.</sh>
</dl>
	
`dgvhRowMove`
<dl>
	<sh>Permission is granted to move the line with the mouse.</sh>
</dl>
	
`dgvhColLines`
<dl>
	<sh>Draw a vertical dividing lines</sh>
</dl>
	
`dgvhRowLines`
<dl>
	<sh>Draw a horizontal dividing line</sh>
</dl>
	
`dgvhTabs`
<dl>
	<sh>Edit the Tab key in the grid. By Tab to move the cursor to the next line.</sh>
</dl>
	
`dgvhAlwaysShowSelection`
<dl>
	<sh>Always draw a selection on the grid. When the grid does not have the input focus area will be displayed gray color.</sh>
</dl>
	
`dgvhConfirmDelete`
<dl>
	<sh>Show confirmation dialog before removing the recording Ctrl + Delete</sh>
</dl>
	
`dgvhCancelOnExit`
<dl>
	<sh>Exit Edit Mode dataset methods DataSet.Cancel if grid included in append mode recording, but did not do any changes to the rows.</sh>
</dl>

</sh>
</dl>

`property OptionsEh: TDBVHGridOptionsEh`

Property type is set. It may contain the following values.

<dl>
<sh>

`dgvhHighlightFocusEh`

<dl>
	<sh>Highlight the current cell color or style.</sh>
</dl>
	
`dgvhClearSelectionEh`

<dl>
	<sh>Clear selection when navigating Grid</sh>
</dl>
	
`dgvhEnterToNextRowEh`

<dl>
	<sh>Go to the next line when you press the VK_ENTER</sh>
</dl>
	
`dgvhTabToNextRowEh`

<dl>
	<sh>Go to the next line when you press the VK_TAB</sh>
</dl>
	
`dgvhHotTrackEh`

<dl>
	<sh>Highlight the cell on which the mouse cursor</sh>
</dl>
	
`dgvhRowsIsTabControlsEh`

<dl>
	<sh>Set grid lines act as a set of individual controls. Ie it is not allowed to move to the next and previous record using navigation keys. By clicking on the VK_TAB on the last line of the grid control is transferred to the next control on the form in the order TabOrder.</sh>
</dl>

</sh>
</dl>
<br>

`property AllowedOperations: TDBGridEhAllowedOperations`

Set an allowed operations on a DataSet. 

`alopInsertEh` – Insert new recordings at any place of the grid (actually DataSet) is allowed.

`alopUpdateEh` – Changing the values of an existing record is allowed.

`alopDeleteEh` – Deleting records is allowed.

`alopAppendEh` – Adding records to the end of the grid is allowed.


