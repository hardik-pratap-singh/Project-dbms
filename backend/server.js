const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const { redirect } = require("react-router-dom");
const path = require("path")
const cors = require("cors");
var nodemailer = require('nodemailer');
const session = require('express-session');
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));


var sess;


// const path = require("path"); 
const { reset } = require("nodemon");

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rinzler.user.id@gmail.com',
    pass: 'cjvfcszrzakmvohw'
  }
});

var mailOptions = {
  from: 'rinzler.user.id@gmail.com',
  to: 'hardik182002@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hardik'
});


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// app.get("/post", (req, res) => {
//   res.send("Connected to react ! ")
// });
// app.get("/", (req, res) => {
//   res.send("helloworld");
// })


app.get("/getproducts", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM users natural join seller natural join products;", function (err, result, fields) {
      if (err) throw err;
      else {
        // console.log(result);
        res.send({ articles: result });
      }
    });
  });
})

app.get("/getfields", (req, res) => {
  con.connect(function (err) {
    if (err) throw err;
    con.query("select * from products, seller where products.productid=seller.productid and userid='hps'", function (err, result, fields) {
      if (err) throw err;
      else {
        // console.log(result);
        res.send({ articles: result });
      }
    });
  });
})

app.post("/backend/login", (req, res) => {
  // res.send("Welcome to Login Page ! ")
  const userid = req.body.userid;
  const passwd = req.body.password;



  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(userid);
    console.log(passwd);
    let sql = `select * from master_login where userid = '${userid}' and password = '${passwd}' `;
    con.query(sql, function (err, result) {
      console.log(err);
      console.log(result);
      if (result.length == 0) {
        res.send("<script>alert('Incorrect Login OR Password'); window.location.href = '/';</script>")
      }
      else {
        // res.sendFile(path.join(__dirname , "/views/loginchecksuccess.html")) ; 
        sess = req.session;
        sess.userid = userid; // equivalent to $_SESSION['email'] in PHP.
        // sess. = "abc" ;
        res.send("<script>alert('You are succesfully Logged In'); window.location.href = '/';</script>")

      }

    });
  });
});


// app.post("/getdetails", (req, res) => {
//   res.send("Got Details ! ");
// });

app.post("/backend/signup", (req, res) => {
  const name = req.body.name;
  const userid = req.body.userid;
  const age = req.body.age;
  const email = req.body.email;
  const phoneno = req.body.phoneno;
  const password = req.body.password;
  const ans = req.body.ans;

  con.connect(function (err) {
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


app.post("/backend/additem", (req, res) => {

  // let productid = 6 ; 
  sess = req.session;
  if (!sess.userid) {
    return res.write("<script>alert('You are not LoggedIn. Kindly LogIn'); window.location.href = '/Login';</script>");
  }

  const itemname = req.body.itemname;
  const desc = req.body.desc;
  const price = req.body.price;
  const category = req.body.category;
  const image = req.body.image;


  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql1 = `SELECT MAX(productid) AS maxi FROM products`;
    con.query(sql1, function (err, result) {
      if (err) throw err;
      let current = (result[0].maxi);
      let productid = current + 1;  
      console.log(productid);
      // console.log("pehli query")
      var sql = `INSERT INTO products VALUES ('${productid}' ,'${itemname}', '${desc}' , '${price}' , '${category}' , '${image}' , 'N')`;
      var sql2 = `INSERT INTO seller VALUES ('${productid}' ,'${sess.userid}')`;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted into products");
        // console.log((__dirname )) ;
      });
      con.query(sql2, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted into seller");
        // console.log((__dirname )) ;
      });

    });

  });

  // res.redirect("/") ; 
  res.send(`<script>alert('Hello ${sess.userid} ! Your product is listed among Sold Items'); window.location.href = '/';</script>`)
  // res.send(path.join(__dirname + "../src/App.js")) ; 
})

app.post("/backend/buyitem", (req, res) => {

  // let productid = 6 ; 
  sess = req.session;
  if (!sess.userid) {
    // res.send("<script>alert('You are not LoggedIn. Kindly LogIn'); window.location.href = '/Login';</script>");
    return res.write("<script>alert('You are not LoggedIn. Kindly LogIn'); window.location.href = '/Login';</script>");
  }


  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(`<script>alert('Hello ${sess.userid} ! We will notify the seller!'); window.location.href = '/';</script>`)
})


app.post("/backend/Logout" , (req , res) => {
  sess=req.session ;
  a=sess.userid; 
  req.session.destroy((err)=>{
    if(err){
      return console.log(err);
    }
    // res.redirect('/')
    res.send(`<script>alert('Bye ${a} ! Hope To see you again !'); window.location.href = '/';</script>`)
  } ); 
  
  // res.redirect

})


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
