# Filtering data in drop-down lookup lists when typing


In components TDBLookupComboboxEh and TColumnEh when the grid is connected to a field in a column of type Lookup has the ability to filter the data set from the drop-down lookup list when the data set in the lookup text editor.
In normal operation, the lookup text editor as you type with the keyboard software in the dropdown lookup list automatically goes to the entry that starts the typed text.
In the additional filtering of text, the program further filters the data so that the list are only the records that satisfy the typing.
Filtering can operate in two modes (lsftBeginsWithEh and lsftContainsEh):

![](../../images/clip0026.png) 

  
While lsftBeginsWithEh, the program displays only those records where the beginning of the text in the list coincides with the beginning of the text in the editor. In this example, the list will show all records that have a company name begins with «Un». As you type, the number of entries in the list is reduced.

![](../../images/clip0027.png) 


While lsftContainsEh program displays only records that have the typed text is in any position of the first column of the combo box. In this case, the found text is highlighted in color.
To filter the data in drop-down lists to lookup:
- Assign property DropDownBox.ListSource (TColumnEh. DropDownBox.ListSource or DBLookupComboboxEh.DropDownBox.ListSource). DropDownBox.ListSource must refer to the DataSource which DataSource.DataSet a separate DataSet that will filter the data. Filtering is done through the property DataSet.Filter: = '[FieldsName] Like abc *' or '* abc *' depending on the mode (lsftBeginsWithEh and lsftContainsEh). As an icon substitution Wildcard default is '*'. If your DataSet supports different icon for Wildcard Like expressions, you must register the class derived from TSQLDatasetFeaturesEh where overloaded virtual function GetLikeWildcardForSeveralCharacters. Standard datasets such as TADODataSet, TClientDataSet, etc. Such classes are already written and recorded automatically if the partition uses any design unit prescribe the appropriate module EhLibXXX (EhLibADO, EhLibCDS, etc.) in the same way as for setting sorting and filtering in the grid.
- Enable filtering typing: DropDownBox.ListSourceAutoFilter = True.
- Set the mode filtering: DropDownBox.ListSourceAutoFilterType = lsftBeginsWithEh or DropDownBox.ListSourceAutoFilterType = lsftContainsEh. 
