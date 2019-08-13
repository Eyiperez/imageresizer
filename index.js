const express = require('express');
const app = express();
const port = 3000;

const SecurityService = require('./services/security');

app.get('/', (req, res, next) => {
    const {height, width, image} = req.query;

    try {
        //Check if all params are filled out
        SecurityService.checkForParams({height, width, image});
        
        res.json({height, width, image})
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