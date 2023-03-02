# Storing records in tree mode (TreeView)


In tree mode the `TMemTableEh create node objects (`TMemRecViewEh type`) for each record in the internal array. Node object have reference to parent record (`Rec property`) and has a list of child nodes (`NodeItems`).

Adjusting `TreeView` mode is realized by subproperties of `TMemTableEh.TreeList` property. `TMemTableEh` automatically adds new record in the tree, using field values defined by `TreeList.KeyFieldName` and `TreeList.RefParentFieldName` properties. When new record is appearances in `MemTable`, it tries to find `Parent` record in the list of existing records, it looks throw records trying to find values of the field in `KeyFieldName` that is equal to the value of the field defined by `RefParentFieldName` property in the new record. Furthermore, it checks, if this record is a parent for other existing records in array. 

Building of tree can be speeding up, if you create indexes for fields specified in `TreeList.KeyFieldName` and `TreeList.RefParentFieldName` properties. 

However the maximum speed of building tree is possible to achieve if the records all records will be appended in `DataSet` in valid sequence.  

In other words every record must be added in `DataSet` in same order as it appears in the tree. In last case it is not recommended to create indexes, it can only slow down building of tree. If records appear in `DataSet` in valid order set `FullBuildCheck` to False. It will not check if the new record have child records in DataSet.

Use the next events to control the tree node expanding in `TMemTableEh` components.

In the `TMemTableEh` class in the published section new events added. Events fire before or after the expanding of a tree node.

`property OnRecordsViewTreeNodeExpanding;`

`property OnRecordsViewTreeNodeExpanded;`

Events fire when MemTableEh is in tree mode (MemTableEh.TreeList.Active = True).

`OnRecordsViewTreeNodeExpanding` event is useful for dynamic loading of the elements of the tree before node opens.

For an example of using  `OnRecordsViewTreeNodeExpanding` event see the next demo project:
`DEMOS\DBGridEh.DirTree`

The following classes and properties are used to access and control the operation of `MemTableEh` in tree mode:

`TMemTableTreeListEh`
<dd>

The `TMemTableEh.TreeList` property is of the TMemTableTreeListEh type and is intended for setting the tree formation at design-time. This property does not contain tree nodes and is intended only for customization.
</dd>

`TMemRecViewEh`
<dd>

Tree nodes are of type `TMemRecViewEh` and are stored in class `TMemoryTreeListEh` (property `TMemTableEh.RecordsView.MemoryTreeList`) in the form of a tree structure. `TMemRecViewEh` objects are also used in the flat non-tree `TMemTableEh` mode. In the flat mode, the properties related to the tree in the object of the `TMemRecViewEh` class are not used. The main class property is a reference to the primary `Rec` records of the `TMemoryRecordEh` type and properties for controlling the branch of the `NodeIndex`, `NodeItems`, `NodesCount`, `NodeLevel`, `NodeParent`, etc. 
</dd>

The following properties can be used to access tree nodes:

`property TMemTableEh.RecordsView.MemoryTreeList.Root: TMemRecViewEh`
<dd>The root node of the tree. This node is not displayed in the tree. Link to the primary record Rec = nil. This node is always present in the tree even when the DataSet contains no entries.</dd>

`property TMemTableEh.RecView: TMemRecViewEh;`
<dd>A reference to the tree node object on which an entry is currently set in the DataSet. Available only in tree mode.</dd>

`TMemoryTreeListEh`
<dd>Directly the class in which the node tree (tree nodes) is stored. You do not need to form a tree based on the entries in the TMemTableEh.RecordsView.MemTableData.RecordsList list. TMemTableEh does this automatically when new records appear in the original RecordsList. </dd>

To access the status of the tree node of the current Dataset’s record, you can use the following TMemTableEh properties:

`property RecView: TMemRecViewEh;`
<dd>A reference to the tree node of the tree, it is available only in tree mode.</dd>

`property TreeNode: TMemRecViewEh;`
<dd>A link to the View data record object.</dd>

`property TMemTableEh.TreeNodeLevel: Integer;`
<dd>Indicates the level of the node in the tree.</dd>

`property TMemTableEh.TreeNodeExpanded: Boolean`
<dd>Specifies whether the tree node is expanded.</dd>

`property TMemTableEh.TreeNodeHasChildren: Boolean`
<dd>Indicates whether a node has any children.</dd>

`property TMemTableEh.TreeNodeChildCount: Integer`
<dd>An amount of Child elements.</dd>
<br>

Properties of the `TMemTableTreeListEh` class (`TMemTableEh.TreeList` property):

`property Active: Boolean`
<dd>

Defines that `TreeView` mode is active. In `TreeView` mode you can access `TMemTableEh` properties: `TreeNodeLevel`, `TreeNodeExpanded`, `TreeNodeHasChildren`, `TreeNodeChildCount` for current record.
</dd>

`property KeyFieldName: String`
<dd>Holds a name of the key field of record. Child record will refer to parental record with the key determined by the KeyFieldName field.</dd>

`property RefParentFieldName: String;`
<dd>Holds a name of the field that contain reference value to a parent record.</dd>

`property DefaultNodeExpanded: Boolean;`
<dd>Defines a value of Expanded property for new elements of the tree.</dd>

`property DefaultNodeHasChildren: Boolean;`
<dd>Defines a value of HasChildren property for a new elements of the tree.</dd>

`property FullBuildCheck: Boolean`
<dd>Defines if need check if there are Child records in array for new record. Setting this property to False can speed up building of tree, but all child records must be added after parent record.</dd>
<br>

Methods of the TMemTableTreeListEh class (`TMemTableEh.TreeList` property):

`function Locate(const KeyFields: string; const KeyValues: Variant; Options: TLocateOptions): Boolean; virtual;`

<dd>
  The method finds an entry in the source list of TMemTableEh.RecordsView.MemTableData.RecordsList and positions the current position in the tree to the node that points to the found entry. If the found node or top-level node is closed (Expanded = False), then the node is expanded so that the record becomes visible in the grid and in the list of visible expanded records.
  In this case, the record can still not be found if it is hidden through the filter DataSet.Filter or DataSet.OnFilterRecord.
</dd>

`procedure FullCollapse; virtual;`
	Collapse all the branches of the tree.

`procedure FullExpand; virtual;`
Expand all the branches of the tree.
<br>

Properties of the class `TMemRecViewEh`:

`property NodeExpanded: Boolean`
Node tree disclosed

`property NodeHasChildren: Boolean`
Node has a Child nodes

`property NodeHasVisibleChildren: Boolean`
The node has visible nodes Child

`property NodeIndex: Integer`
Index node in the node list Parent

`property NodeItems[const Index: Integer]: TMemRecViewEh`
Access to Child nodes

`property NodeLevel: Integer`
Level node in the tree

`property NodeOwner: TMemoryTreeListEh`
Tree nodes owner.

`property NodeParent: TMemRecViewEh`
Parent node for this node.

`property NodesCount: Integer`
Number of Child nodes

`property NodeVisible: Boolean`
Property Value Visible. The node can be visible or not visible in the tree. MemTableEh automatically sets the status of the node, depending on the status of the filtering entries. For all the records that do not fall into the filter assembly NodeVisible property is set to False.

`property VisibleNodeIndex: Integer`
The index of the node in the list of visible nodes Parent node

`property VisibleNodeItems[const Index: Integer]: TMemRecViewEh`
Access to visible Child nodes

`property VisibleNodesCount: Integer`
The number of visible nodes Child
<br>

Traversing the tree, depending on the state of the nodes and the contents of the original record.

Traversing a tree using DataSet’s methods.

Using the classic DataSet’s Eof property and the Next method, you can bypass the tree, taking into account the filtered open tree nodes.


```pascal:no-line-numbers
procedure TForm1.Button4Click(Sender: TObject);
var
  NameField: TField;
  s: String;
begin
  NameField := MemTableEh1.FieldByName('Name');
  MemTableEh1.DisableControls;
  MemTableEh1.First;
  while not MemTableEh1.Eof do
  begin
    s := StringOfChar(' ', MemTableEh1.TreeNode.NodeLevel*2) + NameField.AsString;
    DBMemoEh1.Lines.Add(s);
    MemTableEh1.Next;
  end;
  MemTableEh1.EnableControls;
end;
``` 

With this method of traversing, only Expanded Visible tree nodes will be listed. The visibility of tree nodes is set by filtering data in the DataSet through the DataSet.Filter property.

Traversing a tree using a recursive function.
Having obtained a link to the root node of the tree, using the properties of access to the list of child nodes and the recursive function, you can bypass the entire data tree.

```pascal:no-line-numbers
procedure TForm1.Button4Click(Sender: TObject);

  procedure WriteTreeNode(Node: TMemRecViewEh);
  var
    i: Integer;
    CurSubNode: TMemRecViewEh;
  begin
    for i := 0 to Node.NodesCount-1 do
    begin
      CurSubNode := Node.NodeItems[i];
      DBMemoEh1.Lines.Add(
        StringOfChar(' ', CurSubNode.NodeLevel*2) +
        VarToStr(CurSubNode.Rec.DataValues['NAME', dvvValueEh]) + ' - ' +
        VarToStr(CurSubNode.Rec.DataValues['ID', dvvValueEh]));
      WriteTreeNode(CurSubNode);
    end;
  end;

begin
  WriteTreeNode(
    MemTableEh1.RecordsView.MemoryTreeList.Root
  );
end;
```

At the same time at each step you can check the visibility of the node (`CurSubNode.Visible`).

You can also check the `CurSubNode.Expanded` property to check if the node is open to get a list of only the expanded nodes.
You can also check the field values of the original record to get a list of nodes depending on the values of the `MemTableEh` record. To access the value of the fields, use the `Rec` property of the current node  - `CurSubNode.Rec.DataValues['FieldName', dvvValueEh]`.

Traversing the tree using the `TMemoryTreeListEh` class internal flat lists.
The `TMemoryTreeListEh` class contains a set of ready-made list of pointers to `TMemRecViewEh`, which can be used to traverse the tree depending on the conditions of the filtered / unfiltered records and the expanded (un-opened) nodes

To access these lists, use the following lists.
Full list of nodes, regardless of filtering and openness status

`property FlatListCount: Integer`
Number of entries in the list

`property FlatListItem[const Index: Integer]: TMemRecViewEh`
Access to list items as an array
	
The list of nodes with the filter applied in the DataSet

`property AccountableCount: Integer`
`property AccountableItem[const Index: Integer]: TMemRecViewEh`

List of nodes based on filter and openness status
`property VisibleExpandedCount: Integer`
`property VisibleExpandedItem [const Index: Integer]: TMemRecViewEh`

In this example, a complete list of tree nodes is displayed, regardless of the openness status.

```pascal:no-line-numbers
procedure TForm1.Button5Click(Sender: TObject);
var
  i: Integer;
  Node: TMemRecViewEh;
begin
  for i := 0 to MemTableEh1.RecordsView.MemoryTreeList.FlatListCount-1 do
  begin
    Node := MemTableEh1.RecordsView.MemoryTreeList.FlatListItem[i];
    DBMemoEh1.Lines.Add(
        StringOfChar(' ', Node.NodeLevel*2) +
        VarToStr(Node.Rec.DataValues['NAME', dvvValueEh]) + ' - ' +
        VarToStr(Node.Rec.DataValues['ID', dvvValueEh]));
  end;
end;
``` 

Walk through the tree from the current node of the branch up through the tree to the root node.

```pascal:no-line-numbers
procedure TForm1.Button5Click(Sender: TObject);
var
  RecView: TMemRecViewEh;
begin
  RecView := MemTableEh1.RecView;
  while RecView <> MemTableEh1.RecordsView.MemoryTreeList.Root do
  begin
    DBMemoEh1.Lines.Add(
      StringOfChar(' ', RecView.NodeLevel) +
      VarToStr(RecView.Rec.DataValues['NAME', dvvValueEh])
    );
    RecView := RecView.NodeParent;
  end;
end;
``` 
