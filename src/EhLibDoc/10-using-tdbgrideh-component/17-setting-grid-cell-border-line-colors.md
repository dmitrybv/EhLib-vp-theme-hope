# Setting color dividing lines, the presence / absence of lines in various areas Grid

It is possible to set the color and determine the presence or absence of dividing lines for the grid in general and for specific areas including the header area of the indicator area `SubtitleFilter`, data area and basement area (footer).
 
Next properties are responsible for the presence of lines and colors in the grid:

Presence / absence of values dgColLines, dgRowLines in property TDBGridEh.Options:

Set the presence of vertical and horizontal lines for the Grid in general.

Sub-properties of the property `TDBGridEh.GridLineParams`:

Using sub-properties of this property you can control the color of the dark lines in the grid (DarkColor) and the color of bright lines (BrightColor), the color of the lines in the data, the presence of lines of data, and the color scheme of the lines.

Sub-properties of the property `TDBGridEh.GridLineParams`:

<dl><dd>

`DarkColor: TColor`

<dl><dd>
Color dark lines. Used for areas of fixed cells, as well as areas within the meaning of which is meant shading dark lines.
clDefault value determines what color will be determined automatically based on the current color scheme, the properties of Grid.Flat and activity of global change `Themes.Active`
</dd></dl>

`BrightColor: TColor`

<dl><dd>
Color bright lines. Used for data areas, and areas within the meaning of which is meant shading light lines.
clDefault value determines the color will be automatically detected similarly DarkColor
</dd></dl>

`DataVertColor: TColor`
<dl><dd>Color vertical lines in the data area</dd></dl>

`DataVertLines: Boolean`
<dl><dd>The existence of vertical lines in the data.</dd></dl>

`DataHorzColor: TColor`
<dl><dd>Color of the horizontal lines in the data area.</dd></dl>

`DataHorzLines: Boolean`
<dl><dd>The presence of horizontal lines in the data.</dd></dl>

`DataBoundaryColor: TColor`
<dl><dd>Painted boundary lines grid (not to be confused with the client area) color DarkColor.</dd></dl>

`GridBoundaries: Boolean`
<dl><dd>Paint boundary lines grid (not to be confused with the client area) color DarkColor</dd></dl>

`ColorScheme: TDBGridLinesColorSchemeEh`

<dl><dd>

Property determines the color scheme used to draw the dividing lines for which a color clDefault.
Property can contain the following values:

`glcsDefaultEh` Use the default color scheme. 

`glcsClassicEh` The classic filling.Black lines for fixed areas. Gray lines for the data area.

`glcsFlatEh`  On

`glcsThemedEh`

</dd></dl>


`VertEmptySpaceStyle: TDrawEmptySpaceStyle`

<dl><dd>

`VertEmptySpaceStyle` property specifies the mode of filling lines and columns for the empty space between the last record of the grid and the bottom of the window.

Property can contain the following values:

`dessNonEh` - Do not paint.

`dessSolidEh` - Use solid dividing lines and colors of the columns.

`dessGradiendEh` - use gradient shading solid dividing lines and colors of the columns.

</dd></dl>

</dd></dl>

The colors and the lines in the header area:
```pascal:no-line-numbers
    property TDBGridEh.TitleParams.VertLineColor: TColor
    property TDBGridEh.TitleParams.VertLines: Boolean
    property TDBGridEh.TitleParams.HorzLineColor: TColor
    property TDBGridEh.TitleParams.HorzLines: Boolean
```    

The colors and the lines in the display:
```pascal:no-line-numbers
    property TDBGridEh.IndicatorParams.HorzLineColor: TColor
    property TDBGridEh.IndicatorParams.HorzLines: Boolean
    property TDBGridEh.IndicatorParams.VertLineColor: TColor
    property TDBGridEh.IndicatorParams.VertLines: Boolean
```    

The colors and the lines in the basement (footer):

```pascal:no-line-numbers
    property TDBGridEh.FooterParams.HorzLineColor: TColor
    property TDBGridEh.FooterParams.HorzLines: Boolean
    property TDBGridEh.FooterParams.VertLineColor: TColor
    property TDBGridEh.FooterParams.VertLines: Boolean
```
