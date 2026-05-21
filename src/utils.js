export function colourToRGB(colourString) {
  // 1. Create a tiny 1x1 canvas element
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  const ctx = canvas.getContext('2d')

  // 2. Colour the single pixel
  ctx.fillStyle = colourString
  ctx.fillRect(0, 0, 1, 1)

  // 3. Grab the pixel's RGBA values
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data

  return [r, g, b]
}

export function RGBtoColour(r, g, b) {
  if ([r, g, b] == [0, 0, 0]) return 'black'
  if ([r, g, b] == [255, 255, 255]) return 'white'
  if ([r, g, b] == [255, 0, 0]) return 'red'
  if ([r, g, b] == [0, 255, 0]) return 'green'
  if ([r, g, b] == [0, 0, 255]) return 'blue'
  if ([r, g, b] == [255, 255, 0]) return 'yellow'
  if ([r, g, b] == [255, 0, 255]) return 'magenta'
  if ([r, g, b] == [0, 255, 255]) return 'cyan'
  return `rgb(${r},${g},${b})`
}

// export { colourToRGB, RGBtoColour }
