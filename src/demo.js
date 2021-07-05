import { Creatable } from './index.js'

const el = new Creatable()

el
  .select('#container')
  .append('div')
  .addClass('trst test')
  .append('span')
  .addClass('test-span')
  // .select('#container')
  // .selectChild('span')
  // .addClass('another-class')
  // .removeClass('test-span')
  .addClass('new-class')
  .selectParent()
  .append('p')
  .addClass('new-span')

console.log(el)
