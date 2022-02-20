import Service from './service'

export default class Controller {
    
    public static async createPost(req, res): Promise<any> {
        try {
            const result = await Service.createPost(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async getPage(req, res): Promise<any> {
        try {
            const result = await Service.getPage(req.query);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async searchByTag(req, res): Promise<any> {
        try {
            const result = await Service.getPage(req.query);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async searchByTitle(req, res): Promise<any> {
        try {
            const result = await Service.getPage(req.query);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async updatePost(req, res): Promise<any> {
        try {
            const result = await Service.updatePost(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

    public static async deletePost(req, res): Promise<any> {
        try {
            const result = await Service.deletePost(req.body);
            res.status(200).json(result);
        }
        catch(err) {
            console.log(err);
            res.status(400).send(err);
        }
    }

}