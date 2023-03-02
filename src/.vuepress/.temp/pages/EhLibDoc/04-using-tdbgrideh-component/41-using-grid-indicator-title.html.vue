<template><div><h1 id="using-properties-of-tdbgrideh-indicatortitle" tabindex="-1"><a class="header-anchor" href="#using-properties-of-tdbgrideh-indicatortitle" aria-hidden="true">#</a> Using properties of TDBGridEh.IndicatorTitle</h1>
<p>Using properties of the <code v-pre>TDBGridEh.IndicatorTitle</code> object you can control the behavior of the grid when the left-top cell is clicked.</p>
<p><img src="@source/images/clip0033.png" alt="" loading="lazy"></p>
<p>Set <code v-pre>TitleButton</code> property to True value to make top-left cell working as button. When <code v-pre>TitleButton</code> is True the properties <code v-pre>DropdownMenu</code> and <code v-pre>UseGlobalMenu</code> are also taken into consideration. If <code v-pre>UseGlobalMenu</code> is True then grid will form the dropped down menu using global property <code v-pre>DBGridEhCenter.IndicatorTitleMenus</code>. If <code v-pre>DropdownMenu</code> is also assigned then all elements of this menu will be added to the dropped down menu after elements of global menu.
<code v-pre>TDBGridEh.IndicatorTitle</code> property have the following sub-properties:</p>
<p><code v-pre>DropdownMenu: TPopupMenu</code></p>
<dd>Define a drop-down menu whose items will be displayed when you click on the cell IndicatorTitle </dd>
<p><code v-pre>ShowDropDownSign: Boolean</code></p>
<dd>Specifies whether to display a black triangle pointing down in the top left cell</dd>
<p><code v-pre>TitleButton: Boolean</code></p>
<dd>Specifies that the upper-left cell works as a button</dd>
<p><code v-pre>UseGlobalMenu: Boolean</code></p>
<dd>
<p>In forming the pull-down menu to use the properties of the global object - <code v-pre>DBGridEhCenter.IndicatorTitleMenus</code>.</p>
</dd>
</div></template>


