// Business logic for Study Plan
const repo = require('../repositories/studyPlan-repository');

/**
 * Return list of plans for VIEW-PLAN-LIST
 * Keep fields minimal and stable for frontend table
 */
async function listPlans() {
    const rows = await repo.getAllStudyPlans(); // DB access via repo
    // Map to DTO to decouple DB shape from API shape
    return rows.map(r => ({
        id: r.id,
        planCode: r.planCode,   // enum string
        nameEng: r.nameEng,
        nameTh: r.nameTh,
    }));
}

module.exports = { listPlans };
