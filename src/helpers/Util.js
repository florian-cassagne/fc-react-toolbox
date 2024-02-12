export function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function scrollToAnchor(anchorId) {
  const anchorElement = document.querySelector(anchorId)
  if (anchorElement) {
    window.scrollTo({
      top: anchorElement.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

export function getImageUrl(relativePath) {
  return 'url("' + relativePath + '")'
}

export function adaptHref(link) {
  return link === '' ? 'javascript:void(0);' : link
}
