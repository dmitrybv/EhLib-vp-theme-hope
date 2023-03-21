# Setting the display of tree records


DBGridEh allows you to customize the icons displayed in the grid in tree mode (When MemTable keeps records in a tree view). To customize the display of the icons of the tree, use sub-properties of property TDBGridEh.TreeViewParams. This property is of type TGridTreeViewParamsEh and contains the following sub-properties:

Subproperties of `TDBGridEh.TreeViewParams`:

`GlyphStyle: TTreeViewGlyphStyleEh`

<sh>
  View picture determines the state of the tree branches. Can take the following values:
  tvgsDefaultEh use a default picture in TDBGridEhStyle.GetActualGlyphStyle.
</sh>
 
<dl>
<sh>

  `tvgsClassicEh`

  `tvgsThemedEh`

  `tvgsExplorerThemedEh`
</sh>
</dl>

`ShowTreeLines: Boolean`
<sh>Set this property to True to display the lines connecting the elements of the tree.</sh>

		
		
 	 	 
 	 	 
