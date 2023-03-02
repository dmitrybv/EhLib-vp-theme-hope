<template><div><h1 id="working-with-lists-mrulist-last-entry-list" tabindex="-1"><a class="header-anchor" href="#working-with-lists-mrulist-last-entry-list" aria-hidden="true">#</a> Working with lists MRUList (last entry list)</h1>
<p>All editing control, as well as classes in the grid columns <code v-pre>TColumnEh</code> (For <code v-pre>DBGridEh</code>) and <code v-pre>TFieldRow</code> (For <code v-pre>DBVerGridEh</code>) contain a <code v-pre>MRUList</code> property.</p>
<p>This feature is designed to manage a list of the last entries. When you start typing in a text editor, the system displays a list of recently entered values and offers to choose from a list of one of the values to not gain it fully again.</p>
<p><img src="@source/images/clip0049.png" alt="" loading="lazy"></p>
<p><code v-pre>MRUList</code> starts only after activation. To activate <code v-pre>MRUList</code> set <code v-pre>MRUList.Active</code> property to <code v-pre>True</code>.
You can complete the list of initial values, using the <code v-pre>MRUList.Items</code> property of <code v-pre>TStrings</code> type. When <code v-pre>MRUList</code> active and filled the <code v-pre>Items</code> property values, the text editor will display a special list editor under control, offering to choose one of the existing values list. At the same list of values will be limited to only those lines, the values that begin with the string contained in the editor. For a complete list of values, delete the text in the editor and press <code v-pre>VK_BACK</code>.</p>
<p>The list of <code v-pre>MRUList</code> values can be formed automatically on the basis of a list of unique values in the <code v-pre>DataSet</code>. To specify that the data should be taken from the <code v-pre>DataSet</code> set <code v-pre>MRUList.ListSourceKind</code> property  to <code v-pre>lskDataSetFieldValuesEh</code>.</p>
<p><img src="@source/images/clip0050.png" alt="" loading="lazy"></p>
<p>Not all <code v-pre>DataSets</code> support access to the internal data structure for a list of unique values of a column.
In the current version of the library <code v-pre>MRUList.ListSourceKind = lskDataSetFieldValuesEh</code> mode works for <code v-pre>DataSet</code> of <code v-pre>TMemTableEh</code> type. In one of the unit for your project it is necessary to add a <code v-pre>EhLibMTE</code> module in the uses clause. This module contains a class that is able get unique values for a field.</p>
<p>If your <code v-pre>DataSet</code> supports the ability to get a list of unique values for a field, then you can write and register your class inherited from <code v-pre>TDatasetFeaturesEh</code>. In the implementation of the class it must written a <code v-pre>FillFieldUniqueValues</code> method. See the example of the implementation in the <code v-pre>EhLibMTE.Pas</code> file.</p>
<p>The <code v-pre>TMRUListEh</code> class contains the following properties:</p>
<p><code v-pre>property AutoAdd: Boolean</code></p>
<dd>Automatically add new value to the list when the control lost input focus.</dd>
<p><code v-pre>property Active: Boolean</code></p>
<dd>MRUList is active</dd>
<p><code v-pre>property CaseSensitive: Boolean</code></p>
<dd>Search and filter text in the list of sensitive of case</dd>
<p><code v-pre>property Items: TStrings</code></p>
<dd>List of Values </dd>
<p><code v-pre>property Limit: Integer</code></p>
<dd>The maximum number of rows in the list. After reaching the limit value monitoring will delete the oldest value prior to the addition of new.</dd>
<p><code v-pre>property Rows: Integer</code></p>
<dd>The size of the list box. The size is given in text strings.</dd>
<p><code v-pre>property ListSourceKind: TMRUListSourceKindEh</code></p>
<dd>
<p>Defines a kind of source data for MRU DropDown list.</p>
<p><code v-pre>lskMRUListItemsEh</code> – source data for DropDown list will be taken from Items property.</p>
<p><code v-pre>lskDataSetFieldValuesEh</code> – source data for DropDown list will be taken from <code v-pre>DataSet</code>. For <code v-pre>DataSet</code> a <code v-pre>TDatasetFeaturesEh</code> class must be registered with implementing of <code v-pre>FillFieldUniqueValues</code> method to list of unique values for a dataset field.</p>
</dd>
</div></template>


