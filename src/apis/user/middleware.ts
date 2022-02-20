import { validUsername, validPassword } from '../../shared/valid';

interface Login {
    username: string,
    password: string
}

interface Register {
    username: string,
    password: string,
    email: string
}

export default class Middleware {

    public static user(req, res, next): void {
        try {
            const payload: Login = req.body;
            if (!validUsername(payload.username)){
                throw new Error('Something went wrong. Please try again!');
            }
            if (!validPassword(payload.password)){
                throw new Error('Something went wrong. Please try again!');
            }
            next();
        }
        catch(err) {
            console.log(err);
            res.status(401).send(err);
        }
    }

}