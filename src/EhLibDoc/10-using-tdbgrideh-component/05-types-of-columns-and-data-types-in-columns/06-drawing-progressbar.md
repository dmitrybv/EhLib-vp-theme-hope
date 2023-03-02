# Drawing of a ProgressBar


Grid doesn't allow customizing column to show ProgressBar shaped image, but there is a procedure DrawProgressBarEh in the ToolCtrlsEh module. You can use it to draw image of ProgressBar when an event of custom drawing of a Grid's cell is used.

![](../../../images/DBGridEh.ProgressBar.png)


Below you can see an example of using of the DrawProgressBarEh procedure:

```pascal:no-line-numbers
procedure TForm1.DBGridEh6Columns3AdvDrawDataCell(Sender: TCustomDBGridEh;
  Cell, AreaCell: TGridCoord; Column: TColumnEh; const ARect: TRect;
  var Params: TColCellParamsEh; var Processed: Boolean);
begin
  Sender.DefaultDrawColumnDataCell(Cell, AreaCell, Column, ARect, Params);

  DrawProgressBarEh(mtTable1.FieldByName('ItemsTotal').AsFloat, 0, 50000, 
     Sender.Canvas, ARect, clSkyBlue, cl3DDkShadow, clNone);
  Processed := True;
end;
``` 
<br>

Procedure DrawProgressBarEh has next parameters:
<br>

`CurrentValue: Double;`
<dd>Current value of the DrawProgress position.</dd>
<br>

`MinValue: Double;`
<dd>Minimum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>

`MaxValue: Double;`
<dd>Maxinum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>

`Canvas: TCanvas;`
<dd>The canvas that is used for rendering. Here you need to pass the canvas of the grid.</dd>
<br>

`const Rect: TRect;`
<dd>The rectangle inside which the DrawProgress is drawn.</dd>
<br>

`Color: TColor;`
<dd>The color of the progress bar that paints the completed part of the process.</dd>
<br>

`FrameColor: TColor;`
<dd>The border color of the completed part of the progress bar.</dd>
<br>

`BackgroundColor: TColor;`
<dd>The color of the entire background of the progress bar.</dd>
<br>

`const PBParPtr: PProgressBarParamsEh = nil`
<dd>Pointer to advanced rendering options for the progress bar. This is not a required parameter. You can also pass nil as a parameter to indicate that advanced options are not used.</dd>
<br>

Extended options are of the following type:

```pascal:no-line-numbers
PProgressBarParamsEh = ^TProgressBarParamsEh;
  TProgressBarParamsEh = record ...
```
<br>

`TProgressBarParamsEh` has the following fields:

`ShowText: Boolean;`
<dd>Whether to show the progress percentage value.</dd>
<br>

`TextType: TProgressBarTextTypeEh;`

`TProgressBarTextTypeEh = (pbttAsValue, pbttAsPercent);`
<dd> <code>pbttAsValue</code> - display the value passed in the CurrentValue parameter.</dd>
<br>
<dd> <code>pbttAsPercent</code> - Display the value as a percentage calculated using the formula MaxValue - MinValue = 100%.</dd>
<br>

`TextDecimalPlaces: Byte;`
<dd> Round the value to a decimal point.</dd> 
<br>

`TextAlignment : TAlignment;`
<dd> Percent text alignment.</dd> 
<br>

`FrameFigureType: TProgressBarFrameFigureTypeEh;`

`TProgressBarFrameFigureTypeEh = (pbfftRectangle, pbfftRoundRect);`
<dd> Border type.
 <br> <br>
 <code>pbfftRectangle</code> - Rectangle.
 <br> <br>
 <code>pbfftRoundRect</code> - Rectangle with rounded corners.</dd> 
<br>

`FrameSizeType: TProgressBarFrameSizeTypeEh;`

`TProgressBarFrameSizeTypeEh = (pbfstFull, pbfstVal);`

<dd>
The drawing area of the border.

 <code>pbfstFull</code> - A border is drawn around the entire area of the progress bar.

 <code>pbfstVal</code> - The border is drawn around the completed area of the progress bar.
</dd> 

`Indent: Byte`
<dd>The size of the indent from the cell borders.</dd><br>

`FontName: String;`
<dd>The name of the font to display the progress percentage.</dd><br>

`FontColor: TColor;`
<dd>Font color.</dd><br>

`FontSize: Integer;`
<dd>Font size.</dd><br>

`FontStyle: TFontStyles;`
<dd>Font style.</dd><br>

Code example:

::: normal-demo Full Demo code

```pascal:no-line-numbers
procedure TForm1.DBGridEh1Columns5AdvDrawDataCell(Sender: TCustomDBGridEh; Cell,
  AreaCell: TGridCoord; Column: TColumnEh; const ARect: TRect;
  var Params: TColCellParamsEh; var Processed: Boolean);
var
  Prm: TProgressBarParamsEh;
begin
  Sender.DefaultDrawColumnDataCell(Cell, AreaCell, Column, ARect, Params);

  Prm.ShowText := True;
  Prm.TextType := TProgressBarTextTypeEh.pbttAsPercent;
  Prm.TextDecimalPlaces := 1;
  Prm.TextAlignment := TAlignment.taCenter;
  Prm.FrameFigureType := TProgressBarFrameFigureTypeEh.pbfftRectangle;
  Prm.FrameSizeType := TProgressBarFrameSizeTypeEh.pbfstFull;
  Prm.Indent := 2;
  Prm.FontName := '';
  Prm.FontColor := clDefault;
  Prm.FontSize := Sender.Canvas.Font.Size - 1;
  Prm.FontStyle := [];

  DrawProgressBarEh(MemTableEh1.FieldByName('ItemsTotal').AsFloat, 0, 50000,
    Sender.Canvas, ARect, clSkyBlue, cl3DDkShadow, clNone,
    @Prm);
  Processed := True;
end;
```
:::