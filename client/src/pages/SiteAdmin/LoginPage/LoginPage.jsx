import { useNavigate } from 'react-router'
import './styles.css'
import { useState } from 'react'

const LoginPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const Submithandler = async (e) => {
		e.preventDefault()
		const user = {
			username,
			password,
			usertype: 'Admin',
		}
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user),
		})
		const data = await response.json()
		if (data.loggedin) {
			navigate('/admin/siteadmin/home')
		} else {
			alert('User not Found')
		}
	}
	return (
		<section className='admin-login-container'>
			<div className='left-div'>
				<h1>WELCOME</h1>
				<h3>UNI LANKA Admin Management System</h3>
			</div>
			<div className='right-div'>
				<p>Login Here</p>
				<form action='' onSubmit={(e) => Submithandler(e)}>
					<input
						type='text'
						placeholder='User ID'
						value={username}
						onChange={(e) => {
							setUsername(e.target.value)
						}}
					/>
					<input
						type='text'
						placeholder='Password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
					<button type='submit'>Login</button>
				</form>
			</div>
		</section>
	)
}
export default LoginPage
