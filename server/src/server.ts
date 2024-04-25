require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({origin:true, credential:true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/todo", require('./routes/Todo'))


app.use((err, req, res, next) => {
    console.error(err.stack) 
    res.status(500).send("Something broke!")
})

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`server started on: localhost:${port}`)
})

process.on('unhandledRejection', (err:any) => {
    console.log(err.message) 
    server.close(() => process.exit(1))
})
