<template><div><h1 id="dynamic-formation-of-sql-expressions-when-updating-data" tabindex="-1"><a class="header-anchor" href="#dynamic-formation-of-sql-expressions-when-updating-data" aria-hidden="true">#</a> Dynamic formation of SQL expressions when updating data</h1>
<p><code v-pre>TSQLDataDriverEh</code> allows you to form Insert, Update and <code v-pre>Delete SQL</code> statements dynamically, immediately before sending a request to the server.</p>
<p>Use the subproperties of the <code v-pre>DynaSQLParams</code> property to customize the dynamic generation of <code v-pre>SQL expressions</code>.</p>
<p>The <code v-pre>DynaSQLParams.Options</code> property of the <code v-pre>TDynaSQLOptionsEh</code> type specifies which data change operations will be generated dynamically:</p>
<p><code v-pre>dsoDynamicSQLInsertEh</code></p>
<dd>the operation of adding a record will be generated dynamically based on the filled properties UpdateTable, UpdateFields and SpecParams (for AUTO_INCREMENT_FIELD).</dd>
<p><code v-pre>dsoDynamicSQLUpdateEh</code></p>
<dd>the record change operation will be generated dynamically based on the filled in properties UpdateTable, UpdateFields and KeyFields.</dd>
<p><code v-pre>dsoDynamicSQLDeleteEh</code></p>
<dd>the record deletion operation will be generated dynamically based on the filled in UpdateTable and KeyFields properties.</dd>
<p>The <code v-pre>DynaSQLParams.KeyFields</code> property specifies the key field of the record. It will be used to form a <code v-pre>WHERE</code> clause when deleting or updating a record. The <code v-pre>DynaSQLParams.UpdateFields</code> property specifies all fields that will be used to form the <code v-pre>UpdateSQL</code> and <code v-pre>InsertSQL</code> expression. The <code v-pre>DynaSQLParams.UpdateTable</code> property specifies the name of the updated table.</p>
<p>The <code v-pre>SkipUnchangedFields</code> property specifies that fields that have not changed are not added to the SQL <code v-pre>UpdateSQL</code> expression.</p>
<p>This is useful when the table contains many fields and only a few fields have changed.</p>
</div></template>


