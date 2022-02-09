const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DBModel = require("./models/schema");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Successful");
})

app.post("/post", async (req, res) => {
    const userPhone = req.body.userPhone;
    const transactionAmount = req.body.transactionAmount;
    const timestamp = req.body.timestamp;
    const parameters = new DBModel({userPhone: userPhone, transactionAmount: transactionAmount, timestamp: timestamp});

    try {
        await parameters.save();
        res.send("posted data");
    } catch (err) {
        console.log(err);
    }
});

app.listen(3004, () => {
    console.log("server running on port 3004");
});