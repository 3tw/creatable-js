import { Creatable } from './index.js'

const el = new Creatable()

el
  .select('#container')
  .append('div')
  .append('span')
  .text('1 - ')
  .selectParent()
  .append('span')
  .text('2 - ')
  .selectParent()
  .append('span')
  .text('3 - ')
  .insertBefore('span')
  .text('2.5 - ')
  .selectNext()
  .insertAfter('span')
  .text('3.5 - ')
  .selectPrev()
  .selectPrev()
  .selectPrev()
  .selectPrev()
  .insertAfter('span')
  .text('1.5 - ')
  .selectParent()
  .prepend('span')
  .text('0 - ')

  

console.log(el)

