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
<sh>DataSet which data will be used as source of export.</sh>
<br>

`Encoding: TExportImportEncodingEh`
<dl>
     <sh>Encoding in which data will be unloaded</sh>
     <br>

<sh>

`TExportImportEncodingEh`  type has the following values: 

<dl><sh>

`eieAutoEh` - upload data in format specified by the global variable DefaultExportEncoding.

`eieUTF7Eh` - upload data in format eieUTF7Eh.
          
Other values: `eieUTF8Eh`, `eieUnicodeEh`, `eieBigEndianUnicodeEh`, `eieANSIEh`, `eieASCIIEh`.
</sh></dl>

</sh></dl>
<br>

`ValueSeparationStyle: TValueSeparationStyleEh`
<sh>

Style of division of values during exporting data

`vssFixedPositionAndSizeEh` – fields have fixed lengths specified through TFieldsMapItemEh.FileFieldLen

`vssDelimiterSeparatedEh` – fields are separated by a separator specified by ValueDelimiter property.

</sh>
<br>

`ValueDelimiter: Char`
<sh>Separator of field values in an output data stream.</sh>
<br>

`QuoteChar: Char`
<sh>Sign of quotes in which recorded values will enclosed.</sh>
<br>

`IsExportFieldNames: Boolean`
<sh>Property specifies necessity to record names of fields in the first row of the export file.</sh>
<br>

`ExportValueAsDisplayText: Boolean`
<sh>Property specifies style of transferring fields values to their text presentation. In case of ExportValueAsDisplayText = True, Field.DisplayText property will be used to get data from Field, otherwise will be used Field.Value property.</sh>
<br>

`ValueExceedsSizeLimitAction: TValueExceedsSizeLimitActionEh`
<sh>Action to be done if length of field’s value exceeds length specified in TFieldsMapItemEh.FileFieldLen.</sh>
<br>

`ExportRecordsCount: Integer`
<sh>Amount of unloaded records. -1 value specifies necessity to unload all records from DataSet.</sh>
<br>

`ExportFormats: TExportImportFormatsEh`
<sh>Sets formats and separators for the data type of Date, Time and Number.</sh>
<br>

`FieldsMap: TFieldsMapCollectionEh`
<sh>Specifies a collection of TfieldsMapCollectionEh elements. Each element of the collection defines the parameters of a field in the export file. If the FieldsMap collection is empty, then all fields of DataSet will be exported.</sh>
<br>


### Main events of TDataSetTextExporterEh component

`OnStartExport: TNotifyEvent`
<sh>Called before start of data export</sh>
<br>

`OnFinishExport: TNotifyEvent`
<sh>Called after end of data export</sh>
<br>

`OnExportTitle: TDataSetTextExporterExportLineEventEh`
<sh>Called when exporting the column headings</sh>
<br>

`OnExportRecord: TDataSetTextExporterExportLineEventEh`
<sh>Called when exporting a single DataSet’s record. StreamWriter parameter of TStreamWriter type is passed to handler to use to record additional information to stream, use completely own algorithm of data exporting or call the default method Exporter.DefaultExportRecord (StreamWriter); for data exporting.</sh>
<br/>

`OnTruncateTitleField: TTruncateTitleFieldEventEh`
<sh>Called when it is needed to cut off the name of a header field</sh>
<br/>

`OnTruncateDataField: TTruncateDataFieldEventEh`
<sh>Called when it is needed to trim the value field</sh>
<br/>

`OnGetFieldSize: TGetFieldSizeEventEh`
<sh>Called to get the size of the field</sh>
<br/>

`OnFormatExportValue: TFormatTextExportValueEventEh`
<sh>Called when exporting a single field value. In the event handler it can be written down the exported value in the Value parameter. If default handler of value formatting is overriden then set Processed parameter to True as well.</sh>
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

