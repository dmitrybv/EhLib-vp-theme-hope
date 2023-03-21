# Accessing grid columns

You can use the following properties and methods for accessing the grid columns:

##### DBGridEh.Columns
`property Columns: TDBGridColumnsEh;`
<sh>The main collection of columns</sh>
<br/>

##### DBGridEh.VisibleColumns
`property VisibleColumns: TColumnsEhList;`
<sh>List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns</sh>
<br/>

`property DBGridEh.FieldColumns[const FieldName: String]: TColumnEh`
<sh>

Search a column by name field. If the column, which `TColumnEh.FieldName = FieldName` is not found, an exception is thrown.
</sh>
<br/>

`function FindFieldColumn(const FieldName: String): TColumnEh;`
<sh>

Search column name field. If the column, which `TColumnEh.FieldName = FieldName` is not found then it returns nil.
</sh>

`property SortMarkedColumns: TColumnsEhList`
<sh>

List of columns where sorting markers are set with the `TColumnEh.Title.SortMarker` property.
</sh>

##### DBGridEh.VisibleColumns
`property DBGridEh.VisibleColumns: TColumnsEhList`
  <sh>List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns.</sh>
<br/>
<br/>

 <dt><code>property DBGridEh.FieldColumns[const FieldName: String]: TColumnEh</code></dt>
 <br/>
 <sh>Search a column by name field. If the column, which TColumnEh.FieldName = FieldName is not found, an exception is thrown.</sh>
 <br/>
 <br/>
 
 <dt><code>function FindFieldColumn(const FieldName: String): TColumnEh;</code></dt>
 <br/>
 <sh>Search column name field. If the column, which TColumnEh.FieldName = FieldName is not found then it returns nil.</sh>
 <br/>
 <br/>

 <dt><code>property SortMarkedColumns: TColumnsEhList</code></dt>
 <br/>
 <sh>List of columns wher sorting markers are set with the TColumnEh.Title.SortMarker property.</sh>
 <br/>
 <br/>

<dl>
</dl>
