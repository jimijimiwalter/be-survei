const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(cors(
    {
        allowedHeaders: ["Authorization", "Access-Control-Allow-Origin", "Content-Type", "Access-Control-Allow-Credentials"],
        credentials: true,
        origin: ['http://localhost:3000', 'https://localhost:3000']
    }
))

const MAX_AGE_COOKIE = 3 * 24 * 60 * 60 * 1000 // 3d same as jwt expired time

app.get('/', (req, res) => {
    res.json({ "ok": 'Hello World!' })
})

app.get('/cookie', (req, res) => {
    res.cookie('Authorization', "asd", { maxAge: MAX_AGE_COOKIE, httpOnly: true });
    res.json({ "ok": 'Hello World! Cookie' })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port 8081`)
})
