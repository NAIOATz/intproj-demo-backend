var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var studyPlanRouter = require('./routes/studyPlan-route')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const studyPlansRouter = require('./routes/studyPlan-route');
app.use('/', studyPlanRouter)

// // 404
// app.use((req, res) => res.status(404).json({error: 'Not Found'}));
// // error
// app.use(errorHandler);

module.exports = app;
