# Unload the contents of the components in TDBVertGridEh Xlsx file


The library contains a set of classes and methods for "direct" export data of `TDBVertGridEh` to the file or stream in Xlsx format and XMLSpreadsheet.

To unload Xlsx format, use TDBVertGridExportToXlsxEh class or global procedure.

`TDBVertGridExportToXlsxEh = class;`

The class implements `VertGridEh` upload data to a file in Xlsx format (MS Excel file format). Unloading is carried out directly into a file without using additional libraries and OLE objects.  Full unloading works in versions of Delphi since Delphi XE2. To operate in earlier versions of Delphi you must use the third-party to form the Zip file version 2.

To upload data, use procedure:

```pascal
procedure ExportDBVertGridEhToXlsx(DBVertGridEh: TCustomDBVertGridEh; 
  const FileName: String);
```

To upload data in a format XMLSpreadsheet use global routine:

```pascal
procedure DBVertGridEh_ExportToStreamAsXMLSpreadsheet(DBVertGridEh: TCustomDBVertGridEh; 
  Stream: TStream; 
  Options: TExportAsXMLSpShOptionsEh; 
  ForWholeGrid: Boolean);
```

DBVertGridEh already uses this procedure to upload the data to the clipboard for pasting data to MS Excel. When transferring data in this format, MS Excel receives information not only about the content of the data but also about font, color, lines and the type of data.
