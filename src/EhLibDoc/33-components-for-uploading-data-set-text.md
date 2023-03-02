# Components for uploading DataSet to a text file and load a text file


The library contains components for uploading data from a `DataSet` to a text file for later downloading from it.

Data can be uploaded to a file in a format with separators of values or in a format of the fixed length for each field.

When importing and exporting data it is possible to set additional settings of the data format such as: Format of dates, date separator, time format, time separator, decimal separator, etc.

###     Component TDataSetTextExporterEh

In Design-Time call the following method to configure component’s properties which will define format of uploaded in Run-Time data

```pascal:no-line-numbers
procedure TDataSetTextExporterEh.ExportToFile(AFileName: String; 
  AppendToFile: Boolean = False);
or
procedure TDataSetTextExporterEh.ExportToStream(AStream: TStream);
``` 

The first method stores data in a file, the second one stores data in a stream. If set AppendToFile to True, then data will be append to the file but not will be rewritten.

### Main properties of TDataSetTextExporterEh component

`DataSet: TDataSet`
<dd>DataSet which data will be used as source of export.</dd>
<br>

`Encoding: TExportImportEncodingEh`
<dl>
     <dd>Encoding in which data will be unloaded</dd>
     <br>

<dd>

`TExportImportEncodingEh`  type has the following values: 

<dl><dd>

`eieAutoEh` - upload data in format specified by the global variable DefaultExportEncoding.

`eieUTF7Eh` - upload data in format eieUTF7Eh.
          
Other values: `eieUTF8Eh`, `eieUnicodeEh`, `eieBigEndianUnicodeEh`, `eieANSIEh`, `eieASCIIEh`.
</dd></dl>

</dd></dl>
<br>

`ValueSeparationStyle: TValueSeparationStyleEh`
<dd>

Style of division of values during exporting data

`vssFixedPositionAndSizeEh` – fields have fixed lengths specified through TFieldsMapItemEh.FileFieldLen

`vssDelimiterSeparatedEh` – fields are separated by a separator specified by ValueDelimiter property.

</dd>
<br>

`ValueDelimiter: Char`
<dd>Separator of field values in an output data stream.</dd>
<br>

`QuoteChar: Char`
<dd>Sign of quotes in which recorded values will enclosed.</dd>
<br>

`IsExportFieldNames: Boolean`
<dd>Property specifies necessity to record names of fields in the first row of the export file.</dd>
<br>

`ExportValueAsDisplayText: Boolean`
<dd>Property specifies style of transferring fields values to their text presentation. In case of ExportValueAsDisplayText = True, Field.DisplayText property will be used to get data from Field, otherwise will be used Field.Value property.</dd>
<br>

`ValueExceedsSizeLimitAction: TValueExceedsSizeLimitActionEh`
<dd>Action to be done if length of field’s value exceeds length specified in TFieldsMapItemEh.FileFieldLen.</dd>
<br>

`ExportRecordsCount: Integer`
<dd>Amount of unloaded records. -1 value specifies necessity to unload all records from DataSet.</dd>
<br>

`ExportFormats: TExportImportFormatsEh`
<dd>Sets formats and separators for the data type of Date, Time and Number.</dd>
<br>

`FieldsMap: TFieldsMapCollectionEh`
<dd>Specifies a collection of TfieldsMapCollectionEh elements. Each element of the collection defines the parameters of a field in the export file. If the FieldsMap collection is empty, then all fields of DataSet will be exported.</dd>
<br>


### Main events of TDataSetTextExporterEh component

`OnStartExport: TNotifyEvent`
<dd>Called before start of data export</dd>
<br>

`OnFinishExport: TNotifyEvent`
<dd>Called after end of data export</dd>
<br>

`OnExportTitle: TDataSetTextExporterExportLineEventEh`
<dd>Called when exporting the column headings</dd>
<br>

`OnExportRecord: TDataSetTextExporterExportLineEventEh`
<dd>Called when exporting a single DataSet’s record. StreamWriter parameter of TStreamWriter type is passed to handler to use to record additional information to stream, use completely own algorithm of data exporting or call the default method Exporter.DefaultExportRecord (StreamWriter); for data exporting.</dd>
<br/>

`OnTruncateTitleField: TTruncateTitleFieldEventEh`
<dd>Called when it is needed to cut off the name of a header field</dd>
<br/>

`OnTruncateDataField: TTruncateDataFieldEventEh`
<dd>Called when it is needed to trim the value field</dd>
<br/>

`OnGetFieldSize: TGetFieldSizeEventEh`
<dd>Called to get the size of the field</dd>
<br/>

`OnFormatExportValue: TFormatTextExportValueEventEh`
<dd>Called when exporting a single field value. In the event handler it can be written down the exported value in the Value parameter. If default handler of value formatting is overriden then set Processed parameter to True as well.</dd>
<br/>
		
### Component TDataSetTextImporterEh
Configure component’s properties in Design-Time.
Call the following method in Run-Time 

```pascal:no-line-numbers
procedure TDataSetTextImporterEh.ImportFromFile(AFileName: String);
or
procedure TDataSetTextImporterEh.ImportFromStream(AStream: TStream);
```

See demo project in folder `<EhLib Archive>/DEMOS/DataSetImpExp`

