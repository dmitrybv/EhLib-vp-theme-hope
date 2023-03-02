<template><div><h1 id="export-library-components-to-pdf-file" tabindex="-1"><a class="header-anchor" href="#export-library-components-to-pdf-file" aria-hidden="true">#</a> Export library components to Pdf file</h1>
<p>The EhLib library has classes and methods for exporting the <code v-pre>TDBGridEh</code>, <code v-pre>TDBVertGridEh</code>, <code v-pre>TPivotGridEh</code> and <code v-pre>TPlannerControlEh</code> components to a <code v-pre>PDF</code> (Portable Document Format) file.</p>
<p>To export data to pdf, the same classes are used that are used to print components.</p>
<p>For <code v-pre>TDBGridEh</code>, this is the <code v-pre>TPrintDBGridEh</code> class.
For <code v-pre>TDBVertGridEh</code>, this is the <code v-pre>TDBVertGridPrintServiceEh</code> class.
For <code v-pre>TPivotGridEh</code>, this is the <code v-pre>TPivotGridPrintServiceEh</code> class.
For <code v-pre>TPLannerEh</code>, this is the <code v-pre>TPlannerControlPrintServiceEh</code> class.</p>
<p>Below is a description of the methods for exporting components to pdf.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TPrintDBGridEh<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>AFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code v-pre>TPrintDBGridEh</code> class method is used to export data from to pdf format. The data generation algorithm is similar to the algorithm for printing the <code v-pre>TDBGridEh</code> component using the <code v-pre>TPrintDBGridEh</code> component.
In the <code v-pre>AFileName</code> parameter, you must pass the full path and name of the pdf file to be generated.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TBasePrintServiceComponentEh<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>AFileName<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The <code v-pre>TBasePrintServiceComponentEh</code> class method is used to export data from to pdf format. The data generation algorithm is similar to the algorithm for printing the <code v-pre>TDBVertGridEh</code>, <code v-pre>TPivotGridEh</code> and <code v-pre>TPLannerEh</code> component components using classes derived from <code v-pre>TBasePrintServiceComponentEh</code>.
In the <code v-pre>AFileName</code> parameter, you must pass the full path and name of the pdf file to be generated.</p>
<p>Below is an example of the code with which the components are exported to a pdf file.</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TForm1<span class="token punctuation">.</span>actExportToPdfExecute<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span>
  AFilename<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  Path<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  FullFileName1<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
  FullFileName2<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  GetDir<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//PrintDBGridEh1.PrintToPdfFile(FullFileName1);</span>
  <span class="token keyword">if</span> ActiveControl <span class="token operator">is</span> TCustomDBGridEh <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    AFilename <span class="token operator">:=</span> <span class="token string">'DBGridEhAsPdf.pdf'</span><span class="token punctuation">;</span>
    FullFileName1 <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
    PrintDBGridEh1<span class="token punctuation">.</span>DBGridEh <span class="token operator">:=</span> TDBGridEh<span class="token punctuation">(</span>ActiveControl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    PrintDBGridEh1<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ActiveControl <span class="token operator">is</span> TCustomDBVertGridEh <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    AFilename <span class="token operator">:=</span> <span class="token string">'DBVertGridEhAsPdf.pdf'</span><span class="token punctuation">;</span>
    FullFileName1 <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
    TCustomDBVertGridEh<span class="token punctuation">(</span>ActiveControl<span class="token punctuation">)</span><span class="token punctuation">.</span>PrintService<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ActiveControl <span class="token operator">is</span> TCustomPlannerViewEh <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    AFilename <span class="token operator">:=</span> <span class="token string">'PlannerViewAsPdf.pdf'</span><span class="token punctuation">;</span>
    FullFileName1 <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
    TCustomPlannerViewEh<span class="token punctuation">(</span>ActiveControl<span class="token punctuation">)</span><span class="token punctuation">.</span>PlannerControl<span class="token punctuation">.</span>PrintService<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span> <span class="token keyword">else</span> <span class="token keyword">if</span> ActiveControl <span class="token operator">is</span> TPivotGridEh <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    AFilename <span class="token operator">:=</span> <span class="token string">'PivotGridEhAsPdf.pdf'</span><span class="token punctuation">;</span>
    FullFileName1 <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename<span class="token punctuation">;</span>
    TPivotGridEh<span class="token punctuation">(</span>ActiveControl<span class="token punctuation">)</span><span class="token punctuation">.</span>PrintService<span class="token punctuation">.</span>PrintToPdfFile<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span>
  <span class="token keyword">else</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">Exit</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
 
  FullFileName2 <span class="token operator">:=</span> Path <span class="token operator">+</span> <span class="token string">'\'</span> <span class="token operator">+</span> AFilename <span class="token operator">+</span> <span class="token string">'.Txt'</span><span class="token punctuation">;</span>
  CopyFile<span class="token punctuation">(</span>PChar<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FullFileName2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...and start a viewer.</span>
  ShellExecute<span class="token punctuation">(</span>Handle<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> PChar<span class="token punctuation">(</span>FullFileName1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> SW_SHOWNORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Export to pdf is supported in all versions of Delphi under VCL and in Lazarus under Windows.</p>
<p>An example of using the functionality of uploading data to pdf can be found in the Demo project
<code v-pre>DEMOS\MainDemo\</code>.</p>
<p>There is a button <code v-pre>Export to pdf</code> in the Demo project.</p>
<p><img src="@source/images/clip0010.png" alt="Export to pdf" loading="lazy"></p>
</div></template>


