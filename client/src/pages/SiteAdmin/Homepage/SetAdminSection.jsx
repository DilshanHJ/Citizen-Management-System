/* eslint-disable no-unused-vars */
import logo from '../../../assets/Logo.png'
import { useEffect, useState } from 'react'

const SiteAdminSection = () => {
	const [usertype, setUsertype] = useState('Admin')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [admins, setAdmins] = useState({})
	const getAdmins = async () => {
		const response = await fetch('http://localhost:3000/get/admins', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		const data = await response.json()
		setAdmins(data)
	}
	useEffect(() => {
		getAdmins()
	})
	return (
		<section className='home-main'>
			<div className='sidenav'>
				<img src={logo} alt='' />
				<h4>Site Admin</h4>
				<div className='nav-container'></div>
			</div>
			<div className='form-container'>
				<form
					onSubmit={async (e) => {
						e.preventDefault()
						const admin = {
							username,
							password,
							usertype,
						}
						const response = await fetch(
							'http://localhost:3000/save/admin',
							{
								method: 'POST',
								mode: 'cors',
								headers: {
									'Content-Type':
										'application/json',
									// 'Content-Type': 'application/x-www-form-urlencoded',
								},
								body: JSON.stringify(admin),
							},
						)
						const data = await response.json()
						alert(data.message)
					}}>
					<h2>Add New Admins</h2>
					<br />
					<label htmlFor='username'> Username</label>
					<input
						type='text'
						id='username'
						name='username'
						onChange={(e) => {
							setUsername(e.target.value)
						}}
					/>
					<br />
					<label htmlFor='password'> Password</label>
					<input
						type='text'
						id='password'
						name='password'
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
					<br />
					<label htmlFor='usertype'> UserType</label>
					<select
						name='usertype'
						id='usertype'
						onChange={(e) => {
							setUsertype(e.target.value)
						}}>
						<option value='Admin'>Admin</option>
						<option value='Hospital Admin'>
							Hospital Admin
						</option>
						<option value='Doctor'>Doctor</option>
						<option value='Registrar'>Registrar</option>
						<option value='Court'>Court</option>
						<option value='Police'>Police</option>
						<option value='Educational Organization'>
							Educational Organization
						</option>
						<option value='Organization'>
							Organization
						</option>
					</select>
					<br />
					<button type='submit'>Save New Admin</button>
					<br />
					<table>
						<tr>
							<th>Username</th>
							<th>User Type</th>
						</tr>
						{Object.keys(admins).map((key) => {
							return (
								<tr key={admins[key]._id}>
									<td>
										{
											admins[key]
												.username
										}
									</td>
									<td>
										{
											admins[key]
												.usertype
										}
									</td>
								</tr>
							)
						})}
					</table>
				</form>
			</div>
		</section>
	)
}
export default SiteAdminSection
