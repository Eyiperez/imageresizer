const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    try {

    } catch(err) {
        next(err);
    }
})

app.use((req, res, next) => {

});

app.listen(port, () => {
    console.log(`listening on  port ${port}`)
});