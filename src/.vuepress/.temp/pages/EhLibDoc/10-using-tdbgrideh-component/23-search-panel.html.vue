<template><div><h1 id="search-panel-and-filter-data-searchpanel" tabindex="-1"><a class="header-anchor" href="#search-panel-and-filter-data-searchpanel" aria-hidden="true">#</a> Search panel and filter data (SearchPanel)</h1>
<p><code v-pre>DBGridEh</code> can display a special panel to search and filter data in the grid.</p>
<p><img src="@source/images/clip0022.png" alt="" loading="lazy"></p>
<p>In search mode, grid displays the search phrase in all grid cells in a different color (yellow by default).Grid also allows you to filter the data so that the screen will display only those records that include the search string.
There is ellipses button &quot;...&quot; in the <code v-pre>TDBGridEh.SearchPanel</code>. Click on the button opens a drop down menu where you can choose the following search options in the grid:</p>
<ul>
<li>Search area: The current column or the entire grid.</li>
<li>Search with or without text case.</li>
<li>Search complete words or parts of words.
If the found text is hidden behind the border of the cell, the number of hidden found matches is displayed in a yellow box at the top right side of the cell.</li>
</ul>
<p>If the grid is connected to a <code v-pre>DataSet</code> of the type <code v-pre>TMemTableEh</code>, automatic search of the detected cells is performed automatically through the <code v-pre>SearchPanel</code>.
The value found is displayed to the right of the search string.
While the calculation is in progress, the intermediate quantity found is displayed in parentheses.
The final amount found is displayed without parentheses.</p>
<p><img src="@source/images/clip0023.png" alt="" loading="lazy"></p>
<p>To configure the settings panel, search and filter properties using sub-properties <code v-pre>DBGridEh.SearchPanel</code>.</p>
<p>Sub-properties properties <code v-pre>TDBGridEh.SearchPanel</code>:</p>
<p><code v-pre>property Enabled: Boolean</code></p>
<dl><dd>
<p>Set the <code v-pre>Enabled</code> property to <code v-pre>True</code> to activate the search and filter of the panel. Activate the <code v-pre>Panel</code> still does not mean that it will be immediately visible in the grid. Panel's visibility is set through property <code v-pre>PersistentShowing</code>.</p>
</dd></dl>
<p><code v-pre>property PersistentShowing: Boolean</code></p>
<dl><dd>
<p>Specifies that the search panel always visible in the grid. If <code v-pre>PersistentShowing = False</code>, the panel becomes visible after pressing the key combination to activate the search through the panel in the property ShortCut.</p>
</dd></dl>
<p><code v-pre>property ShortCut: TShortCut</code></p>
<dl><dd>
<p>Specifies the key combination to activate the search panel and give focus to the input text editor search bar. Defaults to <code v-pre>Ctrl + F</code>.</p>
</dd></dl>
<p><code v-pre>property Location: TSearchPanelLocationEh</code></p>
<dl><dd>
<p>Location of the search panel. Can take the following values:</p>
 <dl><dd>
<p><code v-pre>splGridTopEh</code> - Search panel at the top of the grid above the title.</p>
<p><code v-pre>splHorzScrollBarExtraPanelEh</code> - Search panel is in the &quot;extra-bar&quot; thumb scroll horizontally. The search panel works correctly in this location, &quot;extra-panel&quot; slider is visible.</p>
<p><code v-pre>splExternal</code> - Search panel is outside the grid. In this mode, the algorithm of the search panel and drawing the sole responsibility of the developer.</p>
</dd></dl>
</dd></dl>
<p><code v-pre>property FilterOnTyping: Boolean</code></p>
<dl><dd>
<p>Specifies that the grid will filter data as you enter text in the text editor panel of the search. If <code v-pre>FilterOnTyping = False</code> then the data will be filtered only by pressing the key «Enter» or click the Apply Filter button in the search panel.</p>
</dd></dl>
<p><code v-pre>property FilterEnabled: Boolean</code></p>
<dl><dd>
<p>Specifies that filter is available in the search panel. If <code v-pre>FilterOnTyping = False</code>, then the search will only be available by code.</p>
</dd></dl>
<p><code v-pre>property OptionsPopupMenuItems: TDBGridSearchPanelOptionsMenuItemsEh</code></p>
<dl><dd>
<p>Specify a list of elements of the drop-down menu that appears on click of Search Options (&quot;...&quot;) button in SearchPanel.
<code v-pre>TDBGridSearchPanelOptionsMenuItemsEh</code> type may comprise the following meanings</p>
<dl><dd>
<p><code v-pre>gsmuSearchScopesEh</code> – Search Area.</p>
<p><code v-pre>gsmuCaseSensitiveEh</code> – Search in case-sensitive mode.</p>
<p><code v-pre>gsmuWholeWordsEh</code> – Search by full word.</p>
</dd></dl>
</dd></dl>
<p><code v-pre>property SearchScope: TDBGridSearchPanelScopeEh</code></p>
<dl><dd>
<p>Specifies the search area that runs by default in Search Panel
The property can be one of the following values:
gssCurrentColumnEh – Search in the current column.
gssEntireGridEh – Search in the entire grid.</p>
</dd></dl>
<p><code v-pre>property CaseSensitive: Boolean</code></p>
<dl><dd>
<p>Specify a case sensitivity of searching.</p>
</dd></dl>
<p><code v-pre>property WholeWords: Boolean</code></p>
<dl><dd>
<p>Specifies that the search in the SearchPanel must be performed in full word mode.</p>
</dd></dl>
<p><code v-pre>property CellBeginsWithMode: Boolean</code></p>
<dl><dd>
<p>Specifies that the search result must match from the start of cell.</p>
</dd></dl>
<br>
<p>SearchPanel have a set of event to control typing of text, searching a text in DBGridEh and highlighting a text in the grid cells.
<code v-pre>TDBGridEh.SearchPanel</code> class events:</p>
<p><code v-pre>property OnSearchEditKeyDown</code></p>
<dl><dd>
The event occurs when a key is down in a text editor of SearchPanel.
</dd></dl>
<p><code v-pre>property OnSearchEditKeyPress</code></p>
<dl><dd>
The event occurs when a key is pressed in a text editor of SearchPanel.
</dd></dl>
<p><code v-pre>property OnSearchEditKeyUp</code></p>
<dl><dd>
The event occurs when a key is up in a text editor of SearchPanel.
</dd></dl>
<p><code v-pre>property OnSearchEditChange</code></p>
<dl><dd>
The event occurs when the text is changed the editor of SearchPanel.
</dd></dl>
<p><code v-pre>property OnCheckCellHitSearch</code></p>
<dl><dd>
The event occurs during the test conditions - of whether or not the specified grid cell meets search condition.
</dd></dl>
<p><code v-pre>property OnGetHighlightStrings</code></p>
<dl><dd>
This event occurs when the grid receive a list of strings that need to highlight the cells of the grid as a searching text.
</dd></dl>
<br>
<p>See the example of using events to write an advanced search through the Search Panel in the Folder:
<code v-pre>DEMOS\DBGridEh.SearchPanel</code>        section <code v-pre>Demo3</code>.</p>
</div></template>


