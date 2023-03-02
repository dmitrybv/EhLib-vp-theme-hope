<template><div><h1 id="uisng-connection-provider" tabindex="-1"><a class="header-anchor" href="#uisng-connection-provider" aria-hidden="true">#</a> Uisng Connection Provider</h1>
<p><code v-pre>TMemTableEh</code> - <code v-pre>TXXXDataDriverEh</code> - <code v-pre>TXXXConnectionProviderEh</code></p>
<p>New components <code v-pre>TXXXConnectionProviderEh</code> provide a single point of connection to the database. <code v-pre>TADOConnectionProviderEh</code> for <code v-pre>ADO</code>, <code v-pre>TDBXConnectionProviderEh</code> for DBExpress etc.</p>
<p>for each method of data access component of your ConnectionProvider.</p>
<p>ConnectionProvider he does not join, but has built-in component <code v-pre>InlineConnection</code> (for ADO is TADOConnection, for DBExpress TSQLConnection, etc.) and additional properties, a reference to the standard data access component of the same type (for example if you want to lay TADOConnection separately on form).</p>
<p>In component <code v-pre>TXXXConnectionProviderEh</code> you also specify the type of server data (MSAccess, SQLServer, Oracle, InterBase, etc.). Some <code v-pre>ConnectionProvider</code> automatically determine the type of server (for example, TIBXConnectionProviderEh this will always be the server 'InterBase'). The type of server components defines additional parameters for the database server. For example, on the type of server component <code v-pre>TXXXDataDriverEh</code> defines the operating mode with auto increment fields. In <code v-pre>TXXXConnectionProviderEh</code> can specify different connection objects at the <code v-pre>Design-Time</code> and <code v-pre>Run-Time</code>, thereby dividing the ways you can connect to the database during development and in the period of the program. The component also allows you to specify access <code v-pre>TADOConnectionProviderEh</code> path to <code v-pre>MSAccess</code> database in <code v-pre>Design-Time</code> line relative file location.</p>
<p>A relative path starts from the location of the form file, which has a component <code v-pre>TADOConnectionProviderEh</code>.</p>
<p>For example:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ADOConnectionProviderEh1.InlineConnection.ConnectionString = 
'Provider = Microsoft.Jet.OLEDB.4.0;
Data Source =% PROJECT_PATH% \ ..\ Data \ DBTest.mdb; 
Persist Security Info = False '
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you open the form in Design-Time component replaces the macro <code v-pre>% PROJECT_PATH%</code> to the path where the dfm form file is. This allows you to move the project to different computer and at different location without changing the ways of access to the database file.</p>
<p>Demo: See Demo project using cords <code v-pre>TMemTableEh-TADODataDriverEh-TADOConnectionProviderEh</code> in your library - <code v-pre>&lt;EhLib Dir\Demos\DataDriver.ADO.SimpleDemo/&gt;</code></p>
<p>Demo: See Demo project using cords <code v-pre>TMemTableEh-TBDEDataDriverEh-TBDEConnectionProviderEh</code> in your library - <code v-pre>&lt;EhLib Dir\Demos\DataDriver.BDE.SimpleDemo&gt;</code></p>
<p>Demo: See Demo project using cords <code v-pre>TMemTableEh-TDBXDataDriverEh-TDBXConnectionProviderEh</code> in your library - <code v-pre>&lt;EhLib Dir\Demos\DataDriver.DBX.SimpleDemo&gt;</code></p>
<p>Demo: See Demo project using cords <code v-pre>TMemTableEh-TIBXDataDriverEh-TIBXConnectionProviderEh</code> in your library - <code v-pre>&lt;EhLib Dir\Demos\DataDriver.IBX.SimpleDemo&gt;</code></p>
</div></template>


