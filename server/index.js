const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const logRoutes = require('./routes/logRoutes')
const uploadRouter = require('./upload')

app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/upload', uploadRouter)
app.use('/api/logs', logRoutes)

const db = require("./models");
const PORT = process.env.PORT || 5000

db.sequelize.sync().then(() => {
    server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})
