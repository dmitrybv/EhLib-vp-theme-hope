# Selecting print page orientation


 `TPrintDBGridEh` doesn’t have special properties to set page orientation. 
 To do it, you need to set orientation of virtual printer before calling `Print` or `Preview` procedure. Like this code:

```pascal:no-line-numbers
uses PrViewEh, Printers.
..............
procedure TForm1.bPreviewClick(Sender: TObject);
begin
  PrinterPreview.Orientation := poLandscape;
  PrintDBGridEh1.Preview;
end;
```
