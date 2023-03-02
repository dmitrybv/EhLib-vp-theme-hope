<template><div><h1 id="using-tdblookupcomboboxeh-control" tabindex="-1"><a class="header-anchor" href="#using-tdblookupcomboboxeh-control" aria-hidden="true">#</a> Using TDBLookupComboboxEh control</h1>
<p><code v-pre>TDBLookupComboBoxEh</code> represents a combo box that identifies a set of field(s) values in one dataset with a corresponding set of values from another dataset. To understand 'lookup' concepts see Delphi help, Topic - Displaying and editing data in lookup list and combo boxes.</p>
<p><code v-pre>TDBLookupComboboxEh</code> can be of two styles (Style property):</p>
<p><code v-pre>csDropDownEh</code> - Application can assign and users can type text which does not contain in data list.</p>
<p><code v-pre>csDropDownListEh</code> - Application can assign and users can type text which is only present in data list.</p>
<p>If <code v-pre>KeyField</code>, <code v-pre>ListField</code>, <code v-pre>ListSource</code>, <code v-pre>DataField</code> and <code v-pre>DataSource</code> properties are empty then you can assign <code v-pre>KeyValue</code> and <code v-pre>Text</code> values which doesn't affect each other.</p>
<p>Drop down window takes values from dataset that determines by <code v-pre>ListSource</code> property.</p>
<p>Drop down list can:</p>
<ul>
<li>Show titles (Captions is took from Field.FisplayLabel property),</li>
<li>Show special non-scrolled row in top part of list (SpecRow propery).</li>
<li>Have sizing grip (Sizable property),</li>
<li>Automaticaly set width of window as sum of DisplayWidth of the list fields (Set Width propery = -1),</li>
<li>Automaticaly drops when user presses any key (AutoDrop property).</li>
<li>Have specified width (Width property).</li>
</ul>
</div></template>


