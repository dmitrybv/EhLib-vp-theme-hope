<template><div><h1 id="searching-data-in-the-grid" tabindex="-1"><a class="header-anchor" href="#searching-data-in-the-grid" aria-hidden="true">#</a> Searching Data in the Grid</h1>
<p>DBGridEh allows you to perform the following types of search data:</p>
<h3 id="dialog-search-–-with-the-help-of-a-special-window-dialogue" tabindex="-1"><a class="header-anchor" href="#dialog-search-–-with-the-help-of-a-special-window-dialogue" aria-hidden="true">#</a> Dialog search – With the help of a special window Dialogue.</h3>
<p><img src="@source/images/clip0021.png" alt="" loading="lazy"></p>
<p>To allow interactive search grid, set <code v-pre>dghDialogFind</code> value In <code v-pre>TDBGridEh.OptionsEh</code> property. At Run-Time Use the <code v-pre>Ctrl+F</code> key combination to show the search dialog.
To run the program from the dialog box, use the procedure from  DBGridEhFindDlgs module.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExecuteDBGridEhFindDialog<span class="token punctuation">(</span>Grid<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  Text<span class="token punctuation">,</span> FieldName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> ColumnFields<span class="token punctuation">:</span> TColumnFieldsArrEh<span class="token punctuation">;</span>  
  Modal<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can override the global method of assigning a dialog box pointer to the global process</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  ExecuteDBGridEhFindDialogProc<span class="token punctuation">:</span> TExecuteDBGridEhFindDialogProc<span class="token punctuation">;</span>
</code></pre></div><p>You can redefine the key combination to display the dialog box by assigning a new combination of a global variable <code v-pre>DBGridEhFindDialogKey: TShortCut</code>. The variable declared in the module <code v-pre>DBGridEh</code>.</p>
<h3 id="incremental-search-in-the-column-–-search-while-typing-in-the-column-grid" tabindex="-1"><a class="header-anchor" href="#incremental-search-in-the-column-–-search-while-typing-in-the-column-grid" aria-hidden="true">#</a> Incremental search in the column – Search while typing in the column grid.</h3>
<p><code v-pre>TDBGridEh</code> allows users to make a special &quot;incremental&quot; searches column grid. When the user enters an incremental search, he can type characters. This grid will tries to find typed text in the current column. Use <code v-pre>dghIncSearch</code> and <code v-pre>dghPreferIncSearch</code> values (property OptionsEh) for controlling an incremental search. At runtime, you can use the following keyboard shortcuts for incremental search:</p>
<p><code v-pre>Ctrl+F</code> - start incremental search.</p>
<p><code v-pre>Ctrl+Enter</code> - Find next match.</p>
<p><code v-pre>Ctrl+Shift+Enter</code> - Find previous match.</p>
<p>If dghIncSearch included OptionsEh and column - read-only, then the grid includes an incremental search automatically the first time the key is pressed and will be returned to normal after 1.5 seconds. dghPreferIncSearch value determines that the grid will set increment search mode automatically when the first key is pressed instead of editing.</p>
<p>To use the incremental search in the code use the following methods:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TCustomDBGridEh<span class="token punctuation">.</span>StartInplaceSearch<span class="token punctuation">(</span><span class="token keyword">const</span> ss<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> TimeOut<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> 
  InpsDirection<span class="token punctuation">:</span> TLocateTextDirectionEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Starts Incremental search and searches for the string passed. Ss parameter contains the search string. TimeOut parameter contains the period in milliseconds after which an incremental search is automatically stopped. InpsDirection parameter specifies the search direction.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TCustomDBGridEh<span class="token punctuation">.</span>StopInplaceSearch<span class="token punctuation">;</span>
</code></pre></div><p>The method stops incremental search mode.</p>
<h3 id="search-through-the-search-panel" tabindex="-1"><a class="header-anchor" href="#search-through-the-search-panel" aria-hidden="true">#</a> Search through the search panel</h3>
<p>Search using a special panel contain text editor where user type the text to search for. Read the detail in the next section.</p>
</div></template>


