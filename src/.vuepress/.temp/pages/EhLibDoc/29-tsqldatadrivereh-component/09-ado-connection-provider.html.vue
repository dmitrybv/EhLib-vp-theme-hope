<template><div><h1 id="tadoconnectionprovidereh" tabindex="-1"><a class="header-anchor" href="#tadoconnectionprovidereh" aria-hidden="true">#</a> TADOConnectionProviderEh</h1>
<p>Properties of the TADOConnectionProviderEh Component.</p>
<p>Connection: TADOConnection	
Link to an external component ADOConnection.</p>
<p>InlineConnection: TADOInlineConnectionEh	
Built-in component ADOConnection.</p>
<p>InlineConnection.Connected	Boolean	
InlineConnection.ConnectionString	WideString	
InlineConnection.UseAtDesignTime	Boolean	Use InlineConnection in Design-Time.
InlineConnection.UseAtRunTime	Boolean	Use InlineConnection in Run-Time.
InlineConnection.Attributes	TxactAttributes	
InlineConnection.CommandTimeout	Integer	
InlineConnection.ConnectionTimeout	Integer	
InlineConnection.ConnectOptions	TConnectOption	
InlineConnection.CursorLocation	TCursorLocation	
InlineConnection.DefaultDatabase	WideString	
InlineConnection.IsolationLevel	TIsolationLevel	
InlineConnection.KeepConnection	Boolean	
InlineConnection.InlineConnection.
LoginPrompt	Boolean	
InlineConnection.Mode	TConnectMode	
InlineConnection.Provider	WideString	
Path	string	ReadOnly property contains the path to the project in Design-Time. Is used when specifying paths ConnectionString with the macro% PROJECT_PATH%.
ServerType	string	Name of the server type.</p>
<p>In the current version</p>
<p>Events of TADOConnectionProviderEh component.</p>
<dd>
<p><code v-pre>OnExecuteCommand: TResolverExecuteCommandEhEvent</code></p>
<p><code v-pre>OnGetBackUpdatedValues: TResolverGetBackUpdatedValuesEhEvent</code></p>
<p><code v-pre>OnGetServerSpecOperations: TResolverGetServerSpecOperationsEh</code></p>
<p><code v-pre>OnUpdateRecord: TResolverUpdateRecordEhEvent</code></p>
<p><code v-pre>InlineConnectionBeforeConnect: TNotifyEvent</code></p>
<p><code v-pre>InlineConnectionAfterConnect: TNotifyEvent</code></p>
</dd>
</div></template>


