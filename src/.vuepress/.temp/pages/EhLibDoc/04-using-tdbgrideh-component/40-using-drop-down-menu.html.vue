<template><div><h1 id="using-the-drop-down-menu-popupmenu" tabindex="-1"><a class="header-anchor" href="#using-the-drop-down-menu-popupmenu" aria-hidden="true">#</a> Using the drop-down menu PopupMenu</h1>
<p>At <code v-pre>DBGridEh</code> there is a <code v-pre>PopupMenuParams</code> property, which manages the construction PopupMenu in the grid. By default, the grid uses the following properties to determine which <code v-pre>PopupMenu</code> is displayed by pressing the right mouse button: <code v-pre>TDBGridEh.PopupMenu</code>, <code v-pre>TColumnEh.PopupMenu</code>, <code v-pre>TColumnEh.Title.PopupMenu</code>. Using subproperties properties <code v-pre>TDBGridEh.PopupMenuParams</code> can expand choice and formation of <code v-pre>PopupMenu</code>.</p>
<p>The <code v-pre>PopupMenuParams</code> property includes the following subproperties:</p>
<p><code v-pre>BuildMenuOnPopup: Boolean</code></p>
<dd>
<p>Defines if it is necessary to build a new PopupMenu or use ready-made. If <code v-pre>BuildMenuOnPopup = True</code>, the grid will form a new <code v-pre>PopupMenu</code> before being displayed. This allows you to create new elements <code v-pre>PopupMenu</code> or change / delete existing <code v-pre>PopupMenu</code> before displaying on the screen. Thus, the elements <code v-pre>PopupMenu</code> can be formed dynamically depending on the location display, and other conditions affecting the list.</p>
</dd>
<p><code v-pre>UseGlobalMenu: Boolean</code></p>
<dd>
<p>Specifies whether you want to add items to the menu in the global <code v-pre>PopupMenu</code> grid. The elements are formed in a global menu procedure <code v-pre>TDBGridEhCenter.BuildCellPopupMenu</code>. By default <code v-pre>BuildCellPopupMenu</code> adds nothing. You can write your version of <code v-pre>TDBGridEhCenter</code> class and override the method <code v-pre>BuildCellPopupMenu</code> to add new elements to the <code v-pre>PopupMenu</code> all Grids of the project. See more info in the section <code v-pre>Using global properties for TDBGridEh</code>.</p>
</dd>
</div></template>


