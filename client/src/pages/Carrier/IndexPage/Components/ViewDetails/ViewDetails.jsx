const ViewDetails = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}>View Carrier Details</h2>
                  <label> Persons Details</label>
                  <div>
                        <input type="text" placeholder='NID' style={{width:'60%'}} />
                        <input type="text" placeholder='Position' style={{width:'38%'}} />
                        <div style={{justifyContent:'flex-start',width:'max-content'}}>
                              <label > from</label>
                              <input type="date" placeholder='Date of Birth' style={{width:'200px'}} />
                              <label > to</label>
                              <input type="date" placeholder='Date of Birth' style={{width:'200px'}} />
                        </div>
                        
                        <button type="submit" style={{width:'24%',height:'32px'}}>
                              Search
                        </button>
                  </div>
                  
                  <table>
                        <tr style={{borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                              <th style={{borderTopLeftRadius: '10px'}}>
                                    Entry ID
                              </th>
                              <th>
                                    Company name
                              </th>
                              <th>
                                    Position
                              </th>
                              <th>
                                    Start date
                              </th>
                              <th>
                                    End Date
                              </th>
                              <th style={{borderTopRightRadius: '10px'}}>
                                    Special Concerns
                              </th>
                        </tr>

                        <tr>
                              <td>
                                    2033817
                              </td>
                              <td>
                                    ABC Organization Pvt. Ltd.
                              </td>
                              <td>
                                    Manager
                              </td>
                              <td>
                                    2023-10-24
                              </td>
                              <td>
                                    2023-12-24
                              </td>
                              <td>
                                    works well with others and highly talented on assinged tasks
                              </td>
                        </tr>
                        <tr>
                              <td>
                                    2033817
                              </td>
                              <td>
                                    ABC Organization Pvt. Ltd.
                              </td>
                              <td>
                                    Manager
                              </td>
                              <td>
                                    2023-10-24
                              </td>
                              <td>
                                    2023-12-24
                              </td>
                              <td>
                                    works well with others and highly talented on assinged tasks
                              </td>
                        </tr>
                        <tr>
                              <td>
                                    2033817
                              </td>
                              <td>
                                    ABC Organization Pvt. Ltd.
                              </td>
                              <td>
                                    Manager
                              </td>
                              <td>
                                    2023-10-24
                              </td>
                              <td>
                                    2023-12-24
                              </td>
                              <td>
                                    works well with others and highly talented on assinged tasks
                              </td>
                        </tr>
                  </table>
            </form>
      )
}
export default ViewDetails