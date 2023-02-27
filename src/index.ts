require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.URI)
.then(() => {
    console.log('Database connected successfully')
})
.catch(error => {
    console.error(error)
})




import rootRoute from './routes/index.route'


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/v1', rootRoute)

// const database =[{room: 100, roomType:"small"}]




app.listen(3000, () => console.log('Server started on port 3000'))
