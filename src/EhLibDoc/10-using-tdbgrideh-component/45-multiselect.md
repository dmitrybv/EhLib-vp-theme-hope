# Multiselect 


 `TDBGridEh` allows to select records, columns and rectangle areas for following operations above the selected area.
To customize multiselecting you can use next properties:

<dl><sh>

`dgMultiSelect in Options property` - Specifies whether the multiselect is allowed.

`dghClearSelection in OptionsEh property` - Specifies whether the selection will be cleared after user move to the next cell.

`EditActions property` - Specifies actions which user can execute above the selection (`Copy`,`Cut`,`Delete`,`Paste`,`SelectAll`).

`AllowedSelections property` - Specifies the types of selections that is allowed to do (`Rows`, `Columns`, `Rectangle area`, `All`).

`Selection property` specifies a current multiselection state, selected records, columns or rectangle area and it has properties and functions to access them. 
</sh></dl>

If user change the selected area, the `OnSelectionChange` event occurs.

To access the selected area, use the following properties of the grid:

`SelectedRows: TBookmarkListEh`
<dl><sh>
It contains a list of selected records.
</sh></dl>

`Selection: TDBGridEhSelection` It contains information on the selected area and the list of selected items.

`Selection.SelectionType`
<dl><sh>
</sh></dl>
Use `Selection.SelectionType` property to determine the type of the selected area. `SelectionType` property is of enumeration type, and can contain one of the following

<dl><sh>

`gstRecordBookmarks` – Records are Selected. Use the property `SelectedRows` or `Selection.Rows` access to selected records.

`gstRectangle` – Rectangular area is selected. Use `Selection.Rect` property to get the border of the selected area.

`gstColumns` – Columns are selected. Use `Selection.Columns` property to access the list of selected columns

`gstAll` – all grid is selected.

`gstNon` – the grid has no multiple selection.
</sh></dl>
<br>

`property Selection.Rows` 
<dl><sh>
</sh></dl>
(as did SelectedRows) has type TBookmarkListEh. Pointers to entries in the list are stored as bookmarks DataSet (type TBookmark) and has the following properties and methods:

`Count:	Integer`	The number of entries in the list of bookmarks

`Items[Index: Integer]: TUniBookmarkEh`	The property to access elements of an array of selected bookmarks.

`CurrentRowSelected	Boolean` The property returns and sets, if the current selected entry in the list of selected records.
<br>
<br>

`Selection.Rect`
<dl><sh>
</sh></dl>
The `Selection.Rect` property is of `TDBGridEhSelectionRect` type. The property contains the coordinates rectangel selected area. `TDBGridEhSelectionRect` Type gase the following properties and methods:

<dl><sh>

`BottomRow: TUniBookmarkEh` Pointer to the lower border area. Index specifies the location as a bookmark for a record in DataSet.

`LeftCol: Longint` The column number of the left border of the selected area.

`TopRow: TUniBookmarkEh` A pointer to the upper boundary of the field.

`RightCol: Longint` Column number right border of the selected area.
</sh></dl>

Method
```pascal
function DataCellSelected(DataCol: Longint; DataRow: TUniBookmarkEh): Boolean;
```
Returns information whether said cell within the selected area.

`Selection.Columns`
<dl><sh>

The `Selection.Columns` property is of `TDBGridEhSelectionCols` type. The property contains a list of selected columns. `TDBGridEhSelectionCols` type have the following properties and methods:

`Count: Integer` The number of selected columns.

`Items[Index: Integer]: TColumnsEh` The property sets the access to the elements of the selected columns.
</sh></dl>

