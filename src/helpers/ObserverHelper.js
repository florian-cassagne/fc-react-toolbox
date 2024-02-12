export function observeDOM(observer, element) {
  const DOMelement = document.getElementById(element)
  if (DOMelement) {
    observer.observe(DOMelement)
  }
}

export function unobserveDOM(observer, element) {
  const DOMelement = document.getElementById(element)
  if (DOMelement) {
    observer.unobserve(DOMelement)
  }
}
