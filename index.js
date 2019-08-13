const express = require('express');
const app = express();
const port = 3000;

const SecurityService = require('./services/security');
const ImageService = require('./services/image');

app.get('/', async (req, res, next) => {
    const {height, width, image} = req.query;

    try {
        //Check if all params are filled out
        SecurityService.checkForParams({height, width, image});

        //Get image data from url
        const imageData = await ImageService.getImageDataFromUrl(image);
        console.log(imageData)

        //Resize the image data and return it
        const resizedImage = await ImageService.resizeImageData(imageData, height, width);

        res.type('png');
        res.end(resizedImage);
    } catch(err) {
        next(err);
    }
})

app.use((req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message
    })

});

app.listen(port, () => {
    console.log(`listening on  port ${port}`)
});