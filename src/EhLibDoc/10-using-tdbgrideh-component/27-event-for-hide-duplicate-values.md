# Event to indicate accurately when to hide duplicate values


`Column` property `TColumnEh.HideDuplicates` customizes the display of the column so as to hide the value in the cell if it matches the value in the previous record.
There are situations when it is necessary to point out that actually started a new value in the cell, even if the text representation of the values matched. For example: User names can be the same, but user ID is not same. Accordingly, the same name with different ID’s are not duplicates.
Use `OnGetHideDuplicatesValueKeyValue` event assign KeyValue parameter the value that identify unique value for every new display value of the column.

```pascal:no-line-numbers
procedure TForm1.DBGridEh1Columns3GetHideDuplicatesValue (
Sender: TCustomDBGridEh; Column: TColumnEh; var KeyValue: Variant);
begin
  KeyValue: = MemTableEh1 ['EmpNo'];
end; 
```

Demo: See the Demo project to use OnGetHideDuplicatesValue event in the folder –  
`<EhLib Dir\Demos\DBGridEh.HideDuplicates>`
