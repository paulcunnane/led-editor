function colourToRGB(colourString) {
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

export default colourToRGB
