<template><div><h1 id="drawing-of-a-progressbar-shaped-image-in-the-grid-cell" tabindex="-1"><a class="header-anchor" href="#drawing-of-a-progressbar-shaped-image-in-the-grid-cell" aria-hidden="true">#</a> Drawing of a ProgressBar shaped image in the Grid cell</h1>
<p>Grid doesn't allow customizing column to show ProgressBar shaped image, but there is a procedure DrawProgressBarEh in the ToolCtrlsEh module. You can use it to draw image of ProgressBar when an event of custom drawing of a Grid's cell is used.</p>
<p>Below you can see an example of using of the DrawProgressBarEh procedure:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh6Columns3AdvDrawDataCell<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">:</span> TGridCoord<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> <span class="token keyword">const</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>
  <span class="token keyword">var</span> Params<span class="token punctuation">:</span> TColCellParamsEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  Sender<span class="token punctuation">.</span>DefaultDrawColumnDataCell<span class="token punctuation">(</span>Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> Params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  DrawProgressBarEh<span class="token punctuation">(</span>mtTable1<span class="token punctuation">.</span>FieldByName<span class="token punctuation">(</span><span class="token string">'ItemsTotal'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsFloat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50000</span><span class="token punctuation">,</span> 
     Sender<span class="token punctuation">.</span>Canvas<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> clSkyBlue<span class="token punctuation">,</span> cl3DDkShadow<span class="token punctuation">,</span> clNone<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Processed <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Procedure DrawProgressBarEh has next parameters:</p>
<p>CurrentValue: Double;
Current value of the DrawProgress position.</p>
<p>MinValue: Double;
Minimum value of the DrawProgress position. The value is used to calculate the current percentage.</p>
<p>MaxValue: Double;
Maxinum value of the DrawProgress position. The value is used to calculate the current percentage.</p>
<p>Canvas: TCanvas;
The canvas that is used for rendering. Here you need to pass the canvas of the grid.</p>
<p>const Rect: TRect;
The rectangle inside which the DrawProgress is drawn.</p>
<p>Color: TColor;
The color of the progress bar that paints the completed part of the process.</p>
<p>FrameColor: TColor;
The border color of the completed part of the progress bar.</p>
<p>BackgroundColor: TColor;
The color of the entire background of the progress bar.</p>
<p>const PBParPtr: PProgressBarParamsEh = nil
Pointer to advanced rendering options for the progress bar. This is not a required parameter. You can also pass nil as a parameter to indicate that advanced options are not used.</p>
<p>Extended options are of the following type.
PProgressBarParamsEh = ^TProgressBarParamsEh;
TProgressBarParamsEh = record ...
TProgressBarParamsEh has the following fields:</p>
<p>ShowText: Boolean;
Whether to show the progress percentage value.</p>
<p>TextType: TProgressBarTextTypeEh;
Type of text representation execution.
TProgressBarTextTypeEh = (pbttAsValue, pbttAsPercent);
pbttAsValue - display the value passed in the CurrentValue parameter.
pbttAsPercent - Display the value as a percentage calculated using the formula MaxValue - MinValue = 100%.</p>
<p>TextDecimalPlaces: Byte;
Round the value to a decimal point.</p>
<p>TextAlignment : TAlignment;
Percent text alignment.</p>
<p>FrameFigureType: TProgressBarFrameFigureTypeEh;
Border type.
TProgressBarFrameFigureTypeEh = (pbfftRectangle, pbfftRoundRect);
pbfftRectangle - Rectangle.
pbfftRoundRect - Rectangle with rounded corners.</p>
<p>FrameSizeType: TProgressBarFrameSizeTypeEh;
The drawing area of the border.
TProgressBarFrameSizeTypeEh = (pbfstFull, pbfstVal);
pbfstFull - A border is drawn around the entire area of the progress bar.
pbfstVal - The border is drawn around the completed area of the progress bar.</p>
<p>Indent: Byte
The size of the indent from the cell borders.</p>
<p>FontName: String;
The name of the font to display the progress percentage.</p>
<p>FontColor: TColor;
Font color.</p>
<p>FontSize: Integer;
Font size.</p>
<p>FontStyle: TFontStyles;
Font style.
Code example:</p>
<p>procedure TForm1.DBGridEh1Columns5AdvDrawDataCell(Sender: TCustomDBGridEh; Cell,
AreaCell: TGridCoord; Column: TColumnEh; const ARect: TRect;
var Params: TColCellParamsEh; var Processed: Boolean);
var
Prm: TProgressBarParamsEh;
begin
Sender.DefaultDrawColumnDataCell(Cell, AreaCell, Column, ARect, Params);</p>
<p>Prm.ShowText := True;
Prm.TextType := TProgressBarTextTypeEh.pbttAsPercent;
Prm.TextDecimalPlaces := 1;
Prm.TextAlignment := TAlignment.taCenter;
Prm.FrameFigureType := TProgressBarFrameFigureTypeEh.pbfftRectangle;
Prm.FrameSizeType := TProgressBarFrameSizeTypeEh.pbfstFull;
Prm.Indent := 2;
Prm.FontName := '';
Prm.FontColor := clDefault;
Prm.FontSize := Sender.Canvas.Font.Size - 1;
Prm.FontStyle := [];</p>
<p>DrawProgressBarEh(MemTableEh1.FieldByName('ItemsTotal').AsFloat, 0, 50000,
Sender.Canvas, ARect, clSkyBlue, cl3DDkShadow, clNone,
@Prm);
Processed := True;
end;</p>
</div></template>


