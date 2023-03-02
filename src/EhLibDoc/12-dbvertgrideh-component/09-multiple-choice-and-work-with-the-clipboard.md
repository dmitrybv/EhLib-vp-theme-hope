# Multiselect and Clipboard Operations


`TVertDBGridEh` allows you to select the line and rectangular areas for further operations on the selected area (for example, for copying to the clipboard). 

To enable multiple selection, set the following properties:

`EditActions` 

<dd>defines the actions a user can perform with a selected area (Copy, Cut, Delete, Paste, SelectAll).</dd>

`AllowedSelections`
<dd>determines the types of permitted allocation that can be performed in a grid user (vgstRowsEh, vgstRectangleEh, vgstAllEh).</dd>

`Selection`
<dd>It contains properties containing information about the selected area. </dd>
<br>

The property is of type `TVertDBGridEh.Selection` 

`TDBVertGridSelectionEh` and contains the following properties and methods.

`property AnchorRowIndex: Integer`

<dd>Fixed line number in the allocation data of the rectangular area.</dd>

`property Rows: TFieldRowSelectionListEh`
<dd>List of lines in the allocation of full rows records.</dd>

`property SelectionType: TDBVertGridSelectionTypeEh`
<dd>Type selection </dd>

`property ShipRowIndex: Integer`
<dd>Number "floating" line in the allocation of the rectangular area data.</dd>

`function IsCellSelected(ACol, ARow: Integer): Boolean;`
<dd>Returns True if the cell gets in the selected area.</dd>

`procedure Clear;`
<dd>Clear selection. SelectionType = vgstNonEh.</dd>

`procedure SelectAll;`
<dd>Select the entire grid. SelectionType = vgstAllEh.</dd>

`procedure SelectAllDataCells;`
<dd>Select a rectangular area, so that it will get all the data cells.</dd>

Use `TVertDBGridEh.Selection.SelectionType` property to determine the current view selection.

`Selection.SelectionType` has `TDBVertGridSelectionTypeEh` type and can contain the following values 

<dl><dd>
    
  `vgstRowsEh`
      <dl>
          <dd>Allocate a full-line recording. To access the recording, use a dedicated property Selection.Rows.</dd>
      </dl>
    
  `vgstRectangleEh`  	
<dl>
    <dd>Select a square region of the data. For access to the borders of the area and use the properties of Selection.AnchorRowIndex Selection.ShipRowIndex.</dd>
</dl>
    
  `vgstAllEh`  		
  <dl>
      <dd>Select the entire grid.</dd>
  </dl>
    
  `vgstNonEh`  		
  <dl>
      <dd>Multiple selection is absent.</dd>
  </dl>
    
</dd>
</dl>

The TVertDBGridEh.Selection.Rows property is of type TFieldRowSelectionListEh and contains the following properties and methods:

`property Count: Integer `
<dd>It contains the number of selected lines.</dd>

`property Items[Index: Integer]: TFieldRowEh`
<dd>Pointers on selected lines</dd>

`procedure AddSelectedRow(ARow: TFieldRowEh);`
<dd>Adds a new line type TFieldRowEh the list of selected lines.</dd>

`procedure Clear;`
<dd>Clears the list of selected lines</dd>

`procedure RemoveSelectedRow(ARow: TFieldRowEh);`
<dd>Deletes the line type from the list TFieldRowEh selected lines.</dd>

`procedure SelectAll;`
<dd>Selects all lines in the TVertDBGridEh.</dd>

When the user selects a rectangular area of data in the data grid on the allocation are stored in the properties and `Selection.AnchorRowIndex` `Selection.ShipRowIndex`. When a rectangular selection one cell always remains fixed and specifies anchor selection AnchorRowIndex. The second cell specifies `ShipRowIndex` second selection border. If the user presses and drags the mouse up or down, the value changes in `ShipRowIndex` property.

