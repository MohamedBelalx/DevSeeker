const express = require('express');

const app = express();

const connectDB = require('./config/DB');

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello from test express server');
})
// add api routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));




app.listen(PORT,()=>console.log(`server staert at ${PORT}`));