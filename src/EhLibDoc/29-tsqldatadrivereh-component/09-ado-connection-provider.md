# TADOConnectionProviderEh

Properties of the TADOConnectionProviderEh Component.

Connection: TADOConnection	
Link to an external component ADOConnection.

InlineConnection: TADOInlineConnectionEh	
Built-in component ADOConnection.

InlineConnection.Connected	Boolean	 
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
ServerType	string	Name of the server type.

In the current version
 	 	  
Events of TADOConnectionProviderEh component.
<sh>

  `OnExecuteCommand: TResolverExecuteCommandEhEvent`
  
  `OnGetBackUpdatedValues: TResolverGetBackUpdatedValuesEhEvent`
  
  `OnGetServerSpecOperations: TResolverGetServerSpecOperationsEh`
  
  `OnUpdateRecord: TResolverUpdateRecordEhEvent`
  
  `InlineConnectionBeforeConnect: TNotifyEvent`
  
  `InlineConnectionAfterConnect: TNotifyEvent`
</sh>

 	 	 
