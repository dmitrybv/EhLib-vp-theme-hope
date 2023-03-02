<template><div><h1 id="complex-formatting-in-grid-cells-lacontrols" tabindex="-1"><a class="header-anchor" href="#complex-formatting-in-grid-cells-lacontrols" aria-hidden="true">#</a> Complex formatting in grid cells (LaControls)</h1>
<p>This section describes the advanced formatting features in grid cells in EhLib 11.0.
The library contains a set of classes that allow you to set markup elements in grid cells. With simple formatting, elements are arranged in a flow from left-to-right one after another. There are also panel elements that allow you to specify more complex markup.
The developer creates template markup and assigns it to the TColumnEh.LaControlTemplate property of the grid. The grid propagates the template to all records in the column and substitutes the values of the DataSet fields so that each cell will be formatted based on the current record.
Here are examples of visual representations that can be created using LaControls elements.</p>
<p><img src="@source/images/clip0072.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0073.png" alt="" loading="lazy"></p>
<p>For examples of using LaControls elements, see the Demo project<br>
<code v-pre>&lt;EhLib Archive&gt;\Demos\LaObjects.MainDemo.</code></p>
<p>Features of creating LaControls elements
In the current version of the library, there is no special designer that would allow creating LaControls at design-time on the form.
The code that describes the creation and arrangement of elements is written in the pas form file and compiled as normal code.
For this reason, there is no way to get a preview of the positioned elements at design-time.</p>
<p>Example of markup description and object creation code.
In order for a grid cell to start rendering its content through LaControls elements, you need to create a template and assign it to the TColumnEh.LaControlTemplate property. The grid will use a template to render the contents of the cell for each grid entry.
The developer must create a template that contains a tree of elements. The tree describes the arrangement of elements relative to each other.
The template may contain references to DataSet fields. To do this, use the element's FieldName property. When rendered, the element will substitute the field value for each record in the DataSet.
Below is the code that creates a template and a single element tree that displays text from the DataSet field 'Species_Name'. The element has indents from the cell edges 10 on the left, 5 on the top, 5 on the right, 2 on the bottom.</p>
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
<p>This example does not contain complex formatting. We could implement this formatting without LaControls.
Consider now formatting using several LaControls and LaPаnels.
Panels can contain other controls or panels and arrange elements on them in a special way.
For example, the TLaStackPanelEh panel is used below, which unpacks the elements in itself from left to right or from top to bottom, depending on the TLaStackPanelEh.Orientation property.</p>
<p>// Variant 2. Simple TLaStackPanelEh</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">constructor</span> TfrOneFishFacts<span class="token punctuation">.</span>Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">:</span> TComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>Here we create a panel and add 3 TLaTextBlockEh elements to the panel. The panel arranges the elements one after the other from top to bottom. we set the panel property Orientation := TLaOrientation.Vertical.
Elements automatically fall into the panel i.e. In the CreateWith constructor, we set the RefSelf property, which points to the control itself. In this case, to TLaStackPanelEh.
Using the with statement, we can create a tree structure without creating separate variables for each element.
When formatted, each element report the size it needs to fit its content vertically and horizontally. In this case, the parent element also increases its size to accommodate nested elements. Ultimately, each grid cell can have its own individual height. The cell width is always set by the column width.</p>
<p>In the element tree, you can create the following simple elements:
TLaTextBlockEh
The layout element for displaying plain text.
TLaImageEh
Location element for displaying images
TLaFlowRichBlockEh
Placement element for text with the ability to set individual formatting for sections of text.</p>
<p>The library contains the following panel elements, which may contain other elements.</p>
<p>TLaGridPanelEh
Grid container. Arranges elements in panel cells with columns and rows.
TLaContentPanelEh
Container is a simple panel. Arranges multiple elements in the same area without a special layout algorithm.
TLaStackPanelEh
Container-stack panel. Arranges the element sequentially one after the other from left-to-right or top-to-bottom.</p>
<p>Below are also a few screenshots from which you can understand the possibilities of displaying complex data that this technology provides.</p>
<p><img src="@source/images/clip0075.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0078.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0079.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0080.png" alt="" loading="lazy"></p>
</div></template>


