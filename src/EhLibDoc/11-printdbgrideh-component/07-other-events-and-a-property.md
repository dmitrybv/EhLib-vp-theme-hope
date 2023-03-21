# Other events and a property of TPrintDBGridEh


`propert TPrintDBGridEh.Options`

The property is of type `TPrintDBGridEhOptions` and can contain the following values:

<dl><sh>

`pghFitGridToPageWidth`		
<dl><sh>
Reduce the print scale so that the width of the grid was reduced in width of the page.
</sh></dl>

`pghColored`				
<dl><sh>
Keep color printing. If the value is not contained in the property, the grid will be printed in black and white.
</sh></dl>

`pghRowAutoStretch`			
<dl><sh>
Stretch row height to accommodate all the text in the cell text wraps to a new line.
</sh></dl>

`pghFitingByColWidths`		
<dl><sh>
If the property is set pghFitGridToPageWidth, instead of the total scaling when printing decreases the width of columns.
</sh></dl>

`pghOptimalColWidths`		
<dl><sh>
Fit the column width to fit the contents of each cell within the same line of text.
</sh></dl>
</sh></dl>
<br>

`propert TPrintDBGridEh.PrintFontName`
<dl><sh>
If you set this property, it will be used for printing the specified font property, instead of the font specified in DBGridEh.
</sh></dl>

`propert TPrintDBGridEh.Title`
<dl><sh>
Title Grid. Title is printed on each page of the total cap for all the columns of the grid.
</sh></dl>

`propert TPrintDBGridEh.OnBeforePrint`
<dl><sh>
Event is called after printing a grid. In the event you can set a property of certain grid to print it more "correct".
</sh></dl>

`propert TPrintDBGridEh.OnAfterPrint`
<dl><sh>
Event is called after printing a grid. In the event you can return a property of the grid established in the event OnBeforePrint.
</sh></dl>

`propert TPrintDBGridEh.OnPrinterSetupDialog`
<dl><sh>

The event is called when the request for the opening of the press DIAL. If the event is not set, it uses the method `TPrintDBGridEh.PrinterSetupDialogPreview`.
</sh></dl>
