# Cached updates


 `TMemTableEh` can work in operative or postpone updates. 

 `CachedUpdates` property defines type if updates. In operative mode of the updates, `TMemTableEh` sends changed record to c right after application call `TMemTableEh.Post` method or append new record in `TMemTableEh`. 
 
 In the postpone mode the updates aren’t sent to postpone, but are accumulated in the special buffer. Data are not transferred until the client application calls the `ApplyUpdates` method. 
 
 To turn on the postpone updates you need set `CachedUpdates` property to True.

 `ApplyUpdates` have a single parameter – `MaxErrors`. `MaxErrors` indicates the maximum number of errors that the `DataDriver` should allow before prematurely stopping update operations. Set `MaxErrors` to –1 to indicate that there is no limit to the number of errors. Set `MaxErrors` to `0` to define that whole process of change will be rejected on first error. Records, which renovations have come with errors, have an additional UpdateError property with type of TUpdateErrorEh.

To identify type of changing of record you need to use `UpdateStatus` method and `StatusFilter` property:

`UpdateStatus` indicates a type of changing of current record in `MemTable`. It returns one of the following values:
<dd>

`usUnmodified` - Indicates that the current record haven’t been changed.

`usModified` - Indicates that the record was edited and changed.

`usInserted` - Indicates that the record was added.

`usDeleted` - Indicates that the record was removed.

</dd>
<br>

`StatusFilter` defines filter for different types of records. `StatusFilter` – is a set that can contains any combination of the following values:

<dd>

`usUnmodified` – Unmodified records are visible in MemTable.

`usModified` - Modified records are visible in MemTable.

`usInserted` - Added records are visible in MemTable.

`usDeleted` – Deleted record are visible in MemTable.

</dd>

By default, `StatusFilter` have [usModified, usInserted, usUnmodified] value. So, deleted records are hidden.

Method `RevertRecord` restores an old condition of the current record and values of fields. If record was added in the program, it is deleted from the list. If record was changed then `UpdateStatus` property is restored to `usUnmodified` value.
Method `MergeChangeLog` deletes a log of cached changes. All added or changed records get `usUnmodified` status.

Method `CancelUpdates` cancels all changes and restores old state of records array.
