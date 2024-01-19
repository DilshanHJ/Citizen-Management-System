/* eslint-disable no-unused-vars */
import { useState } from "react"

const SpecialCases = () => {
      const [userid,setuserid] = useState('')
      const [previousId,setPreviousId]=useState('')
      const [healthIssue,setHealthIssue]=useState('')
      const [description,setDescription]=useState('')
      const [date,setDate]=useState('')
      const [doctorId,setDoctorId] =useState('')
      return (
            <form onSubmit={async (e)=>{
                  e.preventDefault()
                  const healthcase={
                        userid,previousId,healthIssue,description,date,doctorId
                  }
                  const response = await fetch(
					'http://localhost:3000/save/person/health/special',
					{
						method: 'POST',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json',
							// 'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: JSON.stringify(healthcase),
					},
				)
				const data = await response.json()
				alert(data.message)
            }}>
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}>
                        Special Case Registation
                  </h2>
                  <label> Patient Details</label>
                  <div>
                        <input type="text" placeholder='NID' style={{width:'100%'}} onChange={(e)=>setuserid(e.target.value)}/>
                  </div>
                  <label> Incident Details</label>
                  <div>
                        <input type="text" placeholder='Closest Related Previous Incident' style={{width:'31%'}}onChange={(e)=>setPreviousId(e.target.value)} />
                        <input type="text" placeholder='Health Issue' style={{width:'31%'}}onChange={(e)=>setHealthIssue(e.target.value)} />
                        <input type="text" placeholder='Description' style={{width:'100%'}}onChange={(e)=>setDescription(e.target.value)} />
                        <input type="text" placeholder='Doctors&apos; ID ' style={{width:'100%'}} onChange={(e)=>setDoctorId(e.target.value)}/>
                  </div>
                  <label>Softcopies of Related Documents</label>
                  <div>
                        <input type="file" style={{width:'100%'}}/>
                  </div>
                  <label > Date</label>
                  <div style={{justifyContent:'flex-start'}} >
                        <input type="date" placeholder='Date of Birth' style={{width:'200px'}} onChange={(e)=>setDate(e.target.value)}/>
                  </div>
                  <button type="submit">
                        Register Details
                  </button>
            </form>
      )
}
export default SpecialCases