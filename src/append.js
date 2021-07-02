import { Creatable } from './index.js'

export default function(element) {
  const newEl = this.el.appendChild(document.createElement(element))
  this.el = newEl
  
  return this
}
