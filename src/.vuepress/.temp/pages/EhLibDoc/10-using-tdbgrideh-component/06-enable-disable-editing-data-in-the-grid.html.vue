<template><div><h1 id="enable-disable-editing-data-in-the-grid" tabindex="-1"><a class="header-anchor" href="#enable-disable-editing-data-in-the-grid" aria-hidden="true">#</a> Enable / Disable editing data in the Grid</h1>
<p>To completely disable the ability to change any data in the grid set <code v-pre>DBGridEh.ReadOnly</code> property to <code v-pre>True</code>.</p>
<p>To restrict the editing of data in a particular column, select a similar property in the <code v-pre>TColumnEh</code>(<code v-pre>TColumnEh.ReadOnly</code>).</p>
<p>Using the property <code v-pre>DBGridEh.Enabled</code> you can disable Grid and any of its elements that can receive focus.</p>
<p>It is possible to prevent open a text editor open the cells, which opens by default on the <code v-pre>F2</code> button or <code v-pre>Enter</code>. To prevent the text editor set <code v-pre>TColumnEh.TextEditing</code> property to <code v-pre>True</code>. To prevent displaying a text editor for the whole grid, remove the <code v-pre>dgEditing</code> value from the <code v-pre>DBGridEh.Options</code> property.</p>
<p>To prevent or allow certain operations over the records use <code v-pre>DBGridEh.AllowedOperations</code> property.
The <code v-pre>DBGridEh.AllowedOperations</code> property is <code v-pre>TDBGridEhAllowedOperations</code> type and can contain the following values:</p>
<dd>
<p><code v-pre>alopInsertEh</code> – Insert new recordings at any place of the grid (actually DataSet) is allowed.</p>
<p><code v-pre>alopUpdateEh</code> – Changing the values of an existing entry is allowed.</p>
<p><code v-pre>alopDeleteEh</code> – Deleting records is allowed.</p>
<p><code v-pre>alopAppendEh</code> – Adding entries to the end of the grid is allowed.</p>
 </dd>
<p>To enable or disable the change only in a certain cell of a grid is necessary to use the event of TColumnEh object.</p>
<p>The <code v-pre>TColumnEh.OnGetCellParams</code> event is of <code v-pre>TGetColCellParamsEventEh</code> type and has the following call parameters</p>
<p><code v-pre>Sender: TObject;</code> 	Grid сolumn that caused the event</p>
<p><code v-pre>EditMode: Boolean;</code>    The value is True if the event is caused by cell text editor. This same event is called when grid render a cell. In this case <code v-pre>EditMode</code> equals <code v-pre>False</code>.</p>
<p><code v-pre>Params: TColCellParamsEh</code> – Additional parameters of the event</p>
<p>Use <code v-pre>Params.ReadOnly</code> property to prohibition or permission data changes in a cell. You can set a property of <code v-pre>Params.TextEditing</code> option to enable or disable a text editor in the cell.</p>
<p>In the following example, a handler prohibits changing the text in column 1 if the value of the field Field1 in the current record &gt; 0.</p>
<p>At the time of the call, the grid will be on the required record of DataSet. With a property of DataSet, you can get the value of all the fields of the record. In the event you can not set properties of the grid or column.</p>
</div></template>


