<template><div><h1 id="the-technology-for-storing-settings-settingskeeper" tabindex="-1"><a class="header-anchor" href="#the-technology-for-storing-settings-settingskeeper" aria-hidden="true">#</a> The technology for storing settings - SettingsKeeper</h1>
<p>In EhLib version 9.2, in addition to the SaveGridLayout, SaveColumnsLayout methods, a new storage technology was added, called SettingsKeeper.</p>
<p>The <code v-pre>SettingsKeeper</code> offers the following option for storing and restoring settings.</p>
<p>There is a special class <code v-pre>TSettingsKeeperEh</code> in the library.
This class is an hierarchical array of settings.
Each element of the array consists of a key and a value.
You can treat this as the setup ID and the setting value.
The configuration ID must be unique.
The value of an element can be a string, a number or a nested array <code v-pre>TSettingsKeeperEh</code>.
Those you can create a hierarchical tree-like array of settings.</p>
<p>After you write all the form settings to the <code v-pre>TSettingsKeeperEh</code> array, you must save it in the
readable form in a file or other source of data storage.</p>
<p>To store the contents of an array in a textual, compact and easily readable format, the text format <code v-pre>JSON</code> is convenient.</p>
<p>The library contains functions for converting the contents of an array into a JSON text string</p>
<p><code v-pre>function SettingsKeeperToJSONString(Keeper: TSettingsKeeperEh): String;</code></p>
<p>and back</p>
<p><code v-pre>procedure JSONStringToSettingsKeeper(Keeper: TSettingsKeeperEh; JSon: String);</code></p>
<p>It is suggested to use a new way of storing application settings in the <code v-pre>Ini</code> file or other settings stores.</p>
<p>The <code v-pre>TDBGridEh</code> and <code v-pre>TDBVertGridEh</code> components have methods for saving the settings to the <code v-pre>TSettingsKeeperEh</code> array</p>
<p><code v-pre>procedure WriteSettings(Keeper: TSettingsKeeperEh); overload; virtual;</code></p>
<p>and to read the settings from the array</p>
<p><code v-pre>procedure ReadSettings(Keeper: TSettingsKeeperEh); overload; virtual;</code></p>
<p>The <code v-pre>TSettingsKeeperEh</code> class and SettingsKeeper settings storage technology is available only for <code v-pre>Delphi XE6</code> or higher.</p>
<h3 id="the-script-for-using-settingskeeper-technology" tabindex="-1"><a class="header-anchor" href="#the-script-for-using-settingskeeper-technology" aria-hidden="true">#</a> The script for using SettingsKeeper technology</h3>
<p>The sequence of actions when using SettingsKeeper can be the following:</p>
<p>Record settings when closing or destroying Forms.</p>
<ol>
<li>Create a TSettingsKeeperEh class and call a method to write values
When you destroy a TMyForm form in a method</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">destructor</span> Destroy<span class="token punctuation">;</span>
</code></pre></div><p>create the array TSettingsKeeperEh and fill it with the settings data</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>SetKeeper <span class="token operator">:=</span> TSettingsKeeperEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
WriteSettings<span class="token punctuation">(</span>SetKeeper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Writing Values
2.1	If this is a simple text value, then use the</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>Add<span class="token punctuation">(</span><span class="token keyword">const</span> Key<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> <span class="token keyword">const</span> Value<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>to add a setting to an array.
Example:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>SettingsKeeper1<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Caption'</span><span class="token punctuation">,</span> Form1<span class="token punctuation">.</span>Caption<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>2.2	If this is a simple numerical value, then use the method</p>
<p><code v-pre>Add(const Key: String; const Value: Integer);</code></p>
<p>Example:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  SettingsKeeper1<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Left'</span><span class="token punctuation">,</span> Form1<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>2.3	If you want to write a nested array, then create an instance of the <code v-pre>TSettingsKeeperEh</code> class, add a simple value or other nested arrays to it and add the array to the main array of settings using the method</p>
<p><code v-pre>procedure Add(const Key: String; const Value: TSettingsKeeperEh);</code></p>
<p>Example:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TBaseForm<span class="token punctuation">.</span>WriteSettings<span class="token punctuation">(</span>Keeper<span class="token punctuation">:</span> TSettingsKeeperEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  BoundSettings<span class="token punctuation">:</span> TSettingsKeeperEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  BoundSettings <span class="token operator">:=</span> TSettingsKeeperEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  BoundSettings<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Left'</span><span class="token punctuation">,</span> Left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  BoundSettings<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Top'</span><span class="token punctuation">,</span> Top<span class="token punctuation">)</span><span class="token punctuation">;</span>
  BoundSettings<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Width'</span><span class="token punctuation">,</span> Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
  BoundSettings<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Height'</span><span class="token punctuation">,</span> Height<span class="token punctuation">)</span><span class="token punctuation">;</span>

  Keeper<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'Bounds'</span><span class="token punctuation">,</span> BoundSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3">
<li>Convert to <code v-pre>JSON</code> string
Translate the array into a <code v-pre>JSON</code> string using the method</li>
</ol>
<p><code v-pre>function SettingsKeeperToJSONString(Keeper: TSettingsKeeperEh): String;</code></p>
<ol start="4">
<li>Writing to the repository
Write a line in the <code v-pre>Ini</code> file or another source of storage settings.</li>
</ol>
<h3 id="reading-the-saved-data-for-the-form" tabindex="-1"><a class="header-anchor" href="#reading-the-saved-data-for-the-form" aria-hidden="true">#</a> Reading the saved data for the Form</h3>
<ol>
<li>Create a <code v-pre>TSettingsKeeperEh</code> class and call a method to read values
When creating a <code v-pre>TMyForm</code> form in a method</li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> DoCreate<span class="token punctuation">;</span>
</code></pre></div><p>consider the JSON line from the Ini file (or another source of storage settings)</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>FormSettingsStr<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2">
<li>Reading each value
Based on the <code v-pre>JSON</code> line, create an array of <code v-pre>SettingsKeeper</code></li>
</ol>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  SetKeeper <span class="token operator">:=</span> TSettingsKeeperEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  JSONStringToSettingsKeeper<span class="token punctuation">(</span>SetKeeper<span class="token punctuation">,</span> FormSettingsStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3">
<li>Reading each value
Read the values of the desired items from <code v-pre>SettingsKeeper</code>:</li>
</ol>
<p>3.1	Reading Text Values
If this is a simple text value, then use the <code v-pre>TryGetStringValue</code></p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">if</span> SettingsKeeper1<span class="token punctuation">.</span>TryGetStringValue<span class="token punctuation">(</span><span class="token string">'Caption'</span><span class="token punctuation">,</span> Value<span class="token punctuation">)</span> <span class="token keyword">then</span>
    Form<span class="token punctuation">.</span>Caption <span class="token operator">:=</span> Value
</code></pre></div><p>3.2	Reading Numeric Values
If this is a simple numeric value, then use the <code v-pre>TryGetIntegerValue</code></p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">if</span> SettingsKeeper1<span class="token punctuation">.</span>TryGetIntegerValue<span class="token punctuation">(</span><span class="token string">'Left'</span><span class="token punctuation">,</span> IntValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
    Form<span class="token punctuation">.</span>Left <span class="token operator">:=</span> IntValue<span class="token punctuation">;</span>
</code></pre></div><p>3.3	Reading Nested Arrays
If it's a nested array of values, then use the <code v-pre>TryGetSubsettingsValue</code> method to read a nested array:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">if</span> Keeper<span class="token punctuation">.</span>TryGetSubsettingsValue<span class="token punctuation">(</span><span class="token string">'Bounds'</span><span class="token punctuation">,</span> BoundsSets<span class="token punctuation">)</span> <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    ReadBoundsSettings<span class="token punctuation">(</span>BoundsSets<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>then read the elements of the nested array:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TBaseForm<span class="token punctuation">.</span>ReadBoundsSettings<span class="token punctuation">(</span>BoundsSets<span class="token punctuation">:</span> TSettingsKeeperEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  IntValue<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> BoundsSets<span class="token punctuation">.</span>TryGetIntegerValue<span class="token punctuation">(</span><span class="token string">'Left'</span><span class="token punctuation">,</span> IntValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">Self</span><span class="token punctuation">.</span>Left <span class="token operator">:=</span> IntValue<span class="token punctuation">;</span>
  <span class="token keyword">if</span> BoundsSets<span class="token punctuation">.</span>TryGetIntegerValue<span class="token punctuation">(</span><span class="token string">'Top'</span><span class="token punctuation">,</span> IntValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">Self</span><span class="token punctuation">.</span>Top <span class="token operator">:=</span> IntValue<span class="token punctuation">;</span>
  <span class="token keyword">if</span> BoundsSets<span class="token punctuation">.</span>TryGetIntegerValue<span class="token punctuation">(</span><span class="token string">'Width'</span><span class="token punctuation">,</span> IntValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">Self</span><span class="token punctuation">.</span>Width <span class="token operator">:=</span> IntValue<span class="token punctuation">;</span>
  <span class="token keyword">if</span> BoundsSets<span class="token punctuation">.</span>TryGetIntegerValue<span class="token punctuation">(</span><span class="token string">'Height'</span><span class="token punctuation">,</span> IntValue<span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">Self</span><span class="token punctuation">.</span>Height <span class="token operator">:=</span> IntValue<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="description-of-the-jsonsettingskeeper-demo-project" tabindex="-1"><a class="header-anchor" href="#description-of-the-jsonsettingskeeper-demo-project" aria-hidden="true">#</a> Description of the JSonSettingsKeeper demo project</h3>
<p>The <code v-pre>JSonSettingsKeeper.dpr</code> project proposes an option for using this technology in the finished project.
The project is in the folder
<code v-pre>&lt;EhLib Archive&gt;\Demos\JSonSettingsKeeper</code></p>
<p>For the convenience of using the technology, it is proposed in the project to create a basic Form that can store its position and size, and has virtual methods for adding additional settings to the inherited Forms.</p>
<p>In this example:</p>
<p><code v-pre>BaseFormUnit.pas</code></p>
<p>The basic Form TBaseForm for all other forms that can store its position and size.
It contains the following methods:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>   <span class="token keyword">procedure</span> ReadSettings<span class="token punctuation">(</span>Keeper<span class="token punctuation">:</span> TSettingsKeeper<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">virtual</span><span class="token punctuation">;</span>
</code></pre></div><p>Saving settings in the settings array
Keeps the position and size of the form</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>   <span class="token keyword">procedure</span> WriteSettings<span class="token punctuation">(</span>Keeper<span class="token punctuation">:</span> TSettingsKeeper<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">virtual</span><span class="token punctuation">;</span>
</code></pre></div><p>Restore settings from the array settings
Restores the position and size of the form</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>   <span class="token keyword">function</span> GetSettingID<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> <span class="token keyword">virtual</span><span class="token punctuation">;</span>
</code></pre></div><p>Get a unique form ID. Default class name.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>   <span class="token keyword">procedure</span> TBaseForm<span class="token punctuation">.</span>DoCreate<span class="token punctuation">;</span>
</code></pre></div><p>Reads the settings from the file &quot;ProgramName&quot; .Ini</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">destructor</span> TBaseForm<span class="token punctuation">.</span>Destroy<span class="token punctuation">;</span>
</code></pre></div><p>Writes the form settings to an Ini file</p>
<p><code v-pre>MainFormUnit.pas</code></p>
<p>The main form of the project is inherited from <code v-pre>TBaseForm</code>. Other forms open from it.
Overrides the <code v-pre>ReadSettings</code> <code v-pre>WriteSettings</code> method to save a list of open forms when the main form is closed.
When you start the application, all the opening of the form is restored.
The remaining forms of the project are inherited from TBaseForm.</p>
<p><code v-pre>Unit1.pas</code></p>
<p>The unit contains <code v-pre>DBGridEh</code>, <code v-pre>DBVertGridEh</code> and <code v-pre>Splitter</code> on the form. The settings of the control data are supposed to be saved in <code v-pre>SettingsKeeper</code>.</p>
<p>Overrides method <code v-pre>WriteSettings</code> which:</p>
<ul>
<li>Calls the base method for writing / reading the position of the form window.</li>
<li>Writes DBGridEh1 grid settings to an array of settings with the DBGridEh1 key.
For recording, use the grid method TDBGridEh.WriteSettings</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  GridSettings <span class="token operator">:=</span> TSettingsKeeperEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  DBGridEh1<span class="token punctuation">.</span>WriteSettings<span class="token punctuation">(</span>GridSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Keeper<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'DBGridEh1'</span><span class="token punctuation">,</span> GridSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code v-pre>TDBGridEh.WriteSettings</code> method writes parameters such as <code v-pre>Height</code> of a line (if it is allowed to change the height of the line in the grid), <code v-pre>SearchPanel</code> search parameters (if the SearchPanel is active) and columns settings such as width, position, visibility, sort marker, height and width of the drop-down list if the text editor contains a drop-down list, the position of the cell in the RowPanel if the RowPanel mode is active.</p>
<ul>
<li>Records the settings of the vertical grid <code v-pre>DBVertGridEh1</code> in the array of settings with the <code v-pre>DBVertGridEh1</code> key
For writing, the grid method is <code v-pre>TDBVertGridEh.WriteSettings</code></li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  GridSettings <span class="token operator">:=</span> TSettingsKeeperEh<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  DBVertGridEh1<span class="token punctuation">.</span>WriteSettings<span class="token punctuation">(</span>GridSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Keeper<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'DBVertGridEh1'</span><span class="token punctuation">,</span> GridSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul>
<li>Records the location of the vertical splitter</li>
</ul>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>  Keeper<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">'SplitterPosition'</span><span class="token punctuation">,</span> DBVertGridEh1<span class="token punctuation">.</span>Width<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Similarly, the ReadSettings method is overridden in the next modules.</p>
<p><code v-pre>Unit2.pas</code></p>
<p><code v-pre>Unit3.pas</code></p>
<h3 id="configuration-storage-file-jsonsettingskeeper-ini" tabindex="-1"><a class="header-anchor" href="#configuration-storage-file-jsonsettingskeeper-ini" aria-hidden="true">#</a> Configuration Storage File <code v-pre>JSonSettingsKeeper.Ini</code></h3>
<p>As a result, after closing the program, the following values are written to the <code v-pre>JSonSettingsKeeper.Ini</code> file</p>
<div class="language-ini line-numbers-mode" data-ext="ini"><pre v-pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">FormSettings</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">TForm1</span><span class="token punctuation">=</span><span class="token value attr-value">{"Bounds":{"Height":"578","Left":"128","Width":"1168","Top":"459"},</span>
   "DBVertGridEh1":{"LabelColWidth":"64",
   "Rows":{"Continent":{"RowIndex":"2","RowLines":"0","Visible":"True"},"Name":{"RowIndex":"0","RowLines":"0","Visible":"True"},"Population":{"RowIndex":"4","RowLines":"0","Visible":"True"},"Capital":{"RowIndex":"1","RowLines":"0","Visible":"True"},"Area":{"RowIndex":"3","RowLines":"0","Visible":"True"}}},
   "DBGridEh1":{
   "SearchPanel":{"CellBeginsWithMode":"True","CaseSensitive":"True","WholeWords":"True","SearchScope":"gssCurrentColumnEh"},
   "Columns":{"Population":{"DropDownRows":"7","TitleSortMarker":"smDownEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"1","ColWidth":"186","ColIndex":"0"},"Name":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"96","ColIndex":"1"},"Continent":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"148","ColIndex":"3"},"Capital":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"148","ColIndex":"2"},"Area":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"64","ColIndex":"4"}}},"SplitterPosition":"300"}

<span class="token key attr-name">TMainForm</span><span class="token punctuation">=</span><span class="token value attr-value">{"Bounds":{"Height":"319","Left":"130","Width":"305","Top":"130"},"OpenForms":"Form1;Form2;Form3"}</span>

<span class="token key attr-name">TForm3</span><span class="token punctuation">=</span><span class="token value attr-value">{"Bounds":{"Height":"314","Left":"450","Width":"329","Top":"136"}}</span>

<span class="token key attr-name">TForm2</span><span class="token punctuation">=</span><span class="token value attr-value">{"Bounds":{"Height":"411","Left":"948","Width":"838","Top":"51"}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


