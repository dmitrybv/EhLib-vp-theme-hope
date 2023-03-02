<template><div><h1 id="components-for-uploading-dataset-to-a-text-file-and-load-a-text-file" tabindex="-1"><a class="header-anchor" href="#components-for-uploading-dataset-to-a-text-file-and-load-a-text-file" aria-hidden="true">#</a> Components for uploading DataSet to a text file and load a text file</h1>
<p>The library contains components for uploading data from a <code v-pre>DataSet</code> to a text file for later downloading from it.</p>
<p>Data can be uploaded to a file in a format with separators of values or in a format of the fixed length for each field.</p>
<p>When importing and exporting data it is possible to set additional settings of the data format such as: Format of dates, date separator, time format, time separator, decimal separator, etc.</p>
<h3 id="component-tdatasettextexportereh" tabindex="-1"><a class="header-anchor" href="#component-tdatasettextexportereh" aria-hidden="true">#</a> Component TDataSetTextExporterEh</h3>
<p>In Design-Time call the following method to configure component’s properties which will define format of uploaded in Run-Time data</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TDataSetTextExporterEh<span class="token punctuation">.</span>ExportToFile<span class="token punctuation">(</span>AFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span> 
  AppendToFile<span class="token punctuation">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">False</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">or</span>
<span class="token keyword">procedure</span> TDataSetTextExporterEh<span class="token punctuation">.</span>ExportToStream<span class="token punctuation">(</span>AStream<span class="token punctuation">:</span> TStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>The first method stores data in a file, the second one stores data in a stream. If set AppendToFile to True, then data will be append to the file but not will be rewritten.</p>
<h3 id="main-properties-of-tdatasettextexportereh-component" tabindex="-1"><a class="header-anchor" href="#main-properties-of-tdatasettextexportereh-component" aria-hidden="true">#</a> Main properties of TDataSetTextExporterEh component</h3>
<p><code v-pre>DataSet: TDataSet</code></p>
<dd>DataSet which data will be used as source of export.</dd>
<br>
<p><code v-pre>Encoding: TExportImportEncodingEh</code></p>
<dl>
     <dd>Encoding in which data will be unloaded</dd>
     <br>
<dd>
<p><code v-pre>TExportImportEncodingEh</code>  type has the following values:</p>
<dl><dd>
<p><code v-pre>eieAutoEh</code> - upload data in format specified by the global variable DefaultExportEncoding.</p>
<p><code v-pre>eieUTF7Eh</code> - upload data in format eieUTF7Eh.</p>
<p>Other values: <code v-pre>eieUTF8Eh</code>, <code v-pre>eieUnicodeEh</code>, <code v-pre>eieBigEndianUnicodeEh</code>, <code v-pre>eieANSIEh</code>, <code v-pre>eieASCIIEh</code>.</p>
</dd></dl>
</dd></dl>
<br>
<p><code v-pre>ValueSeparationStyle: TValueSeparationStyleEh</code></p>
<dd>
<p>Style of division of values during exporting data</p>
<p><code v-pre>vssFixedPositionAndSizeEh</code> – fields have fixed lengths specified through TFieldsMapItemEh.FileFieldLen</p>
<p><code v-pre>vssDelimiterSeparatedEh</code> – fields are separated by a separator specified by ValueDelimiter property.</p>
</dd>
<br>
<p><code v-pre>ValueDelimiter: Char</code></p>
<dd>Separator of field values in an output data stream.</dd>
<br>
<p><code v-pre>QuoteChar: Char</code></p>
<dd>Sign of quotes in which recorded values will enclosed.</dd>
<br>
<p><code v-pre>IsExportFieldNames: Boolean</code></p>
<dd>Property specifies necessity to record names of fields in the first row of the export file.</dd>
<br>
<p><code v-pre>ExportValueAsDisplayText: Boolean</code></p>
<dd>Property specifies style of transferring fields values to their text presentation. In case of ExportValueAsDisplayText = True, Field.DisplayText property will be used to get data from Field, otherwise will be used Field.Value property.</dd>
<br>
<p><code v-pre>ValueExceedsSizeLimitAction: TValueExceedsSizeLimitActionEh</code></p>
<dd>Action to be done if length of field’s value exceeds length specified in TFieldsMapItemEh.FileFieldLen.</dd>
<br>
<p><code v-pre>ExportRecordsCount: Integer</code></p>
<dd>Amount of unloaded records. -1 value specifies necessity to unload all records from DataSet.</dd>
<br>
<p><code v-pre>ExportFormats: TExportImportFormatsEh</code></p>
<dd>Sets formats and separators for the data type of Date, Time and Number.</dd>
<br>
<p><code v-pre>FieldsMap: TFieldsMapCollectionEh</code></p>
<dd>Specifies a collection of TfieldsMapCollectionEh elements. Each element of the collection defines the parameters of a field in the export file. If the FieldsMap collection is empty, then all fields of DataSet will be exported.</dd>
<br>
<h3 id="main-events-of-tdatasettextexportereh-component" tabindex="-1"><a class="header-anchor" href="#main-events-of-tdatasettextexportereh-component" aria-hidden="true">#</a> Main events of TDataSetTextExporterEh component</h3>
<p><code v-pre>OnStartExport: TNotifyEvent</code></p>
<dd>Called before start of data export</dd>
<br>
<p><code v-pre>OnFinishExport: TNotifyEvent</code></p>
<dd>Called after end of data export</dd>
<br>
<p><code v-pre>OnExportTitle: TDataSetTextExporterExportLineEventEh</code></p>
<dd>Called when exporting the column headings</dd>
<br>
<p><code v-pre>OnExportRecord: TDataSetTextExporterExportLineEventEh</code></p>
<dd>Called when exporting a single DataSet’s record. StreamWriter parameter of TStreamWriter type is passed to handler to use to record additional information to stream, use completely own algorithm of data exporting or call the default method Exporter.DefaultExportRecord (StreamWriter); for data exporting.</dd>
<br/>
<p><code v-pre>OnTruncateTitleField: TTruncateTitleFieldEventEh</code></p>
<dd>Called when it is needed to cut off the name of a header field</dd>
<br/>
<p><code v-pre>OnTruncateDataField: TTruncateDataFieldEventEh</code></p>
<dd>Called when it is needed to trim the value field</dd>
<br/>
<p><code v-pre>OnGetFieldSize: TGetFieldSizeEventEh</code></p>
<dd>Called to get the size of the field</dd>
<br/>
<p><code v-pre>OnFormatExportValue: TFormatTextExportValueEventEh</code></p>
<dd>Called when exporting a single field value. In the event handler it can be written down the exported value in the Value parameter. If default handler of value formatting is overriden then set Processed parameter to True as well.</dd>
<br/>
<h3 id="component-tdatasettextimportereh" tabindex="-1"><a class="header-anchor" href="#component-tdatasettextimportereh" aria-hidden="true">#</a> Component TDataSetTextImporterEh</h3>
<p>Configure component’s properties in Design-Time.
Call the following method in Run-Time</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TDataSetTextImporterEh<span class="token punctuation">.</span>ImportFromFile<span class="token punctuation">(</span>AFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">or</span>
<span class="token keyword">procedure</span> TDataSetTextImporterEh<span class="token punctuation">.</span>ImportFromStream<span class="token punctuation">(</span>AStream<span class="token punctuation">:</span> TStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>See demo project in folder <code v-pre>&lt;EhLib Archive&gt;/DEMOS/DataSetImpExp</code></p>
</div></template>


