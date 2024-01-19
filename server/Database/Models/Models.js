const { default: mongoose, Schema } = require('mongoose')

const personSchema = new mongoose.Schema({
	surname: String,
	surname_short: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	gender: { type: String, enum: ['Male', 'Female'] },
	date_of_birth: Date,
	time_of_birth: String,
	place_of_birth: String,
	father: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
	mother: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
      address:String,
      death:mongoose.Schema.Types.Mixed,
      health_common_case:[mongoose.Schema.Types.Mixed],
      health_special_case:[mongoose.Schema.Types.Mixed],
      personal:[mongoose.Schema.Types.Mixed],
      legal:[mongoose.Schema.Types.Mixed],
      educational:[mongoose.Schema.Types.Mixed],
      carrier:[mongoose.Schema.Types.Mixed]


})

const Person = new mongoose.model('Person', personSchema)

const adminSchema = new mongoose.Schema({
	username: String,
	password: String,
	usertype: {
		type: String, enum: ['Doctor' , 'Hospital Admin' , 'Registrar' , 'Court' , 'Police' ,'Educational Organization' , 'Organization' , 'Admin'] },
})

const Admin = new mongoose.model('Admin', adminSchema)
module.exports = { Person, Admin }
