const mongoose = require("mongoose");
const uri = "mongodb+srv://thiagoaraujorodrigues:vqcuJokmem3E9vUM@diablo.uh3mtvm.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };