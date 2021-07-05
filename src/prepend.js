export default function(element) {
  const reference = this.el
  const parent = this.el.parentNode
  
  this.el = parent.insertBefore(document.createElement(element), reference)
  
  return this
}
