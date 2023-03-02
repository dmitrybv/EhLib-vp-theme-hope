<template><div><h1 id="customizing-indicator-column" tabindex="-1"><a class="header-anchor" href="#customizing-indicator-column" aria-hidden="true">#</a> Customizing Indicator column</h1>
<p>The Indicator Column is usually shown at the very left part of the Grid and is colored in red color (The color varieties depending of current color scheme in the Windows). The Indicator Column can display such information as: Indicator of the current record (Is shown as triangular), State of editing, the number of the current record and checkbox of selected record. Use properties of  TDBGridEh.IndicatorOptions property to customize the Indicator Column.</p>
<p><img src="@source/images/clip0030.png" alt="" loading="lazy"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TDBGridEhIndicatorOptions = set of TDBGridEhIndicatorOption;
TDBGridEhIndicatorOption = (gioShowRowIndicatorEh, gioShowRecNoEh, 
  gioShowRowselCheckboxesEh);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>gioShowRowIndicatorEh</code></p>
<dd>Display indicator of current record in the indicator column.</dd>
<p><code v-pre>gioShowRecNoEh</code></p>
<dd>Display the number of the current record in the indicator column. This property works only for DataSets that support IsSequenced mode (See Help about TDataSet.IsSequenced).</dd>
<p><code v-pre>gioShowRowselCheckboxesEh</code></p>
<dd>Display checkbox of selected record. At runtime, user can select records by clicking on check-boxes. Bookmarks of selected records are stored in the TDBGridEh.SelectedRows or TDBGridEh.Selection.Rows collection.</dd>
<br>
<p>Use the next sub-properties of <code v-pre>TDBGridEh.IndicatorParams</code> property to customize the display of the indicator column:</p>
<p><code v-pre>Color: TColor</code></p>
<dd>Specifies the background color for the indicator color.</dd>
<p><code v-pre>HorzLineColor: TColor</code></p>
<dd>Color of the horizontal lines in the data area.</dd>
<p><code v-pre>HorzLines: Boolean</code></p>
<dd>Presence of horizontal lines in the data area.</dd>
<p><code v-pre>VertLineColor: TColor</code></p>
<dd>Color vertical lines in the data area.</dd>
<p><code v-pre>VertLines: Boolean</code></p>
<dd>Presence of vertical lines in the data area.</dd>
<p><code v-pre>FillStyle: TGridCellFillStyleEh</code></p>
<dd>Specifies the style of filling the indicator cells.</dd>
<p><code v-pre>RecNoShowStep: Integer</code></p>
<dd>
<p>If set to <code v-pre>gioShowRecNoEh</code> IndicatorOptions (Also the same as in <code v-pre>dghShowRecNo</code> OptionsEh), then this property specifies step with which to show record numbers in the column display. For records that fall between steps, the record number is displayed instead of a point. This eliminates the effect of &quot;flickering&quot; numbers, which can occur when displaying each record number.</p>
</dd>
</div></template>


