import { NextFunction, Response } from "express";

export const isString = (object: { key: string, value: any }, res: Response, next: NextFunction) => {
    return typeof object.value === "string" ? next() : res.status(400).send({ message: `${object.key} must be a string` })
}

export const isEmail = (object: { key: string, value: any }, res: Response, next: NextFunction) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(object.value) ? next() : res.status(400).send({ message: `${object.key} must be a email` })
}

export const passwordRegex = (object: { key: string, value: any }, res: Response, next: NextFunction) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(object.value) ? next() : res.status(400).send({ message: `${object.key} must have at least one lowercase, one uppercase, one digit, one special character, Require a minimum length of 8 characters.` })
}

export const isNotEmpty = (object: { key: string, value: any }, res: Response, next: NextFunction) => {
    return object.value === null || object.value === undefined ? res.status(400).send({ message: `${object.key} is required` }) : next()
}