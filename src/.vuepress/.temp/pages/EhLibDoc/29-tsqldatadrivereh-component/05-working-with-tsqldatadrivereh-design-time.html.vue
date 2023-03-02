<template><div><h1 id="working-with-tsqldatadrivereh-and-txxxdatadrivereh-at-design-time" tabindex="-1"><a class="header-anchor" href="#working-with-tsqldatadrivereh-and-txxxdatadrivereh-at-design-time" aria-hidden="true">#</a> Working with TSQLDataDriverEh and TXXXDataDriverEh at design-time</h1>
<p>Double click on <code v-pre>TSQLDataDriverEh</code> or <code v-pre>TXXXDataDriverEh</code> component opens a dialog editor of <code v-pre>TSQLDataDriverEh</code> component. At a design-time <code v-pre>TSQLDataDriverEh</code> and <code v-pre>TXXXDataDriverEh</code> always use design time copy of object that work with database (it is TDatabase object for DBE engine). If where are not any object was created the system will offer to create a new object. Type of dialog of creating DB Object depend of type of TXXXDataDriverEh. For <code v-pre>TSQLDataDriverEh</code> it show dialog where you can choose a type of the access to server (Engine) and service of data processing of server (DB Service). Type of the access defines a engine to access the data and can be one of the following types: <code v-pre>BDE</code>, <code v-pre>IBX</code>, <code v-pre>DBX</code> or <code v-pre>ADO</code>. For <code v-pre>ADO</code> also need to define &quot;Service a data processing&quot;, class that can get a list of DB objects from server. If object that work with database already has been create before then system will offer to choose one of the existing.</p>
<p>Window of editing <code v-pre>TSQLDataDriverEh</code> have a next controls:</p>
<ol>
<li>
<p>Tree list of DB objects. Tables, Views, Procedures, Functions etc. It depends of server type.</p>
</li>
<li>
<p>Lower window of elements of the current object in the tree of objects.</p>
</li>
<li>
<p>Output grid of result of executing the Select expressions.</p>
</li>
<li>
<p>Page of Select expression (TSQLDataDriverEh.SelectSQL)</p>
</li>
<li>
<p>Pages expressions for Inserting, Updating, Deleting, Requesting one record.</p>
</li>
<li>
<p>Page to fill SpecParams property and parameters of dynamic SQL building.</p>
</li>
</ol>
</div></template>


