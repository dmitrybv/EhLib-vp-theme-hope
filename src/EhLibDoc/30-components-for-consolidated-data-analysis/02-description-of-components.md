# Description of components of data analysis

To create the elementary form for operation with components of consolidated data analysis do the following steps:

1.	Place on the form and set up DataSet which will be the supplier of data for PivotDataSource.
2.	Place on the form PivotDataSource.
3.	Set PivotDataSource.DataSet property to be pointed on DataSet which is set up on step 1.
4.	Place on the form PivotGridEh and PivotGridToolBoxEh.
5.	Set PivotGridEh.PivotDataSource and PivotGridToolBoxEh.PivotDataSource properties to be pointed on PivotDataSource which is set up on step 


Next steps are usually performed in Run-Time:

6.	Creation of structure of the internal buffer table in PivotDataSource based on DataSet fields or from scratch.
```pascal:no-line-numbers
PivotDataSourceEh1.PivotFields.RebuildPivotFields;
``` 
<br>

7.	Loading data from DataSet to PivotDataSource.
```pascal:no-line-numbers
PivotDataSourceEh1.CreateAndFillSourceTable;
``` 
<br>

8.	Setup sections and fields with consolidated data. 
```pascal:no-line-numbers
PivotDataSourceEh1.ColumnFields.Add('SaleDate.Year');
PivotDataSourceEh1.RowFields.Add('ShipVIA');
with PivotDataSourceEh1.ValueFieldDefs.Add do
begin
  PivotFieldName := 'AmountPiad';
  SumFunction := svtSumEh;
end;
``` 
<br>

Usually settings of sections are stored in the configuration file or database.
 
9.	Formation of the consolidated report.
```pascal:no-line-numbers
PivotDataSourceEh1.BuildPivotData;
``` 
<br>

When you call BuildPivotData again, `TPivotGridEh` saves the column width, expanded / minimized groups, and filters.

Demo project of using components of the consolidated analysis of the data, see the library archive: 
`<EhLib archive>\Demos\PivotGridEh.SimpleDemo\PivotGridEh.SimpleDemo.dpr`


 

