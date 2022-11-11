const express = require('express')
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json()); // parse json bodies in the request object
app.use("/order", require("./route/orderRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`server running PORT ${PORT}`))