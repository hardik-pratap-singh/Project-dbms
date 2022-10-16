const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const { redirect } = require("react-router-dom");
const path = require("path")


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


app.post("/backend/login", (req, res) => {
// res.send("Welcome to Login Page ! ")
  const userid = req.body.userid ; 
  const passwd = req.body.password ;

  

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(userid);
    console.log(passwd);
    let sql = `select * from master_login where userid = '${userid}' and password = '${passwd}' ` ;   
    con.query(sql, function (err, result) {
      // if (err) throw err;
      console.log(err);
      console.log(result);
      if(result.length == 0){
        // res.send("Sorry ! You are not Logged In ! ") ; 
        res.sendFile(path.join(__dirname , "/views/logincheckfailure.html")) ; 
      }
      else{
        res.sendFile(path.join(__dirname , "/views/loginchecksuccess.html")) ; 
      }

    });
  });
// res.send();
});


app.post("/getdetails", (req, res) => {
res.send("Got Details ! ") ;    
});

app.post("/backend/signup" , (req, res) => {
    const name = req.body.name ;
    const userid = req.body.userid ;
    const age = req.body.age ;  
    const email = req.body.email ;  
    const phoneno = req.body.phoneno ;  
    const password = req.body.password ; 
    const ans = req.body.ans ; 

    res.render('signupdata' , {

        name : name , 
        userid : userid , 
        age : age , 
        email : email , 
        phoneno : phoneno ,
        password : password , 
        ans : ans , 
    })

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql1 = `INSERT INTO users (name, userid , age, email, phoneno ,  ans) VALUES ('${name}', '${userid}' ,'${age}' ,'${email}' ,'${phoneno}' , '${ans}')`;
        var sql2 = `INSERT INTO master_login (userid, password) VALUES ('${userid}', '${password}')`;
        
        con.query(sql1, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted into users table");
        });

        con.query(sql2, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted into master_login table");
        });
      });

})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
