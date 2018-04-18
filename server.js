//add all npm packages

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mutler = require('mutler');
const ejs = require('ejs');

app.listen(process.env.PORT || 3000); 