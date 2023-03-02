<template><div><h1 id="drawing-of-a-progressbar" tabindex="-1"><a class="header-anchor" href="#drawing-of-a-progressbar" aria-hidden="true">#</a> Drawing of a ProgressBar</h1>
<p>Grid doesn't allow customizing column to show ProgressBar shaped image, but there is a procedure DrawProgressBarEh in the ToolCtrlsEh module. You can use it to draw image of ProgressBar when an event of custom drawing of a Grid's cell is used.</p>
<p><img src="@source/images/DBGridEh.ProgressBar.png" alt="" loading="lazy"></p>
<p>Below you can see an example of using of the DrawProgressBarEh procedure:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh6Columns3AdvDrawDataCell<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">:</span> TGridCoord<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> <span class="token keyword">const</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>
  <span class="token keyword">var</span> Params<span class="token punctuation">:</span> TColCellParamsEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  Sender<span class="token punctuation">.</span>DefaultDrawColumnDataCell<span class="token punctuation">(</span>Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> Params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  DrawProgressBarEh<span class="token punctuation">(</span>mtTable1<span class="token punctuation">.</span>FieldByName<span class="token punctuation">(</span><span class="token string">'ItemsTotal'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsFloat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50000</span><span class="token punctuation">,</span> 
     Sender<span class="token punctuation">.</span>Canvas<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> clSkyBlue<span class="token punctuation">,</span> cl3DDkShadow<span class="token punctuation">,</span> clNone<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Processed <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><br>
<p>Procedure DrawProgressBarEh has next parameters:
<br></p>
<p><code v-pre>CurrentValue: Double;</code></p>
<dd>Current value of the DrawProgress position.</dd>
<br>
<p><code v-pre>MinValue: Double;</code></p>
<dd>Minimum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>
<p><code v-pre>MaxValue: Double;</code></p>
<dd>Maxinum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>
<p><code v-pre>Canvas: TCanvas;</code></p>
<dd>The canvas that is used for rendering. Here you need to pass the canvas of the grid.</dd>
<br>
<p><code v-pre>const Rect: TRect;</code></p>
<dd>The rectangle inside which the DrawProgress is drawn.</dd>
<br>
<p><code v-pre>Color: TColor;</code></p>
<dd>The color of the progress bar that paints the completed part of the process.</dd>
<br>
<p><code v-pre>FrameColor: TColor;</code></p>
<dd>The border color of the completed part of the progress bar.</dd>
<br>
<p><code v-pre>BackgroundColor: TColor;</code></p>
<dd>The color of the entire background of the progress bar.</dd>
<br>
<p><code v-pre>const PBParPtr: PProgressBarParamsEh = nil</code></p>
<dd>Pointer to advanced rendering options for the progress bar. This is not a required parameter. You can also pass nil as a parameter to indicate that advanced options are not used.</dd>
<br>
<p>Extended options are of the following type:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PProgressBarParamsEh <span class="token operator">=</span> <span class="token string">^T</span>ProgressBarParamsEh<span class="token punctuation">;</span>
  TProgressBarParamsEh <span class="token operator">=</span> <span class="token keyword">record</span> <span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre></div><br>
<p><code v-pre>TProgressBarParamsEh</code> has the following fields:</p>
<p><code v-pre>ShowText: Boolean;</code></p>
<dd>Whether to show the progress percentage value.</dd>
<br>
<p><code v-pre>TextType: TProgressBarTextTypeEh;</code></p>
<p><code v-pre>TProgressBarTextTypeEh = (pbttAsValue, pbttAsPercent);</code></p>
<dd> <code>pbttAsValue</code> - display the value passed in the CurrentValue parameter.</dd>
<br>
<dd> <code>pbttAsPercent</code> - Display the value as a percentage calculated using the formula MaxValue - MinValue = 100%.</dd>
<br>
<p><code v-pre>TextDecimalPlaces: Byte;</code></p>
<dd> Round the value to a decimal point.</dd> 
<br>
<p><code v-pre>TextAlignment : TAlignment;</code></p>
<dd> Percent text alignment.</dd> 
<br>
<p><code v-pre>FrameFigureType: TProgressBarFrameFigureTypeEh;</code></p>
<p><code v-pre>TProgressBarFrameFigureTypeEh = (pbfftRectangle, pbfftRoundRect);</code></p>
<dd> Border type.
 <br> <br>
 <code>pbfftRectangle</code> - Rectangle.
 <br> <br>
 <code>pbfftRoundRect</code> - Rectangle with rounded corners.</dd> 
<br>
<p><code v-pre>FrameSizeType: TProgressBarFrameSizeTypeEh;</code></p>
<p><code v-pre>TProgressBarFrameSizeTypeEh = (pbfstFull, pbfstVal);</code></p>
<dd>
The drawing area of the border.
<p><code>pbfstFull</code> - A border is drawn around the entire area of the progress bar.</p>
<p><code>pbfstVal</code> - The border is drawn around the completed area of the progress bar.</p>
</dd> 
<p><code v-pre>Indent: Byte</code></p>
<dd>The size of the indent from the cell borders.</dd><br>
<p><code v-pre>FontName: String;</code></p>
<dd>The name of the font to display the progress percentage.</dd><br>
<p><code v-pre>FontColor: TColor;</code></p>
<dd>Font color.</dd><br>
<p><code v-pre>FontSize: Integer;</code></p>
<dd>Font size.</dd><br>
<p><code v-pre>FontStyle: TFontStyles;</code></p>
<dd>Font style.</dd><br>
<p>Code example:</p>

<CodeDemo id="code-demo-124" type="normal" title="Full%20Demo%20code" code="eJx1Ustu2zAQ/BXCFzuALcQtclFQoHpYRQ4NjEq3pgdaWktCVqRBUnHdov/eXUpW7CDRQRJ3ZpYz5P6dHaQtJYZKr7BVsFJ9twNjZ+HsYHQJVW9AFJk23TpI42+mrTbNOtHYd8reRdVLauQxlU4mgLjIQVVgQlEkvXW6O/PvBaPLJyVEZMBTicNYorWpCPb9WOd/WFFqZZ2IfkDpqM6fe9a/SCO20sjODmzuNaxZ5FF2bS1UoYi1RpDqhpSEsHxrOtIRpTbEiaWZtE9qB3WrmDSkCFLYyx4dBxxsTTF9minKcrRPFba5HP3xruOWQd7oYwG/nQi/iML04KMwwMXidAAPXNg61zdNcNg5F9ktmBLUcAZnYQpl20ncoqTA3GF9BUfY1qojkW8+rQIOoRyYiZyRXcjamm76PS9vYG9pv3ecVaoaX8N4Yt7++bjLGRx6WJf1iJP8gU59MPvptaVW7pGEXJ3Pr8p06NpwvcTxpq5g3orR8TITSSNgPRJ4aHVxWp7vTugFP3+NF8cXfxFg0yy+Q1fIHZL9dZC1gFV8YnOL+YODzhbaSZzfBJHNUEuag9uluLulxw/+NFaDk2lYSsyfTzH2wL+f0/Q5b2Slj7x61ApG7VeyyQPFfsfxvpglakzv2b//eHBNNw==">
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh1Columns5AdvDrawDataCell<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> Cell<span class="token punctuation">,</span>
  AreaCell<span class="token punctuation">:</span> TGridCoord<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> <span class="token keyword">const</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>
  <span class="token keyword">var</span> Params<span class="token punctuation">:</span> TColCellParamsEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Prm<span class="token punctuation">:</span> TProgressBarParamsEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  Sender<span class="token punctuation">.</span>DefaultDrawColumnDataCell<span class="token punctuation">(</span>Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> Params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  Prm<span class="token punctuation">.</span>ShowText <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>TextType <span class="token operator">:=</span> TProgressBarTextTypeEh<span class="token punctuation">.</span>pbttAsPercent<span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>TextDecimalPlaces <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>TextAlignment <span class="token operator">:=</span> TAlignment<span class="token punctuation">.</span>taCenter<span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FrameFigureType <span class="token operator">:=</span> TProgressBarFrameFigureTypeEh<span class="token punctuation">.</span>pbfftRectangle<span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FrameSizeType <span class="token operator">:=</span> TProgressBarFrameSizeTypeEh<span class="token punctuation">.</span>pbfstFull<span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>Indent <span class="token operator">:=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FontName <span class="token operator">:=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FontColor <span class="token operator">:=</span> clDefault<span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FontSize <span class="token operator">:=</span> Sender<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  Prm<span class="token punctuation">.</span>FontStyle <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  DrawProgressBarEh<span class="token punctuation">(</span>MemTableEh1<span class="token punctuation">.</span>FieldByName<span class="token punctuation">(</span><span class="token string">'ItemsTotal'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsFloat<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50000</span><span class="token punctuation">,</span>
    Sender<span class="token punctuation">.</span>Canvas<span class="token punctuation">,</span> ARect<span class="token punctuation">,</span> clSkyBlue<span class="token punctuation">,</span> cl3DDkShadow<span class="token punctuation">,</span> clNone<span class="token punctuation">,</span>
    <span class="token operator">@</span>Prm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Processed <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div></CodeDemo></div></template>


