# TXlsWorksheetEh Class


`TXlsWorksheetEh` class contains tabular data for one table.

Tabular data includes:

<dd>

  - Column definition (Properties Columns, DefaultColWidth)
  
  - Defining strings (Properties Rows, DefaultRowHeight)
  
  - Values in Table Cells (Cells Property)
  
  - Format for each cell (Color, Font, Line thickness, etc.) (Via IXlsFileCellsRangeEh interface)
  
  - Define row grouping (Set via the properties Rows, OutlineRowsSummaryBelow)
  
  - Column grouping definition (Set via properties Columns, OutlineColsSummaryRight)
  
  - Print settings (Subproperties properties PrintParams)
  
  -  Setting non-scrollable areas (Properties FrozenColCount, FrozenRowCount)
</dd>
<br>

You can get access tp Worksheet from the collection of Worksheets in the Workbook.
Like this:
`TXlsMemFileEh.Workbook.Worksheets[Index]`

`TXlsWorksheetEh` class has the following properties:

`property Name: String;`
<dd>Worksheet title. In Excel, the title appears at the bottom of the bookmark list.</dd>
<br>

`property TabColor: TColor;`
<dd>Table bookmark color.</dd>
<br>

`property AutoFilterRange: TXlsFileWorksheetCellsRectEh;`
<dd>Auto filter area</dd>
<br>

`property CellDataExists[Col, Row: Integer]: Boolean;`
<dd>Determine if the TXlsFileCellEh object was created at the specified coordinates.</dd>
<br>

`property Cells[Col, Row: Integer]: TXlsFileCellEh;`
<dd>Access to table cells with coordinates Col, Row. Coordinates start at zero.</dd>
<br>

`property Columns: TXlsFileColumnsEh;`
<dd>Page column options.</dd>
<br>

`property DefaultColWidth: Double;`
<dd>The default column width.</dd>
<br>

`property DefaultRowHeight: Double;`
<dd>Default line height.</dd>
<br>

`property DefaultRowHeight: Double;`
<dd>The size of the area that contains nonblank cells</dd>
<br>

`property FrozenColCount: Integer;`
<dd>The number of columns frozen.</dd>
<br>

`property FrozenRowCount: Integer;`
<dd>The number of frozen lines.</dd>
<br>

`property OutlineRowsSummaryBelow: Boolean;`
<dd>The group headers for the columns are below the group. The property is used when grouping strings.</dd>
<br>

`property OutlineColsSummaryRight: Boolean`
<dd>The row group headers are located to the right of the group. The property is used when grouping columns.</dd>
<br>

`property PrintParams: TXlsFileWorksheetPrintParamsEh;`
<dd>Print Options: Page Orientation, Header, etc.</dd>
<br>

`property Rows: TXlsFileRowsEh;`
<dd>Page line options.</dd>
<br>

`property ZoomScale: Integer;`
<dd>Scaling. Set as a percentage. The default is 100.</dd>
<br>

