<template><div><h1 id="rowpanel-mode" tabindex="-1"><a class="header-anchor" href="#rowpanel-mode" aria-hidden="true">#</a> RowPanel mode</h1>
<p>Grid can work in special mode when every cell of grid can be placed under each other and can have individual height. Set <code v-pre>RowPanel.Active</code> to <code v-pre>True</code> value to activate this mode. At design-time you can place cell, vertical and horizontal size. At run-time the possibility to change position of cell depends on the presence <code v-pre>dghColumnMove</code> value in <code v-pre>OptionsEh</code> property. Possibility to change vertical size of cell depends on <code v-pre>RowSizingAllowed</code> property.</p>
<p><img src="@source/images/clip0014.png" alt="" loading="lazy"></p>
<p>When user change cell width, the grid also changes width of adjoined cells which are placed under or above of changing cell and if the right border of these cells match. By analogy when user changes cell height, grid changes height of cells in left or right part of grid if low borders march. Press and hold <code v-pre>Shift</code> key to change the size of only single cell.</p>
<p>To change cell height of cell you need to move mouse cursor to the low border of the title cell. Mouse cursor will change its image from arrow to two arrows with up and down direction. At this moment press right mouse button and change size.
To change position of cell you need to press right mouse button on the title cell and drag it to the required place.</p>
<p>Additional subproperies of the <code v-pre>RowPanel</code> property:</p>
<p><code v-pre>NavKeysNavigationType: TGridRowPanelNavKeysNavigationTypeEh</code> defines the order of navigation over cells in the grid when keys <code v-pre>Up</code>, <code v-pre>Down</code>, <code v-pre>Left</code>, <code v-pre>Right</code> are pressed.</p>
 <dd>
<p><code v-pre>rpntRowToRowEh</code> - (by default) Keys Up, Down move current cell to next or previous record of dataset. Keys Left, Right works as Tab and Shift-Tab.</p>
<p><code v-pre>rpntCellToCellEh</code> -	Keys Up, Down move current cell to under or above last position from the current cell. Keys Left, Right move current cell to left or right position from the current cell.</p>
</dd>
<p><code v-pre>TabNavigationType: TGridRowPanelTabNavigationTypeEh</code> defines an order of going through cells of the grid by Tab key</p>
 <dd>
<p><code v-pre>rpntUpToDownPriorityEh</code> Go, at first, from top to bottom, than from left to right.</p>
<p><code v-pre>rpntLeftToRightPriorityEh</code> Go, at first, from left to right, than from top to bottom.</p>
</dd>
<p>In the current implementation, the <code v-pre>RowPanel</code> mode is not compatible with the <code v-pre>MultiTitle</code> header mode.
If <code v-pre>RowPanel</code> is enabled, then <code v-pre>MultiTitle</code> headers are disabled automatically.</p>
</div></template>


