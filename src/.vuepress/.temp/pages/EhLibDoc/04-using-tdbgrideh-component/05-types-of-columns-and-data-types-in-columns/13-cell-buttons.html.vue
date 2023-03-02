<template><div><h1 id="edit-button-at-the-cell-level-cellbuttons-collection" tabindex="-1"><a class="header-anchor" href="#edit-button-at-the-cell-level-cellbuttons-collection" aria-hidden="true">#</a> Edit button at the cell level. CellButtons collection</h1>
<p>In the columns of the grid - <code v-pre>TColumnEh</code> and vertical grid rows - <code v-pre>TFieldRow</code> there is a collection of buttons - <code v-pre>CellButtons</code>.
The collection contains <code v-pre>TCellButtonEh</code> type elements. <code v-pre>CellButton</code> element specifies the button in the grid cell. <code v-pre>CellButton</code> element is similar to <code v-pre>EditButton</code> element (edit button), but unlike the EditButton is pressed without opening a text editor. Set of <code v-pre>TCellButtonEh</code> properties are similar to a list of properties in <code v-pre>TEditButtonEh</code> and have additional properties.</p>
<p><img src="@source/images/DBGridEh.CellButton1.png" alt="" loading="lazy"></p>
<p><img src="@source/images/DBGridEh.CellButton2.png" alt="" loading="lazy"></p>
<p><img src="@source/images/DBGridEh.CellButton3.png" alt="" loading="lazy"></p>
<p>It is also possible to display button face in the cells content area.
To do this, set the <code v-pre>CellButton.HorzPlacement</code> property to <code v-pre>ebhpInContentEh</code>.</p>
<p>In the following screenshot, the first column displays three <code v-pre>CellButtons</code> with the <code v-pre>CellButton.HorzPlacement = ebhpInContentEh</code> property set. Using the <code v-pre>CellButton.OnGetEnabledState</code> event, properties are set to deactivate buttons depending on the editing status of the current record.</p>
<p><img src="@source/images/DBGridEh.CellButton4.png" alt="" loading="lazy"></p>
<p><code v-pre>TCellButtonEh</code> has next additional properties and events:</p>
<h5 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties:</h5>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> HorzPlacement<span class="token punctuation">:</span> TEditButtonHorzPlacementEh <span class="token keyword">default</span> ebhpRightEh<span class="token punctuation">;</span>
</code></pre></div><dd>
<p>It specifies the location of the buttons in the grid cell horizontally.
<code v-pre>TEditButtonHorzPlacementEh</code> type has the following values:</p>
<p><code v-pre>ebhpLeftEh</code> - button is aligned to the left edge of the cell.</p>
<p><code v-pre>ebhpRightEh</code> - button is aligned to the right edge of the cell.</p>
<p><code v-pre>ebhpInContentEh</code> - The button is displayed in the content area of the cell. In this case, the cell content specified by the TColumnEh.FieldName property is not displayed.</p>
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> AutoFade<span class="token punctuation">:</span> Boolean
</code></pre></div><dd>
<p>Make the button image faded when the mouse cursor is not over the button. The default is <code v-pre>True</code>.</p>
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> Caption<span class="token punctuation">:</span> <span class="token keyword">String</span>
</code></pre></div><dd>
<p>The content of the button as text. If this property is set, then the button icon specified by the <code v-pre>Style</code> property is not used.</p>
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> Margins<span class="token punctuation">:</span> TPaddings
</code></pre></div><dd>
Padding from the edges of the button.
</dd><br>
<h5 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events:</h5>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnGetEnabledState<span class="token punctuation">:</span> TCellButtonGetEnabledStateEventEh<span class="token punctuation">;</span>

<span class="token keyword">type</span>  
  TCellButtonGetEnabledStateEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>Grid<span class="token punctuation">:</span> TCustomDBAxisGridEh<span class="token punctuation">;</span> 
  AxisBar<span class="token punctuation">:</span> TAxisBarEh<span class="token punctuation">;</span> CellButton<span class="token punctuation">:</span> TCellButtonEh<span class="token punctuation">;</span> 
  <span class="token keyword">var</span> ButtonEnabled<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre></div><dd>
<p>The event is called for every record in the grid. You can set <code v-pre>ButtonEnabled</code> property to set that particular record button is not available for the press. In this case, it will be drawn in the <code v-pre>Disabled</code> styles.</p>
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnDraw<span class="token punctuation">:</span> TDrawCellButtonEventEh<span class="token punctuation">;</span>

  <span class="token keyword">type</span>  TDrawCellButtonEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>Grid<span class="token punctuation">:</span> TCustomDBAxisGridEh<span class="token punctuation">;</span> 
    AxisBar<span class="token punctuation">:</span> TAxisBarEh<span class="token punctuation">;</span> CellButton<span class="token punctuation">:</span> TCellButtonEh<span class="token punctuation">;</span> Canvas<span class="token punctuation">:</span> TCanvas<span class="token punctuation">;</span> 
    Cell<span class="token punctuation">,</span> AreaCell<span class="token punctuation">:</span> TGridCoord<span class="token punctuation">;</span> <span class="token keyword">const</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span> 
    ButtonDrawParams<span class="token punctuation">:</span> TCellButtonDrawParamsEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Handled<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre></div><dd>
<p>The event is called when rendering the button in a grid cell. In the event you can specify the parameters of the rendering by assigning the appropriate properties in <code v-pre>ButtonDrawParams</code> parameter, or you yourself can draw the image button, or you can call the default method of rendering - <code v-pre>CellButton</code>.<code v-pre>DefaultDrawEditButton</code>. In the second and third case, set the <code v-pre>Handled</code> parameter to True to prevent the grid drawing the cell after the event.</p>
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnMouseClick<span class="token punctuation">:</span> TMouseCellButtonEventEh<span class="token punctuation">;</span>
</code></pre></div><dd>
This event is fired when pressing the mouse button.
</dd><br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnMouseDown<span class="token punctuation">:</span> TMouseCellButtonEventEh<span class="token punctuation">;</span>
</code></pre></div><dd>
<p>Event is fired when the button is clicked with the mouse.</p>
</dd><br>
<p>See example of using CellButtons in the Project:</p>
<p><code v-pre>Demos\DBGridEh.CellButtons\Project1.dpr</code></p>
</div></template>


