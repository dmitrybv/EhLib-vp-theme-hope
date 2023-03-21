# Using the drop-down menu PopupMenu


At `DBGridEh` there is a `PopupMenuParams` property, which manages the construction PopupMenu in the grid. By default, the grid uses the following properties to determine which `PopupMenu` is displayed by pressing the right mouse button: `TDBGridEh.PopupMenu`, `TColumnEh.PopupMenu`, `TColumnEh.Title.PopupMenu`. Using subproperties properties `TDBGridEh.PopupMenuParams` can expand choice and formation of `PopupMenu`.

The `PopupMenuParams` property includes the following subproperties:

`BuildMenuOnPopup: Boolean`
<sh>

Defines if it is necessary to build a new PopupMenu or use ready-made. If `BuildMenuOnPopup = True`, the grid will form a new `PopupMenu` before being displayed. This allows you to create new elements `PopupMenu` or change / delete existing `PopupMenu` before displaying on the screen. Thus, the elements `PopupMenu` can be formed dynamically depending on the location display, and other conditions affecting the list.
</sh>

`UseGlobalMenu: Boolean`

<sh>

Specifies whether you want to add items to the menu in the global `PopupMenu` grid. The elements are formed in a global menu procedure `TDBGridEhCenter.BuildCellPopupMenu`. By default `BuildCellPopupMenu` adds nothing. You can write your version of `TDBGridEhCenter` class and override the method `BuildCellPopupMenu` to add new elements to the `PopupMenu` all Grids of the project. See more info in the section `Using global properties for TDBGridEh`.
</sh>
