<template><div><h1 id="storing-records-in-tree-mode-treeview" tabindex="-1"><a class="header-anchor" href="#storing-records-in-tree-mode-treeview" aria-hidden="true">#</a> Storing records in tree mode (TreeView)</h1>
<p>In tree mode the <code v-pre>TMemTableEh create node objects (</code>TMemRecViewEh type<code v-pre>) for each record in the internal array. Node object have reference to parent record (</code>Rec property<code v-pre>) and has a list of child nodes (</code>NodeItems`).</p>
<p>Adjusting <code v-pre>TreeView</code> mode is realized by subproperties of <code v-pre>TMemTableEh.TreeList</code> property. <code v-pre>TMemTableEh</code> automatically adds new record in the tree, using field values defined by <code v-pre>TreeList.KeyFieldName</code> and <code v-pre>TreeList.RefParentFieldName</code> properties. When new record is appearances in <code v-pre>MemTable</code>, it tries to find <code v-pre>Parent</code> record in the list of existing records, it looks throw records trying to find values of the field in <code v-pre>KeyFieldName</code> that is equal to the value of the field defined by <code v-pre>RefParentFieldName</code> property in the new record. Furthermore, it checks, if this record is a parent for other existing records in array.</p>
<p>Building of tree can be speeding up, if you create indexes for fields specified in <code v-pre>TreeList.KeyFieldName</code> and <code v-pre>TreeList.RefParentFieldName</code> properties.</p>
<p>However the maximum speed of building tree is possible to achieve if the records all records will be appended in <code v-pre>DataSet</code> in valid sequence.</p>
<p>In other words every record must be added in <code v-pre>DataSet</code> in same order as it appears in the tree. In last case it is not recommended to create indexes, it can only slow down building of tree. If records appear in <code v-pre>DataSet</code> in valid order set <code v-pre>FullBuildCheck</code> to False. It will not check if the new record have child records in DataSet.</p>
<p>Use the next events to control the tree node expanding in <code v-pre>TMemTableEh</code> components.</p>
<p>In the <code v-pre>TMemTableEh</code> class in the published section new events added. Events fire before or after the expanding of a tree node.</p>
<p><code v-pre>property OnRecordsViewTreeNodeExpanding;</code></p>
<p><code v-pre>property OnRecordsViewTreeNodeExpanded;</code></p>
<p>Events fire when MemTableEh is in tree mode (MemTableEh.TreeList.Active = True).</p>
<p><code v-pre>OnRecordsViewTreeNodeExpanding</code> event is useful for dynamic loading of the elements of the tree before node opens.</p>
<p>For an example of using  <code v-pre>OnRecordsViewTreeNodeExpanding</code> event see the next demo project:
<code v-pre>DEMOS\DBGridEh.DirTree</code></p>
<p>The following classes and properties are used to access and control the operation of <code v-pre>MemTableEh</code> in tree mode:</p>
<p><code v-pre>TMemTableTreeListEh</code></p>
<dd>
<p>The <code v-pre>TMemTableEh.TreeList</code> property is of the TMemTableTreeListEh type and is intended for setting the tree formation at design-time. This property does not contain tree nodes and is intended only for customization.</p>
</dd>
<p><code v-pre>TMemRecViewEh</code></p>
<dd>
<p>Tree nodes are of type <code v-pre>TMemRecViewEh</code> and are stored in class <code v-pre>TMemoryTreeListEh</code> (property <code v-pre>TMemTableEh.RecordsView.MemoryTreeList</code>) in the form of a tree structure. <code v-pre>TMemRecViewEh</code> objects are also used in the flat non-tree <code v-pre>TMemTableEh</code> mode. In the flat mode, the properties related to the tree in the object of the <code v-pre>TMemRecViewEh</code> class are not used. The main class property is a reference to the primary <code v-pre>Rec</code> records of the <code v-pre>TMemoryRecordEh</code> type and properties for controlling the branch of the <code v-pre>NodeIndex</code>, <code v-pre>NodeItems</code>, <code v-pre>NodesCount</code>, <code v-pre>NodeLevel</code>, <code v-pre>NodeParent</code>, etc.</p>
</dd>
<p>The following properties can be used to access tree nodes:</p>
<p><code v-pre>property TMemTableEh.RecordsView.MemoryTreeList.Root: TMemRecViewEh</code></p>
<dd>The root node of the tree. This node is not displayed in the tree. Link to the primary record Rec = nil. This node is always present in the tree even when the DataSet contains no entries.</dd>
<p><code v-pre>property TMemTableEh.RecView: TMemRecViewEh;</code></p>
<dd>A reference to the tree node object on which an entry is currently set in the DataSet. Available only in tree mode.</dd>
<p><code v-pre>TMemoryTreeListEh</code></p>
<dd>Directly the class in which the node tree (tree nodes) is stored. You do not need to form a tree based on the entries in the TMemTableEh.RecordsView.MemTableData.RecordsList list. TMemTableEh does this automatically when new records appear in the original RecordsList. </dd>
<p>To access the status of the tree node of the current Dataset’s record, you can use the following TMemTableEh properties:</p>
<p><code v-pre>property RecView: TMemRecViewEh;</code></p>
<dd>A reference to the tree node of the tree, it is available only in tree mode.</dd>
<p><code v-pre>property TreeNode: TMemRecViewEh;</code></p>
<dd>A link to the View data record object.</dd>
<p><code v-pre>property TMemTableEh.TreeNodeLevel: Integer;</code></p>
<dd>Indicates the level of the node in the tree.</dd>
<p><code v-pre>property TMemTableEh.TreeNodeExpanded: Boolean</code></p>
<dd>Specifies whether the tree node is expanded.</dd>
<p><code v-pre>property TMemTableEh.TreeNodeHasChildren: Boolean</code></p>
<dd>Indicates whether a node has any children.</dd>
<p><code v-pre>property TMemTableEh.TreeNodeChildCount: Integer</code></p>
<dd>An amount of Child elements.</dd>
<br>
<p>Properties of the <code v-pre>TMemTableTreeListEh</code> class (<code v-pre>TMemTableEh.TreeList</code> property):</p>
<p><code v-pre>property Active: Boolean</code></p>
<dd>
<p>Defines that <code v-pre>TreeView</code> mode is active. In <code v-pre>TreeView</code> mode you can access <code v-pre>TMemTableEh</code> properties: <code v-pre>TreeNodeLevel</code>, <code v-pre>TreeNodeExpanded</code>, <code v-pre>TreeNodeHasChildren</code>, <code v-pre>TreeNodeChildCount</code> for current record.</p>
</dd>
<p><code v-pre>property KeyFieldName: String</code></p>
<dd>Holds a name of the key field of record. Child record will refer to parental record with the key determined by the KeyFieldName field.</dd>
<p><code v-pre>property RefParentFieldName: String;</code></p>
<dd>Holds a name of the field that contain reference value to a parent record.</dd>
<p><code v-pre>property DefaultNodeExpanded: Boolean;</code></p>
<dd>Defines a value of Expanded property for new elements of the tree.</dd>
<p><code v-pre>property DefaultNodeHasChildren: Boolean;</code></p>
<dd>Defines a value of HasChildren property for a new elements of the tree.</dd>
<p><code v-pre>property FullBuildCheck: Boolean</code></p>
<dd>Defines if need check if there are Child records in array for new record. Setting this property to False can speed up building of tree, but all child records must be added after parent record.</dd>
<br>
<p>Methods of the TMemTableTreeListEh class (<code v-pre>TMemTableEh.TreeList</code> property):</p>
<p><code v-pre>function Locate(const KeyFields: string; const KeyValues: Variant; Options: TLocateOptions): Boolean; virtual;</code></p>
<dd>
  The method finds an entry in the source list of TMemTableEh.RecordsView.MemTableData.RecordsList and positions the current position in the tree to the node that points to the found entry. If the found node or top-level node is closed (Expanded = False), then the node is expanded so that the record becomes visible in the grid and in the list of visible expanded records.
  In this case, the record can still not be found if it is hidden through the filter DataSet.Filter or DataSet.OnFilterRecord.
</dd>
<p><code v-pre>procedure FullCollapse; virtual;</code>
Collapse all the branches of the tree.</p>
<p><code v-pre>procedure FullExpand; virtual;</code>
Expand all the branches of the tree.
<br></p>
<p>Properties of the class <code v-pre>TMemRecViewEh</code>:</p>
<p><code v-pre>property NodeExpanded: Boolean</code>
Node tree disclosed</p>
<p><code v-pre>property NodeHasChildren: Boolean</code>
Node has a Child nodes</p>
<p><code v-pre>property NodeHasVisibleChildren: Boolean</code>
The node has visible nodes Child</p>
<p><code v-pre>property NodeIndex: Integer</code>
Index node in the node list Parent</p>
<p><code v-pre>property NodeItems[const Index: Integer]: TMemRecViewEh</code>
Access to Child nodes</p>
<p><code v-pre>property NodeLevel: Integer</code>
Level node in the tree</p>
<p><code v-pre>property NodeOwner: TMemoryTreeListEh</code>
Tree nodes owner.</p>
<p><code v-pre>property NodeParent: TMemRecViewEh</code>
Parent node for this node.</p>
<p><code v-pre>property NodesCount: Integer</code>
Number of Child nodes</p>
<p><code v-pre>property NodeVisible: Boolean</code>
Property Value Visible. The node can be visible or not visible in the tree. MemTableEh automatically sets the status of the node, depending on the status of the filtering entries. For all the records that do not fall into the filter assembly NodeVisible property is set to False.</p>
<p><code v-pre>property VisibleNodeIndex: Integer</code>
The index of the node in the list of visible nodes Parent node</p>
<p><code v-pre>property VisibleNodeItems[const Index: Integer]: TMemRecViewEh</code>
Access to visible Child nodes</p>
<p><code v-pre>property VisibleNodesCount: Integer</code>
The number of visible nodes Child
<br></p>
<p>Traversing the tree, depending on the state of the nodes and the contents of the original record.</p>
<p>Traversing a tree using DataSet’s methods.</p>
<p>Using the classic DataSet’s Eof property and the Next method, you can bypass the tree, taking into account the filtered open tree nodes.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button4Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  NameField<span class="token punctuation">:</span> TField<span class="token punctuation">;</span>
  s<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  NameField <span class="token operator">:=</span> MemTableEh1<span class="token punctuation">.</span>FieldByName<span class="token punctuation">(</span><span class="token string">'Name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  MemTableEh1<span class="token punctuation">.</span>DisableControls<span class="token punctuation">;</span>
  MemTableEh1<span class="token punctuation">.</span>First<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token operator">not</span> MemTableEh1<span class="token punctuation">.</span>Eof <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    s <span class="token operator">:=</span> StringOfChar<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">,</span> MemTableEh1<span class="token punctuation">.</span>TreeNode<span class="token punctuation">.</span>NodeLevel<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> NameField<span class="token punctuation">.</span>AsString<span class="token punctuation">;</span>
    DBMemoEh1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    MemTableEh1<span class="token punctuation">.</span>Next<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
  MemTableEh1<span class="token punctuation">.</span>EnableControls<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>With this method of traversing, only Expanded Visible tree nodes will be listed. The visibility of tree nodes is set by filtering data in the DataSet through the DataSet.Filter property.</p>
<p>Traversing a tree using a recursive function.
Having obtained a link to the root node of the tree, using the properties of access to the list of child nodes and the recursive function, you can bypass the entire data tree.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button4Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">procedure</span> WriteTreeNode<span class="token punctuation">(</span>Node<span class="token punctuation">:</span> TMemRecViewEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span>
    i<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
    CurSubNode<span class="token punctuation">:</span> TMemRecViewEh<span class="token punctuation">;</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> Node<span class="token punctuation">.</span>NodesCount<span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">do</span>
    <span class="token keyword">begin</span>
      CurSubNode <span class="token operator">:=</span> Node<span class="token punctuation">.</span>NodeItems<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      DBMemoEh1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>
        StringOfChar<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">,</span> CurSubNode<span class="token punctuation">.</span>NodeLevel<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        VarToStr<span class="token punctuation">(</span>CurSubNode<span class="token punctuation">.</span>Rec<span class="token punctuation">.</span>DataValues<span class="token punctuation">[</span><span class="token string">'NAME'</span><span class="token punctuation">,</span> dvvValueEh<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' - '</span> <span class="token operator">+</span>
        VarToStr<span class="token punctuation">(</span>CurSubNode<span class="token punctuation">.</span>Rec<span class="token punctuation">.</span>DataValues<span class="token punctuation">[</span><span class="token string">'ID'</span><span class="token punctuation">,</span> dvvValueEh<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      WriteTreeNode<span class="token punctuation">(</span>CurSubNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">end</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">begin</span>
  WriteTreeNode<span class="token punctuation">(</span>
    MemTableEh1<span class="token punctuation">.</span>RecordsView<span class="token punctuation">.</span>MemoryTreeList<span class="token punctuation">.</span>Root
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>At the same time at each step you can check the visibility of the node (<code v-pre>CurSubNode.Visible</code>).</p>
<p>You can also check the <code v-pre>CurSubNode.Expanded</code> property to check if the node is open to get a list of only the expanded nodes.
You can also check the field values of the original record to get a list of nodes depending on the values of the <code v-pre>MemTableEh</code> record. To access the value of the fields, use the <code v-pre>Rec</code> property of the current node  - <code v-pre>CurSubNode.Rec.DataValues['FieldName', dvvValueEh]</code>.</p>
<p>Traversing the tree using the <code v-pre>TMemoryTreeListEh</code> class internal flat lists.
The <code v-pre>TMemoryTreeListEh</code> class contains a set of ready-made list of pointers to <code v-pre>TMemRecViewEh</code>, which can be used to traverse the tree depending on the conditions of the filtered / unfiltered records and the expanded (un-opened) nodes</p>
<p>To access these lists, use the following lists.
Full list of nodes, regardless of filtering and openness status</p>
<p><code v-pre>property FlatListCount: Integer</code>
Number of entries in the list</p>
<p><code v-pre>property FlatListItem[const Index: Integer]: TMemRecViewEh</code>
Access to list items as an array</p>
<p>The list of nodes with the filter applied in the DataSet</p>
<p><code v-pre>property AccountableCount: Integer</code>
<code v-pre>property AccountableItem[const Index: Integer]: TMemRecViewEh</code></p>
<p>List of nodes based on filter and openness status
<code v-pre>property VisibleExpandedCount: Integer</code>
<code v-pre>property VisibleExpandedItem [const Index: Integer]: TMemRecViewEh</code></p>
<p>In this example, a complete list of tree nodes is displayed, regardless of the openness status.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button5Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  i<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
  Node<span class="token punctuation">:</span> TMemRecViewEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span> <span class="token keyword">to</span> MemTableEh1<span class="token punctuation">.</span>RecordsView<span class="token punctuation">.</span>MemoryTreeList<span class="token punctuation">.</span>FlatListCount<span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    Node <span class="token operator">:=</span> MemTableEh1<span class="token punctuation">.</span>RecordsView<span class="token punctuation">.</span>MemoryTreeList<span class="token punctuation">.</span>FlatListItem<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    DBMemoEh1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>
        StringOfChar<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">,</span> Node<span class="token punctuation">.</span>NodeLevel<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        VarToStr<span class="token punctuation">(</span>Node<span class="token punctuation">.</span>Rec<span class="token punctuation">.</span>DataValues<span class="token punctuation">[</span><span class="token string">'NAME'</span><span class="token punctuation">,</span> dvvValueEh<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' - '</span> <span class="token operator">+</span>
        VarToStr<span class="token punctuation">(</span>Node<span class="token punctuation">.</span>Rec<span class="token punctuation">.</span>DataValues<span class="token punctuation">[</span><span class="token string">'ID'</span><span class="token punctuation">,</span> dvvValueEh<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Walk through the tree from the current node of the branch up through the tree to the root node.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button5Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  RecView<span class="token punctuation">:</span> TMemRecViewEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  RecView <span class="token operator">:=</span> MemTableEh1<span class="token punctuation">.</span>RecView<span class="token punctuation">;</span>
  <span class="token keyword">while</span> RecView <span class="token operator">&lt;></span> MemTableEh1<span class="token punctuation">.</span>RecordsView<span class="token punctuation">.</span>MemoryTreeList<span class="token punctuation">.</span>Root <span class="token keyword">do</span>
  <span class="token keyword">begin</span>
    DBMemoEh1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>
      StringOfChar<span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">,</span> RecView<span class="token punctuation">.</span>NodeLevel<span class="token punctuation">)</span> <span class="token operator">+</span>
      VarToStr<span class="token punctuation">(</span>RecView<span class="token punctuation">.</span>Rec<span class="token punctuation">.</span>DataValues<span class="token punctuation">[</span><span class="token string">'NAME'</span><span class="token punctuation">,</span> dvvValueEh<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    RecView <span class="token operator">:=</span> RecView<span class="token punctuation">.</span>NodeParent<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div></div></template>


