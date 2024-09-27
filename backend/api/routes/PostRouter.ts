import express from "express";
import PostController from "../controllers/PostController";
const router = express.Router()
const postController = new PostController()

router.get('/posts', (req, res, next) => {
    // ************* Use for write docs to swagger autogen
    // #swagger.tags = ['Posts']
    // #swagger.summary = 'Get posts list'
    // #swagger.description = 'Get posts list and use pagination'
    /*
        #swagger.parameters['page'] = {
            in: 'query',
            type: 'number',
            description: 'Page for pagination. Page is not required, default is 1.'
        }

        #swagger.parameters['pagesize'] = {
            in: 'query',
            type: 'number',
            description: 'Item quantity which per page return. Pagesize is not required. Default is 10.'
        }

        #swagger.responses[200] = {
            "message": "Get posts successfully",
            "statusCode": 200,
            "pagination": {
                "currentPage": 1,
                "totalItems": 100,
                "pagesize": 10
            },
            "data": [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]
        }
    */                
    return next()
},postController.getPosts)

module.exports = router