const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const cors = require('cors');
const server = express();
server.use(cors());
server.use(bodyParser.json());
 
 
//Establish the database connection
 
const db = mysql.createConnection({
 
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "Student",
    dateStrings: true
});
 
db.connect(function (error) {
    if (error) {
        console.log(error);
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });
 
//Establish the Port
 
server.listen(8085,function check(error) {
    if (error)
    {
        console.log("Connection Failed.");
    }
 
    else
    {
        console.log("Mysql started at localhost");
 
    }
});
 
//Create Student Records
 
server.post("/api/student/add", (req, res) => {
    let details = {
      FirstName: req.body.FirstName,
      FamilyName: req.body.FamilyName,
      dob: req.body.dob,
      email: req.body.email,
    };
    let sql = "INSERT INTO StudentData SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "Unable to insert Student record." });
      } else {
        res.send({ status: true, message: "Student record created successfully." });
      }
    });
  });
 
 
 
//view Student Records
 
server.get("/api/student", (req, res) => {
    var sql = "SELECT * FROM StudentData";
    db.query(sql, function (error, result) {
      if (error) {
        console.log(error);
        console.log("Error Connecting to DB");
      } else {
        console.log(result[0])
        res.send({ status: true, data: result });
      }
    });
  });
 
 
  //Delete Student Records
 
  server.delete("/api/student/delete/:id", (req, res) => {
    let sql = "DELETE FROM StudentData WHERE StudentID=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        console.log(error)
        res.send({ status: false, message: "Student Deletion Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });


  //Create Course Records
 
server.post("/api/course/add", (req, res) => {
    let details = {
      Course: req.body.Course,
    };
    let sql = "INSERT INTO CourseData SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "Unable to insert course record." });
      } else {
        res.send({ status: true, message: "course record created successfully." });
      }
    });
  });
 
 
 
//view Course Records
 
server.get("/api/course", (req, res) => {
    var sql = "SELECT * FROM CourseData";
    db.query(sql, function (error, result) {
      if (error) {
        console.log(error);
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });
 
 
  //Delete Course Records
 
  server.delete("/api/course/delete/:id", (req, res) => {
    let sql = "DELETE FROM CourseData WHERE CourseID=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        console.log(error)
        res.send({ status: false, message: "Course Deletion Failed" });
      } else {
        res.send({ status: true, message: "Course Deleted successfully" });
      }
    });
  });



  //Create Result Records
 
server.post("/api/result/add", (req, res) => {
    let details = {
      FirstName: req.body.FirstName,
      FamilyName: req.body.FamilyName,
      Course: req.body.Course,
      result: req.body.Result,
    };
    let sql = "INSERT INTO ResultData SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        console.log(error);
        res.send({ status: false, message: "Unable to insert Score record." });
      } else {
        res.send({ status: true, message: "Score record created successfully." });
      }
    });
  });
 
 
 
//view Result Records
 
server.get("/api/result", (req, res) => {
    var sql = "SELECT * FROM ResultData";
    db.query(sql, function (error, result) {
      if (error) {
        console.log(error);
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });
 
 
  //Delete Result Records
 
  server.delete("/api/result/delete/:id", (req, res) => {
    let sql = "DELETE FROM ResultData WHERE ResultID=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        console.log(error)
        res.send({ status: false, message: "Result Deletion Failed" });
      } else {
        res.send({ status: true, message: "Result Deleted successfully" });
      }
    });
  });

  server