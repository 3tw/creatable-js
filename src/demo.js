import { Creatable } from './index.js'

const el = new Creatable()

el
  .select('#container')
  .append('div')
  .append('span')
  .text('span 1')
  .selectParent()
  .append('span')
  .text('span 2')
  .selectParent()
  .append('span')
  .text('span 3')
  .prepend('span')
  .text('span 2.5')

console.log(el)

