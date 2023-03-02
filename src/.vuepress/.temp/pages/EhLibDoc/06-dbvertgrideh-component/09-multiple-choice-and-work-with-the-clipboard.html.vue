<template><div><h1 id="multiselect-and-clipboard-operations" tabindex="-1"><a class="header-anchor" href="#multiselect-and-clipboard-operations" aria-hidden="true">#</a> Multiselect and Clipboard Operations</h1>
<p><code v-pre>TVertDBGridEh</code> allows you to select the line and rectangular areas for further operations on the selected area (for example, for copying to the clipboard).</p>
<p>To enable multiple selection, set the following properties:</p>
<p><code v-pre>EditActions</code></p>
<dd>defines the actions a user can perform with a selected area (Copy, Cut, Delete, Paste, SelectAll).</dd>
<p><code v-pre>AllowedSelections</code></p>
<dd>determines the types of permitted allocation that can be performed in a grid user (vgstRowsEh, vgstRectangleEh, vgstAllEh).</dd>
<p><code v-pre>Selection</code></p>
<dd>It contains properties containing information about the selected area. </dd>
<br>
<p>The property is of type <code v-pre>TVertDBGridEh.Selection</code></p>
<p><code v-pre>TDBVertGridSelectionEh</code> and contains the following properties and methods.</p>
<p><code v-pre>property AnchorRowIndex: Integer</code></p>
<dd>Fixed line number in the allocation data of the rectangular area.</dd>
<p><code v-pre>property Rows: TFieldRowSelectionListEh</code></p>
<dd>List of lines in the allocation of full rows records.</dd>
<p><code v-pre>property SelectionType: TDBVertGridSelectionTypeEh</code></p>
<dd>Type selection </dd>
<p><code v-pre>property ShipRowIndex: Integer</code></p>
<dd>Number "floating" line in the allocation of the rectangular area data.</dd>
<p><code v-pre>function IsCellSelected(ACol, ARow: Integer): Boolean;</code></p>
<dd>Returns True if the cell gets in the selected area.</dd>
<p><code v-pre>procedure Clear;</code></p>
<dd>Clear selection. SelectionType = vgstNonEh.</dd>
<p><code v-pre>procedure SelectAll;</code></p>
<dd>Select the entire grid. SelectionType = vgstAllEh.</dd>
<p><code v-pre>procedure SelectAllDataCells;</code></p>
<dd>Select a rectangular area, so that it will get all the data cells.</dd>
<p>Use <code v-pre>TVertDBGridEh.Selection.SelectionType</code> property to determine the current view selection.</p>
<p><code v-pre>Selection.SelectionType</code> has <code v-pre>TDBVertGridSelectionTypeEh</code> type and can contain the following values</p>
<dl><dd>
<p><code v-pre>vgstRowsEh</code>
<dl>
<dd>Allocate a full-line recording. To access the recording, use a dedicated property Selection.Rows.</dd>
</dl></p>
<p><code v-pre>vgstRectangleEh</code></p>
<dl>
    <dd>Select a square region of the data. For access to the borders of the area and use the properties of Selection.AnchorRowIndex Selection.ShipRowIndex.</dd>
</dl>
<p><code v-pre>vgstAllEh</code></p>
  <dl>
      <dd>Select the entire grid.</dd>
  </dl>
<p><code v-pre>vgstNonEh</code></p>
  <dl>
      <dd>Multiple selection is absent.</dd>
  </dl>
</dd>
</dl>
<p>The TVertDBGridEh.Selection.Rows property is of type TFieldRowSelectionListEh and contains the following properties and methods:</p>
<p><code v-pre>property Count: Integer </code></p>
<dd>It contains the number of selected lines.</dd>
<p><code v-pre>property Items[Index: Integer]: TFieldRowEh</code></p>
<dd>Pointers on selected lines</dd>
<p><code v-pre>procedure AddSelectedRow(ARow: TFieldRowEh);</code></p>
<dd>Adds a new line type TFieldRowEh the list of selected lines.</dd>
<p><code v-pre>procedure Clear;</code></p>
<dd>Clears the list of selected lines</dd>
<p><code v-pre>procedure RemoveSelectedRow(ARow: TFieldRowEh);</code></p>
<dd>Deletes the line type from the list TFieldRowEh selected lines.</dd>
<p><code v-pre>procedure SelectAll;</code></p>
<dd>Selects all lines in the TVertDBGridEh.</dd>
<p>When the user selects a rectangular area of data in the data grid on the allocation are stored in the properties and <code v-pre>Selection.AnchorRowIndex</code> <code v-pre>Selection.ShipRowIndex</code>. When a rectangular selection one cell always remains fixed and specifies anchor selection AnchorRowIndex. The second cell specifies <code v-pre>ShipRowIndex</code> second selection border. If the user presses and drags the mouse up or down, the value changes in <code v-pre>ShipRowIndex</code> property.</p>
</div></template>


