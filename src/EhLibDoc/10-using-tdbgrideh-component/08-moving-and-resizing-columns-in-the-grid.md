# Moving and resizing columns in the grid


Use the `TColumnEh.Width` property to set the width of the column. You can use a `TColumnEh.MaxWidth` and `TColumnEh.MinWidth` property to limit the maximum and minimum width of the column. Usually it is necessary when the user is allowed to change the column width with the mouse. To allow the change column widths in Run-Time, set in a property of `dghColumnResize` `TDBGridEh.OptionsEh`. The same value is present in the properties `dgColumnResize` `TDBGridEh.Options`. If `dgColumnResize` value is set, then it is allowed to change as the width of the columns and column moving. This property is deprecated. The `dghColumnResize` value in `TDBGridEh.OptionsEh` property only affects changing the width.

After changing the width of the column After changing the width of the column is called the `DBGridEh`.`OnColWidthsChanged`  event is called.

In the grid it is possible to adjust the width of the columns so that they occupy the entire width of the visible area of the grid, and did not extend beyond the visible area.
Set `TDBGridEh.AutoFitColWidths` to `True` to automatically change the column width so that the width will be equal to the entire grid visible part of the window. Additional property `TDBGridEh`.`MinAutoFitWidth` specifies the minimum width of the grid at which the change in width. Use `TColumnEh`.`AutoFitColWidth` property of the grid columns at to further determine whether the column is used for fitting the width of all columns to the width of the visible area.

To allow the mouse to move the columns in the Run-Time, set in the property `dghColumnMove` `TDBGridEh.OptionsEh`. After the column is moved the `TDBGridEh.OnColumnMoved` event occurs.

Use the following methods to control the width of columns:

```pascal:no-line-numbers
procedure OptimizeColsWidth(
  ColumnsList: TColumnsEhList; 
  const CheckRowCount : Integer = -1; 
  const MaxWaitingTime: Integer = 0);
```
<dd>

Optimizes the column width so that the entire text of the column could be seen inside the cell. `ColumnsList` parameter specifies the list of columns for which it is necessary to perform optimization. `CheckRowCount` parameter specifies the number of records that need to get around to perform optimization. This parameter is set to limit the time of the method. `MaxWaitingTime` parameter specifies the maximum period of the method. Inside a method grid runs through all the records `DataSet`. If the option is `MaxWaitingTime` method adjourned once it reaches the specified value.

</dd>

```pascal:no-line-numbers
procedure OptimizeAllColsWidth(
  const CheckRowCount : Integer = -1; 
  const MaxWaitingTime: Integer = 0);
```
<dd>
The method works similarly to the previous method, but perform optimization for all the columns in the grid.
</dd>
