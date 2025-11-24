const express = require("express");
const itemsRouter = require("./routes/items");
const plantsRouter = require("./routes/plants");

const app = express();
app.use(express.json());

app.get("/",(req,res) =>{
res.send("<h1>This is the response to the base route.</h1>");
})

app.use("/items", itemsRouter);

app.use("/plants", plantsRouter);


const port = 3123;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})