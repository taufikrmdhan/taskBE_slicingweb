// konsep mvc
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
// buat route
const userRoute = require('./src/router/user.routes');
const recipeRoute = require('./src/router/recipe.routes');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(xss());
app.use(userRoute, recipeRoute);

// jalankan express
app.listen(4000, () => {
  console.log('server is running on port 4000');
});
