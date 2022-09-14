// konsep mvc
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
// buat route
const userRoute = require('./src/router/user.routes');
const recipeRoute = require('./src/router/recipe.routes');
const commentRoute = require('./src/router/comment.routes');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(xss());
app.use(userRoute, recipeRoute, commentRoute);

// jalankan express
app.listen(process.env.PORT, () => {
  console.log('server is running on port '+ process.env.PORT);
});
