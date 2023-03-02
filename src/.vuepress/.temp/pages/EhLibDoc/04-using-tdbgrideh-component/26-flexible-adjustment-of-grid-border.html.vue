<template><div><h1 id="flexible-adjustment-of-color-and-the-presence-of-the-border-of-the-client-area-grid" tabindex="-1"><a class="header-anchor" href="#flexible-adjustment-of-color-and-the-presence-of-the-border-of-the-client-area-grid" aria-hidden="true">#</a> Flexible adjustment of color and the presence of the border of the client area Grid</h1>
<p>DBGridEh allows you to customize the color and display side border (Border) of the client area Grid.</p>
<p><img src="@source/images/clip0055.png" alt="" loading="lazy"></p>
<p>Sub-properties of TDBGridEh.Border property:</p>
<p><code v-pre>Color: Boolean</code></p>
<dl><dd>
Background color fringing.
</dd></dl>
<p><code v-pre>Ctl3D: Boolean</code></p>
<dl><dd>
Specifies that the line shall be drawn in 3D. Top and left border darker color. Bottom and right lighter.
</dd></dl>
<p><code v-pre>EdgeBorders: TEdgeBorders</code></p>
<dl><dd>
EdgeBorders property is set (set) that indicates which side of border drawn. A set can contain a combination of the following - ebLeft, ebTop, ebRight, ebBottom.
</dd></dl>
<p><code v-pre>ExtendedDraw: Boolean</code></p>
<dl><dd>
<p>Use ExtendedDraw property to establish that border will be drawn through the inner grid instead by standard features of the functional Windows.
Color properties and EdgeBorders are taken into account only when <code v-pre>ExtendedDraw = True</code>.</p>
</dd></dl>
<p><code v-pre>Style: TBorderStyle</code></p>
<dl><dd>
Style edging. It can take values bsNone and bsSingle.
</dd></dl>
</div></template>


