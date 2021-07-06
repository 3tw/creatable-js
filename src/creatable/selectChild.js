export default function(selector) {

  this.el = this.el.querySelector(selector)
  
  if (!this.el) {
    throw new Error(`Element with selector '${selector}' could not be found.`)
  }
  
  return this
}