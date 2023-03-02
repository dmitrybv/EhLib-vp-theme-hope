<template><div><h1 id="tdbdatetimeediteh-control" tabindex="-1"><a class="header-anchor" href="#tdbdatetimeediteh-control" aria-hidden="true">#</a> TDBDateTimeEditEh control</h1>
<p><code v-pre>TDBDateTimeEditEh</code> represents a single-line date or/and time edit control that can display and edit a date or/and time values.</p>
<p>Property <code v-pre>Kind</code> determines whether the component is a date editor or/and a time editor <code v-pre>(dtkDateEh, dtkTimeEh, dtkDateTimeEh)</code> or custom date-time mask editor <code v-pre>(dtkCustomEh)</code>.</p>
<p>Use <code v-pre>EditFormat</code> property to set custom date/time format. You can use next format elements: <code v-pre>'YY', 'YYYY', 'MM', 'DD', 'HH', 'NN', 'SS'</code>.</p>
<p>By default <code v-pre>TDBDateTimeEditEh</code> build edit mask using ShortDateFormat variable.</p>
<p>Edit mask can be by six types: three for four-char year - <code v-pre>'MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'</code> and three for two-char year <code v-pre>'MM/DD/YY', 'DD/MM/YY', 'YY/MM/DD'</code>.</p>
<p>Application can use <code v-pre>Text</code> (String type) and <code v-pre>Value</code> (Variant type) properties to get and set <code v-pre>DateTime</code> type value in <code v-pre>TDBDateTimeEditEh</code>. If <code v-pre>TDBDateTimeEditEh</code> has <code v-pre>dtkDateEh</code> type then it will change only date part of the field. If <code v-pre>TDBDateTimeEditEh</code> has <code v-pre>dtkTimeEh</code> type then it will change only time part of the field.</p>
</div></template>


