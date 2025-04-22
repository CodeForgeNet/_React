React does not render `false`, `null`,`undefined` or `NAN` in the DOM. These values when used in jsx will result in nothing being displayed.

However `0` and empty Strings (`""`) are exceptions :

- **`0`** is rendered in the DOM ,coz it considered a valid React node.
- **Empty strings** (`""`) are also cosidered valid and renderd as well.

##ImportExport
Default Export : A file can have only one default export.
Default Import : When importing a default export, you can name the import whatever you like.

Named Export :
A file can have multiple name exports.
Each named export must be explicitely exported.

Named Import :
When importing name exprots, the import name must match the export names exactly.
Named imports must be enclosed in curly braces.

#\* A component is a funciton which return jsx

- Props

* props is properties like HTML have attribute.
