# Type of rows and type of data in rows of TDBVertGirdEh


Collection `DBVertGridEh.Rows` consists of elements of the collection `TFieldRowEh`. All lines have the same type - `TFieldRowEh`, but the kind of data displayed in each column is different, and depending on the type of field assignments through property `TFieldRowEh.FieldName`, as well as the combination of the properties assigned `Row`. For example, if the `DataSet` field is of `TBooleanField` type, in line instead of the text will display `Checkbox`. You can customize the properties of `Row` to display checkboxes for any other type of field, if you set the property to `True` `TFieldRowEh.Checkboxes` and fill in additional properties. The following instructions describe how to configure the properties of the string to achieve the desired display, behavior and form cell editor.

Access to the grid rows:

You can use these methods to a property of, and access to the columns of the grid:
`property DBGridEh.Rows: TDBVertGridRowsEh` – 

This is the main collection lines  

`property DBGridEh.FieldRows[const FieldName: String]: TFieldRowEh`
Search row by a field name. If the string, which TFieldRowEh.FieldName = FieldName not found, an exception is thrown.

`function FindFieldRow(const FieldName: String): TFieldRowEh;`
Search row by a field name. If the row, which TFieldRowEh.FieldName = FieldName not found it returns Nil.

`Columns` of data type `Combobox` editors and other features rows.

Other features of grid lines operate similar to how the columns operates in `DBGridEh`. They are described in detail in the section "Types of columns and data types in DBGridEh».

