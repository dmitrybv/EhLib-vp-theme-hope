<template><div><h1 id="import-export-tdbgrideh-data-to-from-various-formats" tabindex="-1"><a class="header-anchor" href="#import-export-tdbgrideh-data-to-from-various-formats" aria-hidden="true">#</a> Import/Export TDBGridEh data to/from various formats.</h1>
<p>EhLib have a set of functions to export data from DBGridEh to <code v-pre>Text</code>, <code v-pre>Csv</code>, <code v-pre>HTML</code>, <code v-pre>RTF</code>, <code v-pre>XLS</code> and internal formats. It can write data to stream (TStream object) or to file.</p>
<p>Procedures and classes to import and export data are in module <code v-pre>DBGridEhImpExp</code>.</p>
<h3 id="data-export" tabindex="-1"><a class="header-anchor" href="#data-export" aria-hidden="true">#</a> Data Export:</h3>
<p>The global procedures <code v-pre>SaveDBGridEhToExportFile</code> and <code v-pre>WriteDBGridEhToExportStream</code> are used to export data.
<code v-pre>SaveDBGridEhToExportFile</code> saves data to file. <code v-pre>WriteDBGridEhToExportStream</code> saves data to a stream. The <code v-pre>ExportClass</code> parameter specifies the class that will be used to export data. The <code v-pre>DBGridEh</code> parameter sets the grid to be exported.
For example, you can use the following code to upload data in HTML format:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrImportExport<span class="token punctuation">.</span>btnExportAsHTMLClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\DBGridEh1Export.Html'</span><span class="token punctuation">;</span>

  SaveDBGridEhToExportFile<span class="token punctuation">(</span>TDBGridEhExportAsHTML<span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> RBSaveAll<span class="token punctuation">.</span>Checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>However, this method contains limitations. For example, you cannot specify that you want or do not want to dump the grid header. To solve these problems in EhLib 10.0 for exporting data in text format and in Xlsx format, hotel functions were added.</p>
<p>You can use this generic SaveDBGridEhToExportFile method with the following export classes:</p>
<p>TDBGridEhExportAsHTML – To export in HTML.</p>
<p>TDBGridEhExportAsRTF – To export in RTF format.</p>
<p>TDBGridEhExportAsXMLSpreadsheet – to export data in the format XML Spreadsheet. This format is supported by Microsoft and can be used to transfer data to Microsoft Excel via the clipboard. DBGridEh component is already using this format when writing data to the clipboard, so that data can be transferred from DBGridEh in Microsoft Excel format with preservation of the font, colors and types of data. The implementation of the class is the module DBGridEh XMLSpreadsheetExp.</p>
<p>Deprecated classes:
TDBGridEhExportAsText – to export data to a text file or stream. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.
TDBGridEhExportAsUnicodeText – To export data to a text file or stream in Unicode format. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.
TDBGridEhExportAsCSV – To export data to a delimited text file type ';'. You can change the separator used globally permernnuyu DBGridEhImpExpCsvSeparator or property TDBGridEhExportAsCSV.Separator. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.
TDBGridEhExportAsXLS – To export format VCLDBIF (This MS Excel format version 2). In this format there is a limit on the length of text characters. The length can not exceed 255. We do not recommend using this format since it is deprecated.
TDBGridEhExportAsOLEXLS – To export to a format compatible with MS Excel file and use the class TDBGridEhExportAsOLEXLS TDBGridEhExportAsXlsx or global procedures and ExportDBGridEhToOleExcel ExportDBGridEhToXlsx.</p>
<p>Also for export, you can use a global procedure</p>
<p>function ExportDBGridEhToOleExcel(DBGridEh: TCustomDBGridEh;
Options: TDBGridEhExportAsOLEXLSOptions; IsSaveAll: Boolean = True): Variant;</p>
<p>TDBGridEhExportAsXlsx – To export data in the format Xlsx. The export is performed directly to a file. The presence of additional libraries are not required. The class is deprecated, use the new ExportDBGridEhToXlsMemFile method.</p>
<p>Export is supported in Delphi XE2 and higher. For working with Export in earlier versions of Delphi you must use the third-party tools to form the Zip file version 2. For more information about unloading format Xlsx for Delphi XE2 version below read in the files section <code v-pre>&lt;EhLib Archive&gt;\ ZipProviders\</code></p>
<p>Also for export, you can use a global procedure</p>
<p>procedure ExportDBGridEhToXlsx(DBGridEh: TCustomDBGridEh;
const FileName: String;  Options: TDBGridEhExportAsXlsxOptions; IsSaveAll: Boolean = True);</p>
<p>Export to text format:
To export data in text format, we suggest using the new functions SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString.
The functions are located in the DBGridEhImpExp module and have the following definition.</p>
<p>procedure SaveDBGridEhToTextFile(DBGridEh: TCustomDBGridEh; const FileName: String; ExportOptions:  TDBGridEhTextExportOptions);
Saving grid data to a file as text.</p>
<p>procedure WriteDBGridEhToTextStream(DBGridEh: TCustomDBGridEh; Stream: TStream; ExportOptions: TDBGridEhTextExportOptions);
Exporting grid data to a stream in text format.</p>
<p>function WriteDBGridEhToString(DBGridEh: TCustomDBGridEh;  ExportOptions: TDBGridEhStringExportOptions): String;
Exporting grid data to a string.</p>
<p>TDBGridEhStringExportOptions class contains the following properties</p>
<p>property ExportSelecting: Boolean;
Specifies to unload only the selected grid area. If property = False, then the entire grid will be unloaded regardless of the presence of the selected MultiSelect area.</p>
<p>property CellDelimiter: String;
A string separator of cells. Default #9 (Tab code).</p>
<p>property LineDelimiter: String;
Line separator string. The default is sLineBreak.</p>
<p>property TrailingLineDelimiter: Boolean;
The property specifies whether to unload the line separator after the last unloaded line.</p>
<p>property QuoteChar: Char;
Use QuoteChar to get or set the quote character that is used to enclose individual cell values if the value contains a substring that matches the value of the CellDelimiter, LineDelimiter, or QuoteChar property.</p>
<p>property IsExportTitle: Boolean;
The property specifies whether to write the column headings in the first row of the export.</p>
<p>property IsExportFooter: Boolean;
The property specifies whether to unload grid footers after unloading the split data.</p>
<p>property UseEditFormat: Boolean;
The property specifies that when receiving cell data as a string for numeric data and DateTime data, the string format used when editing the cell must be used. If property = False, then Column.DisplayFormat property will be used for formatting.</p>
<p>property FormatSettings: TFormatSettings;
The property specifies the format for numeric and DateTime values to be used when converting numbers and dates to text.</p>
<p>property UseFormatSettings: Boolean;
Set the property to True to indicate that the FormatSettings property should be used when converting numeric data.</p>
<p>property ExportColumns: TColumnsEhList;
List of columns to be exported. If the property is not filled, then all visible rows of the grid will be exported.</p>
<p>The TDBGridEhTextExportOptions class inherits from the TDBGridEhStringExportOptions class and has the following additional properties.</p>
<p>property Encoding: TEncoding;
The property specifies the character encoding that will be used when writing the exported data string to a stream or file.</p>
<p>property WriteBOM: Boolean;
Set the property to True to indicate to the algorithm that when writing data to a stream, a Byte Order Mark must be written to the beginning of the stream, which contains the encoding code in which the text data was written. For a description of the Byte Order Mark, see here:  <a href="https://en.wikipedia.org/wiki/Byte_order_mark" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Byte_order_mark<ExternalLinkIcon/></a></p>
<p>The simplest call to the SaveDBGridEhToTextFile procedure looks like this:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrImportExport<span class="token punctuation">.</span>btnExportAsTxtClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">:</span> TDBGridEhTextExportOptions<span class="token punctuation">;</span>
<span class="token keyword">begin</span>

  ExportOptions <span class="token operator">:=</span> TDBGridEhTextExportOptions<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportTitle <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportFooter <span class="token operator">:=</span> <span class="token keyword">False</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>Encoding <span class="token operator">:=</span> TEncoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>WriteBOM <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>QuoteChar <span class="token operator">:=</span> <span class="token string">'"'</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>CellDelimiter <span class="token operator">:=</span>  <span class="token string">#09</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>TrailingLineDelimiter <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>UseEditFormat <span class="token operator">:=</span> <span class="token keyword">False</span><span class="token punctuation">;</span>

  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\DBGridEh1Export.Txt'</span><span class="token punctuation">;</span>

  SaveDBGridEhToTextFile<span class="token punctuation">(</span>DBGridEh1<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> ExportOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>

  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>In this example, before calling the SaveDBGridEhToTextFile procedure, the TDBGridEhTextExportOptions class is created in which the settings for exporting grid data are written.
The TDBGridEhTextExportOptions class has extensive properties with which to control the size of the data export format.
An example of using classes to export data to a text view can be found in the Demos\MainDemo Demo project.</p>
<p>Export to Xlsx format:
In version 9.5 there was a function for unloading DBGridEh into an Xlsx file with the following parameters:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsx<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  <span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>  
  Options<span class="token punctuation">:</span> TDBGridEhExportAsXlsxOptions<span class="token punctuation">;</span> 
  IsSaveAll<span class="token punctuation">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">True</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Where Options is a combination of values
xlsxColoredEh		Export cell and background colors.
xlsxDataAsDisplayText	Unload all cell values as text.
xlsxDataAsEditText	Unload all cell values as text. Use text in edit mode. Those. don't use DisplayFormat.
We recommend using the new functions for uploading data to an Xlsx file with the following definition.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsx<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  <span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> 
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">overload</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsx<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  <span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> 
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">;</span> 
  ExporterClass<span class="token punctuation">:</span> TDBGridEhToXlsMemFileExporterClass<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">overload</span><span class="token punctuation">;</span>
</code></pre></div><pre><code>Parameter ExportOptions: TDBGridEhXlsMemFileExportOptions
</code></pre>
<p>The new version of the procedure uses the ExportOptions parameter of type TDBGridEhXlsMemFileExportOptions instead of the Options parameter.
The TDBGridEhXlsMemFileExportOptions class contains the following properties:</p>
<p>property IsExportSelecting: Boolean
Export only selected area of the grid. If property = False the entire grid will be exported.</p>
<p>property ExportColumns: TColumnsEhList
List of columns to export. If you need to export all visible columns of the grid, leave the ExportColumns list empty.</p>
<p>property IsExportTitle: Boolean
Whether to export the column headings.</p>
<p>property IsExportFooter: Boolean
Whether the grid footer needs to be exported.</p>
<p>property IsExportFontFormat: Boolean
Whether it is necessary to export the font format: Name, style, color.</p>
<p>property IsExportFillColor: Boolean
Whether to export cell colors.</p>
<p>property IsExportCellFormat: Boolean
Whether to export the format of the cells. Vertical and horizontal alignment.</p>
<p>property IsExportDisplayFormat: Boolean
Whether to export the format of numbers and dates specified in the Column.DisplayFormat or NumberField/DateField.DisplayFormat property</p>
<p>property IsCreateAutoFilter: Boolean
Whether to create an autofilter region.</p>
<p>property IsExportFreezeZones: Boolean
Whether to export fixed, non-scrollable zones. Zones are created based on the Grid Header and Frozen columns.</p>
<p>property IsFooterSumsAsFormula: Boolean
Whether it is necessary to convert the calculated Sum and Count values into Excel formulas before exporting the footer.</p>
<p>property IsExportDataGrouping: Boolean
Whether to export the grouping structure of the grid records.</p>
<p>property GridHeaderText: String
General grid header.</p>
<p>property GridHeaderFont: TFont;
Grid common header font.</p>
<p>property GridHeaderFontStored: Boolean;
Grid common header font is assigned. If the property value is False, then the default font used by Excel will be used. When the GridHeaderFont property is changed, the value of this property is automatically changed to True.</p>
<p>property GridFooterText: String;
General grid footer. The text data is added to the Worksheet in the grid data.</p>
<p>property GridFooterFont: TFont;
The grid's common footer font.</p>
<p>property GridFooterFontStored: Boolean;
The grid's common footer font is assigned.</p>
<p>property SheetName: String;
Worksheet page name.</p>
<p>Parameter ExporterClass: TDBGridEhToXlsMemFileExporterClass
This parameter must point to a class inherited from TDBGridEhToXlsMemFileExporter. Calling the ExportDBGridEhToXlsx procedure with the given parameters should be used when it is necessary to change the export algorithm or formatting details when exporting data from DBGridEh to an Xlsx file. Before calling the procedure, write an inheritor from the TDBGridEhToXlsMemFileExporter class and override the necessary virtual functions responsible for the necessary export details. When calling the ExportDBGridEhToXlsx procedure, pass a pointer to the inherited class. The procedure will create an instance of the specified class and will use it to export data.</p>
<p>Here is an example of calling the ExportDBGridEhToXlsx procedure without the ExporterClass parameter:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>actExportToExcelExecute<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Grid<span class="token punctuation">:</span> TDBGridEh<span class="token punctuation">;</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  Grid <span class="token operator">:=</span> TDBGridEh<span class="token punctuation">(</span>ActiveControl<span class="token punctuation">)</span><span class="token punctuation">;</span>

  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\DBGridEhAsXlsx.Xlsx'</span><span class="token punctuation">;</span>

  ExportOptions <span class="token operator">:=</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportAll <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportTitle <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportFooter <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportFontFormat <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportFillColor <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsCreateAutoFilter <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportFreezeZones <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsFooterSumsAsFormula <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportDisplayFormat <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>IsExportDataGrouping <span class="token operator">:=</span> <span class="token keyword">True</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>SheetName <span class="token operator">:=</span> <span class="token string">'Text'</span><span class="token punctuation">;</span>

  ExportOptions<span class="token punctuation">.</span>GridHeaderText <span class="token operator">:=</span> <span class="token string">'GridHeaderText'</span><span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>GridHeaderFont <span class="token operator">:=</span> Grid<span class="token punctuation">.</span>Font<span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">.</span>GridHeaderFont<span class="token punctuation">.</span>Size <span class="token operator">:=</span> <span class="token number">24</span><span class="token punctuation">;</span>

  ExportOptions<span class="token punctuation">.</span>GridFooterText <span class="token operator">:=</span> <span class="token string">'GridFooterText'</span>

  ExportDBGridEhToXlsx<span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> ExportOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

  ExportOptions<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>

  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Data export result: Screenshort</p>
<p><img src="@source/images/clip0054.png" alt="" loading="lazy"></p>
<p>The new version also adds procedures for unloading data into the intermediate TXlsMemFileEh object.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsMemFile<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  XlsFile<span class="token punctuation">:</span> TXlsMemFileEh<span class="token punctuation">;</span> 
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsMemFile<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  XlsFile<span class="token punctuation">:</span> TXlsMemFileEh<span class="token punctuation">;</span> 
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">;</span> 
  ExporterClass<span class="token punctuation">:</span> TDBGridEhToXlsMemFileExporterClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can use these functions to unload data first into an object of type TXlsMemFileEh, note to make additional changes in the XlsMemFile object, and after that save the data to a file on disk.
Exporting data from DBGridEh to TXlsMemFileEh using the TDBGridEhToXlsMemFileExporter class.
By using the TDBGridEhToXlsMemFileExporter class directly, you gain even more flexibility when exporting data to an XlsMemFile and then saving the data to an Xlsx file.
For example, the TDBGridEhToXlsMemFileExporter class has properties such as Worksheet, FromCol, and FromRow. Using the Worksheet property, you can specify which specific workbook to export to. The FromCol and FromRow properties set the starting column and row from which to start generating the export data.
Having written an inheritor from TDBGridEhToXlsMemFileExporter, you can overload the virtual methods of the class to change the format of data export.
Below is the implementation of the ExportDBGridEhToXlsMemFile procedure, which you can understand how to use the TDBGridEhToXlsMemFileExporter class.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsMemFile<span class="token punctuation">(</span>
  DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span> 
  XlsFile<span class="token punctuation">:</span> TXlsMemFileEh<span class="token punctuation">;</span>
  ExportOptions<span class="token punctuation">:</span> TDBGridEhXlsMemFileExportOptions<span class="token punctuation">;</span> 
  ExporterClass<span class="token punctuation">:</span> TDBGridEhToXlsMemFileExporterClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Exporter<span class="token punctuation">:</span> TDBGridEhToXlsMemFileExporter<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> ExporterClass <span class="token operator">&lt;></span> <span class="token keyword">nil</span>
    <span class="token keyword">then</span> Exporter <span class="token operator">:=</span> ExporterClass<span class="token punctuation">.</span>Create
    <span class="token keyword">else</span> Exporter <span class="token operator">:=</span> TDBGridEhToXlsMemFileExporter<span class="token punctuation">.</span>Create<span class="token punctuation">;</span>

  Exporter<span class="token punctuation">.</span>XlsFile <span class="token operator">:=</span> XlsFile<span class="token punctuation">;</span>
  Exporter<span class="token punctuation">.</span>Grid <span class="token operator">:=</span> DBGridEh<span class="token punctuation">;</span>
  <span class="token keyword">if</span> ExportOptions <span class="token operator">&lt;></span> <span class="token keyword">nil</span> <span class="token keyword">then</span>
    Exporter<span class="token punctuation">.</span>ExportOptions <span class="token operator">:=</span> ExportOptions<span class="token punctuation">;</span>

  Exporter<span class="token punctuation">.</span>ExportGrid<span class="token punctuation">;</span>

  Exporter<span class="token punctuation">.</span>Free<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Here in the code:
If <code v-pre>ExporterClass</code> is not specified, then the default <code v-pre>TDBGridEhToXlsMemFileExporter</code> class is used.
The <code v-pre>XlsFile</code>, <code v-pre>DBGridEh</code> and <code v-pre>ExportOptions</code> object is assigned.
Exporter.ExportGrid method exports data.
Once exported, the Exporter object is no longer needed and is removed. The generated data remains in the XlsFile class.
The <code v-pre>TDBGridEhToXlsMemFileExporter.Worksheet</code> property is not assigned to the code. Therefore, the Exporter renders data on the first workbook from the Workbook.Worksheets collection.</p>
<h3 id="data-import" tabindex="-1"><a class="header-anchor" href="#data-import" aria-hidden="true">#</a> Data Import:</h3>
<p>To import data, you can use the following classes:
<code v-pre>TDBGridEhImportAsText</code> – to import a text file or stream in which the values of the fields are separated by VK_TAB (#09).
<code v-pre>TDBGridEhImportAsUnicodeText</code> - to import a text file or stream in Unicode format.
<code v-pre>TDBGridEhImportAsVCLDBIF</code> – This data format used for the data transfer of one grid to another via the clipboard data.</p>
</div></template>


