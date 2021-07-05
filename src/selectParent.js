export default function() {
  console.log(this.el.parentNode)
  this.el = this.el.parentNode
  
  return this
}
