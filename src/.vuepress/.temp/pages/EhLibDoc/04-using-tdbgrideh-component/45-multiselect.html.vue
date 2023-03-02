<template><div><h1 id="multiselect" tabindex="-1"><a class="header-anchor" href="#multiselect" aria-hidden="true">#</a> Multiselect</h1>
<p><code v-pre>TDBGridEh</code> allows to select records, columns and rectangle areas for following operations above the selected area.
To customize multiselecting you can use next properties:</p>
<dl><dd>
<p><code v-pre>dgMultiSelect in Options property</code> - Specifies whether the multiselect is allowed.</p>
<p><code v-pre>dghClearSelection in OptionsEh property</code> - Specifies whether the selection will be cleared after user move to the next cell.</p>
<p><code v-pre>EditActions property</code> - Specifies actions which user can execute above the selection (<code v-pre>Copy</code>,<code v-pre>Cut</code>,<code v-pre>Delete</code>,<code v-pre>Paste</code>,<code v-pre>SelectAll</code>).</p>
<p><code v-pre>AllowedSelections property</code> - Specifies the types of selections that is allowed to do (<code v-pre>Rows</code>, <code v-pre>Columns</code>, <code v-pre>Rectangle area</code>, <code v-pre>All</code>).</p>
<p><code v-pre>Selection property</code> specifies a current multiselection state, selected records, columns or rectangle area and it has properties and functions to access them.</p>
</dd></dl>
<p>If user change the selected area, the <code v-pre>OnSelectionChange</code> event occurs.</p>
<p>To access the selected area, use the following properties of the grid:</p>
<p><code v-pre>SelectedRows: TBookmarkListEh</code></p>
<dl><dd>
It contains a list of selected records.
</dd></dl>
<p><code v-pre>Selection: TDBGridEhSelection</code> It contains information on the selected area and the list of selected items.</p>
<p><code v-pre>Selection.SelectionType</code></p>
<dl><dd>
</dd></dl>
Use `Selection.SelectionType` property to determine the type of the selected area. `SelectionType` property is of enumeration type, and can contain one of the following
<dl><dd>
<p><code v-pre>gstRecordBookmarks</code> – Records are Selected. Use the property <code v-pre>SelectedRows</code> or <code v-pre>Selection.Rows</code> access to selected records.</p>
<p><code v-pre>gstRectangle</code> – Rectangular area is selected. Use <code v-pre>Selection.Rect</code> property to get the border of the selected area.</p>
<p><code v-pre>gstColumns</code> – Columns are selected. Use <code v-pre>Selection.Columns</code> property to access the list of selected columns</p>
<p><code v-pre>gstAll</code> – all grid is selected.</p>
<p><code v-pre>gstNon</code> – the grid has no multiple selection.</p>
</dd></dl>
<br>
<p><code v-pre>property Selection.Rows</code></p>
<dl><dd>
</dd></dl>
(as did SelectedRows) has type TBookmarkListEh. Pointers to entries in the list are stored as bookmarks DataSet (type TBookmark) and has the following properties and methods:
<p><code v-pre>Count:	Integer</code>	The number of entries in the list of bookmarks</p>
<p><code v-pre>Items[Index: Integer]: TUniBookmarkEh</code>	The property to access elements of an array of selected bookmarks.</p>
<p><code v-pre>CurrentRowSelected	Boolean</code> The property returns and sets, if the current selected entry in the list of selected records.
<br>
<br></p>
<p><code v-pre>Selection.Rect</code></p>
<dl><dd>
</dd></dl>
The `Selection.Rect` property is of `TDBGridEhSelectionRect` type. The property contains the coordinates rectangel selected area. `TDBGridEhSelectionRect` Type gase the following properties and methods:
<dl><dd>
<p><code v-pre>BottomRow: TUniBookmarkEh</code> Pointer to the lower border area. Index specifies the location as a bookmark for a record in DataSet.</p>
<p><code v-pre>LeftCol: Longint</code> The column number of the left border of the selected area.</p>
<p><code v-pre>TopRow: TUniBookmarkEh</code> A pointer to the upper boundary of the field.</p>
<p><code v-pre>RightCol: Longint</code> Column number right border of the selected area.</p>
</dd></dl>
<p>Method</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> DataCellSelected<span class="token punctuation">(</span>DataCol<span class="token punctuation">:</span> Longint<span class="token punctuation">;</span> DataRow<span class="token punctuation">:</span> TUniBookmarkEh<span class="token punctuation">)</span><span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns information whether said cell within the selected area.</p>
<p><code v-pre>Selection.Columns</code></p>
<dl><dd>
<p>The <code v-pre>Selection.Columns</code> property is of <code v-pre>TDBGridEhSelectionCols</code> type. The property contains a list of selected columns. <code v-pre>TDBGridEhSelectionCols</code> type have the following properties and methods:</p>
<p><code v-pre>Count: Integer</code> The number of selected columns.</p>
<p><code v-pre>Items[Index: Integer]: TColumnsEh</code> The property sets the access to the elements of the selected columns.</p>
</dd></dl>
</div></template>


