# Customizing Indicator column


The Indicator Column is usually shown at the very left part of the Grid and is colored in red color (The color varieties depending of current color scheme in the Windows). The Indicator Column can display such information as: Indicator of the current record (Is shown as triangular), State of editing, the number of the current record and checkbox of selected record. Use properties of  TDBGridEh.IndicatorOptions property to customize the Indicator Column.

![](../../images/clip0030.png)

```
TDBGridEhIndicatorOptions = set of TDBGridEhIndicatorOption;
TDBGridEhIndicatorOption = (gioShowRowIndicatorEh, gioShowRecNoEh, 
  gioShowRowselCheckboxesEh);
```
`gioShowRowIndicatorEh`
<sh>Display indicator of current record in the indicator column.</sh>

`gioShowRecNoEh`
<sh>Display the number of the current record in the indicator column. This property works only for DataSets that support IsSequenced mode (See Help about TDataSet.IsSequenced).</sh>

`gioShowRowselCheckboxesEh`
<sh>Display checkbox of selected record. At runtime, user can select records by clicking on check-boxes. Bookmarks of selected records are stored in the TDBGridEh.SelectedRows or TDBGridEh.Selection.Rows collection.</sh>
<br>

Use the next sub-properties of `TDBGridEh.IndicatorParams` property to customize the display of the indicator column:

`Color: TColor`
<sh>Specifies the background color for the indicator color.</sh>

`HorzLineColor: TColor`
<sh>Color of the horizontal lines in the data area.</sh>

`HorzLines: Boolean`
<sh>Presence of horizontal lines in the data area.</sh>

`VertLineColor: TColor`
<sh>Color vertical lines in the data area.</sh>

`VertLines: Boolean`
<sh>Presence of vertical lines in the data area.</sh>

`FillStyle: TGridCellFillStyleEh`
<sh>Specifies the style of filling the indicator cells.</sh>

`RecNoShowStep: Integer`
<sh>

If set to `gioShowRecNoEh` IndicatorOptions (Also the same as in `dghShowRecNo` OptionsEh), then this property specifies step with which to show record numbers in the column display. For records that fall between steps, the record number is displayed instead of a point. This eliminates the effect of "flickering" numbers, which can occur when displaying each record number.
</sh>
