<template><div><h1 id="setting-the-display-of-tree-records" tabindex="-1"><a class="header-anchor" href="#setting-the-display-of-tree-records" aria-hidden="true">#</a> Setting the display of tree records</h1>
<p>DBGridEh allows you to customize the icons displayed in the grid in tree mode (When MemTable keeps records in a tree view). To customize the display of the icons of the tree, use sub-properties of property TDBGridEh.TreeViewParams. This property is of type TGridTreeViewParamsEh and contains the following sub-properties:</p>
<p>Subproperties of <code v-pre>TDBGridEh.TreeViewParams</code>:</p>
<p><code v-pre>GlyphStyle: TTreeViewGlyphStyleEh</code></p>
<dd>
  View picture determines the state of the tree branches. Can take the following values:
  tvgsDefaultEh use a default picture in TDBGridEhStyle.GetActualGlyphStyle.
</dd>
<dl>
<dd>
<p><code v-pre>tvgsClassicEh</code></p>
<p><code v-pre>tvgsThemedEh</code></p>
<p><code v-pre>tvgsExplorerThemedEh</code></p>
</dd>
</dl>
<p><code v-pre>ShowTreeLines: Boolean</code></p>
<dd>Set this property to True to display the lines connecting the elements of the tree.</dd>
</div></template>


