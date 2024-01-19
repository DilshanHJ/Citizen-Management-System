const Requests = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                        Legal Request
                  </h2>
                  <table>
                        <tr style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                              <th style={{borderTopLeftRadius:'10px'}}>
                                    NID
                              </th>
                              <th>
                                    Case ID
                              </th>
                              <th>
                                    Date
                              </th>
                              <th >
                                    Case
                              </th>

                              <th >
                                    Case type
                              </th>

                              <th >
                                    description
                              </th>

                              <th >
                                    penalty
                              </th>

                              <th style={{borderTopRightRadius:'10px'}}>
                                    Validater ID
                              </th>
                        </tr>
                        <tr>
                              <td>1234</td>
                              <td>abcd1234</td>
                              <td>2017-12-30</td>
                              <td>land case</td>
                              <td>easy</td>
                              <td>about the problem</td>
                              <td>20000/=</td>
                              <td>12as34df</td>

                        </tr>
                        <tr>
                              <td>1234</td>
                              <td>abcd1234</td>
                              <td>2017-12-30</td>
                              <td>land case</td>
                              <td>noraml case</td>
                              <td>about the problem</td>
                              <td>fine_20000/=</td>
                              <td>12as34df</td>

                        </tr>
                        
                  </table>
            
                  <label>Sign </label>
                  <div style={{justifyContent: 'flex-start'}}>
                        <input type="text" placeholder="Case ID" style ={{width:'300px'}}/>
                        <input type="text" placeholder="Accept/Reject" style ={{width:'300px'}}/>
                  </div> 
           
                  <button type="submit">
                        confirum
                  </button>  
            </form>
      )
}
export default Requests