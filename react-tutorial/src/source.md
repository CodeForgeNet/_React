React does not render `false`, `null`,`undefined` or `NAN` in the DOM. These values when used in jsx will result in nothing being displayed.

However `0` and empty Strings (`""`) are exceptions :

- **`0`** is rendered in the DOM ,coz it considered a valid React node.
- **Empty strings** (`""`) are also cosidered valid and renderd as well.
