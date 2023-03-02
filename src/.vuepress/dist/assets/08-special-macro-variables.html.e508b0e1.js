import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as a,f as t}from"./app.ac77cf73.js";const i={},o=t('<h1 id="special-macro-variables" tabindex="-1"><a class="header-anchor" href="#special-macro-variables" aria-hidden="true">#</a> Special macro variables</h1><p>There are two special macro variables in <code>SQLDataDriverEh</code>. Their names are stored in the properties</p><p><code>SQLDataDriverEh.MacroVars.SpecMacros.FilterMacroName</code></p><p><code>SQLDataDriverEh.MacroVars.SpecMacros.SortOrderMacroName</code></p><p>First macro variable <code>«FilterMacroName»</code> is the name that will be used when the filter is in <code>DBGridEh</code> when preferences contain the following values:</p><p>• DBGridEh.STFilter.Local = False • DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh. • SQLDataDriverEh.SpecMacrosUsages contains value smuUseFilterMacroEh.</p><p>If <code>smuUseFilterMacroEh</code> not exist in <code>SQLDataDriverEh.SpecMacrosUsages</code>, filtering through the change SQL statements will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.</p><p>Default <code>FilterMacroName</code> contain values &#39;% Filter%&#39;.</p><p>The formation of the variable <code>FilterMacroName</code> affect property values in SpecMacrosUsages:</p><p><code>SmuFilterAsWhereClauseEh</code> value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule &#39;where Filter Expression&#39;.</p><p>In this case <code>SQLDataDriverEh.SelectSQL</code> can be written as &#39;select from Country% Filter%&#39;.</p><p>If filtering is coming from DBGridEh is empty (show all data) <code>SQLDataDriverEh.FinalSelectSQL</code> then made the following expression &#39;select from Country&#39; (explanatory variables% Filter% &#39;is an empty string). If the expressions for filtering input from DBGridEh will not empty, the variable% Filter% &#39;has the value&#39; WHERE Filter Expression &#39;.</p><p><code>SmuFilterWithANDPrecedingEh</code> value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule &#39;AND Filter Expression&#39;.</p><p>If <code>smuFilterAsWhereClauseEh</code> and <code>smuFilterWithANDPrecedingEh</code> SpecMacrosUsages absent in the string value of the filter will be formed as is, without additional prior expression &#39;Filter Expression&#39;</p><p>Second macro variables «SortOrderMacroName» is the name that will be used when applying sorting DBGridEh when preferences contain the following values: • DBGridEh.SortLocal = False • DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh. • SQLDataDriverEh.SpecMacrosUsages contains value smuUseSortOrderMacroEh.</p><p>If <code>smuUseSortOrderMacroEh</code> not exist in <code>SQLDataDriverEh.SpecMacrosUsages</code>, sorting through change SQL expression will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.</p><p>Default FilterMacroName contain values &#39;% Filter%&#39;.</p><p>The formation of the variable SortOrderMacroName affect property values in SpecMacrosUsages:</p><p><code>SmuSortOrderAsOrderByClauseEh</code> value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule &#39;ORDER BY 3, 7, ...&#39;. In this case SQLDataDriverEh.SelectSQL can be written as &#39;select from Country% SortOrder%&#39;.</p><p><code>SmuSortOrderWithCommaPrecedingEh</code> value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule &#39;, 3, 7 ...&#39;. In this case SQLDataDriverEh.SelectSQL can be written as &#39;select from Country order by 5% SortOrder%&#39;.</p><p>If <code>smuSortOrderAsOrderByClauseEh</code> <code>smuSortOrderAsOrderByClauseEh</code> and not in SpecMacrosUsages, the string value of the filter will be created as is, without additional prior expressions &#39;3, 7, ... &#39;. In the absence of information on the sorting will be set empty string value.</p><p>Demo: See a Demo project of using macro variables in the folder of the library – <code>&lt;EhLib Dir\\Demos\\DataDriver.SpecMacros&gt;</code></p>',22),s=[o];function c(l,n){return r(),a("div",null,s)}const p=e(i,[["render",c],["__file","08-special-macro-variables.html.vue"]]);export{p as default};