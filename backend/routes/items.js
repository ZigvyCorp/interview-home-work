const express = require('express')
const router = express.Router()

const Item = require('../schemas/Item');

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: The name item
 *         level:
 *           type: int
 *           description: The priority of item
 *       required:
 *         - _id
 *       example:
 *          _id: ""
 *          name: ""
 *          level: 1
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     ItemAdd:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         name:
 *           type: string
 *           description: The name item
 *         level:
 *           type: int
 *           description: The priority of item
 *       example:
 *          name: ""
 *          level: 1
 * 
*/

/** 
 * @swagger 
 * /Item: 
 *   get: 
 *     summary: List of item
 *     tags: [Item]
 *     description: Get all Books 
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */

router.get('/Item', async (req, res) => {
  res.send(await Item.find({}))
})

/**
 * @swagger
 * /item:
 *   post:
 *     summary: Create a new Item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemAdd'
 *     responses:
 *       200:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */

router.post("/item", async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.send(item);
  } catch (error) {
    return res.status(500).send(error);
  }
});


/**
 * @swagger
 * /item:
 *   put:
 *     summary: Update a Item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was successfully updated  
 *       500:
 *         description: Some server error
 */

router.put("/item", async (req, res) => {
  try {
    console.log(req.body);
    await Item.updateOne({ _id: req.body.id }, { $set: req.body })

    res.send("The item was successfully updated ");
  } catch (error) {
    return res.status(500).send(error);
  }
});


/**
 * @swagger
 * /item:
 *   delete:
 *     summary: Delete a Item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:          
 *                 type: string
 *             required:
 *               - _id
 *     responses:
 *       200:
 *         description: The item was successfully deleted
 *       500:
 *         description: Some server error
 */

router.delete("/item", async (req, res) => {
  try {

    await Item.deleteOne({_id: req.body._id})
    res.send("The item was successfully deleted ");
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router