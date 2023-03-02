# Combining (Merging) cells


Use the `TXlsWorksheetEh.MergeCell` and `TXlsWorksheetEh.UnmergerCell` methods to merge cells and remove the merge.

The `MergeCell` procedure has the following calling interface:

```pascal:no-line-numbers
procedure MergeCell(Col, Row, ColCount, RowCount: Integer);
``` 

The `Col` and `Row` parameters point to the underlying column and row. Values start at 0.

The `ColCount` and `RowCount` parameters must contain the number of columns and rows to combine based on the underlying column.

Those. to merge two cells horizontally, call a method with parameters:

```pascal:no-line-numbers
Sheet.MergeCell(Col, Row, 2, 1);
```

The `UnmergerCell` procedure has the following call parameters:

```pascal:no-line-numbers
procedure UnmergerCell(Col, Row: Integer);
```
