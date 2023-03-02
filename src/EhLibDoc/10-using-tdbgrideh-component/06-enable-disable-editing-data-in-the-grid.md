# Enable / Disable editing data in the Grid


To completely disable the ability to change any data in the grid set `DBGridEh.ReadOnly` property to `True`. 

To restrict the editing of data in a particular column, select a similar property in the `TColumnEh`(`TColumnEh.ReadOnly`).

Using the property `DBGridEh.Enabled` you can disable Grid and any of its elements that can receive focus.

It is possible to prevent open a text editor open the cells, which opens by default on the `F2` button or `Enter`. To prevent the text editor set `TColumnEh.TextEditing` property to `True`. To prevent displaying a text editor for the whole grid, remove the `dgEditing` value from the `DBGridEh.Options` property.

To prevent or allow certain operations over the records use `DBGridEh.AllowedOperations` property.
The `DBGridEh.AllowedOperations` property is `TDBGridEhAllowedOperations` type and can contain the following values:

<dd>

 `alopInsertEh` – Insert new recordings at any place of the grid (actually DataSet) is allowed.

 `alopUpdateEh` – Changing the values of an existing entry is allowed.

 `alopDeleteEh` – Deleting records is allowed.

 `alopAppendEh` – Adding entries to the end of the grid is allowed.
 
 </dd>
 
To enable or disable the change only in a certain cell of a grid is necessary to use the event of TColumnEh object.

The `TColumnEh.OnGetCellParams` event is of `TGetColCellParamsEventEh` type and has the following call parameters 

 `Sender: TObject;` 	Grid сolumn that caused the event

 `EditMode: Boolean;`    The value is True if the event is caused by cell text editor. This same event is called when grid render a cell. In this case `EditMode` equals `False`.
 
 `Params: TColCellParamsEh` – Additional parameters of the event

Use `Params.ReadOnly` property to prohibition or permission data changes in a cell. You can set a property of `Params.TextEditing` option to enable or disable a text editor in the cell.

In the following example, a handler prohibits changing the text in column 1 if the value of the field Field1 in the current record > 0.

At the time of the call, the grid will be on the required record of DataSet. With a property of DataSet, you can get the value of all the fields of the record. In the event you can not set properties of the grid or column.
