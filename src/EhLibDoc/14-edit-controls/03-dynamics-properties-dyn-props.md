# Dynamics properties in components - DynProps


DynVarsEh is declared in a module class TDynVarsEh which implements a dynamic collection of scalar variables. 
Property of the type declared in the component can store a collection of named dynamic set of variables.

Property type TDynVarsEh is declared with the following components and classes:
- `TDBGridEh.DynProps`
- `TColumnEh.DynProps`
- `TDBEditEh.DynProps`
- `TDBDateTimeEditEh.DynProps`
- `TDBComboBoxEh.DynProps`
- `TDBNumberEditEh.DynProps`
- `TDBCheckBoxEh.DynProps`

Collection `TDynVarsEh` generated from class `TCollection`. In `Design-Time` can create the elements of the type `TDynVarEh` with the following properties:
```pascal
public    
    property AsBoolean: Boolean;
    property AsCurrency: Currency;
    property AsDateTime: TDateTime;
    property AsFloat: Double;
    property AsInteger: LongInt;
    property AsRefObject: TObject;
    property AsString: String;
    property IsNull: Boolean;
published
    property Name: String;
    property Value: Variant;
```    
 
In `Run-Time` collection items can be created dynamically by assigning values.
 
When reading a collection of values `DBEditEh1.DynProps ['Var1'].Value`, if the item in the collection named `'Var1'` is present in the list, it returns the value of the variable. If the element name is not present, it returns the value Unassigned.
 
When assigning values, the algorithm checks for the item in the collection. 

```pascal
DBEditEh1.DynProps ['Var1'].Value: = 'StrValue1';
```

If the item named `'Var1'` isn’t in the list, a new element is created in the collection and is assigned with the specified value.

