<template><div><h1 id="other-features-and-events-of-the-component" tabindex="-1"><a class="header-anchor" href="#other-features-and-events-of-the-component" aria-hidden="true">#</a> Other features and events of the component</h1>
<p><strong><code v-pre>property TDBGridEh.Options: TDBGridOption;</code></strong></p>
<p>The property has a set of type and can contain the following values.</p>
<dl><dd>
<p><code v-pre>dgEditing </code></p>
<dl><dd>
The grid is allowed to open the text editor by Enter or F2 key.
</dd></dl>
<p><code v-pre>dgAlwaysShowEditor</code></p>
<dl><dd>
Always display the text editor of the cell during the moving from cell to line.
</dd></dl>
<p><code v-pre>dgTitles</code></p>
<dl><dd>
Show title row.
</dd></dl>
<p><code v-pre>dgIndicator</code></p>
<dl><dd>
Show Indicator column.
</dd></dl>
<p><code v-pre>dgColumnResize</code></p>
<dl><dd>
Allow resize and move columns.
</dd></dl>
<p><code v-pre>dgColLines</code></p>
<dl><dd>
Draw vertical dividing lines.
</dd></dl>
<p><code v-pre>dgRowLines</code></p>
<dl><dd>
Draw horizontal dividing lines.
</dd></dl>
<p><code v-pre>dgRowSelect</code></p>
<dl><dd>
Select the entire row of the grid instead of a single cell.
</dd></dl>
<p><code v-pre>dgAlwaysShowSelection</code></p>
<dl><dd>
Always draw a selection on the grid. When the grid does not have the input focus, the area will be displayed in gray color.
</dd></dl>
<p><code v-pre>dgConfirmDelete</code></p>
<dl><dd>
Show confirmation window before removing the record on Ctrl + Delete.
</dd></dl>
<p><code v-pre>dgCancelOnExit</code></p>
<dl><dd>
Cancel “Edit Mode” using DataSet.Cancel if DataSet was set in append mode, but user did not do any changes to the row.
</dd></dl>
<p><code v-pre>dgMultiSelect</code></p>
<dl><dd>
<p>Allow select areas in the grid. For more information, see. In the
<RouterLink to="/EhLibDoc/04-using-tdbgrideh-component/45-multiselect.html">Multiselect</RouterLink> section.</p>
</dd></dl>
</dd></dl>
<br>
<p><strong><code v-pre>property OptionsEh: TDBGridEhOption</code></strong>
<br>
The property has a set of type and can contain the following values:</p>
<p><code v-pre>dghFixed3D</code></p>
<dl><dd>
Draw a border around the 3D cells fixed grid area.
</dd></dl>
<p><code v-pre>dghFrozen3D</code></p>
<dl><dd>
Draw a border around the 3D cells frozen area.
</dd></dl>
<p><code v-pre>dghFooter3D</code></p>
<dl><dd>
Draw a border around the 3D cells footer.
</dd></dl>
<p><code v-pre>dghData3D</code></p>
<dl><dd>
Draw 3D border around the cells containing the data records DataSet.
</dd></dl>
<p><code v-pre>dghResizeWholeRightPart</code></p>
<dl><dd>
In the AutoFitColWidths.
</dd></dl>
<p><code v-pre>dghHighlightFocus</code></p>
<dl><dd>
Highlight the current cell by color or thems style.
</dd></dl>
<p><code v-pre>dghClearSelection</code></p>
<dl><dd>
Clear selection mode MultiSelect when the Grid moves from cell to cell using the keyboard.
</dd></dl>
<p><code v-pre>dghFitRowHeightToText</code></p>
<dl><dd>
When RowSizingAllowed = True, determines a change row heights to customize the height of the mouse so that they always get the exact number of lines of text without clipping.
</dd></dl>
<p><code v-pre>dghAutoSortMarking</code></p>
<dl><dd>
Change markers of sorting by clicking on the title which TitleButton = True.
</dd></dl>
<p><code v-pre>dghMultiSortMarking</code></p>
<dl><dd>
Allows set markers sorting multiple columns at once, to set markers sorting Run-Time, the user must press and hold down the Ctrl key.
</dd></dl>
<p><code v-pre>dghEnterAsTab</code></p>
<dl><dd>
Enter key behaves key Tab, that is, calls go to the next cell.
</dd></dl>
<p><code v-pre>dghTraceColSizing</code></p>
<dl><dd>
When dghColumnResize value is set then this value determines that it is necessary to change the size of the column with the mouse while moving the mouse. If the data value is not set, the size of the column will change after you release the mouse button.
</dd></dl>
<p><code v-pre>dghIncSearch</code></p>
<dl><dd>
Allowed transition incremental search mode by Ctrl + F button
</dd></dl>
<p><code v-pre>dghPreferIncSearch</code></p>
<dl><dd>
If set dghIncSearch, the installation of this value determines the need vlyuchaet incremental search mode immediately by pressing any letter key numeric keypad. If this value is not set, the switch-over to incremental search only after pressing a combination of Ctrl + F.
</dd></dl>
<p><code v-pre>dghRowHighlight</code></p>
<dl><dd>
Highlight the entire row of the grid. Unlike RowSelect, mode RowHighlight notion of the current cell remains.
</dd></dl>
<p><code v-pre>dghDblClickOptimizeColWidth</code></p>
<dl><dd>
Optimize column width so that the column until all text cell by double-clicking on the vertical dividing line header.
</dd></dl>
<p><code v-pre>dghDialogFind</code></p>
<dl><dd>
Allow search in the search grid through dialogue. Search dialog is opened by pressing the Ctrl + F.
</dd></dl>
<p><code v-pre>dghRecordMoving</code></p>
<dl><dd>
Allow moving records by mouse.
</dd></dl>
<p><code v-pre>dghShowRecNo</code></p>
<dl><dd>
Show record number in the column indicator.
</dd></dl>
<p><code v-pre>dghColumnResize</code></p>
<dl><dd>
Allow the mouse to resize the column.
</dd></dl>
<p><code v-pre>dghColumnMove</code></p>
<dl><dd>
Allow the mouse to move the columns.
</dd></dl>
<p><code v-pre>dghAutoFitRowHeight</code></p>
<dl><dd>
Adjust the height of the row so that each cell until all text.
</dd></dl>
<p><code v-pre>dghHotTrack</code></p>
<dl><dd>
Highlight the cell on which the mouse cursor.
</dd></dl>
<p><code v-pre>dghExtendVertLines</code></p>
<dl><dd>
Is extended until the end of the vertical lines of the grid down.
</dd></dl>
<br>
<br>
<p><code v-pre>function TDBGridEh.DataRowCount: Integer;</code>
Returns the number of rows of data excluding the header lines and footers.</p>
</div></template>


