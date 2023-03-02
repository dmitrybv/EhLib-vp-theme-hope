# The main properties of the TPivotGridEh class 


`property ActualColFlds: TStringList;`
<dd>Returns a list of the actual fields for the columns axis. Data is taken from PivotDataSource.ActualColFlds.</dd>
<br>

`property ActualRowFlds: TStringList;`
<dd>Returns a list of the actual fields for the rows axis. Data is taken from PivotDataSource.ActualRowFlds.</dd>
<br>

`property ActualValueFields: TValueFieldsCollectionEh;`
<dd>Returns a list of the actual value fields. The data is taken from the PivotDataSource. ActualValueFields.</dd>
<br>

`property ColsAxisTree: TPivotAxisGroupingTreeEh;`
<dd>Returns the value tree for the columns axis.</dd>
<br>

`property DataBuildingProgressDelay: Integer default 1000;`
<dd>Sets the length of the delay before displaying the progress bar. The default value is 1 second.</dd>
<br>

`property DefaultColWidth: Integer default 80;`
<dd>Specifies the default column value that is used when generating data.</dd>
<br>

`property DefaultDateTimeSliceLevels: TDateTimeSliceLevelsEh read default [dtslYearEh, dtslMonthEh, dtslDayEh];`
<dd>Specifies the level of "splitting" of fields of type Date / Time when the fields are formed using the PivotFields.RebuildPivotFields method.</dd>
<br>

`property GridCellParams: TPivotGridCellParamsEh;`
<dd>Sets the color and font for the data cells in the summary analysis grid.</dd>
<br>

`property GridLineParams: TPivotGridLineParamsEh;`
<dd>Sets the color and visibility of separating lines in the summary analysis grid.</dd>
<br>

`property Options: TPivotGridOptionsEh default [pgoColSizingEh, pgoEditingEh, 
pgoWantTabEh, pgoFieldDraggingEh, pgoGrandTotalColumnEh, pgoGrandTotalRowEh, 
pgoDataSortingEh, pgoDataFiltersEh];`

Sets the values that affect various aspects of grid behavior.

<dl><dd>

`pgoRowSizingEh`
Allow the user to change the height of the rows with the mouse.

`pgoColSizingEh`
Allow the user the width of the columns with the mouse.

`pgoEditingEh`
Allow the user to edit the data in the grid. For details on editing data, see "Editing cells in TPivotGridEh".

`pgoWantTabEh`
The Tab key is processed inside the grid to go to the next cell.

`pgoFieldDraggingEh, `
Allow the user to drag the fields in the Grid with the mouse....

`pgoGrandTotalColumnEh`
Display the column of total amounts.

`pgoGrandTotalRowEh`
Display the row for total amounts.

`pgoDataSortingEh`
Allow the user to sort the data by clicking on the field headers.

`pgoDataFiltersEh`
Allow the user to filter the data by clicking on the opening section of the drop-down form to filter the data in the field headers.

</dd></dl>


`property PivotDataSource: TPivotDataSourceEh;`
<dd>Specifies a component of type TPivotDataSourceEh whose values are used to generate summary data.</dd>
<br>

`property PivotFields: TPivotFieldsEh;`
<dd>Returns a list of available fields for generating summary data. Data is taken from PivotDataSource.PivotFields.</dd>
<br>

`property RowAggrBeforeData: Boolean;`
<dd>Specifies that the summary lines are displayed before the data lines.</dd>
<br>

`property RowHeight: Integer;`
<dd>The default height of the rows is in pixels.</dd>
<br>

`property RowLines: Integer;`
<dd>The height of the lines by default in the lines of text.</dd>
<br>

`property RowsAxisTree: TPivotAxisGroupingTreeEh;`
<dd>Returns the value tree on the row axis.</dd>
<br>

`property ShowDataBuildingProgress: Boolean default True;`
<dd>Defines the need to display the progress bar during data generation.</dd>
<br>

`property ShowHint: Boolean stored IsShowHintStored;`
<dd>Specifies whether to display the prompt from the Hint property.</dd>
<br>

`property ShowToolTips: Boolean;`
<dd>Specifies the need to display the text in the specialty hint box if the text does not fit in the cell.</dd>
<br>

`property VisPivotGridArray[ACol, ARow: Integer]: TPivotCellEh;`
<dd>Access to an array of pivot table values.</dd>
<br>

`property PrintService: TCustomPivotGridPrintServiceEh;`
<dd>Returns the TCustomPivotGridPrintServiceEh object used for printing and previewing.</dd>
<br>

