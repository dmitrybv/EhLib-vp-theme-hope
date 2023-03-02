<template><div><h1 id="workig-with-tmemtableeh-at-design-time" tabindex="-1"><a class="header-anchor" href="#workig-with-tmemtableeh-at-design-time" aria-hidden="true">#</a> Workig with TMemTableEh at design-time</h1>
<p>At design-time the double click on the component opens a window of component controling - <code v-pre>TMemTableFieldsEditor</code>. It allows:</p>
<ul>
<li>
<p>Create fields (TField components) for TMemTableEh.</p>
</li>
<li>
<p>Fill TMemTableEh datas.</p>
</li>
<li>
<p>Load data in TMemTableEh from other DataSet.</p>
</li>
<li>
<p>Create 'stand-alone’ array of data.</p>
</li>
<li>
<p>Clean TMemTableEh.</p>
</li>
</ul>
<p>Create new <code v-pre>TDataDriver</code> object for <code v-pre>TMemTableEh</code> basing on existing DataSet-source of data. Herewith, designer will try to assign <code v-pre>DataDriver</code> properties founding on the type DataSet-source. For instance, if you choose to create <code v-pre>DataDriver</code> of <code v-pre>TSQLDataDriver</code> type and DataSet-source will have a <code v-pre>TQuery</code> type, the designer will assign <code v-pre>TSQLDataDriver.SelectComand.CommandText</code> property automatically from <code v-pre>TQuery.SQL</code> property.</p>
</div></template>


