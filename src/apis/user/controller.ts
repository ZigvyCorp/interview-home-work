import Service from './service';

export default class Controller {

    public static async login(req, res): Promise<void> {
        try {
            const result = await Service.login(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async register(req, res): Promise<void> {
        try {
            const result = await Service.register(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
    
}