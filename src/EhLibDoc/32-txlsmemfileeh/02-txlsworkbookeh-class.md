# TXlsWorkbookEh class


Workbook. `TXlsMemFileEh` contains one copy of a workbook of type `TXlsWorkbookEh`. The workbook contains a set of tables (`TXlsWorksheetEh`) and `TXlsFileStylesEh` styles.
Styles describe the format of the data cells in the `Worksheet`. Each cell must reference one of the styles from the `Styles` list. When filling in data in the program code, you do not need to use the `TXlsWorkbookEh.Styles` property. The inner code of the `TXlsMemFileEh` class automatically creates styles and style references when the format changes in table cells.
You can use `TXlsMemFileEh.Workbook` property to access `TXlsWorkbookEh` properties and methods.

The following `TXlsWorkbookEh` properties and methods are used to work with work pages (`Worksheet`):

`function AddWorksheet(WorksheetName: string): TXlsWorksheetEh;`
<dd>Add a new table (Worksheet) with the specified name.</dd>
<br>

`function FindWorksheet(WorksheetName: string): TXlsWorksheetEh;`
<dd>Find a table (Worksheet) by name.</dd>
<br>

`procedure MoveWorksheet(FromIndex, ToIndex: Integer);`
<dd>Move the Worksheet from the FromIndex position to the ToIndex position.</dd>
<br>

`procedure RemoveWorksheet(WorksheetEh: TXlsWorksheetEh);`
<dd>Delete Worksheet.</dd>
<br>

`property Worksheets[WorksheetId: Variant]: TXlsWorksheetEh;`
<dd>Get a ref to a table by name or by index. To get a value by name, pass the table name as a string to the WorksheetId parameter.</dd>
<br>

`property WorksheetCount: Integer;`
<dd>Get the number of tables in the Worksheets collection.</dd>
<br>

Here is an example of using the Workbook property.

```pascal:no-line-numbers
xlsFile := TXlsMemFileEh.Create;
xlsFile.Workbook.Worksheets[0].Name := 'DBGrid';
xlsFile.Workbook.AddWorksheet('VertGrid');
``` 
