<template><div><h1 id="dbvertgrideh-searchpanel" tabindex="-1"><a class="header-anchor" href="#dbvertgrideh-searchpanel" aria-hidden="true">#</a> DBVertGridEh.SearchPanel</h1>
<p><code v-pre>DBVertGridEh</code> allows to search data in one record of <code v-pre>DataSet</code> via <code v-pre>SearchPanel</code>, as is done in <code v-pre>TDBGridEh</code>.</p>
<p><img src="@source/images/clip0037.png" alt="" loading="lazy"></p>
<p><code v-pre>TDBVertGridEh</code> have a <code v-pre>SearchPanel</code> property with next sub properties:</p>
<p><code v-pre>Enabled: Boolean;</code></p>
<dd>
Search Panel is available in DBVertGridEh. The Search Panel can be hidden for the user if PersistentShowing = False.
</dd>
<p><code v-pre>FilterEnabled: Boolean;</code></p>
<dd>
Specifies that Search Panel results can be filtered.
</dd>
<p><code v-pre>FilterOnTyping: Boolean;</code></p>
<dd>
Specifies that filtering must be performed as a text is being typed in the Search Panel editor.
</dd>
<p><code v-pre>PersistentShowing: Boolean;</code></p>
<dd>
Specifies that SearchPanel is always visible in TDBVertGridEh. If PersistentShowing = False, the user can display and activate SearchPanel by pressing the key combination defined by a ShortCut property.
</dd>
<p><code v-pre>ShortCut: TShortCut</code></p>
<dd>
Sets the key combination by which a focus transfer to the Search Panel text editor.
</dd>
<p><code v-pre>CaseSensitive: Boolean</code></p>
<dd>
Specifies the text case sensitivity when searching via Search Panel.
</dd>
<p><code v-pre>WholeWords: Boolean </code></p>
<dd>
Specifies that the search must be performed by the whole words when searching via Search Panel.
</dd>
</div></template>


