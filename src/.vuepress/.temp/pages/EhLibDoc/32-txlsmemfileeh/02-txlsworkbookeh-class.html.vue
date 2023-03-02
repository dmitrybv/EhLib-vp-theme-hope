<template><div><h1 id="txlsworkbookeh-class" tabindex="-1"><a class="header-anchor" href="#txlsworkbookeh-class" aria-hidden="true">#</a> TXlsWorkbookEh class</h1>
<p>Workbook. <code v-pre>TXlsMemFileEh</code> contains one copy of a workbook of type <code v-pre>TXlsWorkbookEh</code>. The workbook contains a set of tables (<code v-pre>TXlsWorksheetEh</code>) and <code v-pre>TXlsFileStylesEh</code> styles.
Styles describe the format of the data cells in the <code v-pre>Worksheet</code>. Each cell must reference one of the styles from the <code v-pre>Styles</code> list. When filling in data in the program code, you do not need to use the <code v-pre>TXlsWorkbookEh.Styles</code> property. The inner code of the <code v-pre>TXlsMemFileEh</code> class automatically creates styles and style references when the format changes in table cells.
You can use <code v-pre>TXlsMemFileEh.Workbook</code> property to access <code v-pre>TXlsWorkbookEh</code> properties and methods.</p>
<p>The following <code v-pre>TXlsWorkbookEh</code> properties and methods are used to work with work pages (<code v-pre>Worksheet</code>):</p>
<p><code v-pre>function AddWorksheet(WorksheetName: string): TXlsWorksheetEh;</code></p>
<dd>Add a new table (Worksheet) with the specified name.</dd>
<br>
<p><code v-pre>function FindWorksheet(WorksheetName: string): TXlsWorksheetEh;</code></p>
<dd>Find a table (Worksheet) by name.</dd>
<br>
<p><code v-pre>procedure MoveWorksheet(FromIndex, ToIndex: Integer);</code></p>
<dd>Move the Worksheet from the FromIndex position to the ToIndex position.</dd>
<br>
<p><code v-pre>procedure RemoveWorksheet(WorksheetEh: TXlsWorksheetEh);</code></p>
<dd>Delete Worksheet.</dd>
<br>
<p><code v-pre>property Worksheets[WorksheetId: Variant]: TXlsWorksheetEh;</code></p>
<dd>Get a ref to a table by name or by index. To get a value by name, pass the table name as a string to the WorksheetId parameter.</dd>
<br>
<p><code v-pre>property WorksheetCount: Integer;</code></p>
<dd>Get the number of tables in the Worksheets collection.</dd>
<br>
<p>Here is an example of using the Workbook property.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>xlsFile <span class="token operator">:=</span> TXlsMemFileEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
xlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>Worksheets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">Name</span> <span class="token operator">:=</span> <span class="token string">'DBGrid'</span><span class="token punctuation">;</span>
xlsFile<span class="token punctuation">.</span>Workbook<span class="token punctuation">.</span>AddWorksheet<span class="token punctuation">(</span><span class="token string">'VertGrid'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


