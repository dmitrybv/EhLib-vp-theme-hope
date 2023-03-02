# Formatting cells in a table


Cell formatting refers to setting the `Color`, `Font`, `Separating Lines`, `Alignment`, `Indent`, `Digital format` for one or more data cells.

The cells are formatted using the `GetCellsRange` method and the `IXlsFileCellsRangeEh` interface.

Using the `Sheet.GetCellsRange` method, you need to get a reference to the specified array of cells in the table (`GetCellsRange` returns an array of cells as a reference to the `IXlsFileCellsRangeEh` interface).

Then, use the methods of the `IXlsFileCellsRangeEh` interface to perform the cell format changes and call the `IXlsFileCellsRangeEh.ApplyChages` method to apply the changes to the table.

The following code gets a reference to a range of four cells (`LeftCol = 0`, `TopRow = 0`, `ColCount = 1`, `RowCount = 1`) and sets the font size for the selected range to 24.

Demo1

```pascal:no-line-numbers
var
  cr: IXlsFileCellsRangeEh;
begin
  cr := XlsFile.Workbook.Worksheets[0].GetCellsRange(0, 0, 1, 1);
  cr.Font.Size := 24;
  cr.ApplyChages;
end;
```

Demo2

```pascal:no-line-numbers
  cr := Sheet.GetCellsRange(0,4,6,i+4);
  cr.Border.Top.Style := clsMediumEh;
  cr.Border.Bottom.Style := clsMediumEh;
  cr.Border.Left.Style := clsMediumEh;
  cr.Border.Right.Style := clsMediumEh;

  cr.InsideBorder.Top.Style := clsThinEh;
  cr.InsideBorder.Bottom.Style := clsThinEh;
  cr.InsideBorder.Left.Style := clsThinEh;
  cr.InsideBorder.Right.Style := clsThinEh;

  cr.NumberFormat := '#,##0.0000';
  cr.VertAlign := cvaCenterEh;
  cr.HorzAlign := chaCenterEh;
  AFont := DBVertGridEh1.VisibleFieldRow[i].Font;
  cr.Font.Name := AFont.Name;
  cr.Font.Size := AFont.Size;
  cr.Font.Color := AFont.Color;
  cr.Font.IsBold := fsBold in AFont.Style;
  cr.Font.IsItalic := fsItalic in AFont.Style;
  cr.Font.IsUnderline := fsUnderline in AFont.Style;

  cr.ApplyChages;
```
<br>

Use the following `IXlsFileCellsRangeEh` interface properties to set other format properties:

`property Font: TXlsFileCellsRangeFontEh;`
<dd>Sets the font properties for the selected range.</dd>
<br>

`property Fill: TXlsFileCellsRangeFillEh;`
<dd>Sets the cell shading properties for the selected range.</dd>
<br>

`property Border: TXlsFileCellsRangeLinesEh;`
<dd>Sets the properties of the colors and the width of the dividing lines of the cells for the selected range.</dd>
<br>

`property HorzAlign: TXlsFileCellHorzAlign;`
<dd>Sets the horizontal text in cells for the selected range.</dd>
<br>

`property VertAlign: TXlsFileCellVertAlign;`
<dd>Specifies the vertical alignment of text in cells for the selected range.</dd>
<br>

`property WrapText: Boolean;`
<dd>Specifies whether the text should be wrapped but a new line if the text does not fit into the width of the cell.</dd>
<br>

`property Rotation: Integer; //Degrees`
<dd>Specifies the rotation of the text.</dd>
<br>

`property Indent: Integer;`
<dd>Sets the indentation of the text to the left inside the cell.</dd>
<br>

`property CharsFlowDirection: TXlsFileCharsFlowDirectionEh;`
<dd>Specifies how the letters of the text are positioned relative to each other.</dd>
<br>

`property NumberFormat: String read GetNumberFormat write SetNumberFormat;`
<dd>
Specifies the number format for cells that contain numbers or date / time. The format is set according to the rules of MS Excel.
For a description of the number format, see the MS Excel documentation.
https://support.microsoft.com/en-us/office/number-format-codes-5026bbd6-04bc-48cd-bf33-80f18b4eae68
</dd>
<br>
