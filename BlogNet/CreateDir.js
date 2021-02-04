const { existsSync } = require('fs')

fs = require('fs')

if(!fs.existsSync('./NewDir'))
{
fs.mkdir("./NewDir" ,(err)=> {
    if(err)
    {
        console.log(err);
    }
    console.log("Success");
})
}
else{
    console.log("Exists");
}