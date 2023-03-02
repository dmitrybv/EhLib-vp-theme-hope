# Move rows in the grid


To allow movement of records in the grid, you must include the `dghRecordMoving` value in the `OptionsEh` property.

In this case, automatic (physical) movement of records only works when the grid is connected to a `TMemTableEh`. In other types of DataSets, the physical movement of records must be done by yourself in the `OnMoveRecords` event. In addition, in `TMemTableEh`, with the `TreeList` mode active, `DBGridEh` when moving records allows you to change the `Parent` node of the `Child`'s nodes in the tree. 

At run-time, the record is moved by clicking the mouse button and moving it over the record indicator column (when the multi-record mode is on, you must first select the records that you want to move). The position of the movement is highlighted by a red horizontal line between two adjacent lines of the grid.

While moving the mouse with the left button pressed over the grid and when the mouse is released, the `OnMoveRecords` event is triggered.

```pascal
property OnMoveRecords: TGridMoveRecordsEventEh;

type
  TGridMoveRecordsEventEh = function(Sender: TObject; BookmarkList: TBMListEh;
    ToRecNo: Longint; TreeLevel: Integer; CheckOnly: Boolean): Boolean of object;
```    

While moving the mouse over the grid, you can prohibit data movement to a certain position in the grid (Dataset) by specifying the value of the Result event handler parameter in False. In this case, the grid will not let you release the mouse button over a position that is prohibited to move to. The CheckOnly parameter specifies that the event is triggered while moving the mouse.

When you release the mouse button, the grid also raises the OnMoveRecords event to physically move the record. In this case, the `CheckOnly` parameter is set to False.

The following parameters are also passed to the event:

`BookmarkList: TBMListEh`
<dd>The list of selected entries that follow move.</dd>
<br>


`ToRecNo: Longint;`
<dd>Number of records to which you plan or follow the move data.</dd>
<br>

`TreeLevel: Integer;`
<dd>The level in the tree to which you plan or follow the move data. This parameter is used only when TMemTableEh is in tree mode.</dd>
<br>


If the `OnMoveRecords` event is not assigned, then the grid will call the function of moving records by default - `DefaultMoveDataRows`. You can also call this function inside the event handler when constraints of the moving logic do not prevent this.

When writing logic to check the movement of records, you can use the `TCustomMemTableEh.BookmarkToRec` function to access the field values of the records being moved.

In the following example, in the handler of the `OnMoveRecords` event, it is forbidden to move an entry in which the value of the field `'NODNAME'` is equal to `'ROOT1'`.

```pascal
function TForm1.DBGridEh1MoveRecords(Sender: TObject; BookmarkList: TBMListEh;
  ToRecNo, TreeLevel: Integer; CheckOnly: Boolean): Boolean;
var
  Rec: TMemoryRecordEh;
  Name: String;
begin
  if (CheckOnly = False) then // Check when the record is already trying to moved
  begin
    Rec := MemTableEh1.BookmarkToRec(BookmarkList.Items[0]);
    Name := VarToStr(Rec.DataValues['NODNAME', dvvValueEh]);
    if (Name = 'ROOT1') then
    begin
      ShowMessage(' ROOT1 cannot be moved');
      Result := False;
    end
    else
    begin
      Result := DBGridEh1.DefaultMoveDataRows(BookmarkList, ToRecNo, TreeLevel, CheckOnly);
    end;
  end else
  begin
    Result := DBGridEh1.DefaultMoveDataRows(BookmarkList, ToRecNo, TreeLevel, CheckOnly);
  end;
end;
```