const sharp = require('sharp')
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async function () {
  await sharp('./img/cup.jpg')
    .resize({
      width: 1920,
      height: 1080,
      fit: sharp.fit.cover
    })
    .toFile('./resized/cup-xl.webp', function (err) {
      const statusMessage = err ? `` : ``;
      if (!err) {
        console.log('cup-xl.webp is RESIZED!')
      }
    })
    .resize({
      width: 1200,
      height: 675,
      fit: sharp.fit.cover
    })
    .toFile('./resized/cup-l.webp', function (err) {
      const statusMessage = err ? `` : ``;
      if (!err) {
        console.log('cup-l.webp is RESIZED!')
      }
    })
    .resize({
      width: 900,
      height: 506,
      fit: sharp.fit.cover
    })
    .toFile('./resized/cup-m.webp', function (err) {
      const statusMessage = err ? `` : ``;
      if (!err) {
        console.log('cup-m.webp is RESIZED!')
      }
    })
    .resize({
      width: 600,
      height: 1066,
      fit: sharp.fit.cover
    })
    .toFile('./resized/cup-s.webp', function (err) {
      const statusMessage = err ? `` : ``;
      if (!err) {
        console.log('cup-s.webp is RESIZED!')
      }
    })
})();

// imagemin(['resized/*.{webp,png}'], {
//   destination: 'build',
//   plugins: [
//     imageminWebp({ quality: 60 })
//   ]
// }).then(() => {
//   console.log('Images optimized');
// });
