# Saving \ Restore position of the current row in the grid after the mass data changes in DataSet


When data changes in the `DataSet` using the methods `DataSet.DisableControls` ... `DataSet.EnableControls` current position in the grid may shift, causing discomfort to the user. To avoid shifting position use methods

```pascal:no-line-numbers
procedure TCustomDBGridEh.SaveVertPos(KeyFieldNames: String);

procedure TCustomDBGridEh.RestoreVertPos(KeyFieldNames: String);
```

to save the position of the grid before updating and restoring the position of the grid after the update. The `KeyFieldNames` parameter must contain key field name (or a list of fields separated by semicolons). The value of key fields will be used to restore the position when the `DataSet` reopen during processing.
