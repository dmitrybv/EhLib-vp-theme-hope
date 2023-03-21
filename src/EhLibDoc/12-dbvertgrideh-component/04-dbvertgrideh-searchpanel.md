# DBVertGridEh.SearchPanel

`DBVertGridEh` allows to search data in one record of `DataSet` via `SearchPanel`, as is done in `TDBGridEh`.

![](../../images/clip0037.png)


`TDBVertGridEh` have a `SearchPanel` property with next sub properties:

`Enabled: Boolean;`

<sh>
Search Panel is available in DBVertGridEh. The Search Panel can be hidden for the user if PersistentShowing = False.
</sh>

`FilterEnabled: Boolean;`

<sh>
Specifies that Search Panel results can be filtered.
</sh>

`FilterOnTyping: Boolean;`

<sh>
Specifies that filtering must be performed as a text is being typed in the Search Panel editor.
</sh>

`PersistentShowing: Boolean;`

<sh>
Specifies that SearchPanel is always visible in TDBVertGridEh. If PersistentShowing = False, the user can display and activate SearchPanel by pressing the key combination defined by a ShortCut property.
</sh>

`ShortCut: TShortCut`

<sh>
Sets the key combination by which a focus transfer to the Search Panel text editor.
</sh>

`CaseSensitive: Boolean`

<sh>
Specifies the text case sensitivity when searching via Search Panel.
</sh>

`WholeWords: Boolean `

<sh>
Specifies that the search must be performed by the whole words when searching via Search Panel.
</sh>

