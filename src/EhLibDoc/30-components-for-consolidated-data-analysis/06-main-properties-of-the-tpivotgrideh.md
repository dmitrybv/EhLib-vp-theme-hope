# The main properties of the TPivotGridEh class 


`property ActualColFlds: TStringList;`
<sh>Returns a list of the actual fields for the columns axis. Data is taken from PivotDataSource.ActualColFlds.</sh>
<br>

`property ActualRowFlds: TStringList;`
<sh>Returns a list of the actual fields for the rows axis. Data is taken from PivotDataSource.ActualRowFlds.</sh>
<br>

`property ActualValueFields: TValueFieldsCollectionEh;`
<sh>Returns a list of the actual value fields. The data is taken from the PivotDataSource. ActualValueFields.</sh>
<br>

`property ColsAxisTree: TPivotAxisGroupingTreeEh;`
<sh>Returns the value tree for the columns axis.</sh>
<br>

`property DataBuildingProgressDelay: Integer default 1000;`
<sh>Sets the length of the delay before displaying the progress bar. The default value is 1 second.</sh>
<br>

`property DefaultColWidth: Integer default 80;`
<sh>Specifies the default column value that is used when generating data.</sh>
<br>

`property DefaultDateTimeSliceLevels: TDateTimeSliceLevelsEh read default [dtslYearEh, dtslMonthEh, dtslDayEh];`
<sh>Specifies the level of "splitting" of fields of type Date / Time when the fields are formed using the PivotFields.RebuildPivotFields method.</sh>
<br>

`property GridCellParams: TPivotGridCellParamsEh;`
<sh>Sets the color and font for the data cells in the summary analysis grid.</sh>
<br>

`property GridLineParams: TPivotGridLineParamsEh;`
<sh>Sets the color and visibility of separating lines in the summary analysis grid.</sh>
<br>

`property Options: TPivotGridOptionsEh default [pgoColSizingEh, pgoEditingEh, 
pgoWantTabEh, pgoFieldDraggingEh, pgoGrandTotalColumnEh, pgoGrandTotalRowEh, 
pgoDataSortingEh, pgoDataFiltersEh];`

Sets the values that affect various aspects of grid behavior.

<dl><sh>

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

</sh></dl>


`property PivotDataSource: TPivotDataSourceEh;`
<sh>Specifies a component of type TPivotDataSourceEh whose values are used to generate summary data.</sh>
<br>

`property PivotFields: TPivotFieldsEh;`
<sh>Returns a list of available fields for generating summary data. Data is taken from PivotDataSource.PivotFields.</sh>
<br>

`property RowAggrBeforeData: Boolean;`
<sh>Specifies that the summary lines are displayed before the data lines.</sh>
<br>

`property RowHeight: Integer;`
<sh>The default height of the rows is in pixels.</sh>
<br>

`property RowLines: Integer;`
<sh>The height of the lines by default in the lines of text.</sh>
<br>

`property RowsAxisTree: TPivotAxisGroupingTreeEh;`
<sh>Returns the value tree on the row axis.</sh>
<br>

`property ShowDataBuildingProgress: Boolean default True;`
<sh>Defines the need to display the progress bar during data generation.</sh>
<br>

`property ShowHint: Boolean stored IsShowHintStored;`
<sh>Specifies whether to display the prompt from the Hint property.</sh>
<br>

`property ShowToolTips: Boolean;`
<sh>Specifies the need to display the text in the specialty hint box if the text does not fit in the cell.</sh>
<br>

`property VisPivotGridArray[ACol, ARow: Integer]: TPivotCellEh;`
<sh>Access to an array of pivot table values.</sh>
<br>

`property PrintService: TCustomPivotGridPrintServiceEh;`
<sh>Returns the TCustomPivotGridPrintServiceEh object used for printing and previewing.</sh>
<br>

