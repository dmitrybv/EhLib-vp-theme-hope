# Working with TSQLDataDriverEh and TXXXDataDriverEh at design-time


Double click on `TSQLDataDriverEh` or `TXXXDataDriverEh` component opens a dialog editor of `TSQLDataDriverEh` component. At a design-time `TSQLDataDriverEh` and `TXXXDataDriverEh` always use design time copy of object that work with database (it is TDatabase object for DBE engine). If where are not any object was created the system will offer to create a new object. Type of dialog of creating DB Object depend of type of TXXXDataDriverEh. For `TSQLDataDriverEh` it show dialog where you can choose a type of the access to server (Engine) and service of data processing of server (DB Service). Type of the access defines a engine to access the data and can be one of the following types: `BDE`, `IBX`, `DBX` or `ADO`. For `ADO` also need to define "Service a data processing", class that can get a list of DB objects from server. If object that work with database already has been create before then system will offer to choose one of the existing.

Window of editing `TSQLDataDriverEh` have a next controls:
1.	Tree list of DB objects. Tables, Views, Procedures, Functions etc. It depends of server type.

2.	Lower window of elements of the current object in the tree of objects.

3.	Output grid of result of executing the Select expressions.

4.	Page of Select expression (TSQLDataDriverEh.SelectSQL)

5.	Pages expressions for Inserting, Updating, Deleting, Requesting one record.

6.	Page to fill SpecParams property and parameters of dynamic SQL building.

