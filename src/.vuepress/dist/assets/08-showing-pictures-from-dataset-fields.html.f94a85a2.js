import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as d,f as i}from"./app.ac77cf73.js";const t={},a=i('<h1 id="showing-pictures-from-dataset-fields-in-the-grid-cells" tabindex="-1"><a class="header-anchor" href="#showing-pictures-from-dataset-fields-in-the-grid-cells" aria-hidden="true">#</a> Showing pictures from DataSet fields in the grid cells</h1><p><code>DBGridEh</code> can display images in the data cells in the following formats: <code>BMP</code>, <code>JPeg</code>, <code>GIF</code> - From Developer Studio 2007 <code>PNG</code> - From RAD Studio 2009. To enable the display of graphics data set <code>DBGridEh.DrawGraphicData</code> to <code>True</code>. The grid will display graphical information for the fields of type <code>TGraphicField</code> and <code>TBlobField</code> who <code>BlobType = ftGraphic</code>. By default <code>DBGridEh</code> recognizes only format like <code>TBitmap</code>. For the addition of graphical modules use the property <code>DBGridEh.IncludeImageModules: TIncludeImageModulesEh</code>:</p><p><code>TIncludeImageModuleEh = (</code></p><p><code>iimJpegImageModuleEh</code> - plug-in to display the data in a format JPeg</p><p><code>iimGIFImageModuleEh</code> - plug-in to display the data in the format of GIF</p><p><code>iimPNGImageModuleEh</code> - plug-in to display the data in PNG</p><p><code>);</code></p><p>This property should only be used in Design-Time compilation via IDE. Setting this property causes the IDE to add additional modules in the uses clause of the Form.</p><p>You can also write EhLibImages (<code>EhLibImages.pas</code>) module in the <code>uses</code> clause of your project main <code>Unit</code> to add support for all available graphic Formats.</p><p>See the Demo project in the next Folder that display image data in the cells of the grid: <code>&lt;EhLib Archive&gt;\\Demos\\DBGridEh.DrawBlobImagesInCell&gt;</code></p>',10),c=[a];function l(s,r){return o(),d("div",null,c)}const n=e(t,[["render",l],["__file","08-showing-pictures-from-dataset-fields.html.vue"]]);export{n as default};
