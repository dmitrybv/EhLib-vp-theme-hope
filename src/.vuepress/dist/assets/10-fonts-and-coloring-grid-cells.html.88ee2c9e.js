import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,f as o}from"./app.ac77cf73.js";const n={},r=o('<h1 id="set-fonts-and-coloring-grid-cells-using-events" tabindex="-1"><a class="header-anchor" href="#set-fonts-and-coloring-grid-cells-using-events" aria-hidden="true">#</a> Set fonts and coloring grid cells using events</h1><p>To control the rendering content of cells in the grid data partition, there are two types of events.</p><p>Type 1 event to replace the rendering parameters. It&#39;s events like <code>TDBVertGridEh.OnGetCellParams</code> and <code>TFieldRowEh.OnGetCellParams</code>. In these events, it is necessary to replace the parameters such as font, font, text alignment, the number of pictures <code>ImageList</code>, etc., but drawing itself carries the internal code of the grid.</p><p>Type 2 events in which event handler executes rendering the cell contents.</p><p>Here is a list of events that you can use to customize the font attributes and color of the cell before the data is printed. At the time of calling all of the following events DataSet will already be on the record, the contents of which it is necessary to render, so you can access the field values using the methods like TDataSet.FieldByName(..).Value. Do not change the properties of the grid or columns inside those events. This may cause a program loops.</p><p><code>TDBVertGridEh.OnGetCellParams</code></p><dd>Use this event to replace the font settings and the background color of the cell before rendering. Event parameters are similar to the events for TDBGridEh.OnGetCellParams.</dd><p><code>TFieldRowEh.OnGetCellParams</code></p><dd>Use this event to replace the cell parameters a particular column before rendering. Parameters are similar to the events soybtiya TColumnEh.OnGetCellParams.</dd><p><code>TDBVertGridEh.OnAdvDrawDataCell</code> and <code>TFieldRowEh.OnAdvDrawDataCell</code></p><dd>Use this event to draw the data in the data cells of the grid. The event code set Processed argument to True to specify that you have handled the process of drawing. If Processed leave False, the grid method will render the contents of a cell using default method. You can, if necessary, change the ARect and Params and cause Grid.DefaultDrawRowDataCell or leave Processed able to False and do not induce Grid.DefaultDrawRowDataCell. To change the data output to the screen, use the event parameters Params and Grid.Canvas if you draw a cell data function on their own using GDI.</dd>',11),s=[r];function d(l,i){return t(),a("div",null,s)}const f=e(n,[["render",d],["__file","10-fonts-and-coloring-grid-cells.html.vue"]]);export{f as default};