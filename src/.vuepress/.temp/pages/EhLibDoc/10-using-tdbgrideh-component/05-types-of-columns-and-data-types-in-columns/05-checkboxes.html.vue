<template><div><h1 id="checkboxes-for-boolean-and-non-boolean-fields" tabindex="-1"><a class="header-anchor" href="#checkboxes-for-boolean-and-non-boolean-fields" aria-hidden="true">#</a> Checkboxes for Boolean and non Boolean fields</h1>
<p>Grid automatically shows checkboxes for <code v-pre>Boolean</code> fields.</p>
<p>To show checkboxes for no <code v-pre>Boolean</code> fields, fill first line of <code v-pre>Column.KeyList</code> property by value (or values) that corresponds to the checked state of the checkbox. Fill second line for non-checked state, and set <code v-pre>Column.Checkboxes</code> property to <code v-pre>True</code>.</p>
<p>One line of <code v-pre>KeyList</code> can contain more than one value. In that case every value must be separated by semicolon.</p>
</div></template>


