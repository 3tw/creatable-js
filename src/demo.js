import { Creatable } from './index.js'

let el = new Creatable()

el
  .select('#container')
  .append('div')
  .createClass('trst test')
  .append('span')
  .createClass('test-span')
  
el
  .select('#container')
  .selectChild('span') 
  .createClass('another-class') 

console.log(el)

///

let el2 = new Creatable()
el2.select('p')

