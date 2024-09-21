const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const cors = require('cors');
const port = process.env.PORT || 3000
const orderRoutes = require("./routes/orderRoutes");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize experss app
const app = express();

// Middleware for JSON body parsing
app.use(cors());
app.use(express.json());

// Use order routes
app.use("/api", orderRoutes);

app.get('/', (req, res) =>{
    res.send("Organic Server Running!!!");
})

app.listen(port, ()=>{
    console.log(`Organic server listening on port ${port}`);
})