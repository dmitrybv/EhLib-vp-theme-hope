# Marking and Returning to Records


In EhLib before version 8.1 `TMemTableEh.Bookmark` object stored data in the form of a record number. Starting with version 8.1 the `TMemTableEh.Bookmark` property stores data as a pointer to the record object in the internal array of records. This allows you to uniquely identify a record when filtering, sorting, or deleting data in TMemTableEh.

To see a new possibilities of using `Bookmarks` in `DBGridEh` look at a `Demo` project in the folder – 
`DEMOS\DBGridEh.MemTable.Bookmarks`

Due to changes in the method of storing data in `Bookmarks` the `SearchPanel` of `DBGridEh` component no longer supports searching within the selected records. Instead `DBGridEh` allows you to filter the data through `SearchPanel` without losing the list of selected records in the grid. To make the selected records not be cleared when navigating through `DBGridEh` when sorting set the `dghClearSelection` value in the `TDBGridEh.OptionsEh` property.

In addition to moving from record to record in a dataset (or moving from one record to another by a specific number of records), you can mark a particular location in a dataset so that you can return to this location. `TDataSet` introduces a bookmarking feature that consists of a `Bookmark` property and five bookmark methods. In `TMemTable`, bookmarks contain the record number (`RecNo` property).

### The Bookmark property.

`Bookmark` gets or sets the current bookmark in a dataset. A bookmark marks a location in a dataset so that an application can easily return to that location quickly.
An application can read `Bookmark` to retrieve the bookmark associated with the current record, and it can change the current record in the dataset by assigning a saved bookmark value to this property.

### GetBookmark method

We do not recommend to use this method, use `Bookmark` property instead of it. See VCL documentation for detail.

### GotoBookmark and BookmarkValid method

When passed a bookmark, `GotoBookmark` moves the cursor for the dataset to the location specified in the bookmark. Before calling `GotoBookmark`, you can call `BookmarkValid` to determine if the bookmark points to a record. `BookmarkValid` returns `True` if a specified bookmark points to a record.

### CompareBookmarks method

You can also call `CompareBookmarks` to see if a bookmark you want to move to is different from another (or the current) bookmark. If the two bookmarks refer to the same record (or if both are nil), `CompareBookmarks` returns 0.

### FreeBookmark method

This method is Used in combinations with `GetBookamrk`. I do not recommend to use this method. See VCL documentation for detail.

`function BookmarkToRec(Bookmark: TUniBookmarkEh): TMemoryRecordEh;`

<dd>Convert Bookmark object into a TMemoryRecordEh object.</dd>

`function RecToBookmark(Rec: TMemoryRecordEh): TUniBookmarkEh;`

<dd>Convert a MemoryRecord object into Bookmark object.</dd>

Type of `TUniBookmarkEh` class depends on the version of Delphi and can be `TBookmark`, `array of Byte` or `TBookmarkStr` type.
