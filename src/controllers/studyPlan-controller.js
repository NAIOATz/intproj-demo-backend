// HTTP-level logic only
const service = require('../services/studyPlan-service');

/** GET /api/study-plans */
exports.list = async (req, res, next) => {
    try {
        // No params for PBI1, just return list
        const data = await service.listPlans();
        return res.status(200).json({ items: data }); // stable envelope
    } catch (err) {
        // Let the global error handler respond 500
        return next(err);
    }
};
