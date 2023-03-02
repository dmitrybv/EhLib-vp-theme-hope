import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as d,f as a}from"./app.ac77cf73.js";const t={},r=a('<h1 id="tdatadrivereh-component" tabindex="-1"><a class="header-anchor" href="#tdatadrivereh-component" aria-hidden="true">#</a> TDataDriverEh component</h1><p><code>TDataDriverEh</code> is universal data provider for <code>TMemTableEh</code> and a handler of the changes in <code>TMemTableEh</code>. <code>TDataDriverEh</code> is a simplest supplier of datas, it is a agent between <code>TMemTableEh</code> and other DataSet, that can to work with the database. Although many DataSet’s can be connected to DBGrid directly, avoiding <code>TMemTableEh</code>, ligament <code>DBGridEh-DataSource-MemTableEh-DataDriverEh-DataSet</code> is possible to use if you want to use advantages of <code>DBGridEh</code> functioning in ligaments with <code>MemTableEh</code> such as <code>ViewScroll</code> mode, tree-type viewing of data, using same data by the several MemTableEh’s.</p><p>In the mode of the supplier, <code>TDataDriverEh</code> takes data from <code>DataSet</code> that assigned to <code>ProviderDataSet</code> property, and copies them in <code>TMemTableEh</code>. Before getting first record, <code>MemTableEh</code> requests structure of fields from <code>TDataDriverEh</code> and create internal array of records. <code>TDataDriverEh</code> build structure of fields on basis of fields list of <code>ProviderDataSet</code>. As required, <code>TDataDriverEh</code> takes values of the current record, writes their to a new record of <code>TMemTableEh</code> and goes over to the next record in <code>ProviderDataSet</code>.</p><p>Furthermore, <code>TDataDriverEh</code> can refresh values of the existing <code>MemTable</code> record from <code>ProviderDataSet</code> (<code>TMemTableEh.RefreshRecord</code> method). <code>TDataDriverEh</code> find record in <code>ProviderDataSet</code> using fields value from <code>KeyFields</code> property and reread values of record in MemTable record. When <code>TDataDriverEh</code> is used as handler of change (<code>TMemTableEh.ApplyUpdates</code> method), it takes a changed record from <code>TMemTableEh</code>, using characteristic <code>KeyFields</code>, finds its position in <code>ProviderDataSet</code>, updates a record in <code>ProviderDataSet</code>, queries it again from <code>ProviderDataSet</code> and returns a record back in <code>TMemTableEh</code>.</p><p>Events of <code>TDataDriverEh</code> allows to control data which are transferred between <code>TDataDriverEh</code> and <code>TMemTableEh</code> , as well as transfer and process changes from any/to other types source of data.</p><p>TDataDriverEh have next events:</p><p><code>OnBuildDataStruct</code></p><dd><p>write this event to change a structure of fields created when <code>TMemTableEh</code> requests structure of fields. You can call <code>DafaultBuildDataStruct</code> method to build a structure by default.</p></dd><p><code>OnProduceDataReader</code></p><dd><p>write this event to return dataset-cursor to read data. You can call <code>DefaultProduceDataReader</code> method to define dataset-cursor by default. By default dataset-cursor will be a <code>ProviderDataSet</code>.</p></dd><p><code>OnReadRecord</code></p><dd><p>write this event to assign values of record of new record that delivered to <code>TMemTableEh</code>, or indicate that no more data. You can call <code>DefaultReadRecord</code> method to assign values by default. By default values of record will be assigned from dataset-cursor. If <code>Eof</code> function of dataset-cursor is <code>True</code> then <code>TDataDriverEh</code> indicate that no more data.</p></dd><p><code>OnAssignFieldValue</code></p><dd><p>write this event to assign a value of each field of new record that is delivered to <code>TMemTableEh</code>, or when record is refreshing. Use <code>DataValueVersion</code> to determine the mode of assigning:</p><p><code>dvvValueEh</code> – when need to assign value for a new record,</p><p><code>dvvRefreshValue</code> - when need to assign value for existing record.</p><p>You can call <code>DefaultAssignFieldValue</code> to assign a value of the field by default.</p></dd><p><code>OnRefreshRecord</code></p><dd><p>write this event to assign fresh value of fields at the refreshment of record from the server. You an call <code>DefaultRefreshRecord</code> to assign fresh values by default.</p></dd><p><code>OnUpdateRecord</code></p><dd><p>write this event to process updated records in <code>TMemTableEh</code>. Use <code>MemRec.UpdateStatus</code> property to determine the type of changes: <code>Updating</code>, <code>Deleting</code> or <code>Inserting</code>. You can call <code>DefaultUpdateRecord</code> to process updated record by default. By default <code>DataDriver</code> conducts changes in <code>ProviderDataSet</code>.</p></dd><p><code>OnUpdateError</code></p><dd><p>write this event to respond certain actions when error is arising in time of processing updates. Following reaction is possible when error is arising:</p><dl><dd><p><code>ueaBreakAbortEh</code> Break this and all following operations of changes, exception is not raising.</p></dd></dl><dl><dd><p><code>ueaBreakRaiseEh</code> Break this and all following operations of changes, rollback transactions, exception is raising.</p></dd></dl><dl><dd><p><code>ueaCountinueEh</code> Ignore an error, does not change a status of a record and continue a performing the rest operations.</p></dd></dl><dl><dd><p><code>ueaRetryEh</code> Repeat an operation (You should undertake actions to prevent this error on next time).</p></dd></dl><dl><dd><p><code>ueaUpdated</code> CountinueSkip Ignore an error, set record status to Unchanged, continue a performing the rest operations.</p></dd></dl><p>You can call DefaultUpdateError to execute actions by default.</p></dd>',20),c=[r];function i(n,s){return o(),d("div",null,c)}const u=e(t,[["render",i],["__file","28-tdatadrivereh-component.html.vue"]]);export{u as default};