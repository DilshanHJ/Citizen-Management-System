/* eslint-disable no-unused-vars */
import { useState } from "react"

const ViewDetails = () => {
      const [userid,setUserid]= useState('')
      const [common,setCommon]=useState([])
      const [special,setSpecial]=useState([])
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}>View Patient Medical Details</h2>
                  <label> Patient Details</label>
                  <div>
                        <input type="text" placeholder='NID' style={{width:'60%'}} onChange={(e)=>{setUserid(e.target.value)}}/>
                        <button type="submit" style={{width:'24%',height:'32px'}}
                        onClick={async (e) => {
						e.preventDefault()
						const issue = {
							userid,
						}
						const response = await fetch(
							'http://localhost:3000/get/person/health/both',
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
						setCommon(data.common)
                                    setSpecial(data.special)
                                    
                                    console.log(special)
                                    console.log(common)
					}}>
                              Search
                        </button>
                  </div>
                  <h2>Special cases</h2>
                  <table>
                        <tr style={{borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                              <th style={{borderTopLeftRadius: '10px'}}>
                                    Incident ID
                              </th>
                              <th>
                                    Date
                              </th>
                              <th>
                                    Health Issue
                              </th>
                              <th style={{width:'50%', borderTopRightRadius: '10px'}}>
                                    Description
                              </th>
                              
                        </tr>
                       {special.map((s)=>{
                              return(
                                    <tr key={s._id}>
                                          <td>{s._id}</td>
                                          <td>{s.data.date}</td>
                                          <td>{s.data.healthIssue}</td>
                                          <td>{s.data.description}</td>
                                    </tr>
                              )
                       })}
                  </table>
                  <h2>Common cases</h2>
                  <table>
                        <tr style={{borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                              <th style={{borderTopLeftRadius: '10px'}}>
                                    Incident ID
                              </th>
                              <th>
                                    Date
                              </th>
                              <th style={{width:'50%', borderTopRightRadius: '10px'}}>
                                    Health Issue
                              </th>
                              
                        </tr>
                        {
                              common.map((c)=>{
                                    return(
                                          <tr key={c._id}>
                                                <td>{c._id}</td>
                                                <td>{c.data.date}</td>
                                                <td>{c.data.healthissue}</td>

                                          </tr>
                                    )
                              })
                        }
                  </table>
            </form>
      )
}
export default ViewDetails