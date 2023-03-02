import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,f as a}from"./app.ac77cf73.js";const d={},r=a('<h1 id="quick-access-to-the-record-values" tabindex="-1"><a class="header-anchor" href="#quick-access-to-the-record-values" aria-hidden="true">#</a> Quick access to the record values</h1><p>To get values of the fields from specified record in standard DataSet, it is necessary to move to the required record. This not always suitable since when you move to the record using <code>MoveBy</code>, <code>RecNo</code>, <code>Bookmark</code> methods calls events about changing the record position that can bring about big delays and repaint of the screen.</p><p>There are several ways in <code>MemTableEh</code> that allow to get values of the fields without activations record position.</p><ol><li><p>You can use <code>DisableControls</code>, <code>EnableControls</code> methods to deactivate events about changes in <code>DataSet</code>. Disadvantage of this way is that <code>EnableControls</code> causes event about changes <code>DataSet</code>, that will repaint visual component connected to <code>DataSet</code>.</p></li><li><p>You can use <code>InstantReadEnter</code>, <code>InstantReadLeave</code> methods to enter in <code>InstantRead</code> mode. <code>InstantReadEnter</code> enters in mode of viewing records and moves virtual position to the record determined by the <code>RowNum</code> parameter. After that you can read but don’t change values of record. Each call of <code>InstantReadEnter</code> method, must correspond call <code>InstantReadLeave</code>. <code>InstantReadLeave</code> leave a viewing records mode. In <code>InstantRead</code> mode it is not allowed to change values of record. <code>InstantReadEnter</code> and <code>InstantReadLeave</code> methods do not send events about changing position in DataSet.</p></li><li><p>You can use properties to access internal array of records of <code>MemTableEh</code>. Internal objects allow to access values of record as to the array of data with index. Besides you may addresses to all writing an internal array given disregarding local filter. For access to internal structures of data you need to use following properties of <code>TMemTableEh</code>:</p></li></ol><p><code>RecordsView: TRecordsViewEh</code></p><dd>filtered list of records.</dd><p><code>RecordsView.Rec[Index: Integer]: TMemoryRecordEh</code></p><dd>access to certain record in filtered list of records.</dd><p><code>RecordsView.Count: Integer</code></p><dd>Count of records in the filtered list of records. In TreeView mode list have only visible in expanded nodes.</dd><p><code>RecordsView.MemTableData.RecordsList[Index: Integer]: TMemoryRecordEh</code></p><dd>access to certain record in the list of all records.</dd><p><code>RecordsView.MemTableData.RecordsList.Count</code></p><dd>Count of records in list of all records.</dd><p><code>RecordsView.MemTableData.RecordsList[Index: Integer].DataValues[const FieldNames: string; DataValueVersion: TDataValueVersionEh]: Variant</code></p><dd>access to certain value of field in record specified by Index.</dd><p><code>FieldNames</code> parameter specifies the name of the field or list of fields separated by a &quot;;&quot;. In case if FieldNames contains a list of fields, the return value will contain an array of values.</p><p><code>DataValueVersion</code> parameter defines the &quot;version&quot; or the type of value that should be returned or assigned. In most cases, the value dvvValueEh can be used, which defines the current active version of the field value. <br></p><p>In certain cases, the record can contain multiple values for the same field, but the active value is always only one version, which can be get or put by passing <code>dvvValueEh</code> value as a <code>DataValueVersion</code> parameter.</p><p>Multiple values appear when the record is edited or <code>Post</code> method is called for record that was received from a server. Version values can be associated with the kinds of record value buffers. Three buffers can exist for one record:</p><ol><li><p>Buffer of current values. This buffer is created when the record fetches data from a server.</p></li><li><p>Buffer of editing values. This buffer is created at the moment when the record changes it state to Editing. Buffer is destroyed when Post or Cancel method is called.</p></li><li><p>Buffer of old (server) record values. This buffer is created after the Post method is called if the record obtained it initial values from the server. Ones it is written in the buffer values doesn’t been changed hereafter. This buffer is used to generate «UPDATE» or «DELETE» SQL statements.</p></li></ol><p>Unconditional versions - are versions that return values from a specific record buffer.</p><dd><p><code>dvvCurValueEh</code> – A value from a buffer of current values.</p><p><code>dvvEditValueEh</code> – A value from a buffer of editing values.</p><p><code>dvvOldValueEh</code> – A value from a buffer of old (server) record values.</p></dd><p>Conditional versions - these are versions that return the value of the specified buffer, depending on the current state of the record:</p><dd><p><code>dvvValueEh</code> – If the record is in the Editing and Inserting state, then value from the buffer of editing values is returned, otherwise it takes values from the buffer of current values.</p><p><code>dvvOldestValue</code> – If a buffer of old values exist then a value from this buffer is returned, else if a buffer of a current values exist then a value from this buffer is returned, otherwise, it returns a value from a buffer of editing values.</p><p><code>dvvRefreshValue</code> – If a buffer of old values exist then a value from this buffer is returned, otherwise a value from a buffer of current values is returned.</p></dd><h3 id="copying-data-from-to-another-dataset" tabindex="-1"><a class="header-anchor" href="#copying-data-from-to-another-dataset" aria-hidden="true">#</a> Copying data from/to another DataSet.</h3><p>TMemTableEh affords the following methods for copying data from/to another DataSet:</p><p><code>SaveToDataSet method</code></p><dd>Copying it own data in another DataSet, specified by Dest parameter. If RecordCount parameter &gt; 0, the copying begins from current record of source DataSet and copy not more then RecordCount record. If RecordCount = 0 then all records will be copied. When copying the MemTable always add records in Dest DataSet.</dd><p><code>LoadFromDataSet method</code></p><dd> Loads not more then RecordCount records from Source DataSet to itself. If RecordCount = -1 then it load all record. If Mode parameter is lmCopy then all data will be deleted before loading. If Mode parameter is lmAppend then new records will be added to existing data. UseIfCachedUpdates parameter define that new records gets usInserted status. </dd><h3 id="fast-data-loading-when-using-the-loadfromdataset-method" tabindex="-1"><a class="header-anchor" href="#fast-data-loading-when-using-the-loadfromdataset-method" aria-hidden="true">#</a> Fast data loading when using the LoadFromDataSet method</h3><p>When loading data via <code>LoadFromDataSet</code>, by default, standard DataSet methods are used, such as <code>DataSet.Append</code>, DataSet.Fields[i].Value: = v.</p><p>However, these methods may not use all the DataSet&#39;s capabilities for fast data loading. To speed up data loading and use direct access to the data of the loaded <code>DataSet</code> and <code>TMemTableEh</code>, it is possible to register a special method for fast data loading from certain <code>DataSets</code>.</p><p>To implement fast loading, you need to overload the <code>WriteDataSetToMemTable</code> method in the inheritor of the <code>TDatasetFeaturesEh</code> class and register the class using the <code>RegisterDatasetFeaturesEh</code> function.</p><p>For an example of implementation of the <code>WriteDataSetToMemTable</code> method, see the <code>TADOSQLDatasetFeaturesEh</code> class (EhLibADO Module).</p><p><code>TADOSQLDatasetFeaturesEh.WriteDataSetToMemTable</code> method. For the method to start working when the <code>TDatasetFeaturesEh.WriteDataSetToMemTable</code> function is called, you need to register the <code>EhLibADO</code> unit in the uses section of any unit of your project.</p>',37),s=[r];function c(n,i){return t(),o("div",null,s)}const f=e(d,[["render",c],["__file","17-access-record-values.html.vue"]]);export{f as default};