var express = require('express');
var router = express.Router();
var asyncHandler = require('../middleware/async');


const controllerName = 'users'
const MainModel = require(__path_models + controllerName)

router.get('/', asyncHandler( async (req, res, next) => {
  const data = await MainModel.listItems(req.query, {task: 'all'})
  res.status(201).json({
      success: true,
      count: data.length,
      data: data,
  })
}))
router.get('/:id', asyncHandler (async (req, res, next) => {
  const data = await MainModel.listItems({id: req.params.id}, {task: 'one'})
  res.status(201).json({
      success: true,
      data: data
  })  
}))


router.post('/add', asyncHandler (async (req, res, next) => {
    const data = await MainModel.create(req.body);
    res.status(201).json({
        success : true,
        data : data
    })
}))
router.delete('/delete/:id', asyncHandler (async (req, res, next) => {
  const data = await MainModel.deleteItem({id: req.params.id}, {task: 'one'})
  res.status(201).json({
      success: true,
      data: data
  })  
}))
router.put('/edit/:id', asyncHandler(async (req, res, next) => {
    const data = await MainModel.editItem({'id' : req.params.id,'body' : req.body} , {'task' : 'edit'})
    res.status(200).json({
        success : true,
        data : data
    })
}))


module.exports = router;

