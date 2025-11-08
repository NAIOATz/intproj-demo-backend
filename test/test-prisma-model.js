const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function test () {
    return await prisma.studyPlan.findUnique(
        {where: {id: 1}},

    );
}
async function main()
{
    const result = await test();
    console.log(result);
}

main();