<template><div><h1 id="highlighting-fields-require-input-values" tabindex="-1"><a class="header-anchor" href="#highlighting-fields-require-input-values" aria-hidden="true">#</a> Highlighting fields require input values</h1>
<p>The <code v-pre>DataSet</code> fields that require that data entry, property <code v-pre>Field.Required</code> is set to <code v-pre>True</code>. If you try to move to a new record in <code v-pre>DataSet</code> (grid) did not complete one of the fields requires a value, <code v-pre>DataSet</code> throw an exception, and will not leave the post until the field will not be filled or recording all changes will be canceled.</p>
<p><img src="@source/images/clip0035.png" alt="" loading="lazy"></p>
<p>The grid has the ability to highlight a cell in which there are fields with mandatory values. Set <code v-pre>TDBGridEh.ColumnDefValues.HighlightRequired</code> or <code v-pre>TColumnEh.HighlightRequired</code> to highlight such cells. Grid will emphasize the red dotted line required input values.</p>
<p>You can also write to the event <code v-pre>TColumnEh.OnCheckDrawRequiredState</code> to manage when you have to draw a line indicator of mandatory data entry. In the event handler will set <code v-pre>DrawState</code> parameter to <code v-pre>True</code> to display a line-indicator for the relevant records and fields.</p>
</div></template>


