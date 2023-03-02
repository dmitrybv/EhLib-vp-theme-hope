---
//icon: article
---
# Installing

Below it will be described how to install EhLib under Delphi XE5.
## Unpack EhLib archive.
After unpacking you will have next list of directories:
<br/>
Directories of the library archive:

##### `Installer`
  <dd>Constains EhLibInstaller.exe</dd>
  <br/>

###### `Common`
  <dd>Contain source files which are common for all versions of Delphi and C++ Builder.</dd>
  <br/>

###### `RADStudio2009`
  <dd>Contain source files which are specific for RAD Studio 2009.</dd>
  <br/>

###### `RADStudioXXXX`
  <dd>Contain source files which are specific for RAD Studio XXXX.</dd>

###### `Demos`
  <dd>Demonstration projects</dd>

###### `Bin`
  <dd>Contains the compiled executables major demonstration projects. (Contains files only in the editorial - EhLib Evaluation)</dd>

###### `Data`
  <dd>Contains the database files for the demonstration projects.</dd>

###### `LangResources`
  <dd>Contain resource files for various languages.</dd>

###### `DataDrivers`
  <dd>Contains additional components that inherit from TDataDriverEh generators to support data access third party.</dd>

###### `DataService`
  <dd>Contain files that contain objects that allows to sort data in various types of datasets.</dd>

###### `Orders`
  <dd>Contain text files in which described how to register  various versions of EhLib.</dd>

###### `HLP`
  <dd>Contain help Files and Documentation.</dd>

<dl>
</dl>

## Installing packages.
### Automatic installing:
Run `Installer\EhLibInstaller.exe` program from EhLib archive to install library in `Delphi/C++ Builder IDE` automatically. In time of installation the program creates folder, copies files, compile required packages and registers packages in the `IDE`.

### Manual installing:
Here is described how to install the library in RAD Studio XE5. Installation in other versions of Delphi is performed by analogy.
Create, if necessary, a new folder "EhLib" folder with a Delphi (for example, `C:\ RADStudio\12.0\Components\EhLib`).
If you EhLib version with source code then copy to this folder files from “Common”, “RADStudioXE5” and "LangResources\Res" of archive EhLib.
If you have a version of EhLib without source or evaluation-version, then copy the files to this folder from the folder `<EhLib Archive>\RADStudioXE5\Win32\Release`. The library without source code in the folder `<EhLib Archive>\Common Files` with the extension are Int. These files contain the original interface of the pas file libraries. These files are conveniently used as documentation.
By default, EhLib contains resource files for the English language. If you need a different language, you can replace the original resource files (which are already in the `C:\RADStudio\12.0\Components\EhLib`) files that are in the appropriate subfolder LangResources and change them if necessary.
Uninstall previous or evaluation version of EhLib Delphi IDE.
Remove or move to another folder, the following files to prevent this crossing and the new version EhLib. Delete all files that start with `EhLib ___. Bpl`, `DclEhLib ____.Bpl`, `EhLib ___.Bpi`, `DclEhLib ____. Pbi` folder 
`C: \Users\Public\Documents\RAD Studio\12.0\Bpl\`,
`C:\Users\Public\Documents\RAD Studio\12.0\Dcp\` and 
`C:\Users\Public\Documents\RAD Studio\12.0\Dcp\`.

Start Delphi and open (`File\Open ...`) project group `EhLibProjGroup190.groupproj`.
Compile all group packages (`Project \ Build All Projects`).

Install all the packages in the IDE, which begin on `Dcl______`. To do this, use the mouse to select the package of `Install`.

Components EhLib appear in the pages of `EhLib Controls` and `EhLib Components` component palette.

