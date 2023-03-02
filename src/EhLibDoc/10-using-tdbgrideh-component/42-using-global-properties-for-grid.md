# Using global properties for TDBGridEh


The Library has a set of global properties and event, which influence all grids that are created in the project. You can adjust this properties or event, for instance, in the main Form of your project, and all grids of the project will change its behaviors according to these properties. To control the global behavior of grids there are global objects such as the `TDBGridEhCenter` and `TDBGridEhStyle` type. The First one is used to control the behavior of the grids, the second one is to control the style of grids showing.

### General information about `TDBGridEhCenter` class:

Use global function `DBGridEhCenter` to access the elements of the `TDBGridEhCenter` object:

```pascal:no-line-numbers
function DBGridEhCenter: TDBGridEhCenter;
```

It returns the global object of the type `TDBGridEhCenter`, which controls the behavior of all grids. You may inherit `TDBGridEhCenter` class, rewrite virtual methods and register your object of managing using `SetDBGridEhCenter` function:

```pascal:no-line-numbers
function SetDBGridEhCenter(NewGridCenter: TDBGridEhCenter): TDBGridEhCenter;
```
It set new object of management and returns the old object. The Old object, in most cases, is required to destroy.

Properties and events of the `TDBGridEhCenter` class:

**Properties:**

<dd>

`property FilterEditCloseUpApplyFilter: Boolean;`

<dl><dd>

Determines whether the `SubTitleFilter` will be applied right after choosing value from dropped down list or always need to press Enter key to apply filter.

</dd></dl>

`property IndicatorTitleMenus: TDBGridEhStyleIndicatorTitleMenusEh;`

  <dl><dd>

  Specifies the list of elements, which will be visible in IndicatorTitle of dropped down menu when `TDBGridEh.IndicatorTitle.UseGlobalMenu = True` and `TDBGridEh.IndicatorTitle.TitleButton = True`.

`TDBGridEhStyleIndicatorTitleMenusEh` is a set which consists of following values 
	itmVisibleColumnsEh	- Display the menu item with list of columns, cliquing on which possible to show or hide column.
	<dl><dd>`itmCut`		- Display Cut menu item</dd></dl>
	<dl><dd>`itmCopy`		- Display Copy menu item</dd></dl>
	<dl><dd>`itmPaste`		- Display Paste menu item</dd></dl>
	<dl><dd>`itmDelete`		- Display Delete menu item</dd></dl>
	<dl><dd>`itmSelectAll`	- Display SelectAll menu item</dd></dl>

  </dd></dl>

</dd>

**Events:**

<dd>

```pascal:no-line-numbers
OnApplyFilter: TNotifyEvent;
```

<dl><dd>

This event is called when grid apply `SubTitleFilter`. `Sender` parameter is a grid that applies filter. In the handler of event you can call default handler - `DBGridEhCenter.DefaultApplyFilter`.

</dd></dl>

```pascal:no-line-numbers
OnApplySorting: TNotifyEvent;
```

<dl><dd>

This event is called when grid apply sorting. `Sender` parameter is a grid that applies sorting. In the event handler you can call default handler - `DBGridEhCenter.DefaultApplySorting`.

</dd></dl>

```pascal:no-line-numbers
OnBuildIndicatorTitleMenu: TDBGridEhBuildIndicatorTitleMenu;
```

<dl><dd>

This event occurs when grid forms the dropped down menu that appears when mouse is clicked on the upper left cell of grid. Event occurs if `TDBGridEh.IndicatorTitle.TitleButton` = `True`. Sender parameter is a grid in which `IndicatorTitle` button was pressed. `PopupMenu` parameter is a menu that will is displayed under cell. You can call default handler that build menu items by default:
`DBGridEhCenter.DefaultBuildIndicatorTitleMenu(Grid, PopupMenu);`
and then perform additional code, for instance, to add one more menu elements.

Below is an example that demonstrate how to add new menu item 
in list of IndicatorTitle menus:

```pascal	

// Declare global menu item for printing the grid.
var  DBGridEhPreviewIndicatorMenuItem: TDBGridEhMenuItem;

// In public section of main Form declare methods for 
// OnBuildIndicatorTitleMenu event.
    procedure BuildIndicatorTitleMenu(Grid: TCustomDBGridEh; 
    var PopupMenu: TPopupMenu);
// Event procedure that will be call when menu item is selected.
    procedure MenuEditClick(Sender: TObject);

// In TMainForm.OnCreate event of the program, assign the event on that will 
// be form IndicatorTitle menu items.
procedure TForm1.FormCreate(Sender: TObject);
begin
  DBGridEhCenter.OnBuildIndicatorTitleMenu := BuildIndicatorTitleMenu;
end; 

// Method Itself.
procedure TForm1.BuildIndicatorTitleMenu(Grid: TCustomDBGridEh; 
  var PopupMenu: TPopupMenu);
begin
// At first it calls the default method of menu building.
  DBGridEhCenter.DefaultBuildIndicatorTitleMenu(Grid, PopupMenu);

// Then create new item. 
  if DBGridEhPreviewIndicatorMenuItem = nil then
    DBGridEhPreviewIndicatorMenuItem := TDBGridEhMenuItem.Create(Screen);
  DBGridEhPreviewIndicatorMenuItem.Caption := 'Preview';
  DBGridEhPreviewIndicatorMenuItem.OnClick := MenuEditClick;
  DBGridEhPreviewIndicatorMenuItem.Enabled := True;
  DBGridEhPreviewIndicatorMenuItem.Grid := Grid;

// And add it at the end of the menu list.
PopupMenu.Items.Insert(
  PopupMenu.Items.IndexOf(DBGridEhSelectAllIndicatorMenuItem)+1, 
                          DBGridEhPreviewIndicatorMenuItem);

end;

// The Handler of new menu item.
procedure TForm1.MenuEditClick(Sender: TObject);
begin
  PrintDBGridEh1.DBGridEh := TDBGridEh(TDBGridEhMenuItem(Sender).Grid);
  PrintDBGridEh1.SetSubstitutes(['%[Today]',DateToStr(Now)]);
  PrintDBGridEh1.Preview;
end;
```
<br>
<br>

</dd></dl>


```pascal:no-line-numbers
property OnCellMouseClick: TGridEhCellMouseEvent;
   type  TGridEhCellMouseEvent = procedure (Grid: TCustomGridEh; Cell: TGridCoord;
    Button: TMouseButton; Shift: TShiftState; X, Y: Integer) of object;
```
<dl><dd>
This event occurs on mouse clicking in any cell of the grid. Event has such parameters: Grid; coordinates of the cell (Cell); Button, which was pressed on mouse (Button); Shift state of keyboard (Shift) and coordinates of the clicked point inside cell (X, Y). In the handler of event you can call the default handler - DBGridEhCenter.DefaultCellMouseClick.
</dd></dl>
<br>

```pascal:no-line-numbers
property OnIndicatorTitleMouseDown: TGridEhCellMouseEvent;
   type  TGridEhCellMouseEvent = procedure (Grid: TCustomGridEh; Cell: TGridCoord;
    Button: TMouseButton; Shift: TShiftState; X, Y: Integer) of object;
```
<dl><dd>
	This event occurs when the mouse click on upper left cell of the grid occurs. In the handler of event you can call default handler - DBGridEhCenter.DefaultIndicatorTitleMouseDown.
</dd></dl>
<br>
	
```pascal:no-line-numbers
property OnLocateText: TLocateTextEventEh;
type  TLocateTextEventEh = function (Sender: TObject;
  const FieldName: string; 
  const Text: String; Options: 
  TLocateTextOptionsEh; Direction: 
  TLocateTextDirectionEh; Matching: TLocateTextMatchingEh; 
  TreeFindRange: TLocateTextTreeFindRangeEh): Boolean of object;
```

<dl><dd>
This event occurs during increment or dialogue searching in the grid.
</dd></dl>
<br>

</dd>

### The General information about `TDBGridEhStyle` class

To access elements the global `DBGridEhStyle` object use function:

`function DBGridEhStyle: TDBGridEhStyle;`
<dl><dd>
It returns the current object of the type TDBGridEhStyle, which controls imaging of all grids. You can inherit TDBGridEhStyle, overwrite virtual methods controlling image of the grid, and register new object to manage, using next function:
</dd></dl>

`function SetDBGridEhStyle(NewGridStyle: TDBGridEhStyle): TDBGridEhStyle;`
<dl><dd>
Call this function to set new object of image controlling. It returns old object.  In most cases it is necessary to delete old object.
</dd></dl>
<br>

Properties of the `TDBGridEhStyle` class:

`property LuminateSelection: Boolean default True;`
<dl><dd>

This property determines whether need to illuminate the selected area in grid. If `LuminateSelection = False` then the selected area will be painted by `clHighlight` color. If `LuminateSelection = True` then selected area will be painted by method as if you see on the area through the transparent glass of the `clHighlight` color.
</dd></dl>
	
`property IsDrawFocusRect: Boolean default True;`
<dl><dd>
	This property determines whether to draw pointed square around the current cell or row in the grid.
</dd></dl>

