import creatable_append from './append.js'
import creatable_attribute from './attribute.js'
import creatable_addClass from './addClass.js'
import creatable_insertBefore from './insertBefore.js'
import creatable_insertAfter from './insertAfter.js'
import creatable_prepend from './prepend.js'
import creatable_removeClass from './removeClass.js'
import creatable_select from './select.js'
import creatable_selectChild from './selectChild.js'
import creatable_selectNext from './selectNext.js'
import creatable_selectParent from './selectParent.js'
import creatable_selectPrev from './selectPrev.js'
import creatable_text from './text.js'

export function Creatable(selector = null) {
  this.el = selector
}

Creatable.prototype = {
  constructor: Creatable,
  append: creatable_append,
  attribute: creatable_attribute,
  addClass: creatable_addClass,
  insertAfter: creatable_insertAfter,
  insertBefore: creatable_insertBefore,
  prepend: creatable_prepend,
  removeClass: creatable_removeClass,
  select: creatable_select,
  selectChild: creatable_selectChild,
  selectNext: creatable_selectNext,
  selectParent: creatable_selectParent,
  selectPrev: creatable_selectPrev,
  text: creatable_text
}