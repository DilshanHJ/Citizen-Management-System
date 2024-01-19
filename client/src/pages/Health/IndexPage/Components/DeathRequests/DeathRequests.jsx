import { useCallback, useEffect, useState } from "react"

const DeathRequests = () => {
      const [deathreqs,setDeathreqs] = useState([]);
      const fetchdata = useCallback(async ()=>{
            const response = await fetch(
                                    'http://localhost:3000/health/doctor/deathrequests',
                                    {
                                          method: 'GET',
                                          mode: 'cors',
                                          headers: {
                                                'Content-Type': 'application/json',
                                                // 'Content-Type': 'application/x-www-form-urlencoded',
                                          },
                                    },
                              )
            setDeathreqs(response.json());
            console.log(deathreqs);
            
      },[])
      useEffect( ()=>{
            fetchdata()
      },[fetchdata])
      return (
            <form action="">
                  <h2 style={{marginBottom: '30px' ,alignSelf:'center',textAlign: 'center'}} >
                  Death Requests
                  </h2>

                  <table>
                        <tr style={{borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                              <th style={{borderTopLeftRadius: '10px'}}>
                                    National Identity Card Number
                              </th>
                              <th>
                                    Date and Time of Death
                              </th>
                              <th>
                                    Place of Death
                              </th>
                              <th>
                                    Cause of Death
                              </th>
                              <th style={{borderTopRightRadius: '10px'}}>
                                          Softcopies of Related Documents
                              </th>
                        </tr>
                        <tr>
                              <td>19982543781</td>
                              <td>2023-08-24 08:30 </td>
                              <td>Negombo General Hospital</td>
                              <td>Heart Desease</td>
                              <td>Heart Desease</td>
            
                        </tr>
                        <tr>
                              <td>200078452387</td>
                              <td>2023-06-12 22:10</td>
                              <td>Home</td>
                              <td>Canser</td>
                              <td>Heart Desease</td>
            
                        </tr>
                        <tr>
                              <td>201265184197</td>
                              <td>2023-02-24 10:24</td>
                              <td> Teaching Hospital Kuliyapitiya</td>
                              <td>Accident</td>
                              <td>Heart Desease</td>
            
                        </tr>
                  </table>

                  <label>Details of Person</label>
                  <div>
                  <input type="text" placeholder="NID" style={{width: '100%'}}/>
                  </div>

                  <label>Special Notes</label>
                  <div>
                  <input type="text" placeholder="Description" style={{width: '100%'}}/>
                  </div>  
                     
                  <label>Sign</label>
                  <div style={{marginBottom:'30px'}}>
                  <input type="text" placeholder="Accept/Reject" style={{width: '100%'}}/>
                  </div>
                  <button type="submit">
                        Accept Request
                  </button>

            
            </form>
            
      )
}
export default DeathRequests