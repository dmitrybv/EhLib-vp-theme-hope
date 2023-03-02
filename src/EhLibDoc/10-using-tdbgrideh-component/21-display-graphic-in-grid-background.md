# Display graphic in grid background


`DBGridEh` lets you display a static image (type `TPicture`) in the background of the client area of the grid.

![](../../images/clip0020.png)

To customize the display graphic background use BackgroundData properties `DBGridEh.BackgroundData`.
`DBGridEh.BackgroundData: TDBGridBackgroundDataEh`

`Visible: Boolean`
<dd>Specifies whether the Background Pciture is visible in the grid.</dd>

`Picture: TPicture`
<dd>The Pciture to draw as a Background Data.</dd>

`Placement: TImagePlacementEh`

`ImagePlacementEh = (ipTopLeftEh, ipTopCenterEh, ipTopRightEh, ipCenterLeftEh, ipCenterCenterEh, ipCenterRightEh, ipBottomLeftEh, ipBottomCenterEh, ipBottomRightEh, ipFillEh, ipFitEh, ipStretchEh, ipTileEh);`
<dd>Specifies the position of the image and the way of filling the free space</dd>

`HorzMargin: Integer`
<dd>Horizontal Shift</dd>

`VertMargin: Integer`
<dd>Vertical Shift</dd>

`ExcludeTitle: Boolean`
<dd>Delete the title of the fill graphic background.</dd>

`ExcludeIndicator: Boolean`
<dd>Delete button from the fill graphic background.</dd>

`ExcludeFooter: Boolean`
<dd>Delete the footer of the fill graphic background.</dd>

 