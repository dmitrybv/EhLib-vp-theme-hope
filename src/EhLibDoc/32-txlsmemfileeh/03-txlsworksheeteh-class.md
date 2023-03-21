# TXlsWorksheetEh Class


`TXlsWorksheetEh` class contains tabular data for one table.

Tabular data includes:

<sh>

  - Column definition (Properties Columns, DefaultColWidth)
  
  - Defining strings (Properties Rows, DefaultRowHeight)
  
  - Values in Table Cells (Cells Property)
  
  - Format for each cell (Color, Font, Line thickness, etc.) (Via IXlsFileCellsRangeEh interface)
  
  - Define row grouping (Set via the properties Rows, OutlineRowsSummaryBelow)
  
  - Column grouping definition (Set via properties Columns, OutlineColsSummaryRight)
  
  - Print settings (Subproperties properties PrintParams)
  
  -  Setting non-scrollable areas (Properties FrozenColCount, FrozenRowCount)
</sh>
<br>

You can get access tp Worksheet from the collection of Worksheets in the Workbook.
Like this:
`TXlsMemFileEh.Workbook.Worksheets[Index]`

`TXlsWorksheetEh` class has the following properties:

`property Name: String;`
<sh>Worksheet title. In Excel, the title appears at the bottom of the bookmark list.</sh>
<br>

`property TabColor: TColor;`
<sh>Table bookmark color.</sh>
<br>

`property AutoFilterRange: TXlsFileWorksheetCellsRectEh;`
<sh>Auto filter area</sh>
<br>

`property CellDataExists[Col, Row: Integer]: Boolean;`
<sh>Determine if the TXlsFileCellEh object was created at the specified coordinates.</sh>
<br>

`property Cells[Col, Row: Integer]: TXlsFileCellEh;`
<sh>Access to table cells with coordinates Col, Row. Coordinates start at zero.</sh>
<br>

`property Columns: TXlsFileColumnsEh;`
<sh>Page column options.</sh>
<br>

`property DefaultColWidth: Double;`
<sh>The default column width.</sh>
<br>

`property DefaultRowHeight: Double;`
<sh>Default line height.</sh>
<br>

`property DefaultRowHeight: Double;`
<sh>The size of the area that contains nonblank cells</sh>
<br>

`property FrozenColCount: Integer;`
<sh>The number of columns frozen.</sh>
<br>

`property FrozenRowCount: Integer;`
<sh>The number of frozen lines.</sh>
<br>

`property OutlineRowsSummaryBelow: Boolean;`
<sh>The group headers for the columns are below the group. The property is used when grouping strings.</sh>
<br>

`property OutlineColsSummaryRight: Boolean`
<sh>The row group headers are located to the right of the group. The property is used when grouping columns.</sh>
<br>

`property PrintParams: TXlsFileWorksheetPrintParamsEh;`
<sh>Print Options: Page Orientation, Header, etc.</sh>
<br>

`property Rows: TXlsFileRowsEh;`
<sh>Page line options.</sh>
<br>

`property ZoomScale: Integer;`
<sh>Scaling. Set as a percentage. The default is 100.</sh>
<br>

