const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hardik',
    database: 'hardik'
});



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

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO users (name, age, email, password, ans) VALUES ('${name}', '${age}' , '${email}' , '${password}' , '${ans}')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });

})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
