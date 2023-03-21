# Global setting for TDBVertGridEh and TDBGridEh classes


There are TDBAxisGridEhCenter class and global functions are declared in the DBAxisGridsEh.pas module

```pascal
  function SetDBAxisGridEhCenter(NewGridCenter: TDBAxisGridEhCenter): TDBAxisGridEhCenter;
  function DBAxisGridEhCenter: TDBAxisGridEhCenter;
```  

They are intended for the implementation of a single point for the modification of certain features in the `DBGridEh` and `DBVerGridEh` components. To change the behavior of all the grids in the project, write your class and heir of TDBAxisGridEhCenter and registered it once anywhere in the project by using the next function.

```pascal
SetDBAxisGridEhCenter(TMyDBAxisGridEhCenter.Create).Free;
```

The function returns an old class that can be immediately removed.

The methods that can be overridden in `TDBAxisGridEhCenter`:

`procedure EditButtonDefaultAction(…); virtual;`

<dl><sh>

Occurs when `EditButton` is pressed in any editor cell component of any `TDBGridEh` or `TDBVertGridEh` class. You can override this virtual procedure to write your actions when you click on `EditButton`. To override the action clicking on the level of the individual grid use the `OnEditButtonDown` and `OnEditButtonClick` event.
</sh></dl>
<br>

`procedure EditButtonDefaultActionForImage(…); virtual;`

<sh>

Occurs when `EditButton` is pressed in any editor cell component of any `TDBGridEh` or `TDBVertGridEh` class for Blob field type which is the type of `BlobType=ftGraphic`.
</sh>
<br>

`procedure EditButtonDefaultActionText(…); virtual;`

<sh>

Occurs when `EditButton` is pressed in any editor cell component of any class or `TDBGridEh` `TDBVertGridEh` text field.
</sh>
<br>

`procedure FormSystemPopupMenuForColumn(…); virtual;`

<sh>

Intended to form the `Popup` menu that opens when user clicks on when `EditButton` any editor cell component of any `TDBGridEh` or `TDBVertGridEh` class. In the current implementation, the procedure is called only for graphic `Blob` fields.
</sh>
<br>
