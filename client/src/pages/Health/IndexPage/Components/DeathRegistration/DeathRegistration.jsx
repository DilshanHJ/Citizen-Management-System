/* eslint-disable no-unused-vars */
import { useState } from 'react'

const DeathRegistration = () => {
	const [userid, setUserid] = useState('')
	const [date_of_death, setDateOfDeath] = useState('')
	const [place_of_death, setPlaceOfDeath] = useState('')
	const [cause_of_death, setCauseOfDeath] = useState('')
	const [signed_doctor, setSignedDoctor] = useState('')
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault()
				const death = {
					userid,
					date_of_death,
					place_of_death,
					cause_of_death,
					signed_doctor,
				}
				const response = await fetch(
					'http://localhost:3000/save/person/death',
					{
						method: 'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json',
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: JSON.stringify(death),
					},
				)
				const data = await response.json()
				alert(data.message)
			}}>
			<h2
				style={{
					marginBottom: '30px',
					alignSelf: 'center',
					textAlign: 'center',
				}}>
				Death Registration
			</h2>
			<label> National Identity Number</label>
			<div>
				<input
					type='text'
					placeholder='NID'
					style={{ width: '100%' }}
					onChange={(e) => setUserid(e.target.value)}
				/>
			</div>

			<label> Date and Time of Death</label>
			<div style={{ justifyContent: 'flex-start' }}>
				<input
					type='datetime-local'
					placeholder='Date of Birth'
					style={{ width: '200px' }}
					onChange={(e) => setDateOfDeath(e.target.value)}
				/>
			</div>

			<label>Place of Death</label>
			<div>
				<input
					type='text'
					placeholder='Address'
					style={{ width: '100%' }}
					onChange={(e) => setPlaceOfDeath(e.target.value)}
				/>
			</div>

			<label>Cause of Death</label>
			<div>
				<input
					type='text'
					placeholder='Descriptiion'
					style={{ width: '100%' }}
					onChange={(e) => setCauseOfDeath(e.target.value)}
				/>
			</div>

			<label>Softcopies of Related Documents</label>
			<div>
				<input type='file' style={{ width: '100%' }} />
			</div>

			<label>Signed Doctor&apos;s Details</label>
			<div>
				<input
					type='text'
					placeholder='NID of Doctor'
					style={{ width: '100%' }}
					onChange={(e) => setSignedDoctor(e.target.value)}
				/>
			</div>

			<button type='submit'>Register Death</button>
		</form>
	)
}
export default DeathRegistration
