# Workig with TMemTableEh at design-time

  
At design-time the double click on the component opens a window of component controling - `TMemTableFieldsEditor`. It allows:

- Create fields (TField components) for TMemTableEh.

- Fill TMemTableEh datas.

- Load data in TMemTableEh from other DataSet.

- Create 'stand-alone’ array of data.

- Clean TMemTableEh.


Create new `TDataDriver` object for `TMemTableEh` basing on existing DataSet-source of data. Herewith, designer will try to assign `DataDriver` properties founding on the type DataSet-source. For instance, if you choose to create `DataDriver` of `TSQLDataDriver` type and DataSet-source will have a `TQuery` type, the designer will assign `TSQLDataDriver.SelectComand.CommandText` property automatically from `TQuery.SQL` property.

