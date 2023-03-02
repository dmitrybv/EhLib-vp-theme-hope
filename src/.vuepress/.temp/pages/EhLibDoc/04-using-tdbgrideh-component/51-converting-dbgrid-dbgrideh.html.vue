<template><div><h1 id="converting-existing-tdbgrid-component-to-tdbgrideh" tabindex="-1"><a class="header-anchor" href="#converting-existing-tdbgrid-component-to-tdbgrideh" aria-hidden="true">#</a> Converting existing TDBGrid component to TDBGridEh</h1>
<p>Although <code v-pre>TDBGridEh</code> is not inherited from <code v-pre>TCustomDBGrid</code> component, there are many alike properties in <code v-pre>TDBGridEh</code> and in <code v-pre>TDBGrid</code>.
It allows us to convert existing <code v-pre>TDBGrid</code> component to <code v-pre>TDBGridEh</code> with minimum losses.
To convert existing <code v-pre>TDBGrid</code> component to <code v-pre>TDBGridEh</code> follow next instructions:</p>
<ul>
<li>Open <code v-pre>Form</code> with <code v-pre>TDBGrid</code> component in <code v-pre>Delphi IDE</code>.</li>
<li>Open Form as Text <code v-pre>(Alt-F12)</code></li>
<li>Rename all <code v-pre>TDBGrid</code> objects to <code v-pre>TDBGridEh</code>  ('object DBGrid1: TDBGrid' -&gt; 'object DBGrid1: TDBGridEh')</li>
<li>Switch to view <code v-pre>Form</code> back as a <code v-pre>Form</code> (Alt-F12).</li>
<li>Rename all <code v-pre>TDBGrid</code> objects in <code v-pre>Form</code> declaration to <code v-pre>TDBGridEh</code> ('DBGrid1: TDBGrid;' -&gt; 'DBGrid1: TDBGridEh;' ).</li>
<li>Try to recompile the project.</li>
</ul>
</div></template>


