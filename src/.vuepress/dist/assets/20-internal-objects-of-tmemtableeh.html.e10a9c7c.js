import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,f as a}from"./app.ac77cf73.js";const d={},r=a('<h1 id="internal-objects-of-tmemtableeh-component" tabindex="-1"><a class="header-anchor" href="#internal-objects-of-tmemtableeh-component" aria-hidden="true">#</a> Internal objects of TMemTableEh component</h1><p>In most cases to work with data in <code>TMemTableEh</code> it is sufficient to use properties and methods of the <code>TMemTableEh</code>. However in some cases it is necessary to work with data at low level. <code>TMemTableEh</code> component keep records in internal array of records and has seven main objects for processing the internal data:</p><p><code>TMemTableDataEh</code></p><dd>Internal table of data. Is have two objects: TMTDataStructEh - describes the structure of a table fields and TRecordsListEh containes a list of records of TMemoryRecordEh type.</dd><p><code>TMTDataStructEh</code></p><dd>Describes structure of a table fields. Is have a list of objects that inherited from TMTDataFieldEh class.</dd><p><code>TMTDataFieldEh</code></p><dd>base class that describe field type in internal table array. It is a parent for such types as TMTStringDataFieldEh, TMTNumericDataFieldEh, TMTDateTimeDataFieldEh, TMTBlobDataFieldEh, TMTBooleanDataFieldEh, TMTInterfaceDataFieldEh, TMTVariantDataFieldEh, TMTRefObjectFieldEh.</dd><p><code>TRecordsListEh</code></p><dd>list of records.</dd><p><code>TMemoryRecordEh</code></p><dd>one record in list of record.</dd><p><code>TRecordsViewEh</code></p><dd> hold filtered list of records. Only those records that meet a TMemTableEh.Filter conditions are hold in RecordsView. Hold only records that TMemTableEh.Filter. </dd><p><code>TMemoryTreeListEh</code> hold a tree-type list of TMemRecViewEh objects with references to record.</p>',15),c=[r];function s(i,n){return t(),o("div",null,c)}const T=e(d,[["render",s],["__file","20-internal-objects-of-tmemtableeh.html.vue"]]);export{T as default};