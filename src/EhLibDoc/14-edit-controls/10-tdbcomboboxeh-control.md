# TDBComboBoxEh control


`TDBComboBoxEh` component is an edit box with a scrollable drop-down list attached to it. User can select an item from the list or type it directly into the edit box.

`TDBComboBoxEh` permits a single line and multiple line of text. 

Use `WordWrap` property to set `TDBComboBoxEh` as multiple line editor.

Use `Items` property to access to the list of items (strings) in the list portion of the combo box.

Use `KeyItems` property to access to the list of items (strings) which will be stored in field when Items property is also assigned. When `Items` and `KeyItems` properties are filled, then `KeyList` property have to contain values which will be written in the field, but Items property, in corresponding indexes, has to contain values to display.

Use `Images` property to specify images that will be drawn in the drop-down list and image that will be drawn on the left side of `ComboBox`. Index of drawing image is taken from `ItemIndex` property.

