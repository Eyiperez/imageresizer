const axios = require('axios');
const ImageService = {};

ImageService.getImageDataFromUrl = (url) => {
    const response = await axios({
        method: 'get',
        url,
        responseType:'arraybuffer'
    });
}

module.exports = ImageService;