<template><div><h1 id="customizing-grid-title" tabindex="-1"><a class="header-anchor" href="#customizing-grid-title" aria-hidden="true">#</a> Customizing grid title</h1>
<p>Use the sub-properties of TDBGridEh.TitleParams property to adjust display the grid title.</p>
<p>Sub-properties of property TDBGridEh.TitleParams:</p>
<p><code v-pre>Color: TColor</code></p>
<dd>Specifies the background color for the title cells.</dd>
<p><code v-pre>Font: TFont</code></p>
<dd>Controls the font in which the title cells displays its data.</dd>
<p><code v-pre>ParentFont: Boolean</code></p>
<dd>Determines where a control looks for its font information.</dd>
<p><code v-pre>SecondColor: TColor</code></p>
<dd>Second background color that is used when cells painted in gradient mode. Use FillStyle property to define paint style.</dd>
<p><code v-pre>Images: TCustomImageList</code></p>
<dd>List of Images when displaying images in the header. Index of drawing Image is defined in Column.Title.ImageIndex</dd>
<p><code v-pre>MultiTitle: Boolean</code></p>
<dd>Determines that the title will be drawn in a MultiTitle mode.</dd>
<p><code v-pre>RowHeight: Integer</code></p>
<dd>Specifies the height of data row in text lines</dd>
<p><code v-pre>RowLines: Integer</code></p>
<dd>
Specifies the height of data row in text lines
Full row height = height in pixels of RowLines + RowHeight.
</dd>
<p><code v-pre>SortMarkerStyle: TSortMarkerStyleEh</code></p>
<dd>Defines the shape of the sorting markers.</dd>
<p><code v-pre>VTitleMargin: Integer</code></p>
<dd>Specifies the margin between text and bottom of title; and margin between text and top of title.</dd>
<p><code v-pre>VertLineColor: TColor</code></p>
<dd>Color vertical lines in the data area.</dd>
<p><code v-pre>VertLines: Boolean</code></p>
<dd>Presence of vertical lines in the data area.</dd>
<p><code v-pre>HorzLineColor: TColor</code></p>
<dd>Color of the horizontal lines in the data area.</dd>
<p><code v-pre>HorzLines: Boolean</code></p>
<dd>Presence of horizontal lines in the data area.</dd>
<p><code v-pre>FillStyle: TGridCellFillStyleEh</code></p>
<dd>Specifies the style of filling the title cells.</dd>
<p><code v-pre>BorderInFillStyle: Boolean</code></p>
<dd>
Specifies that the vertical lines are drawn by the function that draw header cell rather then function that draw cell lines. In this mode vertical lines are drawn not to the end of the border crossing.
</dd>
<br>
<h3 id="complex-titles" tabindex="-1"><a class="header-anchor" href="#complex-titles" aria-hidden="true">#</a> Complex titles.</h3>
<p><code v-pre>TDBGridEh</code> allows to create one common title above several columns. See Figure:
To do it, set DBGridEh.UseMultiTitle property to True value and fill label of the fields or caption of column title using next rule: every part of text  in field label or column title must consist of several parts divided by sign &quot;|&quot;, where every common part must be same for several required columns. Other fields or captions must contain same text in the corresponding parts.</p>
<p><img src="@source/images/clip0056.png" alt="" loading="lazy"></p>
<p>For example:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>Field1<span class="token punctuation">.</span>DisplayLabel <span class="token operator">:=</span> <span class="token string">'Title1|SubTitle1'</span><span class="token punctuation">;</span>
Field2<span class="token punctuation">.</span>DisplayLabel <span class="token operator">:=</span> <span class="token string">'Title1|SubTitle2'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>or
</code></pre>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>DBGridEh<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption <span class="token operator">:=</span> <span class="token string">'Title1|SubTitle1'</span><span class="token punctuation">;</span>
DBGridEh<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption <span class="token operator">:=</span> <span class="token string">'Title1|SubTitle2'</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="title-acts-as-a-button" tabindex="-1"><a class="header-anchor" href="#title-acts-as-a-button" aria-hidden="true">#</a> Title acts as a button.</h3>
<p>Set Column.Title.TitleButton to True to make title cells act as a button. You can also write an OnTitleBtnClick event to take specific action when the user clicks on title cell.</p>
<h3 id="show-bitmaps-in-titles" tabindex="-1"><a class="header-anchor" href="#show-bitmaps-in-titles" aria-hidden="true">#</a> Show bitmaps in titles.</h3>
<p>Use TitleImages property of TDBGridEh and ImageIndex property of TcolumnTitleEh to show bitmap in titles instead of caption.</p>
<h3 id="sorting-markers" tabindex="-1"><a class="header-anchor" href="#sorting-markers" aria-hidden="true">#</a> Sorting markers</h3>
<p>Change the sort order for the marker sorting. In the new version make the p-triangle sorting pointing down means sorting type DESC (from highest to lowest). The first sort direction is determined by the type of field. For text fields, the first sort order is set to high for the rest of the fields in descending order. To change the direction of the first rewrite virtual function use TDBGridEhCenter.GetFirstSortMarkerState. To install the new center Grids use the global function SetDBGridEhCenter.
You can set the icon sorting through properties <code v-pre>TDBGridEh.TitleParams</code>. <code v-pre>SortMarkerStyle</code> for a particular grid or through global property <code v-pre>DBGridEhDefaultStyle.SortMarkerStyle</code>.</p>
<p>Type TSortMarkerStyleEh:</p>
<table>
<thead>
<tr>
<th>Value</th>
<th>Description/Image</th>
</tr>
</thead>
<tbody>
<tr>
<td>smstDefaultEh</td>
<td>Use default style defined in DBGridEhDefaultStyle.SortMarkerStyle property.</td>
</tr>
<tr>
<td>smstClassicEh</td>
<td><img src="@source/images/clip0058.png" alt="" loading="lazy"></td>
</tr>
<tr>
<td>smst3DFrameEh</td>
<td><img src="@source/images/clip0059.png" alt="" loading="lazy"></td>
</tr>
<tr>
<td>smstFrameEh</td>
<td><img src="@source/images/clip0060.png" alt="" loading="lazy"></td>
</tr>
<tr>
<td>smstSolidEh</td>
<td><img src="@source/images/clip0061.png" alt="" loading="lazy"></td>
</tr>
<tr>
<td>smstThemeDefinedEh</td>
<td></td>
</tr>
</tbody>
</table>
<p>Event to customize and draw title cells including <code v-pre>SupperTitle</code> in <code v-pre>MuliTitile</code> mode.
There are events in <code v-pre>DBGridEh</code> component to customize and render the header of the grid columns. These events convenient to use for the top-level headers in MultiTitle mode because to <code v-pre>TDBGridEh</code> have no separate static objects to configure the top-level headers.</p>
<p><img src="@source/images/clip0062.png" alt="" loading="lazy"></p>
<p>Events in the <code v-pre>DBGridEh</code> component:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>OnGetTitleParams<span class="token punctuation">:</span> TDBGridGetDrawTitleParamsEventEh
  TDBGridGetDrawTitleParamsEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>Grid<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
    Params<span class="token punctuation">:</span> TDBGridDrawTitleCellParamsEh<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The event is called before rendering the column header. In the event you can change the properties of an Params object.
Params has a lot of properties. The main properties that can be changed are following:
<code v-pre>Font: TFont</code> – Title font.
<code v-pre>Color: TColor</code> – Background color.
<code v-pre>SecondColor: TColor</code> – Second background color. Used in GradientFill mode.
<code v-pre>ForeInsideRect: TRect</code> – The size of the inside of the cell contents. <code v-pre>DrawTitleCellBackground</code> method reduces the size of the relative size of the cell after the 3D rendering of the cell border. You can also reduce the size of the area if you want to draw additional information in the left or right side of the header cell.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>OnDrawTitleCell<span class="token punctuation">:</span> TDBGridDrawTitleEventEh
  TDBGridDrawTitleEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>Grid<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
    ACanvas<span class="token punctuation">:</span> TCanvas<span class="token punctuation">;</span> 
    <span class="token keyword">const</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span> 
    Params<span class="token punctuation">:</span> TDBGridDrawTitleCellParamsEh<span class="token punctuation">;</span> 
    <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The event is called before rendering the column header. You write the code to draw the header itself and set the Processed to True to prevent standard code for rendering.
Or you can change the values in the Params parameter to change the style of the header.
You can also call the standard methods for rendering the title:</p>
<p><code v-pre>DrawTitleCellBackground</code> – rendering title cell background.</p>
<p><code v-pre>DrawTitleCellForeground</code> – rendering the content of title cell.</p>
<p>For an example of using events see the next demo project:
<code v-pre>DEMOS\DBGridEh.CustomTitleDraw</code></p>
</div></template>


