<template><div><h1 id="formatting-cells-in-a-table" tabindex="-1"><a class="header-anchor" href="#formatting-cells-in-a-table" aria-hidden="true">#</a> Formatting cells in a table</h1>
<p>Cell formatting refers to setting the <code v-pre>Color</code>, <code v-pre>Font</code>, <code v-pre>Separating Lines</code>, <code v-pre>Alignment</code>, <code v-pre>Indent</code>, <code v-pre>Digital format</code> for one or more data cells.</p>
<p>The cells are formatted using the <code v-pre>GetCellsRange</code> method and the <code v-pre>IXlsFileCellsRangeEh</code> interface.</p>
<p>Using the <code v-pre>Sheet.GetCellsRange</code> method, you need to get a reference to the specified array of cells in the table (<code v-pre>GetCellsRange</code> returns an array of cells as a reference to the <code v-pre>IXlsFileCellsRangeEh</code> interface).</p>
<p>Then, use the methods of the <code v-pre>IXlsFileCellsRangeEh</code> interface to perform the cell format changes and call the <code v-pre>IXlsFileCellsRangeEh.ApplyChages</code> method to apply the changes to the table.</p>
<p>The following code gets a reference to a range of four cells (<code v-pre>LeftCol = 0</code>, <code v-pre>TopRow = 0</code>, <code v-pre>ColCount = 1</code>, <code v-pre>RowCount = 1</code>) and sets the font size for the selected range to 24.</p>
<p>Demo1</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  cr<span class="token punctuation">:</span> IXlsFileCellsRangeEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  cr <span class="token operator">:=</span> XlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>Worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>GetCellsRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">:=</span> <span class="token number">24</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>ApplyChages<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Demo2</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  cr <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>GetCellsRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Top<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Bottom<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>InsideBorder<span class="token punctuation">.</span>Top<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>InsideBorder<span class="token punctuation">.</span>Bottom<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>InsideBorder<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>InsideBorder<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>NumberFormat <span class="token operator">:=</span> <span class="token string">'#,##0.0000'</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>VertAlign <span class="token operator">:=</span> cvaCenterEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>HorzAlign <span class="token operator">:=</span> chaCenterEh<span class="token punctuation">;</span>
  AFont <span class="token operator">:=</span> DBVertGridEh1<span class="token punctuation">.</span>VisibleFieldRow<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Font<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span><span class="token keyword">Name</span> <span class="token operator">:=</span> AFont<span class="token punctuation">.</span><span class="token keyword">Name</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">:=</span> AFont<span class="token punctuation">.</span>Size<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Color <span class="token operator">:=</span> AFont<span class="token punctuation">.</span>Color<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>IsBold <span class="token operator">:=</span> fsBold <span class="token operator">in</span> AFont<span class="token punctuation">.</span>Style<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>IsItalic <span class="token operator">:=</span> fsItalic <span class="token operator">in</span> AFont<span class="token punctuation">.</span>Style<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>IsUnderline <span class="token operator">:=</span> fsUnderline <span class="token operator">in</span> AFont<span class="token punctuation">.</span>Style<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>ApplyChages<span class="token punctuation">;</span>
</code></pre></div><br>
<p>Use the following <code v-pre>IXlsFileCellsRangeEh</code> interface properties to set other format properties:</p>
<p><code v-pre>property Font: TXlsFileCellsRangeFontEh;</code></p>
<dd>Sets the font properties for the selected range.</dd>
<br>
<p><code v-pre>property Fill: TXlsFileCellsRangeFillEh;</code></p>
<dd>Sets the cell shading properties for the selected range.</dd>
<br>
<p><code v-pre>property Border: TXlsFileCellsRangeLinesEh;</code></p>
<dd>Sets the properties of the colors and the width of the dividing lines of the cells for the selected range.</dd>
<br>
<p><code v-pre>property HorzAlign: TXlsFileCellHorzAlign;</code></p>
<dd>Sets the horizontal text in cells for the selected range.</dd>
<br>
<p><code v-pre>property VertAlign: TXlsFileCellVertAlign;</code></p>
<dd>Specifies the vertical alignment of text in cells for the selected range.</dd>
<br>
<p><code v-pre>property WrapText: Boolean;</code></p>
<dd>Specifies whether the text should be wrapped but a new line if the text does not fit into the width of the cell.</dd>
<br>
<p><code v-pre>property Rotation: Integer; //Degrees</code></p>
<dd>Specifies the rotation of the text.</dd>
<br>
<p><code v-pre>property Indent: Integer;</code></p>
<dd>Sets the indentation of the text to the left inside the cell.</dd>
<br>
<p><code v-pre>property CharsFlowDirection: TXlsFileCharsFlowDirectionEh;</code></p>
<dd>Specifies how the letters of the text are positioned relative to each other.</dd>
<br>
<p><code v-pre>property NumberFormat: String read GetNumberFormat write SetNumberFormat;</code></p>
<dd>
Specifies the number format for cells that contain numbers or date / time. The format is set according to the rules of MS Excel.
For a description of the number format, see the MS Excel documentation.
https://support.microsoft.com/en-us/office/number-format-codes-5026bbd6-04bc-48cd-bf33-80f18b4eae68
</dd>
<br>
</div></template>


