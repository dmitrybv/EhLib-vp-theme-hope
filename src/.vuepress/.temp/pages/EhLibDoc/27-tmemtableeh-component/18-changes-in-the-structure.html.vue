<template><div><h1 id="changes-in-the-structure-of-the-internal-array-of-memtableeh-without-losing-data" tabindex="-1"><a class="header-anchor" href="#changes-in-the-structure-of-the-internal-array-of-memtableeh-without-losing-data" aria-hidden="true">#</a> Changes in the structure of the internal array of MemTableEh without losing data</h1>
<p>In MemTableEh it is added ability to edit the structure of the internal array of records &quot;on the fly&quot; in the open dataset without losing data in records.</p>
<p>To change the structure in design-time, double-click on the component <code v-pre>MemTableEh</code>. In the editing window, edit the structure of the DataSet data on the tab 'Edit data structure', click ' Apply new structure’ to change the structure of the data physically. If you change the field type, MemTableEh attempts to convert the field values to the new type. If that fails, the field is set to Null.</p>
<p>Following the restructuring, the component MemTableEh rediscovers itself. Be careful when changing the structure of records when you have fields in MemTableEh created statically (Persistent fields). To change the structure of the records for the MemTableEh which must be statically created fields: close <code v-pre>MemTableEh</code>, change the structure and make the same changes in the fields (Fields).</p>
<p>To change the structure of the table in the run-time using the following algorithm:</p>
<ul>
<li>
<p>FUNCTIONS <code v-pre>BeginRestructure</code> call for a copy of the structure.</p>
</li>
<li>
<p>Edit the copy of the structure: <code v-pre>InsertField</code>, <code v-pre>RemoveField</code>, <code v-pre>ChangeFieldType</code>.</p>
</li>
<li>
<p>Call the procedure <code v-pre>EndRestructure</code> to apply a new structure to the existing structure and data records.</p>
</li>
</ul>
<p>Demo: See the Demo project of using macro variables in your library archive – <code v-pre>&lt;EhLib Dir\Demos\ MemTableEh.LifeRestructure/&gt;</code></p>
</div></template>


