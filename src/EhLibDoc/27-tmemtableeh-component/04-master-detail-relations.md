# Master/detail relations


 `Master/detail` relation is a working mode of two datasets when all visible records of one dataset (DetailDataSet) always correspond to one record of other dataset (MasterDataSet). In time of moving in `MasterDataSet` the `DetailDataSet` will recreate or filters records so that they will correspond to `MasterDataSet` record. The correspondence is adjusted using `MasterFields` and `KeyFields` properties of `DetailDataSet`. `DetailDataSet` always show only the records, which values of the field/fields defined by `MasterFields` property is equal to values of the fields defined by `MasterFields` property of the current record of `MasterDataSet`.

 `TMemTableEh` allows to create a master/detail relations on the client side "mdsOnSelfEh" (by filtering record) or on DataProvider "mdsOnProviderEh" (by recreating list of records in DetailDataSet when record in MasterDataset is changed).

To adjust `TMemTableEh` in the master/detail mode use next properties: `MasterSource`, `MasterFields`, `KeyFields`, `MasterDetailSide`. 

When `MasterDetailSide` is  `mdsOnSelfEh`, `TMemTableEh` will filter records by `DetailFields` fields using values of `MasterDataSet`[MasterFields] fields. When `MasterDetailSide` is `mdsOnProviderEh`, `DetailDataSet` will reopen itself, assigning parameters from `MasterDataSet` [MasterFields]. On opening it will pass parameters to `DataDriver`. In the `mdsOnProviderEh` mode the `DetailFields` are not used. 

The third state of working "mdsOnSelfAfterProviderEh" is a combination of two preceding. Upon first moving to record in `MasterDataSet` the `DetailDataSet` gets records from `DataDriver`, sending him parameters with values, assigned from MasterSource[MasterFields] and add received records in its internal array of record. Upon next moving on same record in `MasterDataSet` the `DetailDataSet` will always only filter records locally.
