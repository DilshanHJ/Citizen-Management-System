import './styles.css'
import healthlogo from '../../../assets/health-logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const navigate = useNavigate()

	const Submithandler = async (e) => {
		e.preventDefault()
		const user = {
			username,
			password,
			usertype: 'Educational Organization',
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
			navigate('/admin/education/home/')
		} else {
			alert('User not Found')
		}
	}
	return (
		<section className='admin-login-container'>
			<div className='left-div'>
				<img src={healthlogo} alt='health logo' />
				<h1>WELCOME</h1>
				<h3>Educational Details Management System</h3>
			</div>
			<div className='right-div'>
				<p>Login Here</p>
				<form action='' onSubmit={(e) => Submithandler(e)}>
					<input
						type='text'
						placeholder='User ID'
						value={username}
						onChange={(e) =>
							setUsername(e.target.value)
						}
					/>
					<input
						type='text'
						placeholder='Password'
						value={password}
						onChange={(e) =>
							setPassword(e.target.value)
						}
					/>
					<button type='submit'>Login</button>
				</form>
			</div>
		</section>
	)
}
export default LoginPage
