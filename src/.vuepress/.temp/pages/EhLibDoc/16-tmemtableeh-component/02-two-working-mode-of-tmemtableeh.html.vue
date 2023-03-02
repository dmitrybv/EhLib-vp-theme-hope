<template><div><h1 id="two-working-mode-of-tmemtableeh-component" tabindex="-1"><a class="header-anchor" href="#two-working-mode-of-tmemtableeh-component" aria-hidden="true">#</a> Two working mode of TMemTableEh component</h1>
<p>There are two working mode of <code v-pre>TMemTableEh</code>: ‘stand-alone’ and ‘with datadriver’.</p>
<h3 id="stand-alone-mode" tabindex="-1"><a class="header-anchor" href="#stand-alone-mode" aria-hidden="true">#</a> ‘stand-alone’ mode.</h3>
<p>In ‘stand-alone’ mode <code v-pre>TMemTableEh</code> works as independent array of data. Before working with such MemTable it is necessary to create an internal structure of record. For that it is necessary to create external fields (<code v-pre>TFields</code>) or field definitions in <code v-pre>TMemTableEh</code> and call <code v-pre>CreateDataSet</code> method (Or, at design-time, press ‘Create DataSet’ button in Fields editor window).</p>
<h3 id="with-datadriver-mode" tabindex="-1"><a class="header-anchor" href="#with-datadriver-mode" aria-hidden="true">#</a> 'with datadriver' mode.</h3>
<p>The 'with datadriver' mode is activated when <code v-pre>TMemTableEh.DataDriver</code> property is assigned. Internal array is created automatically on activation of MemTableEh. Structure of the fields is delivered by DataDriver component.</p>
</div></template>


