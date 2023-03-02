# TRefObjectField field type


`MemTableEh` unit have code to register new type of field - `TRefObjectField`. `TRefObjectField` is intended to keep the pointer to `TObject` type object and have Value property of `TObject` type. 

At design-time choose ‘RefObjectField’ type in form of creating new field  to create `TRefObjectField` field. 

At run-time in the program you can create a field of this type by assign `ftUnknown` value to `DataType` property of `FieldDef` object.
