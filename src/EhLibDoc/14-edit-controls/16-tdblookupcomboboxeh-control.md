# Using TDBLookupComboboxEh control


`TDBLookupComboBoxEh` represents a combo box that identifies a set of field(s) values in one dataset with a corresponding set of values from another dataset. To understand 'lookup' concepts see Delphi help, Topic - Displaying and editing data in lookup list and combo boxes. 

`TDBLookupComboboxEh` can be of two styles (Style property):

`csDropDownEh` - Application can assign and users can type text which does not contain in data list.

`csDropDownListEh` - Application can assign and users can type text which is only present in data list.


If `KeyField`, `ListField`, `ListSource`, `DataField` and `DataSource` properties are empty then you can assign `KeyValue` and `Text` values which doesn't affect each other.

Drop down window takes values from dataset that determines by `ListSource` property.

Drop down list can:
- Show titles (Captions is took from Field.FisplayLabel property),
- Show special non-scrolled row in top part of list (SpecRow propery).
- Have sizing grip (Sizable property),
- Automaticaly set width of window as sum of DisplayWidth of the list fields (Set Width propery = -1),
- Automaticaly drops when user presses any key (AutoDrop property).
- Have specified width (Width property).
