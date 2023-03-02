<template><div><h1 id="tdatadrivereh-component" tabindex="-1"><a class="header-anchor" href="#tdatadrivereh-component" aria-hidden="true">#</a> TDataDriverEh component</h1>
<p><code v-pre>TDataDriverEh</code> is universal data provider for <code v-pre>TMemTableEh</code> and a handler of the changes in <code v-pre>TMemTableEh</code>. <code v-pre>TDataDriverEh</code> is a simplest supplier of datas, it is a agent between <code v-pre>TMemTableEh</code> and other DataSet, that can to work with the database. Although many DataSet’s can be connected to DBGrid directly, avoiding <code v-pre>TMemTableEh</code>, ligament <code v-pre>DBGridEh-DataSource-MemTableEh-DataDriverEh-DataSet</code> is possible to use if you want to use advantages of <code v-pre>DBGridEh</code> functioning in ligaments with <code v-pre>MemTableEh</code> such as <code v-pre>ViewScroll</code> mode, tree-type viewing of data, using same data by the several MemTableEh’s.</p>
<p>In the mode of the supplier, <code v-pre>TDataDriverEh</code> takes data from <code v-pre>DataSet</code> that assigned to <code v-pre>ProviderDataSet</code> property, and copies them in <code v-pre>TMemTableEh</code>. Before getting first record, <code v-pre>MemTableEh</code> requests structure of fields from <code v-pre>TDataDriverEh</code> and create internal array of records. <code v-pre>TDataDriverEh</code> build structure of fields on basis of fields list of <code v-pre>ProviderDataSet</code>. As required, <code v-pre>TDataDriverEh</code> takes values of the current record, writes their to a new record of <code v-pre>TMemTableEh</code> and goes over to the next record in <code v-pre>ProviderDataSet</code>.</p>
<p>Furthermore, <code v-pre>TDataDriverEh</code> can refresh values of the existing <code v-pre>MemTable</code> record from <code v-pre>ProviderDataSet</code> (<code v-pre>TMemTableEh.RefreshRecord</code> method). <code v-pre>TDataDriverEh</code> find record in <code v-pre>ProviderDataSet</code> using fields value from <code v-pre>KeyFields</code> property and reread values of record in MemTable record. When <code v-pre>TDataDriverEh</code> is used as handler of change (<code v-pre>TMemTableEh.ApplyUpdates</code> method), it takes a changed record from <code v-pre>TMemTableEh</code>, using characteristic <code v-pre>KeyFields</code>, finds its position in <code v-pre>ProviderDataSet</code>, updates a record in <code v-pre>ProviderDataSet</code>, queries it again from <code v-pre>ProviderDataSet</code> and returns a record back in <code v-pre>TMemTableEh</code>.</p>
<p>Events of <code v-pre>TDataDriverEh</code> allows to control data which are transferred between <code v-pre>TDataDriverEh</code> and <code v-pre>TMemTableEh</code> , as well as transfer and process changes from any/to other types source of data.</p>
<p>TDataDriverEh have next events:</p>
<p><code v-pre>OnBuildDataStruct</code></p>
<dd>
<p>write this event to change a structure of fields created when <code v-pre>TMemTableEh</code> requests structure of fields. You can call <code v-pre>DafaultBuildDataStruct</code> method to build a structure by default.</p>
</dd>
<p><code v-pre>OnProduceDataReader</code></p>
<dd>
<p>write this event to return dataset-cursor to read data. You can call <code v-pre>DefaultProduceDataReader</code> method to define dataset-cursor by default. By default dataset-cursor will be a <code v-pre>ProviderDataSet</code>.</p>
</dd>
<p><code v-pre>OnReadRecord</code></p>
<dd>
<p>write this event to assign values of record of new record that delivered to <code v-pre>TMemTableEh</code>, or indicate that no more data. You can call <code v-pre>DefaultReadRecord</code> method to assign values by default. By default values of record will be assigned from dataset-cursor. If <code v-pre>Eof</code> function of dataset-cursor is <code v-pre>True</code> then <code v-pre>TDataDriverEh</code> indicate that no more data.</p>
</dd>
<p><code v-pre>OnAssignFieldValue</code></p>
<dd>
<p>write this event to assign a value of each field of new record that is delivered to <code v-pre>TMemTableEh</code>, or when record is refreshing. Use <code v-pre>DataValueVersion</code> to determine the mode of assigning:</p>
<p><code v-pre>dvvValueEh</code> – when need to assign value for a new record,</p>
<p><code v-pre>dvvRefreshValue</code> - when need to assign value for existing record.</p>
<p>You can call <code v-pre>DefaultAssignFieldValue</code> to assign a value of the field by default.</p>
</dd>
<p><code v-pre>OnRefreshRecord</code></p>
<dd>
<p>write this event to assign fresh value of fields at the refreshment of record from the server. You an call <code v-pre>DefaultRefreshRecord</code> to assign fresh values by default.</p>
</dd>
<p><code v-pre>OnUpdateRecord</code></p>
<dd>
<p>write this event to process updated records in <code v-pre>TMemTableEh</code>. Use <code v-pre>MemRec.UpdateStatus</code> property to determine the type of changes: <code v-pre>Updating</code>, <code v-pre>Deleting</code> or <code v-pre>Inserting</code>. You can call <code v-pre>DefaultUpdateRecord</code> to process  updated record by default. By default <code v-pre>DataDriver</code> conducts changes in <code v-pre>ProviderDataSet</code>.</p>
</dd>
<p><code v-pre>OnUpdateError</code></p>
<dd>
<p>write this event to respond certain actions when error is arising in time of processing updates.
Following reaction is possible when error is arising:</p>
<dl>
  <dd>
<p><code v-pre>ueaBreakAbortEh</code> 	Break this and all following operations of changes, exception is not raising.</p>
  </dd>
</dl>
<dl>
  <dd>
<p><code v-pre>ueaBreakRaiseEh</code> 	Break this and all following operations of changes, rollback transactions, exception is raising.</p>
  </dd>
</dl>
<dl>
  <dd>
<p><code v-pre>ueaCountinueEh</code> 	Ignore an error, does not change a status of a record and continue a performing the rest operations.</p>
  </dd>
</dl>
<dl>
  <dd>
<p><code v-pre>ueaRetryEh</code> 	Repeat an operation (You should undertake actions to prevent this error on next time).</p>
  </dd>
</dl>
<dl>
  <dd>
<p><code v-pre>ueaUpdated</code> CountinueSkip 	Ignore an error, set record status to Unchanged, continue a performing the rest operations.</p>
  </dd>
</dl>
<p>You can call DefaultUpdateError to execute actions by default.</p>
</dd>
</div></template>


