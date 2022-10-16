const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true })) ; 
app.set('view engine', 'ejs');

app.post("/post", (req, res) => {
res.send("Connected to react ! ")
});


app.post("/getdetails", (req, res) => {
res.send("Got Details ! ") ;    
});

app.post("/backend/details" , (req, res) => {
    const name = req.body.name ;
    const age = req.body.age ;  
    const email = req.body.email ;  
    const password = req.body.password ; 
    const ans = req.body.ans ; 

    res.render('signupdata' , {

        name : name , 
        age : age , 
        email : email , 
        password : password , 
        ans : ans , 
    })

})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
