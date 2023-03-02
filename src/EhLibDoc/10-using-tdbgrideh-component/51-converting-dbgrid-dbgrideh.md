# Converting existing TDBGrid component to TDBGridEh


Although `TDBGridEh` is not inherited from `TCustomDBGrid` component, there are many alike properties in `TDBGridEh` and in `TDBGrid`.
It allows us to convert existing `TDBGrid` component to `TDBGridEh` with minimum losses.
To convert existing `TDBGrid` component to `TDBGridEh` follow next instructions: 
- Open `Form` with `TDBGrid` component in `Delphi IDE`.
- Open Form as Text `(Alt-F12)` 
- Rename all `TDBGrid` objects to `TDBGridEh`  ('object DBGrid1: TDBGrid' -> 'object DBGrid1: TDBGridEh')
- Switch to view `Form` back as a `Form` (Alt-F12).
- Rename all `TDBGrid` objects in `Form` declaration to `TDBGridEh` ('DBGrid1: TDBGrid;' -> 'DBGrid1: TDBGridEh;' ).
- Try to recompile the project.

