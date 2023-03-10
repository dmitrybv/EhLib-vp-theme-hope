# Adjusting grid for sorting data


`TDBGridEh` allows showing special sortmarking bitmaps (small triangles) in the right part of title cell. 
In order to automatically mark the title by sortmarking bitmaps you have to add `dghAutoSortMarking` to `OptionsEh` property. 
Add `dghMultiSortMarking` to `OptionsEh` in order to allow sortmarking in several columns simultaneously. 
Set `Column.Title.TitleButton` to `true` value for titles which will have possibility to change sortmarkers at run time. 
Or you can set `ColumnDefValues.Title.TitleButton` to allow setting sortmarking for all columns 
where `Column.Title.TitleButton` is not changed. 
At runtime, clicking on title will change sortmarking. 
Holding `Ctrl` key allows to mark several columns simultaneously. 
After user changes sormarking grid will call `OnSortMarkingChanged` event or will pass action to special object,
if it is registered. 
Special object will use `Grid.SortLocal` property to determine how to sort data: locally or on the server. 
If you write `OnSortMarkingChanged`, you can use `TDBGrid.SortMarkedColumns` property to access the sortmarked 
columns and `TColumnEh.Title.SortMarker` property to get state of the sortmarker.