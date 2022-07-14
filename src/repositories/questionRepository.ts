import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function create(question:CreateQuestionData) {
    return await prisma.questions.create({data:question})
}

async function findAll() {
    return await prisma.questions.findMany();
}

async function findById(id:number) {
    return await prisma.questions.findFirst({
        where:{id}
    })
}

const questionRepository = {
    create,
    findAll,
    findById
}

export default questionRepository;