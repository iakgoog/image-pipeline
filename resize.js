const sharp = require('sharp')

const imageList = [
  'cup',
  'logo'
]

class ResizeOption {
  constructor(width, height, suffix, pxDensity) {
    this.width = width
    this.height = height
    this.suffix = suffix
    this.pxDensity = pxDensity
    this.fit = sharp.fit.cover
  }
}

const sizeList = [
  new ResizeOption(3600, 2250, 'desk', '2x'),
  new ResizeOption(2400, 1800, 'tbls', '2x'),
  new ResizeOption(1800, 2400, 'tbpt', '2x'),
  new ResizeOption(1200, 2133, 'phon', '2x'),
  new ResizeOption(1800, 1125, 'desk', '1x'),
  new ResizeOption(1200, 900, 'tbls', '1x'),
  new ResizeOption(900, 1200, 'tbpt', '1x'),
  new ResizeOption(600, 1066, 'phon', '1x'),
]

function performResize({ sharpInstance, sizeList, img }) {
  sizeList.forEach(async (item) => {
    await sharpInstance.resize(item)
            .toFile(`./resized/${img}-${item.suffix}_${item.pxDensity}.jpg`, err => {
              !err && console.log(`${img}-${item.suffix}_${item.pxDensity}.jpg is RESIZED`)
            })
  })
}

function start(imageList, sizeList) {
  imageList.forEach(img => {
    const sharpInstance = sharp(`./img/${img}.jpg`)
    performResize({ sharpInstance, sizeList, img })
  })
}

start(imageList, sizeList)
