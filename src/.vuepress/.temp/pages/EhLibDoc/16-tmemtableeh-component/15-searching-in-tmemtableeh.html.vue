<template><div><h1 id="searching-in-tmemtableeh" tabindex="-1"><a class="header-anchor" href="#searching-in-tmemtableeh" aria-hidden="true">#</a> Searching in TMemTableEh</h1>
<p>You can search in TMemTableEh using following methods:</p>
<ol>
<li>Locate</li>
</ol>
<p>Locate moves the cursor to the first row matching a specified set of search criteria. In its simplest form, you pass Locate the name of a column to search, a field value to match, and an options flag specifying whether the search is case-insensitive or if it can use partial-key matching. (Partial-key matching is when the criterion string need only be a prefix of the field value.) For example, the following code moves the cursor to the first row in the CustTable where the value in the Company column is &quot;Professional Divers, Ltd.&quot;:</p>
<p>var
LocateSuccess: Boolean;
SearchOptions: TLocateOptions;
begin
SearchOptions := [loPartialKey];
LocateSuccess := CustTable.Locate('Company', 'Professional Divers, Ltd.', SearchOptions);
end;</p>
<p>If Locate finds a match, the first record containing the match becomes the current record. Locate returns True if it finds a matching record, False if it does not. If a search fails, the current record does not change.</p>
<p>The real power of Locate comes into play when you want to search on multiple columns and specify multiple values to search for. Search values are Variants, which means you can specify different data types in your search criteria. To specify multiple columns in a search string, separate individual items in the string with semicolons.</p>
<p>Because search values are Variants, if you pass multiple values, you must either pass a Variant array as an argument (for example, the return values from the Lookup method), or you must construct the Variant array in code using the VarArrayOf function. The following code illustrates a search on multiple columns using multiple search values and partial-key matching:</p>
<p>with CustTable do
Locate('Company;Contact;Phone', VarArrayOf(['Sight Diver','P']), loPartialKey);
Locate uses the fastest possible method to locate matching records. If the columns to search are indexed and the index is compatible with the search options you specify, Locate uses the index.</p>
<ol start="2">
<li>Lookup</li>
</ol>
<p>Lookup searches for the first row that matches specified search criteria. If it finds a matching row, it forces the recalculation of any calculated fields and lookup fields associated with the dataset, then returns one or more fields from the matching row. Lookup does not move the cursor to the matching row. It only returns values from it.</p>
<p>In its simplest form, you pass Lookup the name of field to search, the field value to match, and the field or fields to return. For example, the following code looks for the first record in the CustTable where the value of the Company field is &quot;Professional Divers, Ltd.&quot;, and returns the company name, a contact person, and a phone number for the company:</p>
<p>var
LookupResults: Variant;
begin
LookupResults := CustTable.Lookup('Company', 'Professional Divers, Ltd.', 'Company;Contact; Phone');
end;</p>
<p>Lookup returns values for the specified fields from the first matching record it finds. Values are returned as Variants. If more than one return value is requested, Lookup returns a Variant array. If there are no matching records, Lookup returns a Null Variant.</p>
<p>The real power of Lookup comes into play when you want to search on multiple columns and specify multiple values to search for. To specify strings containing multiple columns or result fields, separate individual fields in the string items with semicolons.</p>
<p>Because search values are Variants, if you pass multiple values, you must either pass a Variant array as an argument (for example, the return values from the Lookup method), or you must construct the Variant array in code using the VarArrayOf function. The following code illustrates a lookup search on multiple columns:</p>
<p>var
LookupResults: Variant;
begin
with CustTable do
LookupResults := Lookup('Company; City', VarArrayOf(['Sight Diver', 'Christiansted']),    'Company; Addr1; Addr2; State; Zip');
end;</p>
<p>Like Locate, Lookup uses the fastest possible method to locate matching records. If the columns to search are indexed, Lookup uses the index.</p>
<ol start="3">
<li>FindRec</li>
</ol>
<p>FindRec searches for the first row that matches specified search criteria and return record number. FindRec have the same parameters as the Locate method.</p>
<p>When MemTableEh is in tree-view mode the Locate and FindRec methods search records in expanded nodes. To search matches in all nodes you need to use MemTableEh.TreeList.Locate method. This method also expand founded node, so it will be visible in dataset.</p>
<ol start="4">
<li>GotoRec
GotoRec moves the cursor to the row passed by the Rec parameter. GotoRec returns True if it finds a record, False if it does not.</li>
</ol>
</div></template>


