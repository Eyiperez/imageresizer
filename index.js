const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    //const {}

    try {

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