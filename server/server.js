// import express
const express = require('express');
// import cors to connect frontend and server (cross origin request)
const cors = require('cors') 
const app = express();


// Midleware - need middleware to make post request
app.use(cors()) 
app.use(express.json()); // 
app.use(express.urlencoded({extended: true}));   

require('./config/mongoose.config')
// import routes
require('./routes/product.routes')(app);

// start the server
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})