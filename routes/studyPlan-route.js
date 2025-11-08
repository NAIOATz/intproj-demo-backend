const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()

// GET /api/study-plans
router.get('/api/study-plans', async (req, res) => {
    try {
        const studyPlans = await prisma.studyPlan.findMany({
            orderBy: { id: 'asc' },
        })
        res.json(studyPlans)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

module.exports = router
