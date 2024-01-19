/* eslint-disable no-unused-vars */
import './styles.css'
import { useState } from 'react'

const LoginPage = () => {
	const [username, setUsername] = useState('')
      const display = false
      const [userdata,setUserdata] = useState('')
	const Submithandler = async (e) => {
		e.preventDefault()
		const user = { username }

		const response = await fetch('http://localhost:3000/user/login', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user),
		})
		const data = await response.json()
            

	}
	return (
		<section className='admin-login-container'>
			<div className='left-div'>
				<h1>WELCOME</h1>
				<h3>UNI LANKA Details Management System</h3>
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
					
					<button type='submit'>Login</button>
				</form>
			</div>
		</section>
	)
}
export default LoginPage
