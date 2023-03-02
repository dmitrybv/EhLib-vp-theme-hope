# Access to protected class methods


In complex programs and algorithms the use the Grid, you may need to access the protected fields, methods, or properties of a class.
The `Object Pascal` language has the opportunity to access protected data.
For this purpose, the module to which you plan to use access, declare a class that derives from `TDBGridEh` while changing nothing in the class. In the requited place of code, perform the conversion to this. `Object Pascal` allows to access to all methods of the class if it is declared in the same module.

Below is an example code:

```pascal:no-line-numbers
unit Unit1;

type
  TfrVertGrid = class(TFrame)
  … 
    Grid1: TDBGridEh;
  end;

implementation

type
  TDBGridEhCrack = class(TDBGridEh);

procedure TfrVertGrid.ToolButton1Click(Sender: TObject);
begin
  TDBGridEhCrack(Grid1).ProptectedMethod; 
end;
```