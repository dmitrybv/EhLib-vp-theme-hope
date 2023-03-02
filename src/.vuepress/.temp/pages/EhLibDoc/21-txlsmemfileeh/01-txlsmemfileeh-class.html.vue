<template><div><h1 id="txlsmemfileeh-class-for-creating-xlsx-files-without-the-participation-of-installed-msoffice-modules" tabindex="-1"><a class="header-anchor" href="#txlsmemfileeh-class-for-creating-xlsx-files-without-the-participation-of-installed-msoffice-modules" aria-hidden="true">#</a> TXlsMemFileEh - class for creating Xlsx files without the participation of installed MSOffice modules</h1>
<p>There is a class in the library - <code v-pre>TXlsMemFileEh</code>, which allows you to create <code v-pre>Xlsx</code> files without the participation of installed <code v-pre>MSOffice</code> modules.</p>
<p><code v-pre>TXlsMemFileEh</code> is not a visual component. It is not listed in the IDE component palette. The class must be used directly in the program code. The class is implemented in the <code v-pre>XlsMemFilesEh</code> module.</p>
<p>Using this class, you can quickly load and change or generate files in <code v-pre>MSExcel</code> format. Created files can also be opened using the <code v-pre>OpenOffice Calc</code> application.</p>
<p>In the current version of the library, the <code v-pre>LoadFromFile</code> and <code v-pre>XlsMemFile</code> functions support the following <code v-pre>Xlsx</code> file elements.</p>
<ul>
<li>
<p><code v-pre>WorkSheet</code> - worksheets. Worksheet names and colors.</p>
</li>
<li>
<p><code v-pre>Worksheet Rows</code> and <code v-pre>Columns</code>. Width\Height, visibility of rows and columns.</p>
</li>
<li>
<p>The contents of the cells in the worksheet. Text, numbers, dates.</p>
</li>
<li>
<p>Cell fill color and pattern.</p>
</li>
<li>
<p>Color, title, size and style of the font.</p>
</li>
<li>
<p>Alignment, text wrapping, merging of cells.</p>
</li>
<li>
<p>Vertical, horizontal, oblique dividing lines.</p>
</li>
<li>
<p>Print properties: Scale, sheet titles.</p>
</li>
<li>
<p>Autofilter.</p>
</li>
<li>
<p>Fixed-non-scrollable areas of the sheet.</p>
</li>
<li>
<p>Formulas (only as text, no calculation).</p>
</li>
<li>
<p>Grouping Rows, Grouping Columns.</p>
</li>
</ul>
<br>
Working with a class involves the following use case:
<ul>
<li>Creating an instance of the TXlsMemFileEh class</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  xlsFile<span class="token punctuation">:</span> TXlsMemFileEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  xlsFile <span class="token operator">:=</span> TXlsMemFileEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
</code></pre></div><br>
<ul>
<li>When you create an instance, a single Worksheet object is created. You can customize the properties of an existing sheet and / or add new ones.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>xlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>Worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">Name</span> <span class="token operator">:=</span> <span class="token string">'DBGrid'</span><span class="token punctuation">;</span>
xlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>AddWorksheet<span class="token punctuation">(</span><span class="token string">'VertGrid'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><br>
<ul>
<li>Specify the width of the columns in the worksheet.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>ScreenToXlsWidth<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>ScreenToXlsWidth<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><br>
<ul>
<li>Fill in the contents of the worksheets.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption<span class="token punctuation">;</span>
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption<span class="token punctuation">;</span>
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption<span class="token punctuation">;</span>
…
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>

  Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Formula <span class="token operator">:=</span> <span class="token string">'SUM(E5:'</span> <span class="token operator">+</span> <span class="token string">'E'</span> <span class="token operator">+</span> IntToStr<span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
</code></pre></div><br>
<p>Cell Fill Supported Cells[ColIndex, RowIndex].Value and Formulas Cells[ColIndex, RowIndex].Formula.</p>
<ul>
<li>Set the format of cells and cell borders on a sheet.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  cr <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>GetCellsRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Top<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Bottom<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>IsBold <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>ApplyChages<span class="token punctuation">;</span>
</code></pre></div><p>To change the format of a cell or group of cells, you must first obtain a group of cells using the <code v-pre>GetCellsRange</code> method. Then, in the resulting class, change the properties to set the format. The <code v-pre>GetCellsRange</code> method returns an interface type. After use, the <code v-pre>CellsRange</code> instance does not need to be deleted, it will be deleted automatically when the last pointer to it leaves the scope.</p>
<p>The <code v-pre>IXlsFileCellsRangeEh</code> interface has the following properties for setting the format of a range of cells:</p>
<dl>
<dd>
<ul>
<li>
<p>Font</p>
</li>
<li>
<p>Background Shading (Fill)</p>
</li>
<li>
<p>Setting the external borders of the selected range (Border.Left, Border.Right, Border.Top, Border.Bottom).</p>
</li>
<li>
<p>Setting internal dividing lines in a selected range (InsideBorder)</p>
</li>
<li>
<p>Horizontal and vertical text alignment (HorzAlign and VertAlign)</p>
</li>
<li>
<p>Wrap text according to WrapText</p>
</li>
<li>
<p>Rotate Text Rotation</p>
</li>
<li>
<p>NumberFormat number format (Described in MSExcel format).</p>
</li>
</ul>
</dd>
</dl>
<br>
<ul>
<li>Save the created file to disk.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  xlsFile<span class="token punctuation">.</span>SaveToFile<span class="token punctuation">(</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><br>
<ul>
<li>Delete item TXlsMemFileEh.</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  xlsFile<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>
</code></pre></div><br>
<p>You can also use additional properties and methods to implement the following features when creating Xlsx files:</p>
<ul>
<li>Defining frozen columns and rows:</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  Sheet<span class="token punctuation">.</span>FrozenRowCount <span class="token operator">:=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span>FrozenColCount <span class="token operator">:=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre></div><br>
<ul>
<li>Setting the auto filter area:</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  Sheet<span class="token punctuation">.</span>AutoFilterRange<span class="token punctuation">.</span>FromCol <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span>AutoFilterRange<span class="token punctuation">.</span>FromRow <span class="token operator">:=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span>AutoFilterRange<span class="token punctuation">.</span>ToCol <span class="token operator">:=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span>AutoFilterRange<span class="token punctuation">.</span>ToRow <span class="token operator">:=</span> i<span class="token operator">+</span><span class="token number">4</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><br>

<CodeDemo id="code-demo-214" type="normal" title="Full%20Demo%20code" code="eJztVk1v2zgQ/StELk5QRU2uXuwhcewkQPOByI0XqIMFI42tQSlSIKnE6WL/+86QkhXHTZvdbW+9yEPOm8eZN8TQf+3U0uVSDbXZV6hhXzfVPVi3M9xpNHrxkT4ZVrWC8ao21v8213ON2oNdyBx40Thwcy3EDHVhHl0iLsA5uQSysif30aMi61ZalNqTdWplXWLuEo6ZGFtFKytBqaPr80T8odwFVBNU4MZlIk6OTy0W4zIcXFuTQ9FYWG9PDeFXzzPc7VyHQzHt7L2YN6Mq0F56NLT+n4QP0nLqjL+WvhyKzFvUS/IIsVKOS6CIvp5QRCgVfHTMjP3seNm6ckyExaE4J4GXYOOepTVhmWFEIrkbqZeR6x6WSEX0KYjh72K88lbmnuEnaHeP6lphHgpOxyu4lBXsiXdiMJ9PwfmWN6V0V4Og0Tp15tpIPh1ZkB76GhjRglOu5N6Yz8EIJblPB3c9NuWDOWAQFewOe/9+ZFRTaScesfBluEkLY0kJBh8Ib9adOUxv0eE9qRAj0pFptBf74lAUhuPWcnRntsBPOd6lM6Znzg1XmuUWQIemB0Tf7O1o7rkQoIs+d1mzsD84a24ynZqIg7v0Vqom6Pb1vKboSfw2ja30biA3tnDiRHrJOzakdxhwPR97M9PYHKJJKZygkyFl7a1R7vsBE7SOZ4MQjyXfHW38twPGZrFd/3+VcINkW0ZLQn1Fx03SIOcEQRURG4p5LmcnH33ftRp+R5RLWEVNIsmbJfy2cPpFZ2Krw0UQXLM4pp7TBI+zo7/xp+D78bF7QLerH66vK0yweO1zm0bidGrqNPNPcULkPCAKbKpugq1hx8Z7U70F+QEW/i24G1yWrwI3oefaYQG3YD3NPrURMy1Rb1FH/Jmx+IWUfS2ijWHaI4VLHfwPckQvCtiek2i+9P7yub9F8FB+GpX8Soag2ENu8b9rIbXnLS2kK0u/v/r4k/vIm94+xcnQPYyZfICpYXO3e6VjIxaopVIv0BN6jV6M8fDPiF7uvPGw8ZqfSV0oSMTgqgY9SMQ1JWL7QxKhUbWfbPZndnY1u7y6uTj6sDfXHTv9pnO98/c/T7tmyQ==">
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">unit</span> UnitSimpleExport<span class="token punctuation">;</span>

<span class="token keyword">interface</span>

<span class="token keyword">uses</span>
  Windows<span class="token punctuation">,</span> Messages<span class="token punctuation">,</span> SysUtils<span class="token punctuation">,</span> Variants<span class="token punctuation">,</span> Graphics<span class="token punctuation">,</span>
  Forms<span class="token punctuation">,</span>
  ShellAPI<span class="token punctuation">,</span> XlsMemFilesEh<span class="token punctuation">,</span> DBGridEh<span class="token punctuation">;</span>

<span class="token keyword">procedure</span> DBGridEhToXlsxSimpleExport<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">:</span> TDBGridEh<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">implementation</span>

<span class="token keyword">procedure</span> DBGridEhToXlsxSimpleExport<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">:</span> TDBGridEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  XlsxPath<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  xlsFile<span class="token punctuation">:</span> TXlsMemFileEh<span class="token punctuation">;</span>
  Sheet<span class="token punctuation">:</span> TXlsWorksheetEh<span class="token punctuation">;</span>
  ci<span class="token punctuation">,</span> ri<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  cr<span class="token punctuation">:</span> IXlsFileCellsRangeEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  XlsxPath <span class="token operator">:=</span> ExtractFileDir<span class="token punctuation">(</span>Application<span class="token punctuation">.</span>ExeName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'\TestXlsFile.xlsx'</span><span class="token punctuation">;</span>

  xlsFile <span class="token operator">:=</span> TXlsMemFileEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  Sheet <span class="token operator">:=</span> xlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>Worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  Sheet<span class="token punctuation">.</span><span class="token keyword">Name</span> <span class="token operator">:=</span> <span class="token string">'DBGrid'</span><span class="token punctuation">;</span>

  <span class="token comment">//Columns widths</span>
  <span class="token keyword">for</span> ci <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span>ci<span class="token punctuation">]</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>ScreenToXlsWidth<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span>ci<span class="token punctuation">]</span><span class="token punctuation">.</span>Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  <span class="token comment">//Captions</span>
  <span class="token keyword">for</span> ci <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span>ci<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>Columns<span class="token punctuation">[</span>ci<span class="token punctuation">]</span><span class="token punctuation">.</span>Title<span class="token punctuation">.</span>Caption<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  <span class="token comment">//Records Data</span>
  ri <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>DisableControls<span class="token punctuation">;</span>
  DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>First<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token operator">not</span> DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>Eof <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">for</span> ci <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">do</span>
    <span class="token keyword">begin</span>
      Sheet<span class="token punctuation">.</span>Cells<span class="token punctuation">[</span>ci<span class="token punctuation">,</span> ri<span class="token punctuation">]</span><span class="token punctuation">.</span>Value <span class="token operator">:=</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">[</span>ci<span class="token punctuation">]</span><span class="token punctuation">.</span>Field<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>

    ri <span class="token operator">:=</span> ri <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
  DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>First<span class="token punctuation">;</span>
  DBGridEh1<span class="token punctuation">.</span>DataSource<span class="token punctuation">.</span>DataSet<span class="token punctuation">.</span>EnableControls<span class="token punctuation">;</span>

  <span class="token comment">//Title Cell Borders</span>
  cr <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>GetCellsRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Top<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Bottom<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>InsideVertical<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>InsideHorizontal<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>VertAlign <span class="token operator">:=</span> cvaCenterEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>HorzAlign <span class="token operator">:=</span> chaCenterEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>ApplyChages<span class="token punctuation">;</span>
  
  <span class="token comment">//Data Cell Borders</span>
  cr <span class="token operator">:=</span> Sheet<span class="token punctuation">.</span>GetCellsRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">.</span>VisibleColumns<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> ri <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Top<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Bottom<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Left<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>Right<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsMediumEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>InsideVertical<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>Border<span class="token punctuation">.</span>InsideHorizontal<span class="token punctuation">.</span>Style <span class="token operator">:=</span> clsThinEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>VertAlign <span class="token operator">:=</span> cvaCenterEh<span class="token punctuation">;</span>
  cr<span class="token punctuation">.</span>HorzAlign <span class="token operator">:=</span> chaCenterEh<span class="token punctuation">;</span>

  cr<span class="token punctuation">.</span>ApplyChages<span class="token punctuation">;</span>

  <span class="token keyword">try</span>
    xlsFile<span class="token punctuation">.</span>SaveToFile<span class="token punctuation">(</span>XlsxPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">finally</span>
    xlsFile<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

  ShellExecute<span class="token punctuation">(</span>Application<span class="token punctuation">.</span>Handle<span class="token punctuation">,</span> <span class="token string">'Open'</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>XlsxPath<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">end</span><span class="token punctuation">.</span>
</code></pre></div></CodeDemo></div></template>


