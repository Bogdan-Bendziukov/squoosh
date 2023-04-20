const { ImagePool } = require("@squoosh/lib");
const { join } = require("path");

console.log("...loading");

(async () => {
  console.log("create a pool");
  const imagePool = new ImagePool();
  console.log("waiting");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("ingesting");

  const imagePath = join(__dirname, "test-image.jpg");

  const image = imagePool.ingestImage(imagePath);
  await image.decoded;
  console.log("ingested");
  const encodeOptions = {
    mozjpeg: { quality: 10 }
  };

  await image.encode(encodeOptions);
  console.log(await image.encodedWith.mozjpeg);
  await imagePool.close();
})();
