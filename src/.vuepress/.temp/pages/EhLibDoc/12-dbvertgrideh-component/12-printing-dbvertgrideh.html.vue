<template><div><h1 id="printing-of-tdbvertgrideh" tabindex="-1"><a class="header-anchor" href="#printing-of-tdbvertgrideh" aria-hidden="true">#</a> Printing of TDBVertGridEh</h1>
<p>The <code v-pre>DBVertGridEh</code> components can be printed and previewed before printing.</p>
<p>See Demo project in the folder –
<code v-pre>DEMOS\PrintGrids</code></p>
<p>Use subproperties of <code v-pre>PrintService</code>  property  to configure and manage printing:</p>
<p>A set of properties and methods of <code v-pre>PrintService</code> property is identical for all components <code v-pre>TDBVertGridEh</code>, <code v-pre>TPivotGridEh</code> and <code v-pre>TPlannerControlEh</code>.
The property is accessible at Design-Time.</p>
<p><img src="@source/images/clip0039.png" alt="" loading="lazy"></p>
<p>PrintService property contains the following sub-properties:
property name	property type	Description
<code v-pre>ColorSchema</code>	TPrintColotSchemaEh	pcsFullColorEh - Full color
pcsAdaptedColorEh - Adapted for printing (for example, the dividing lines in this mode are always printed in black.)
pcsBlackAndWhiteEh - Fully black-and-white drawing.</p>
<p><code v-pre>FitToPagesTall: Integer</code>
When ScalingMode = smFitToPagesEh, FitToPagesTall specifies the number of pages that need to fit the contents of the height.</p>
<p><code v-pre>FitToPagesWide: Integer</code>
When ScalingMode = smFitToPagesEh, FitToPagesTall specifies the number of pages that need to fit the contents of the width.</p>
<p><code v-pre>Orientation: TPrinterOrientation</code>
poPortrait - Portrait orientation sheet.
poLandscape – Landscape page orientation.</p>
<p><code v-pre>PageFooter: TPageColontitleEh</code>
Specifies the texts that will appear in the footer of the page.</p>
<p><code v-pre>PageHeader: TPageColontitleEh</code>
Specifies the texts that will appear in the page header.</p>
<p><code v-pre>PageMargins: TPageMarginsEh</code> Indent and page headers and footers.</p>
<p><code v-pre>Scale: Integer</code>
It sets out a percentage. Default is 100.</p>
<p><code v-pre>ScalingMode: TScalingModeEh</code>
smAdjustToScaleEh - Scale using the FitToPagesTall and FitToPagesWide properties.
smFitToPagesEh - Scale using the Scale property.</p>
<p><code v-pre>TextAfterContent: TRichStringEh</code>
Rich Text to be printed before the contents of the grid.
<code v-pre>TextBeforeContent: TRichStringEh</code>
Rich Text to be printed after the contents of the grid.</p>
<p>Use <code v-pre>PrintService.Print</code> and <code v-pre>PrintService.Preview</code> methods to print components  at Runtime:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  DBVertGridEh1<span class="token punctuation">.</span>PrintService<span class="token punctuation">.</span>Preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use the properties for the print settings as follows:
The header and footer of the page:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>    <span class="token keyword">property</span> PrintService<span class="token punctuation">.</span>PageFooter<span class="token punctuation">;</span>
    <span class="token keyword">property</span> PrintService<span class="token punctuation">.</span>PageHeader<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/clip0040.png" alt="" loading="lazy"></p>
<p>Page margins</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>    <span class="token keyword">property</span> PrintService<span class="token punctuation">.</span>PageMargins<span class="token punctuation">:</span> TPageMarginsEh<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/images/clip0041.png" alt="" loading="lazy"></p>
<p>Orientation and Scaling:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> ColorSchema<span class="token punctuation">:</span> TPrintColotSchemaEh<span class="token punctuation">;</span>
<span class="token keyword">property</span> FitToPagesTall<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">property</span> FitToPagesWide<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">property</span> Orientation<span class="token punctuation">:</span> TPrinterOrientation<span class="token punctuation">;</span>
<span class="token keyword">property</span> Scale<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">property</span> ScalingMode<span class="token punctuation">:</span> TScalingModeEh<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/clip0042.png" alt="" loading="lazy"></p>
<p>PrintService property contains the following events:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>OnBeforePrint<span class="token punctuation">;</span>
OnBeforePrintPage<span class="token punctuation">;</span>
OnBeforePrintPageContent<span class="token punctuation">;</span>
OnPrintDataBeforeGrid<span class="token punctuation">;</span>
OnCalcLayoutDataBeforeGrid<span class="token punctuation">;</span>

OnAfterPrint<span class="token punctuation">;</span>
OnAfterPrintPage<span class="token punctuation">;</span>
OnAfterPrintPageContent<span class="token punctuation">;</span>
OnPrintDataAfterGrid<span class="token punctuation">;</span>
OnCalcLayoutDataAfterGrid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


