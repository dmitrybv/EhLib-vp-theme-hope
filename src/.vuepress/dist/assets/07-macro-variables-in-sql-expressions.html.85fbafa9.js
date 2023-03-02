import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,f as s}from"./app.ac77cf73.js";const t={},o=s(`<h1 id="macro-variables-in-sql-expressions-sqldatadrivereh-xxxcommand" tabindex="-1"><a class="header-anchor" href="#macro-variables-in-sql-expressions-sqldatadrivereh-xxxcommand" aria-hidden="true">#</a> Macro variables in SQL expressions SQLDataDriverEh.XXXCommand</h1><p><code>SQL</code> expression in <code>SQLDataDriverEh</code> commands (<code>ADODataDriver</code>, <code>DBXDataDriver</code>, ...) can contain Macro variables. Before executing the SQL statement the <code>Macro variables</code> are replaced by the values assigned to them and actual <code>SQL</code> statement is formed, which is transmitted for execution.</p><p>For example the expression <code>“select * from %table_name%”</code> contains a macro variable <code>&quot;%table_name%&quot;</code>. If this variable contains the value of &quot;Country&quot;, a real expression that will be transferred to the execution will be the next &#39;select * from Country&#39;.</p><p>You can type in <code>SQLDataDriverEh.SelectSQL</code>, <code>UpdateSQL</code>, <code>DeleteSQL</code>, <code>InsertDQL</code>, <code>GetrecSQL</code> commands any expression that may contain a combination of SQL statements and macro variables.</p><p>In the collection of the elements <code>SQLDataDriverEh.MacroVars.Macros</code> it is necessary to create macro- elements and give them names according to the variables inscribed in the <code>SQL</code> command.</p><p>At design-time you can enter the values of macro variables, or leave them blank. At run-time before the opening MemTableEh connected to <code>SQLDataDriverEh</code> you can set the value of the macro variable:</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code>ADODataDriverEh1<span class="token punctuation">.</span>SelectSQL<span class="token punctuation">.</span>Text <span class="token operator">:=</span> ‘select <span class="token operator">*</span> from %table_name%’
ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">&#39;%table_name%&#39;</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘Country’<span class="token punctuation">;</span>
MemTableEh1<span class="token punctuation">.</span>Open<span class="token punctuation">;</span>
…
<span class="token keyword">if</span> Conditions 
  <span class="token keyword">then</span> ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">&#39;%table_name%&#39;</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘table1’
  <span class="token keyword">else</span> ADODataDriverEh1<span class="token punctuation">.</span>MacroVars<span class="token punctuation">.</span>Macros<span class="token punctuation">[</span><span class="token string">&#39;%table_name%&#39;</span><span class="token punctuation">]</span> <span class="token operator">:=</span> ‘table2’<span class="token punctuation">;</span>
</code></pre></div><p>Use <code>SQLDataDriverEh.FinalSelectSQL</code>, <code>FinalUpdateSQL</code>, <code>FinalInsertDQL</code>, <code>FinalGetrecSQL</code> properties to access the actual SQL expression.</p><p>Demo: See a Demo project of using macro variables in the folder of the library – <code>&lt;EhLib Dir\\Demos\\DataDriver.Macros&gt;</code></p>`,9),c=[o];function r(p,i){return e(),n("div",null,c)}const u=a(t,[["render",r],["__file","07-macro-variables-in-sql-expressions.html.vue"]]);export{u as default};