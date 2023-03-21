# Using SpecRow in columns of DBGridEh component and in DBLookupComboBoxEh component.


The `SpecRow` property of `TDropDownBoxEh` or `DropDownSpecRow` property of `TColumnEh` holds a `TDropDownBoxEh` object. `TDropDownBoxEh` defines attributes of the special row in the dropped down box. 
`TSpecRowEh` represents a special row in the top part of dropdown box for lookup fields in column of `DBGridEh` and in `TDropDownBoxEh` class of `TDBLookupComboboxEh` component. 
This row will be active when lookup field or `LookupComboBox` has value that is equal to `SpecRow.Value` property.

`TSpecRowEh` contains next properties:

`CellsText: String`
<sh>Specifies the text(s) that will be shown in the drop-down window for SpecRow. When dropdown box have more than one columns, use semicolon to separate text for each column.</sh>

`Color: TColor`
<sh>Background color of special row in dropdown box.</sh>

`Font: TFont`
<sh>Font of special row text.</sh>

`Value: Variant`
<sh>Value. Special row is shown as selected (highlighted) when this Value is equal to value of control to which this special row belong to.</sh>

`Visible: Boolean`
<sh>Specify, whether the spec row is active and visible in the DropDown box.</sh>

`ShortCut: TShortCut`
<sh>Specify the shortcut for assigning value of SpecRow.Value property to Control value.</sh>

`ShowIfNotInKeyList: Boolean`
<sh>Specify, whether the SpecRow text will be shown in Control if the value of the control is not in list of key values.</sh>
 
