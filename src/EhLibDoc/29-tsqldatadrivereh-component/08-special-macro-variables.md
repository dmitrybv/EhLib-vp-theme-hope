# Special macro variables


There are two special macro variables in `SQLDataDriverEh`. Their names are stored in the properties

`SQLDataDriverEh.MacroVars.SpecMacros.FilterMacroName`

`SQLDataDriverEh.MacroVars.SpecMacros.SortOrderMacroName`

First macro variable `«FilterMacroName»` is the name that will be used when the filter is in `DBGridEh` when preferences contain the following values:

•	DBGridEh.STFilter.Local = False
•	DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh.
•	SQLDataDriverEh.SpecMacrosUsages contains value smuUseFilterMacroEh.

If `smuUseFilterMacroEh` not exist in `SQLDataDriverEh.SpecMacrosUsages`, filtering through the change SQL statements will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.

Default `FilterMacroName` contain values '% Filter%'.

The formation of the variable `FilterMacroName` affect property values in SpecMacrosUsages:

`SmuFilterAsWhereClauseEh` value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule 'where Filter Expression'. 

In this case `SQLDataDriverEh.SelectSQL` can be written as 'select from Country% Filter%'. 

If filtering is coming from DBGridEh is empty (show all data) `SQLDataDriverEh.FinalSelectSQL` then made the following expression 'select from Country' (explanatory variables% Filter% 'is an empty string). If the expressions for filtering input from DBGridEh will not empty, the variable% Filter% 'has the value' WHERE Filter Expression '.

`SmuFilterWithANDPrecedingEh` value specifies that in the event of non-null value to filter the string value of this macro variable will generate the following rule 'AND Filter Expression'.

If `smuFilterAsWhereClauseEh` and `smuFilterWithANDPrecedingEh` SpecMacrosUsages absent in the string value of the filter will be formed as is, without additional prior expression 'Filter Expression'

Second macro variables «SortOrderMacroName» is the name that will be used when applying sorting DBGridEh when preferences contain the following values:
• DBGridEh.SortLocal = False
• DBGridEh SQLDataDriverEh connected to the scheme - DBGridEh.DataSource.MemTableEh. SQLDataDriverEh.
• SQLDataDriverEh.SpecMacrosUsages contains value smuUseSortOrderMacroEh.

If `smuUseSortOrderMacroEh` not exist in `SQLDataDriverEh.SpecMacrosUsages`, sorting through change SQL expression will be executed under the scheme described in EhLib users guide section - Sorting and filtering data in DBGridEh.

Default FilterMacroName contain values '% Filter%'.

The formation of the variable SortOrderMacroName affect property values in SpecMacrosUsages:

`SmuSortOrderAsOrderByClauseEh` value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule 'ORDER BY 3, 7, ...'. In this case SQLDataDriverEh.SelectSQL can be written as 'select from Country% SortOrder%'.

`SmuSortOrderWithCommaPrecedingEh` value specifies that in the event of non-null value to sort the string value of this macro variable will generate the following rule ', 3, 7 ...'. In this case SQLDataDriverEh.SelectSQL can be written as 'select from Country order by 5% SortOrder%'.

If `smuSortOrderAsOrderByClauseEh` `smuSortOrderAsOrderByClauseEh` and not in SpecMacrosUsages, the string value of the filter will be created as is, without additional prior expressions '3, 7, ... '. In the absence of information on the sorting will be set empty string value.

Demo: See a Demo project of using macro variables in the folder of the library –  `<EhLib Dir\Demos\DataDriver.SpecMacros>`

