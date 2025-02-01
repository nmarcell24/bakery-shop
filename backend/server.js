const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const dessertRoutes = require('./routes/desserts');

const app = express();


//middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/', dessertRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

