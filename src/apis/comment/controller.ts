import Service from './service';

export default class Controller {
    
    public static async createComment(req, res): Promise<any> {
        try {
            const result = await Service.createComment(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async getCommentById(req, res): Promise<any> {
        try {
            const result = await Service.getCommentById(req.params);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async updateComment(req, res): Promise<any> {
        try {
            const result = await Service.updateComment(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async deleteComment(req, res): Promise<any> {
        try {
            const result = await Service.deleteComment(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

}