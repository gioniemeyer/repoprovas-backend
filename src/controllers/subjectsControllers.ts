import {Request, Response} from "express";
import * as subjectsServices from "../services/subjectsServices";

export async function filter(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        const isValid = await subjectsServices.CheckCourseId(id);
        if(!isValid) return res.sendStatus(401);
        const subjects = await subjectsServices.getSubjects(id);
        res.status(200).send(subjects);    
    } catch(err) {
        res.status(500).send(err)
    }
}

export async function findAll(req: Request, res: Response) {
    try {
        const subjects = await subjectsServices.getAll()
        res.status(200).send(subjects);
    } catch(err) {
        res.status(500).send(err)
    }
}