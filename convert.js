const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['resized/*.{jpg,png}'], {
  destination: 'build',
  plugins: [
    imageminWebp({ quality: 60 })
  ]
}).then(() => {
  console.log('Images optimized');
});