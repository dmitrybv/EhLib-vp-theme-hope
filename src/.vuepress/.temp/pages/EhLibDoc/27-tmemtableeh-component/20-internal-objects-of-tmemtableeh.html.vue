<template><div><h1 id="internal-objects-of-tmemtableeh-component" tabindex="-1"><a class="header-anchor" href="#internal-objects-of-tmemtableeh-component" aria-hidden="true">#</a> Internal objects of TMemTableEh component</h1>
<p>In most cases to work with data in <code v-pre>TMemTableEh</code> it is sufficient to use properties and methods of the <code v-pre>TMemTableEh</code>. However in some cases it is necessary to work with data at low level. <code v-pre>TMemTableEh</code> component keep records in internal array of records and has seven main objects for processing the internal data:</p>
<p><code v-pre>TMemTableDataEh</code></p>
<dd>Internal table of data. Is have two objects: TMTDataStructEh - describes the structure of a table fields and TRecordsListEh containes a list of records of TMemoryRecordEh type.</dd>
<p><code v-pre>TMTDataStructEh</code></p>
<dd>Describes structure of a table fields. Is have a list of objects that inherited from TMTDataFieldEh class.</dd>
<p><code v-pre>TMTDataFieldEh</code></p>
<dd>base class that describe field type in internal table array. It is a parent for such types as TMTStringDataFieldEh, TMTNumericDataFieldEh, TMTDateTimeDataFieldEh, TMTBlobDataFieldEh, TMTBooleanDataFieldEh, TMTInterfaceDataFieldEh, TMTVariantDataFieldEh, TMTRefObjectFieldEh.</dd>
<p><code v-pre>TRecordsListEh</code></p>
<dd>list of records.</dd>
<p><code v-pre>TMemoryRecordEh</code></p>
<dd>one record in list of record.</dd>
<p><code v-pre>TRecordsViewEh</code></p>
<dd>
  hold filtered list of records. Only those records that meet a TMemTableEh.Filter conditions are hold in RecordsView.
  Hold only records that TMemTableEh.Filter.
</dd>
<p><code v-pre>TMemoryTreeListEh</code>
hold a tree-type list of TMemRecViewEh objects with references to record.</p>
</div></template>


