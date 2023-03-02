<template><div><h1 id="common-understanding-of-edit-controls" tabindex="-1"><a class="header-anchor" href="#common-understanding-of-edit-controls" aria-hidden="true">#</a> Common understanding of edit controls</h1>
<p>EhLib has a set of data-aware edit controls to edit data:</p>
<h3 id="tdbediteh" tabindex="-1"><a class="header-anchor" href="#tdbediteh" aria-hidden="true">#</a> <code v-pre>TDBEditEh</code></h3>
<p>Editing text data and other data types that can be predtavlyat to see the text.</p>
<h3 id="tdbdatetimeediteh" tabindex="-1"><a class="header-anchor" href="#tdbdatetimeediteh" aria-hidden="true">#</a> <code v-pre>TDBDateTimeEditEh</code></h3>
<p>Editing data of date or time type.</p>
<h3 id="tdbcomboboxeh" tabindex="-1"><a class="header-anchor" href="#tdbcomboboxeh" aria-hidden="true">#</a> <code v-pre>TDBComboBoxEh</code></h3>
<p>Editing text data with an additional drop-down list to select the values.</p>
<h3 id="tdbnumberediteh" tabindex="-1"><a class="header-anchor" href="#tdbnumberediteh" aria-hidden="true">#</a> <code v-pre>TDBNumberEditEh</code></h3>
<p>Editing the data of number type.</p>
<h3 id="tdblookupcomboboxeh" tabindex="-1"><a class="header-anchor" href="#tdblookupcomboboxeh" aria-hidden="true">#</a> <code v-pre>TDBLookupComboboxEh</code></h3>
<p>Editing based on drop-down list with the record key values instead of the displayed value.</p>
<h3 id="tdbmemoeh" tabindex="-1"><a class="header-anchor" href="#tdbmemoeh" aria-hidden="true">#</a> <code v-pre>TDBMemoEh</code></h3>
<p>Editing multiline text data.</p>
<h3 id="tdbimageeh" tabindex="-1"><a class="header-anchor" href="#tdbimageeh" aria-hidden="true">#</a> <code v-pre>TDBImageEh</code></h3>
<p>Editing graphic data.</p>
<h3 id="tdbradiogroupeh" tabindex="-1"><a class="header-anchor" href="#tdbradiogroupeh" aria-hidden="true">#</a> <code v-pre>TDBRadioGroupEh</code></h3>
<p>Editing data mapping in a set of flags.</p>
<h3 id="tdbrichediteh" tabindex="-1"><a class="header-anchor" href="#tdbrichediteh" aria-hidden="true">#</a> <code v-pre>TDBRichEditEh</code></h3>
<p>Editing text data with RichText format.</p>
<p>EhLib doesn’t have not data-aware version of these controls because every control can work as in data-aware mode and not in data-aware mode.</p>
<p>The base class for every edit control is <code v-pre>TCustomDBEditEh</code>. <code v-pre>TCustomDBEditEh</code> encapsulates the behavior that is common for all edit controls for editing text and if it is required for editing a DataSet’s field by introducing methods and properties that provide:</p>
<ul>
<li>
<p>Basic text editing functions such as selecting text, modifying selected text, and case conversions.</p>
</li>
<li>
<p>Properties for making it read-only or introducing a password character to hide the actual value.</p>
</li>
<li>
<p>Validity checking using an edit mask.</p>
</li>
<li>
<p>Writing edited text to database field.</p>
</li>
<li>
<p>Showing one or several edit buttons (with variable glyphs: dropdown arrow, Ellipsis arrow, up-down arrows, plus sign, minus sign or custom
bitmap) at right part of edit box,</p>
</li>
<li>
<p>Showing image from image list at the left part of the edit box.</p>
</li>
</ul>
<p><code v-pre>Application</code> can use <code v-pre>Text</code> (String type) and <code v-pre>Value</code> (Variant type) properties to get and set string or variant values to controls. <code v-pre>Text</code> property is a text that you can see in control. <code v-pre>Value</code> property hold value of variant type and can hold values of types depending of control type. It can hold Null value or:</p>
<ul>
<li>String type value for TDBEditEh and TDBComboBoxEh,</li>
<li>TDateTime, TDate, TTime, Double type value for TDBDateTimeEditEh,</li>
<li>All numeric types value for TDBNumberEditEh,</li>
<li>TDBLookupComboboxEh control hold value that depends on type of the field.</li>
</ul>
<p>If control is connected to the field then the assignment data to the <code v-pre>Text</code> or <code v-pre>Value</code> properties automatically write data to the field.</p>
<p>Every control has <code v-pre>Flat</code> and <code v-pre>AlwaysShowBorder</code> properties to control the border appearance.</p>
<p>All controls have <code v-pre>EmptyDataInfo</code> property that allows customize edit control to draw special text and font when control have no data (Edit1.Text = ‘’).</p>
</div></template>


