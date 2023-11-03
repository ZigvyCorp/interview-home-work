/**
 * @swagger
 * /api/post/getPost:
 *  get:
 *      tags: [Post]
 *      description: Get all blog
 *      summary: Get all blog
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/post/detailPost/{id}:
 *  get:
 *      tags: [Post]
 *      description: Get detail blog
 * 
 *      summary: Get detail blog
 *      
 *      parameters:
 *      - in: path
 *        description: ID Blog
 *        name: id
 *        type: number
 *        required: true
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/post/upPost:
 *  post:
 *      tags: [Post]
 *      description: Up blog
 *      summary: Up blog
 *      parameters:
 *      - in: body
 *        name: Post
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *             userId:
 *              type: integer
 *             title:
 *              type: string
 *             body: 
 *              type: string
 * 
 *      responses:
 *       200: 
 *        description: success   
 */
