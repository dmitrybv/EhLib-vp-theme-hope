<template><div><h1 id="events-and-properties-to-control-the-reaction-of-the-mouse" tabindex="-1"><a class="header-anchor" href="#events-and-properties-to-control-the-reaction-of-the-mouse" aria-hidden="true">#</a> Events and properties to control the reaction of the mouse</h1>
<p>The grid contains the standard event <code v-pre>OnMouseDown</code>; <code v-pre>OnMouseMove</code>; <code v-pre>OnMouseUp</code>; to handle mouse events.
In the event you can use the following methods to determine the number of the cell that worked Event</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> MouseCoord<span class="token punctuation">(</span>X<span class="token punctuation">,</span> Y<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">:</span> TGridCoord<span class="token punctuation">;</span>
</code></pre></div><p>function returns the position of the cell in the coordinates of the client area of the grid.
If <code v-pre>X, Y</code> coordinates do not fall in a cell, one of the values or <code v-pre>TGridCoord.X</code> <code v-pre>TGridCoord.Y</code> will be <code v-pre>-1</code>.</p>
<p>Grid provides a set of events in which the coordinates are transmitted cells in which there was a click.</p>
<p><code v-pre>TDBGridEh.OnCellClick</code></p>
<dd>
The event occurs only when you click on the cells in the data section.
The event is passed a column Column: TColumnEh, which clicked. 
</dd>
<br>
<p><code v-pre>TDBGridEh.OnCellMouseClick</code></p>
<dd>
The event occurs when user clicks any cell in the grid.
The event have the following parameters
<p><code v-pre>Grid: TCustomGridEh</code>	Grid in which the event occurred
Cell: TGridCoord		The cell in which the event occurred</p>
<p><code v-pre>Button: TMouseButton</code>	Type of pressed button</p>
<p><code v-pre>Shift: TShiftState;</code> 	State of additional buttons</p>
<p><code v-pre>X, Y: Integer;</code> 		The coordinates of the mouse relative to the cell</p>
<p><code v-pre>var Processed: Boolean</code>	Set Processed in True to indicate that you have been treated in a reaction event and call the default handler is not necessary.</p>
<p>In the event you can call the default handler - <code v-pre>TCustomGridEh.DefaultCellMouseClick</code>.</p>
</dd>
<p>Useful methods and properties for obtaining data on the area of the grid in which the event occurred:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> GetCellAreaType<span class="token punctuation">(</span>ACol<span class="token punctuation">,</span> ARow<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> 
  <span class="token keyword">var</span> AreaCol<span class="token punctuation">,</span> AreaRow<span class="token punctuation">:</span> Integer<span class="token punctuation">)</span><span class="token punctuation">:</span> TCellAreaTypeEh<span class="token punctuation">;</span>
</code></pre></div><p>get the type of horizontal and vertical grid area in which the event occurred.
Horizontally the grid is divided into the following areas:</p>
<dd>
<p><code v-pre>hctIndicatorEh</code>	Indicator area</p>
<p><code v-pre>hctDataEh</code> 		Data area</p>
</dd>
<p>Vertically the grid is divided into the following areas:</p>
 <dd>
<p><code v-pre>vctTitleEh</code>		header area</p>
<p><code v-pre>vctSubTitleEh</code>		The area under the heading filter</p>
<p><code v-pre>vctDataEh</code>		data area</p>
<p><code v-pre>vctAboveFooterEh</code>	The area between the footer and data</p>
<p><code v-pre>vctFooterEh</code>		footer area</p>
  </dd>
<br>
<p><code v-pre>TDBGridEh.OnGetBtnParams</code></p>
<dd>Event occurs by clicking on the header and is used for special painting of a pressed title.</dd>
<p><code v-pre>TDBGridEh.OnTitleBtnClick</code></p>
<dd>The event is called when you click in the header area that is configured to work as a button. To trigger events in the header the Column.Title.TitleButton property should be set to True.</dd>
<p><code v-pre>TDBGridEh.OnTitleClick</code></p>
<dd>The event is called when you click in the header area.</dd>
</div></template>


