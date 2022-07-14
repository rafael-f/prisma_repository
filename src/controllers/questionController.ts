import { Request, Response } from "express";
import answerService, { CreateAnswerData } from "../services/answerService.js";
import questionService, { CreateQuestionData }  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const question:CreateQuestionData = req.body;
  await questionService.create(question);

  res.sendStatus(200);
}

export async function answer(req: Request, res: Response) {
  const answer:string = req.body.answer;
  const id = req.params.id;
  const number = +id;
  await answerService.create(answer,number);
  
  res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll();

  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = req.params.id;
  const number = +id;

  const question = await questionService.findOne(number);

  res.status(200).send(question)
}
