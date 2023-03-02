# Import/Export TDBGridEh data to/from various formats

EhLib have a set of functions to export data from `DBGridEh` to `Text`, `Csv`, `HTML`, `RTF`, `XLS`, `Xlsx` and internal formats. It can write data to stream (TStream object) or to file. 
Procedures and classes to import and export data are in module `DBGridEhImpExp`.
Data Export:
The global procedures `SaveDBGridEhToExportFile` and `WriteDBGridEhToExportStream` are used to export data.
`SaveDBGridEhToExportFile` saves data to file. `WriteDBGridEhToExportStream` saves data to a stream. The ExportClass parameter specifies the class that will be used to export data. The DBGridEh parameter sets the grid to be exported.
For example, you can use the following code to upload data in `HTML` format:

```pascal
procedure TfrImportExport.btnExportAsHTMLClick(Sender: TObject);
var
  Path: string;
  FileName: string;
begin
  GetDir(0,Path);
  FileName := Path + '\DBGridEh1Export.Html';

  SaveDBGridEhToExportFile(TDBGridEhExportAsHTML, DBGridEh1, FileName, RBSaveAll.Checked);
  ShellExecute(Handle, nil, PChar(FileName), nil, nil, SW_SHOWNORMAL);
end;
```

However, this method contains limitations. For example, you cannot specify that you want or do not want to dump the grid header. To solve these problems in EhLib 10.0 for exporting data in text format and in Xlsx format, hotel functions were added.
You can use this generic SaveDBGridEhToExportFile method with the following export classes:

`TDBGridEhExportAsHTML` – To export in HTML.

`TDBGridEhExportAsRTF` – To export in RTF format.

`TDBGridEhExportAsXMLSpreadsheet` – to export data in the format XML Spreadsheet. This format is supported by Microsoft and can be used to transfer data to Microsoft Excel via the clipboard. DBGridEh component is already using this format when writing data to the clipboard, so that data can be transferred from DBGridEh in Microsoft Excel format with preservation of the font, colors and types of data. The implementation of the class is the module DBGridEh `XMLSpreadsheetExp`.

##### Deprecated classes:

`TDBGridEhExportAsText` – to export data to a text file or stream. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.

`TDBGridEhExportAsUnicodeText` – To export data to a text file or stream in Unicode format. The class is deprecated, use the new SaveDBGridEhToTextFile, WriteDBGridEhToTextStream and WriteDBGridEhToString methods.

`TDBGridEhExportAsCSV` – To export data to a delimited text file type ';'. You can change the separator used globally permernnuyu DBGridEhImpExpCsvSeparator or property TDBGridEhExportAsCSV.Separator. The class is deprecated, use the new `SaveDBGridEhToTextFile`, `WriteDBGridEhToTextStream` and `WriteDBGridEhToString` methods.

`TDBGridEhExportAsXLS` – To export format VCLDBIF (This MS Excel format version 2). In this format there is a limit on the length of text characters. The length can not exceed 255. We do not recommend using this format since it is deprecated.

`TDBGridEhExportAsOLEXLS` – To export to a format compatible with MS Excel file and use the class `TDBGridEhExportAsOLEXLS`, `TDBGridEhExportAsXlsx` or global procedures and ExportDBGridEhToOleExcel ExportDBGridEhToXlsx.

Also for export, you can use a global procedure 

```pascal
function ExportDBGridEhToOleExcel(DBGridEh: TCustomDBGridEh;
  Options: TDBGridEhExportAsOLEXLSOptions; IsSaveAll: Boolean = True): Variant;

```
`TDBGridEhExportAsXlsx` – To export data in the format Xlsx. The export is performed directly to a file. The presence of additional libraries are not required. The class is deprecated, use the new `ExportDBGridEhToXlsMemFile` method.

Unloading Supported in `Delphi XE2` and higher. For working of class unloading in earlier versions of Delphi you must use the third-party tools to form the Zip file version 2. For more information about unloading format Xlsx for Delphi XE2 version below read in the files section `<EhLib Archive>\ZipProviders\`

Also for export, you can use a global procedure 

```pascal
procedure ExportDBGridEhToXlsx(DBGridEh: TCustomDBGridEh;
 const FileName: String;  Options: TDBGridEhExportAsXlsxOptions; IsSaveAll: Boolean = True);

``` 