const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 7000;
// database.then(() => {
//     console.log('connect database successfully !');
// }).catch((error) => {
//     console.log(error);
// })

app.listen(port, () => {
  console.log('server running at http://localhost:' + port);
});

module.exports = app;
