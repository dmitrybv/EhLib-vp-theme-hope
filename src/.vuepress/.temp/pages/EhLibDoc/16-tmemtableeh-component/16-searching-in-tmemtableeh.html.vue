<template><div><h1 id="searching-in-tmemtableeh" tabindex="-1"><a class="header-anchor" href="#searching-in-tmemtableeh" aria-hidden="true">#</a> Searching in TMemTableEh</h1>
<p>You can search in <code v-pre>TMemTableEh</code> using following methods:</p>
<h3 id="_1-locate" tabindex="-1"><a class="header-anchor" href="#_1-locate" aria-hidden="true">#</a> 1.	Locate</h3>
<p>Locate moves the cursor to the first row matching a specified set of search criteria. In its simplest form, you pass <code v-pre>Locate</code> the name of a column to search, a field value to match, and an options flag specifying whether the search is case-insensitive or if it can use partial-key matching. (Partial-key matching is when the criterion string need only be a prefix of the field value.)</p>
<p>For example, the following code moves the cursor to the first row in the CustTable where the value in the Company column is &quot;Professional Divers, Ltd.&quot;:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  LocateSuccess<span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
  SearchOptions<span class="token punctuation">:</span> TLocateOptions<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  SearchOptions <span class="token operator">:=</span> <span class="token punctuation">[</span>loPartialKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
  LocateSuccess <span class="token operator">:=</span> CustTable<span class="token punctuation">.</span>Locate<span class="token punctuation">(</span><span class="token string">'Company'</span><span class="token punctuation">,</span> <span class="token string">'Professional Divers, Ltd.'</span><span class="token punctuation">,</span> SearchOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>If <code v-pre>Locate</code> finds a match, the first record containing the match becomes the current record. <code v-pre>Locate</code> returns <code v-pre>True</code> if it finds a matching record, <code v-pre>False</code> if it does not. If a search fails, the current record does not change.</p>
<p>The real power of <code v-pre>Locate</code> comes into play when you want to search on multiple columns and specify multiple values to search for. Search values are Variants, which means you can specify different data types in your search criteria. To specify multiple columns in a search string, separate individual items in the string with semicolons.</p>
<p>Because search values are Variants, if you pass multiple values, you must either pass a Variant array as an argument (for example, the return values from the Lookup method), or you must construct the Variant array in code using the VarArrayOf function. The following code illustrates a search on multiple columns using multiple search values and partial-key matching:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">with</span> CustTable <span class="token keyword">do</span>
  Locate<span class="token punctuation">(</span><span class="token string">'Company;Contact;Phone'</span><span class="token punctuation">,</span> VarArrayOf<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Sight Diver'</span><span class="token punctuation">,</span><span class="token string">'P'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> loPartialKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code v-pre>Locate</code> uses the fastest possible method to locate matching records. If the columns to search are indexed and the index is compatible with the search options you specify, Locate uses the index.</p>
<h3 id="_2-lookup" tabindex="-1"><a class="header-anchor" href="#_2-lookup" aria-hidden="true">#</a> 2.	Lookup</h3>
<p>Lookup searches for the first row that matches specified search criteria. If it finds a matching row, it forces the recalculation of any calculated fields and lookup fields associated with the dataset, then returns one or more fields from the matching row. Lookup does not move the cursor to the matching row. It only returns values from it.</p>
<p>In its simplest form, you pass <code v-pre>Lookup</code> the name of field to search, the field value to match, and the field or fields to return. For example, the following code looks for the first record in the CustTable where the value of the Company field is &quot;Professional Divers, Ltd.&quot;, and returns the company name, a contact person, and a phone number for the company:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  LookupResults<span class="token punctuation">:</span> Variant<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  LookupResults <span class="token operator">:=</span> CustTable<span class="token punctuation">.</span>Lookup<span class="token punctuation">(</span><span class="token string">'Company'</span><span class="token punctuation">,</span> 
    <span class="token string">'Professional Divers, Ltd.'</span><span class="token punctuation">,</span> <span class="token string">'Company;Contact; Phone'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p><code v-pre>Lookup</code> returns values for the specified fields from the first matching record it finds. Values are returned as Variants. If more than one return value is requested, Lookup returns a <code v-pre>Variant</code> array. If there are no matching records, Lookup returns a <code v-pre>Null</code> Variant.</p>
<p>The real power of <code v-pre>Lookup</code> comes into play when you want to search on multiple columns and specify multiple values to search for. To specify strings containing multiple columns or result fields, separate individual fields in the string items with semicolons.</p>
<p>Because search values are Variants, if you pass multiple values, you must either pass a Variant array as an argument (for example, the return values from the Lookup method), or you must construct the Variant array in code using the VarArrayOf function. The following code illustrates a lookup search on multiple columns:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">var</span>
  LookupResults<span class="token punctuation">:</span> Variant<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
<span class="token keyword">with</span> CustTable <span class="token keyword">do</span>
  LookupResults <span class="token operator">:=</span> Lookup<span class="token punctuation">(</span><span class="token string">'Company; City'</span><span class="token punctuation">,</span> VarArrayOf<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Sight Diver'</span><span class="token punctuation">,</span> <span class="token string">'Christiansted'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    
    <span class="token string">'Company; Addr1; Addr2; State; Zip'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre></div><p>Like <code v-pre>Locate</code>, <code v-pre>Lookup</code> uses the fastest possible method to locate matching records. If the columns to search are indexed, <code v-pre>Lookup</code> uses the index.</p>
<h3 id="_3-findrec" tabindex="-1"><a class="header-anchor" href="#_3-findrec" aria-hidden="true">#</a> 3.	FindRec</h3>
<p><code v-pre>FindRec</code> searches for the first row that matches specified search criteria and return record number. <code v-pre>FindRec</code> have the same parameters as the Locate method.</p>
<p>When <code v-pre>MemTableEh</code> is in tree-view mode the Locate and <code v-pre>FindRec</code> methods search records in expanded nodes. To search matches in all nodes you need to use <code v-pre>MemTableEh.TreeList.Locate</code> method. This method also expand founded node, so it will be visible in dataset.</p>
<h3 id="_4-gotorec" tabindex="-1"><a class="header-anchor" href="#_4-gotorec" aria-hidden="true">#</a> 4.	GotoRec</h3>
<p><code v-pre>GotoRec</code> moves the cursor to the row passed by the <code v-pre>Rec</code> parameter. <code v-pre>GotoRec</code> returns True if it finds a record, <code v-pre>False</code> if it does not.</p>
</div></template>


