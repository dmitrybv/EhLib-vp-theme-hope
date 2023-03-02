<template><div><h1 id="setting-color-dividing-lines-the-presence-absence-of-lines-in-various-areas-grid" tabindex="-1"><a class="header-anchor" href="#setting-color-dividing-lines-the-presence-absence-of-lines-in-various-areas-grid" aria-hidden="true">#</a> Setting color dividing lines, the presence / absence of lines in various areas Grid</h1>
<p>It is possible to set the color and determine the presence or absence of dividing lines for the grid in general and for specific areas including the header area of the indicator area <code v-pre>SubtitleFilter</code>, data area and basement area (footer).</p>
<p>Next properties are responsible for the presence of lines and colors in the grid:</p>
<p>Presence / absence of values dgColLines, dgRowLines in property TDBGridEh.Options:</p>
<p>Set the presence of vertical and horizontal lines for the Grid in general.</p>
<p>Sub-properties of the property <code v-pre>TDBGridEh.GridLineParams</code>:</p>
<p>Using sub-properties of this property you can control the color of the dark lines in the grid (DarkColor) and the color of bright lines (BrightColor), the color of the lines in the data, the presence of lines of data, and the color scheme of the lines.</p>
<p>Sub-properties of the property TDBGridEh.GridLineParams:</p>
<p><code v-pre>DarkColor: TColor</code></p>
<p>Color dark lines. Used for areas of fixed cells, as well as areas within the meaning of which is meant shading dark lines.
clDefault value determines what color will be determined automatically based on the current color scheme, the properties of Grid.Flat and activity of global change <code v-pre>Themes.Active</code></p>
<p><code v-pre>BrightColor: TColor</code></p>
<p>Color bright lines. Used for data areas, and areas within the meaning of which is meant shading light lines.
clDefault value determines the color will be automatically detected similarly DarkColor</p>
<p><code v-pre>DataVertColor: TColor</code>
Color vertical lines in the data area</p>
<p><code v-pre>DataVertLines: Boolean</code>
The existence of vertical lines in the data.</p>
<p><code v-pre>DataHorzColor: TColor</code>
Color of the horizontal lines in the data area.</p>
<p><code v-pre>DataHorzLines: Boolean</code>
The presence of horizontal lines in the data.</p>
<p><code v-pre>DataBoundaryColor: TColor</code>
Painted boundary lines grid (not to be confused with the client area) color DarkColor.</p>
<p><code v-pre>GridBoundaries: Boolean</code>
Paint boundary lines grid (not to be confused with the client area) color DarkColor</p>
<p><code v-pre>ColorScheme: TDBGridLinesColorSchemeEh</code>
Property determines the color scheme used to draw the dividing lines for which a color clDefault.
Property can contain the following values:
glcsDefaultEh - Use the default color scheme.
glcsClassicEh - The classic filling.Black lines for fixed areas. Gray lines for the data area.
glcsFlatEh - On
glcsThemedEh -</p>
<p><code v-pre>VertEmptySpaceStyle: TDrawEmptySpaceStyle</code></p>
<dd>
<p><code v-pre>VertEmptySpaceStyle</code> property specifies the mode of filling lines and columns for the empty space between the last record of the grid and the bottom of the window.
Property can contain the following values:</p>
  <dd>
<p><code v-pre>dessNonEh</code> - Do not paint.</p>
<p><code v-pre>dessSolidEh</code> - Use solid dividing lines and colors of the columns.</p>
<p><code v-pre>dessGradiendEh</code> - use gradient shading solid dividing lines and colors of the columns.</p>
  </dd>
</dd>
<p>The colors and the lines in the header area:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>TitleParams<span class="token punctuation">.</span>VertLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>TitleParams<span class="token punctuation">.</span>VertLines<span class="token punctuation">:</span> Boolean
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>TitleParams<span class="token punctuation">.</span>HorzLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>TitleParams<span class="token punctuation">.</span>HorzLines<span class="token punctuation">:</span> Boolean
</code></pre></div><p>The colors and the lines in the display:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>IndicatorParams<span class="token punctuation">.</span>HorzLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>IndicatorParams<span class="token punctuation">.</span>HorzLines<span class="token punctuation">:</span> Boolean
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>IndicatorParams<span class="token punctuation">.</span>VertLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>IndicatorParams<span class="token punctuation">.</span>VertLines<span class="token punctuation">:</span> Boolean
</code></pre></div><p>The colors and the lines in the basement (footer):</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>FooterParams<span class="token punctuation">.</span>HorzLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>FooterParams<span class="token punctuation">.</span>HorzLines<span class="token punctuation">:</span> Boolean
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>FooterParams<span class="token punctuation">.</span>VertLineColor<span class="token punctuation">:</span> TColor
    <span class="token keyword">property</span> TDBGridEh<span class="token punctuation">.</span>FooterParams<span class="token punctuation">.</span>VertLines<span class="token punctuation">:</span> Boolean
</code></pre></div></div></template>


