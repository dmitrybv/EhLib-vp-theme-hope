# Quick access to the record values


To get values of the fields from specified record in standard DataSet, it is necessary to move to the required record. This not always suitable since when you move to the record using `MoveBy`, `RecNo`, `Bookmark` methods calls events about changing the record position that can bring about big delays and repaint of the screen.

There are several ways in `MemTableEh` that allow to get values of the fields without activations record position.

1.	You can use `DisableControls`, `EnableControls` methods to deactivate events about changes in `DataSet`. Disadvantage of this way is that `EnableControls` causes event about changes `DataSet`, that will repaint visual component connected to `DataSet`.

2.	You can use `InstantReadEnter`, `InstantReadLeave` methods to enter in `InstantRead` mode.
`InstantReadEnter` enters in mode of viewing records and moves virtual position to the record determined by the `RowNum` parameter. After that you can read but don’t change values of record. Each call of `InstantReadEnter` method, must correspond call `InstantReadLeave`. `InstantReadLeave` leave a viewing records mode. In `InstantRead` mode it is not allowed to change values of record. `InstantReadEnter` and `InstantReadLeave` methods do not send events about changing position in DataSet.

3.	You can use properties to access internal array of records of `MemTableEh`. Internal objects allow to access values of record as to the array of data with index. Besides you may addresses to all writing an internal array given disregarding local filter. For access to internal structures of data you need to use following properties of `TMemTableEh`:

`RecordsView: TRecordsViewEh`
<sh>filtered list of records.</sh>

`RecordsView.Rec[Index: Integer]: TMemoryRecordEh`
<sh>access to certain record in filtered list of records.</sh>

`RecordsView.Count: Integer`
<sh>Count of records in the filtered list of records. In TreeView mode list have only visible in expanded nodes.</sh>

`RecordsView.MemTableData.RecordsList[Index: Integer]: TMemoryRecordEh`
<sh>access to certain record in the list of all records.</sh>

`RecordsView.MemTableData.RecordsList.Count`
<sh>Count of records in list of all records.</sh>

`RecordsView.MemTableData.RecordsList[Index: Integer].DataValues[const FieldNames: string; DataValueVersion: TDataValueVersionEh]: Variant`
<sh>access to certain value of field in record specified by Index.</sh>

`FieldNames` parameter specifies the name of the field or list of fields separated by a ";". In case if FieldNames contains a list of fields, the return value will contain an array of values.

`DataValueVersion` parameter defines the "version" or the type of value that should be returned or assigned. In most cases, the value dvvValueEh can be used, which defines the current active version of the field value.
<br>

In certain cases, the record can contain multiple values for the same field, but the active value is always only one version, which can be get or put by passing `dvvValueEh` value as a `DataValueVersion` parameter.

Multiple values appear when the record is edited or `Post` method is called for record that was received from a server.
Version values can be associated with the kinds of record value buffers. Three buffers can exist for one record:

1.	Buffer of current values. This buffer is created when the record fetches data from a server.

2.	Buffer of editing values. This buffer is created at the moment when the record changes it state to Editing. Buffer is destroyed when Post or Cancel method is called.

3.	Buffer of old (server) record values. This buffer is created after the Post method is called if the record obtained it initial values from the server. Ones it is written in the buffer values doesn’t been changed hereafter. This buffer is used to generate «UPDATE» or «DELETE» SQL statements.


Unconditional versions - are versions that return values from a specific record buffer.
<sh>

  `dvvCurValueEh` – A value from a buffer of current values.

  `dvvEditValueEh` – A value from a buffer of editing values.

  `dvvOldValueEh` – A value from a buffer of old (server) record values.

</sh>

Conditional versions - these are versions that return the value of the specified buffer, depending on the current state of the record:

<sh>

  `dvvValueEh` – If the record is in the Editing and Inserting state, then value from the buffer of editing values is returned, otherwise it takes values from the buffer of current values.
  
  `dvvOldestValue` – If a buffer of old values exist then a value from this buffer is returned, else if a buffer of a current values exist then a value from this buffer is returned, otherwise, it returns a value from a buffer of editing values.
  
  `dvvRefreshValue` – If a buffer of old values exist then a value from this buffer is returned, otherwise a value from a buffer of current values is returned.
</sh>


### Copying data from/to another DataSet.
 TMemTableEh affords the following methods for copying data from/to another DataSet:

`SaveToDataSet  method`
<sh>Copying it own data in another DataSet, specified by Dest parameter. If RecordCount parameter > 0, the copying begins from current record of source DataSet and copy not more then RecordCount record. If RecordCount = 0 then all records will be copied. When copying the MemTable always add records in Dest DataSet.</sh>

`LoadFromDataSet method`
<sh>
  Loads not more then RecordCount records from Source DataSet to itself. If RecordCount = -1 then it load all record. If Mode parameter is lmCopy then all data will be deleted before loading. If Mode parameter is lmAppend then new records will be added to existing data.
  UseIfCachedUpdates parameter define that new records gets usInserted status.
</sh>

### Fast data loading when using the LoadFromDataSet method

When loading data via `LoadFromDataSet`, by default, standard DataSet methods are used, such as `DataSet.Append`, 
DataSet.Fields[i].Value: = v. 

However, these methods may not use all the DataSet's capabilities for fast data loading.
To speed up data loading and use direct access to the data of the loaded `DataSet` and `TMemTableEh`, it is possible to register a special method for fast data loading from certain `DataSets`.

To implement fast loading, you need to overload the `WriteDataSetToMemTable` method in the inheritor of the `TDatasetFeaturesEh` class and register the class using the `RegisterDatasetFeaturesEh` function.

For an example of implementation of the `WriteDataSetToMemTable` method, see the `TADOSQLDatasetFeaturesEh` class (EhLibADO Module).

`TADOSQLDatasetFeaturesEh.WriteDataSetToMemTable` method. For the method to start working when the `TDatasetFeaturesEh.WriteDataSetToMemTable` function is called, you need to register the `EhLibADO` unit in the uses section of any unit of your project.

