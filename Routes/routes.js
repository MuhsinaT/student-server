const express=require('express')

const userController=require('../Controllers/userController')
const studentController=require('../Controllers/studentController')

const jwtmiddle=require('../Middleware/jwtMiddleware')
const multerInstance=require('../Middleware/multer')


const router=express.Router()



router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)
router.post('/addstudent',jwtmiddle,multerInstance.single('image'),studentController.addStudent)
router.get('/getstudents',jwtmiddle,studentController.getStudents)
router.delete('/dltstudent/:sid',jwtmiddle,studentController.deleteStudent)
router.put('/editstudent/:sid',jwtmiddle,multerInstance.single('image'),studentController.updateStudent)

module.exports=router