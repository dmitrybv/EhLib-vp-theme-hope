# Multiselect and Clipboard Operations


`TVertDBGridEh` allows you to select the line and rectangular areas for further operations on the selected area (for example, for copying to the clipboard). 

To enable multiple selection, set the following properties:

`EditActions` 

<sh>defines the actions a user can perform with a selected area (Copy, Cut, Delete, Paste, SelectAll).</sh>

`AllowedSelections`
<sh>determines the types of permitted allocation that can be performed in a grid user (vgstRowsEh, vgstRectangleEh, vgstAllEh).</sh>

`Selection`
<sh>It contains properties containing information about the selected area. </sh>
<br>

The property is of type `TVertDBGridEh.Selection` 

`TDBVertGridSelectionEh` and contains the following properties and methods.

`property AnchorRowIndex: Integer`

<sh>Fixed line number in the allocation data of the rectangular area.</sh>

`property Rows: TFieldRowSelectionListEh`
<sh>List of lines in the allocation of full rows records.</sh>

`property SelectionType: TDBVertGridSelectionTypeEh`
<sh>Type selection </sh>

`property ShipRowIndex: Integer`
<sh>Number "floating" line in the allocation of the rectangular area data.</sh>

`function IsCellSelected(ACol, ARow: Integer): Boolean;`
<sh>Returns True if the cell gets in the selected area.</sh>

`procedure Clear;`
<sh>Clear selection. SelectionType = vgstNonEh.</sh>

`procedure SelectAll;`
<sh>Select the entire grid. SelectionType = vgstAllEh.</sh>

`procedure SelectAllDataCells;`
<sh>Select a rectangular area, so that it will get all the data cells.</sh>

Use `TVertDBGridEh.Selection.SelectionType` property to determine the current view selection.

`Selection.SelectionType` has `TDBVertGridSelectionTypeEh` type and can contain the following values 

<dl><sh>
    
  `vgstRowsEh`
      <dl>
          <sh>Allocate a full-line recording. To access the recording, use a dedicated property Selection.Rows.</sh>
      </dl>
    
  `vgstRectangleEh`  	
<dl>
    <sh>Select a square region of the data. For access to the borders of the area and use the properties of Selection.AnchorRowIndex Selection.ShipRowIndex.</sh>
</dl>
    
  `vgstAllEh`  		
  <dl>
      <sh>Select the entire grid.</sh>
  </dl>
    
  `vgstNonEh`  		
  <dl>
      <sh>Multiple selection is absent.</sh>
  </dl>
    
</sh>
</dl>

The TVertDBGridEh.Selection.Rows property is of type TFieldRowSelectionListEh and contains the following properties and methods:

`property Count: Integer `
<sh>It contains the number of selected lines.</sh>

`property Items[Index: Integer]: TFieldRowEh`
<sh>Pointers on selected lines</sh>

`procedure AddSelectedRow(ARow: TFieldRowEh);`
<sh>Adds a new line type TFieldRowEh the list of selected lines.</sh>

`procedure Clear;`
<sh>Clears the list of selected lines</sh>

`procedure RemoveSelectedRow(ARow: TFieldRowEh);`
<sh>Deletes the line type from the list TFieldRowEh selected lines.</sh>

`procedure SelectAll;`
<sh>Selects all lines in the TVertDBGridEh.</sh>

When the user selects a rectangular area of data in the data grid on the allocation are stored in the properties and `Selection.AnchorRowIndex` `Selection.ShipRowIndex`. When a rectangular selection one cell always remains fixed and specifies anchor selection AnchorRowIndex. The second cell specifies `ShipRowIndex` second selection border. If the user presses and drags the mouse up or down, the value changes in `ShipRowIndex` property.

