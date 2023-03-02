# Showing pictures from DataSet fields in the grid cells

`DBGridEh` can display images in the data cells in the following formats:
`BMP`, `JPeg`, 
`GIF` - From Developer Studio 2007 
`PNG` - From RAD Studio 2009.
To enable the display of graphics data set `DBGridEh.DrawGraphicData` to `True`. The grid will display graphical information for the fields of type `TGraphicField` and `TBlobField` who `BlobType = ftGraphic`. By default `DBGridEh` recognizes only format like `TBitmap`. For the addition of graphical modules use the property `DBGridEh.IncludeImageModules: TIncludeImageModulesEh`:

`TIncludeImageModuleEh = (`

`iimJpegImageModuleEh` - plug-in to display the data in a format JPeg

`iimGIFImageModuleEh` - plug-in to display the data in the format of GIF

`iimPNGImageModuleEh` - plug-in to display the data in PNG

`);`

This property should only be used in Design-Time compilation via IDE. Setting this property causes the IDE to add additional modules in the uses clause of the Form. 

You can also write EhLibImages (`EhLibImages.pas`) module in the `uses` clause of your project main `Unit` to add support for all available graphic Formats.

See the Demo project in the next Folder that display image data in the cells of the grid: 
`<EhLib Archive>\Demos\DBGridEh.DrawBlobImagesInCell>`
