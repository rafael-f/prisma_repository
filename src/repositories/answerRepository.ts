import { prisma } from "../config/database.js";

async function create(answer:string,number:number) {
    return await prisma.answers.create({data:{ answer ,questionId:number},})
}


const answerRepository = {
    create,
}

export default answerRepository;