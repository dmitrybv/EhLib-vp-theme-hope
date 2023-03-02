<template><div><h1 id="macro-variables-in-sql-expressions-sqldatadrivereh-xxxcommand" tabindex="-1"><a class="header-anchor" href="#macro-variables-in-sql-expressions-sqldatadrivereh-xxxcommand" aria-hidden="true">#</a> Macro variables in SQL expressions SQLDataDriverEh.XXXCommand</h1>
<p><code v-pre>SQL</code> expression in <code v-pre>SQLDataDriverEh</code> commands (<code v-pre>ADODataDriver</code>, <code v-pre>DBXDataDriver</code>, ...) can contain Macro variables. Before executing the SQL statement the <code v-pre>Macro variables</code> are replaced by the values assigned to them and actual <code v-pre>SQL</code> statement is formed, which is transmitted for execution.</p>
<p>For example the expression <code v-pre>“select * from %table_name%”</code> contains a macro variable <code v-pre>&quot;%table_name%&quot;</code>. If this variable contains the value of &quot;Country&quot;, a real expression that will be transferred to the execution will be the next 'select * from Country'.</p>
<p>You can type in <code v-pre>SQLDataDriverEh.SelectSQL</code>, <code v-pre>UpdateSQL</code>, <code v-pre>DeleteSQL</code>, <code v-pre>InsertDQL</code>, <code v-pre>GetrecSQL</code> commands any expression that may contain a combination of SQL statements and macro variables.</p>
<p>In the collection of the elements <code v-pre>SQLDataDriverEh.MacroVars.Macros</code> it is necessary to create macro- elements and give them names according to the variables inscribed in the <code v-pre>SQL</code> command.</p>
<p>At design-time you can enter the values of macro variables, or leave them blank.
At run-time before the opening MemTableEh connected to <code v-pre>SQLDataDriverEh</code> you can set the value of the macro variable:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>ADODataDriverEh1<span class="token punctuation">.</span>SelectSQL<span class="token punctuation">.</span>Text <span class="token operator">:=</span> ‘select <span class="token operator">*</span> from %table_name%’
ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">'%table_name%'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘Country’<span class="token punctuation">;</span>
MemTableEh1<span class="token punctuation">.</span>Open<span class="token punctuation">;</span>
…
<span class="token keyword">if</span> Conditions 
  <span class="token keyword">then</span> ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">'%table_name%'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘table1’
  <span class="token keyword">else</span> ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">'%table_name%'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘table2’<span class="token punctuation">;</span>
</code></pre></div><p>Use <code v-pre>SQLDataDriverEh.FinalSelectSQL</code>, <code v-pre>FinalUpdateSQL</code>, <code v-pre>FinalInsertDQL</code>, <code v-pre>FinalGetrecSQL</code> properties to access the actual SQL expression.</p>
<p>Demo: See a Demo project of using macro variables in the folder of the library – <code v-pre>&lt;EhLib Dir\Demos\DataDriver.Macros&gt;</code></p>
</div></template>


