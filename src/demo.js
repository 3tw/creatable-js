import { Creatable } from './index.js'

let el = new Creatable()

el
  .select('#container')
  .append('div')
  .createClass('trst test')
  .append('span')
  .createClass('test-span')
console.log(el)
