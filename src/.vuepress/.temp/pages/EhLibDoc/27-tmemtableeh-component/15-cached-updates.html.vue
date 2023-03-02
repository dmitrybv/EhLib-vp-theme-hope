<template><div><h1 id="cached-updates" tabindex="-1"><a class="header-anchor" href="#cached-updates" aria-hidden="true">#</a> Cached updates</h1>
<p><code v-pre>TMemTableEh</code> can work in operative or postpone updates.</p>
<p><code v-pre>CachedUpdates</code> property defines type if updates. In operative mode of the updates, <code v-pre>TMemTableEh</code> sends changed record to c right after application call <code v-pre>TMemTableEh.Post</code> method or append new record in <code v-pre>TMemTableEh</code>.</p>
<p>In the postpone mode the updates aren’t sent to postpone, but are accumulated in the special buffer. Data are not transferred until the client application calls the <code v-pre>ApplyUpdates</code> method.</p>
<p>To turn on the postpone updates you need set <code v-pre>CachedUpdates</code> property to True.</p>
<p><code v-pre>ApplyUpdates</code> have a single parameter – <code v-pre>MaxErrors</code>. <code v-pre>MaxErrors</code> indicates the maximum number of errors that the <code v-pre>DataDriver</code> should allow before prematurely stopping update operations. Set <code v-pre>MaxErrors</code> to –1 to indicate that there is no limit to the number of errors. Set <code v-pre>MaxErrors</code> to <code v-pre>0</code> to define that whole process of change will be rejected on first error. Records, which renovations have come with errors, have an additional UpdateError property with type of TUpdateErrorEh.</p>
<p>To identify type of changing of record you need to use <code v-pre>UpdateStatus</code> method and <code v-pre>StatusFilter</code> property:</p>
<p><code v-pre>UpdateStatus</code> indicates a type of changing of current record in <code v-pre>MemTable</code>. It returns one of the following values:</p>
<dd>
<p><code v-pre>usUnmodified</code> - Indicates that the current record haven’t been changed.</p>
<p><code v-pre>usModified</code> - Indicates that the record was edited and changed.</p>
<p><code v-pre>usInserted</code> - Indicates that the record was added.</p>
<p><code v-pre>usDeleted</code> - Indicates that the record was removed.</p>
</dd>
<br>
<p><code v-pre>StatusFilter</code> defines filter for different types of records. <code v-pre>StatusFilter</code> – is a set that can contains any combination of the following values:</p>
<dd>
<p><code v-pre>usUnmodified</code> – Unmodified records are visible in MemTable.</p>
<p><code v-pre>usModified</code> - Modified records are visible in MemTable.</p>
<p><code v-pre>usInserted</code> - Added records are visible in MemTable.</p>
<p><code v-pre>usDeleted</code> – Deleted record are visible in MemTable.</p>
</dd>
<p>By default, <code v-pre>StatusFilter</code> have [usModified, usInserted, usUnmodified] value. So, deleted records are hidden.</p>
<p>Method <code v-pre>RevertRecord</code> restores an old condition of the current record and values of fields. If record was added in the program, it is deleted from the list. If record was changed then <code v-pre>UpdateStatus</code> property is restored to <code v-pre>usUnmodified</code> value.
Method <code v-pre>MergeChangeLog</code> deletes a log of cached changes. All added or changed records get <code v-pre>usUnmodified</code> status.</p>
<p>Method <code v-pre>CancelUpdates</code> cancels all changes and restores old state of records array.</p>
</div></template>


