const fs = require('fs')

    //Read file Standard way
    fs.readFile("./read.txt", (err,data) => {

        if(err)
        {
            console.log("Error")
        }
        console.log(data.toString());
    })