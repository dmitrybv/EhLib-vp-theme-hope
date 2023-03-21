# Control data input in the InplaceEditor

After the user has entered the data in the cell editor and press `Enter`, or tried to move to the next cell the `grid` transfers the data entered from the editor in the `Field` like this `Field.AsString := InplaceEditor.Text`.

Before the data transfer the `TColumnEh.OnUpdateData` event occurs, where you can perform additional checks, replace the text or to take on itself the management of data entry in the field Field.

The event has the following parameters:

`Sender: TObject`
<sh>TColumnEh that calls the event.</sh>
<br>

`var Text: string` 	
<sh>The text from the editor of the cell to be written into the field.</sh>
<br>

`var Value: Variant` 	
<sh>The value of the cell editor in a variable of type Variant. In some cases, the 
   value is passed as Variant type. To determine which of the two variable contains the value use UseText parameter.</sh>
<br>

`var UseText: Boolean`	
<sh>Determines which parameter Text or Value should be used to record the values in the field.</sh>
<br>

`var Handled: Boolean`	
<sh>Set Handled to True to indicate that you have processed the event and do not need to call a method to write the value in the field by default.</sh>
<br>

In this event, you can change the Text and the Value that will record in the DataSet. You can also change UseText value to indicate which parameter should be used for recording. If it is used Value parameter, the recording will TField.AsVariant property to write value.

You are free to write the value in the field using the following code:
 
```pascal
procedure TForm1.DBGridEh1Columns2UpdateData(Sender: TObject; var Text: string;
  var Value: Variant; var UseText, Handled: Boolean);
begin
  if UseText
    then TColumnEh(Sender).Field.AsString := Text
    else TColumnEh(Sender).Field.AsVariant := Value;
  Handled := True;
end;
```

You can also directly call the `DataSet.Post` to finish editing the recording immediately after recording the data in the field.
