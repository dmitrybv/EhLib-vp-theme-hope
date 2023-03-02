# Working with MemTableEh in the 'with datadriver' mode


If `TMemTableEh.DataDriver` property is assigned then MemTable works in 'with datadriver' mode. 

In this case internal array will be created automatically when `MemTableEh` become active. The structure of array is delivered by the `DataDriver` component.

If `FetchAllOnOpen` property is `True` then MemTableEh loads all records from DataDriver on open. 

If `FetchAllOnOpen` is `False` then MemTableEh will not load records until application call Next or FetchRecords methods. 

Method `Next` checks that cursor is positioned at end of `MemTableEh`, if not then it fetch next record and move to the next record in provider. 

Method `FetchRecords` fetch more records from `DataDriver` and add it at the end of internal array of MemTable. 

This method takes one parameter - an amount of records which need to fetch. To fetch all record it is needed to pass ‘-1’ as parameter. When `MemTable` connected to `DBGridEh` the Grid calls `FetchRecords` by itself via `IMemTableEh` interface to display all visible records in the view area. 

If `CachedUpdates` property is `False` then changes are transferred right after `Post` method. 

If `CachedUpdates` is `True` then data are not transferred until the `ApplyUpdates` method is called.
