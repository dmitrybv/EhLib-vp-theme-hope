# Other features and events of the component


**`property TDBGridEh.Options: TDBGridOption;`**

The property has a set of type and can contain the following values.

<dl><sh>

`dgEditing `
<dl><sh>
The grid is allowed to open the text editor by Enter or F2 key.
</sh></dl>

`dgAlwaysShowEditor`
<dl><sh>
Always display the text editor of the cell during the moving from cell to line.
</sh></dl>

`dgTitles`
<dl><sh>
Show title row.
</sh></dl>

`dgIndicator`
<dl><sh>
Show Indicator column.
</sh></dl>

`dgColumnResize`
<dl><sh>
Allow resize and move columns.
</sh></dl>

`dgColLines`
<dl><sh>
Draw vertical dividing lines.
</sh></dl>

`dgRowLines`
<dl><sh>
Draw horizontal dividing lines.
</sh></dl>

`dgRowSelect`
<dl><sh>
Select the entire row of the grid instead of a single cell.
</sh></dl>

`dgAlwaysShowSelection`
<dl><sh>
Always draw a selection on the grid. When the grid does not have the input focus, the area will be displayed in gray color.
</sh></dl>

`dgConfirmDelete`
<dl><sh>
Show confirmation window before removing the record on Ctrl + Delete.
</sh></dl>

`dgCancelOnExit`
<dl><sh>
Cancel “Edit Mode” using DataSet.Cancel if DataSet was set in append mode, but user did not do any changes to the row.
</sh></dl>

`dgMultiSelect`
<dl><sh>

Allow select areas in the grid. For more information, see. In the 
[Multiselect](45-multiselect.md) section.
</sh></dl>
</sh></dl>
<br>

**`property OptionsEh: TDBGridEhOption`**
<br>
The property has a set of type and can contain the following values:

`dghFixed3D`
<dl><sh>
Draw a border around the 3D cells fixed grid area.
</sh></dl>

`dghFrozen3D`
<dl><sh>
Draw a border around the 3D cells frozen area.
</sh></dl>

`dghFooter3D`
<dl><sh>
Draw a border around the 3D cells footer.
</sh></dl>

`dghData3D`
<dl><sh>
Draw 3D border around the cells containing the data records DataSet.
</sh></dl>

`dghResizeWholeRightPart`
<dl><sh>
In the AutoFitColWidths.
</sh></dl>

`dghHighlightFocus`
<dl><sh>
Highlight the current cell by color or thems style.
</sh></dl>

`dghClearSelection`
<dl><sh>
Clear selection mode MultiSelect when the Grid moves from cell to cell using the keyboard.
</sh></dl>

`dghFitRowHeightToText`
<dl><sh>
When RowSizingAllowed = True, determines a change row heights to customize the height of the mouse so that they always get the exact number of lines of text without clipping.
</sh></dl>

`dghAutoSortMarking`
<dl><sh>
Change markers of sorting by clicking on the title which TitleButton = True.
</sh></dl>

`dghMultiSortMarking`
<dl><sh>
Allows set markers sorting multiple columns at once, to set markers sorting Run-Time, the user must press and hold down the Ctrl key.
</sh></dl>

`dghEnterAsTab`
<dl><sh>
Enter key behaves key Tab, that is, calls go to the next cell.
</sh></dl>

`dghTraceColSizing`
<dl><sh>
When dghColumnResize value is set then this value determines that it is necessary to change the size of the column with the mouse while moving the mouse. If the data value is not set, the size of the column will change after you release the mouse button.
</sh></dl>

`dghIncSearch`
<dl><sh>
Allowed transition incremental search mode by Ctrl + F button
</sh></dl>

`dghPreferIncSearch`
<dl><sh>
If set dghIncSearch, the installation of this value determines the need vlyuchaet incremental search mode immediately by pressing any letter key numeric keypad. If this value is not set, the switch-over to incremental search only after pressing a combination of Ctrl + F.
</sh></dl>

`dghRowHighlight`
<dl><sh>
Highlight the entire row of the grid. Unlike RowSelect, mode RowHighlight notion of the current cell remains.
</sh></dl>

`dghDblClickOptimizeColWidth`
<dl><sh>
Optimize column width so that the column until all text cell by double-clicking on the vertical dividing line header.
</sh></dl>

`dghDialogFind`
<dl><sh>
Allow search in the search grid through dialogue. Search dialog is opened by pressing the Ctrl + F.
</sh></dl>

`dghRecordMoving`
<dl><sh>
Allow moving records by mouse.
</sh></dl>

`dghShowRecNo`
<dl><sh>
Show record number in the column indicator.
</sh></dl>

`dghColumnResize`
<dl><sh>
Allow the mouse to resize the column.
</sh></dl>

`dghColumnMove`
<dl><sh>
Allow the mouse to move the columns.
</sh></dl>

`dghAutoFitRowHeight`
<dl><sh>
Adjust the height of the row so that each cell until all text.
</sh></dl>

`dghHotTrack`
<dl><sh>
Highlight the cell on which the mouse cursor.
</sh></dl>

`dghExtendVertLines`
<dl><sh>
Is extended until the end of the vertical lines of the grid down.
</sh></dl>
<br>
<br>

`function TDBGridEh.DataRowCount: Integer;`
Returns the number of rows of data excluding the header lines and footers.
