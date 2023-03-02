# Other features and events of the component


**`property TDBGridEh.Options: TDBGridOption;`**

The property has a set of type and can contain the following values.

<dl><dd>

`dgEditing `
<dl><dd>
The grid is allowed to open the text editor by Enter or F2 key.
</dd></dl>

`dgAlwaysShowEditor`
<dl><dd>
Always display the text editor of the cell during the moving from cell to line.
</dd></dl>

`dgTitles`
<dl><dd>
Show title row.
</dd></dl>

`dgIndicator`
<dl><dd>
Show Indicator column.
</dd></dl>

`dgColumnResize`
<dl><dd>
Allow resize and move columns.
</dd></dl>

`dgColLines`
<dl><dd>
Draw vertical dividing lines.
</dd></dl>

`dgRowLines`
<dl><dd>
Draw horizontal dividing lines.
</dd></dl>

`dgRowSelect`
<dl><dd>
Select the entire row of the grid instead of a single cell.
</dd></dl>

`dgAlwaysShowSelection`
<dl><dd>
Always draw a selection on the grid. When the grid does not have the input focus, the area will be displayed in gray color.
</dd></dl>

`dgConfirmDelete`
<dl><dd>
Show confirmation window before removing the record on Ctrl + Delete.
</dd></dl>

`dgCancelOnExit`
<dl><dd>
Cancel “Edit Mode” using DataSet.Cancel if DataSet was set in append mode, but user did not do any changes to the row.
</dd></dl>

`dgMultiSelect`
<dl><dd>

Allow select areas in the grid. For more information, see. In the 
[Multiselect](45-multiselect.md) section.
</dd></dl>
</dd></dl>
<br>

**`property OptionsEh: TDBGridEhOption`**
<br>
The property has a set of type and can contain the following values:

`dghFixed3D`
<dl><dd>
Draw a border around the 3D cells fixed grid area.
</dd></dl>

`dghFrozen3D`
<dl><dd>
Draw a border around the 3D cells frozen area.
</dd></dl>

`dghFooter3D`
<dl><dd>
Draw a border around the 3D cells footer.
</dd></dl>

`dghData3D`
<dl><dd>
Draw 3D border around the cells containing the data records DataSet.
</dd></dl>

`dghResizeWholeRightPart`
<dl><dd>
In the AutoFitColWidths.
</dd></dl>

`dghHighlightFocus`
<dl><dd>
Highlight the current cell by color or thems style.
</dd></dl>

`dghClearSelection`
<dl><dd>
Clear selection mode MultiSelect when the Grid moves from cell to cell using the keyboard.
</dd></dl>

`dghFitRowHeightToText`
<dl><dd>
When RowSizingAllowed = True, determines a change row heights to customize the height of the mouse so that they always get the exact number of lines of text without clipping.
</dd></dl>

`dghAutoSortMarking`
<dl><dd>
Change markers of sorting by clicking on the title which TitleButton = True.
</dd></dl>

`dghMultiSortMarking`
<dl><dd>
Allows set markers sorting multiple columns at once, to set markers sorting Run-Time, the user must press and hold down the Ctrl key.
</dd></dl>

`dghEnterAsTab`
<dl><dd>
Enter key behaves key Tab, that is, calls go to the next cell.
</dd></dl>

`dghTraceColSizing`
<dl><dd>
When dghColumnResize value is set then this value determines that it is necessary to change the size of the column with the mouse while moving the mouse. If the data value is not set, the size of the column will change after you release the mouse button.
</dd></dl>

`dghIncSearch`
<dl><dd>
Allowed transition incremental search mode by Ctrl + F button
</dd></dl>

`dghPreferIncSearch`
<dl><dd>
If set dghIncSearch, the installation of this value determines the need vlyuchaet incremental search mode immediately by pressing any letter key numeric keypad. If this value is not set, the switch-over to incremental search only after pressing a combination of Ctrl + F.
</dd></dl>

`dghRowHighlight`
<dl><dd>
Highlight the entire row of the grid. Unlike RowSelect, mode RowHighlight notion of the current cell remains.
</dd></dl>

`dghDblClickOptimizeColWidth`
<dl><dd>
Optimize column width so that the column until all text cell by double-clicking on the vertical dividing line header.
</dd></dl>

`dghDialogFind`
<dl><dd>
Allow search in the search grid through dialogue. Search dialog is opened by pressing the Ctrl + F.
</dd></dl>

`dghRecordMoving`
<dl><dd>
Allow moving records by mouse.
</dd></dl>

`dghShowRecNo`
<dl><dd>
Show record number in the column indicator.
</dd></dl>

`dghColumnResize`
<dl><dd>
Allow the mouse to resize the column.
</dd></dl>

`dghColumnMove`
<dl><dd>
Allow the mouse to move the columns.
</dd></dl>

`dghAutoFitRowHeight`
<dl><dd>
Adjust the height of the row so that each cell until all text.
</dd></dl>

`dghHotTrack`
<dl><dd>
Highlight the cell on which the mouse cursor.
</dd></dl>

`dghExtendVertLines`
<dl><dd>
Is extended until the end of the vertical lines of the grid down.
</dd></dl>
<br>
<br>

`function TDBGridEh.DataRowCount: Integer;`
Returns the number of rows of data excluding the header lines and footers.
