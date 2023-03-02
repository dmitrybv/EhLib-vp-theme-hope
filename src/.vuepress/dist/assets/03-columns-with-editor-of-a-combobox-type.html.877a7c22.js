import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,f as i}from"./app.ac77cf73.js";const a="/online-help-vuepress-hope/assets/GridWithCombobox.d22ed073.png",s={},d=i('<h1 id="columns-with-editor-of-a-combobox-type" tabindex="-1"><a class="header-anchor" href="#columns-with-editor-of-a-combobox-type" aria-hidden="true">#</a> Columns with editor of a Combobox type</h1><p>The column data type Combobox Editor is a column in which the data is opened for editing text editor with the ability to select data from the drop-down list. In the right part of column the editor shows the special button – DropDownEditButton. When clicked, it displays a drop-down list.</p><p><img src="'+a+'" alt="" loading="lazy"></p><p>When the grid has a column of Combobox type it is convenient have edit buttons be always displayed in the column of the grid, but not only within the text editor in the cell.</p><p>To customize the display of buttons, use the following properties:</p><ul><li><code>TDBGridEh.ColumnDefValues.AlwaysShowEditButton</code></li><li><code>TColumnEh.AlwaysShowEditButton</code></li><li><code>TDBGridEh.EditButtonsShowOptions</code></li></ul><p>For more details on the edit button, see Working with edit buttons.</p><p>Using the properties of the column and the type of field you can configure Column for four main types Comboboxes:</p><h5 id="picklist-combobox" tabindex="-1"><a class="header-anchor" href="#picklist-combobox" aria-hidden="true">#</a> PickList Combobox</h5><p>For this combobox the data for a drop-down list are taken from the TColumnEh.PickList property. To activate this type combobox just fill TColumnEh.PickList property by list of possible values. In this mode the drop-down list can contain only one column, can not display headers or special row SpecRow.</p><h5 id="datalist-combobox" tabindex="-1"><a class="header-anchor" href="#datalist-combobox" aria-hidden="true">#</a> DataList Combobox</h5><p>For this type of combobox the data for a drop-down list are taken from a DataSet specified by TColumnEh.DropDownBox.ListSource property. To activate this type of combobox assign TColumnEh.DropDownBox.ListSource property by a DataSource which indicate a DataSet with a list of values.</p><h5 id="keypicklist-combobox" tabindex="-1"><a class="header-anchor" href="#keypicklist-combobox" aria-hidden="true">#</a> KeyPickList Combobox</h5><p>This mode uses two lists - KeyList and PickList. KeyList contains values that are stored in the field specified by TColumnEh.FieldName ptoperty, and PickList - in the relevant index contains the value to be displayed in the column and list. You can also set a Column.NotInKeyListIndex property by the index from PickList property, which is displayed if the value of the field is not contained in KeyList (for example, you can specify the index for Null-field value). You can also set Column.DblClickNextval to True, to allow users to change the value by double-clicking the mouse.</p><h5 id="lookupcombobox" tabindex="-1"><a class="header-anchor" href="#lookupcombobox" aria-hidden="true">#</a> LookupCombobox</h5><p>In this mode, the data for the list are set through a field TField justified as a lookup field or through the subproperties of TColumn.LookupParams property. See more details about this mode in the next section &quot;Configuring lookup relationship in columns grid&quot;</p><p>Use the following properties of TColumnEh (or TFieldRow for DBVertGridEh) for advanced configuration and work with LookupCombobox and DataList Combobox:</p><p><code>TColumnEh.CaseInsensitiveTextSearch</code></p><dd>Specifies that the text search in the drop down list is case-insensitive.</dd><p><code>TColumnEh.LimitTextToListValues</code></p><dd>limits the ability to enter text only by a text from the list.</dd><p>If <code>TColumnEh.LimitTextToListValues = False</code>, then after you enter the text that is not in the list and attempt to leave the cell, or press <code>Enter</code> the <code>TColumnEh.OnNotInList</code> event is triggered. The event handler is passed the entered text – <code>NewText</code> argument. You can add text to the list. If the list is based on data from the <code>DataSet</code>, the new value should be added in the <code>DataSet</code>. After values is added in the <code>DataSet</code> set <code>RecheckInList</code> property to <code>True</code>. For <code>Combobox</code> of <code>LookupCombobox</code> type the grid re-perform lookup search the list and write the data to the cell.</p>',22),n=[d];function r(h,l){return e(),t("div",null,n)}const u=o(s,[["render",r],["__file","03-columns-with-editor-of-a-combobox-type.html.vue"]]);export{u as default};