fs = require('fs')

//write to a file
fs.writeFile("./write.txt","Hello Every one.Hope Good", (err) => {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Successful");
    }
})