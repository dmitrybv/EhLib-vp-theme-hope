<template><div><h1 id="using-dbgrideh-for-sorting-and-filtering-data-in-the-dataset" tabindex="-1"><a class="header-anchor" href="#using-dbgrideh-for-sorting-and-filtering-data-in-the-dataset" aria-hidden="true">#</a> Using DBGridEh for sorting and filtering data in the DataSet</h1>
<p><code v-pre>DBGridEh</code> can not sort or filter data by itself.
But it can pass action for sorting or filtering to the special object that will do it in <code v-pre>DataSet</code>.
You can adjust grid for two types of sorting (local or server), using property <code v-pre>SortLocal</code>
and two type of filtering (also, local and server),
but real possibility to apply each type of operation depends on the type of <code v-pre>DataSet</code>.
For instance, <code v-pre>TBDEDataSet</code> does not suppot sorting locally (inside DataSet).
so you can not sort data locally when grid is linked to <code v-pre>TQuery</code> or <code v-pre>TTable</code>.
Furthermore, <code v-pre>EhLib</code> has only special objects for standard types of <code v-pre>DataSet</code> (not for a third party DataSet's).</p>
<p>Below you can see a table of special object and <code v-pre>DataSet</code> in which those objects can sort or filter data.</p>
<table>
<thead>
<tr>
<th>Unit</th>
<th>DataSet</th>
<th>Local sorting</th>
<th>Server sorting</th>
<th>Local filtering</th>
<th>Server filtering</th>
</tr>
</thead>
<tbody>
<tr>
<td>EhLibBDE</td>
<td>TQuery, TTable</td>
<td>N</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td>EhLibADO</td>
<td>TADOQuery,TADODataSet</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td>EhLibCDS</td>
<td>TClientDataSet</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td>EhLibDBX</td>
<td>TSQLQuery, TSQLDataSet</td>
<td>N</td>
<td>Y</td>
<td>N</td>
<td>Y</td>
</tr>
<tr>
<td>EhLibIBX</td>
<td>TIBQuery, TIBDataSet</td>
<td>N</td>
<td>Y</td>
<td>Y</td>
<td>Y</td>
</tr>
<tr>
<td>EhLibMTE</td>
<td>TMemTableEh</td>
<td>Y</td>
<td>Y*</td>
<td>Y</td>
<td>Y*</td>
</tr>
</tbody>
</table>
<p><code v-pre>*</code> If Grid is configured for Server sorting of Filtering (SortLocal=False, STFilter.Local=False), then sort operation is transferred to the TMemTableEh.DataDriver object.</p>
<p>When grid is adjusted for a local filtering, the special object will build expression and assign it to a property Filter of DataSet.
So we need also to set Filtered to True value manually.
When grid is adjusted for a server filtering, the special object will build SQL:
ORDER BY expression and it will replace ORDER BY string in SQL or Command property of DataSet and it will reopen DataSet.
When grid is adjusted for a local sorting, the special object will perform a sorting using specific type of DataSet.</p>
<p>When the grid is adjusted for a server sorting, the special object will build expression for SQL <code v-pre>WHERE</code> clause in SQL string of dataset.
It will try to find string that begins from key string <code v-pre>/*Filter*/</code> in SQL expression and adds filter
expression after this string in same line
(You can change this key string using global variable - SQLFilterMarker).
So your SQL query must have a line that begins from <code v-pre>/*Filter*/</code>. For instance:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>select * 
from table1
where
/*Filter*/ 1=1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For automatically filtering/sorting data in dataset you need to add one of the units <code v-pre>EhLibXXX</code>
(<code v-pre>EhLibADO</code>, <code v-pre>EhLibBDE</code>, <code v-pre>EhLibCDS</code> ... depend on the type of dataset where the grid is linked to) to <code v-pre>uses</code> clause of any unit of your project.</p>
<p>This units have code to register <code v-pre>TDatasetFeaturesEh</code> based classes (special object) for respective DataSet's.
For other third party DataSet's you have to write and register your own special object or you have to write <code v-pre>OnApplyFilter</code> or/and <code v-pre>OnSortMarkingChanged</code> events for every required grid.
Moreover, you can write <code v-pre>OnApplySorting</code> and/or <code v-pre>OnApplyFilter</code> for the global variable <code v-pre>DBGridEhDataService</code>.
These events have <code v-pre>TNotifyEvent</code> type where Sender is <code v-pre>TCustomDBGridEh</code>.</p>
<p>In <code v-pre>C ++ Builder</code> projects to connect <code v-pre>EhLibXXX</code> module you need to add <code v-pre>EhLibXXX.pas</code> module to the project using <code v-pre>IDE menu -&gt; Project-&gt; Add to Project</code>.</p>
</div></template>


