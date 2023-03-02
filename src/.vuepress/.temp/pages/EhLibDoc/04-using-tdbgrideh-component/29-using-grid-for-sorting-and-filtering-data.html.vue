<template><div><h1 id="using-dbgrideh-for-sorting-and-filtering-data-in-the-dataset" tabindex="-1"><a class="header-anchor" href="#using-dbgrideh-for-sorting-and-filtering-data-in-the-dataset" aria-hidden="true">#</a> Using DBGridEh for sorting and filtering data in the DataSet</h1>
<p>DBGridEh can not sort or filter data by itself. But it can pass action for sorting or filtering to the special object that will do it in DataSet. You can adjust grid for two types of sorting (local or server), using property SortLocal and two type of filtering (also, local and server), but real possibility to apply each type of operation depends on the type of DataSet. For instance, TBDEDataSet does not suppot sorting locally (inside DataSet). so you can not sort data locally when grid is linked to TQuery or TTable. Furthermore, EhLib has only special objects for standard types of DataSet (not for a third party DataSet's).
Below you can see a table of special object and DataSet in which those objects can sort or filter data.
Unit
DataSet
Local sorting
Server sorting
Local filtering
Server filtering
EhLibBDE
TQuery,
TTable
N
Y
Y
Y
EhLibADO
TADOQuery,
TADODataSet
Y
Y
Y
Y
EhLibCDS
TClientDataSet
Y
Y
Y
Y
EhLibDBX
TSQLQuery,
TSQLDataSet
N
Y
N
Y
EhLibIBX
TIBQuery,
TIBDataSet
N
Y
Y
Y
EhLibMTE
TMemTableEh
Y
Y*
Y
Y*</p>
<ul>
<li>If Grid is configured for Server sorting of Filtering (SortLocal=False, STFilter.Local=False), then sort operation is transferred to the TMemTableEh.DataDriver object.</li>
</ul>
<p>When grid is adjusted for a local filtering, the special object will build expression and assign it to a property Filter of DataSet. So we need also to set Filtered to True value manually.
When grid is adjusted for a server filtering, the special object will build SQL: ORDER BY expression and it will replace ORDER BY string in SQL or Command property of DataSet and it will reopen DataSet.
When grid is adjusted for a local sorting, the special object will perform a sorting using specific type of DataSet.
When the grid is adjusted for a server sorting, the special object will build expression for SQL 'WHERE' clause in SQL string of dataset. It will try to find string that begins from key string '/<em>Filter</em>/'  in SQL expression and adds filter expression after this string in same line (You can change this key string using global variable - SQLFilterMarker) . So your SQL query must have a line that begins from '/<em>Filter</em>/'. For instance:</p>
<p>' select *
from table1
where
/<em>Filter</em>/ 1=1 '</p>
<p>For automatically filtering/sorting data in dataset you need to add one of the units EhLibXXX (EhLibADO, EhLibBDE, EhLibCDS ... depend on the type of dataset where the grid is linked to) to 'uses' clause of any unit of your project. This units have code to register TDatasetFeaturesEh based classes (special object) for respective DataSet's. For other third party DataSet's you have to write and register your own special object or you have to write OnApplyFilter or/and OnSortMarkingChanged events for every required grid. Moreover, you can write OnApplySorting and/or OnApplyFilter for the global variable DBGridEhDataService. These events have TNotifyEvent type where Sender is TCustomDBGridEh.
In C ++ Builder projects to connect EhLibXXX module you need to add EhLibXXX.pas module to the project using IDE menu -&gt; Project-&gt; Add to Project.</p>
</div></template>


