# TSQLDataDriverEh or TXXXDataDriverEh, which one is best to use

As `TSQLDataDriverEh` as one of the `TBDEDataDriverEh`, `TIBXDataDriverEh`, `TDBXDataDriverEh` or `TADODataDriverEh` components (we will name them as `TXXXDataDriverEh`) allow to work with database without big number of tunings.

For `TXXXDataDriverEh` it is sufficiently to set database object property (For `TBDEDataDriverEh` it is a Database property of `TDatabase` type).

`TSQLDataDriverEh` does not have database object property. To force it works is sufficiently to write `DefaultSQLDataDriverResolver`.

`OnExecuteCommand` event once to execute queries on server, and assign `DefaultSQLDataDriverResolver.ServerSpecOperations`  property by the object of `TServerSpecOperationsEh` type to process some specific server operations. `DefaultSQLDataDriverResolver` is not visual object, so you have to assign an event and property in the program, for example in the `OnCreate` event of your main form. It is possible to change access Engine to database quickly when you use `TSQLDataDriverEh`. It is sufficiently rewrite global event  - `DefaultSQLDataDriverResolver.OnExecuteCommand` only.

`TSQLDataDriverEh` and `TXXXDataDriverEh` works very similar at design-time. When `TSQLDataDriverEh` component editor is opening you can choose one of design-time types of the database accesses that built-over `BDE`, `ADO`, `IBX` and `DBX` engines. It  is not necessarily that the access engine that you use at design-time will be same as you write in `DefaultSQLDataDriverResolver.OnExecuteCommand` event.
