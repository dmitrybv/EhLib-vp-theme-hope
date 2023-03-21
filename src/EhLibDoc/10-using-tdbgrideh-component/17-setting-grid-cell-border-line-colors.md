# Setting color dividing lines, the presence / absence of lines in various areas Grid

It is possible to set the color and determine the presence or absence of dividing lines for the grid in general and for specific areas including the header area of the indicator area `SubtitleFilter`, data area and basement area (footer).
 
Next properties are responsible for the presence of lines and colors in the grid:

Presence / absence of values dgColLines, dgRowLines in property TDBGridEh.Options:

Set the presence of vertical and horizontal lines for the Grid in general.

Sub-properties of the property `TDBGridEh.GridLineParams`:

Using sub-properties of this property you can control the color of the dark lines in the grid (DarkColor) and the color of bright lines (BrightColor), the color of the lines in the data, the presence of lines of data, and the color scheme of the lines.

Sub-properties of the property `TDBGridEh.GridLineParams`:

<dl><sh>

`DarkColor: TColor`

<dl><sh>
Color dark lines. Used for areas of fixed cells, as well as areas within the meaning of which is meant shading dark lines.
clDefault value determines what color will be determined automatically based on the current color scheme, the properties of Grid.Flat and activity of global change `Themes.Active`
</sh></dl>

`BrightColor: TColor`

<dl><sh>
Color bright lines. Used for data areas, and areas within the meaning of which is meant shading light lines.
clDefault value determines the color will be automatically detected similarly DarkColor
</sh></dl>

`DataVertColor: TColor`
<dl><sh>Color vertical lines in the data area</sh></dl>

`DataVertLines: Boolean`
<dl><sh>The existence of vertical lines in the data.</sh></dl>

`DataHorzColor: TColor`
<dl><sh>Color of the horizontal lines in the data area.</sh></dl>

`DataHorzLines: Boolean`
<dl><sh>The presence of horizontal lines in the data.</sh></dl>

`DataBoundaryColor: TColor`
<dl><sh>Painted boundary lines grid (not to be confused with the client area) color DarkColor.</sh></dl>

`GridBoundaries: Boolean`
<dl><sh>Paint boundary lines grid (not to be confused with the client area) color DarkColor</sh></dl>

`ColorScheme: TDBGridLinesColorSchemeEh`

<dl><sh>

Property determines the color scheme used to draw the dividing lines for which a color clDefault.
Property can contain the following values:

`glcsDefaultEh` Use the default color scheme. 

`glcsClassicEh` The classic filling.Black lines for fixed areas. Gray lines for the data area.

`glcsFlatEh`  On

`glcsThemedEh`

</sh></dl>


`VertEmptySpaceStyle: TDrawEmptySpaceStyle`

<dl><sh>

`VertEmptySpaceStyle` property specifies the mode of filling lines and columns for the empty space between the last record of the grid and the bottom of the window.

Property can contain the following values:

`dessNonEh` - Do not paint.

`dessSolidEh` - Use solid dividing lines and colors of the columns.

`dessGradiendEh` - use gradient shading solid dividing lines and colors of the columns.

</sh></dl>

</sh></dl>

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
