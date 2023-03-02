<template><div><h1 id="working-with-edit-buttons" tabindex="-1"><a class="header-anchor" href="#working-with-edit-buttons" aria-hidden="true">#</a> Working with edit buttons</h1>
<p>All editing control, as well as columns (For DBGridEh) and <code v-pre>TFieldRow</code> (For DBVerGridEh) contains two properties - <code v-pre>EditButton</code> and <code v-pre>EditButtons</code>.</p>
<p><img src="@source/images/clip0001.png" alt="" loading="lazy">     <img src="@source/images/clip0002.png" alt="" loading="lazy"></p>
<p><code v-pre>EditButton</code> specifies parameters for editing buttons. The buttons are displayed in the editing or editing control within the grid cell. To activate a button, use the property <code v-pre>EditButton</code>. If the control is necessary to have some buttons, create additional editing buttons collection <code v-pre>EditButtons</code>.</p>
<p><code v-pre>DefaultAction</code></p>
<p>The class TEditButtonEh added property - <code v-pre>DefaultAction</code>.
This class is used in components for <code v-pre>TColumnEh</code> <code v-pre>DBGridEh</code>, <code v-pre>TFieldRowEh</code> for <code v-pre>DBVertGridEh</code>, <code v-pre>DBEditEh.EditButtons[i]</code>, <code v-pre>DBNumberEditEh.EditButton</code>, <code v-pre>DBNumberEditEh.EditButtons[i]</code>, <code v-pre>DBDataTimeEditEh.EditButton</code>, <code v-pre>DBDataTimeEditEh.EditButtons[i]</code>.</p>
<p>It specifies whether you want to perform a default action when you press the <code v-pre>EditButton</code>. Default actions depend on the component. For example, DBNumberEditEh default action is - the opening of a drop-down calculator. The other components of this will be another popup window for editing values. <code v-pre>DefaultAction</code> established in False, you cancel the opening of the pop-ups or other action by default.</p>
<p><code v-pre>DrawBackTime</code></p>
<p>It is allowed display the edit buttons in transparent background mode. In this mode, the edit button shows only a foreground icon. See the second screenshort.</p>
<p><img src="@source/images/clip0003.png" alt="" loading="lazy">     <img src="@source/images/clip0004.png" alt="" loading="lazy"></p>
<h3 id="limitations-and-compatibility" tabindex="-1"><a class="header-anchor" href="#limitations-and-compatibility" aria-hidden="true">#</a> Limitations and Compatibility:</h3>
<ol>
<li>
<p>Not all types of buttons correctly support the drawing mode. For example such types as  ebsDropDownEh ebsUpDownEh use Windows style to draw data and they can’t draw Background and Foreground part separately. For these buttons use alternative types - ebsAltDropDownEh and ebsAltUpDownEh.</p>
</li>
<li>
<p>Transparent back drawing does not work when the button have ebsGlyphEh style and the picture is in the Glyph property. To get around the restriction move a picture in TImageList component and fill EditButton.Images property.</p>
</li>
</ol>
<p>Use the following types of properties to set a transparent background for Buttons:
Types</p>
<p>TEditButtonDrawBackTimeEh = (edbtAlwaysEh, edbtNeverEh, edbtWhenHotEh);
edbtAlwaysEh – Always draw the button background
edbtNeverEh – Never draw the button background
edbtWhenHotEh – Draw button background when a mouse cursor is over the button.</p>
<p>Properties</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TColumnEh.EditButton.DrawBackTime: TEditButtonDrawBackTimeEh
property TColumnEh.EditButtons[i].DrawBackTime: TEditButtonDrawBackTimeEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Sets a drawing mode for button background in the column editor.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TColumnEh.EditButton.DrawBackTimeStored: Boolean
property TColumnEh.EditButtons[i].DrawBackTimeStored: Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Determines that the value of a <code v-pre>DrawBackTime</code> property is persistent and does not depend on the value of other properties. If <code v-pre>DrawBackTimeStored = False</code>, the default value for the <code v-pre>DrawBackTime</code> property is taken from <code v-pre>TDBGridEh.ColumnDefValues</code>.<code v-pre>EditButtonDrawBackTime</code> property.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TDBGridEh.STFilter.FilterButtonDrawBackTime: TEditButtonDrawBackTimeEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets a drawing mode for button background of STFilter buttons.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TDBGridEh.STFilter.FilterButtonDrawBackTimeStored: Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Determines that the value of a <code v-pre>FilterButtonDrawBackTime</code> property is persistent and does not depend on the value of other properties. If <code v-pre>DrawBackTimeStored = False</code>, the default value for the <code v-pre>FilterButtonDrawBackTime</code> property is taken from <code v-pre>TDBGridEh</code>. <code v-pre>ColumnDefValues.EditButtonDrawBackTime</code> property.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TDBGridEh.ColumnDefValues.EditButtonDrawBackTime: TEditButtonDrawBackTimeEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets a drawing mode for column editor buttons and STFilter buttons.
Similar properties are present in the classes of DBVertGridEh component</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TFieldRowEh.EditButton.DrawBackTime: TEditButtonDrawBackTimeEh
property TFieldRowEh.EditButtons[i].DrawBackTime: TEditButtonDrawBackTimeEh
property TFieldRowEh.EditButton.DrawBackTimeStored: Boolean
property TFieldRowEh.EditButtons[i].DrawBackTimeStored: Boolean
property TDBVertGridEh.RowsDefValues.EditButtonDrawBackTime: TEditButtonDrawBackTimeEh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similar properties are present in the classes of TDBEditEh, TDBNumberEditEh, TDBDateTimeEditEh components</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>property TDBEditEh.EditButtons[i].DrawBackTime: TEditButtonDrawBackTimeEh
property TDBEditEh.EditButtons[i].DrawBackTimeStored: Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>For an example of using properties for transparent background see the next demo project:
<code v-pre>DEMOS\EditButton.DrawNoBack</code></p>
<h3 id="onclick-ondown" tabindex="-1"><a class="header-anchor" href="#onclick-ondown" aria-hidden="true">#</a> OnClick, OnDown</h3>
<p>You can write event handler on the mouse down click or mouse click of an Edit button. To do this, write an event handler or OnButtonDown OnButtonClick konrolya for editing. For TColumnEh (For DBGridEh) or TFieldRow (For DBVerGridEh) events have names OnEditButtonDown and OnEditButtonClick. If you create a button through a collection EditButtons, then write event of a collection TEditButtonsEh: TEditButtonEh.OnClick или TEditButtonEh.OnDown.</p>
<h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3>
<p>To adjust the display of edit button, use the following properties</p>
<p><code v-pre>TDBGridEh.ColumnDefValues.AlwaysShowEditButton</code> – The property specifies whether to display the edit button in the grid constant. The value of a property applies to all the columns of the grid.</p>
<p><code v-pre>TColumnEh.AlwaysShowEditButton</code> – Specifies whether to display the edit button in the grid constant for a given any column.</p>
<p><code v-pre>TDBGridEh.EditButtonsShowOptions</code> – Specifies additional parameters map editing buttons when TDBGridEh.ColumnDefValues.<code v-pre>AlwaysShowEditButton = True</code> or <code v-pre>TColumnEh.AlwaysShowEditButton = True</code>.</p>
<p><code v-pre>EditButtonsShowOptions</code> property can contain the following values:</p>
<dl>
<dd>
<p><code v-pre>sebShowOnlyForCurCellEh</code> 	-	Display the edit button for the current cell in the grid</p>
<p><code v-pre>sebShowOnlyForCurRowEh</code>	-	Display the edit button for the current record in the grid</p>
<p><code v-pre>sebShowOnlyWhenGridActiveEh</code> -	Display edit buttons only when the grid has input focus</p>
<p><code v-pre>sebShowOnlyWhenDataEditingEh</code> -	Display edit buttons only when the DataSet is in edit mode.</p>
</dd>
</dl>
<p>The TEditButtonEh class contains the following properties:</p>
<p><code v-pre>Action: TBasicAction</code></p>
<dd>An instance of TBasicAction or the heir of him. Components such as Action created in the Design-Time using components TActionList. By assigning component Action property TEditButtonEh.Action he will be called by clicking on the edit button.</dd>
<p><code v-pre>DefaultAction: Boolean</code></p>
<dd>Specifies whether to call a default action when user press the button. The default action depends on the type of field TColumnEh.Field.</dd>
<p><code v-pre>DropdownMenu: TPopupMenu</code></p>
<dd>If you set this property PopupMenu component type drop-down menu that will be displayed when you click on the Edit button.</dd>
<p><code v-pre>DropDownFormParams: TDropDownFormCallParamsEh</code></p>
<dd>It allows you to configure a button to display a drop-down form DropDownForms.</dd>
<p><code v-pre>Enabled: Boolean</code></p>
<dd>Buttons available for press</dd>
<p><code v-pre>Glyph: TBitmap</code></p>
<dd>The picture to be displayed on the button</dd>
<p><code v-pre>Hint: String</code></p>
<dd>Tip to be displayed when you hover over the button.</dd>
<p><code v-pre>Images: TEditButtonImagesEh</code></p>
<dd>Tip to be displayed when you hover over the button....</dd>
<p><code v-pre>NumGlyphs: Integer</code></p>
<dd>Number of pictures in the Glyph</dd>
<p><code v-pre>ShortCut: TShortCut</code></p>
<dd>The combination of buttons that will be triggered by pressing a button on the keyboard</dd>
<p><code v-pre>Style: TEditButtonStyleEh</code></p>
<dd>
<p>Style drawing edging buttons
<code v-pre>DropDown</code>, <code v-pre>Ellipsis</code>, <code v-pre>Glyph</code>, <code v-pre>UpDown</code>, <code v-pre>Plus</code>, <code v-pre>Minus</code>, <code v-pre>AltDropDown</code>, <code v-pre>AltUpDown</code></p>
</dd>
<p><code v-pre>Visible: Boolean</code></p>
<dd>The button is visible</dd>
<p><code v-pre>Width: Integer</code></p>
<dd>Width of the button</dd>
</div></template>


