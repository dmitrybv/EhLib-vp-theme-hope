<template><div><h1 id="panel-of-detail-information-for-record-–-rowdetailpanel" tabindex="-1"><a class="header-anchor" href="#panel-of-detail-information-for-record-–-rowdetailpanel" aria-hidden="true">#</a> Panel of detail information for record – RowDetailPanel</h1>
<p>Subproperties of <code v-pre>RowDetailPanel</code> property allow you to create and customize the panel of detailed information for grid rows. Panel if detailed information is a special area inside grid where you can put any control from <code v-pre>Component Palette</code> on it. At design-time a panel is always opened under the current record. At run-time panel is hidden, and there is a <code v-pre>+</code> sign at the beginning part of every row. You can click <code v-pre>+</code> sign to open panel. At once time panel can be opened only for one row. You can also open panel using key combination <code v-pre>Ctrl-Down</code> or key <code v-pre>+</code>. Use <code v-pre>Ctrl-Up</code> to return from panel to grid row. Use <code v-pre>*</code> key to show or hide panel depending on current state.</p>
<p><img src="@source/images/clip0013.png" alt="" loading="lazy"></p>
<p>Subproperties of <code v-pre>RowDatailPanel</code> propery:</p>
<p><code v-pre>Active: Boolean</code> 	this propery allows activating panel of detailed information.</p>
<p><code v-pre>Width: Integer</code>   	width of panel</p>
<p><code v-pre>Height: Integer</code>   	height of panel</p>
<p><code v-pre>ActiveControl: TWinControl</code> use this property to define control which will be focused when panel is opening.</p>
<p><code v-pre>BevelEdges: TBevelEdges</code><br>
<code v-pre>BevelInner: TBevelCut</code><br>
<code v-pre>BevelOuter: TBevelCut</code><br>
<code v-pre>BevelKind: TBevelKind</code><br>
<code v-pre>BevelWidth: TBevelWidth</code><br>
<code v-pre>BorderStyle: TBorderStyle</code>:</p>
 <dd>Use these properties to control border style of panel.</dd>
<p><code v-pre>Color: TColor</code>			Color of panel</p>
<p><code v-pre>ParentColor: Boolean</code>	Property defines if it is need to use color of grid as a color of panel.</p>
<p><strong>Public properties:</strong></p>
<p><code v-pre>Visible: Boolean</code>		This property defines if panel is visible. You can set this property at run-time for reading and writing.</p>
<p>Use event <code v-pre>OnCheckRowHaveDetailPanel</code> to control of panel showing in grid. You can set parameter <code v-pre>RowHaveDetailPanel</code> to allow or forbid panel for required record.</p>
<p>Use events <code v-pre>OnRowDetailPanelHide</code> and <code v-pre>OnRowDetailPanelShow</code> to execute special action after panel is hidden or before panel is opened.</p>
</div></template>


