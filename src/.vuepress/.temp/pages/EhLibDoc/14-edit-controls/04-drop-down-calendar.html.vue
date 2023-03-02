<template><div><h1 id="the-drop-down-calendar-with-date-and-time-enter-pages" tabindex="-1"><a class="header-anchor" href="#the-drop-down-calendar-with-date-and-time-enter-pages" aria-hidden="true">#</a> The drop-down calendar with date and time enter pages</h1>
<p>In the library there is an control to display a drop-down calendar that can work in special modes:</p>
<p><img src="@source/images/clip0044.png" alt="" loading="lazy">
<img src="@source/images/clip0045.png" alt="" loading="lazy">
<img src="@source/images/clip0046.png" alt="" loading="lazy"></p>
<ul>
<li>Input the date and time simultaneously,</li>
<li>Input only the date</li>
<li>Input only the time</li>
</ul>
<p>The drop-down calendar starts work automatically in <code v-pre>DBDateTimeEditEh</code> component and in a text editor of and <code v-pre>DBGridEh</code> and <code v-pre>DBVertGridEh</code> components for <code v-pre>TDateTimeField</code> field.</p>
<p>The drop-down calendar automatically hides the unused part of the date and time windows, depending on the <code v-pre>EditFormat</code> property (or DisplayFormat for <code v-pre>TColumnEh</code> in the <code v-pre>DBGridEh</code> and <code v-pre>TFieldRow</code> in the <code v-pre>DBVertGridEh</code>).</p>
<p>For example: For <code v-pre>EditFormat = 'HH:NN'</code> drop-down calendar is as follows and will allow only enter hours and minutes.</p>
<p>With global properties of library, you can configure the following capabilities a calendar.</p>
<ul>
<li>Highlight Weekend.</li>
</ul>
<p>Property - ToolCtrlsEh.EhLibManager.DateTimeCalendarPickerHighlightHolidays: Boolean</p>
<ul>
<li>Highlight holidays.</li>
</ul>
<p>For highlighting holidays and transfer of working days, use <code v-pre>TWorkingTimeCalendarEh</code> class.</p>
<p>Inherit TWorkingTimeCalendarEh class and override a method -</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">function</span> IsWorkday<span class="token punctuation">(</span>ADate<span class="token punctuation">:</span> TDateTime<span class="token punctuation">)</span><span class="token punctuation">:</span> Boolean<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The method should return True if the ADate parameter is working days.
In the code of your program register your new object once for a working calendar using global procedure – <code v-pre>RegisterGlobalWorkingTimeCalendar</code> like this:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code>RegisterGlobalWorkingTimeCalendar<span class="token punctuation">(</span>TMyWorkingTimeCalendarEh<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Free<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This method registers a class that controls weekends and holidays that affect the highlight of days in the calendar and the <code v-pre>TPlannerCalendarPickerEh</code> component.</p>
<p>The method returns old object that controlled working days. Usually the old object is destroyed immediately.</p>
<ul>
<li>To customize the color display holidays and weekends use next global object and property.</li>
</ul>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> PlannerCalendarPickerDrawStyleEh<span class="token punctuation">.</span>HolidayBaseFontColor<span class="token punctuation">:</span> TColor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Do not show the timing tab in all drop-down calendars of the program.</li>
</ul>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> ToolCtrlsEh<span class="token punctuation">.</span>EhLibManager<span class="token punctuation">.</span>DateTimeCalendarPickerShowTimeSelectionPage<span class="token punctuation">:</span> Boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Use global <code v-pre>DateTimeCalendarPickerShowTimeSelectionPage</code> property to enable or disable display of timing tab in the all drop-down calendars of the program.</p>
<p>By default <code v-pre>DateTimeCalendarPickerShowTimeSelectionPage = true</code>.</p>
<ul>
<li>DropDown calendar also support Delphi VCL styles.</li>
</ul>
<p>Here is a screenshot from <code v-pre>PlannerEh.MainDemo</code> project that shows what properties you can use to customize DropDown calendar.</p>
<p>See the next Demo project to see how to work with DropDown Calendars:</p>
<p><code v-pre>&lt;EhLib Archive&gt;\Demos\CalendarPickerEh</code></p>
<p><code v-pre>unit Frame3_Options</code></p>
<p><code v-pre>unit Unit_ToolsDataModule</code></p>
<p>and</p>
<p><code v-pre>&lt;EhLib Archive&gt;\Demos\PlannerEh.MainDemo\</code></p>
<p><code v-pre>unit FrameOptions </code></p>
<p><code v-pre>unit Unit_ToolsDataModule</code></p>
</div></template>


