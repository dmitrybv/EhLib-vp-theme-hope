<template><div><h1 id="using-tdbsumlist-component" tabindex="-1"><a class="header-anchor" href="#using-tdbsumlist-component" aria-hidden="true">#</a> Using TDBSumList component</h1>
<h3 id="common-understanding-of-tdbsumlist" tabindex="-1"><a class="header-anchor" href="#common-understanding-of-tdbsumlist" aria-hidden="true">#</a> Common understanding of TDBSumList.</h3>
<p>You can use <code v-pre>TDBSumList</code> for totaling records in a <code v-pre>TDataSet</code> with visible dynamic changes. Set the <code v-pre>DataSet</code> field in the dataset for which you want to get and write <code v-pre>SumListChanged</code> event to take specific action after <code v-pre>TDBSumList</code> has changed. <code v-pre>TDBSumList</code> has <code v-pre>SumCollection</code> property that represents a container of <code v-pre>TDBSum</code> objects. Every <code v-pre>TDBSum</code> object represents an element that can hold specific aggregation value. <code v-pre>FieldName</code> and <code v-pre>GroupOperation</code> determine type of aggregation value, <code v-pre>SumValue</code> hold current aggregation value.
<code v-pre>TDBSumList</code> is embedded in <code v-pre>DBGridEh</code> component, so that all below text in equal degrees pertains as to <code v-pre>TDBSumList</code> component and to <code v-pre>TDBGridEh.SumList</code> property.</p>
<h3 id="how-it-works-and-why-sumlist-sometimes-calculate-aggregation-values-incorrectly" tabindex="-1"><a class="header-anchor" href="#how-it-works-and-why-sumlist-sometimes-calculate-aggregation-values-incorrectly" aria-hidden="true">#</a> How it works and why SumList sometimes calculate aggregation values incorrectly.</h3>
<p>Data-aware controls interact with dataset via <code v-pre>TDataLink</code> object. <code v-pre>TDataLink</code> does not allow to recalculate aggregation value quickly. For instance when the record is deleted from dataset, dataset sends <code v-pre>deDataSetChange</code> event to all <code v-pre>TDataLink</code> objects, same event is sent when the local filter have been changed. So <code v-pre>TDataLink</code> can’t define why it gets this event and when it receives such event then it has to recalculate aggregation values running through whole dataset, even when if only one record was deleted from dataset. <code v-pre>SumList</code> doesn’t use these events and after activation, it reassigns following events of the dataset: <code v-pre>OnAfterEdit</code>, <code v-pre>OnAfterInsert</code>, <code v-pre>OnAfterOpen</code>, <code v-pre>OnAfterPost</code>, <code v-pre>OnAfterScroll</code>, <code v-pre>OnBeforeDelete</code>, <code v-pre>OnAfterClose</code>. This way allows us to avoid of going through whole dataset when it is not needed. But other problems may appear, such as:</p>
<ul>
<li>
<p>Assigning these events at runtime. Deactivate SumList before assigning one of the earlier described events at runtime.</p>
</li>
<li>
<p>Under some conditions SumList can raise exception of access violation. It can happen when SumList tries to assign events back to dataset which had been already deleted. Such situation can appear when SumList (or DBGridEh) and dataset are placed in different forms (or DataModules). In such situation try to deactivate SumList before the Form or DataModule which contains dataset is deleted.</p>
</li>
<li>
<p>SumList can not trace changes in dataset if you use SetRange or ApplyRange methods of TBDEDataSet’s. Call SumList.RecalAll after using such methods.</p>
</li>
<li>
<p>SumList can’t trace changes in master dataset for detail dataset but not for BDE datasets. Call SumList.RecalAll after changing active record in master dataset.</p>
</li>
</ul>
<p>In any other case if you see that under some conditions <code v-pre>SumList</code> calculates values incorrectly call <code v-pre>RecalAll</code> method.</p>
<p>If <code v-pre>DBGridEh</code> is connected to <code v-pre>TMemTableEh</code> then you can show aggregated values in grid using Aggregated fields of <code v-pre>TMemTableEh</code> and no need to use <code v-pre>TDBGridEh.SumList</code> properties. <code v-pre>TMemTableEh</code> uses internal methods to calculate <code v-pre>Aggregated</code> fields and doesn’t reassign events.
See description of <code v-pre>TMemTableEh</code> for detail information about <code v-pre>Aggregated</code> fields.</p>
</div></template>


