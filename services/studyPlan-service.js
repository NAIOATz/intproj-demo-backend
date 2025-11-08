const repo = require('../repositories/studyPlan.repository');

async function list({ page = 1, pageSize = 50 }) {
    const take = Math.min(Number(pageSize) || 50, 100);
    const skip = Math.max((Number(page) - 1) * take, 0);
    const items = await repo.findMany({ skip, take });
    return items;
}

async function get(id) {
    const item = await repo.findById(Number(id));
    if (!item) throw new Error('Not found');
    return item;
}

async function create(payload) {
    // ควร validate ก่อนใช้งานจริง
    return repo.create(payload);
}

async function update(id, payload) {
    await get(id); // ensure exists
    return repo.update(Number(id), payload);
}

async function remove(id) {
    await get(id);
    await repo.remove(Number(id));
    return { ok: true };
}

async function listStudentPlans() {
    return repo.findStudentPlans();
}

module.exports = { list, get, create, update, remove, listStudentPlans };
