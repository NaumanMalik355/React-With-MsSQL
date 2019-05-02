const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const sql = require("mssql");
const app = express();

app.use(cors())
// app.use(cors({
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false
// }));

let config = {
  user: 'sa',
  password: '12345',
  server: 'localhost',
  database: 'Labb',
 
}
new sql.connect(config, err => {
   console.log(err);
})


/********************************************************************************************
***************************************** Manage Students ***********************************
*********************************************************************************************/

app.get('/api/students/list', (req, res) => {
    request = new sql.Request()
    let Query = `SELECT * FROM gigs`;
    request.query(Query, (err, data) => {
      if(err) {
        res.send(err);
      }else {
        res.send(data);
        // console.log(data);

      }
    })
})



// app.post('/api/student/add', function(req, res) {

//     const {FirstName, LastName, Contact, Email, RegistrationNumber, Status} = req.query;
//     request = new sql.Request();

//     let query = `Insert into Student(FirstName, LastName, Contact, Email, RegistrationNumber, Status)
//     values('${FirstName}', '${LastName}', '${Contact}', '${Email}', '${RegistrationNumber}', ${`(Select LookupId from Lookup where '${Status}' = Lookup.LookupId )`})`;
//     request.query(query, function(err, data) {
//       if(err) {
//         console.log(err);
//         res.send(err);
//       }
//       res.send(data);
//     });
//   });

/********************************************************************************************
***************************************** Manage CLOs ***********************************
*********************************************************************************************/


// app.post('api/clo/add', function(req, res) {
//   const {Name, DateCreated, DateUpdated} = req.query;
//   request = new sql.request();
//   let now = new Date();
//   // console.log(now);

//   let query = `Insert into Clo(Name, DateCreated, DateUpdated) values('${Name}', '${now}', '${now}')`;
//   request.query(query, (err, data)=> {
//     if(err) {
//       console.log(err);
//       res.send(err);
//     }
//     res.send(data);
//   });
// });

























  let server = app.listen(3000, function() {
    console.log("connection is established");
  })
  // For Second Query

