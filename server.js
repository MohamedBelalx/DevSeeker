const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello from test express server');
})

app.listen(PORT,()=>console.log(`server staert at ${PORT}`));