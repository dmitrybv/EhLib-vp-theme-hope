# Using maintained aggregates


`MemTableEh` provide support for summarizing data over all records of `DataSet`.

`MemTableEh` keep aggregated values (such as `SUM`, `COUNT`) in `TAggregateField` field type. 

At `Design-time` mode use `Fields Editor` to create persistent aggregated field. You can bind such fields to `TDBEditEh` component or to the footer of `TDBGridEh`.
