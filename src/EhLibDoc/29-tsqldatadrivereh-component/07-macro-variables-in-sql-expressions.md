# Macro variables in SQL expressions SQLDataDriverEh.XXXCommand


`SQL` expression in `SQLDataDriverEh` commands (`ADODataDriver`, `DBXDataDriver`, ...) can contain Macro variables. Before executing the SQL statement the `Macro variables` are replaced by the values assigned to them and actual `SQL` statement is formed, which is transmitted for execution.

For example the expression `“select * from %table_name%”` contains a macro variable `"%table_name%"`. If this variable contains the value of "Country", a real expression that will be transferred to the execution will be the next 'select * from Country'.

You can type in `SQLDataDriverEh.SelectSQL`, `UpdateSQL`, `DeleteSQL`, `InsertDQL`, `GetrecSQL` commands any expression that may contain a combination of SQL statements and macro variables.

In the collection of the elements `SQLDataDriverEh.MacroVars.Macros` it is necessary to create macro- elements and give them names according to the variables inscribed in the `SQL` command. 

At design-time you can enter the values of macro variables, or leave them blank.
At run-time before the opening MemTableEh connected to `SQLDataDriverEh` you can set the value of the macro variable:

```pascal:no-line-numbers
ADODataDriverEh1.SelectSQL.Text := ‘select * from %table_name%’
ADODataDriverEh1.MacroVars.Macros['%table_name%'] := ‘Country’;
MemTableEh1.Open;
…
if Conditions 
  then ADODataDriverEh1.MacroVars.Macros['%table_name%'] := ‘table1’
  else ADODataDriverEh1.MacroVars.Macros['%table_name%'] := ‘table2’;
```

Use `SQLDataDriverEh.FinalSelectSQL`, `FinalUpdateSQL`, `FinalInsertDQL`, `FinalGetrecSQL` properties to access the actual SQL expression.

Demo: See a Demo project of using macro variables in the folder of the library – `<EhLib Dir\Demos\DataDriver.Macros>`

