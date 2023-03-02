---
//icon: article
---
# Using TDBSumList component


### Common understanding of TDBSumList.

You can use `TDBSumList` for totaling records in a `TDataSet` with visible dynamic changes. Set the `DataSet` field in the dataset for which you want to get and write `SumListChanged` event to take specific action after `TDBSumList` has changed. `TDBSumList` has `SumCollection` property that represents a container of `TDBSum` objects. Every `TDBSum` object represents an element that can hold specific aggregation value. `FieldName` and `GroupOperation` determine type of aggregation value, `SumValue` hold current aggregation value. 
`TDBSumList` is embedded in `DBGridEh` component, so that all below text in equal degrees pertains as to `TDBSumList` component and to `TDBGridEh.SumList` property.

### How it works and why SumList sometimes calculate aggregation values incorrectly.

Data-aware controls interact with dataset via `TDataLink` object. `TDataLink` does not allow to recalculate aggregation value quickly. For instance when the record is deleted from dataset, dataset sends `deDataSetChange` event to all `TDataLink` objects, same event is sent when the local filter have been changed. So `TDataLink` can’t define why it gets this event and when it receives such event then it has to recalculate aggregation values running through whole dataset, even when if only one record was deleted from dataset. `SumList` doesn’t use these events and after activation, it reassigns following events of the dataset: `OnAfterEdit`, `OnAfterInsert`, `OnAfterOpen`, `OnAfterPost`, `OnAfterScroll`, `OnBeforeDelete`, `OnAfterClose`. This way allows us to avoid of going through whole dataset when it is not needed. But other problems may appear, such as:

- Assigning these events at runtime. Deactivate SumList before assigning one of the earlier described events at runtime.

- Under some conditions SumList can raise exception of access violation. It can happen when SumList tries to assign events back to dataset which had been already deleted. Such situation can appear when SumList (or DBGridEh) and dataset are placed in different forms (or DataModules). In such situation try to deactivate SumList before the Form or DataModule which contains dataset is deleted.

- SumList can not trace changes in dataset if you use SetRange or ApplyRange methods of TBDEDataSet’s. Call SumList.RecalAll after using such methods.

- SumList can’t trace changes in master dataset for detail dataset but not for BDE datasets. Call SumList.RecalAll after changing active record in master dataset.

In any other case if you see that under some conditions `SumList` calculates values incorrectly call `RecalAll` method.

If `DBGridEh` is connected to `TMemTableEh` then you can show aggregated values in grid using Aggregated fields of `TMemTableEh` and no need to use `TDBGridEh.SumList` properties. `TMemTableEh` uses internal methods to calculate `Aggregated` fields and doesn’t reassign events. 
See description of `TMemTableEh` for detail information about `Aggregated` fields.
