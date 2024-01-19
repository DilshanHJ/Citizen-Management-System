require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const multer = require('multer')
const { Person, Admin } = require('./Database/Models/Models')

const app = express()

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

app.use(
	session({
		secret: process.env.SESSION_KEY,
		resave: true,
		saveUninitialized: true,
	}),
)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

mongoose.set('strictQuery', true)
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () =>
			console.log(
				` Mongodb is Connected... \n Server is Running at Port ${PORT}...`,
			),
		),
	)
	.catch((e) => console.log(e.message))
app.post('/login',async (req,res)=>{
      data = req.body;
      const result = await Admin.find(data)
      if(result.length>0){
            console.log(result)
            res.json({loggedin:true})
            
      }else{
            res.json({loggedin:false})
      }

})

app.post('/save/admin', async (req, res) => {
	const data = req.body

	const admin = new Admin(data)
	await admin.save()
	console.log(await Admin.find())
	res.json({ message: 'Success' })
})

app.get('/get/admins',async (req,res)=>{
      const data = await Admin.find()
      res.json(data)
})

app.post('/save/person/birth', async (req, res) => {
	const data = req.body
	const person = new Person({
		surname: data.surname,
		surname_short: data.surnameShort,
		first_name: data.firstName,
		middle_name: data.middleName,
		last_name: data.lastName,
		gender: data.gender,
		date_of_birth: new Date(data.dateOfBirth),
		time_of_birth: data.timeOfBirth,
		place_of_birth: data.place_of_birth,
	})
	await person.save()
	res.json({ userid: person._id, message: 'Success' })
	console.log(await Person.find())
})

app.post('/save/person/death',async (req,res)=>{
      const data = req.body
      await  Person.updateOne({_id:data.userid},{$set:{'death':data}})
      const result =  await Person.findOne({_id:data.userid})
      console.log(result)
})

app.post('/save/person/health/common',async (req,res)=>{
      const data = req.body
      await  Person.updateOne({_id:data.userid},{$push:{'health_common_case':{_id: new mongoose.Types.ObjectId,data}}})
      const result =  await Person.findOne({_id:data.userid})
      res.json({message:'Success',data:result.health_common_case})
})

app.post('/get/person/health/common',async (req,res)=>{
      const data = req.body
      await  Person.findOne({_id:data.userid})
      const result =  await Person.findOne({_id:data.userid})
      res.json({message:'Success',data:result.health_common_case})
})

app.post('/save/person/health/special',async (req,res)=>{
      const data = req.body
      await  Person.updateOne({_id:data.userid},{$push:{'health_special_case':{_id: new mongoose.Types.ObjectId,data}}})
      const result =  await Person.findOne({_id:data.userid})
      res.json({message:'Success',data:result.health_special_case})
})

app.post('/get/person/health/both',async (req,res)=>{
      const data = req.body
      const result =  await Person.findOne({_id:data.userid})
      res.json({message:'Success',common:result.health_common_case,special:result.health_special_case},)
})

app.get('/health/doctor/deathrequests',async(req,res)=>{
      const result = await Person.find({})
      console.log(result);
})

