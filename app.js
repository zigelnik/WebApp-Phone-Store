const express = require('express'); //Creating Express service
const app = express();
const mongoose = require('mongoose'); 
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');
const productsRouter = require('./routes/product');
const categoriesRouter = require('./routes/category');
const userRouter = require('./routes/User');
const orderRouter = require('./routes/orders');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const api = process.env.API_URL;


//Allowing all http request from other origins
app.use(cors());
app.options('*',cors());


//Checking connection to DB
mongoose.connect(process.env.MONGODB_URL, {
useNewUrlParser: true,useUnifiedTopology:true,dbName:'Phone-shop'
}).then(()=>{
    console.log('Database Connection is ready...')
}).catch((err)=>{
    console.log(err);
});

//middleware
app.use(express.static('public')); // Serve static files from the "public" directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);


//Routers
//http://localhost:3000/api/v1/products
app.use(`${api}/products`,productsRouter);
//http://localhost:3000/api/v1/category
app.use(`${api}/category`,categoriesRouter);
//http://localhost:3000/api/v1/users
app.use(`${api}/users`,userRouter);
//http://localhost:3000/api/v1/orders
app.use(`${api}/orders`,orderRouter);


//open server for listening
const port = process.env.PORT
app.listen(port, () => {
    console.log(api);
    console.log('server is running on port ' + port)
    });