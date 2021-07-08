export default function(element) {
  const newParent = document.createElement(element)
  const child = this.el
  
  this.el.parentNode.replaceChild(newParent, child)
  newParent.appendChild(child);
  
  this.el = newParent

  return this
}
