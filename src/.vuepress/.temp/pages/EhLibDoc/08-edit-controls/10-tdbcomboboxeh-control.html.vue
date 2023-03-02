<template><div><h1 id="tdbcomboboxeh-control" tabindex="-1"><a class="header-anchor" href="#tdbcomboboxeh-control" aria-hidden="true">#</a> TDBComboBoxEh control</h1>
<p><code v-pre>TDBComboBoxEh</code> component is an edit box with a scrollable drop-down list attached to it. User can select an item from the list or type it directly into the edit box.</p>
<p><code v-pre>TDBComboBoxEh</code> permits a single line and multiple line of text.</p>
<p>Use <code v-pre>WordWrap</code> property to set <code v-pre>TDBComboBoxEh</code> as multiple line editor.</p>
<p>Use <code v-pre>Items</code> property to access to the list of items (strings) in the list portion of the combo box.</p>
<p>Use <code v-pre>KeyItems</code> property to access to the list of items (strings) which will be stored in field when Items property is also assigned. When <code v-pre>Items</code> and <code v-pre>KeyItems</code> properties are filled, then <code v-pre>KeyList</code> property have to contain values which will be written in the field, but Items property, in corresponding indexes, has to contain values to display.</p>
<p>Use <code v-pre>Images</code> property to specify images that will be drawn in the drop-down list and image that will be drawn on the left side of <code v-pre>ComboBox</code>. Index of drawing image is taken from <code v-pre>ItemIndex</code> property.</p>
</div></template>


