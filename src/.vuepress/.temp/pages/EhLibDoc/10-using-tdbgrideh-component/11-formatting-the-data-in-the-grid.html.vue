<template><div><h1 id="the-properties-for-formatting-the-data-in-the-grid" tabindex="-1"><a class="header-anchor" href="#the-properties-for-formatting-the-data-in-the-grid" aria-hidden="true">#</a> The properties for formatting the data in the grid</h1>
<p>Use the following properties of the grid column <code v-pre>TColumnEh</code> to format the data in the cell:</p>
<p><code v-pre>DisplayFormat: String</code></p>
<dd>The output format is a numerical value or a TDateTime value.</dd>
<br>
<p><code v-pre>EndEllipsis: Boolean</code></p>
<dd>Display ellipsis if the text does not fit in a cell grid</dd>
<br>
<p><code v-pre>Layout: TTextLayout</code></p>
<dd>Vertical text alignment</dd>
<br>
<p><code v-pre>Alignment: TAlignment</code></p>
<dd>Align text horizontally</dd>
<br>
<p><code v-pre>WordWrap: Boolean</code></p>
<dd>Wrap text if it is not fit to a cell in one row. The text will be moved if the row height (Row) greater than the height of one line of text.</dd>
<br>
<p><code v-pre>EditMask: String</code></p>
<dd>Mask text when editing the data in the cell. To correctly read the description of the filling properties of the standard properties TEditMask</dd>
<br>
</div></template>


