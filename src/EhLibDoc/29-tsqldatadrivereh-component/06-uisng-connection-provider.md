# Uisng Connection Provider


`TMemTableEh` - `TXXXDataDriverEh` - `TXXXConnectionProviderEh`

New components `TXXXConnectionProviderEh` provide a single point of connection to the database. `TADOConnectionProviderEh` for `ADO`, `TDBXConnectionProviderEh` for DBExpress etc. 

for each method of data access component of your ConnectionProvider. 

ConnectionProvider he does not join, but has built-in component `InlineConnection` (for ADO is TADOConnection, for DBExpress TSQLConnection, etc.) and additional properties, a reference to the standard data access component of the same type (for example if you want to lay TADOConnection separately on form). 

In component `TXXXConnectionProviderEh` you also specify the type of server data (MSAccess, SQLServer, Oracle, InterBase, etc.). Some `ConnectionProvider` automatically determine the type of server (for example, TIBXConnectionProviderEh this will always be the server 'InterBase'). The type of server components defines additional parameters for the database server. For example, on the type of server component `TXXXDataDriverEh` defines the operating mode with auto increment fields. In `TXXXConnectionProviderEh` can specify different connection objects at the `Design-Time` and `Run-Time`, thereby dividing the ways you can connect to the database during development and in the period of the program. The component also allows you to specify access `TADOConnectionProviderEh` path to `MSAccess` database in `Design-Time` line relative file location. 

A relative path starts from the location of the form file, which has a component `TADOConnectionProviderEh`.

For example: 
```
ADOConnectionProviderEh1.InlineConnection.ConnectionString = 
'Provider = Microsoft.Jet.OLEDB.4.0;
Data Source =% PROJECT_PATH% \ ..\ Data \ DBTest.mdb; 
Persist Security Info = False '
```

When you open the form in Design-Time component replaces the macro `% PROJECT_PATH%` to the path where the dfm form file is. This allows you to move the project to different computer and at different location without changing the ways of access to the database file.

Demo: See Demo project using cords `TMemTableEh-TADODataDriverEh-TADOConnectionProviderEh` in your library - `<EhLib Dir\Demos\DataDriver.ADO.SimpleDemo/>`

Demo: See Demo project using cords `TMemTableEh-TBDEDataDriverEh-TBDEConnectionProviderEh` in your library - `<EhLib Dir\Demos\DataDriver.BDE.SimpleDemo>`

Demo: See Demo project using cords `TMemTableEh-TDBXDataDriverEh-TDBXConnectionProviderEh` in your library - `<EhLib Dir\Demos\DataDriver.DBX.SimpleDemo>`

Demo: See Demo project using cords `TMemTableEh-TIBXDataDriverEh-TIBXConnectionProviderEh` in your library - `<EhLib Dir\Demos\DataDriver.IBX.SimpleDemo>`

