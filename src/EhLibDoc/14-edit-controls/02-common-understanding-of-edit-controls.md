# Common understanding of edit controls

EhLib has a set of data-aware edit controls to edit data:
### `TDBEditEh`
Editing text data and other data types that can be predtavlyat to see the text.

### `TDBDateTimeEditEh`
Editing data of date or time type.

### `TDBComboBoxEh`
Editing text data with an additional drop-down list to select the values.

### `TDBNumberEditEh`
Editing the data of number type.

### `TDBLookupComboboxEh`
Editing based on drop-down list with the record key values instead of the displayed value.

### `TDBMemoEh`
Editing multiline text data.

### `TDBImageEh`
Editing graphic data.

### `TDBRadioGroupEh`
Editing data mapping in a set of flags.

### `TDBRichEditEh`
Editing text data with RichText format.

EhLib doesn’t have not data-aware version of these controls because every control can work as in data-aware mode and not in data-aware mode. 

The base class for every edit control is `TCustomDBEditEh`. `TCustomDBEditEh` encapsulates the behavior that is common for all edit controls for editing text and if it is required for editing a DataSet’s field by introducing methods and properties that provide:

-	Basic text editing functions such as selecting text, modifying selected text, and case conversions.

-	Properties for making it read-only or introducing a password character to hide the actual value.

-	Validity checking using an edit mask.

-	Writing edited text to database field.

-	Showing one or several edit buttons (with variable glyphs: dropdown arrow, Ellipsis arrow, up-down arrows, plus sign, minus sign or custom 
bitmap) at right part of edit box,

-	Showing image from image list at the left part of the edit box.


`Application` can use `Text` (String type) and `Value` (Variant type) properties to get and set string or variant values to controls. `Text` property is a text that you can see in control. `Value` property hold value of variant type and can hold values of types depending of control type. It can hold Null value or:
- String type value for TDBEditEh and TDBComboBoxEh,
- TDateTime, TDate, TTime, Double type value for TDBDateTimeEditEh,
- All numeric types value for TDBNumberEditEh,
- TDBLookupComboboxEh control hold value that depends on type of the field.

If control is connected to the field then the assignment data to the `Text` or `Value` properties automatically write data to the field.

Every control has `Flat` and `AlwaysShowBorder` properties to control the border appearance.

All controls have `EmptyDataInfo` property that allows customize edit control to draw special text and font when control have no data (Edit1.Text = ‘’).
