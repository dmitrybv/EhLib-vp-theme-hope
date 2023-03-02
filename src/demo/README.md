---
title: Features Demo
index: false
icon: discover
category:
  - Guide
---

## Catalog

- [Markdown Enhance](markdown.md)

- [Page Config](page.md)

- [Function Disable](disable.md)

- [Encryption Demo](encrypt.md)

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
