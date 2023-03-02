<template><div><h1 id="drawing-information-about-the-absence-of-records-in-a-dataset" tabindex="-1"><a class="header-anchor" href="#drawing-information-about-the-absence-of-records-in-a-dataset" aria-hidden="true">#</a> Drawing information about the absence of records in a dataset</h1>
<p>Grid allows to show special text in the central part of client area about absence of records in a dataset. If the DataSet is active and haven’t any record then grid will draw text <code v-pre>&lt;No Records&gt;</code>. Use subproperies of TDBGridEh.EmptyDataInfo property to customize Text and Font of this information. By default the text about absence of records is taken from global constant SNoData. You can set Text for every Grid using <code v-pre>TDBGridEh.EmptyDataInfo.Text</code> property or set global variable <code v-pre>DBGridEhEmptyDataInfoText</code> from <code v-pre>DBGridEh</code> unit.</p>
<p><img src="@source/images/clip0032.png" alt="" loading="lazy"></p>
</div></template>


