import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,f as d}from"./app.ac77cf73.js";const n={},t=d('<h1 id="using-specrow-in-columns-of-dbgrideh-component-and-in-dblookupcomboboxeh-component" tabindex="-1"><a class="header-anchor" href="#using-specrow-in-columns-of-dbgrideh-component-and-in-dblookupcomboboxeh-component" aria-hidden="true">#</a> Using SpecRow in columns of DBGridEh component and in DBLookupComboBoxEh component.</h1><p>The <code>SpecRow</code> property of <code>TDropDownBoxEh</code> or <code>DropDownSpecRow</code> property of <code>TColumnEh</code> holds a <code>TDropDownBoxEh</code> object. <code>TDropDownBoxEh</code> defines attributes of the special row in the dropped down box. <code>TSpecRowEh</code> represents a special row in the top part of dropdown box for lookup fields in column of <code>DBGridEh</code> and in <code>TDropDownBoxEh</code> class of <code>TDBLookupComboboxEh</code> component. This row will be active when lookup field or <code>LookupComboBox</code> has value that is equal to <code>SpecRow.Value</code> property.</p><p><code>TSpecRowEh</code> contains next properties:</p><p><code>CellsText: String</code></p><dd>Specifies the text(s) that will be shown in the drop-down window for SpecRow. When dropdown box have more than one columns, use semicolon to separate text for each column.</dd><p><code>Color: TColor</code></p><dd>Background color of special row in dropdown box.</dd><p><code>Font: TFont</code></p><dd>Font of special row text.</dd><p><code>Value: Variant</code></p><dd>Value. Special row is shown as selected (highlighted) when this Value is equal to value of control to which this special row belong to.</dd><p><code>Visible: Boolean</code></p><dd>Specify, whether the spec row is active and visible in the DropDown box.</dd><p><code>ShortCut: TShortCut</code></p><dd>Specify the shortcut for assigning value of SpecRow.Value property to Control value.</dd><p><code>ShowIfNotInKeyList: Boolean</code></p><dd>Specify, whether the SpecRow text will be shown in Control if the value of the control is not in list of key values.</dd>',17),p=[t];function i(r,s){return e(),c("div",null,p)}const a=o(n,[["render",i],["__file","17-spec-row-in-comboboxeh.html.vue"]]);export{a as default};
