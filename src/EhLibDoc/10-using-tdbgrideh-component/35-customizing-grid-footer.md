# Customizing grid footer


`TDBGridEh` can display special row (footer) or rows at bottom part. 

Use `FooterRowCount` property to specify the number of footer rows in the grid. Use Footer or `Footers` property of `TColumnEh` object to specify information which needs to show in footer cells. The `Footers` property is useful when you have more than one footer rows. `Footers` are a collection of `TColumnFooterEh` objects. Information from i-th element of collection will be shown in i-th row of footer. In footer cell, it is possible to show: Sum value for the specific field, records count, the value of a specific field or static text. Use `Footer.ValueType` or `Footers[i].ValueType` property to specify which type of value will be shown in the footer cell. If `ValueType = fvtStaticText`, then you also need to set `Value` property to specify text which will be shown. If `ValueType = fvtFieldValue`, then you need to set property `FieldName` to specify the field, value of which will be shown. To force grid to calculate total values you need to activate `SumList` (Set `DBGridEh.SumList.Active` to `True` value). 
Set `TColumnFooterEh.ValueType` to `fvtSum` to show sum value of the column field in the footer cell, you can also specify `Column.Footer.FieldName` to calculate total value of the other field. Set `ValueType` to `fvtCount` to force grid to display count of records in the footer cell.

Use the sub-properties of `TDBGridEh.FooterParams` property to Customize the footer of the grid:

`Color: TColor`
<dd>Specifies the background color for the footer color</dd>
<br/>

`FillStyle: TGridCellFillStyleEh`
<dd>Specifies the style of filling the footer cells</dd>
<br/>

`Font: TFont`

<dd>Controls the font in which the title cells displays its data.</dd>

`ParentFont: Boolean`

<dd>Determines where a control looks for its font information.</dd>

`RowHeight: Integer`

<dd>Specifies the height of footer row in text lines</dd>

`RowLines: Integer`

<dd>
  Specifies the height of footer row in text lines
  Full row height = height in pixels of RowLines + RowHeight.
</dd>

`HorzLineColor: TColor`

<dd>Color of the horizontal lines in the footer area.</dd>

`HorzLines: Boolean`

<dd>Presence of horizontal lines in the footer area.</dd>

`VertLineColor: TColor`

<dd>Color vertical lines in the footer area.</dd>

`VertLines: Boolean`

<dd>Presence of vertical lines in the footer area.</dd>

<br>
The SumList property includes the following subproperties:

`Active: Boolean`
<dd>Set this property to activate the object SumList. SumList used to calculate aggregate values in the footer of the grid.</dd>

`ExternalRecalc: Boolean`
<dd>The property specifies that the summation is an external method implemented in the DBGridEh.OnSumListRecalcAll event handler.</dd>

`VirtualRecords: Boolean`

<dd>Set this property to True to correctly calculate the positions of the vertical scrollbars for datasets that do not support or incorrectly returns the number of records through the property `DataSet.RecNo`.</dd>

<br/>
DBGridEh events, related to the calculation of aggregate values in SumList'e:

`OnSumListRecalcAll`

<dd>

The event is called when `DBGridEh.SumList.ExternalRecalc = True`. In the event handler is necessary to calculate the aggregate amount for the items in the collection and fill `DBGridEh.SumList.SumCollection` value `DBGridEh.SumList.SumCollection[i].SumValue`.
</dd>

`OnSumListAfterRecalcAll`

<dd>The event is called after counting all aggregated values through SumList.</dd>
<br>

`TColumnEh.Footer` and `TSolumnEh.Footers[i]` elements have `TColumnFooterEh` type and contain the following properties:

`Alignment: TAlignment`

<dd>Alignment of a summed value in the cell footer.</dd>
<br/>

`Color: TColor`

<dd>Color of a cell footer.</dd>
<br/>

`DisplayFormat: String`

<dd>The format for displaying numbers</dd>
<br/>

`EndEllipsis: Boolean`

<dd>Display ellipsis if text does not fit in a cell grid</dd>
<br/>

`FieldName: String`

<dd>Name of the field to which it applies the aggregate function of certain properties ValueType</dd>
<br/>

`Font: TFont`

<dd>Font of a cell footer</dd>
<br/>

`ToolTips: Boolean`

<dd>Whether to display the tooltip window with a full text of the cell when user move the mouse on 
footer cell if the text does not fit into the cell.</dd>
<br/>

`Value: String`

<dd>Static text that is displayed in the cell when a Footer.ValueType = fvtStaticText</dd>
<br/>

`ValueType: TFooterValueType`

<dd>Type of output value, or summing function. The property may comprise the following values:

`fvtNon`, `fvtSum`, `fvtAvg`, `fvtCount`, `fvtFieldValue`, `fvtStaticText` , `fvtMin`, `fvtMax`
</dd>
<br/>

`WordWrap: Boolean`

<dd>Wrap text, if it does not fit on one line in a footer cell. </dd>
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
