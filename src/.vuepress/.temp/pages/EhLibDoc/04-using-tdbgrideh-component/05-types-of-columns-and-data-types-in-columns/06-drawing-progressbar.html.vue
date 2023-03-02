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
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>CurrentValue<span class="token punctuation">:</span> Double<span class="token punctuation">;</span>
</code></pre></div><dd>Current value of the DrawProgress position.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>MinValue<span class="token punctuation">:</span> Double<span class="token punctuation">;</span>
</code></pre></div><dd>Minimum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>MaxValue<span class="token punctuation">:</span> Double<span class="token punctuation">;</span>
</code></pre></div><dd>Maxinum value of the DrawProgress position. The value is used to calculate the current percentage.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Canvas<span class="token punctuation">:</span> TCanvas<span class="token punctuation">;</span> 
</code></pre></div><dd>The canvas that is used for rendering. Here you need to pass the canvas of the grid.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">const</span> Rect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span> 
</code></pre></div><dd>The rectangle inside which the DrawProgress is drawn.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Color<span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
</code></pre></div><dd>The color of the progress bar that paints the completed part of the process.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FrameColor<span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
</code></pre></div><dd>The border color of the completed part of the progress bar.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>BackgroundColor<span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
</code></pre></div><dd>The color of the entire background of the progress bar.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">const</span> PBParPtr<span class="token punctuation">:</span> PProgressBarParamsEh <span class="token operator">=</span> <span class="token keyword">nil</span>
</code></pre></div><dd>Pointer to advanced rendering options for the progress bar. This is not a required parameter. You can also pass nil as a parameter to indicate that advanced options are not used.</dd>
<br>
<p>Extended options are of the following type:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>PProgressBarParamsEh <span class="token operator">=</span> <span class="token string">^T</span>ProgressBarParamsEh<span class="token punctuation">;</span>
  TProgressBarParamsEh <span class="token operator">=</span> <span class="token keyword">record</span> <span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre></div><br>
<p><code v-pre>TProgressBarParamsEh</code> has the following fields:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>ShowText<span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
</code></pre></div><dd>Whether to show the progress percentage value.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>TextType<span class="token punctuation">:</span> TProgressBarTextTypeEh<span class="token punctuation">;</span>
  TProgressBarTextTypeEh <span class="token operator">=</span> <span class="token punctuation">(</span>pbttAsValue<span class="token punctuation">,</span> pbttAsPercent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><dd> <code>pbttAsValue</code> - display the value passed in the CurrentValue parameter.</dd>
<br>
<dd> <code>pbttAsPercent</code> - Display the value as a percentage calculated using the formula MaxValue - MinValue = 100%.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>TextDecimalPlaces<span class="token punctuation">:</span> Byte<span class="token punctuation">;</span>
</code></pre></div><dd> Round the value to a decimal point.</dd> 
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>TextAlignment <span class="token punctuation">:</span> TAlignment<span class="token punctuation">;</span>
</code></pre></div><dd> Percent text alignment.</dd> 
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FrameFigureType<span class="token punctuation">:</span> TProgressBarFrameFigureTypeEh<span class="token punctuation">;</span>
  TProgressBarFrameFigureTypeEh <span class="token operator">=</span> <span class="token punctuation">(</span>pbfftRectangle<span class="token punctuation">,</span> pbfftRoundRect<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><dd> Border type.
 <br> <br>
 <code>pbfftRectangle</code> - Rectangle.
 <br> <br>
 <code>pbfftRoundRect</code> - Rectangle with rounded corners.</dd> 
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FrameSizeType<span class="token punctuation">:</span> TProgressBarFrameSizeTypeEh<span class="token punctuation">;</span>
  TProgressBarFrameSizeTypeEh <span class="token operator">=</span> <span class="token punctuation">(</span>pbfstFull<span class="token punctuation">,</span> pbfstVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><dd>
The drawing area of the border.
<p><code>pbfstFull</code> - A border is drawn around the entire area of the progress bar.</p>
<p><code>pbfstVal</code> - The border is drawn around the completed area of the progress bar.</p>
</dd> 
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Indent<span class="token punctuation">:</span> Byte
</code></pre></div><dd>The size of the indent from the cell borders.</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FontName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
</code></pre></div><dd>The name of the font to display the progress percentage.</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FontColor<span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
</code></pre></div><dd>Font color.</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FontSize<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
</code></pre></div><dd>Font size.</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FontStyle<span class="token punctuation">:</span> TFontStyles<span class="token punctuation">;</span>
</code></pre></div><dd>Font style.</dd><br>
<p>Code example:</p>
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
</code></pre></div></div></template>


