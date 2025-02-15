# Sigma React 🔥

# Parcel
- Dev build
- local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Parcel is like the manager of all the library packages.
- Consistent Hashing
- Code Splitting 
- Differential Bundling-support older browsers
- Diagnostics
- Error Handling - gives us better error suggestions
- HTTPS
- Tree Shaking -remove unused code 
- Different dev and production bundles are different


# Food ordering App
/**
 * Planning of Food Delivery App
 *
 * Header
 * - Logo
 * - Navbar
 * body
 * - Search bar
 * - Restaurant container
 *    - Restaurant Card
 *      -img
 *      - Name of restaurant,star Rating,cuisines delivery time
 * footer
 *  -Copyright
 *  - Links
 *  -Address
 *  -Contact
 *
 */


Two types of Export/Import

- Default Export/Import
 export default Component;
 import Component from "path";

 - Named Export/Import
  export const Component;
  import {Component} from "path";

# React Hooks
(Normal JS utility functions)
 - useState() -> Superpowerful State Variables in react
 - useEffect()
 
 # Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

if no dependecny array useEffect will be called on every render.
if dependency array is empty => [] => useEffect will be called only once(on initial render)
if dependency array has some value => [btnName] => useEffect will be called whenever the value of btnName changes.

Never create state variable outside of your component and inside if else condition,for loops , functions.
RouterProvider actually provide configuration to our app