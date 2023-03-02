import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t}from"./app.ac77cf73.js";const e="/online-help-vuepress-hope/assets/clip0063.ca2da5f6.png",p={},o=t(`<h1 id="generating-pdf-files-using-the-printer-class" tabindex="-1"><a class="header-anchor" href="#generating-pdf-files-using-the-printer-class" aria-hidden="true">#</a> Generating Pdf Files Using the Printer Class</h1><p>The library has a global method <code>PdfPrintersEh.PdfPrinter</code> for accessing a class of <code>TPdfPrinterEh</code> type with which you can generate Pdf files similar to how printed documents are generated using the global <code>Printers.Printer</code> method.</p><p>Below is an example of using PdfPrinter to generate a pdf file with one page and plain text.</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token comment">//Generate graphic data as a pdf file.</span>
<span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button1Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  AFilename<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  FullFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token comment">//Generating a path to a file.</span>
  <span class="token comment">//The file will be created in the current directory.  </span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  AFilename <span class="token operator">:=</span> <span class="token string">&#39;PdfDataFile.pdf&#39;</span><span class="token punctuation">;</span>
  FullFileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">&#39;\\&#39;</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
 
  <span class="token comment">//Let&#39;s start creating a new document.</span>
  <span class="token comment">//The generated data will be saved in a file at the address</span>
  <span class="token comment">//specified in the FullFileName variable.</span>
  PdfPrinter<span class="token punctuation">.</span>BeginDoc<span class="token punctuation">(</span>FullFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  PrintData1To<span class="token punctuation">(</span>PdfPrinter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  PdfPrinter<span class="token punctuation">.</span>EndDoc<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//Open the created file for viewing.</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FullFileName<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
 
<span class="token comment">//Generate graphic data and show result using PrinterPreview Form.</span>
<span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button2Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  PrinterPreview<span class="token punctuation">.</span>BeginDoc<span class="token punctuation">;</span>
  PrintData1To<span class="token punctuation">(</span>PrinterPreview<span class="token punctuation">)</span><span class="token punctuation">;</span>
  PrinterPreview<span class="token punctuation">.</span>EndDoc<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
 
<span class="token comment">//Generate graphics data using the TBaseVirtualPrinter class</span>
<span class="token comment">//as the graphics command generation provider.</span>
<span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>PrintData1To<span class="token punctuation">(</span>VirtualPrinter<span class="token punctuation">:</span> TBaseVirtualPrinter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>
  AText<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  Ppx<span class="token punctuation">,</span> Ppy<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token comment">//Get the number of pixels per inch to form data in 1 by 1-inch squares.</span>
  Ppx <span class="token operator">:=</span> VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>PixelsPerInchX<span class="token punctuation">;</span>
  Ppy <span class="token operator">:=</span> VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>PixelsPerInchY<span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Brush<span class="token punctuation">.</span>Style <span class="token operator">:=</span> bsClear<span class="token punctuation">;</span>
 
  ARect <span class="token operator">:=</span> Rect<span class="token punctuation">(</span>Ppx<span class="token punctuation">,</span> Ppy<span class="token punctuation">,</span> Ppx <span class="token operator">+</span> Ppx<span class="token punctuation">,</span> Ppy <span class="token operator">+</span> Ppy<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//1x1 inch Square.</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Pen<span class="token punctuation">.</span>Width <span class="token operator">:=</span> Ppx <span class="token operator">div</span> <span class="token number">50</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Rectangle<span class="token punctuation">(</span>ARect<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
  <span class="token comment">//Text</span>
  AText <span class="token operator">:=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">:=</span> <span class="token number">14</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>TextRect<span class="token punctuation">(</span>ARect<span class="token punctuation">,</span> AText<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//Wrapped Text</span>
  ARect<span class="token punctuation">.</span>Offset<span class="token punctuation">(</span>Ppx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Rectangle<span class="token punctuation">(</span>ARect<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  AText <span class="token operator">:=</span> <span class="token string">&#39;PdfPrinter Demo. This is word wrap text.&#39;</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>TextRect<span class="token punctuation">(</span>ARect<span class="token punctuation">,</span> AText<span class="token punctuation">,</span> <span class="token punctuation">[</span>tfWordBreak<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
</code></pre></div><p>When <code>Button1</code> is clicked, the <code>Button1Click</code> event handler is called. In the handler:</p><ul><li>Create path to pdf file</li><li>The method for starting the formation of a pdf document is called.</li><li>The PrintData1To method is called, to which a virtual printer of the PdfPrinter type is passed.</li></ul><p>The <code>Button2</code> button has a <code>Button2Click</code> event handler in which the graphic data stream is redirected to the Print Data Preview Form. The <code>PrintData1To</code> method directly generates graphic data. The method code draws two squares with text. In the second square, text with word wrapping is displayed. Below you can see the result of both events.</p><p><img src="`+e+'" alt="" loading="lazy"></p><p>For an example of generating <code>Pdf</code> files using the <code>TPdfPrinterEh</code> method, see the library archive in the Demo project: <code>&lt;EhLib Archive&gt;\\Demos\\PdfPrinter\\Project1.dpr</code></p><p>In the current implementation, the <code>TPdfPrinterEh</code> class has a number of limitations and features:</p><ul><li><p><code>Canvas.Handle</code> property is not supported in <code>TPdfPrinterEh</code>. This means that you will not be able to use methods such as <code>GetDeviceCaps</code> that need to pass the <code>Handle</code> of the graphics device.</p></li><li><p>To print formatted <code>Rtf</code> text, use the <code>DrawRtfText</code> and <code>MeasureRtfTextLayout</code> methods of the <code>TVirtualPrinter.Canvas</code> class. The <code>TPdfPrinterEh</code> class does not support formatting individual sections within a paragraph.</p></li><li><p>For information about dots per inch, use the <code>TVirtualPrinter.Canvas.PixelsPerInchX</code> and <code>TVirtualPrinter.Canvas.PixelsPerInchY</code> properties.</p></li><li><p>To set the clipping area, use the <code>TVirtualPrinter.Canvas.AppendClipRect</code> and <code>RestoreClip</code> methods. Methods must work in pairs.</p></li></ul>',11),c=[o];function i(l,u){return a(),s("div",null,c)}const d=n(p,[["render",i],["__file","23-generating-pdf-files-using-the-printer-class.html.vue"]]);export{d as default};
