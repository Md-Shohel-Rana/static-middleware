const express = require('express');
const app = express();
const PORT= 3000;

app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/index.html");
});




app.listen(PORT,(req,res)=>{
    console.log(`server running successfully at http://localhost:${PORT}`);
});