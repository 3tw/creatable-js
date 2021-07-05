import creatable_append from './append.js'
import creatable_addClass from './addClass.js'
import creatable_removeClass from './removeClass.js'
import creatable_select from './select.js'
import creatable_selectChild from './selectChild.js'
import creatable_selectParent from './selectParent.js'

export function Creatable(selector = null) {
  this.el = selector
}

Creatable.prototype = {
  constructor: Creatable,
  append: creatable_append,
  select: creatable_select,
  selectChild: creatable_selectChild,
  selectParent: creatable_selectParent,
  addClass: creatable_addClass,
  removeClass: creatable_removeClass
}