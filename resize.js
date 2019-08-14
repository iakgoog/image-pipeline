const sharp = require('sharp')

  (async function () {
    await sharp('./img/cup.jpg')
      .resize({
        width: 1920,
        height: 1080,
        fit: sharp.fit.cover
      })
      .toFile('./resized/cup-xl.jpg', function (err) {
        const statusMessage = err ? `` : ``;
        if (!err) {
          console.log('cup-xl.jpg is RESIZED!')
        }
      })
      .resize({
        width: 1200,
        height: 675,
        fit: sharp.fit.cover
      })
      .toFile('./resized/cup-l.jpg', function (err) {
        const statusMessage = err ? `` : ``;
        if (!err) {
          console.log('cup-l.jpg is RESIZED!')
        }
      })
      .resize({
        width: 900,
        height: 506,
        fit: sharp.fit.cover
      })
      .toFile('./resized/cup-m.jpg', function (err) {
        const statusMessage = err ? `` : ``;
        if (!err) {
          console.log('cup-m.jpg is RESIZED!')
        }
      })
      .resize({
        width: 600,
        height: 1066,
        fit: sharp.fit.cover
      })
      .toFile('./resized/cup-s.jpg', function (err) {
        const statusMessage = err ? `` : ``;
        if (!err) {
          console.log('cup-s.jpg is RESIZED!')
        }
      })
  })();


