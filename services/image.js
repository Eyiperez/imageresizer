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
   return await sharp(imageData).resize(parseInt(height), parseInt(width)).png.toBuffer();
}

module.exports = ImageService;