<template><div><h1 id="trefobjectfield-field-type" tabindex="-1"><a class="header-anchor" href="#trefobjectfield-field-type" aria-hidden="true">#</a> TRefObjectField field type</h1>
<p><code v-pre>MemTableEh</code> unit have code to register new type of field - <code v-pre>TRefObjectField</code>. <code v-pre>TRefObjectField</code> is intended to keep the pointer to <code v-pre>TObject</code> type object and have Value property of <code v-pre>TObject</code> type.</p>
<p>At design-time choose ‘RefObjectField’ type in form of creating new field  to create <code v-pre>TRefObjectField</code> field.</p>
<p>At run-time in the program you can create a field of this type by assign <code v-pre>ftUnknown</code> value to <code v-pre>DataType</code> property of <code v-pre>FieldDef</code> object.</p>
</div></template>


