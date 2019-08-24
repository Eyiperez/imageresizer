const axios = require('axios');
const sharp = require('sharp');
const ImageService = {};

ImageService.getImageDataFromUrl = async (url) => {
    const response = await axios({
        method: 'get',
        url,
        responseType:'arraybuffer'
    });
    return response.data;
}

ImageService.resizeImageData = async (imageData, height, width) => {
    return await sharp(imageData).resize({
      width: parseInt(width),
      height: parseInt(height),
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    }).png().toBuffer();
  }

module.exports = ImageService;