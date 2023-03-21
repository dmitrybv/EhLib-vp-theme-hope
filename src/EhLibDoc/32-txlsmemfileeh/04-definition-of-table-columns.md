# Definition of table columns


Use the `Columns` collection to define properties for table columns.

The collection does not require adding columns to define the list of columns. `Columns` in a collection are created automatically when accessing collection items.

For example the code:
```pascal:no-line-numbers
Sheet.Columns[5].Width := 20;
```

Creates a list of five columns in the collection (if they are not already in the collection) and assigns the heel of the column a width of 20 Width Units. Column numbering in the collection starts from zero.

The size of the unit column width in Excel is set according to the following rule:

Column width measured as the number of characters of the maximum digit width of the numbers 0, 1, 2, …, 9 as rendered in the normal style's font. There are 4 pixels of margin padding (two on each side), plus 1 pixel padding for the gridlines.

Use `TXlsFileColumnsEh.ScreenToXlsWidth` function to convert screen column width to width in `Excel` units.

```pascal:no-line-numbers
Sheet.Columns[1].Width := Sheet.Columns.ScreenToXlsWidth(DBGridEh1.Columns[1].Width);
```

The `Sheet.Columns` collection contains objects of type `TXlsFileColumnEh`.

`TXlsFileColumnEh` class contains the following properties:

`property OutlineLevel: Integer;`
<sh>Grouping level. The property is used when grouping columns in a table. If column does not participate in the grouping, then the value contains 0.</sh>
<br>

`property OutlineNodeCollapsed;`
<sh>The group header is collapsed. The property is used when grouping columns in a table. If the column is a group header and the group is collapsed, then the property contains True. Columns that are in a collapsed group also need to set the Visible property to False.</sh>
<br>

`property Width: Double;`
<sh>Column width in Excel units of width.</sh>
<br>

`property Visible: Boolean;`
<sh>The column is visible.</sh>
<br>
