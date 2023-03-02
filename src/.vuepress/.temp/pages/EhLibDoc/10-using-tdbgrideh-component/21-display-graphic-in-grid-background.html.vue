<template><div><h1 id="display-graphic-in-grid-background" tabindex="-1"><a class="header-anchor" href="#display-graphic-in-grid-background" aria-hidden="true">#</a> Display graphic in grid background</h1>
<p><code v-pre>DBGridEh</code> lets you display a static image (type <code v-pre>TPicture</code>) in the background of the client area of the grid.</p>
<p><img src="@source/images/clip0020.png" alt="" loading="lazy"></p>
<p>To customize the display graphic background use BackgroundData properties <code v-pre>DBGridEh.BackgroundData</code>.
<code v-pre>DBGridEh.BackgroundData: TDBGridBackgroundDataEh</code></p>
<p><code v-pre>Visible: Boolean</code></p>
<dd>Specifies whether the Background Pciture is visible in the grid.</dd>
<p><code v-pre>Picture: TPicture</code></p>
<dd>The Pciture to draw as a Background Data.</dd>
<p><code v-pre>Placement: TImagePlacementEh</code></p>
<p><code v-pre>ImagePlacementEh = (ipTopLeftEh, ipTopCenterEh, ipTopRightEh, ipCenterLeftEh, ipCenterCenterEh, ipCenterRightEh, ipBottomLeftEh, ipBottomCenterEh, ipBottomRightEh, ipFillEh, ipFitEh, ipStretchEh, ipTileEh);</code></p>
<dd>Specifies the position of the image and the way of filling the free space</dd>
<p><code v-pre>HorzMargin: Integer</code></p>
<dd>Horizontal Shift</dd>
<p><code v-pre>VertMargin: Integer</code></p>
<dd>Vertical Shift</dd>
<p><code v-pre>ExcludeTitle: Boolean</code></p>
<dd>Delete the title of the fill graphic background.</dd>
<p><code v-pre>ExcludeIndicator: Boolean</code></p>
<dd>Delete button from the fill graphic background.</dd>
<p><code v-pre>ExcludeFooter: Boolean</code></p>
<dd>Delete the footer of the fill graphic background.</dd>
</div></template>


