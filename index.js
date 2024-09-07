import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        message:"type the message :",
        name:"URL",
    },
])
 .then((answer)=>{
    const url = answer.URL;
    var Qr =qr.image(url)
    Qr.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("URL.text",url,(err)=>{
        if (err) throw err;
        console.log("the file has been saved");
    });

})
.catch((error) => {
    if (error.isTtyError) {
      console.error("Error: Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });
