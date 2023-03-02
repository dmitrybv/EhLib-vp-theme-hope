---
//icon: article
---
# TPropStorageEh component

`TPropStorageEh` and `TPropStorageManagerEh` componetns realize technology to store components properties to/from settings storage such as Ini files, Registry etc.

Current version of library has components to write/read in/from `Ini` files and `Windows Registry`. Base component of this technology is the `TPropStorageEh`. Place this component in the form, component properties of which you want to save in the storage. Double click on the component  during the design-time to open properties storage editor window. In the tree of properties you can select required properties for storing. Properties list is a list of all published properties or declared in `DefineProperty` function of components with the exclusion of `TCollection` class properties.  Besides the list of all elements of the collection, the tree of properties will contain `\<ForAllItems\>` subproperty. When you select `sub-property` in the given branch, the component will save corresponding sub-property for each element of the collection.

Component `TPropStorageEh` can write and read property values in the stream. To redirect flow in the storage it is necessary to execute one of the following actions:

1. Place component that is inherited from `TPropStorageManagerEh` on the form.
In this version there are two such components. These are `TIniPropStorageManEh` and `TRegPropStorageManEh`.
Customize properties of this component and assign component to `TPropStorageEh.StorageManager` property.

2. Or you can only once write code to register global component - `DefaultPropStorageManager`. All TPropStorageEh components, in which `StorageManager` property is not assigned, will use `DefaultPropStorageManager` manager for redirecting flow of the property values to the storage.

Code to register global store manager can look like this:

MainUnit.Pas

```pascal:no-line-numbers
......

var
  IniPropStorageMan: TIniPropStorageManEh;

initialization

  IniPropStorageMan := TIniPropStorageManEh.Create(nil);
  IniPropStorageMan.IniFileName := 'MyIniFile.Ini';
  SetDefaultPropStorageManager(IniPropStorageMan);
end.
``` 
