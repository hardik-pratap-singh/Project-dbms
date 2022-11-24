const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const { redirect } = require("react-router-dom");
const path = require("path")
const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,   
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hardik'
});


app.use(bodyParser.urlencoded({ extended: true })) ; 
app.set('view engine', 'ejs');

app.get("/post", (req, res) => {
res.send("Connected to react ! ")
});
app.get("/" , (req , res) => {
  res.send("helloworld") ; 
})
app.get("/hardik" , (req , res) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      else{
  //       result.forEach((x) => {
  //           // console.log(x.productid , x.productname , x.productImg.toString()) ;
  //           // console.log(result) ; 
  // // console.log("teesri query")
  //           res.send(result) ; 
  //       })

          
            console.log(result); 
            res.send({articles:result}) ; 
      }
    });
  });
})
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
        // res.sendFile(path.join(__dirname , "/views/logincheckfailure.html")) ; 
        res.send("<script>alert('Incorrect Login OR Password'); window.location.href = '/';</script>")
      }
      else{
        // res.sendFile(path.join(__dirname , "/views/loginchecksuccess.html")) ; 
        res.send("<script>alert('You are succesfully Logged In'); window.location.href = '/';</script>")

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

    // res.render('signupdata' , {

    //     name : name , 
    //     userid : userid , 
    //     age : age , 
    //     email : email , 
    //     phoneno : phoneno ,
    //     password : password , 
    //     ans : ans , 
    // })

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

    res.send("<script>alert('You are registered Successfully'); window.location.href = '/';</script>");

})


app.post("/backend/additem" , (req , res) => {

  let productid = 5  ; 
  const itemname = req.body.itemname ;

    const desc = req.body.desc ; 
    const price = req.body.price ;
    const category = req.body.category ;
    const image = req.body.image ; 


    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql1 = `SELECT MAX(productid) AS maxi FROM products`;
      con.query(sql1, function (err, result) {
        if (err) throw err;
        let current = (result[0].maxi);
        // productid = result.MAX(productid) + 1 ; 
        productid = current + 1 ; 
        console.log(productid) ; 
        console.log("pehli query")
      });

    }); 


      // var sql2 = `INSERT INTO products VALUES ('${productid}' ,'${itemname}', '${desc}' , '${price}' , '${category}' , '${image}' , 'N')`;
      //   con.query(sql2, function (err, result) {
      //     if (err) throw err;
      //     console.log("1 record inserted");
      //   });

 


    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO products VALUES ('${productid}' ,'${itemname}', '${desc}' , '${price}' , '${category}' , '${image}' , 'N')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
      console.log("doosri query")
      
      res.send("Records Inserted !") ; 

      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM products", function (err, result, fields) {
          if (err) throw err;
          else{
      //       result.forEach((x) => {
      //           // console.log(x.productid , x.productname , x.productImg.toString()) ;
      //           // console.log(result) ; 
      // // console.log("teesri query")
    
      //           res.send(result) ; 
      //       })
                console.log(result); 
                // res.send(result) ; 
          }
        });
      });


})




let jsondata = [] ; 


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
