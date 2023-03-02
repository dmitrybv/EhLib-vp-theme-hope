# Using shared array of records by several TMemTableEh’s


`TMemTableEh` allows to use a same array of records by several `TMemTableEh` components. But only one main `TMemTableEh` must be holder of the array. 

Others will connect to this array using `ExternalMemData` property use it. Other `TMemTableEh` components access external data of the main `TMemTableEh` ignoring local filter of main `TMemTableEh`. `DataDriver` property can be assigned only for main `MemTable`. 

Sorting and filtration in each MemTableEh components don’t affect to each other.