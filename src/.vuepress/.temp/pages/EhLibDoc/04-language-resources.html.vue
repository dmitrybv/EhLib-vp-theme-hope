<template><div><h1 id="language-resources" tabindex="-1"><a class="header-anchor" href="#language-resources" aria-hidden="true">#</a> Language resources</h1>
<p><code v-pre>Delphi</code> standard recommends use resourcestring and individual versions of dfm files for strings that are language-dependent constant.</p>
<p>EhLib since version 9 uses a slightly different technology for storing language resources.</p>
<ol>
<li>Constants of resourcestring type are not used.</li>
<li>All string resources are stored in one file - <code v-pre>EhLibLangConsts.dfm</code> and <code v-pre>EhLibLangConsts.XXX.dfm</code> files for each language.</li>
<li>Language strings are stored as properties of <code v-pre>TEhLibLanguageConsts</code> class.</li>
</ol>
<p>This technology has the following advantages:</p>
<ol>
<li>Language resources can be downloaded at any time while the program is running.</li>
<li>The language can be set as an end user and selected automatically.</li>
<li>Language resources can be stored as separate files, so embed in an exe file.</li>
</ol>
<p><img src="@source/images/Language resources.png" alt="" loading="lazy"></p>
<p>All string library constants that depend on the language are stored in the properties of the class <code v-pre>TEhLibLanguageConsts</code> (source files <code v-pre>EhLibLangConsts.dfm</code> + <code v-pre>EhLibLangConsts.pas</code>)</p>
<p>To access a class object, use the global function <code v-pre>EhLibLanguageConsts: TEhLibLanguageConsts</code>.
Versions of strings in other languages are stored in similar files with the corresponding name</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>EhLibLangConsts.ENU.dfm
EhLibLangConsts.FRA.dfm
EhLibLangConsts.RUS.dfm
EhLibLangConsts.UKR.dfm
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>in folder <code v-pre>&lt;EhLib archive &gt;\LangResources\Res\</code>
When installing the library in the IDE, the files in this folder should be copied to the folder <code v-pre>&lt;EhLib installed dir&gt;\Lib\</code>
If the file for your language is not in the folder, you can create it. To do this, copy the file <code v-pre>EhLibLangConsts.ENU.dfm</code> to a new file <code v-pre>EhLibLangConsts.XXX.dfm</code> where <code v-pre>XXX</code> is the three-letter language code. Using a text editor, change the text in the <code v-pre>dfm</code> file to the desired text.
The three-letter language code can be found in the table at the following address:
<a href="https://www.microsoft.com/resources/msdn/goglobal/default.mspx" target="_blank" rel="noopener noreferrer">https://www.microsoft.com/resources/msdn/goglobal/default.mspx<ExternalLinkIcon/></a>
Inside the file, also change the class name from <code v-pre>TEhLibLanguageConsts_ENU</code> to the new name <code v-pre>TEhLibLanguageConsts_XXX</code> (where XXX is the three-letter language code).</p>
<p>While the program is running while changing the language, the algorithm finds the desired language file by three-letter code and loads into the EhLibLanguageConsts object as an external dfm resource or for embedded resources by the last three characters in the name of the resource <code v-pre>TEhLibLanguageConsts_XXX</code>.
Inside the program, the following code is used to change the language</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  LanguageResourceManagerEh<span class="token punctuation">.</span>ActiveLanguageAbbr <span class="token operator">:=</span> <span class="token string">'THREE-LETTER CODE'</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To select the language automatically, use the following code</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>LanguageResourceManagerEh<span class="token punctuation">.</span>ActiveLanguageAbbr <span class="token operator">:=</span> LanguageResourceManagerEh<span class="token punctuation">.</span>AutoselectLanguage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The language is chosen based on the variable - <code v-pre>System.SysUtils.SysLocale.DefaultLCID</code>
If the appropriate files or the built-in resource for the selected language was not found, the default language is downloaded from the built-in resource described in the <code v-pre>EhLibLangConsts.dfm</code> file. The EhLibLangConsts.dfm file links into the EXE file at compile time.</p>
<h3 id="working-with-language-resources-through-external-files" tabindex="-1"><a class="header-anchor" href="#working-with-language-resources-through-external-files" aria-hidden="true">#</a> Working with language resources through external files</h3>
<p>When loading resources from a file, the algorithm looks for a file with a name:
<code v-pre>&lt;EXE File Placment&gt;\Res\EhLibLangConsts.[XXX].dfm</code></p>
<p>Where <code v-pre>XXX</code> is a three-character language code.
You can configure the resource download folder by assigning a global variable
<code v-pre>LanguageResourcesEh.LanguageResourcesFolder: String</code></p>
<p>To use additional resources in your application, you must supply the <code v-pre>EhLibLangConsts.XXX.dfm</code> files along with the <code v-pre>EXE</code> file.</p>
<p>The files in the Res folder are stored in the Utf8 encoding.
For the work of this technology in <code v-pre>Delphi7-Delphi2005</code> for these versions of Delphi, similar files are stored in the Res.Ansi folder in the Ansi encoding.</p>
<p>In the code of the program you can download a list of available resources for downloading the language using the code</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>LanguageResourceManagerEh<span class="token punctuation">.</span>LoadListOfAvailableLanguages<span class="token punctuation">(</span><span class="token string">'EhLibLangConsts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The algorithm will scan the <code v-pre>\Res</code> folder for <code v-pre>EhLibLangConsts.[XXX].dfm</code> files and fill in the internal property of <code v-pre>EhLibLanguageConsts.LanguageList</code>.
To access the list of available languages, use the property <code v-pre>LanguageResourceManagerEh.LanguageList</code></p>
<h3 id="create-language-resources-for-the-language-constants-of-your-application" tabindex="-1"><a class="header-anchor" href="#create-language-resources-for-the-language-constants-of-your-application" aria-hidden="true">#</a> Create language resources for the language constants of your application</h3>
<p>You can also use the technology of storing language dependent constants to store the strings of your application.
For this</p>
<ol>
<li>Create a class that inherits from TComponent and write in it in the published section whose properties the values in your application depend on the language.
(For an example, see the <code v-pre>AppLangConsts.pas</code> file from the Demo application <code v-pre>DEMOS\MainDemo\</code> )</li>
</ol>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  TApplicationLanguageConsts <span class="token operator">=</span> <span class="token keyword">class</span><span class="token punctuation">(</span>TComponent<span class="token punctuation">)</span>
  <span class="token operator">..</span>
  <span class="token keyword">public</span>
    <span class="token keyword">constructor</span> Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">:</span> TComponent<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">override</span><span class="token punctuation">;</span>
  <span class="token keyword">published</span>
    <span class="token keyword">property</span> Caption<span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token keyword">read</span> FCaption <span class="token keyword">write</span> SetCaption<span class="token punctuation">;</span>
    <span class="token keyword">property</span> MenuFile<span class="token punctuation">:</span> <span class="token keyword">String</span> <span class="token keyword">read</span> FMenuFile <span class="token keyword">write</span> FMenuFile<span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the class constructor, load the values of the constants that will be used by default using next code:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">constructor</span> TApplicationLanguageConsts<span class="token punctuation">.</span>Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">:</span> TComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">inherited</span> Create<span class="token punctuation">(</span>AOwner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    InitInheritedComponent<span class="token punctuation">(</span><span class="token keyword">Self</span><span class="token punctuation">,</span> TCustomControl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Create a resource dfm file (AppLangConsts.dfm) to store the property values of the class</li>
</ol>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token keyword">object</span> TApplicationLanguageConsts
    Caption <span class="token operator">=</span> <span class="token string">'EhLib Main Complex Demo'</span>
    MenuFile <span class="token operator">=</span> <span class="token string">'File'</span>
  <span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>write  the dfm file as the resource of your application</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  <span class="token directive marco property">{$R AppLangConsts.dfm}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li></li>
</ol>
<p>Create files</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  AppLangConsts.ENU.dfm
  AppLangConsts.BGR.dfm
  AppLangConsts.CHS.dfm
  AppLangConsts.CSY.dfm
  AppLangConsts.DEU.dfm
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By analogy with the files EhLibLangConsts.XXX.dfm</p>
<ol start="4">
<li>Once in the program code, create a variable for storing resources</li>
</ol>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  FApplicationLanguageConsts <span class="token operator">:=</span> TApplicationLanguageConsts<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>Once in the program code, register the resource in LanguageResourceManager</li>
</ol>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>  LanguageResourceManagerEh<span class="token punctuation">.</span>AddLocalizableObject<span class="token punctuation">(</span>FApplicationLanguageConsts<span class="token punctuation">,</span>
       FApplicationLanguageConsts<span class="token punctuation">.</span>ClassName<span class="token punctuation">,</span> <span class="token string">'AppLangConsts'</span><span class="token punctuation">,</span> <span class="token string">'ENU'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>When changing the language, the <code v-pre>WM_SETTINGCHANGE</code> event is sent to all forms and controls.</p>
<h3 id="default-language-resource" tabindex="-1"><a class="header-anchor" href="#default-language-resource" aria-hidden="true">#</a> Default language resource</h3>
<p>There is a concept - the built-in library language by default.
If you do not perform any actions to change the language in the application, then the default language resource in the library is used.
To change the default built-in language for all programs used:</p>
<ol>
<li>Copy the <code v-pre>LangResources\Res\EhLibLangConsts.XXX.dfm</code> file to the installed library folder in the <code v-pre>Lib\EhLibLangConsts.dfm</code> file.</li>
<li>Delete the first line of the file with the suffix <code v-pre>_XXX</code> in the name of the class so it will look like the following: <code v-pre>object TEhLibLanguageConsts</code></li>
<li>Recompile the library packages.
When the library is installed with <code v-pre>EhLibInstaller.exe</code>, the program performs this action automatically.</li>
</ol>
<h3 id="demo-projects-using-dynamic-language-resources-loading" tabindex="-1"><a class="header-anchor" href="#demo-projects-using-dynamic-language-resources-loading" aria-hidden="true">#</a> Demo projects using dynamic language resources loading</h3>
<p>For an example of using built-in and external resources, see the Demo project</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEMOS\LanguageResEmbeddedExternal\Project1.dpr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the <code v-pre>Unit1.pas</code> file, you can comment out or uncomment the lines</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token directive marco property">{$DEFINE EMBEDDED_LANGUAGE_RESOURCES}</span> 
<span class="token directive marco property">{$DEFINE EMBEDDED_LANGUAGE_RESOURCES_ALL}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To change the mode of using resources and understand the difference in working with built-in and external resources.
For detailed information on how to use the specified DEFINE definitions to change the resource usage mode, see the file</p>
<p><code v-pre>Demos\LanguageResEmbeddedExternal\Info.Txt</code></p>
<p>Another example of the use of dynamic loading of language resources can be seen in the Demo project</p>
<p><code v-pre>DEMOS\MainDemo\Project1.dpr</code></p>
<p>The main methods used in the project for working with language resources are as follows:</p>
<p><code v-pre>procedure AppLangConsts.InitUnit;</code></p>
<dd>Registers the class TApplicationLanguageConsts in which the application's string resources will be stored.</dd>
<br>
<p><code v-pre>procedure TForm1.InitLanguageRes;</code></p>
  <dd>Loads the list of available languages.<br/>
Activates the language from the Ini file if it was selected the last time the program was started.</dd>
<br>
<p><code v-pre>procedure TForm1.BuildLanguageMenu;</code></p>
<dd>Forms a menu of available languages based on the LanguageResourceManagerEh.LanguageList object</dd>
<br>
<p><code v-pre>procedure TForm1.MenuItemSelectLanguage(Sender: TObject);</code></p>
<dd>Loads files of a new language when the user selects another language in the menu.</dd>
<br>
<p><code v-pre>procedure TForm1.ResourceLanguageChanged;</code></p>
<dd>Assigns properties and form variables when the language has been changed.</dd>
<br>
</div></template>


