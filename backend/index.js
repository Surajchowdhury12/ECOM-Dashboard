const express = require('express')
require('./db/config')
const users = require('./db/users')

const app = express()

app.listen(5000)

app.use(express.json())

app.post('./register', async (req, res) => {
    const user = new users(req.body)
    const result = await user.save()
    res.send(result)

})