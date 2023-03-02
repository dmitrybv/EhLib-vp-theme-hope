# Save / restore the state of the columns in the INI-file and the Registry


Save rows settings to INI file or Registry

```pascal
procedure SaveRowsLayout(ACustIni: TCustomIniFile; const Section: String);    
procedure SaveRowsLayout(ARegIni: TRegIniFile);
procedure SaveRowsLayoutIni(const IniFileName: String; 
  const Section: String; DeleteSection: Boolean);
```

The methods store the following Rows properties TFieldRowEh.Index, TFieldRowEh.RowLines, TFieldRowEh.Visible in an INI file or Registry

Save rows settings and grid layout to INI file or Registry
```pascal
    procedure SaveGridLayout(ACustIni: TCustomIniFile; 
      const Section: String); 
    procedure SaveGridLayout(ARegIni: TRegIniFile);
    procedure SaveGridLayoutIni(const IniFileName: String; 
      const Section: String; DeleteSection: Boolean);
```
Methods stores the settings for the rows described above, as well as the Grid.LabelColWidth property.

Load rows settings from an Ini file or Registry. The properties that will be loaded are set using the RestoreParams parameter.
```pascal
procedure RestoreRowsLayout(ACustIni: TCustomIniFile; 
  const Section: String; 
  RestoreParams: TRowEhRestoreParams);
procedure RestoreRowsLayout(ARegIni: TRegIniFile; 
  RestoreParams: TRowEhRestoreParams);
procedure RestoreRowsLayoutIni(const IniFileName: String; 
  const Section: String; 
  RestoreParams: TRowEhRestoreParams);
```

Load rows settings and grid layout  from an Ini file or Registry. The properties that will be loaded are set using the RestoreParams parameter.
```pascal
procedure RestoreGridLayout(ARegIni: TCustomIniFile; 
  const Section: String; 
  RestoreParams: TDBVertGridEhRestoreParams);
procedure RestoreGridLayout(ARegIni: TRegIniFile; 
  RestoreParams: TDBVertGridEhRestoreParams);
procedure RestoreGridLayoutIni(const IniFileName: String; 
  const Section: String; 
  RestoreParams: TDBVertGridEhRestoreParams);
```
