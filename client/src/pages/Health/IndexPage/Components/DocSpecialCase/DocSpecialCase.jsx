const DocSpecialCase = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom: '30px',alignSelf:'center',textAlign: 'center'}} >
                  Special Case Requests
                  </h2>
                  <label>Patient Details</label>
                  <div>
                  <input type="text" placeholder="NID" style={{width: 'calc(100% - 420px)'}}/>
                  <input type="Date" placeholder="NID" style={{width: '200px'}}/>
                  <button style={{width:'200px'}}>
                        Search
                  </button>
                  </div>

                  <table>
                        <tr style={{borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                              <th style={{borderTopLeftRadius: '10px'}}>Patient Details
                              </th>
                              <th>Closed Related Previous Incident</th>
                              <th>Incident ID</th>
                              <th>Health Issue</th>
                              <th>Description</th>
                              <th>Softcopies of Related Documents</th>
                        </tr>
                        <tr>
                              <td>19982543781</td>
                              <td>Fever </td>
                              <td>10245345</td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Downloadable</td>
                        </tr>
                        <tr>
                              <td>19982543781</td>
                              <td>Fever </td>
                              <td>10245345</td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Downloadable</td>
                        </tr>
                        <tr>
                              <td>19982543781</td>
                              <td>Fever </td>
                              <td>10245345</td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aut dicta, tempore veritatis iste esse enim corporis ducimus repellendus odio! </td>
                              <td>Downloadable</td>
                        </tr>
                  </table>


                  <br/>
                  <label>Incident Details</label>
                  <div >
                  <input type="text" placeholder='Closed Related Previous Incident' style={{width: '31%'}} />
                  <input type="text" placeholder='Incident ID' style={{width: '31%'}} />
                  <input type="text" placeholder='Health Issue' style={{width: '31%'}} />
                  <input type="text" placeholder='Description' style={{width: '31%'}} />
                  </div> 
                  <br/>
                  <label>Softcopies of Related Documents</label>
                  <div>
                  <input type="file" style = {{width: '100%'}}/>
                  </div> 
                  <br/>  
                  <label>Doctor&apos;s Special Note</label>
                  <div>
                  <input type="text" placeholder="Special Note" style={{width: '100%'}}/>
                  </div>
                  <br/>
                  <label>Doctor&apos;s Signature</label>
                  <div>
                  <input type="text" placeholder="Accept/Rejact" style={{width: '100%'}}/>
                  </div>
                  <br/>
                  
                  <button type="submit">
                  Confirm Special Case
                  </button>
            </form>
      )
}
export default DocSpecialCase