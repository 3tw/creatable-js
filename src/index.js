import creatable_append from './append.js'
import creatable_createClass from './createClass.js'
import creatable_select from './select.js'

export function Creatable(selector = null) {
  this.el = selector
}

Creatable.prototype = {
  constructor: Creatable,
  append: creatable_append,
  select: creatable_select,
  createClass: creatable_createClass,
}