# TXlsMemFileEh - class for creating Xlsx files without the participation of installed MSOffice modules


There is a class in the library - `TXlsMemFileEh`, which allows you to create `Xlsx` files without the participation of installed `MSOffice` modules.

`TXlsMemFileEh` is not a visual component. It is not listed in the IDE component palette. The class must be used directly in the program code. The class is implemented in the `XlsMemFilesEh` module.

Using this class, you can quickly load and change or generate files in `MSExcel` format. Created files can also be opened using the `OpenOffice Calc` application.

In the current version of the library, the `LoadFromFile` and `XlsMemFile` functions support the following `Xlsx` file elements.
-	`WorkSheet` - worksheets. Worksheet names and colors.

-	`Worksheet Rows` and `Columns`. Width\Height, visibility of rows and columns.

-	The contents of the cells in the worksheet. Text, numbers, dates.

-	Cell fill color and pattern.

-	Color, title, size and style of the font.

-	Alignment, text wrapping, merging of cells.

-	Vertical, horizontal, oblique dividing lines.

-	Print properties: Scale, sheet titles.

-	Autofilter.

-	Fixed-non-scrollable areas of the sheet.

-	Formulas (only as text, no calculation).

-	Grouping Rows, Grouping Columns.

<br>
Working with a class involves the following use case:

- Creating an instance of the TXlsMemFileEh class	

```pascal:no-line-numbers
var
  xlsFile: TXlsMemFileEh;
begin
  xlsFile := TXlsMemFileEh.Create;
``` 
<br>

- When you create an instance, a single Worksheet object is created. You can customize the properties of an existing sheet and / or add new ones.

```pascal:no-line-numbers
xlsFile.Workbook.Worksheets[0].Name := 'DBGrid';
xlsFile.Workbook.AddWorksheet('VertGrid');
``` 
<br>

- Specify the width of the columns in the worksheet.
```pascal:no-line-numbers
  Sheet.Columns[0].Width := Sheet.Columns.ScreenToXlsWidth(DBGridEh1.Columns[0].Width);
  Sheet.Columns[1].Width := Sheet.Columns.ScreenToXlsWidth(DBGridEh1.Columns[1].Width);
``` 
<br>

- Fill in the contents of the worksheets.
```pascal:no-line-numbers
    Sheet.Cells[0, 3].Value := DBGridEh1.Columns[0].Title.Caption;
    Sheet.Cells[1, 3].Value := DBGridEh1.Columns[1].Title.Caption;
    Sheet.Cells[2, 3].Value := DBGridEh1.Columns[2].Title.Caption;
…
    Sheet.Cells[0, i + 4].Value := DBGridEh1.Columns[0].Field.Value;
    Sheet.Cells[1, i + 4].Value := DBGridEh1.Columns[1].Field.Value;
    Sheet.Cells[2, i + 4].Value := DBGridEh1.Columns[2].Field.Value;

  Sheet.Cells[1, i+4].Formula := 'SUM(E5:' + 'E' + IntToStr(i+4) + ')';
```
<br>

Cell Fill Supported Cells[ColIndex, RowIndex].Value and Formulas Cells[ColIndex, RowIndex].Formula.

- Set the format of cells and cell borders on a sheet.
```pascal:no-line-numbers
  cr := Sheet.GetCellsRange(0,i+4,6,i+4);
  cr.Border.Top.Style := clsMediumEh;
  cr.Border.Bottom.Style := clsMediumEh;
  cr.Border.Left.Style := clsMediumEh;
  cr.Border.Right.Style := clsMediumEh;
  cr.Font.IsBold := True;
  cr.ApplyChages;
```  

To change the format of a cell or group of cells, you must first obtain a group of cells using the `GetCellsRange` method. Then, in the resulting class, change the properties to set the format. The `GetCellsRange` method returns an interface type. After use, the `CellsRange` instance does not need to be deleted, it will be deleted automatically when the last pointer to it leaves the scope.

The `IXlsFileCellsRangeEh` interface has the following properties for setting the format of a range of cells:
<dl>
<sh>

  -	Font
  
  -	Background Shading (Fill)
  
  -	Setting the external borders of the selected range (Border.Left, Border.Right, Border.Top, Border.Bottom).
  
  -	Setting internal dividing lines in a selected range (InsideBorder)
  
  -	Horizontal and vertical text alignment (HorzAlign and VertAlign)
  
  -	Wrap text according to WrapText
  
  -	Rotate Text Rotation
  
  -	NumberFormat number format (Described in MSExcel format).
</sh>
</dl>
<br>

- Save the created file to disk.
```pascal:no-line-numbers
  xlsFile.SaveToFile(Path);
```  
<br>

- Delete item TXlsMemFileEh.
```pascal:no-line-numbers
  xlsFile.Free;
```  
<br>

You can also use additional properties and methods to implement the following features when creating Xlsx files:
- Defining frozen columns and rows:
```pascal:no-line-numbers
  Sheet.FrozenRowCount := 4;
  Sheet.FrozenColCount := 3;
```  
<br>

- Setting the auto filter area:
```pascal:no-line-numbers
  Sheet.AutoFilterRange.FromCol := 0;
  Sheet.AutoFilterRange.FromRow := 3;
  Sheet.AutoFilterRange.ToCol := 6;
  Sheet.AutoFilterRange.ToRow := i+4-1;
```  
<br>


::: normal-demo Full Demo code
```pascal:no-line-numbers
unit UnitSimpleExport;

interface

uses
  Windows, Messages, SysUtils, Variants, Graphics,
  Forms,
  ShellAPI, XlsMemFilesEh, DBGridEh;

procedure DBGridEhToXlsxSimpleExport(DBGridEh1: TDBGridEh);

implementation

procedure DBGridEhToXlsxSimpleExport(DBGridEh1: TDBGridEh);
var
  XlsxPath: String;
  xlsFile: TXlsMemFileEh;
  Sheet: TXlsWorksheetEh;
  ci, ri: Integer;
  cr: IXlsFileCellsRangeEh;
begin
  XlsxPath := ExtractFileDir(Application.ExeName) + '\TestXlsFile.xlsx';

  xlsFile := TXlsMemFileEh.Create;
  Sheet := xlsFile.Workbook.Worksheets[0];
  Sheet.Name := 'DBGrid';

  //Columns widths
  for ci := 0 to DBGridEh1.VisibleColumns.Count - 1 do
  begin
    Sheet.Columns[ci].Width := Sheet.Columns.ScreenToXlsWidth(DBGridEh1.Columns[ci].Width);
  end;

  //Captions
  for ci := 0 to DBGridEh1.VisibleColumns.Count - 1 do
  begin
    Sheet.Cells[ci, 0].Value := DBGridEh1.Columns[ci].Title.Caption;
  end;

  //Records Data
  ri := 1;
  DBGridEh1.DataSource.DataSet.DisableControls;
  DBGridEh1.DataSource.DataSet.First;
  while not DBGridEh1.DataSource.DataSet.Eof do
  begin
    for ci := 0 to DBGridEh1.VisibleColumns.Count - 1 do
    begin
      Sheet.Cells[ci, ri].Value := DBGridEh1.VisibleColumns[ci].Field.Value;
    end;

    ri := ri + 1;
    DBGridEh1.DataSource.DataSet.Next;
  end;
  DBGridEh1.DataSource.DataSet.First;
  DBGridEh1.DataSource.DataSet.EnableControls;

  //Title Cell Borders
  cr := Sheet.GetCellsRange(0, 0, DBGridEh1.VisibleColumns.Count - 1, 0);
  cr.Border.Top.Style := clsMediumEh;
  cr.Border.Bottom.Style := clsMediumEh;
  cr.Border.Left.Style := clsMediumEh;
  cr.Border.Right.Style := clsMediumEh;

  cr.Border.InsideVertical.Style := clsThinEh;
  cr.Border.InsideHorizontal.Style := clsThinEh;

  cr.VertAlign := cvaCenterEh;
  cr.HorzAlign := chaCenterEh;

  cr.ApplyChages;
  
  //Data Cell Borders
  cr := Sheet.GetCellsRange(0, 1, DBGridEh1.VisibleColumns.Count - 1, ri - 1);
  cr.Border.Top.Style := clsMediumEh;
  cr.Border.Bottom.Style := clsMediumEh;
  cr.Border.Left.Style := clsMediumEh;
  cr.Border.Right.Style := clsMediumEh;

  cr.Border.InsideVertical.Style := clsThinEh;
  cr.Border.InsideHorizontal.Style := clsThinEh;

  cr.VertAlign := cvaCenterEh;
  cr.HorzAlign := chaCenterEh;

  cr.ApplyChages;

  try
    xlsFile.SaveToFile(XlsxPath);
  finally
    xlsFile.Free;
  end;

  ShellExecute(Application.Handle, 'Open', PChar(XlsxPath), nil, nil, SW_SHOWNORMAL)
end;

end.
```  
:::