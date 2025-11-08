const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const pino = require('pino');

const studyPlanRouter = require('./routes/studyPlan-route')

const app = express();
const log = pino();

// Global middlewares (order matters)
app.use(helmet());  // security headers
app.use(cors());    // enable CORS
app.use(express.json());    // parse JSON body
app.use(express.urlencoded({ extended: false }));   // parse form body if needed
app.use(cookieParser());    // parse cookies

// Dev logger only
if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// --- Health check
app.get('/health', (req, res) => res.json({ok: true}));

// --- Feature routes
app.use(studyPlanRouter);

// --- 404 handler
app.use((req, res) => {
    return res.status(404).json({error: 'Not Found'});
})

// --- Central error handler
app.use((err, req, res, next)=>{
    log.error({err}, 'unhandled_error');
    return res.status(500).json({error: 'Internal Server Error'});
})

// --- Start server (no bin/www)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => log.info({ port: PORT }, 'server started'));

module.exports = app;
