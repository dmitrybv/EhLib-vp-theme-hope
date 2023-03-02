<template><div><h1 id="general-concepts-of-tdbvertgrideh-component" tabindex="-1"><a class="header-anchor" href="#general-concepts-of-tdbvertgrideh-component" aria-hidden="true">#</a> General concepts of TDBVertGridEh component</h1>
<p>Component <code v-pre>TDBVertGridEh</code> is a visual component such like a vertical grid. The component is used to display and edit a single <code v-pre>DataSet</code> record in a vertical orientation. The data is displayed in two columns. The first column displays the names of the fields and the second column show values of the current record.</p>
<p><img src="@source/images/TDBVertGridEh.png" alt="" loading="lazy"></p>
<p>In the general case, the each row in the component corresponds to a one field in the <code v-pre>DataSet</code>.</p>
<p><code v-pre>TDBVertGridEh</code> and <code v-pre>TDBGridEh</code> components have a common ancestor - <code v-pre>TCustomDBAxisGridEh</code> and have similar functionality. TDBGridEh component can be regarded as a table with a horizontal display of records and TDBVertGridEh as vertical. In the current version of EhLib TDBVertGridEh can display only one record on the screen.</p>
<p>If you've worked with TDBGridEh component, then for understanding the properties of the components TDBVertGridEh their properties can be compared as follows:</p>
<table>
<thead>
<tr>
<th>Properties of TDBGridEh</th>
<th>Description</th>
<th>Properties of TDBVertGridEh</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Columns</td>
<td>Columns of the grid, that corresponds to fields of the dataset.</td>
<td>Rows</td>
<td>Rows of the grid, that corresponds to fields of the dataset.</td>
</tr>
<tr>
<td>Options</td>
<td>Setting up the basic properties DBGirdEh.</td>
<td>Options</td>
<td>Setting up the basic properties DBVertGridEh.</td>
</tr>
<tr>
<td>ColumnDefValues</td>
<td>The default values for columns TColumnEh.</td>
<td>RowsDefValues</td>
<td>The default values for rows TFieldRowEh.</td>
</tr>
<tr>
<td>GridLineParams</td>
<td>Color settings of dividing lines in the grid.</td>
<td>GridLineParams</td>
<td>Property works similarly.</td>
</tr>
<tr>
<td>&lt;There is no analog&gt;</td>
<td>-</td>
<td>DataColParams</td>
<td>Configuring column display data.</td>
</tr>
<tr>
<td>TitleParams</td>
<td>Configuring the column headings of a column.</td>
<td>LabelColParams</td>
<td>Configuring the column headers display rows of data.</td>
</tr>
<tr>
<td>IndicatorParams</td>
<td>Configuring the indicator column</td>
<td>&lt;There is no analog&gt;</td>
<td></td>
</tr>
<tr>
<td>Flat</td>
<td>Paint 3D grid cell in a slightly raized state.</td>
<td>Flat</td>
<td>Property works similarly.</td>
</tr>
<tr>
<td>DrawGraphicData</td>
<td>Display graphical data from fields like TGraphicField</td>
<td>DrawGraphicData</td>
<td>Property works similarly.</td>
</tr>
<tr>
<td>DrawMemoText</td>
<td>Display text data from Memo fields.</td>
<td>DrawMemoText</td>
<td>Property works similarly.</td>
</tr>
</tbody>
</table>
</div></template>


