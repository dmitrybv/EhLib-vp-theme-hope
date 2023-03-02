# Using indexes


Indexes are used for speeding up searching. 

In particular it is used to building a tree-type structure of records. Pattern of indexes is assigned in `IndexDefs` collection. `TMemTableEh` creates indexes basing on the pattern when it making an internal array of records. It usually happens when `DataSet` is activated.