const ViewDetails = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                  View Educational Details
                  </h2>
                  <label>Education Detail </label>
                  <div>
                        <input type="text" placeholder="NID" style ={{width:'calc(100% - 210px)'}}/>
                        <button type="submit" style={{width:'200px'}}>
                              Search
                        </button> 
                  </div> 
                  <table>
                        <tr style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                              <th style={{borderTopLeftRadius:'10px'}}>
                                    Organization
                              </th>
                              <th>
                                    Start Date
                              </th>
                              <th>
                                    End Date
                              </th>
                              <th >
                                    Results
                              </th>
                              <th style={{borderTopRightRadius:'10px'}}>
                                    Validater
                              </th>
                        </tr>
                        <tr>
                              <td>Niwandama Jinaraja National College</td>
                              <td>2004-01-25</td>
                              <td>2017-12-30</td>
                              <td>All successfully passed</td>
                              <td>12345678</td>

                        </tr>
                        <tr>
                              <td>kegalle central college</td>
                              <td>2003-02-22</td>
                              <td>2016-11-30</td>
                              <td>All successfully passed</td>
                              <td>12345678</td>

                        </tr>
                  
                  </table>      
            </form>
      )
}
export default ViewDetails