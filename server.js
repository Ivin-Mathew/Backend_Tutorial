const express = require("express");
const itemsRouter = require("./routes/items");

const app = express();

app.get("/",(req,res) =>{
res.send("<h1>This is the response to the base route.</h1>");
})

app.use("/items", itemsRouter);

const port = 3123;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})