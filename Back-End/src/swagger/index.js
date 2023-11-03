/**
 * @swagger
 * /api/post/getPost:
 *  get:
 *      tags: [Post]
 *      description: Lấy tất các blog
 *      summary: Lấy tất các blog
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/post/detailPost/{id}:
 *  get:
 *      tags: [Post]
 *      description: Lấy thông tin chi tiết blog
 * 
 *      summary: Lấy thông tin chi tiết blog
 *      
 *      parameters:
 *      - in: path
 *        description: Nhập ID ảnh
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
 *      description: Đăng tải bài blog
 *      summary: Đăng tải bài blog
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
