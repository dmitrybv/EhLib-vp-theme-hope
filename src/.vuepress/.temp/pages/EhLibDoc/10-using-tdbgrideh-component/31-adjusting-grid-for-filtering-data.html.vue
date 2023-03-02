<template><div><h1 id="adjusting-grid-for-filtering-data" tabindex="-1"><a class="header-anchor" href="#adjusting-grid-for-filtering-data" aria-hidden="true">#</a> Adjusting grid for filtering data</h1>
<p><code v-pre>TDBGridEh</code> allows to show special row (under title) where user enters expressions in cells for filtering records in dataset.</p>
<p>(Expression in the cell can look like: <code v-pre>&quot;1&quot;</code>, <code v-pre>&quot;&gt;=1&quot;</code>, <code v-pre>&quot;&gt;1 AND &lt;=5&quot;</code>, <code v-pre>&quot;%TestStr%&quot;</code>). Set <code v-pre>STFilter.Visible</code> to <code v-pre>True</code> value to show this special row. AT Run time, when cursor locate in the filter cell, they can press <code v-pre>ENTER</code> to apply filter. Grid will parse expression in every not empty filter cell and call <code v-pre>TDBGridEh.ApplyFilter</code>. And it calls <code v-pre>OnApplyFilter</code> event or passes action to special object, if it is registered.</p>
<p>For normally parsing, the expression in cell have to have next format:</p>
<p><code v-pre>[Operator1] Operand1 [)] [AND|OR Operator2 Operand2 [)] ]</code></p>
<p>Where <code v-pre>OperatorX</code> is one of <code v-pre>[ = | &lt;&gt; | != | &gt; | &lt; | &gt;= | &lt;= | ~ | !~ | in ( ]</code>
<code v-pre>OperandX</code> is a numeric, date or string value or for the operator 'IN' it is a list of values divided by comma.
For instance:</p>
<p><code v-pre>'1'</code></p>
<p><code v-pre>'&gt;=1'</code></p>
<p><code v-pre>'&gt;1 AND &lt;=5'</code></p>
<p><code v-pre>'~ TestStr%'</code></p>
<p><code v-pre>'!~ TestStr_'</code></p>
<p><code v-pre>'in (1,2,3,4,5,6) and &gt;100'</code></p>
<p><code v-pre>'in (Str1,Str2,Str3)'</code></p>
<p>Grid allows to show dropped down list of <code v-pre>STFilter</code> in title cells. Set <code v-pre>STFilter.Location</code> to <code v-pre>stflInTitleFilterEh</code> to active this mode. Use item ‘(Custom…)’ to enter string for filtering or press checkboxes above required values. Global variable <code v-pre>DBGridEhShowInTitleFilterBox</code> contain key combination for opening list of filtering values. By default it contains <code v-pre>'Ctrl-T'</code>.</p>
<p><img src="@source/images/clip0028.png" alt="" loading="lazy"></p>
<p><img src="@source/images/clip0029.png" alt="" loading="lazy"></p>
<p>When grid is connected to the list of uncial values of column is formed automatically. In addition, list is formed with tacking in account of filter applied in other columns. To form list of values and command for filtering, use next events and methods: Events - <code v-pre>TDBGridEh.OnFillSTFilterListValues</code>, <code v-pre>TColumnEh.OnFillSTFilterListValues</code>, <code v-pre>TDBGridEhCenter.OnFillSTFilterListValues</code> or rewrite method <code v-pre>TDatasetFeaturesEh.FillSTFilterListDataValues</code> and  register new class <code v-pre>MyDatasetFeaturesEh</code> for interaction between grid and dataset.</p>
<p>Grid call event <code v-pre>OnFillSTFilterListValues</code> every time when it is needed to fill list of <code v-pre>StFilter</code>, that have next type:</p>
<p><code v-pre>TDBGridEhFillSTFilterListValuesEvent = procedure(Sender: TCustomDBGridEh; Column: TColumnEh; Items: TStrings; var Processed: Boolean) of object;</code></p>
<p>This event presents in <code v-pre>TDBGridEh</code>, <code v-pre>TColumnEh</code>, <code v-pre>TDBGridEhCenter</code>.
Every item of Items list must consists of two values: String - <code v-pre>Items[i]</code> and Object <code v-pre>Items.Objects[i]</code>. Items of object type must be inherited from <code v-pre>TPopupListboxItemEh</code> type and they must be declared as global variables. There are already next global variables in DBGridEh:</p>
<p><code v-pre>PopupListboxItemEhSortAsc: TPopupListboxItemEhSort;</code></p>
<dd>Item of the list show sorting item Asc and executes sorting in ascending order.</dd>
<p><code v-pre>PopupListboxItemEhSortDes: TPopupListboxItemEhSort;</code></p>
<dd>Item of the list show sorting item Asc and executes sorting in descending order.</dd>
<p><code v-pre>PopupListboxItemEhLine: TPopupListboxItemEhLine;</code></p>
<dd>Item of the list show horizontal line. On choosing doesn't perform any actions.</dd>
<p><code v-pre>PopupListboxItemEhClearFilter: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhAll: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhEmpties: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhNotEmties: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhDialog: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhApplyFilter: TPopupListboxItemEhSpec;</code></p>
<p><code v-pre>PopupListboxItemEhData: TPopupListboxItemEhData;</code></p>
<p>Item of the list shows text that defines text of filtering. When it is selected, it is checked by checkbox and it is put in the list of items of values that is needed be in the filtered records.</p>
<p>You can call next methods in the event to fill values by default</p>
<p><code v-pre>TDBGridEh.DefaultFillSTFilterListValues(Column: TColumnEh; Items: TStrings)</code></p>
<p><code v-pre>TDBGridEh.DefaultFillSTFilterListCommandValues(Column: TColumnEh; Items: TStrings)</code></p>
<p><code v-pre>TDBGridEh.DefaultFillSTFilterListDataValues (Column: TColumnEh; Items: TStrings)</code></p>
<p>Next code show OnSTFilterListValues event where sorting items is deleted from list:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>DBGridEh1FillSTFilterListValues<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  Column<span class="token punctuation">:</span> TColumnEh<span class="token punctuation">;</span> Items<span class="token punctuation">:</span> TStrings<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  <span class="token keyword">Index</span><span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  Sender<span class="token punctuation">.</span>DefaultFillSTFilterListValues<span class="token punctuation">(</span>Column<span class="token punctuation">,</span> Items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">Index</span> <span class="token operator">:=</span> Items<span class="token punctuation">.</span>IndexOfObject<span class="token punctuation">(</span>PopupListboxItemEhSortAsc<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token keyword">Index</span> <span class="token operator">>=</span> <span class="token number">0</span> <span class="token keyword">then</span>
    Items<span class="token punctuation">.</span>Delete<span class="token punctuation">(</span><span class="token keyword">Index</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">Index</span> <span class="token operator">:=</span> Items<span class="token punctuation">.</span>IndexOfObject<span class="token punctuation">(</span>PopupListboxItemEhSortDes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token keyword">Index</span> <span class="token operator">>=</span> <span class="token number">0</span> <span class="token keyword">then</span>
    Items<span class="token punctuation">.</span>Delete<span class="token punctuation">(</span><span class="token keyword">Index</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Processed <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>The library can fill list of unique values only for DataSet of TMemTableEh type. To fill values when grid is connected to other type of  DataSet, it is required rewrite <code v-pre>TDatasetFeaturesEh.FillSTFilterListDataValues</code> method and , if it is need, it is required to register class that inherited from <code v-pre>TDatasetFeaturesEh</code>. Read information about <code v-pre>TDatasetFeaturesEh</code> class in <code v-pre>EhLib users guide</code> and <code v-pre>EhLibMTE.Pas</code>.</p>
<p>New properties <code v-pre>STFilterDefaultStringOperator</code>, <code v-pre>STFilterDefaultNumberOperator</code>, <code v-pre>STFilterDefaultDateTimeOperator</code>, <code v-pre>STFilterDefaultBooleanOperator</code> are added in <code v-pre>TDBGridEhCenter</code> class. Use this properties to set default operator that will be used when string in the <code v-pre>STFilter</code> doesn't containt operator. The operators can be assigned apart for <code v-pre>String</code> fields, <code v-pre>Numeric</code> fields, <code v-pre>DateTime</code> fields and <code v-pre>logical</code> fields.</p>
</div></template>


