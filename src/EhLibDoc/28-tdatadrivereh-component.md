---
//icon: article
---
# TDataDriverEh component


`TDataDriverEh` is universal data provider for `TMemTableEh` and a handler of the changes in `TMemTableEh`. `TDataDriverEh` is a simplest supplier of datas, it is a agent between `TMemTableEh` and other DataSet, that can to work with the database. Although many DataSet’s can be connected to DBGrid directly, avoiding `TMemTableEh`, ligament `DBGridEh-DataSource-MemTableEh-DataDriverEh-DataSet` is possible to use if you want to use advantages of `DBGridEh` functioning in ligaments with `MemTableEh` such as `ViewScroll` mode, tree-type viewing of data, using same data by the several MemTableEh’s.

In the mode of the supplier, `TDataDriverEh` takes data from `DataSet` that assigned to `ProviderDataSet` property, and copies them in `TMemTableEh`. Before getting first record, `MemTableEh` requests structure of fields from `TDataDriverEh` and create internal array of records. `TDataDriverEh` build structure of fields on basis of fields list of `ProviderDataSet`. As required, `TDataDriverEh` takes values of the current record, writes their to a new record of `TMemTableEh` and goes over to the next record in `ProviderDataSet`.

Furthermore, `TDataDriverEh` can refresh values of the existing `MemTable` record from `ProviderDataSet` (`TMemTableEh.RefreshRecord` method). `TDataDriverEh` find record in `ProviderDataSet` using fields value from `KeyFields` property and reread values of record in MemTable record. When `TDataDriverEh` is used as handler of change (`TMemTableEh.ApplyUpdates` method), it takes a changed record from `TMemTableEh`, using characteristic `KeyFields`, finds its position in `ProviderDataSet`, updates a record in `ProviderDataSet`, queries it again from `ProviderDataSet` and returns a record back in `TMemTableEh`.

Events of `TDataDriverEh` allows to control data which are transferred between `TDataDriverEh` and `TMemTableEh` , as well as transfer and process changes from any/to other types source of data.

TDataDriverEh have next events:

`OnBuildDataStruct`
<dd>

write this event to change a structure of fields created when `TMemTableEh` requests structure of fields. You can call `DafaultBuildDataStruct` method to build a structure by default.
</dd>

`OnProduceDataReader`
<dd>

write this event to return dataset-cursor to read data. You can call `DefaultProduceDataReader` method to define dataset-cursor by default. By default dataset-cursor will be a `ProviderDataSet`.
</dd>

`OnReadRecord`
<dd>

write this event to assign values of record of new record that delivered to `TMemTableEh`, or indicate that no more data. You can call `DefaultReadRecord` method to assign values by default. By default values of record will be assigned from dataset-cursor. If `Eof` function of dataset-cursor is `True` then `TDataDriverEh` indicate that no more data.
</dd>

`OnAssignFieldValue`
<dd>

write this event to assign a value of each field of new record that is delivered to `TMemTableEh`, or when record is refreshing. Use `DataValueVersion` to determine the mode of assigning: 

`dvvValueEh` – when need to assign value for a new record, 

`dvvRefreshValue` - when need to assign value for existing record. 

You can call `DefaultAssignFieldValue` to assign a value of the field by default.
</dd>

`OnRefreshRecord`
<dd>

write this event to assign fresh value of fields at the refreshment of record from the server. You an call `DefaultRefreshRecord` to assign fresh values by default.
</dd>

`OnUpdateRecord`
<dd>

write this event to process updated records in `TMemTableEh`. Use `MemRec.UpdateStatus` property to determine the type of changes: `Updating`, `Deleting` or `Inserting`. You can call `DefaultUpdateRecord` to process  updated record by default. By default `DataDriver` conducts changes in `ProviderDataSet`.
</dd>

`OnUpdateError`
<dd>

  write this event to respond certain actions when error is arising in time of processing updates.
  Following reaction is possible when error is arising:

<dl>
  <dd>
  
  `ueaBreakAbortEh` 	Break this and all following operations of changes, exception is not raising.
  </dd>
</dl>

<dl>
  <dd>

`ueaBreakRaiseEh` 	Break this and all following operations of changes, rollback transactions, exception is raising.
  </dd>
</dl>

<dl>
  <dd>
  
`ueaCountinueEh` 	Ignore an error, does not change a status of a record and continue a performing the rest operations.
  </dd>
</dl>

<dl>
  <dd>

`ueaRetryEh` 	Repeat an operation (You should undertake actions to prevent this error on next time).
  </dd>
</dl>

<dl>
  <dd>

`ueaUpdated` CountinueSkip 	Ignore an error, set record status to Unchanged, continue a performing the rest operations.
  </dd>
</dl>

  You can call DefaultUpdateError to execute actions by default.
  
</dd>
