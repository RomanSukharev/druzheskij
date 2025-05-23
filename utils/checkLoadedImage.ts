export default (src: string): Promise<boolean> => new Promise((resolve, reject) => {
  var image = new Image()
  image.src = src
  image.onload = () => void resolve(true)
  image.onerror = () => void reject(true)
})