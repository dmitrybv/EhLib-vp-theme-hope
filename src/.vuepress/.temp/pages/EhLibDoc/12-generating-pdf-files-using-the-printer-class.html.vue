<template><div><h1 id="generating-pdf-files-using-the-printer-class" tabindex="-1"><a class="header-anchor" href="#generating-pdf-files-using-the-printer-class" aria-hidden="true">#</a> Generating Pdf Files Using the Printer Class</h1>
<p>The library has a global method <code v-pre>PdfPrintersEh.PdfPrinter</code> for accessing a class of <code v-pre>TPdfPrinterEh</code> type with which you can generate Pdf files similar to how printed documents are generated using the global <code v-pre>Printers.Printer</code> method.</p>
<p>Below is an example of using PdfPrinter to generate a pdf file with one page and plain text.</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token comment">//Generate graphic data as a pdf file.</span>
<span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>Button1Click<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  AFilename<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  FullFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token comment">//Generating a path to a file.</span>
  <span class="token comment">//The file will be created in the current directory.  </span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  AFilename <span class="token operator">:=</span> <span class="token string">'PdfDataFile.pdf'</span><span class="token punctuation">;</span>
  FullFileName <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
 
  <span class="token comment">//Let's start creating a new document.</span>
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
  AText <span class="token operator">:=</span> <span class="token string">'Hello World!'</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">:=</span> <span class="token number">14</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>TextRect<span class="token punctuation">(</span>ARect<span class="token punctuation">,</span> AText<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//Wrapped Text</span>
  ARect<span class="token punctuation">.</span>Offset<span class="token punctuation">(</span>Ppx <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>Rectangle<span class="token punctuation">(</span>ARect<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  AText <span class="token operator">:=</span> <span class="token string">'PdfPrinter Demo. This is word wrap text.'</span><span class="token punctuation">;</span>
  VirtualPrinter<span class="token punctuation">.</span>Canvas<span class="token punctuation">.</span>TextRect<span class="token punctuation">(</span>ARect<span class="token punctuation">,</span> AText<span class="token punctuation">,</span> <span class="token punctuation">[</span>tfWordBreak<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
</code></pre></div><p>When <code v-pre>Button1</code> is clicked, the <code v-pre>Button1Click</code> event handler is called.
In the handler:</p>
<ul>
<li>Create path to pdf file</li>
<li>The method for starting the formation of a pdf document is called.</li>
<li>The PrintData1To method is called, to which a virtual printer of the PdfPrinter type is passed.</li>
</ul>
<p>The <code v-pre>Button2</code> button has a <code v-pre>Button2Click</code> event handler in which the graphic data stream is redirected to the Print Data Preview Form.
The <code v-pre>PrintData1To</code> method directly generates graphic data.
The method code draws two squares with text. In the second square, text with word wrapping is displayed.
Below you can see the result of both events.</p>
<p><img src="@source/images/clip0063.png" alt="" loading="lazy"></p>
<p>For an example of generating <code v-pre>Pdf</code> files using the <code v-pre>TPdfPrinterEh</code> method, see the library archive in the Demo project:
<code v-pre>&lt;EhLib Archive&gt;\Demos\PdfPrinter\Project1.dpr</code></p>
<p>In the current implementation, the <code v-pre>TPdfPrinterEh</code> class has a number of limitations and features:</p>
<ul>
<li>
<p><code v-pre>Canvas.Handle</code> property is not supported in <code v-pre>TPdfPrinterEh</code>. This means that you will not be able to use methods such as <code v-pre>GetDeviceCaps</code> that need to pass the <code v-pre>Handle</code> of the graphics device.</p>
</li>
<li>
<p>To print formatted <code v-pre>Rtf</code> text, use the <code v-pre>DrawRtfText</code> and <code v-pre>MeasureRtfTextLayout</code> methods of the <code v-pre>TVirtualPrinter.Canvas</code> class.
The <code v-pre>TPdfPrinterEh</code> class does not support formatting individual sections within a paragraph.</p>
</li>
<li>
<p>For information about dots per inch, use the <code v-pre>TVirtualPrinter.Canvas.PixelsPerInchX</code> and <code v-pre>TVirtualPrinter.Canvas.PixelsPerInchY</code> properties.</p>
</li>
<li>
<p>To set the clipping area, use the <code v-pre>TVirtualPrinter.Canvas.AppendClipRect</code> and <code v-pre>RestoreClip</code> methods. Methods must work in pairs.</p>
</li>
</ul>
</div></template>


