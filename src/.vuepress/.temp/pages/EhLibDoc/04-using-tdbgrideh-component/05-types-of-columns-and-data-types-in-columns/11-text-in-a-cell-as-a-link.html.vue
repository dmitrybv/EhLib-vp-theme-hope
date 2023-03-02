<template><div><h1 id="the-text-in-a-cell-as-a-link" tabindex="-1"><a class="header-anchor" href="#the-text-in-a-cell-as-a-link" aria-hidden="true">#</a> The text in a cell as a link</h1>
<p>Use the property <code v-pre>TColumnEh.CellDataIsLink</code> of <code v-pre>DBGridEh.TColumnEh</code> and <code v-pre>DBVertGridEh.TFieldRowEh</code> classes to customize the text or a picture in a grid cell in such a way that it looks like a URL link.</p>
<p><img src="@source/images/DBGridEh.CellAsLink.png" alt="" loading="lazy"></p>
<p>When you point the mouse to the text the cursor icon changes the view of the cursor to the type of &quot;index finger&quot; and draws the text in a cell type in &quot;Underline&quot; style.</p>
<p>When you click on the link the <code v-pre>TAxisBarEh.OnCellDataLinkClick</code> event occurs.</p>
<p>It is possible to define a link state for each DataSet record.</p>
<p>To do this, write an event handler for <code v-pre>TAxisBarEh.OnGetCellParams</code> event and set <code v-pre>Params.TextIsLink</code> or <code v-pre>Params.ImageIsLink</code>.</p>
<p><code v-pre>True</code> value in the <code v-pre>TextIsLink</code> property of <code v-pre>Params</code> argument specifies that the text in the cell have to be appeared and respond to the mouse as a reference.</p>
<p><code v-pre>True</code> value in the <code v-pre>ImageIsLink</code> property of <code v-pre>Params</code> argument specifies that the image from <code v-pre>TColumnEh.ImageList</code> in the cell have to be appeared and respond to the mouse as a reference.</p>
<p>See a demo project in the folder <code v-pre>&lt;EhLib Archive&gt;/DEMOS/CellDataIsLink</code>.</p>
</div></template>


