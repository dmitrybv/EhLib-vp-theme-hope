# Creation/removing table data in memory in the ‘stand-alone’ mode


`MemTableEh` allows to create an internal array of records at design-time and at run-time. Before creating the table data, you need to set properties to specify the structure of the table you want to create. In particular, you need to specify structure of the fields of the new array. 

There are two ways to do this:

First way, you can add field definitions to the `FieldDefs` property. At design time, double-click the `FieldDefs` property in the `Object Inspector` to bring up the collection editor. Use the collection editor to add, remove, or change properties of field definitions. At runtime, clear any existing field definitions and then use `AddFieldDef` method to add each new field definition. For each new field definition, set the properties of the `TFieldDef` object to specify the desired attributes of the field.

Second way, you can use persistent field components instead. At `design time`, double-click on the dataset to bring up the `Fields editor`. In the `Fields editor`, right-click and choose ‘New Field’ command. Describe the basic properties of your field. Once the field is created, you can alter its properties in the `Object Inspector` by selecting the field in the Fields editor.

After creating field definitions or persistent fields, you need to create internal array. At Design-time mode, click right mouse above dataset and choose 'Create DataSet'. This command does not come up in the context menu until you define the whole necessary information.

To create an internal array at `Run-time`, you need to call `CreateDataSet` method.
If `DataDriver` property is assigned then internal array will be created automatically on activations MemTable. At this case the structure of array `MemTable` get from `DataDriver`.

In ‘stand-alone’ mode when `MemTable` is closing it does not delete internal array of records.  To close MemTable with simultaneous deleting of all records and structure, use `DestroyTable` method.

Use `EmptyTable` method to delete all records from `MemTable`.
