# Internal objects of TMemTableEh component


In most cases to work with data in `TMemTableEh` it is sufficient to use properties and methods of the `TMemTableEh`. However in some cases it is necessary to work with data at low level. `TMemTableEh` component keep records in internal array of records and has seven main objects for processing the internal data:

`TMemTableDataEh`
<sh>Internal table of data. Is have two objects: TMTDataStructEh - describes the structure of a table fields and TRecordsListEh containes a list of records of TMemoryRecordEh type.</sh>

`TMTDataStructEh`
<sh>Describes structure of a table fields. Is have a list of objects that inherited from TMTDataFieldEh class.</sh>

`TMTDataFieldEh`
<sh>base class that describe field type in internal table array. It is a parent for such types as TMTStringDataFieldEh, TMTNumericDataFieldEh, TMTDateTimeDataFieldEh, TMTBlobDataFieldEh, TMTBooleanDataFieldEh, TMTInterfaceDataFieldEh, TMTVariantDataFieldEh, TMTRefObjectFieldEh.</sh>

`TRecordsListEh`
<sh>list of records.</sh>

`TMemoryRecordEh`
<sh>one record in list of record.</sh>

`TRecordsViewEh`
<sh>
  hold filtered list of records. Only those records that meet a TMemTableEh.Filter conditions are hold in RecordsView.
  Hold only records that TMemTableEh.Filter.
</sh>

`TMemoryTreeListEh`
hold a tree-type list of TMemRecViewEh objects with references to record.
