
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const UserModel = require("./models/trialdb");

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



const connectDB = async () => {
    await mongoose.connect("mongodb+srv://mernstack:mernstack@cluster0.bcuwz6b.mongodb.net/?retryWrites=true&w=majority")
}
connectDB().catch(err => console.log(err));

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model("Kitten", kittySchema);



const silence = new Kitten({ name: "silence is the nane"});

const saveIt = async (err) => {
    await silence.save();
    console.log(err)

}




app.get("/api", (req, res) => {
    res.send("from the api")
})

app.get("/apis", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.listen(5001, () => {console.log("server started on port 5001")})