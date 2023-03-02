# Two working mode of TMemTableEh component


There are two working mode of `TMemTableEh`: ‘stand-alone’ and ‘with datadriver’.

### ‘stand-alone’ mode.
In ‘stand-alone’ mode `TMemTableEh` works as independent array of data. Before working with such MemTable it is necessary to create an internal structure of record. For that it is necessary to create external fields (`TFields`) or field definitions in `TMemTableEh` and call `CreateDataSet` method (Or, at design-time, press ‘Create DataSet’ button in Fields editor window).

### 'with datadriver' mode.
The 'with datadriver' mode is activated when `TMemTableEh.DataDriver` property is assigned. Internal array is created automatically on activation of MemTableEh. Structure of the fields is delivered by DataDriver component.
