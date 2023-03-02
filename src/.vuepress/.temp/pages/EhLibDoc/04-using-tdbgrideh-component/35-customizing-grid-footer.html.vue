<template><div><h1 id="customizing-grid-footer" tabindex="-1"><a class="header-anchor" href="#customizing-grid-footer" aria-hidden="true">#</a> Customizing grid footer</h1>
<p><code v-pre>TDBGridEh</code> can display special row (footer) or rows at bottom part.</p>
<p>Use <code v-pre>FooterRowCount</code> property to specify the number of footer rows in the grid. Use Footer or <code v-pre>Footers</code> property of <code v-pre>TColumnEh</code> object to specify information which needs to show in footer cells. The <code v-pre>Footers</code> property is useful when you have more than one footer rows. <code v-pre>Footers</code> are a collection of <code v-pre>TColumnFooterEh</code> objects. Information from i-th element of collection will be shown in i-th row of footer. In footer cell, it is possible to show: Sum value for the specific field, records count, the value of a specific field or static text. Use <code v-pre>Footer.ValueType</code> or <code v-pre>Footers[i].ValueType</code> property to specify which type of value will be shown in the footer cell. If <code v-pre>ValueType = fvtStaticText</code>, then you also need to set <code v-pre>Value</code> property to specify text which will be shown. If <code v-pre>ValueType = fvtFieldValue</code>, then you need to set property <code v-pre>FieldName</code> to specify the field, value of which will be shown. To force grid to calculate total values you need to activate <code v-pre>SumList</code> (Set <code v-pre>DBGridEh.SumList.Active</code> to <code v-pre>True</code> value).
Set <code v-pre>TColumnFooterEh.ValueType</code> to <code v-pre>fvtSum</code> to show sum value of the column field in the footer cell, you can also specify <code v-pre>Column.Footer.FieldName</code> to calculate total value of the other field. Set <code v-pre>ValueType</code> to <code v-pre>fvtCount</code> to force grid to display count of records in the footer cell.</p>
<p>Use the sub-properties of <code v-pre>TDBGridEh.FooterParams</code> property to Customize the footer of the grid:
<code v-pre>Color: TColor</code></p>
<p>Specifies the background color for the footer color.</p>
<p><code v-pre>FillStyle: TGridCellFillStyleEh</code></p>
<p>Specifies the style of filling the footer cells.</p>
<p><code v-pre>Font: TFont</code></p>
<p>Controls the font in which the title cells displays its data.</p>
<p><code v-pre>ParentFont: Boolean</code></p>
<p>Determines where a control looks for its font information.</p>
<p><code v-pre>RowHeight: Integer</code></p>
<p>Specifies the height of footer row in text lines</p>
<p><code v-pre>RowLines: Integer</code></p>
<p>Specifies the height of footer row in text lines
Full row height = height in pixels of RowLines + RowHeight.</p>
<p><code v-pre>HorzLineColor: TColor</code></p>
<p>Color of the horizontal lines in the footer area.</p>
<p><code v-pre>HorzLines: Boolean</code></p>
<p>Presence of horizontal lines in the footer area.</p>
<p><code v-pre>VertLineColor: TColor</code></p>
<p>Color vertical lines in the footer area.</p>
<p><code v-pre>VertLines: Boolean</code></p>
<p>Presence of vertical lines in the footer area.</p>
<br>
The SumList property includes the following subproperties:
<p><code v-pre>Active: Boolean</code>
Set this property to activate the object SumList. SumList used to calculate aggregate values in the footer of the grid.</p>
<p><code v-pre>ExternalRecalc: Boolean</code>
The property specifies that the summation is an external method implemented in the DBGridEh.OnSumListRecalcAll event handler.</p>
<p><code v-pre>VirtualRecords: Boolean</code></p>
<p>Set this property to True to correctly calculate the positions of the vertical scrollbars for datasets that do not support or incorrectly returns the number of records through the property <code v-pre>DataSet.RecNo</code>.</p>
<br/>
DBGridEh events, related to the calculation of aggregate values in SumList'e:
<p><code v-pre>OnSumListRecalcAll</code></p>
<dd>
<p>The event is called when <code v-pre>DBGridEh.SumList.ExternalRecalc = True</code>. In the event handler is necessary to calculate the aggregate amount for the items in the collection and fill <code v-pre>DBGridEh.SumList.SumCollection</code> value <code v-pre>DBGridEh.SumList.SumCollection[i].SumValue</code>.</p>
</dd>
<p><code v-pre>OnSumListAfterRecalcAll</code></p>
<dd>The event is called after counting all aggregated values through SumList.</dd>
<br>
<p><code v-pre>TColumnEh.Footer</code> and <code v-pre>TSolumnEh.Footers[i]</code> elements have <code v-pre>TColumnFooterEh</code> type and contain the following properties:</p>
<p><code v-pre>Alignment: TAlignment</code></p>
<p>Alignment of a summed value in the cell footer.</p>
<p><code v-pre>Color: TColor</code></p>
<p>Color of a cell footer.</p>
<p><code v-pre>DisplayFormat: String</code></p>
<p>The format for displaying numbers</p>
<p><code v-pre>EndEllipsis: Boolean</code></p>
<p>Display ellipsis if text does not fit in a cell grid</p>
<p><code v-pre>FieldName: String</code></p>
<p>Name of the field to which it applies the aggregate function of certain properties ValueType</p>
<p><code v-pre>Font: TFont</code></p>
<p>Font of a cell footer</p>
<p><code v-pre>ToolTips: Boolean</code></p>
<p>Whether to display the tooltip window with a full text of the cell when user move the mouse on footer cell if the text does not fit into the cell.</p>
<p><code v-pre>Value: String</code></p>
<p>Static text that is displayed in the cell when a Footer.ValueType = fvtStaticText</p>
<p><code v-pre>ValueType: TFooterValueType</code></p>
<p>Type of output value, or summing function. The property may comprise the following values:
<code v-pre>fvtNon</code>, <code v-pre>fvtSum</code>, <code v-pre>fvtAvg</code>, <code v-pre>fvtCount</code>, <code v-pre>fvtFieldValue</code>, <code v-pre>fvtStaticText</code> , <code v-pre>fvtMin</code>, <code v-pre>fvtMax</code></p>
<p><code v-pre>WordWrap: Boolean</code></p>
<p>Wrap text, if it does not fit on one line in a footer cell.</p>
<p>Use <code v-pre>DBGridEh.OnGetFooterParams</code> event in order to control the parameters of the cell footer draw operation.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm2<span class="token punctuation">.</span>DBGridEh2GetFooterParams<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">;</span> DataCol<span class="token punctuation">,</span>
  Row<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> AFont<span class="token punctuation">:</span> TFont<span class="token punctuation">;</span> <span class="token keyword">var</span> Background<span class="token punctuation">:</span> TColor<span class="token punctuation">;</span>
  <span class="token keyword">var</span> Alignment<span class="token punctuation">:</span> TAlignment<span class="token punctuation">;</span> State<span class="token punctuation">:</span> TGridDrawState<span class="token punctuation">;</span> <span class="token keyword">var</span> Text<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>

<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the event you can change property values <code v-pre>AFont</code>, <code v-pre>Background</code>, <code v-pre>Alignment</code>, <code v-pre>Text</code> to change the text and text fortmat footer cell before rendering.
Use the following methods and properties when using the footer:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> TDBGridEh<span class="token punctuation">.</span>GetFooterValue<span class="token punctuation">(</span>Row<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The method returns a string value in the footer for a column definition. Parameter Row sets the row number footer (FooterRowCount be more than 1). Column specifies the column for which it is necessary to obtain the value of the footer.</p>
</div></template>


