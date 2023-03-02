import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as t,f as c}from"./app.ac77cf73.js";const i="/online-help-vuepress-hope/assets/DBGridEhDesignTime-01.fc7d222f.png",d="/online-help-vuepress-hope/assets/DBGridEhDesignTime-02.3a4ec736.png",a={},n=c('<h1 id="working-with-tdbgrideh-at-design-time" tabindex="-1"><a class="header-anchor" href="#working-with-tdbgrideh-at-design-time" aria-hidden="true">#</a> Working with TDBGridEh at design-time</h1><p><img src="'+i+'" alt="" loading="lazy"></p><p><code>TDBGridEh</code> contains rows and columns. Every row is a record in <code>TDataSet</code>. Every column is a field in <code>TDataSet</code>. Columns can be dynamic or static. Dynamic columns are recreated every time when the state of DataSet is changed. <code>State</code> of <code>DataSet</code> can be changed in several cases. It is changed when, for example, <code>DataSet</code> is reopened. When column is recreated, values of column properties are reset to their default values. It is useful to use dynamic columns when the list of fields of <code>DataSet</code> is not known in advance. In the mode of static columns grid itself never recreates columns. At design-time to create static columns you need to double-click on the grid. The <code>Columns Editor</code> window will be open. Press <code>Add all fields</code> in this window. Grid will create static column for every <code>DataSet</code> field. <br><br></p><p><img src="'+d+'" alt="" loading="lazy"></p><p>To customize properties of column you need to select its name in the The <code>Columns Editor</code> window. You can also select column in <code>Object Inspector</code> by clicking column title in the grid. If grid is connected to <code>DataSource</code> and <code>DataSource</code> is placed on the same Form as grid, then icon of <code>DataSource</code> will be shown in the bottom right corner of the Grid. You can click on the <code>DataSource</code> icon to select <code>DataSource</code> in <code>Object Inspector</code>. In same manner grid can show <code>DataSet</code>. If a <code>DataSet</code> is a <code>TMemTableEh</code> then grid also can show <code>TDataDriver</code> and <code>DataSet</code> which is connected to <code>DataDriver</code> as a <code>ProviderDataSet</code>.</p>',5),s=[n];function r(l,h){return o(),t("div",null,s)}const g=e(a,[["render",r],["__file","03-working-with-tdbgrideh-at-design-time.html.vue"]]);export{g as default};