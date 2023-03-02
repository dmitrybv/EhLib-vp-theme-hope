# Dynamic formation of SQL expressions when updating data


`TSQLDataDriverEh` allows you to form Insert, Update and `Delete SQL` statements dynamically, immediately before sending a request to the server.

Use the subproperties of the `DynaSQLParams` property to customize the dynamic generation of `SQL expressions`.

The `DynaSQLParams.Options` property of the `TDynaSQLOptionsEh` type specifies which data change operations will be generated dynamically:

`dsoDynamicSQLInsertEh`
<dd>the operation of adding a record will be generated dynamically based on the filled properties UpdateTable, UpdateFields and SpecParams (for AUTO_INCREMENT_FIELD).</dd>

`dsoDynamicSQLUpdateEh`
<dd>the record change operation will be generated dynamically based on the filled in properties UpdateTable, UpdateFields and KeyFields.</dd>

`dsoDynamicSQLDeleteEh`
<dd>the record deletion operation will be generated dynamically based on the filled in UpdateTable and KeyFields properties.</dd>

The `DynaSQLParams.KeyFields` property specifies the key field of the record. It will be used to form a `WHERE` clause when deleting or updating a record. The `DynaSQLParams.UpdateFields` property specifies all fields that will be used to form the `UpdateSQL` and `InsertSQL` expression. The `DynaSQLParams.UpdateTable` property specifies the name of the updated table.

The `SkipUnchangedFields` property specifies that fields that have not changed are not added to the SQL `UpdateSQL` expression.

This is useful when the table contains many fields and only a few fields have changed.

