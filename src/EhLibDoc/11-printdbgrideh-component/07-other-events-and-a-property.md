# Other events and a property of TPrintDBGridEh


`propert TPrintDBGridEh.Options`

The property is of type `TPrintDBGridEhOptions` and can contain the following values:

<dl><dd>

`pghFitGridToPageWidth`		
<dl><dd>
Reduce the print scale so that the width of the grid was reduced in width of the page.
</dd></dl>

`pghColored`				
<dl><dd>
Keep color printing. If the value is not contained in the property, the grid will be printed in black and white.
</dd></dl>

`pghRowAutoStretch`			
<dl><dd>
Stretch row height to accommodate all the text in the cell text wraps to a new line.
</dd></dl>

`pghFitingByColWidths`		
<dl><dd>
If the property is set pghFitGridToPageWidth, instead of the total scaling when printing decreases the width of columns.
</dd></dl>

`pghOptimalColWidths`		
<dl><dd>
Fit the column width to fit the contents of each cell within the same line of text.
</dd></dl>
</dd></dl>
<br>

`propert TPrintDBGridEh.PrintFontName`
<dl><dd>
If you set this property, it will be used for printing the specified font property, instead of the font specified in DBGridEh.
</dd></dl>

`propert TPrintDBGridEh.Title`
<dl><dd>
Title Grid. Title is printed on each page of the total cap for all the columns of the grid.
</dd></dl>

`propert TPrintDBGridEh.OnBeforePrint`
<dl><dd>
Event is called after printing a grid. In the event you can set a property of certain grid to print it more "correct".
</dd></dl>

`propert TPrintDBGridEh.OnAfterPrint`
<dl><dd>
Event is called after printing a grid. In the event you can return a property of the grid established in the event OnBeforePrint.
</dd></dl>

`propert TPrintDBGridEh.OnPrinterSetupDialog`
<dl><dd>

The event is called when the request for the opening of the press DIAL. If the event is not set, it uses the method `TPrintDBGridEh.PrinterSetupDialogPreview`.
</dd></dl>
