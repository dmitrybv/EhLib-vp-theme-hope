import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as n,f as t}from"./app.ac77cf73.js";const a={},s=t(`<h1 id="tpropstorageeh-component" tabindex="-1"><a class="header-anchor" href="#tpropstorageeh-component" aria-hidden="true">#</a> TPropStorageEh component</h1><p><code>TPropStorageEh</code> and <code>TPropStorageManagerEh</code> componetns realize technology to store components properties to/from settings storage such as Ini files, Registry etc.</p><p>Current version of library has components to write/read in/from <code>Ini</code> files and <code>Windows Registry</code>. Base component of this technology is the <code>TPropStorageEh</code>. Place this component in the form, component properties of which you want to save in the storage. Double click on the component during the design-time to open properties storage editor window. In the tree of properties you can select required properties for storing. Properties list is a list of all published properties or declared in <code>DefineProperty</code> function of components with the exclusion of <code>TCollection</code> class properties. Besides the list of all elements of the collection, the tree of properties will contain <code>\\&lt;ForAllItems\\&gt;</code> subproperty. When you select <code>sub-property</code> in the given branch, the component will save corresponding sub-property for each element of the collection.</p><p>Component <code>TPropStorageEh</code> can write and read property values in the stream. To redirect flow in the storage it is necessary to execute one of the following actions:</p><ol><li><p>Place component that is inherited from <code>TPropStorageManagerEh</code> on the form. In this version there are two such components. These are <code>TIniPropStorageManEh</code> and <code>TRegPropStorageManEh</code>. Customize properties of this component and assign component to <code>TPropStorageEh.StorageManager</code> property.</p></li><li><p>Or you can only once write code to register global component - <code>DefaultPropStorageManager</code>. All TPropStorageEh components, in which <code>StorageManager</code> property is not assigned, will use <code>DefaultPropStorageManager</code> manager for redirecting flow of the property values to the storage.</p></li></ol><p>Code to register global store manager can look like this:</p><p>MainUnit.Pas</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>

<span class="token keyword">var</span>
  IniPropStorageMan<span class="token punctuation">:</span> TIniPropStorageManEh<span class="token punctuation">;</span>

<span class="token keyword">initialization</span>

  IniPropStorageMan <span class="token operator">:=</span> TIniPropStorageManEh<span class="token punctuation">.</span>Create<span class="token punctuation">(</span><span class="token keyword">nil</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  IniPropStorageMan<span class="token punctuation">.</span>IniFileName <span class="token operator">:=</span> <span class="token string">&#39;MyIniFile.Ini&#39;</span><span class="token punctuation">;</span>
  SetDefaultPropStorageManager<span class="token punctuation">(</span>IniPropStorageMan<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">.</span>
</code></pre></div>`,8),r=[s];function p(c,i){return o(),n("div",null,r)}const h=e(a,[["render",p],["__file","25-using-tpropstorageeh-components.html.vue"]]);export{h as default};
