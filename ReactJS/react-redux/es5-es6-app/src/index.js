//Javascript and module programming
//design patterns for linking files in JS (anologous to class loader in java)
//1. AMD  2. common.js require.js(tool based on common.js requirements)
//webpack - module bundler, linking of files

/**
 * how to link and get code from mylib.js
 */

import { name,sayHello,Welcome } from './mylib'
console.log(name)
console.log(sayHello())
let w = new Welcome();
