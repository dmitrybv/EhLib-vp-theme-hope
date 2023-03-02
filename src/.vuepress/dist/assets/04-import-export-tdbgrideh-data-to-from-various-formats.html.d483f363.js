import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as n}from"./app.ac77cf73.js";const t={},o=n(`<h1 id="import-export-tdbgrideh-data-to-from-various-formats" tabindex="-1"><a class="header-anchor" href="#import-export-tdbgrideh-data-to-from-various-formats" aria-hidden="true">#</a> Import/Export TDBGridEh data to/from various formats</h1><p>EhLib have a set of functions to export data from <code>DBGridEh</code> to <code>Text</code>, <code>Csv</code>, <code>HTML</code>, <code>RTF</code>, <code>XLS</code>, <code>Xlsx</code> and internal formats. It can write data to stream (TStream object) or to file. Procedures and classes to import and export data are in module <code>DBGridEhImpExp</code>. Data Export: The global procedures <code>SaveDBGridEhToExportFile</code> and <code>WriteDBGridEhToExportStream</code> are used to export data. <code>SaveDBGridEhToExportFile</code> saves data to file. <code>WriteDBGridEhToExportStream</code> saves data to a stream. The ExportClass parameter specifies the class that will be used to export data. The DBGridEh parameter sets the grid to be exported. For example, you can use the following code to upload data in <code>HTML</code> format:</p><div class="language-pascal line-numbers-mode" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> TfrImportExport<span class="token punctuation">.</span>btnExportAsHTMLClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  FileName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  FileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">&#39;\\DBGridEh1Export.Html&#39;</span><span class="token punctuation">;</span>

  SaveDBGridEhToExportFile<span class="token punctuation">(</span>TDBGridEhExportAsHTML<span class="token punctuation">,</span> DBGridEh1<span class="token punctuation">,</span> FileName<span class="token punctuation">,</span> RBSaveAll<span class="token punctuation">.</span>Checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, this method contains limitations. For example, you cannot specify that you want or do not want to dump the grid header. To solve these problems in EhLib 10.0 for exporting data in text format and in Xlsx format, hotel functions were added. You can use this generic SaveDBGridEhToExportFile method with the following export classes:</p><p><code>TDBGridEhExportAsHTML</code> – To export in HTML.</p><p><code>TDBGridEhExportAsRTF</code> – To export in RTF format.</p><p><code>TDBGridEhExportAsXMLSpreadsheet</code> – to export data in the format XML Spreadsheet. This format is supported by Microsoft and can be used to transfer data to Microsoft Excel via the clipboard. DBGridEh component is already using this format when writing data to the clipboard, so that data can be transferred from DBGridEh in Microsoft Excel format with preservation of the font, colors and types of data. The implementation of the class is the module DBGridEh <code>XMLSpreadsheetExp</code>.</p><h5 id="deprecated-classes" tabindex="-1"><a class="header-anchor" href="#deprecated-classes" aria-hidden="true">#</a> Deprecated classes:</h5><p><code>TDBGridEhExportAsText</code> – to export data to a text file or stream. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.</p><p><code>TDBGridEhExportAsUnicodeText</code> – To export data to a text file or stream in Unicode format. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.</p><p><code>TDBGridEhExportAsCSV</code> – To export data to a delimited text file type &#39;;&#39;. You can change the separator used globally permernnuyu DBGridEhImpExpCsvSeparator or property TDBGridEhExportAsCSV.Separator. The class is deprecated, use the new <code>SaveDBGridEhToTextFile</code>, <code>WriteDBGridEhToTextStream</code> and <code>WriteDBGridEhToString</code> methods.</p><p><code>TDBGridEhExportAsXLS</code> – To export format VCLDBIF (This MS Excel format version 2). In this format there is a limit on the length of text characters. The length can not exceed 255. We do not recommend using this format since it is deprecated.</p><p><code>TDBGridEhExportAsOLEXLS</code> – To export to a format compatible with MS Excel file and use the class <code>TDBGridEhExportAsOLEXLS</code>, <code>TDBGridEhExportAsXlsx</code> or global procedures and ExportDBGridEhToOleExcel ExportDBGridEhToXlsx.</p><p>Also for export, you can use a global procedure</p><div class="language-pascal line-numbers-mode" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">function</span> ExportDBGridEhToOleExcel<span class="token punctuation">(</span>DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
  Options<span class="token punctuation">:</span> TDBGridEhExportAsOLEXLSOptions<span class="token punctuation">;</span> IsSaveAll<span class="token punctuation">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Variant<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>TDBGridEhExportAsXlsx</code> – To export data in the format Xlsx. The export is performed directly to a file. The presence of additional libraries are not required. The class is deprecated, use the new <code>ExportDBGridEhToXlsMemFile</code> method.</p><p>Unloading Supported in <code>Delphi XE2</code> and higher. For working of class unloading in earlier versions of Delphi you must use the third-party tools to form the Zip file version 2. For more information about unloading format Xlsx for Delphi XE2 version below read in the files section <code>&lt;EhLib Archive&gt;\\ZipProviders\\</code></p><p>Also for export, you can use a global procedure</p><div class="language-pascal line-numbers-mode" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> ExportDBGridEhToXlsx<span class="token punctuation">(</span>DBGridEh<span class="token punctuation">:</span> TCustomDBGridEh<span class="token punctuation">;</span>
 <span class="token keyword">const</span> FileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>  Options<span class="token punctuation">:</span> TDBGridEhExportAsXlsxOptions<span class="token punctuation">;</span> IsSaveAll<span class="token punctuation">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">True</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),r=[o];function p(i,d){return a(),s("div",null,r)}const u=e(t,[["render",p],["__file","04-import-export-tdbgrideh-data-to-from-various-formats.html.vue"]]);export{u as default};