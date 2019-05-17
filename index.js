const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  const files = await imagemin(['src/*.{jpg,png}'], 'images', {
    plugins: [
      imageminMozjpeg({ quality: 85 }),
      imageminPngquant([.85, .85]),
      imageminGifsicle(),
      imageminSvgo(),
    ]
  });
  console.log(files);
})();
