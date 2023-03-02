<template><div><h1 id="components-for-planning-and-visual-interactive-event-management" tabindex="-1"><a class="header-anchor" href="#components-for-planning-and-visual-interactive-event-management" aria-hidden="true">#</a> Components for planning and visual interactive event management</h1>
<p>The library contains a set of components for planning and visual interactive control events tied to a specific period of time.</p>
<h5 id="component-tplannerdatasourceeh" tabindex="-1"><a class="header-anchor" href="#component-tplannerdatasourceeh" aria-hidden="true">#</a> Component TPlannerDataSourceEh</h5>
<p>TPlannerDataSourceEh component is used for storing TPlannerDataItemEh objects-events.</p>
<h5 id="component-tplannercontroleh" tabindex="-1"><a class="header-anchor" href="#component-tplannercontroleh" aria-hidden="true">#</a> Component TPlannerControlEh.</h5>
<p>The visual component-container TPlannerControlEh contains a set of PlannerView visual components.
Each of the PlannerView components displays period of time and events on it in a specific format.
On screenshot on the left side TPlannerControlEh component contains PlannerView of TPlannerDayViewEh type, which displays a set of events for one day.</p>
<p><img src="@source/images/clip0068.png" alt="" loading="lazy"></p>
<p>In current version PlannerView elements can have one of the following types:</p>
<ul>
<li><code v-pre>TPlannerDayViewEh</code> 	Displays an interval of time one day long and events fall into it.</li>
<li><code v-pre>TPlannerWeekViewEh</code> 	Displays an interval of time one week long and events fall into it.</li>
<li><code v-pre>TPlannerMonthViewEh</code> 	Displays an interval of time one month long and events fall into it.</li>
<li><code v-pre>TPlannerVertDayslineViewEh</code>	Displays an interval of time of different length in vertical orientation with cells length of one day.</li>
<li><code v-pre>TPlannerVertHourslineViewEh</code>	Displays an interval of time of different length in vertical orientation with cells length of one hour.</li>
<li><code v-pre>TPlannerHorzHourslineViewEh</code>	Displays an interval of time of different length in horizontal orientation with cells length of one day.</li>
<li><code v-pre>TPlannerHorzDayslineViewEh</code>	Displays an interval of time of different length in horizontal orientation with cells length of one hour.</li>
<li><code v-pre>TPlannerHorzYearViewEh</code>	Displays a one-year time long in horizontal orientation with one-day cells.</li>
</ul>
<p><code v-pre>TPlannerControlEh</code> component contains PlannerView components by analogy as a <code v-pre>PageControl</code> standard component contains a set of TabSheets bookmarks.</p>
<p>Time divider of 5, 6, 10, 15, 30 and 60 minutes in <code v-pre>TPlannerDayViewEh</code> and  <code v-pre>TPlannerWeekViewEh</code> components</p>
<p>In <code v-pre>TPlannerDayViewEh</code> and <code v-pre>TPlannerWeekViewEh</code> controls a <code v-pre>BarTimeInterval</code> property was added. The property have <code v-pre>TPlannerBarTimeIntervalEh</code> type.</p>
<p><code v-pre>TPlannerBarTimeIntervalEh = (pbti5MinEh, pbti6MinEh, pbti10MinEh, pbti15MinEh, pbti30MinEh, pbti60MinEh);</code></p>
<p>The property specifies the length (In minutes) of one time data row in the PlannerView.</p>
<h3 id="using-the-context-menu-in-the-components-plannerview" tabindex="-1"><a class="header-anchor" href="#using-the-context-menu-in-the-components-plannerview" aria-hidden="true">#</a> Using the context menu in the components PlannerView</h3>
<p>All components such as PlannerView have <code v-pre>PopupMenu</code> property and <code v-pre>OnContextPopup</code> event.
Context Menu is  defined by <code v-pre>PlannerView.PopupMenu</code> property. <code v-pre>PopupMenu</code> is displayed when user right-click on any cell of <code v-pre>PlannerView</code> control.</p>
<p>In addition to the functional of component thera are properties and events to display the context menu when the user clicked the right mouse button over the SpanItem element.</p>
<p>In this case, use <code v-pre>PlannerControl.TimeSpanParams.PopupMenu</code> property and <code v-pre>PlannerControl.OnPlannerSpanItemContextPopup</code> event.</p>
<h3 id="list-of-plannerview-events" tabindex="-1"><a class="header-anchor" href="#list-of-plannerview-events" aria-hidden="true">#</a> List of PlannerView events:</h3>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnContextPopup<span class="token punctuation">:</span> TContextPopupEvent<span class="token punctuation">;</span>

TContextPopupEvent <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">;</span> 
  MousePos<span class="token punctuation">:</span> TPoint<span class="token punctuation">;</span> <span class="token keyword">var</span> Handled<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><dd>
<p>The event is called before context Menu is shown.
In the event you can set up the context menu items before displaying.
In the event you can display the context menu in your code and set the Handled parameter to True.
For example of event handle, see the demo project
<code v-pre>&lt;EhLib archive&gt;\Demos\PlannerEh.MainDemo\</code>, in FrameOne.pas module.</p>
</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnDrawCell<span class="token punctuation">:</span>  TPlannerViewDrawCellEventEh<span class="token punctuation">;</span>

TPlannerViewDrawCellEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span> <span class="token punctuation">(</span>PlannerView<span class="token punctuation">:</span> TCustomPlannerViewEh<span class="token punctuation">;</span>
    ACol<span class="token punctuation">,</span> ARow<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span> ARect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span> State<span class="token punctuation">:</span> TGridDrawState<span class="token punctuation">;</span>
    CellType<span class="token punctuation">:</span> TPlannerViewCellTypeEh<span class="token punctuation">;</span> ALocalCol<span class="token punctuation">,</span> ALocalRow<span class="token punctuation">:</span> Integer<span class="token punctuation">;</span>
    ADrawCellArgs<span class="token punctuation">:</span> TPlannerViewCellDrawArgsEh<span class="token punctuation">;</span> <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre></div><dd>
  Event is called before rendering PlannerView cell.
  In the event you can change the cell drawing parameters by setting new values in ADrawCellArgs parameter.
  In the event you can draw the contents of the cell using the methods of PlannerView.Canvas class and set the Processed to True.
</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnReadPlannerDataItem<span class="token punctuation">:</span> TPlannerViewReadDataItemEventEh   

TPlannerViewReadDataItemEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span> <span class="token punctuation">(</span>PlannerControl<span class="token punctuation">:</span> TPlannerControlEh<span class="token punctuation">;</span>
PlannerView<span class="token punctuation">:</span> TCustomPlannerViewEh<span class="token punctuation">;</span> 
DataItem<span class="token punctuation">:</span> TPlannerDataItemEh<span class="token punctuation">;</span> 
<span class="token keyword">var</span> ReadDataItem<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre></div><dd>
  This event is fired when reading data of TPlannerDataItemEh from DataSoruce to PlannerView.
  In the event handler you can determine whether you want to read a particular item / event from PlannerDataSourceEh.
  Set the value to False to prevent ReadDataItem from reading.
</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnSelectionChanged<span class="token punctuation">:</span> TNotifyEvent<span class="token punctuation">;</span> 
</code></pre></div><dd>The event is fired when the current selected TPlannerDataItemEh element is changed. In the event you can update the status of the buttons or menu items that dependent on the selected item in TPlannerDataItemEh PlannerView.</dd>
<br>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">property</span> OnSpanItemHintShow<span class="token punctuation">:</span> TPlannerViewSpanItemHintShowEventEh

  TPlannerViewSpanItemHintShowEventEh <span class="token operator">=</span> <span class="token keyword">procedure</span><span class="token punctuation">(</span>PlannerControl<span class="token punctuation">:</span> TPlannerControlEh<span class="token punctuation">;</span>
    PlannerView<span class="token punctuation">:</span> TCustomPlannerViewEh<span class="token punctuation">;</span> 
    CursorPos<span class="token punctuation">:</span> TPoint<span class="token punctuation">;</span> SpanRect<span class="token punctuation">:</span> TRect<span class="token punctuation">;</span>
    InSpanCursorPos<span class="token punctuation">:</span> TPoint<span class="token punctuation">;</span> 
    SpanItem<span class="token punctuation">:</span> TTimeSpanDisplayItemEh<span class="token punctuation">;</span>
    Params<span class="token punctuation">:</span> TPlannerViewSpanHintParamsEh<span class="token punctuation">;</span> 
    <span class="token keyword">var</span> Processed<span class="token punctuation">:</span> Boolean<span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token keyword">object</span><span class="token punctuation">;</span>
</code></pre></div><p>Write the event handler to change the text, font or background in the window display tips.
This event is fired when prompted to SpanItem element.
For more information about the event, see the section – «Show Hint Winow for planner Items».</p>
<h3 id="component-tplannercalendarpickereh" tabindex="-1"><a class="header-anchor" href="#component-tplannercalendarpickereh" aria-hidden="true">#</a> Component TPlannerCalendarPickerEh</h3>
<p>The visual component- calendar is designed to navigate through days of a month.
On select a date in the calendar, the component automatically sets the current day in tied <code v-pre>TPlannerControlEh</code> component. For bundles of two components using the property type <code v-pre>TPlannerCalendarPickerEh.PlannerControl</code> TPlannerControlEh.</p>
<p>For linking two components use  <code v-pre>TPlannerCalendarPickerEh.PlannerControl</code> property of <code v-pre>TPlannerControlEh</code> type.</p>
<p>On changing the current period directly in <code v-pre>TPlannerControlEh</code> or through <code v-pre>TPlannerCalendarPickerEh</code>, component <code v-pre>PlannerControl</code> each time refers to the <code v-pre>TPlannerDataSourceEh</code> tied component to get a list of <code v-pre>TPlannerDataItemEh</code> objects-events for the required period.</p>
<p>Communication of <code v-pre>PlannerControl</code> and <code v-pre>PlannerDataSource</code> components performs through <code v-pre>TPlannerControlEh.TimePlanSource</code> property of <code v-pre>TPlannerDataSourceEh</code> type.</p>
<p><img src="@source/images/clip0070.png" alt="" loading="lazy"></p>
<p><code v-pre>TPlannerCalendarPickerEh</code> have the has the following features:</p>
<ul>
<li>Allows to highlight the holidays and weekends.</li>
<li>Allows to highlight current day.</li>
<li>Allows to display a link to today.</li>
</ul>
<h3 id="loading-elements-events-from-db-or-another-storage" tabindex="-1"><a class="header-anchor" href="#loading-elements-events-from-db-or-another-storage" aria-hidden="true">#</a> Loading elements-events from DB or another storage.</h3>
<p>Data about events is loaded into <code v-pre>TPlannerDataSourceEh</code> in the program code similar to the following example:</p>
<p>PlanItem := PlannerDataSourceEh1.NewItem();
PlanItem.ItemID := MyDataSet1['Id'];
PlanItem.StartTime := MyDataSet1['StartTime'];
...
PlannerDataSource.FetchTimePlanItem(PlanItem);</p>
<p>You are reading event data from the database into an internal <code v-pre>DataSet</code>.
In the cycle by using a <code v-pre>NewItem.TPlannerDataItemEh</code> method the plan element is created.
Fill properties of element.
Element is recorded in an event collection by <code v-pre>FetchTimePlanItem</code> method.</p>
<p>Another way of data loading – through binding of DataSet and fields of DataSet.
For binding setup use sub-properties of <code v-pre>TPlannerDataSourceEh.ItemSourceParams</code> property.</p>
<p>Set the <code v-pre>TPlannerDataSourceEh.ItemSourceParams.DataSet</code> property to <code v-pre>DataSet</code> which should be used to load data from.
Fill <code v-pre>TPlannerDataSourceEh.ItemSourceParams.FieldsMap</code> collection with <code v-pre>TItemSourceFieldsMapItemEh</code> elements to set link between DataSet field and property of TPlannerDataItemEh element-event.</p>
<p><code v-pre>TPlannerDataItemEh</code> class has the following properties:</p>
<p><code v-pre>property Title: String;</code></p>
<dd>The property specifies the event title or plan element.</dd>
<br>
<p><code v-pre>property Body: String;</code></p>
<dd>The property specifies the detailed description of the event or plan element.</dd>
<br>
<p><code v-pre>property StartTime: TDateTime;</code></p>
<dd>The property sets the commencement of the event.</dd>
<br>
<p><code v-pre>property EndTime: TDateTime;</code></p>
<dd>The property sets the expiration date of the event.</dd>
<br>
<p><code v-pre>property AllDay: Boolean;</code></p>
<dd>Property indicates that the event lasts all day.</dd>
<br>
<p><code v-pre>property ResourceID: Variant;</code></p>
<dd>The property specifies the link to the resource is assigned to the event. List PlannerDataSourceEh.Resources resources stored in the collection. Before downloading the event are encouraged to download a list of resources from your database similar to the onload event.</dd>
<br>
<p><code v-pre>property ItemID: Variant;</code></p>
<dd>Event ID. The identifier is proposed to use a unique key in the table that you keep a list of events on the side of the database.</dd>
<br>
<p><code v-pre>property FillColor: TColor;</code></p>
<dd>The color of the event. You can set the default color to Default.</dd>
<br>
<p><code v-pre>property ReadOnly: Boolean;</code></p>
<dd>The property specifies that the user is not allowed to modify the contents or move the timeline event.</dd>
<br>
<h3 id="uploading-of-changed-elements-to-database" tabindex="-1"><a class="header-anchor" href="#uploading-of-changed-elements-to-database" aria-hidden="true">#</a> Uploading of changed elements to DataBase.</h3>
<p>On any change of an element of <code v-pre>PlannerDataItem</code> event <code v-pre>TPlannerDataSourceEh</code> component calls <code v-pre>OnApplyUpdateToDataStorage</code> event where it is necessary to write a code for transfering properties of changed <code v-pre>PlannerDataItem</code> element to the database.</p>
<p>The event code can look as follows:</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code>TimePlanSource<span class="token punctuation">:</span> TPlannerDataSourceEh<span class="token punctuation">;</span> PlanItem<span class="token punctuation">:</span> TPlannerDataItemEh<span class="token punctuation">;</span>
  UpdateStatus<span class="token punctuation">:</span> TUpdateStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> UpdateStatus <span class="token operator">=</span> usModified <span class="token keyword">then</span>
  <span class="token keyword">begin</span>
    <span class="token keyword">if</span> mtPlannerData<span class="token punctuation">.</span>Locate<span class="token punctuation">(</span><span class="token string">'Id'</span><span class="token punctuation">,</span> PlanItem<span class="token punctuation">.</span>ItemID<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    <span class="token keyword">begin</span>
      mtPlannerData<span class="token punctuation">.</span>Edit<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'StartTime'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>StartTime<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'EndTime'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>EndTime<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'Title'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>Title<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'Body'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>Body<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'AllDay'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>AllDay<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">[</span><span class="token string">'ResourceID'</span><span class="token punctuation">]</span> <span class="token operator">:=</span> PlanItem<span class="token punctuation">.</span>ResourceID<span class="token punctuation">;</span>
      mtPlannerData<span class="token punctuation">.</span>Post<span class="token punctuation">;</span>
    <span class="token keyword">end</span> <span class="token keyword">else</span>
      <span class="token keyword">raise</span> Exception<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token string">'Can'' locate record with "Id"='</span> <span class="token operator">+</span> 
                             VarToStrDef<span class="token punctuation">(</span>PlanItem<span class="token punctuation">.</span>ItemID<span class="token punctuation">,</span> <span class="token string">'&lt;Null>'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>In this example changed data in <code v-pre>PlanItem</code> event is transferred to the TMemTableEh (TDataSet) - mtPlannerData.</p>
<h3 id="resources-and-events" tabindex="-1"><a class="header-anchor" href="#resources-and-events" aria-hidden="true">#</a> Resources and events.</h3>
<p><code v-pre>TPlannerDataSourceEh</code> component also contains the concept of resources.
Each event can be linked to one of the resources from the collection of resources.
If the list of events is the list of tasks which should be performed by a person, then list of resources is list of people one of which can be assigned to perform a specific task.</p>
<p>To access the elements of the collection use a sub-properties of <code v-pre>TPlannerDataSourceEh.Resources</code> property.</p>
<p>Typically, a collection of resources is filled before completing the collection of <code v-pre>PlanItem</code> events.</p>
<p>Filling the collection of resources is done in the code like this</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">with</span> TimePlanSourceEh1<span class="token punctuation">.</span>Resources<span class="token punctuation">.</span>Add <span class="token keyword">do</span>
<span class="token keyword">begin</span>
  <span class="token keyword">Name</span> <span class="token operator">:=</span> mtResource<span class="token punctuation">.</span>FieldByName<span class="token punctuation">(</span><span class="token string">'Name'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AsString<span class="token punctuation">;</span>
  ResourceID <span class="token operator">:=</span> i<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span> 
</code></pre></div><p>See demo project in the folder <code v-pre>&lt;EhLib Archive&gt;/DEMOS/PlannerEh.MainDemo</code></p>
</div></template>


