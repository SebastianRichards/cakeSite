
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const User = require("./models/trialdb");

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



mongoose.connect("mongodb+srv://mernstack:mernstack@cluster0.5cslw1o.mongodb.net/?retryWrites=true&w=majority");

const user1 = new User({name: "Seb", age: 27})


run()
async function run() {
    const user1 = new User({name: "Seb", age: 27})
    await user1.save()
    console.log(user1);
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