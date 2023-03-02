<template><div><h1 id="complex-formatting-in-grid-cells-lacontrols" tabindex="-1"><a class="header-anchor" href="#complex-formatting-in-grid-cells-lacontrols" aria-hidden="true">#</a> Complex formatting in grid cells (LaControls)</h1>
<p>This section describes the advanced formatting features in grid cells in EhLib version 11.0 or higher.</p>
<p>There are a mechanism for creating visual cells with complex formatting to DBGridEh.
In grid cells, this formatting looks like <code v-pre>RichText</code> or <code v-pre>HTML</code> text.</p>
<p>At the same time, the formatting is not based on either the Rtf format or the HTML markup.</p>
<p>Formatting is based on internal classes that describe the layout of the elements inside the cell.
For formatting, special Layout Controls are used (Location elements, LaControls)</p>
<p>Here are examples of visual representations that can be created using LaControls elements.</p>
<p><img src="@source/images/clip0072.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0073.png" alt="" loading="lazy"></p>
<p>For examples of using LaControls elements, see the Demo project<br>
<code v-pre>&lt;EhLib Archive&gt;\Demos\LaObjects.MainDemo.</code></p>
<h4 id="creating-a-lacontrols-element-tree-template" tabindex="-1"><a class="header-anchor" href="#creating-a-lacontrols-element-tree-template" aria-hidden="true">#</a> Creating a LaControls Element Tree Template.</h4>
<p>In order for a grid cell to start rendering its content through LaControls elements, you need to create a placement description template and assign it to the <code v-pre>TColumnEh.LaControlTemplate</code> property. The grid will use a template to render the contents of the cell for each grid entry.</p>
<p>The template may contain references to DataSet fields. To do this, use the element's FieldName property. When rendered, the element will substitute the field value for each record in the DataSet.</p>
<p>In the current implementation, the library supports the creation of a tree of elements only in the program code. Working with elements in Design-time is not supported.</p>
<p>Below is a simple example of creating an element tree.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">constructor</span> TfrOneFishFacts<span class="token punctuation">.</span>Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">:</span> TComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  ALaControl<span class="token punctuation">:</span> TLaObjectEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">inherited</span> Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token keyword">with</span> TLaTextBlockEh<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    FieldName <span class="token operator">:=</span> <span class="token string">'Species_Name'</span><span class="token punctuation">;</span>
    Margins<span class="token punctuation">.</span>SetBounds<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    ALaControl <span class="token operator">:=</span> RefSelf<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
 
  DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>LaControlTemplate <span class="token operator">:=</span> ALaControl<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>The result will look like this:</p>
<p><img src="@source/images/clip0074.png" alt="" loading="lazy"></p>
<p>In this example, we've created one LaControl of type TLaTextBlock , set padding from the edge of the cell, and specified that the LaControl should output values from the <code v-pre>'Species_Name'</code> field. Then we use this LaControl as a template for the <code v-pre>DBGridEh1.Columns[0]</code> column.</p>
<p>This example does not contain complex formatting. We could implement this formatting without LaControls. But for the first time this is enough. In any case, we can already set the margins from the edges of the cell through the Margins property.</p>
<h4 id="panels" tabindex="-1"><a class="header-anchor" href="#panels" aria-hidden="true">#</a> Panels</h4>
<p>Panels allow you to group several elements into a group and arrange them on the screen according to certain rules.</p>
<p>In the current implementation, the library contains three types of panels:</p>
<ul>
<li><code v-pre>TLaContentPanelEh</code> - Simple panel container. Arranges multiple elements in the same area without a special layout algorithm.</li>
<li><code v-pre>TLaStackPanelEh</code> - Container stack panel. Arranges the element sequentially one after the other from left-to-right or top-to-bottom.</li>
<li><code v-pre>TLaGridPanelEh</code> - Gridpanel container. Arranges elements in panel cells with columns and rows.</li>
</ul>
<p>Consider the use case of the TLaStackPanelEh element.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token comment">// Variant 2. Simple TLaStackPanelEh</span>
<span class="token keyword">constructor</span> TfrOneFishFacts<span class="token punctuation">.</span>Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">:</span> TComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  ALaControl<span class="token punctuation">:</span> TLaObjectEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">inherited</span> Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token keyword">with</span> TLaStackPanelEh<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    Orientation <span class="token operator">:=</span> TLaOrientation<span class="token punctuation">.</span>Vertical<span class="token punctuation">;</span>
 
    <span class="token keyword">with</span> TLaTextBlockEh<span class="token punctuation">.</span>CreateWith<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">,</span> RefSelf<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">begin</span>
      FieldName <span class="token operator">:=</span> <span class="token string">'Species_Name'</span><span class="token punctuation">;</span>
      Margins<span class="token punctuation">.</span>SetBounds<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
 
    <span class="token keyword">with</span> TLaTextBlockEh<span class="token punctuation">.</span>CreateWith<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">,</span> RefSelf<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">begin</span>
      FieldName <span class="token operator">:=</span> <span class="token string">'Category'</span><span class="token punctuation">;</span>
      Margins<span class="token punctuation">.</span>SetBounds<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
 
    <span class="token keyword">with</span> TLaTextBlockEh<span class="token punctuation">.</span>CreateWith<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">,</span> RefSelf<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">begin</span>
      Text <span class="token operator">:=</span> <span class="token string">'Static Text'</span><span class="token punctuation">;</span>
      Font<span class="token punctuation">.</span>Style <span class="token operator">:=</span> <span class="token punctuation">[</span>fsBold<span class="token punctuation">]</span><span class="token punctuation">;</span>
      Margins<span class="token punctuation">.</span>SetBounds<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
 
    ALaControl <span class="token operator">:=</span> RefSelf<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
 
  DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>LaControlTemplate <span class="token operator">:=</span> ALaControl<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>The result will look like this:</p>
<p><img src="@source/images/clip0075.png" alt="" loading="lazy"></p>
<p>Here, the with statement and the special CreateWith constructor are used to add nested elements.</p>
<p>Here is a list of available elements and panels of the library.</p>
<p><code v-pre>TLaObjectEh</code><br>
    Unit: <code v-pre>LaObjectsEh</code></p>
<dd>Base element for all placement elements.</dd>
<p><code v-pre>TLaControlEh</code><br>
    Unit: <code v-pre>LaControlsEh</code></p>
<dd>Placement element with font, padding and border rendering settings.</dd>
<p><code v-pre>TLaTextBlockEh</code><br>
    Unit: <code v-pre>LaControlsEh</code></p>
<dd>Placement element to display plain text.</dd>
<p><code v-pre>TLaImageEh</code><br>
    Unit: <code v-pre>LaControlsEh</code></p>
<dd>Placement element for displaying pictures.</dd>
<p><code v-pre>TLaFlowRichBlockEh</code><br>
    Unit: <code v-pre>LaFlowRichBlocksEh</code></p>
<dd>Placement element for text with the ability to set individual formatting for sections of text.</dd>
<p><code v-pre>TLaGridPanelEh</code><br>
    Unit: <code v-pre>LaGridPanelsEh</code></p>
<dd>Grid container. Arranges elements in panel cells with columns and rows.</dd>
<p><code v-pre>TLaContentPanelEh</code><br>
    Unit: <code v-pre>LaPanelsEh</code></p>
<dd>The container is a simple panel. Arranges multiple elements in the same area without a special layout algorithm.</dd>
<p><code v-pre>TLaStackPanelEh</code><br>
    Unit: <code v-pre>LaPanelsEh</code></p>
<dd>Container-stack panel. Arranges the element sequentially one after the other from left-to-right or top-to-bottom.</dd>
<p><code v-pre>TLaHintWindowEh</code><br>
    Unit: <code v-pre>LaHintWindows</code></p>
<dd>Window for displaying hints with the ability to format content through LaControls.</dd>
<p><code v-pre>LaObjectTreeViewForms</code></p>
<dd>Window for tree view of LaControls location and property of each element at Run-time. Used to test the display of a complex set of elements.</dd>
<p>Below are also a few screenshots from which you can understand the possibilities of displaying complex data that this technology provides.</p>
<p><img src="@source/images/clip0075.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0078.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0079.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0080.png" alt="" loading="lazy"></p>
</div></template>


