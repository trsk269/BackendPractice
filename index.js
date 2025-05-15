const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const postRoutes = require("./routes/posts");

dotenv.config();

const app = express();
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(cors({
  origin: "https://fronted-practice.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



app.use("/api/posts", postRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5001, () => {
            console.log("server is running at 5001");
        });
    })
    .catch((error) => {
        console.error("Connection error", error);
    });