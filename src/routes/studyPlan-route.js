// Map URL to controller
const express = require('express');
const controller = require('../controllers/studyPlan-controller');
const router = express.Router();

// GET /api/study-plans
router.get('/api/study-plans', controller.list);

module.exports = router;