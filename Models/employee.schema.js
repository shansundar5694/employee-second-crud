import mongoose from "mongoose";

const empSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  designation: String,
});

export const Employee = mongoose.model("Employee", empSchema);

// const mentorSchema = mongoose.Schema({
//   name:String,
//   students:[
//     {
//       type:mongoose.Schema.Types.ObjectId,
//       ref:'Student'
//     }
//   ]
// },{verisionKey:false})
// const studentSchema = mongoose.Schema({
//   name:String,
//   mentor:
//     {
//       type:mongoose.Schema.Types.ObjectId,
//       ref:'Mentor'
//     }

// },{verisionKey:false})

// const Mentor = mongoose.Model("Mentor",mentorSchema)
// const Student = mongoose.Model("Student",studentSchema)

// create mentor api
// create student api

// assing mentor to student

// app.put('/scedule/mentor/:studentId',async(req,res)=>{
// try {
//   const {studentId } = req.params;
//   const {mentorId} = req.body;
//   const student = await Student.findByIdAndUpdate(studentId,{mentor:mentorId},{new:true})

// } catch (error) {
//   console.log(error);

// }
// })

// app.get('/schedrule/mentor-student/:mentorId',async(req,res)=>{
//   try {
//     const { mentorId} = req.params;
//     const student = await Student.find({mentor:mentorId})
//     res.status()...

//   } catch (error) {
//     console.log(error);

//   }
//   })

//   app.get('/schedrule/student-mentor/:studentId',async(req,res)=>{
//     try {
//       const { studentId} = req.params;
//       const student = await Student.findById(studentId).poulate('mentor')
//       res.status()...Student:student.mentor

//     } catch (error) {
//       console.log(error);

//     }
//     })
