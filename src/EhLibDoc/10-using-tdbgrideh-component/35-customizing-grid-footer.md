# Customizing grid footer


`TDBGridEh` can display special row (footer) or rows at bottom part. 

Use `FooterRowCount` property to specify the number of footer rows in the grid. Use Footer or `Footers` property of `TColumnEh` object to specify information which needs to show in footer cells. The `Footers` property is useful when you have more than one footer rows. `Footers` are a collection of `TColumnFooterEh` objects. Information from i-th element of collection will be shown in i-th row of footer. In footer cell, it is possible to show: Sum value for the specific field, records count, the value of a specific field or static text. Use `Footer.ValueType` or `Footers[i].ValueType` property to specify which type of value will be shown in the footer cell. If `ValueType = fvtStaticText`, then you also need to set `Value` property to specify text which will be shown. If `ValueType = fvtFieldValue`, then you need to set property `FieldName` to specify the field, value of which will be shown. To force grid to calculate total values you need to activate `SumList` (Set `DBGridEh.SumList.Active` to `True` value). 
Set `TColumnFooterEh.ValueType` to `fvtSum` to show sum value of the column field in the footer cell, you can also specify `Column.Footer.FieldName` to calculate total value of the other field. Set `ValueType` to `fvtCount` to force grid to display count of records in the footer cell.

Use the sub-properties of `TDBGridEh.FooterParams` property to Customize the footer of the grid:

`Color: TColor`
<sh>Specifies the background color for the footer color</sh>
<br/>

`FillStyle: TGridCellFillStyleEh`
<sh>Specifies the style of filling the footer cells</sh>
<br/>

`Font: TFont`

<sh>Controls the font in which the title cells displays its data.</sh>

`ParentFont: Boolean`

<sh>Determines where a control looks for its font information.</sh>

`RowHeight: Integer`

<sh>Specifies the height of footer row in text lines</sh>

`RowLines: Integer`

<sh>
  Specifies the height of footer row in text lines
  Full row height = height in pixels of RowLines + RowHeight.
</sh>

`HorzLineColor: TColor`

<sh>Color of the horizontal lines in the footer area.</sh>

`HorzLines: Boolean`

<sh>Presence of horizontal lines in the footer area.</sh>

`VertLineColor: TColor`

<sh>Color vertical lines in the footer area.</sh>

`VertLines: Boolean`

<sh>Presence of vertical lines in the footer area.</sh>

<br>
The SumList property includes the following subproperties:

`Active: Boolean`
<sh>Set this property to activate the object SumList. SumList used to calculate aggregate values in the footer of the grid.</sh>

`ExternalRecalc: Boolean`
<sh>The property specifies that the summation is an external method implemented in the DBGridEh.OnSumListRecalcAll event handler.</sh>

`VirtualRecords: Boolean`

<sh>Set this property to True to correctly calculate the positions of the vertical scrollbars for datasets that do not support or incorrectly returns the number of records through the property `DataSet.RecNo`.</sh>

<br/>
DBGridEh events, related to the calculation of aggregate values in SumList'e:

`OnSumListRecalcAll`

<sh>

The event is called when `DBGridEh.SumList.ExternalRecalc = True`. In the event handler is necessary to calculate the aggregate amount for the items in the collection and fill `DBGridEh.SumList.SumCollection` value `DBGridEh.SumList.SumCollection[i].SumValue`.
</sh>

`OnSumListAfterRecalcAll`

<sh>The event is called after counting all aggregated values through SumList.</sh>
<br>

`TColumnEh.Footer` and `TSolumnEh.Footers[i]` elements have `TColumnFooterEh` type and contain the following properties:

`Alignment: TAlignment`

<sh>Alignment of a summed value in the cell footer.</sh>
<br/>

`Color: TColor`

<sh>Color of a cell footer.</sh>
<br/>

`DisplayFormat: String`

<sh>The format for displaying numbers</sh>
<br/>

`EndEllipsis: Boolean`

<sh>Display ellipsis if text does not fit in a cell grid</sh>
<br/>

`FieldName: String`

<sh>Name of the field to which it applies the aggregate function of certain properties ValueType</sh>
<br/>

`Font: TFont`

<sh>Font of a cell footer</sh>
<br/>

`ToolTips: Boolean`

<sh>Whether to display the tooltip window with a full text of the cell when user move the mouse on 
footer cell if the text does not fit into the cell.</sh>
<br/>

`Value: String`

<sh>Static text that is displayed in the cell when a Footer.ValueType = fvtStaticText</sh>
<br/>

`ValueType: TFooterValueType`

<sh>Type of output value, or summing function. The property may comprise the following values:

`fvtNon`, `fvtSum`, `fvtAvg`, `fvtCount`, `fvtFieldValue`, `fvtStaticText` , `fvtMin`, `fvtMax`
</sh>
<br/>

`WordWrap: Boolean`

<sh>Wrap text, if it does not fit on one line in a footer cell. </sh>
<br/>

Use `DBGridEh.OnGetFooterParams` event in order to control the parameters of the cell footer draw operation.

```pascal
procedure TForm2.DBGridEh2GetFooterParams(Sender: TObject; DataCol,
  Row: Integer; Column: TColumnEh; AFont: TFont; var Background: TColor;
  var Alignment: TAlignment; State: TGridDrawState; var Text: string);
begin

end;
```

In the event you can change property values `AFont`, `Background`, `Alignment`, `Text` to change the text and text fortmat footer cell before rendering.
Use the following methods and properties when using the footer:

```pascal
function TDBGridEh.GetFooterValue(Row: Integer; Column: TColumnEh): String; 
```

The method returns a string value in the footer for a column definition. Parameter Row sets the row number footer (FooterRowCount be more than 1). Column specifies the column for which it is necessary to obtain the value of the footer.
