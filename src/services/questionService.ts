import { Questions } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Questions,"id">;

async function create(text:CreateQuestionData) {
    return await questionRepository.create(text)
}
async function getAll() {
    return await questionRepository.findAll()
}

async function findOne(id:number) {
    return await questionRepository.findById(id);
}

const questionService = {
    create,
    getAll,
    findOne
};

export default questionService;