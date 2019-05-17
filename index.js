const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(['src/*.{jpg,png}'], 'images', {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({quality: [.85, 1]})
    ]
  });
  console.log(files);
})();
