const {createUser} = require("redis");

const client = createUser({url: "redis://localhost:6379"});


client.on("error", function(err){
    console.error({
        message: err.message
    })
})

module.exports = client;