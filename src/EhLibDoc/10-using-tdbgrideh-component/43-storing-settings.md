# The technology for storing settings - SettingsKeeper


In EhLib version 9.2, in addition to the SaveGridLayout, SaveColumnsLayout methods, a new storage technology was added, called SettingsKeeper.

The `SettingsKeeper` offers the following option for storing and restoring settings.

There is a special class `TSettingsKeeperEh` in the library.
This class is an hierarchical array of settings.
Each element of the array consists of a key and a value.
You can treat this as the setup ID and the setting value.
The configuration ID must be unique.
The value of an element can be a string, a number or a nested array `TSettingsKeeperEh`.
Those you can create a hierarchical tree-like array of settings.

After you write all the form settings to the `TSettingsKeeperEh` array, you must save it in the
readable form in a file or other source of data storage.

To store the contents of an array in a textual, compact and easily readable format, the text format `JSON` is convenient.

The library contains functions for converting the contents of an array into a JSON text string

`function SettingsKeeperToJSONString(Keeper: TSettingsKeeperEh): String;`

and back

`procedure JSONStringToSettingsKeeper(Keeper: TSettingsKeeperEh; JSon: String);`

It is suggested to use a new way of storing application settings in the `Ini` file or other settings stores.

The `TDBGridEh` and `TDBVertGridEh` components have methods for saving the settings to the `TSettingsKeeperEh` array

`procedure WriteSettings(Keeper: TSettingsKeeperEh); overload; virtual;`

and to read the settings from the array

`procedure ReadSettings(Keeper: TSettingsKeeperEh); overload; virtual;`

The `TSettingsKeeperEh` class and SettingsKeeper settings storage technology is available only for `Delphi XE6` or higher.

### The script for using SettingsKeeper technology
The sequence of actions when using SettingsKeeper can be the following:

Record settings when closing or destroying Forms.

1.	Create a TSettingsKeeperEh class and call a method to write values
When you destroy a TMyForm form in a method 

```pascal:no-line-numbers
destructor Destroy;
```

create the array TSettingsKeeperEh and fill it with the settings data
```pascal:no-line-numbers
SetKeeper := TSettingsKeeperEh.Create;
WriteSettings(SetKeeper);
```

2.	Writing Values
2.1	If this is a simple text value, then use the 
```pascal:no-line-numbers
Add(const Key: String; const Value: String);
```

to add a setting to an array.
Example:
```pascal:no-line-numbers
SettingsKeeper1.Add('Caption', Form1.Caption);
```


2.2	If this is a simple numerical value, then use the method 

`Add(const Key: String; const Value: Integer);`

Example:
```pascal:no-line-numbers
  SettingsKeeper1.Add('Left', Form1.Left);
```


2.3	If you want to write a nested array, then create an instance of the `TSettingsKeeperEh` class, add a simple value or other nested arrays to it and add the array to the main array of settings using the method 

`procedure Add(const Key: String; const Value: TSettingsKeeperEh);`

Example:

```pascal:no-line-numbers
procedure TBaseForm.WriteSettings(Keeper: TSettingsKeeperEh);
var
  BoundSettings: TSettingsKeeperEh;
begin
  BoundSettings := TSettingsKeeperEh.Create;
  BoundSettings.Add('Left', Left);
  BoundSettings.Add('Top', Top);
  BoundSettings.Add('Width', Width);
  BoundSettings.Add('Height', Height);

  Keeper.Add('Bounds', BoundSettings);
end;
```

3.	Convert to `JSON` string 
Translate the array into a `JSON` string using the method

`function SettingsKeeperToJSONString(Keeper: TSettingsKeeperEh): String;`

4.	Writing to the repository
Write a line in the `Ini` file or another source of storage settings.

### Reading the saved data for the Form

1.	Create a `TSettingsKeeperEh` class and call a method to read values 
When creating a `TMyForm` form in a method 

```pascal:no-line-numbers
procedure DoCreate;
```

consider the JSON line from the Ini file (or another source of storage settings)
```pascal:no-line-numbers
FormSettingsStr: String;
```

2.	Reading each value
Based on the `JSON` line, create an array of `SettingsKeeper`

```pascal:no-line-numbers
  SetKeeper := TSettingsKeeperEh.Create;
  JSONStringToSettingsKeeper(SetKeeper, FormSettingsStr);
```

3.	Reading each value
Read the values of the desired items from `SettingsKeeper`:

3.1	Reading Text Values
If this is a simple text value, then use the `TryGetStringValue`
```pascal:no-line-numbers
  if SettingsKeeper1.TryGetStringValue('Caption', Value) then
    Form.Caption := Value
```

3.2	Reading Numeric Values
If this is a simple numeric value, then use the `TryGetIntegerValue`

```pascal:no-line-numbers
  if SettingsKeeper1.TryGetIntegerValue('Left', IntValue) then
    Form.Left := IntValue;
```

3.3	Reading Nested Arrays
If it's a nested array of values, then use the `TryGetSubsettingsValue` method to read a nested array:

```pascal:no-line-numbers
  if Keeper.TryGetSubsettingsValue('Bounds', BoundsSets) then
  begin
    ReadBoundsSettings(BoundsSets);
  end;
```

then read the elements of the nested array:

```pascal:no-line-numbers
procedure TBaseForm.ReadBoundsSettings(BoundsSets: TSettingsKeeperEh);
var
  IntValue: Integer;
begin
  if BoundsSets.TryGetIntegerValue('Left', IntValue) then
    Self.Left := IntValue;
  if BoundsSets.TryGetIntegerValue('Top', IntValue) then
    Self.Top := IntValue;
  if BoundsSets.TryGetIntegerValue('Width', IntValue) then
    Self.Width := IntValue;
  if BoundsSets.TryGetIntegerValue('Height', IntValue) then
    Self.Height := IntValue;
end;
```

### Description of the JSonSettingsKeeper demo project
The `JSonSettingsKeeper.dpr` project proposes an option for using this technology in the finished project.
The project is in the folder
`<EhLib Archive>\Demos\JSonSettingsKeeper`

For the convenience of using the technology, it is proposed in the project to create a basic Form that can store its position and size, and has virtual methods for adding additional settings to the inherited Forms.

In this example:

`BaseFormUnit.pas`

The basic Form TBaseForm for all other forms that can store its position and size.
It contains the following methods: 
```pascal:no-line-numbers
   procedure ReadSettings(Keeper: TSettingsKeeper); virtual;
```   
Saving settings in the settings array 
    	Keeps the position and size of the form

```pascal:no-line-numbers
   procedure WriteSettings(Keeper: TSettingsKeeper); virtual;
```   
Restore settings from the array settings 
Restores the position and size of the form

```pascal:no-line-numbers
   function GetSettingID: String; virtual;
```   
Get a unique form ID. Default class name.

```pascal:no-line-numbers
   procedure TBaseForm.DoCreate;
```   
Reads the settings from the file "ProgramName" .Ini

```pascal:no-line-numbers
destructor TBaseForm.Destroy;
```
Writes the form settings to an Ini file 

`MainFormUnit.pas`

The main form of the project is inherited from `TBaseForm`. Other forms open from it.
Overrides the `ReadSettings` `WriteSettings` method to save a list of open forms when the main form is closed.
When you start the application, all the opening of the form is restored.
The remaining forms of the project are inherited from TBaseForm.

`Unit1.pas`

The unit contains `DBGridEh`, `DBVertGridEh` and `Splitter` on the form. The settings of the control data are supposed to be saved in `SettingsKeeper`.

Overrides method `WriteSettings` which:
- Calls the base method for writing / reading the position of the form window.
- Writes DBGridEh1 grid settings to an array of settings with the DBGridEh1 key.
  For recording, use the grid method TDBGridEh.WriteSettings
   
```pascal:no-line-numbers
  GridSettings := TSettingsKeeperEh.Create;
  DBGridEh1.WriteSettings(GridSettings);
  Keeper.Add('DBGridEh1', GridSettings);
```

The `TDBGridEh.WriteSettings` method writes parameters such as `Height` of a line (if it is allowed to change the height of the line in the grid), `SearchPanel` search parameters (if the SearchPanel is active) and columns settings such as width, position, visibility, sort marker, height and width of the drop-down list if the text editor contains a drop-down list, the position of the cell in the RowPanel if the RowPanel mode is active.

- Records the settings of the vertical grid `DBVertGridEh1` in the array of settings with the `DBVertGridEh1` key
  For writing, the grid method is `TDBVertGridEh.WriteSettings`

```pascal:no-line-numbers
  GridSettings := TSettingsKeeperEh.Create;
  DBVertGridEh1.WriteSettings(GridSettings);
  Keeper.Add('DBVertGridEh1', GridSettings);
```

- Records the location of the vertical splitter
```pascal:no-line-numbers
  Keeper.Add('SplitterPosition', DBVertGridEh1.Width);
```

Similarly, the ReadSettings method is overridden in the next modules.

`Unit2.pas`

`Unit3.pas`

### Configuration Storage File `JSonSettingsKeeper.Ini`

As a result, after closing the program, the following values are written to the `JSonSettingsKeeper.Ini` file


```ini
[FormSettings]
TForm1={"Bounds":{"Height":"578","Left":"128","Width":"1168","Top":"459"},
   "DBVertGridEh1":{"LabelColWidth":"64",
   "Rows":{"Continent":{"RowIndex":"2","RowLines":"0","Visible":"True"},"Name":{"RowIndex":"0","RowLines":"0","Visible":"True"},"Population":{"RowIndex":"4","RowLines":"0","Visible":"True"},"Capital":{"RowIndex":"1","RowLines":"0","Visible":"True"},"Area":{"RowIndex":"3","RowLines":"0","Visible":"True"}}},
   "DBGridEh1":{
   "SearchPanel":{"CellBeginsWithMode":"True","CaseSensitive":"True","WholeWords":"True","SearchScope":"gssCurrentColumnEh"},
   "Columns":{"Population":{"DropDownRows":"7","TitleSortMarker":"smDownEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"1","ColWidth":"186","ColIndex":"0"},"Name":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"96","ColIndex":"1"},"Continent":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"148","ColIndex":"3"},"Capital":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"148","ColIndex":"2"},"Area":{"DropDownRows":"7","TitleSortMarker":"smNoneEh","DropDownWidth":"0","Visible":"True","TitleSortIndex":"0","ColWidth":"64","ColIndex":"4"}}},"SplitterPosition":"300"}

TMainForm={"Bounds":{"Height":"319","Left":"130","Width":"305","Top":"130"},"OpenForms":"Form1;Form2;Form3"}

TForm3={"Bounds":{"Height":"314","Left":"450","Width":"329","Top":"136"}}

TForm2={"Bounds":{"Height":"411","Left":"948","Width":"838","Top":"51"}}
```

