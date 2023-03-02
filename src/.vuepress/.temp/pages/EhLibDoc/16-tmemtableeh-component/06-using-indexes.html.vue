<template><div><h1 id="using-indexes" tabindex="-1"><a class="header-anchor" href="#using-indexes" aria-hidden="true">#</a> Using indexes</h1>
<p>Indexes are used for speeding up searching.</p>
<p>In particular it is used to building a tree-type structure of records. Pattern of indexes is assigned in <code v-pre>IndexDefs</code> collection. <code v-pre>TMemTableEh</code> creates indexes basing on the pattern when it making an internal array of records. It usually happens when <code v-pre>DataSet</code> is activated.</p>
</div></template>


