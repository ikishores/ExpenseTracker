const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const { connect } = require('http2');
const connectDb = require('./config/connectDb');

dotenv.config();
connectDb();

//middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(cors())

app.use('/api/v1/users',require('./routes/userRoute'))

//tracstions
app.use('/api/v1/transections',require('./routes/transectionRoutes'));


const PORT = process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`server running  ${PORT}`);
})
