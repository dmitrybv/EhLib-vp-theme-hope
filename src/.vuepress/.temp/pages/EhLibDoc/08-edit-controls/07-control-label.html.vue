<template><div><h1 id="controllabel-signature-for-the-control-data-editing" tabindex="-1"><a class="header-anchor" href="#controllabel-signature-for-the-control-data-editing" aria-hidden="true">#</a> ControlLabel - signature for the &quot;control&quot; data editing</h1>
<p>The <code v-pre>TDBEditEh</code>, <code v-pre>TDBNumberEditEh</code>, <code v-pre>TDBComboBoxEh</code>, <code v-pre>TDBMemoEh</code>, <code v-pre>TDBLookupComboboxEh</code>, <code v-pre>TDBImageEh</code>, <code v-pre>TDBRichEditEh</code> components are added <code v-pre>ControlLabel</code> property – the text next to the editing control. <code v-pre>ControlLabel</code> a class of type <code v-pre>TLabel</code>, which retain their position on the master control when moving the control to which it is attached. The combination of <code v-pre>TDBEditEh</code> + <code v-pre>ControlLabel</code> built on the principle of a standard control - <code v-pre>TLabeledEdit</code>.
Default <code v-pre>ControlLabel</code> is not visible. To make <code v-pre>ControlLabel</code> visible set <code v-pre>EditControl.ControlLabel.Visible</code> property to <code v-pre>True</code>.
If <code v-pre>EditControl</code> is tied to the database field, it displays the title <code v-pre>ControlLabel</code> field of <code v-pre>Field.DisplayName</code> property.
To adjust the location of <code v-pre>ControlLabel</code> use subproperties of <code v-pre>ControlLabelLocation</code> property:</p>
<p><code v-pre>property Position: TLabelPositionEh</code></p>
<dd>
  position relative to the master control.
<p><code v-pre>TLabelPositionEh = (lpAboveLeftEh, lpAboveCenterEh, lpAboveRightEh, lpBelowLeftEh, lpBelowCenterEh, lpBelowRightEh, lpLeftTopEh, lpLeftTextBaselineEh, lpLeftCenterEh, lpLeftBottomEh, lpRightTopEh, lpRightTextBaselineEh, lpRightCenterEh, lpRightBottomEh);</code></p>
</dd>
<p>property Spacing: Integer</p>
<dd>offset from the master control for the first axes.</dd>
<p>property Offset: Integer</p>
<dd>offset relative to the second coordinate axis of the master control.</dd>
<p>property LabelSpacingBound: TSpacingBoundEh</p>
<dd>Label Sets the border controls with respect to which the measured distance specified property Spacing. 
<p><code v-pre>TSpacingBoundEh = (sbNearBoundEh, sbFarBoundEh);</code></p>
<p><code v-pre>sbNearBoundEh</code> – Spacing the distance is relative to the brink of near-Label control.</p>
<p><code v-pre>sbFarBoundEh</code> – Spacing The distance is relative to the far verge Label control.</p>
</dd>
<br>
<p>Below are the typical set of values of ControlLabelLocation subproperties:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>ControlLabelLocation<span class="token punctuation">.</span>LabelSpacingBound <span class="token operator">=</span> sbNearBoundEh
ControlLabelLocation<span class="token punctuation">.</span>Spacing <span class="token operator">=</span> <span class="token number">3</span>
ControlLabelLocation<span class="token punctuation">.</span>Position <span class="token operator">=</span> lpAboveLeftEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/clip0051.png" alt="" loading="lazy">
<br>
<br></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>ControlLabelLocation<span class="token punctuation">.</span>LabelSpacingBound <span class="token operator">=</span> sbNearBoundEh
ControlLabelLocation<span class="token punctuation">.</span>Spacing <span class="token operator">=</span> <span class="token number">3</span>
ControlLabelLocation<span class="token punctuation">.</span>Position <span class="token operator">=</span> lpLeftTextBaselineEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/clip0052.png" alt="" loading="lazy">
<br>
<br></p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>ControlLabelLocation<span class="token punctuation">.</span>LabelSpacingBound <span class="token operator">=</span> sbFarBoundEh
ControlLabelLocation<span class="token punctuation">.</span>Spacing <span class="token operator">=</span> <span class="token number">80</span>
ControlLabelLocation<span class="token punctuation">.</span>Position <span class="token operator">=</span> lpLeftTextBaselineEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/images/clip0053.png" alt="" loading="lazy"></p>
</div></template>


