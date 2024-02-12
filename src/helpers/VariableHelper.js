export function isNullOrZero(data) {
  return data === 0 || data === '' || data === undefined
}

export function isNull(data) {
  return data === undefined
}

export function getDateTextYYYYMM(dateSrc) {
  dateSrc = dateSrc.split('-')
  const date = new Date(dateSrc[0], dateSrc[1] - 1)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long'
  })
}
