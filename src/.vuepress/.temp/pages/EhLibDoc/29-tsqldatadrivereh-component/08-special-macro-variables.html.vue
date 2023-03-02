<template><div><h1 id="special-macro-variables" tabindex="-1"><a class="header-anchor" href="#special-macro-variables" aria-hidden="true">#</a> Special macro variables</h1>
<p>There are two special macro variables in <code v-pre>SQLDataDriverEh</code>. Their names are stored in the properties</p>
<p><code v-pre>SQLDataDriverEh.MacroVars.SpecMacros.FilterMacroName</code></p>
<p><code v-pre>SQLDataDriverEh.MacroVars.SpecMacros.SortOrderMacroName</code></p>
<p>First macro variable <code v-pre>«FilterMacroName»</code> is the name that will be used when the filter is in <code v-pre>DBGridEh</code> when preferences contain the following values:</p>
<p>•	DBGridEh.STFilter.Local = False
•	DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh.
•	SQLDataDriverEh.SpecMacrosUsages contains value smuUseFilterMacroEh.</p>
<p>If <code v-pre>smuUseFilterMacroEh</code> not exist in <code v-pre>SQLDataDriverEh.SpecMacrosUsages</code>, filtering through the change SQL statements will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.</p>
<p>Default <code v-pre>FilterMacroName</code> contain values '% Filter%'.</p>
<p>The formation of the variable <code v-pre>FilterMacroName</code> affect property values in SpecMacrosUsages:</p>
<p><code v-pre>SmuFilterAsWhereClauseEh</code> value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule 'where Filter Expression'.</p>
<p>In this case <code v-pre>SQLDataDriverEh.SelectSQL</code> can be written as 'select from Country% Filter%'.</p>
<p>If filtering is coming from DBGridEh is empty (show all data) <code v-pre>SQLDataDriverEh.FinalSelectSQL</code> then made the following expression 'select from Country' (explanatory variables% Filter% 'is an empty string). If the expressions for filtering input from DBGridEh will not empty, the variable% Filter% 'has the value' WHERE Filter Expression '.</p>
<p><code v-pre>SmuFilterWithANDPrecedingEh</code> value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule 'AND Filter Expression'.</p>
<p>If <code v-pre>smuFilterAsWhereClauseEh</code> and <code v-pre>smuFilterWithANDPrecedingEh</code> SpecMacrosUsages absent in the string value of the filter will be formed as is, without additional prior expression 'Filter Expression'</p>
<p>Second macro variables «SortOrderMacroName» is the name that will be used when applying sorting DBGridEh when preferences contain the following values:
• DBGridEh.SortLocal = False
• DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh.
• SQLDataDriverEh.SpecMacrosUsages contains value smuUseSortOrderMacroEh.</p>
<p>If <code v-pre>smuUseSortOrderMacroEh</code> not exist in <code v-pre>SQLDataDriverEh.SpecMacrosUsages</code>, sorting through change SQL expression will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.</p>
<p>Default FilterMacroName contain values '% Filter%'.</p>
<p>The formation of the variable SortOrderMacroName affect property values in SpecMacrosUsages:</p>
<p><code v-pre>SmuSortOrderAsOrderByClauseEh</code> value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule 'ORDER BY 3, 7, ...'. In this case SQLDataDriverEh.SelectSQL can be written as 'select from Country% SortOrder%'.</p>
<p><code v-pre>SmuSortOrderWithCommaPrecedingEh</code> value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule ', 3, 7 ...'. In this case SQLDataDriverEh.SelectSQL can be written as 'select from Country order by 5% SortOrder%'.</p>
<p>If <code v-pre>smuSortOrderAsOrderByClauseEh</code> <code v-pre>smuSortOrderAsOrderByClauseEh</code> and not in SpecMacrosUsages, the string value of the filter will be created as is, without additional prior expressions '3, 7, ... '. In the absence of information on the sorting will be set empty string value.</p>
<p>Demo: See a Demo project of using macro variables in the folder of the library –  <code v-pre>&lt;EhLib Dir\Demos\DataDriver.SpecMacros&gt;</code></p>
</div></template>


