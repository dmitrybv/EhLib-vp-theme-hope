# Visibility of columns in the grid


Use the `TColumnEh.Visible` property of the column to hide or show a column. To access the array of all columns, including hidden, use `TDBGridEh.Columns` property 

```pascal:no-line-numbers
TDBGridEh.Columns[i].Visible := …
```

To get a list of all visible columns, use TDBGridEh.VisibleColumns List.

```pascal:no-line-numbers
var
  i: Integer;
  w: Integer;
begin
  for i := 0 to DBGridEh1.VisibleColumns.Count-1 do
    w := DBGridEh1.VisibleColumns[i].Width;
end; 
```
