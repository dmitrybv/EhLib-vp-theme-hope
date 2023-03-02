import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as a,f as s}from"./app.ac77cf73.js";const n={},o=s(`<h1 id="saving-restore-position-of-the-current-row-in-the-grid-after-the-mass-data-changes-in-dataset" tabindex="-1"><a class="header-anchor" href="#saving-restore-position-of-the-current-row-in-the-grid-after-the-mass-data-changes-in-dataset" aria-hidden="true">#</a> Saving \\ Restore position of the current row in the grid after the mass data changes in DataSet</h1><p>When data changes in the <code>DataSet</code> using the methods <code>DataSet.DisableControls</code> ... <code>DataSet.EnableControls</code> current position in the grid may shift, causing discomfort to the user. To avoid shifting position use methods</p><div class="language-pascal" data-ext="pascal"><pre class="language-pascal"><code><span class="token keyword">procedure</span> TCustomDBGridEh<span class="token punctuation">.</span>SaveVertPos<span class="token punctuation">(</span>KeyFieldNames<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">procedure</span> TCustomDBGridEh<span class="token punctuation">.</span>RestoreVertPos<span class="token punctuation">(</span>KeyFieldNames<span class="token punctuation">:</span> <span class="token keyword">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>to save the position of the grid before updating and restoring the position of the grid after the update. The <code>KeyFieldNames</code> parameter must contain key field name (or a list of fields separated by semicolons). The value of key fields will be used to restore the position when the <code>DataSet</code> reopen during processing.</p>`,4),i=[o];function r(c,p){return t(),a("div",null,i)}const u=e(n,[["render",r],["__file","48-saving-restore-grid-postion.html.vue"]]);export{u as default};