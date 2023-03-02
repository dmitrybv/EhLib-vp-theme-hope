# Records sorting


`TMemTableEh` has two methods of the sorting: 

- Sorting with dynamic supporting of the changes, when the added record is automatically move to the necessary position to support order of the sorting.

- And sorting without dynamic supporting of the changes.

1.	Use the `SortOrder` property to sort data with dynamic support of the changes. Separate several fields by comma. Add ‘DESC’ after fieldname to sort data in inverse sequence. Sorting occurs at the TRecordsViewEh object, so physically the records doesn’t move inside internal array TRecordsListEh.

2.	Use `SortByFields` procedure to sort data without dynamic support of the changes. The string that define sorting must have same format as for `SortOrder` property. Sorting occurs on the level of `TRecordsListEh`, i.e. records are sorted physically in the internal array of data.

When you use `EhlibMTE` unit for automatic sorting in `DBGridEh` you can use global variable `SortInView` of `Boolean` type to define the type of sorting that will be executed when `DBGridEh` performs sorting after sorting markers in titles of grid are changed.
