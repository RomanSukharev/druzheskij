export var getDateForDynamic = (date: Date): string => {
  var res: string = new Intl.DateTimeFormat('ru', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

  var _split = (): string[] => res.split(' ')

  return `${_split().shift()}<br />${_split().slice(1).join(' ')}`
}
