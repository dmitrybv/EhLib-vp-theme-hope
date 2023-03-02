# Values in table cells (Property Cells)

Use the two-dimensional array property `Sheet.Cells` to set cell values.

The array does not require adding cells to expand the size of the array. The array elements are created automatically when accessed.

The cell values are set by the `Variant` property Value. The property supports numeric, string, boolean data types, and the DateTime type for specifying the date and time.

Below is an example of setting table values

```pascal:no-line-numbers
Sheet.Cells[0, i + 4].Value := DBGridEh1.Columns[0].Field.Value;
Sheet.Cells[1, i + 4].Value := DBGridEh1.Columns[1].Field.Value;
Sheet.Cells[2, i + 4].Value := DBGridEh1.Columns[2].Field.Value;
```

In addition to values, a cell can also contain a formula. Use the `Formula` property to define the formula.
Below is an example of setting a formula for one cell of a table

```pascal:no-line-numbers
Sheet.Cells[1, i+4].Formula := 'SUM(E5:' + 'E' + IntToStr(i+4) + ')';
```

`TXlsMemFileEh` class does not perform formula cell calculations. Setting the `Formula` property does not change the `Value` property. 

However, if you create a file that you plan to open in `MS Excel`, then when you open the file in MS Excel, the user will see the calculated data, because `MS Excel` recalculates the value of formulas when opening a file.
