const router = require('express').Router()
const todoController = require('../controller/Todo')

router.get('/', todoController.getTodo)
router.post('/', todoController.addTodo) 
router.delete('/', todoController.clearTodo) 

module.exports = router 