# TDBDateTimeEditEh control


`TDBDateTimeEditEh` represents a single-line date or/and time edit control that can display and edit a date or/and time values.

Property `Kind` determines whether the component is a date editor or/and a time editor `(dtkDateEh, dtkTimeEh, dtkDateTimeEh)` or custom date-time mask editor `(dtkCustomEh)`.

Use `EditFormat` property to set custom date/time format. You can use next format elements: `'YY', 'YYYY', 'MM', 'DD', 'HH', 'NN', 'SS'`. 

By default `TDBDateTimeEditEh` build edit mask using ShortDateFormat variable. 

Edit mask can be by six types: three for four-char year - `'MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD'` and three for two-char year `'MM/DD/YY', 'DD/MM/YY', 'YY/MM/DD'`.

Application can use `Text` (String type) and `Value` (Variant type) properties to get and set `DateTime` type value in `TDBDateTimeEditEh`. If `TDBDateTimeEditEh` has `dtkDateEh` type then it will change only date part of the field. If `TDBDateTimeEditEh` has `dtkTimeEh` type then it will change only time part of the field.

