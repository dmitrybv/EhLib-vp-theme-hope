# Data row height


Use `RowHeight` and `RowLines` properties to specify the height of data row. Full height of data row is calculated as height in text lines of `RowLines` plus `RowHeight`. Set `RowSizingAllowed` to `True` value so that user can change height of row using mouse at run time.

Set `Column.WordWrap` to `True` value to break a long text in data row to a multiline. In reality, text will be wrapped only when height of row is bigger than height of one text line.

### Individual height of each data row. 
`TDBGridEh` can work in mode when the height of every row is calculated dynamically depending on the text in the grid cells or size of image in the cell (When DrawGraphicData value is True). Include `dghAutoFitRowHeight` in `OptionsEh` property to force grid to calculate height for every row. This mode works only when the grid is connected to the `DataSet` of `TMemTableEh` type. When `dghAutoFitRowHeight` is included, grid calculates the height of the row dynamically using cell text (`TColumnEh.WordWrap` property also influence it) and for column the fields of which have `ftGraphic` type. To avoid surplus recalculation, grid recalculates heights, but not  for after every change of properties. For instance, grid does not update heights if the `Font` property was changed. In such cases it is necessary to call `UpdateAllDataRowHeights` method. For more flexible calculation of the heights the grid has an `OnGetRowHeight` event, in which you can specify the height of row. During the event calling, the `MemTableEh` positions on record and we can calculate the height of this record, so you can use `MemTableEh` properties to access fields values.
