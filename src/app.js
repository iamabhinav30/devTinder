const express =  require("express");

const app = express();

app.use('/test',(req, res)=>{
    res.send("Hello from the server To Abhi")
})

app.listen(3000,()=>{
    console.log("Server is successfully listening on port 3000");
});