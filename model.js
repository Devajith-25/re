const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://devajithks07:devajith@cluster0.x6k4q0k.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel