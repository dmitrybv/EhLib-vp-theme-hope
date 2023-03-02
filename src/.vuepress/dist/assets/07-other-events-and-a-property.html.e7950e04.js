import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as d,f as r}from"./app.ac77cf73.js";const o={},i=r('<h1 id="other-events-and-a-property-of-tprintdbgrideh" tabindex="-1"><a class="header-anchor" href="#other-events-and-a-property-of-tprintdbgrideh" aria-hidden="true">#</a> Other events and a property of TPrintDBGridEh</h1><p><code>propert TPrintDBGridEh.Options</code></p><p>The property is of type <code>TPrintDBGridEhOptions</code> and can contain the following values:</p><dl><dd><p><code>pghFitGridToPageWidth</code></p><dl><dd> Reduce the print scale so that the width of the grid was reduced in width of the page. </dd></dl><p><code>pghColored</code></p><dl><dd> Keep color printing. If the value is not contained in the property, the grid will be printed in black and white. </dd></dl><p><code>pghRowAutoStretch</code></p><dl><dd> Stretch row height to accommodate all the text in the cell text wraps to a new line. </dd></dl><p><code>pghFitingByColWidths</code></p><dl><dd> If the property is set pghFitGridToPageWidth, instead of the total scaling when printing decreases the width of columns. </dd></dl><p><code>pghOptimalColWidths</code></p><dl><dd> Fit the column width to fit the contents of each cell within the same line of text. </dd></dl></dd></dl><br><p><code>propert TPrintDBGridEh.PrintFontName</code></p><dl><dd> If you set this property, it will be used for printing the specified font property, instead of the font specified in DBGridEh. </dd></dl><p><code>propert TPrintDBGridEh.Title</code></p><dl><dd> Title Grid. Title is printed on each page of the total cap for all the columns of the grid. </dd></dl><p><code>propert TPrintDBGridEh.OnBeforePrint</code></p><dl><dd> Event is called after printing a grid. In the event you can set a property of certain grid to print it more &quot;correct&quot;. </dd></dl><p><code>propert TPrintDBGridEh.OnAfterPrint</code></p><dl><dd> Event is called after printing a grid. In the event you can return a property of the grid established in the event OnBeforePrint. </dd></dl><p><code>propert TPrintDBGridEh.OnPrinterSetupDialog</code></p><dl><dd><p>The event is called when the request for the opening of the press DIAL. If the event is not set, it uses the method <code>TPrintDBGridEh.PrinterSetupDialogPreview</code>.</p></dd></dl>',15),n=[i];function p(h,c){return t(),d("div",null,n)}const s=e(o,[["render",p],["__file","07-other-events-and-a-property.html.vue"]]);export{s as default};