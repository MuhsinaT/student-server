const mongoos=require('mongoose')

const studentSchema=new mongoos.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    teacherId:{
        type:String,
        required:true
    }
})

const students=mongoos.model('students',studentSchema)
module.exports=students