const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const {
  port,
  mongoUri,
  mongoUser,
  mongoPassword,
  mongoDatabase
} = require('./keys');
const fetchData = require('./routes/animals');

// Express app setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongo client setup
const mongooseOptions = {
  dbName: `${mongoDatabase}`,
  user: `${mongoUser}`,
  pass: `${mongoPassword}`,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  directConnection: true
};

// const initializeDb = () => {
//   const daily = new Report({
//     title: 'Daily Report',
//     slug: 'daily-report',
//     published: true,
//     author: 'Matt Thrasher',
//     content: "The water's fine",
//     tags: ['water', 'temperature']
//   });
//   daily.save();
// };

mongoose
  .connect(`${mongoUri}`, mongooseOptions)
  .then(() => {
    console.log('Successfully conncected to mongo db...');
    // initializeDb();
  })
  .catch((e) => console.log(e));

// Express route handlers
app.use(fetchData);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
