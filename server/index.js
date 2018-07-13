const express = require('express')

const PORT = 8181
const app = express()

app.listen(PORT, () => console.log(`Listening on port ${PORT} in development`))