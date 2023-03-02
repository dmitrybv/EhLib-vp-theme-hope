# Accessing grid columns

You can use the following properties and methods for accessing the grid columns:

##### DBGridEh.Columns
```pascal
property Columns: TDBGridColumnsEh;
```
The main collection of columns  
<br/>

##### DBGridEh.VisibleColumns
```pascal
property VisibleColumns: TColumnsEhList;
```
List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns
<br/>
<br/>
<br/>

```pascal
property DBGridEh.FieldColumns[const FieldName: String]: TColumnEh
```
Search a column by name field. If the column, which `TColumnEh.FieldName = FieldName` is not found, an exception is thrown.
<br/>
<br/>
<br/>

```pascal
function FindFieldColumn(const FieldName: String): TColumnEh;
```
Search column name field. If the column, which `TColumnEh.FieldName = FieldName` is not found then it returns nil.
<br/>
<br/>
<br/>

```pascal
property SortMarkedColumns: TColumnsEhList
```
List of columns where sorting markers are set with the `TColumnEh.Title.SortMarker` property.
<br/>
<br/>
<br/>

##### DBGridEh.VisibleColumns
```pascal
  property DBGridEh.VisibleColumns: TColumnsEhList
```
  <dd>List of visible columns. The list is automatically updated when you change the basic list or change the columns visible columns.</dd>
  <br/>
  <br/>

  <dt><code>property DBGridEh.FieldColumns[const FieldName: String]: TColumnEh</code></dt>
  <br/>
  <dd>Search a column by name field. If the column, which TColumnEh.FieldName = FieldName is not found, an exception is thrown.</dd>
  <br/>
  <br/>

  <dt><code>function FindFieldColumn(const FieldName: String): TColumnEh;</code></dt>
  <br/>
  <dd>Search column name field. If the column, which TColumnEh.FieldName = FieldName is not found then it returns nil.</dd>
  <br/>
  <br/>

  <dt><code>property SortMarkedColumns: TColumnsEhList</code></dt>
  <br/>
  <dd>List of columns wher sorting markers are set with the TColumnEh.Title.SortMarker property.</dd>
  <br/>
  <br/>

<dl>
</dl>
