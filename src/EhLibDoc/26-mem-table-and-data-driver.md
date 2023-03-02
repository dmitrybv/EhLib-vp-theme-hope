---
//icon: article
---
# MemTable and DataDriver

This technology is intended for unified way of loading tabular information from the server to the client with afterward processing these data on the client: editing, sorting, filtrations and unloading changed data back to the server. 

This technology doesn’t include drivers to access server but it have a set of components and global events to redirect flow of data to/from server using your favorite access engine.

The technology is represented by two main components:

`TMemTableEh` - is a dataset that hold data in memory. Its possible to consider it as an array of records.

Besides, this dataset:
- Supports a special interface, which allows DBGridEh component to view and scroll data without moving active record.

- Allows to fetch data from TDataDriverEh object (DataDriver property).

- Allows to unload changes back to DataDriver, instantly or postponed (in dependencies of the CachedUpdates property).

- Allows to create a master/detail relations on the client (filtering record) or on the external source (updating parameters [Params] and requiring data from DataDriver).

- Allows to sort data, including Calculated and Lookup field.

- Allows to work in standalone mode. Allows to create structure and fill data at design-time and save data in DFM file of the Form (When DataDriver property is not assigned).

- Allows to keep record in the manner of trees. Each record can have records-branches and it itself can be an element to other parental record. 
TDBGridEh component supports to show the tree-type structure of these records.

- Allows to connect to the internal array of other TMemTableEh (via ExternalMemData property) and work with its data: sort, filter, edit.
Has interface for requesting list of all unique values in one column of records array, ignoring local filter. TDBGridEh uses this property for automatic filling a list in DropDownBox of the subtitle filter cell.

`TDataDriverEh` - carry out two tasks:
1. Delivers data to `TMemTableEh`.
2. Processes changed records of `TMemTableEh` (writes them in other dataset, or call events for processing the changes in program for passing updates to the server).

Furthermore, there are several components that are inherited from `TDataDriverEh`. These are a `TSQLDataDriverEh`, that have properties to keep five `SQL` expressions and parameters to: query data, delete record, insert record, update record and require one record. `TSQLDataDriverEh` can’t interact with server by itself, but can prepare parameters for request and can call global event to transfer `SQL` expression for processing in application. There are several components which are inherited from `TSQLDataDriverEh` and which can send `SQL` expressions to the server through the corresponding access engine. These are `TBDEDataDriverEh`, `TIBXDataDriverEh`, `TDBXDataDriverEh` and `TADODataDriverEh` components.
