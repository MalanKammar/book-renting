const categoryRoute=require('express').Router()
const categoryCtrl=require('../controller/categoryController')
const authMiddleware=require('../middleware/authMiddleware')
const adminAuth=require('../middleware/adminAuth')

categoryRoute.get(`/all`,authMiddleware,adminAuth , categoryCtrl.getAll)
categoryRoute.get(`/single/:id`,categoryCtrl.getSingle)
categoryRoute.post(`/create`,categoryCtrl.create)
categoryRoute.patch(`/update/:id`,categoryCtrl.update)
categoryRoute.delete(`/delete/:id`,categoryCtrl.delete)

module.exports=categoryRoute