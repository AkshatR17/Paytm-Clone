const express = require("express");
const router = require('./routes/index');

const app = express();
app.use('api/v1', router);

