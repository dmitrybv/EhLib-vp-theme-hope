# Save/load data from/to the file (s)


In `MemTableEh` has the ability to save data to a file and load the data from the file. 

When saving data `MemTableEh` writes the internal structure of the array and writing the array.

```pascal:no-line-numbers
procedure SaveToFile(const FileName: string = ''; Format: TDfmStreamFormatEh = dfmTextEh);
type TDfmStreamFormatEh = (dfmBinaryEh, dfmTextEh);
``` 
<sh>Writes the contents of the internal FileName dataset components TMemTableEh.</sh>
<br>

```pascal:no-line-numbers
procedure LoadFromFile(const FileName: string = '');
``` 
<sh>Loads data from a file FileName into the internal data array components TMemTableEh. In this case, the old structure and the contents of the internal components of the array is removed.</sh>

Demo: An example of using functions to save and load data to / from a file in the main library of the demonstration project – `<EhLib_Dir\Demos\MainDemo>`
