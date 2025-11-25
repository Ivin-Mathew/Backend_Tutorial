const express = require("express");
const fs = require("fs");
const path = require("path");

const itemsRouter = require("./routes/items");
const plantsRouter = require("./routes/plants");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

const uploadsDir = path.join(__dirname,"uploads");
if(!fs.existsSync(uploadsDir))
    fs.mkdirSync(uploadsDir, {
        recursive:true
    });

app.use("/uploads",express.static(uploadsDir));
app.use(logger);

app.get("/",(req,res) =>{
res.send("<h1>This is the response to the base route.</h1>");
})

app.use("/items", itemsRouter);
app.use("/plants", plantsRouter);

app.use(errorHandler);

const port = 3123;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})