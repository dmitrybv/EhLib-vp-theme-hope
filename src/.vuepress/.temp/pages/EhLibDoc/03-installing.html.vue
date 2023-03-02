<template><div><h1 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h1>
<p>Below it will be described how to install EhLib under Delphi XE5.</p>
<h2 id="unpack-ehlib-archive" tabindex="-1"><a class="header-anchor" href="#unpack-ehlib-archive" aria-hidden="true">#</a> Unpack EhLib archive.</h2>
<p>After unpacking you will have next list of directories:
<br/>
Directories of the library archive:</p>
<h5 id="installer" tabindex="-1"><a class="header-anchor" href="#installer" aria-hidden="true">#</a> <code v-pre>Installer</code></h5>
  <dd>Constains EhLibInstaller.exe</dd>
  <br/>
<h6 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> <code v-pre>Common</code></h6>
  <dd>Contain source files which are common for all versions of Delphi and C++ Builder.</dd>
  <br/>
<h6 id="radstudio2009" tabindex="-1"><a class="header-anchor" href="#radstudio2009" aria-hidden="true">#</a> <code v-pre>RADStudio2009</code></h6>
  <dd>Contain source files which are specific for RAD Studio 2009.</dd>
  <br/>
<h6 id="radstudioxxxx" tabindex="-1"><a class="header-anchor" href="#radstudioxxxx" aria-hidden="true">#</a> <code v-pre>RADStudioXXXX</code></h6>
  <dd>Contain source files which are specific for RAD Studio XXXX.</dd>
<h6 id="demos" tabindex="-1"><a class="header-anchor" href="#demos" aria-hidden="true">#</a> <code v-pre>Demos</code></h6>
  <dd>Demonstration projects</dd>
<h6 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> <code v-pre>Bin</code></h6>
  <dd>Contains the compiled executables major demonstration projects. (Contains files only in the editorial - EhLib Evaluation)</dd>
<h6 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> <code v-pre>Data</code></h6>
  <dd>Contains the database files for the demonstration projects.</dd>
<h6 id="langresources" tabindex="-1"><a class="header-anchor" href="#langresources" aria-hidden="true">#</a> <code v-pre>LangResources</code></h6>
  <dd>Contain resource files for various languages.</dd>
<h6 id="datadrivers" tabindex="-1"><a class="header-anchor" href="#datadrivers" aria-hidden="true">#</a> <code v-pre>DataDrivers</code></h6>
  <dd>Contains additional components that inherit from TDataDriverEh generators to support data access third party.</dd>
<h6 id="dataservice" tabindex="-1"><a class="header-anchor" href="#dataservice" aria-hidden="true">#</a> <code v-pre>DataService</code></h6>
  <dd>Contain files that contain objects that allows to sort data in various types of datasets.</dd>
<h6 id="orders" tabindex="-1"><a class="header-anchor" href="#orders" aria-hidden="true">#</a> <code v-pre>Orders</code></h6>
  <dd>Contain text files in which described how to register  various versions of EhLib.</dd>
<h6 id="hlp" tabindex="-1"><a class="header-anchor" href="#hlp" aria-hidden="true">#</a> <code v-pre>HLP</code></h6>
  <dd>Contain help Files and Documentation.</dd>
<dl>
</dl>
<h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages.</h2>
<h3 id="automatic-installing" tabindex="-1"><a class="header-anchor" href="#automatic-installing" aria-hidden="true">#</a> Automatic installing:</h3>
<p>Run <code v-pre>Installer\EhLibInstaller.exe</code> program from EhLib archive to install library in <code v-pre>Delphi/C++ Builder IDE</code> automatically. In time of installation the program creates folder, copies files, compile required packages and registers packages in the <code v-pre>IDE</code>.</p>
<h3 id="manual-installing" tabindex="-1"><a class="header-anchor" href="#manual-installing" aria-hidden="true">#</a> Manual installing:</h3>
<p>Here is described how to install the library in RAD Studio XE5. Installation in other versions of Delphi is performed by analogy.
Create, if necessary, a new folder &quot;EhLib&quot; folder with a Delphi (for example, <code v-pre>C:\ RADStudio\12.0\Components\EhLib</code>).
If you EhLib version with source code then copy to this folder files from “Common”, “RADStudioXE5” and &quot;LangResources\Res&quot; of archive EhLib.
If you have a version of EhLib without source or evaluation-version, then copy the files to this folder from the folder <code v-pre>&lt;EhLib Archive&gt;\RADStudioXE5\Win32\Release</code>. The library without source code in the folder <code v-pre>&lt;EhLib Archive&gt;\Common Files</code> with the extension are Int. These files contain the original interface of the pas file libraries. These files are conveniently used as documentation.
By default, EhLib contains resource files for the English language. If you need a different language, you can replace the original resource files (which are already in the <code v-pre>C:\RADStudio\12.0\Components\EhLib</code>) files that are in the appropriate subfolder LangResources and change them if necessary.
Uninstall previous or evaluation version of EhLib Delphi IDE.
Remove or move to another folder, the following files to prevent this crossing and the new version EhLib. Delete all files that start with <code v-pre>EhLib ___. Bpl</code>, <code v-pre>DclEhLib ____.Bpl</code>, <code v-pre>EhLib ___.Bpi</code>, <code v-pre>DclEhLib ____. Pbi</code> folder
<code v-pre>C: \Users\Public\Documents\RAD Studio\12.0\Bpl\</code>,
<code v-pre>C:\Users\Public\Documents\RAD Studio\12.0\Dcp\</code> and
<code v-pre>C:\Users\Public\Documents\RAD Studio\12.0\Dcp\</code>.</p>
<p>Start Delphi and open (<code v-pre>File\Open ...</code>) project group <code v-pre>EhLibProjGroup190.groupproj</code>.
Compile all group packages (<code v-pre>Project \ Build All Projects</code>).</p>
<p>Install all the packages in the IDE, which begin on <code v-pre>Dcl______</code>. To do this, use the mouse to select the package of <code v-pre>Install</code>.</p>
<p>Components EhLib appear in the pages of <code v-pre>EhLib Controls</code> and <code v-pre>EhLib Components</code> component palette.</p>
</div></template>


