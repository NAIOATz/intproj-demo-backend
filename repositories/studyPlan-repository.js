const prisma = require('../db/prisma');

// StudyPlan
async function findMany({ skip = 0, take = 50 }) {
    return prisma.studyPlan.findMany({ skip, take, orderBy: { id: 'asc' } });
}
async function findById(id) {
    return prisma.studyPlan.findUnique({ where: { id } });
}
async function create(data) {
    return prisma.studyPlan.create({ data });
}
async function update(id, data) {
    return prisma.studyPlan.update({ where: { id }, data });
}
async function remove(id) {
    return prisma.studyPlan.delete({ where: { id } });
}

// StudentPlan ตัวอย่าง include relation
async function findStudentPlans() {
    return prisma.studentPlan.findMany({ include: { studyPlan: true } });
}

module.exports = {
    findMany, findById, create, update, remove,
    findStudentPlans,
};
