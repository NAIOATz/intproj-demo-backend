const prisma = require('../db/prisma');

// Data access layer
async function getAllStudyPlans() {
    // Query all records from study_plan table
    return prisma.studyPlan.findMany({
        orderBy: { id: 'asc' }, // ascending order
    });
}

module.exports = { getAllStudyPlans };
