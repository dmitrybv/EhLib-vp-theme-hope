# Checkboxes for Boolean and non Boolean fields

Grid automatically shows checkboxes for `Boolean` fields. 

To show checkboxes for no `Boolean` fields, fill first line of `Column.KeyList` property by value (or values) that corresponds to the checked state of the checkbox. Fill second line for non-checked state, and set `Column.Checkboxes` property to `True`. 

One line of `KeyList` can contain more than one value. In that case every value must be separated by semicolon.