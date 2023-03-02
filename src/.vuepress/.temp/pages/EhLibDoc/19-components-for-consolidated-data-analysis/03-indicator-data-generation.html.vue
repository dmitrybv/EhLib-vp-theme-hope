<template><div><h1 id="indicator-data-generation-tpivotgrideh-with-the-possibility-of-interrupting-the-process" tabindex="-1"><a class="header-anchor" href="#indicator-data-generation-tpivotgrideh-with-the-possibility-of-interrupting-the-process" aria-hidden="true">#</a> Indicator data generation TPivotGridEh with the possibility of interrupting the process</h1>
<p>In <code v-pre>TPivotGridEh</code> during long formation of data indicator (ProgressBar) of data generation is displayed with the possibility of interruption by pressing ESC key.</p>
<p><img src="@source/images/clip0065.png" alt="" loading="lazy"></p>
<p>Method of forming data remains the same. To generate the data <code v-pre>TPivotDataSourceEh.BuildPivotData</code> method is used;
To control the displaying of the progress bar use the following properties of TPivotGridEh class:</p>
<p><code v-pre>ShowDataBuildingProgress: Boolean</code>
Defines necessity of displaying indicator during data formation.</p>
<p><code v-pre>DataBuildingProgressDelay: Integer</code>
Defines interval (in milliseconds) after which it is necessary to display indicator. If data formation time less than specified interval then indicator will not be shown.</p>
</div></template>


