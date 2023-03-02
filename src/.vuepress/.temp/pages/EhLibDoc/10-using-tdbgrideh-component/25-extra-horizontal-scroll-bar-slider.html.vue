<template><div><h1 id="extra-horizontal-scroll-bar-slider-scrollbar" tabindex="-1"><a class="header-anchor" href="#extra-horizontal-scroll-bar-slider-scrollbar" aria-hidden="true">#</a> Extra horizontal scroll bar slider (ScrollBar)</h1>
<p><code v-pre>DBGridEh</code> allows displaying additional information in the horizontal scrolling section. In this case, the left side of the <code v-pre>SrollBar</code> is moved to the right so as to display information.</p>
<p><img src="@source/images/clip0024.png" alt="" loading="lazy"></p>
<p>Area of additional information may include the following:
•       The number of entries in the <code v-pre>DataSet</code> and the number of selected records in a grid.
•       Navigation buttons on records (<code v-pre>DBNavigator</code>).
•       Search bar and filtering (<code v-pre>SearchPanel</code>).
•      Summary information about the selected data (<code v-pre>MultiSelected</code> area). Data section will be visible when the user selects a region in the grid, square area or column. In this case, in the summary information is displayed: The amount of data, number of selected rows, average, minimum and maximum value</p>
<p><img src="@source/images/clip0025.png" alt="" loading="lazy"></p>
<p>Use the sub-property DBGridEh.HorzScrollBar.ExtraPanel management options to display extra panel:</p>
<dd>
<p><code v-pre>Visible: Boolean</code>
Set the Visible property to True to display additional panel horizontal ScrollBar</p>
<p><code v-pre>NavigatorButtons: TNavButtonSetEh</code>
Use the NavigatorButtons property to determine which navigation buttons will be visible in the database navigator.</p>
<p><code v-pre>TNavigateBtnEh = (nbFirstEh, nbPriorEh, nbNextEh, nbLastEh, nbInsertEh, nbDeleteEh, nbEditEh, nbPostEh, nbCancelEh, nbRefreshEh);</code>
<code v-pre>TNavButtonSetEh = set of TNavigateBtnEh;</code></p>
<p><code v-pre>VisibleItems: TGridSBItemsEh</code>
Use VisibleItems property to determine which items will be visible in the panel.</p>
<p><code v-pre>TGridSBItemEh = (gsbiRecordsInfoEh, gsbiNavigator, gsbiFindEditorEh, gsbiSelAggregationInfoEh);</code>
<code v-pre>TGridSBItemsEh = set of TGridSBItemEh;</code></p>
</dd>
Displaying the search for extra-panel runner is configured through the properties of the search bar Grid.SearchPanel.
Clicking on the navigation button event fires NavigatorPanelButtonClick event. The event is passed the type of button – AButton: TNavigateBtnEh. In the event handler, you can set the Processed parameter to True to avoid calling of the default handler.
</div></template>


