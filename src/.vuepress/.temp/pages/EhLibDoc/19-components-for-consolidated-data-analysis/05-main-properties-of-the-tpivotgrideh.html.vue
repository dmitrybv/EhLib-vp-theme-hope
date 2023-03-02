<template><div><h1 id="the-main-properties-of-the-class-tpivotgrideh" tabindex="-1"><a class="header-anchor" href="#the-main-properties-of-the-class-tpivotgrideh" aria-hidden="true">#</a> The main properties of the class TPivotGridEh</h1>
<p><code v-pre>property ActualColFlds: TStringList;</code></p>
<dd>Returns a list of the actual fields for the columns axis. Data is taken from PivotDataSource.ActualColFlds.</dd>
<p><code v-pre>property ActualRowFlds: TStringList;</code></p>
<dd>Returns a list of the actual fields for the rows axis. Data is taken from PivotDataSource.ActualRowFlds.</dd>
<p><code v-pre>property ActualValueFields: TValueFieldsCollectionEh;</code></p>
<dd>Returns a list of the actual value fields. The data is taken from the PivotDataSource. ActualValueFields.</dd>
<p><code v-pre>property ColsAxisTree: TPivotAxisGroupingTreeEh;</code></p>
<dd>Returns the value tree for the columns axis.</dd>
<p><code v-pre>property DataBuildingProgressDelay: Integer default 1000;</code></p>
<dd>Sets the length of the delay before displaying the progress bar. The default value is 1 second.</dd>
<p><code v-pre>property DefaultColWidth: Integer default 80;</code></p>
<dd>Specifies the default column value that is used when generating data.</dd>
<p><code v-pre>property DefaultDateTimeSliceLevels: TDateTimeSliceLevelsEh read default [dtslYearEh, dtslMonthEh, dtslDayEh];</code></p>
<dd>Specifies the level of "splitting" of fields of type Date / Time when the fields are formed using the PivotFields.RebuildPivotFields method.</dd>
<p><code v-pre>property GridCellParams: TPivotGridCellParamsEh;</code></p>
<dd>Sets the color and font for the data cells in the summary analysis grid.</dd>
<p><code v-pre>property GridLineParams: TPivotGridLineParamsEh;</code></p>
<dd>Sets the color and visibility of separating lines in the summary analysis grid.</dd>
<p><code v-pre>property Options: TPivotGridOptionsEh default [pgoColSizingEh, pgoEditingEh,  pgoWantTabEh, pgoFieldDraggingEh, pgoGrandTotalColumnEh, pgoGrandTotalRowEh,  pgoDataSortingEh, pgoDataFiltersEh];</code></p>
<p>Sets the values that affect various aspects of grid behavior.</p>
<dl><dd>
<p><code v-pre>pgoRowSizingEh</code>
Allow the user to change the height of the rows with the mouse.</p>
<p><code v-pre>pgoColSizingEh</code>
Allow the user the width of the columns with the mouse.</p>
<p><code v-pre>pgoEditingEh</code>
Allow the user to edit the data in the grid. For details on editing data, see &quot;Editing cells in TPivotGridEh&quot;.</p>
<p><code v-pre>pgoWantTabEh</code>
The Tab key is processed inside the grid to go to the next cell.</p>
<p><code v-pre>pgoFieldDraggingEh, </code>
Allow the user to drag the fields in the Grid with the mouse....</p>
<p><code v-pre>pgoGrandTotalColumnEh</code>
Display the column of total amounts.</p>
<p><code v-pre>pgoGrandTotalRowEh</code>
Display the row for total amounts.</p>
<p><code v-pre>pgoDataSortingEh</code>
Allow the user to sort the data by clicking on the field headers.</p>
<p><code v-pre>pgoDataFiltersEh</code>
Allow the user to filter the data by clicking on the opening section of the drop-down form to filter the data in the field headers.</p>
</dd></dl>
<p><code v-pre>property PivotDataSource: TPivotDataSourceEh;</code></p>
<dd>Specifies a component of type TPivotDataSourceEh whose values are used to generate summary data.</dd>
<p><code v-pre>property PivotFields: TPivotFieldsEh;</code></p>
<dd>Returns a list of available fields for generating summary data. Data is taken from PivotDataSource.PivotFields.</dd>
<p><code v-pre>property RowAggrBeforeData: Boolean;</code></p>
<dd>Specifies that the summary lines are displayed before the data lines.</dd>
<p><code v-pre>property RowHeight: Integer;</code></p>
<dd>The default height of the rows is in pixels.</dd>
<p><code v-pre>property RowLines: Integer;</code></p>
<dd>The height of the lines by default in the lines of text.</dd>
<p><code v-pre>property RowsAxisTree: TPivotAxisGroupingTreeEh;</code></p>
<dd>Returns the value tree on the row axis.</dd>
<p><code v-pre>property ShowDataBuildingProgress: Boolean default True;</code></p>
<dd>Defines the need to display the progress bar during data generation.</dd>
<p><code v-pre>property ShowHint: Boolean stored IsShowHintStored;</code></p>
<dd>Specifies whether to display the prompt from the Hint property.</dd>
<p><code v-pre>property ShowToolTips: Boolean;</code></p>
<dd>Specifies the need to display the text in the specialty hint box if the text does not fit in the cell.</dd>
<p><code v-pre>property VisPivotGridArray[ACol, ARow: Integer]: TPivotCellEh;</code></p>
<dd>Access to an array of pivot table values.</dd>
<p><code v-pre>property PrintService: TCustomPivotGridPrintServiceEh;</code></p>
<dd>Returns the TCustomPivotGridPrintServiceEh object used for printing and previewing.</dd>
</div></template>


