const svc = require('../services/studyPlan.service');

async function list(req, res, next) {
    try {
        const data = await svc.list(req.query);
        res.json(data);
    } catch (e) { next(e); }
}

async function get(req, res, next) {
    try {
        const data = await svc.get(req.params.id);
        res.json(data);
    } catch (e) { next(e); }
}

async function create(req, res, next) {
    try {
        const created = await svc.create(req.body);
        res.status(201).json(created);
    } catch (e) { next(e); }
}

async function update(req, res, next) {
    try {
        const updated = await svc.update(req.params.id, req.body);
        res.json(updated);
    } catch (e) { next(e); }
}

async function remove(req, res, next) {
    try {
        const result = await svc.remove(req.params.id);
        res.json(result);
    } catch (e) { next(e); }
}

async function listStudentPlans(req, res, next) {
    try {
        const data = await svc.listStudentPlans();
        res.json(data);
    } catch (e) { next(e); }
}

module.exports = { list, get, create, update, remove, listStudentPlans };
