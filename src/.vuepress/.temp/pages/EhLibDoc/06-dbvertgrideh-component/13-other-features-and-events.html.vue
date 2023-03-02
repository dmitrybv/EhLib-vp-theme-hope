<template><div><h1 id="other-features-and-events-of-the-component" tabindex="-1"><a class="header-anchor" href="#other-features-and-events-of-the-component" aria-hidden="true">#</a> Other features and events of the component</h1>
<p><code v-pre>property Options: TDBVHGridOptions</code></p>
<p>Property type set. It may contain the following values.</p>
<dl>
<dd>
<p><code v-pre>dgvhEditing</code></p>
<dl><dd>The grid is allowed to open the text editor by clicking on the Enter or F2 Key.</dd></dl>
<p><code v-pre>dgvhAlwaysShowEditor</code></p>
<dl>
	<dd>Always display the text editor of the cell during the transition from line to line.</dd>
</dl>
<p><code v-pre>dgvhLabelCol</code></p>
<dl>
	<dd>Display column with header fields.</dd>
</dl>
<p><code v-pre>dgvhRowResize</code></p>
<dl>
	<dd>Permission is granted to change the row height using the mouse.</dd>
</dl>
<p><code v-pre>dgvhRowMove</code></p>
<dl>
	<dd>Permission is granted to move the line with the mouse.</dd>
</dl>
<p><code v-pre>dgvhColLines</code></p>
<dl>
	<dd>Draw a vertical dividing lines</dd>
</dl>
<p><code v-pre>dgvhRowLines</code></p>
<dl>
	<dd>Draw a horizontal dividing line</dd>
</dl>
<p><code v-pre>dgvhTabs</code></p>
<dl>
	<dd>Edit the Tab key in the grid. By Tab to move the cursor to the next line.</dd>
</dl>
<p><code v-pre>dgvhAlwaysShowSelection</code></p>
<dl>
	<dd>Always draw a selection on the grid. When the grid does not have the input focus area will be displayed gray color.</dd>
</dl>
<p><code v-pre>dgvhConfirmDelete</code></p>
<dl>
	<dd>Show confirmation dialog before removing the recording Ctrl + Delete</dd>
</dl>
<p><code v-pre>dgvhCancelOnExit</code></p>
<dl>
	<dd>Exit Edit Mode dataset methods DataSet.Cancel if grid included in append mode recording, but did not do any changes to the rows.</dd>
</dl>
</dd>
</dl>
<p><code v-pre>property OptionsEh: TDBVHGridOptionsEh</code></p>
<p>Property type is set. It may contain the following values.</p>
<dl>
<dd>
<p><code v-pre>dgvhHighlightFocusEh</code></p>
<dl>
	<dd>Highlight the current cell color or style.</dd>
</dl>
<p><code v-pre>dgvhClearSelectionEh</code></p>
<dl>
	<dd>Clear selection when navigating Grid</dd>
</dl>
<p><code v-pre>dgvhEnterToNextRowEh</code></p>
<dl>
	<dd>Go to the next line when you press the VK_ENTER</dd>
</dl>
<p><code v-pre>dgvhTabToNextRowEh</code></p>
<dl>
	<dd>Go to the next line when you press the VK_TAB</dd>
</dl>
<p><code v-pre>dgvhHotTrackEh</code></p>
<dl>
	<dd>Highlight the cell on which the mouse cursor</dd>
</dl>
<p><code v-pre>dgvhRowsIsTabControlsEh</code></p>
<dl>
	<dd>Set grid lines act as a set of individual controls. Ie it is not allowed to move to the next and previous record using navigation keys. By clicking on the VK_TAB on the last line of the grid control is transferred to the next control on the form in the order TabOrder.</dd>
</dl>
</dd>
</dl>
<br>
<p><code v-pre>property AllowedOperations: TDBGridEhAllowedOperations</code></p>
<p>Set an allowed operations on a DataSet.</p>
<p><code v-pre>alopInsertEh</code> – Insert new recordings at any place of the grid (actually DataSet) is allowed.</p>
<p><code v-pre>alopUpdateEh</code> – Changing the values of an existing record is allowed.</p>
<p><code v-pre>alopDeleteEh</code> – Deleting records is allowed.</p>
<p><code v-pre>alopAppendEh</code> – Adding records to the end of the grid is allowed.</p>
</div></template>


