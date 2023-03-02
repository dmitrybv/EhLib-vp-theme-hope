<template><div><h1 id="tpropstorageeh-component" tabindex="-1"><a class="header-anchor" href="#tpropstorageeh-component" aria-hidden="true">#</a> TPropStorageEh component</h1>
<p><code v-pre>TPropStorageEh</code> and <code v-pre>TPropStorageManagerEh</code> componetns realize technology to store components properties to/from settings storage such as Ini files, Registry etc.</p>
<p>Current version of library has components to write/read in/from <code v-pre>Ini</code> files and <code v-pre>Windows Registry</code>. Base component of this technology is the <code v-pre>TPropStorageEh</code>. Place this component in the form, component properties of which you want to save in the storage. Double click on the component  during the design-time to open properties storage editor window. In the tree of properties you can select required properties for storing. Properties list is a list of all published properties or declared in <code v-pre>DefineProperty</code> function of components with the exclusion of <code v-pre>TCollection</code> class properties.  Besides the list of all elements of the collection, the tree of properties will contain <code v-pre>\&lt;ForAllItems\&gt;</code> subproperty. When you select <code v-pre>sub-property</code> in the given branch, the component will save corresponding sub-property for each element of the collection.</p>
<p>Component <code v-pre>TPropStorageEh</code> can write and read property values in the stream. To redirect flow in the storage it is necessary to execute one of the following actions:</p>
<ol>
<li>
<p>Place component that is inherited from <code v-pre>TPropStorageManagerEh</code> on the form.
In this version there are two such components. These are <code v-pre>TIniPropStorageManEh</code> and <code v-pre>TRegPropStorageManEh</code>.
Customize properties of this component and assign component to <code v-pre>TPropStorageEh.StorageManager</code> property.</p>
</li>
<li>
<p>Or you can only once write code to register global component - <code v-pre>DefaultPropStorageManager</code>. All TPropStorageEh components, in which <code v-pre>StorageManager</code> property is not assigned, will use <code v-pre>DefaultPropStorageManager</code> manager for redirecting flow of the property values to the storage.</p>
</li>
</ol>
<p>Code to register global store manager can look like this:</p>
<p>MainUnit.Pas</p>
<div class="language-pascal" data-ext="pascal"><pre v-pre class="language-pascal"><code><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>

<span class="token keyword">var</span>
  IniPropStorageMan<span class="token punctuation">:</span> TIniPropStorageManEh<span class="token punctuation">;</span>

<span class="token keyword">initialization</span>

  IniPropStorageMan <span class="token operator">:=</span> TIniPropStorageManEh<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  IniPropStorageMan<span class="token punctuation">.</span>IniFileName <span class="token operator">:=</span> <span class="token string">'MyIniFile.Ini'</span><span class="token punctuation">;</span>
  SetDefaultPropStorageManager<span class="token punctuation">(</span>IniPropStorageMan<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">.</span>
</code></pre></div></div></template>


