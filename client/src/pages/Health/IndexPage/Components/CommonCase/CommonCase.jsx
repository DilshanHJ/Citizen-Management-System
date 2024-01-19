/* eslint-disable no-unused-vars */
import { useState } from 'react'

const CommonCase = () => {
	const [previousID, setPreviousId] = useState('')
	const [date, setDate] = useState('')
	const [healthissue, setIssue] = useState('')
	const [userid, setUserid] = useState('')
	const [healthissues, setIssues] = useState([])
	return (
		<form action=''>
			<h2
				style={{
					marginBottom: '30px',
					alignSelf: 'center',
					textAlign: 'center',
				}}>
				Common Case Registation
			</h2>
			<label> Patient Details</label>
			<div>
				<input
					type='text'
					placeholder='NID'
					style={{ width: 'calc(100% - 110px)' }}
					value={userid}
					onChange={(e) => setUserid(e.target.value)}
				/>
				<button
					type='submit'
					style={{ width: '100px' }}
					onClick={async (e) => {
						e.preventDefault()
						const issue = {
							userid,
						}
						const response = await fetch(
							'http://localhost:3000/get/person/health/common',
							{
								method: 'POST',
								mode: 'cors',
								headers: {
									'Content-Type':
										'application/json',
									// 'Content-Type': 'application/x-www-form-urlencoded',
								},
								body: JSON.stringify(issue),
							},
						)
						const data = await response.json()
						alert(data.message)
						setIssues(data.data)
					}}>
					Search
				</button>
			</div>
			<table>
				<tr
					style={{
						borderTopLeftRadius: '10px',
						borderTopRightRadius: '10px',
					}}>
					<th style={{ borderTopLeftRadius: '10px' }}>
						Incident ID
					</th>
					<th>Date</th>
					<th>Previous Related Incident Id</th>
					<th
						style={{
							width: '50%',
							borderTopRightRadius: '10px',
						}}>
						Description
					</th>
				</tr>
				{healthissues.map((h) => {
					return (<tr key={h._id}>
						<td>{h._id}</td>
						<td>{new Date(h.data.date).toString()}</td>
						<td>{h.data.previousID}</td>
						<td>{h.data.healthissue}</td>
					</tr>)
				})}
			</table>

			<label> Incident Details</label>
			<div>
				<input
					type='text'
					placeholder='Closest Related Previous Incident'
					style={{ width: '100%' }}
					value={previousID}
					onChange={(e) => setPreviousId(e.target.value)}
				/>
				<input
					type='text'
					placeholder='Health Issue'
					style={{ width: '100%' }}
					value={healthissue}
					onChange={(e) => setIssue(e.target.value)}
				/>
			</div>

			<label> Date</label>
			<div style={{ justifyContent: 'flex-start' }}>
				<input
					type='datetime-local'
					placeholder='Date of Birth'
					style={{ width: '200px' }}
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>

			<button
				type='submit'
				onClick={async (e) => {
					e.preventDefault()
					const issue = {
						userid,
						previousID,
						healthissue,
						date,
					}
					const response = await fetch(
						'http://localhost:3000/save/person/health/common',
						{
							method: 'POST',
							mode: 'cors',
							headers: {
								'Content-Type':
									'application/json',
								// 'Content-Type': 'application/x-www-form-urlencoded',
							},
							body: JSON.stringify(issue),
						},
					)
					const data = await response.json()
					alert(data.message)
                              setIssues(data.data)
				}}>
				Register Petient
			</button>
		</form>
	)
}
export default CommonCase
