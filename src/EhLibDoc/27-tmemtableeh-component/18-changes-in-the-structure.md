# Changes in the structure of the internal array of MemTableEh without losing data


In MemTableEh it is added ability to edit the structure of the internal array of records "on the fly" in the open dataset without losing data in records.

To change the structure in design-time, double-click on the component `MemTableEh`. In the editing window, edit the structure of the DataSet data on the tab 'Edit data structure', click ' Apply new structure’ to change the structure of the data physically. If you change the field type, MemTableEh attempts to convert the field values to the new type. If that fails, the field is set to Null.

Following the restructuring, the component MemTableEh rediscovers itself. Be careful when changing the structure of records when you have fields in MemTableEh created statically (Persistent fields). To change the structure of the records for the MemTableEh which must be statically created fields: close `MemTableEh`, change the structure and make the same changes in the fields (Fields).

To change the structure of the table in the run-time using the following algorithm:

- FUNCTIONS `BeginRestructure` call for a copy of the structure.

- Edit the copy of the structure: `InsertField`, `RemoveField`, `ChangeFieldType`.

- Call the procedure `EndRestructure` to apply a new structure to the existing structure and data records.

Demo: See the Demo project of using macro variables in your library archive – `<EhLib Dir\Demos\ MemTableEh.LifeRestructure/>`
