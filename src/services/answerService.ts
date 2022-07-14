import { Answers } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";
export type CreateAnswerData = Omit<Answers, "id" | "questionId">;

async function create(answer:string,number:number) {

    return await answerRepository.create(answer,number);
}

const answerService = {
    create
};

export default answerService;