<template><div><h1 id="dropdownforms-custom-drop-down-windows" tabindex="-1"><a class="header-anchor" href="#dropdownforms-custom-drop-down-windows" aria-hidden="true">#</a> DropDownForms - custom drop-down windows</h1>
<p>Typical <code v-pre>DropDown</code> window - is a list that appears in the control <code v-pre>TComboBox</code> when you click on the edit button.
New technology allows you to create a customizable drop-down windows that appears when user click on the button (<code v-pre>EditButton</code>) in <code v-pre>TDBEditEh</code>, <code v-pre>TDBNumberEditEh</code>, <code v-pre>TInplaceEditor</code> in <code v-pre>DBGridEh</code> etc. components.</p>
<p><img src="@source/images/clip0005.png" alt="" loading="lazy"></p>
<p>Follow next  steps to create and use a DropDown Form:</p>
<ol>
<li>Create a <code v-pre>Form</code> that is inherited from <code v-pre>TCustomDropDownFormEh</code> class.
This can be done at <code v-pre>Design-Time</code> through the menu <code v-pre>File-New-Other</code> ...-Tab &quot;EhLib Forms&quot;-&quot;DropDown Form&quot; item.</li>
<li>Create and arrange controls on the <code v-pre>Form</code>.</li>
<li>Write <code v-pre>Form</code> event handlers:</li>
</ol>
<p><code v-pre>OnInitForm</code> event - to get the parameters passed from the text editor and initiate the form according to the received parameters.</p>
<p><code v-pre>OnReturnParams</code> event - to store the selected value from the Form to the internal structure for the subsequent transmission to a text editor.</p>
<ol start="4">
<li>It is necessary to assign the property <code v-pre>DropDownFormParams.DropDownForm</code> or <code v-pre>DropDownFormParams.DropDownFormClassName</code> in a text editor or edit button (<code v-pre>TDBEditEh</code>, <code v-pre>TDBNumberEditEh</code>, <code v-pre>DBGridEh.TColumnEh</code>), where are you going to call the <code v-pre>DropDown Form</code>, to indicate which <code v-pre>Form</code> should be called when a user clicks on the edit button.</li>
</ol>
<p>This is a sufficient minimum set of steps to make <code v-pre>DropDown Form</code> work at <code v-pre>Run-Time</code>.</p>
<p>By default, the text editor transmits the value as the first parameter in the Form and writes the resulting value of the first parameter transmitted from the <code v-pre>From</code> to itself text property.</p>
<p>Let’s look at the steps of creating a <code v-pre>DropDown Forms</code> with more details.</p>
<h3 id="step-1-creating-a-doprdown-form-class" tabindex="-1"><a class="header-anchor" href="#step-1-creating-a-doprdown-form-class" aria-hidden="true">#</a> Step 1 - Creating a DoprDown Form class.</h3>
<p>When creating a <code v-pre>Form</code> through menu menu <code v-pre>File-New-Other</code> ...-Tab &quot;EhLib Forms&quot;-Element &quot;DropDown Form&quot; a system call a library code that creates a new <code v-pre>Form</code> that is inherited from <code v-pre>CustomDropDownFormEh</code> class.</p>
<p><img src="@source/images/clip0006.png" alt="" loading="lazy"></p>
<h3 id="step-2-and-3-placing-a-components-on-the-form-and-writing-event-handlers" tabindex="-1"><a class="header-anchor" href="#step-2-and-3-placing-a-components-on-the-form-and-writing-event-handlers" aria-hidden="true">#</a> Step 2 and 3 - Placing a components on the form and writing event handlers.</h3>
<p>At <code v-pre>Run-Time</code>, working with a <code v-pre>Form</code> resembles working with a dialog box in a <code v-pre>ShowModal</code> mode. However, the system closes the <code v-pre>DropDown Form</code> when the form loses it active state. You can also close the form in the code indicating that the Form must be closed with a &quot;Send the selected value to the calling control&quot; indication. In this case the event in the edit control would be caused to store the selected value. You can also customize that the edit control assigns a selected value to itself automatically.
The Library calls an <code v-pre>TCustomDropDownFormEh.OnInitForm</code> event before showing the Form.
It is necessary to initialize the <code v-pre>Form</code> before displaying and use the transferred data from the caller control.</p>
<p>Here is an example of event handler for <code v-pre>OnInitForm</code> event:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TDropDownMemoEdit1<span class="token punctuation">.</span>CustomDropDownFormEhInitForm<span class="token punctuation">(</span>
  Sender<span class="token punctuation">:</span> TCustomDropDownFormEh<span class="token punctuation">;</span> DynParams<span class="token punctuation">:</span> TDynVarsEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> DynParams<span class="token punctuation">.</span>Count <span class="token operator">>=</span> <span class="token number">1</span> <span class="token keyword">then</span>
    Memo1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Text <span class="token operator">:=</span> DynParams<span class="token punctuation">.</span>Items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>AsString<span class="token punctuation">;</span>

  sbOk<span class="token punctuation">.</span>Enabled <span class="token operator">:=</span> <span class="token operator">not</span> ReadOnly<span class="token punctuation">;</span>
  Memo1<span class="token punctuation">.</span>ReadOnly <span class="token operator">:=</span> ReadOnly<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above code the check is performed, whether any value was transferred from the <code v-pre>Control</code> through the <code v-pre>DynParams</code> parameter. If it was transferred, the value is assigned to a <code v-pre>Memo1</code>.</p>
<p><code v-pre>DropDown Form</code> may be in of <code v-pre>ReadOnly</code>.  This property is assigned by the transmission control depending of <code v-pre>Control.Field.ReadOnly</code> value. In the above code, we adjust components of the form according to the state <code v-pre>ReadOnly</code>. Consider that a <code v-pre>ReadOnly</code> form will not return any value, and will only be opened to view the data.</p>
<h3 id="closing-the-form-and-transferring-the-selected-values" tabindex="-1"><a class="header-anchor" href="#closing-the-form-and-transferring-the-selected-values" aria-hidden="true">#</a> Closing the Form and transferring the selected values</h3>
<p>Assign <code v-pre>ModalResult</code> property by <code v-pre>mrOk</code> to close the Form with the &quot;Transfer selected value&quot; indication.
Below is a code sample that closes the Form:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TDropDownMemoEdit<span class="token punctuation">.</span>sbOkClick<span class="token punctuation">(</span>Sender<span class="token punctuation">:</span> TObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>  
  ModalResult <span class="token operator">:=</span> mrOk<span class="token punctuation">;</span>
  Close<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The program will close the Form and call <code v-pre>OnReturnParams</code> event to transfer the selected values in the internal variables.
By default, the system offers to write the selected values in the <code v-pre>DynVars</code> array that is passed as a parameter.</p>
<p>Below is an example of an <code v-pre>OnReturnParams</code> event handler:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">procedure</span> TDropDownMemoEdit1<span class="token punctuation">.</span>CustomDropDownFormEhReturnParams<span class="token punctuation">(</span>
  Sender<span class="token punctuation">:</span> TCustomDropDownFormEh<span class="token punctuation">;</span> DynParams<span class="token punctuation">:</span> TDynVarsEh<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  DynParams<span class="token punctuation">.</span>Items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>AsString <span class="token operator">:=</span> Memo1<span class="token punctuation">.</span>Lines<span class="token punctuation">.</span>Text<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In our case, we write the text from a <code v-pre>TMemo</code> to the first item of a <code v-pre>DynParams</code> collection. The collection will already contain an element, as we have already passed it in the Form using the same collection (This part will be discussed later in the part of customizing the edit control).</p>
<h3 id="tcustomdropdownformeh-formelements-property" tabindex="-1"><a class="header-anchor" href="#tcustomdropdownformeh-formelements-property" aria-hidden="true">#</a> TCustomDropDownFormEh.FormElements property</h3>
<p><code v-pre>TCustomDropDownFormEh</code> class has a property to define of displaying additional special controls on the <code v-pre>Form</code>. Use <code v-pre>FormElements</code> property to specify which additional items have to be placed on the Form in the Run-Time:</p>
<p><code v-pre>ddfeLeftGripEh</code> – SizeGrip control in the left corner. This element is used to change a window size.</p>
<p><code v-pre>ddfeRightGripEh</code> – SizeGrip element in the right corner of the window.</p>
<p><code v-pre>ddfeCloseButtonEh</code> – Close button.</p>
<p><code v-pre>ddfeSizingBarEh</code> – The bar at the bottom of the window to change the height of the window by mouse.</p>
<p><img src="@source/images/clip0007.png" alt="" loading="lazy"></p>
<h3 id="step-4-–-customizing-the-calling-controls" tabindex="-1"><a class="header-anchor" href="#step-4-–-customizing-the-calling-controls" aria-hidden="true">#</a> Step 4 – Customizing the calling controls.</h3>
<p>There are a <code v-pre>DropDownFormParams</code> property in the classes that work with text editors, such as <code v-pre>TColumnEh</code>, <code v-pre>TDBEditEh</code> etc.,. This property contains sub-properties to configure a <code v-pre>DropDown Form</code>: to define which form must be shown, how to pass and get parameters to/form the From.</p>
<p>Use the property <code v-pre>DropDownFormParams.DropDownForm</code> or <code v-pre>DropDownFormParams</code>. <code v-pre>DropDownFormClassName</code> to specify the name of the form to be displayed when a user clicks on the <code v-pre>EditButton</code>.</p>
<p>If <code v-pre>DropDownFormParams.DropDownForm</code> property is assigned then the <code v-pre>Form</code> must be created in advance and assigned to a global variable <code v-pre>&lt;DropDownFormName: TDropDownFormName&gt;</code>, which is created by the project code when creating forms. This creation and assignment occurs automatically when the form is in the list of «Auto-create forms» (see Project properties).</p>
<p>If <code v-pre>DropDownFormParams.DropDownFormClassName</code> property is assigned then the program will create a form just before showing and destroy it after the Form is closed. To allow the program to find the form designer by the name of the class, form class must be registered using procedure <code v-pre>Classes.RegisterClass</code>.</p>
<p>This can be done in the initialization part of DropDown Form unit.
Below is an example of registering a class:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">unit</span> MyDropDownFormUnit1<span class="token punctuation">;</span>
…
<span class="token keyword">interface</span>
…
<span class="token keyword">initialization</span>
  RegisterClass<span class="token punctuation">(</span>TMyDropDownForm1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There is another way to create a DropDown Form. Form is created before the first display and lives up to the end of the life of the program.
To implement this method follow the next steps:</p>
<ul>
<li>Assign the <code v-pre>DropDownFormParams.DropDownFormClassName</code> property</li>
<li>Register the class of the Form using <code v-pre>RegisterClass</code> (TMyDropDownForm1) code.</li>
<li>Override the virtual <code v-pre>class function TCustomDropDownFormEh.GetGlobalRef: TCustomDropDownFormEh</code> – to create Form on the first call and assigns it to a global variable.</li>
</ul>
<p>Below is the sample of code that implements this functionality:</p>
<div class="language-pascal line-numbers-mode" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token keyword">type</span>
  TDropDownMemoEdit3 <span class="token operator">=</span> <span class="token keyword">class</span><span class="token punctuation">(</span>TCustomDropDownFormEh<span class="token punctuation">)</span>
…
  <span class="token keyword">public</span>
    <span class="token keyword">class</span> <span class="token keyword">function</span> GetGlobalRef<span class="token punctuation">:</span> TCustomDropDownFormEh<span class="token punctuation">;</span> <span class="token keyword">override</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>
  DropDownMemoEdit3<span class="token punctuation">:</span> TDropDownMemoEdit3<span class="token punctuation">;</span>

<span class="token keyword">implementation</span>
…
<span class="token keyword">class</span> <span class="token keyword">function</span> TDropDownMemoEdit3<span class="token punctuation">.</span>GetGlobalRef<span class="token punctuation">:</span> TCustomDropDownFormEh<span class="token punctuation">;</span>
<span class="token keyword">begin</span>
  <span class="token keyword">if</span> DropDownMemoEdit3 <span class="token operator">=</span> <span class="token keyword">nil</span> <span class="token keyword">then</span>
    Application<span class="token punctuation">.</span>CreateForm<span class="token punctuation">(</span>TDropDownMemoEdit3<span class="token punctuation">,</span> DropDownMemoEdit3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">Result</span> <span class="token operator">:=</span> DropDownMemoEdit3<span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>
…
<span class="token keyword">end</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step-4-1-assigning-parameters-from-edit-control-the-dropdown-form" tabindex="-1"><a class="header-anchor" href="#step-4-1-assigning-parameters-from-edit-control-the-dropdown-form" aria-hidden="true">#</a> Step 4.1 Assigning parameters from edit control the DropDown Form.</h3>
<p>Use <code v-pre>DropDownFormParams.PassParams</code> property to specify which field values must be passed in the drop-down Form. The property can hold one of the next values:</p>
<p><code v-pre>pspByFieldNamesEh</code> - Pass the value of the fields specified in the property DropDownFormParams. PassFieldNames</p>
<p><code v-pre>pspFieldValueEh</code> - Pass the current value of the edit control.</p>
<p><code v-pre>pspRecordValuesEh</code> - Pass the value of all the fields of the current DataSet record.</p>
<p>In the drop-down form, you can read the transferred value form DynParams collection.</p>
<p>DropDownFormParams property contains the following sub-properties:</p>
<p>Property Name	Property Type	Description
<code v-pre>DropDownForm: 	TCustomForm</code>	Reference to a DropDown Form.</p>
<p><code v-pre>DropDownFormClassName: 	String</code>	Reference to a class that implements DropDown Form.</p>
<p><code v-pre>Align: 	TDropDownAlign</code>	Alignment of the DropDown Form relative to the edit control.</p>
<p><code v-pre>PassParams: 	TDropDownPassParamsEh</code>	Way of passing the parameters.</p>
<p><code v-pre>PassFieldNames: 	String</code>	The name of the DataSet fields, the value of which should be passed in the Form.</p>
<p><code v-pre>AssignBackFieldNames: 	String</code>	The name of the DataSet field, the value of which assigned to the values received from the Form.</p>
<p><code v-pre>FormWidth: 	Integer</code>	Width of the Form. The Form width is written to the property when the Form is closed.</p>
<p><code v-pre>FormHeight: 	Integer</code>	The height of the form. The Form height is written to the property when the Form is closed.</p>
<p><code v-pre>SaveFormSize: 	Boolean</code>	The property determines whether to keep the size of the form in the FormWidth and FormHeight properties.</p>
<h3 id="example-of-using-dropdown-forms" tabindex="-1"><a class="header-anchor" href="#example-of-using-dropdown-forms" aria-hidden="true">#</a> Example of using DropDown forms:</h3>
<p>Examples of using and working with DropDownForms see at the Demo Project:
<code v-pre>&lt;EhLib Archive&gt;\Demos\DropDownForm\Project1.dpr</code></p>
<p>compiled project:
<code v-pre>&lt;EhLib Archive&gt;\Demos\Bin\DropDownForm.Exe</code></p>
<p>New properties in classes of the library for working with DropDown Forms:
New properties to customize the display drop-down forms appeared in the next classes:</p>
<p>(For DBGridEh)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TColumnEh.DropDownFormParams
TColumnEh.EditButtons[i].DropDownFormParams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(For DBVertGridEh)</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TFieldRowEh.DropDownFormParams
TFieldRowEh.EditButtons[i].DropDownFormParams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>TDBEditEh.EditButton.DropDownFormParams
TDBEditEh.EditButtons[i].DropDownFormParams
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In <code v-pre>EditButtons</code> for <code v-pre>TDBNumberEditEh</code>, <code v-pre>TDBDateTimeEditEh</code>, <code v-pre>TDBComboBoxEh</code>, <code v-pre>TDBLookupComboBoxEh</code> controls.</p>
</div></template>


