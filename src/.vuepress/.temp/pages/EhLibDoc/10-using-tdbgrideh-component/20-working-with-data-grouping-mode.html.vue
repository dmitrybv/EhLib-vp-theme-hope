<template><div><h1 id="working-with-data-grouping-mode" tabindex="-1"><a class="header-anchor" href="#working-with-data-grouping-mode" aria-hidden="true">#</a> Working with data grouping mode</h1>
<p>Grid allows to group data in memory using columns as a grouping criterions.
You can create and change grouping at design-time and at run-time.
The grouping works only when grid is connected to dataset of TMemTableEh type.</p>
<p><img src="@source/images/clip0015.png" alt="" loading="lazy"></p>
<p>When grid group data it also sort data in <code v-pre>MemTableEh</code> to have correspondence of data in the grid and in the <code v-pre>MemTable</code>. The Grid track data in the MemTable and moves records in corresponding groups when data are changed. Use subproperties of <code v-pre>Grid.DataGrouping</code> property to control grouping. Use <code v-pre>Grid.DataGrouping.GroupLevels</code> property to create structure of grouping. <code v-pre>GroupLevels</code> is a collection of <code v-pre>TDBGridEhDataGroupLevelEh</code>. Every item of collection corresponds one level of grouping. The key property of the item of collection is the <code v-pre>ColumnName</code> property of  <code v-pre>String</code> type. This property keeps name of the column of field for which the records will be group. Use <code v-pre>TColumnEh.Name</code> property to get the name of the column at run-time.
Use <code v-pre>Font</code> and <code v-pre>Color</code> properties of structures items to control the format of the grouping records. Set <code v-pre>Grid.DataGrouping.Active</code> to True to activate the grouping. Set <code v-pre>GroupPanelVisible</code> property to True to show the current active structure of the grouping. Special panel will be shown with active items of grouping at the top part of the gird. The element of the grouping collection is active when its <code v-pre>ColumnName</code> property holds a name of a column. After activation of grouping panel, you can make and change the grouping structure using drag-n-drop operations. Drag the column title to the grouping panel to group data by this column. In time of forming the tree of grouping, grid creates the new group record when the value of the field of column Column.Field is changed. You can change key value of grouping in the event <code v-pre>TDBGridEhDataGroupLevelEh.OnGetKeyValue</code> or <code v-pre>TColumnsEh.OnGroupGetKeyValue</code>. Take current value of the key value from the field <code v-pre>GroupLevel.Column.Field.Value</code>. Write the changed value to the <code v-pre>KeyValue</code> parameter of the event procedure.</p>
<p>For example, next event will form tree of grouping that will have only two grouping records <code v-pre>Big</code> and <code v-pre>Small</code> for numeric field that have record values that bigger or smaller them 100.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>gridFishColumns6GroupGetKeyValue<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> <span class="token keyword">var</span> KeyValue<span class="token punctuation">:</span> Variant<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> Column<span class="token punctuation">.</span>Field<span class="token punctuation">.</span>AsFloat <span class="token operator">></span> <span class="token number">100</span> <span class="token keyword">then</span>
    KeyValue <span class="token operator">:=</span> <span class="token string">'Big'</span>
  <span class="token keyword">else</span>
    KeyValue <span class="token operator">:=</span> <span class="token string">'Small'</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Grid uses key value to form string that will be shown in the grouping row. If you changed key value of the grouping, then you likely need to change algorithm that convert key value to display value for display. Write OnGetKeyValueAsText event to do it. Write Grid.OnDataGroupGetRowText and GroupLevels.OnGetGroupRowText to rewrite the algorithm of forming the text that is shown in the grouping row.</p>
<p>Use property Grid.DataGrouping.GroupDataTree to access the items of grouping tree. The property have the TGridGroupDataTreeEh type and is inherited form TTreeListEh. The items of TTreeListEh class form the tree-type structure of groups and references to DataSet records for the lowest levels of grouping. Use properties FlatVisibleCount and FlatVisibleItem[Index] to access items as a flat list. The flat list FlatVisibleItem contain only items which are in the scope of the expanded nodes. Amount of items in flat array corresponds  amount of rows in the grid. Every item of array is a reference to the instance of TGroupDataTreeNodeEh class and defines a node in the grouping tree. Basic properties of this class are:</p>
<p><code v-pre>Count: Integer</code></p>
<dd>
Amount of nodes in the group. Nodes can be over groups of lower level or references to dataset records.
</dd>
<p><code v-pre>DataGroup: TGridDataGroupLevelEh</code></p>
<dl><dd>
Reference to item of grouping structure. Not empty if the node is a node of group.
</dd></dl>
<p><code v-pre>DataSetRecordViewNo: Integer</code></p>
<dl><dd>
Number of record in MemTableEh. Not empty if the node is a node of the dataset record.
</dd></dl>
<p><code v-pre>Expanded: Boolean</code></p>
<dl><dd>
Node is expanded.
</dd></dl>
<p><code v-pre>Items[Index: Integer]: TGroupDataTreeNodeEh</code></p>
<dl><dd>
List of nodes of the lower level.
</dd></dl>
<p><code v-pre>KeyValue: Variant</code></p>
<dl><dd>
KeyValue
</dd></dl>
<p><code v-pre>Level: Integer</code></p>
<dl><dd>
The number of node level;
</dd></dl>
<p><code v-pre>NodeType: TGroupDataTreeNodeTypeEh</code></p>
<dl><dd>
Type of the node. The Node of a group level or a record level.
</dd></dl>
<p><code v-pre>Parent</code></p>
<dl><dd>
A pointer to the parent branch.
</dd></dl>
<br>
<p>Use Items property of <code v-pre>Grid.DataGrouping.GroupDataTree</code> to access the grouping tree as a tree-type structure. Every item of this list is a reference to a tree node of grouping of highest level.</p>
<p><code v-pre>TDBGridEh.DataGrouping</code> property has next subproperties:</p>
<p><code v-pre>Active: Boolean</code>
Set this property to active grouping in the grid.</p>
<p><code v-pre>DefaultStateExpanded: Boolean</code>
Define Expanded state for every new group node.</p>
<p><code v-pre>GroupLevels: TGridDataGroupLevelsEh</code>
Collection of the grouping structure.  Use this property to define template of grouping.</p>
<p><code v-pre>GroupPanelVisible: Boolean</code>
Set this property to True to show panel of grouping in the top part of the grid. When the panel is visible you can form the structure of grouping by dragging the title of the column onto this panel.</p>
<p><code v-pre>Font: TFont</code>
Defines default Font of grouping records.</p>
<p><code v-pre>Color: TColor</code>
Defines default Color of grouping records.
<br></p>
<p>Write <code v-pre>Grid.OnActiveGroupingStructChanged</code> to take action when the structure of grouping is changed.</p>
<p>Grid calls <code v-pre>OnDataGroupGetRowParams</code> before drawing of a group record.
In the event you can change <code v-pre>Text</code>, <code v-pre>Color</code>, <code v-pre>Font</code> and add Image from <code v-pre>ImageList</code> on the left of the text.
When the event is calling the <code v-pre>DataSet</code> is positioned on the first record in the group. So you can access field values of <code v-pre>Dataset</code> inside the event.</p>
<p><img src="@source/images/clip0016.png" alt="" loading="lazy"></p>
<p>The event has next type and declaration:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>TDBGridEhDataGroupGetGroupRowParamsEvent <span class="token operator">=</span> <span class="token keyword">procedure</span> <span class="token punctuation">(</span>
  Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  GroupDataTreeNode<span class="token punctuation">:</span> TGroupDataTreeNodeEh<span class="token punctuation">;</span> 
  Params<span class="token punctuation">:</span> TGroupRowParamsEh<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span> 
</code></pre></div><p><code v-pre>Params</code> is of <code v-pre>TGroupRowParamsEh</code> type and has next properties:</p>
 <dl><dd>
<p><code v-pre>property Color: TColor</code></p>
<dl><dd>Color of the cell background</dd></dl>
<p><code v-pre>property Font: TFont</code></p>
<dl><dd>Font of the text</dd></dl>
<p><code v-pre>property Images: TCustomImageList</code></p>
<dl><dd>ImageList to show images</dd></dl>
<p><code v-pre>property ImageIndex: Integer</code></p>
<dl><dd>Index of a image from the ImageList.</dd></dl>
<p><code v-pre>property GroupRowText: String</code></p>
<dl><dd>Text to show in the cell of the group</dd></dl>
<p><code v-pre>property State: TGridDrawState</code></p>
<dl><dd>Readonly property. Draw state.</dd></dl>
</dd></dl>
<br>
<p><code v-pre>DBGridEh</code> allows you to customize headers groups including the following string parameters: height, font and color of the grouping records, and the thickness and color of a horizontal dividing line.</p>
<p><img src="@source/images/clip0017.png" alt="" loading="lazy"></p>
<p>Sub-properties of property <code v-pre>TDBGridEh.DataGrouping</code>:</p>
<p><code v-pre>Active: Boolean</code></p>
<dl><dd>Specifies that the group mode is enabled. (Group only works when connected to the Grid DataSet type TMemTableEh).</dd></dl>
<p><code v-pre>Color: TColor</code></p>
<dl><dd>The background color of the flash.</dd></dl>
<p><code v-pre>Font: TFont</code></p>
<dl><dd>Font group records.</dd></dl>
<p><code v-pre>GroupLevels: TGridDataGroupLevelsEh</code></p>
<dl><dd>Collection group  levels. Key groups is the name of the column level that is used to group the value.</dd></dl>
<p><code v-pre>Footers: TGridDataGroupFootersEh</code></p>
<dl><dd>A collection of items to display summarizing values in groups and in general on the grid.</dd></dl>
<p><code v-pre>FootersDefValues: TGridDataGroupFootersDefValuesEh</code></p>
<dl><dd>The default values for the summation of records.</dd></dl>
<p><code v-pre>GroupPanelVisible: Boolean</code></p>
<dl><dd>Property indicates that the panel group at the top of the grid is visible. The panel displays the current grouping levels. In Run-Time and Design-Time, you can drag the panel column headers to add to the group</dd></dl>
<p><code v-pre>ParentColor: Boolean</code></p>
<dl><dd>Use color for color Grid of group’s records.</dd></dl>
<p><code v-pre>ParentFont: Boolean</code></p>
<dl><dd>Use Font Grid to display the text of the group.</dd></dl>
<p><code v-pre>DefaultStateExpanded: Boolean</code></p>
<dl><dd>Defines the opening or closing of the State group by default when building groups</dd></dl>
<p><code v-pre>GroupRowDefValues: TGridDataGroupRowDefValuesEh</code></p>
<dl><dd>Default values for the grouping of records.</dd></dl>
<p><code v-pre>ShiftFolldataGroupRow: Boolean</code></p>
<dl><dd>Property specifies whether you want to move the Group recording the lowest level to the left of the data records.</dd></dl>
<h3 id="displaying-summing-records-in-groups" tabindex="-1"><a class="header-anchor" href="#displaying-summing-records-in-groups" aria-hidden="true">#</a> Displaying summing records in groups.</h3>
<p>In the group is allowed to display a grid summarizing the records for each group, and the overall record summarizing the bottom of the grid.</p>
<p><img src="@source/images/clip0018.png" alt="" loading="lazy"></p>
<p>Use a collection <code v-pre>TDBGridEh.DataGrouping.Footers</code> to create entries accumulating information (footer). Each item in the collection is one entry footer. One record footers will appear in several places in the grid. First, the record shows the footer at the bottom of the grid and displays aggregated values across the DataSet. Second, the record shows the footer of each group. The first entry footer can be displayed in the header record of the group. The first record for the state of the property is responsible footer <code v-pre>DataGrouping</code>.<code v-pre>GroupRowDefValues.FooterInGroupRow</code>. When <code v-pre>FooterInGroupRow = True</code> <code v-pre>Footers</code> first item in the collection is displayed in the header record of the group.</p>
<p><img src="@source/images/clip0019.png" alt="" loading="lazy"></p>
<p>Each item in the collection <code v-pre>TDBGridEh.DataGrouping.Footers</code> in turn, is a collection of items <code v-pre>ReadOnly</code> footer corresponding to each of the columns of the grid. When you create a new collection Footer, <code v-pre>Footers</code> system automatically populates a collection of Footer and the number of columns in the grid. After creating a new Footer you must select the item if you want to specify a footer, and an aggregate function to count. The function type is defined in the <code v-pre>Footer.ColumnItems[i].ValueType.ShowFunctionName</code> property determines whether to display the values to the left of the short name aggregation functions. <code v-pre>RunTimeCustomizable</code> property determines what type of function can be changed at <code v-pre>RunTime</code> on the right mouse button over a cell’s footer.</p>
<p><code v-pre>Grid.DataGroupoing.Footers[i]: TGridDataGroupFooterEh</code></p>
<p><code v-pre>Color: TColor</code></p>
<dl><dd>
Specifies the background color for the footer color.
</dd></dl>
<p><code v-pre>Font: TFont</code></p>
<dl><dd>
Controls the font in which the title cells displays its data.
</dd></dl>
<p><code v-pre>Visible: Boolean</code></p>
<dl><dd>
Specifies  whether the footer is visible in the grid.
</dd></dl>
<p><code v-pre>ColumnItems: TGridDataGroupFooterColumnItemsEh</code></p>
<dl><dd>
Colleaction of Items for every columns. Items in the collection are created automatically based on the list of columns.
</dd></dl>
<p><code v-pre>ParentColor: Boolean</code></p>
<dl><dd>
Determines where a control looks for its color information.
</dd></dl>
<p><code v-pre>ParentFont: Boolean</code></p>
<dl><dd>
Determines where a control looks for its font information.
</dd></dl>
<p><code v-pre>ShowFunctionName: Boolean</code></p>
<dl><dd>
Specifies whether to show the name of the integrable function in a cell footer.
</dd></dl>
<p><code v-pre>RunTimeCustomizable: Boolean</code></p>
<dl><dd>
Specifies that a user can change summing function at Run-Time by mouse left button click.
</dd></dl>
<p>Grid.DataGrouping.Footers[i].ColumnItems[j]: TGridDataGroupFooterColumnItemEh</p>
<p><code v-pre>Alignment: TAlignment</code></p>
<dl><dd>
Specifies how text is aligned within the footer cell.
</dd></dl>
<p><code v-pre>Color: TColor</code></p>
<dl><dd>
Specifies the background color for the footer color.
</dd></dl>
<p><code v-pre>DisplayFormat: string</code></p>
<dl><dd>
Determines how numeric and time values are formatted for display in a footer cell.
</dd></dl>
<p><code v-pre>Font: TFont</code></p>
<dl><dd>
Controls the font in which the title cells displays its data.
</dd></dl>
<p><code v-pre>ParentColor: Boolean</code></p>
<dl><dd>
Determines where a control looks for its color information.
</dd></dl>
<p><code v-pre>ParentFont: Boolean</code></p>
<dl><dd>
Determines where a control looks for its font information.
</dd></dl>
<p><code v-pre>ValueType: TGroupFooterValueTypeEh</code></p>
<dl><dd>
Summation function.
</dd></dl>
<p><code v-pre>ShowFunctionName: Boolean</code></p>
<dl><dd>
Specifies whether to show the name of the integrable function in a cell footer.
</dd></dl>
<p><code v-pre>RunTimeCustomizable: Boolean</code></p>
<dl><dd>
Specifies that a user can change summing function at Run-Time by mouse left button click.
</dd></dl>
<h3 id="the-use-of-non-standard-algorithms-to-calculate-the-aggregated-values" tabindex="-1"><a class="header-anchor" href="#the-use-of-non-standard-algorithms-to-calculate-the-aggregated-values" aria-hidden="true">#</a> The use of non-standard algorithms to calculate the aggregated values.</h3>
<p>In the group the data grid allows to calculate the value of the elements in the footer of the event. This allows for aggregation functions of any complexity. For each entry <code v-pre>DataSet</code> called <code v-pre>OnDataGroupFooterAggregateValue</code> event in which to calculate the current value of the aggregate value of the event is given for each DataSet entry. For example, the function sum must be added the current field value to the counter sum</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrMailBox<span class="token punctuation">.</span>DBGridEh1Columns5DataGroupFooterAggregateValue <span class="token punctuation">(</span>
  Grid<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span>
  GroupFooter<span class="token punctuation">:</span> TGridDataGroupFooterEh<span class="token punctuation">;</span>
FooterColumnItem<span class="token punctuation">:</span> TGridDataGroupFooterColumnItemEh<span class="token punctuation">;</span> <span class="token keyword">var</span> AValue<span class="token punctuation">:</span> Variant<span class="token punctuation">;</span>
Node<span class="token punctuation">:</span> TGroupDataTreeNodeEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> VarIsEmpty <span class="token punctuation">(</span>AValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
<span class="token keyword">begin</span>
    AValue<span class="token punctuation">:</span> <span class="token operator">=</span> VarArrayCreate <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> varInteger<span class="token punctuation">)</span><span class="token punctuation">;</span>
    AValue <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    AValue <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
  <span class="token keyword">if</span> MemTableEh1post_read<span class="token punctuation">.</span>AsInteger <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">then</span> AValue <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">=</span> AValue <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">else</span> AValue <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">=</span> AValue <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  Processed<span class="token punctuation">:</span> <span class="token operator">=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
</code></pre></div><p>After all calls <code v-pre>OnDataGroupFooterAggregateValue</code> events for each record dataset process causes the event the aggregate value of final settlement - <code v-pre>ColumnEh.OnDataGroupFooterFinalizeValue</code>. If implemented feature requires a final step to calculate a value, it can be done in this event.
For example, to calculate the average value of the function at the final step of the calculation necessary to cut the sum of the number of records.</p>
<p>SumValue / RecordsCount</p>
<p>To implement this functionality, you need to calculate the variable to store two values: the sum of the number of records.For this purpose, the calculation of the variable AValue: Variant can make an array of two values, and in the function of the final payment, divide the first element of the array (sum) to the second element (number).</p>
<p>SumValue / RecordsCount</p>
<p>To implement this functionality, you need to calculate the variable to store two values: the sum of the number of records.For this purpose, the calculation of the variable <code v-pre>AValue: Variant</code> can make an array of two values, and in the function of the final payment, divide the first element of the array (sum) to the second element (number).
When the value of a cell footer display is converted a value to a text representation of <code v-pre>OnDataGroupFooterToDisplayText</code>.
Events <code v-pre>OnDataGroupFooterAggregateValue</code>, <code v-pre>OnDataGroupFooterFinalizeValue</code> <code v-pre>OnDataGroupFooterToDisplayText</code> and declared in the class and <code v-pre>TDBGridEh</code> <code v-pre>TColumnEh</code>.</p>
<p><strong>Event descriptions:</strong></p>
<p><code v-pre>OnDataGroupFooterAggregateValue</code> event
The event is alled for each record dataset. In the event it is necessary to perform the next step of the aggregation functions.</p>
<dl><dd>
<p><code v-pre>Grid: TCustomDBGridEh</code>
Grid for which to calculate the aggregated value.</p>
<p><code v-pre>Column: TColumnEh</code>
The column for which to calculate the aggregated value.</p>
<p><code v-pre>GroupFooter: TGridDataGroupFooterEh</code>
Footer for which to calculate the aggregated value.</p>
<p><code v-pre>FooterColumnItem: TGridDataGroup FooterColumnItemEh</code>
The element footer column for which the aggregated value is calculated.</p>
<p><code v-pre>var AValue	Variant</code>
The current value of the summation.</p>
<p><code v-pre>Node: TGroupDataTreeNodeEh</code>
Tree item grouping.</p>
<p><code v-pre>var Processed: Boolean</code>
Set Processed to True, if you have completed step sum in the event. Otherwise, the step of summing function is handled by default.</p>
</dd></dl>
<p><code v-pre>OnDataGroupFooterFinalizeValue</code> event
Called after all calls OnDataGroup FooterAggregateValue. In the event it is necessary to perform the final calculation of aggregate functions.</p>
<dl><dd>
<p><code v-pre>Grid: TCustomDBGridEh</code></p>
<p><code v-pre>Column: TColumnEh</code></p>
<p><code v-pre>GroupFooter: TGridDataGroup FooterEh</code></p>
<p><code v-pre>FooterColumnItem: TGridDataGroup FooterColumnItemEh</code></p>
<p><code v-pre>var AValue: Variant</code></p>
<p><code v-pre>var Processed: Boolean</code></p>
</dd></dl>
<p><code v-pre>OnDataGroupFooterToDisplayText</code> event
It is called each time when footer cell is drawen. Write this event to transform the internal aggregated values to a display text value.</p>
<dl><dd>
<p><code v-pre>Grid: TCustomDBGridEh</code></p>
<p><code v-pre>Column: TColumnEh</code></p>
<p><code v-pre>GroupFooter: TGridDataGroupFooterEh</code></p>
<p><code v-pre>FooterColumnItem: TGridDataGroupFooterColumnItemEh</code></p>
<p><code v-pre>var AValue: Variant</code></p>
<p><code v-pre>var DisplayValue: String</code></p>
<p><code v-pre>var Processed: Boolean</code></p>
</dd></dl>
<p>Using technology of summation in groups to summarize data where grouping is not necessary.
In the grid, there are two technologies of summarizing data.</p>
<ol>
<li>Summation via SumList using subproperties TDBGridEh.SumList and setup functions through summation TColumnEh.Footer.</li>
<li>Summation via the functional grouping records when TDBGridEh.DataGrouping.Actitve = True.
These two features are independent of each other. Configure one functionality does not affect the other. However it is recommended to use only one feature at a time.
Summation over SumList works for any type of DataSet, while grouping records only works when plugged into the grid TMemTableEh. But adding a SumList there is a drawback concerning data types. SumList technology keeps the total values in the variables of type Currency. The maximum number of digits after the decimal point for the summation of values = 4.
Summation by grouping records using generic type Variant, and also allows the use of non-standard algorithms for aggregation through events.
Summation by grouping records also allows to sum without having to create groups. To make the sum with no groups, activate the group - DataGrouping.Active = True, the elements of the collection to create footers - DataGrouping.Footers, but do not enable the panel grouping DataGrouping.GroupPanelVisible = False. In this case, for each of the items in the collection will be displayed one footer at the bottom of the grid entry.</li>
</ol>
</div></template>


