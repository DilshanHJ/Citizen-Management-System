/* eslint-disable no-unused-vars */
import { useState } from 'react'

const BirthRegistration = () => {
	const [surname, setSurname] = useState('')
	const [surnameShort, setSurnameShort] = useState('')
	const [firstName, setFirstName] = useState('')
	const [middleName, setMiddleName] = useState('')
	const [lastName, setLastName] = useState('')
	const [gender, setGender] = useState('Male')
	const [dateOfBirth, setDateOfBirth] = useState('')
	const [placeOfBirth, setPlaceOfBirth] = useState('')
	const [mother, setMother] = useState('')
	const [father, setFather] = useState('')
	const [userid, setUserid] = useState('')
	return (
		<form
			action=''
			onSubmit={async (e) => {
				e.preventDefault()
				const person = {
					surname,
					surnameShort,
					firstName,
					middleName,
					lastName,
					gender,
					dateOfBirth,
					placeOfBirth,
					mother,
					father,
				}
				const response = await fetch(
					'http://localhost:3000/save/person/birth',
					{
						method: 'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json',
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: JSON.stringify(person),
					},
				)
				const data = await response.json()
				alert(data.message)
				setUserid(data.userid)
			}}>
			<h2
				style={{
					marginBottom: '30px',
					alignSelf: 'center',
					textAlign: 'center',
				}}>
				Birth Registation
			</h2>
			<label> Name</label>
			<div>
				<input
					type='text'
					placeholder='Surname'
					style={{ width: '70%' }}
					onChange={(e) => {
						setSurname(e.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='Surname Short form'
					style={{ width: '26%' }}
					onChange={(e) => {
						setSurnameShort(e.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='First Name'
					style={{ width: '31%' }}
					onChange={(e) => {
						setFirstName(e.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='Middle Name'
					style={{ width: '31%' }}
					onChange={(e) => {
						setMiddleName(e.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='Last Name'
					style={{ width: '31%' }}
					onChange={(e) => {
						setLastName(e.target.value)
					}}
				/>
			</div>

			<label>Gender</label>
			<div>
				<select
					onChange={(e) => {
						setGender(e.target.value)
					}}>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
				</select>
			</div>

			<label> Date and Time of Birth</label>
			<div style={{ justifyContent: 'flex-start' }}>
				<input
					type='datetime-local'
					placeholder='Date of Birth'
					style={{ width: '200px' }}
					onChange={(e) => {
						setDateOfBirth(e.target.value)
					}}
				/>
			</div>

			<label>Place of Birth</label>
			<div>
				<input
					type='text'
					placeholder='Address'
					style={{ width: '100%' }}
					onChange={(e) => {
						setPlaceOfBirth(e.target.value)
					}}
				/>
			</div>
			<label>Parents&apos; Details</label>
			<div>
				<input
					type='text'
					placeholder='NID of Farther'
					style={{ width: '47%' }}
					onChange={(e) => {
						setFather(e.target.value)
					}}
				/>
				<input
					type='text'
					placeholder='NID of Mother'
					style={{ width: '47%' }}
					onChange={(e) => {
						setMother(e.target.value)
					}}
				/>
			</div>
			<button type='submit'>Register Birth</button>
			<h1>{userid}</h1>
		</form>
	)
}
export default BirthRegistration
