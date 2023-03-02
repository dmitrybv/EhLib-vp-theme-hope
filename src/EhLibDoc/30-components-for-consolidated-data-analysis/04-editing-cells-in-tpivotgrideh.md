# Editing cells in TPivotGridEh


`TPivotGridEh` added the ability to change data cells. It is assumed that the structure of data generation is configured in such a way that the cell `TPivotGridEh` corresponds to the data cell in the source data and in the source database table. When the user changes the data in the cells of the event handler code `TPivotGridEh.OnSetDataCellEditorValue` should record the entered value in the source database table. 

In this case, the internal tables and `TPivotGridEh` aggregates calculate automatically.

To enable changes in `TPivotGridEh` cells, write the event handler `TPivotGridEh.OnGetDataCellEditorParams`.

For an example of using cell editing technology, see the Demo Project `PivotGridEh.EditCells\Project1.dpr`

