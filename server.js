const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')

//Database
// const db = require('./config/database');
// var db = require('./models');

// testdb
// db.authenticate()
//     .then(() => console.log('db connected....'))
//     .catch(err => console.log('Error: ' + err))

// db.sequelize.sync()
//     .then(() => console.log('db connected....'))
//     .catch(err => console.log('Error: ' + err))


const app = express();
// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//passport middleware 
app.use(passport.initialize());

//passport config
require('./config/passportAdmin')(passport);
require('./config/passportUser')(passport);
require('./config/passportFirstLevelAdmin')(passport);



/** set up routes {API Endpoints} */
app.use(require('./routes'));


//connection
const PORT = process.env.PORT || 3001;



app.listen(PORT, console.log(`Server started on port ${PORT} `));
