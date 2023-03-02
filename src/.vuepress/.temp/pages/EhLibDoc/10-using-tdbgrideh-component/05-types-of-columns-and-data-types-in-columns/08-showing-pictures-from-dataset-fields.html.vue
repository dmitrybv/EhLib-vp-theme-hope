<template><div><h1 id="showing-pictures-from-dataset-fields-in-the-grid-cells" tabindex="-1"><a class="header-anchor" href="#showing-pictures-from-dataset-fields-in-the-grid-cells" aria-hidden="true">#</a> Showing pictures from DataSet fields in the grid cells</h1>
<p><code v-pre>DBGridEh</code> can display images in the data cells in the following formats:
<code v-pre>BMP</code>, <code v-pre>JPeg</code>,
<code v-pre>GIF</code> - From Developer Studio 2007
<code v-pre>PNG</code> - From RAD Studio 2009.
To enable the display of graphics data set <code v-pre>DBGridEh.DrawGraphicData</code> to <code v-pre>True</code>. The grid will display graphical information for the fields of type <code v-pre>TGraphicField</code> and <code v-pre>TBlobField</code> who <code v-pre>BlobType = ftGraphic</code>. By default <code v-pre>DBGridEh</code> recognizes only format like <code v-pre>TBitmap</code>. For the addition of graphical modules use the property <code v-pre>DBGridEh.IncludeImageModules: TIncludeImageModulesEh</code>:</p>
<p><code v-pre>TIncludeImageModuleEh = (</code></p>
<p><code v-pre>iimJpegImageModuleEh</code> - plug-in to display the data in a format JPeg</p>
<p><code v-pre>iimGIFImageModuleEh</code> - plug-in to display the data in the format of GIF</p>
<p><code v-pre>iimPNGImageModuleEh</code> - plug-in to display the data in PNG</p>
<p><code v-pre>);</code></p>
<p>This property should only be used in Design-Time compilation via IDE. Setting this property causes the IDE to add additional modules in the uses clause of the Form.</p>
<p>You can also write EhLibImages (<code v-pre>EhLibImages.pas</code>) module in the <code v-pre>uses</code> clause of your project main <code v-pre>Unit</code> to add support for all available graphic Formats.</p>
<p>See the Demo project in the next Folder that display image data in the cells of the grid:
<code v-pre>&lt;EhLib Archive&gt;\Demos\DBGridEh.DrawBlobImagesInCell&gt;</code></p>
</div></template>


