<template><div><h1 id="using-specrow-in-columns-of-dbgrideh-component-and-in-dblookupcomboboxeh-component" tabindex="-1"><a class="header-anchor" href="#using-specrow-in-columns-of-dbgrideh-component-and-in-dblookupcomboboxeh-component" aria-hidden="true">#</a> Using SpecRow in columns of DBGridEh component and in DBLookupComboBoxEh component.</h1>
<p>The <code v-pre>SpecRow</code> property of <code v-pre>TDropDownBoxEh</code> or <code v-pre>DropDownSpecRow</code> property of <code v-pre>TColumnEh</code> holds a <code v-pre>TDropDownBoxEh</code> object. <code v-pre>TDropDownBoxEh</code> defines attributes of the special row in the dropped down box.
<code v-pre>TSpecRowEh</code> represents a special row in the top part of dropdown box for lookup fields in column of <code v-pre>DBGridEh</code> and in <code v-pre>TDropDownBoxEh</code> class of <code v-pre>TDBLookupComboboxEh</code> component.
This row will be active when lookup field or <code v-pre>LookupComboBox</code> has value that is equal to <code v-pre>SpecRow.Value</code> property.</p>
<p><code v-pre>TSpecRowEh</code> contains next properties:</p>
<p><code v-pre>CellsText: String</code></p>
<dd>Specifies the text(s) that will be shown in the drop-down window for SpecRow. When dropdown box have more than one columns, use semicolon to separate text for each column.</dd>
<p><code v-pre>Color: TColor</code></p>
<dd>Background color of special row in dropdown box.</dd>
<p><code v-pre>Font: TFont</code></p>
<dd>Font of special row text.</dd>
<p><code v-pre>Value: Variant</code></p>
<dd>Value. Special row is shown as selected (highlighted) when this Value is equal to value of control to which this special row belong to.</dd>
<p><code v-pre>Visible: Boolean</code></p>
<dd>Specify, whether the spec row is active and visible in the DropDown box.</dd>
<p><code v-pre>ShortCut: TShortCut</code></p>
<dd>Specify the shortcut for assigning value of SpecRow.Value property to Control value.</dd>
<p><code v-pre>ShowIfNotInKeyList: Boolean</code></p>
<dd>Specify, whether the SpecRow text will be shown in Control if the value of the control is not in list of key values.</dd>
</div></template>


