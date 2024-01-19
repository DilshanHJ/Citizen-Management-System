const DocCommonCase = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}>Common Case Registation</h2>
                  <label> Patient Details</label>
                  <div>
                        <input type="text" placeholder='NID' style={{width:'calc(100% - 500px)'}} />

                        <label > Date</label>
                        <input type="date" placeholder='Date of Birth' style={{width:'200px'}} />
                        <button type="submit" style={{width:'100px'}}>
                              Search
                        </button>
                  </div>
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
                        <tr>
                              <td>10220398</td>
                              <td>2023-08-24</td>
                              <td>Fever</td>
                              <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam distinctio quisquam maxime eligendi, beatae asperiores repellat consectetur, eius cumque ullam laborum sequi enim nihil quos, aspernatur doloribus quo praesentium!</td>

                        </tr>
                        
                  </table>
                  

                  <label> Incident Details</label>
                  <div>
                        <input type="text" placeholder='Closest Related Previous Incident' style={{width:'49%'}} />
                        <input type="text" placeholder='Incident ID' style={{width:'49%'}} />
                        
                        
                  </div>

                  <label> Incident Details</label>
                  <div>
                        <input type="text" placeholder='Health Issue' style={{width:'100%'}} />
                        <input type="text" placeholder='Diagnosis' style={{width:'100%'}} />
                        <input type="text" placeholder='Doctor&apos;s Opinion' style={{width:'100%'}} />
                        <input type="text" placeholder='Medication' style={{width:'49%'}} />
                        <input type="text" placeholder='Medical Validity Period' style={{width:'49%'}} />
                        <input type="text" placeholder='Doctor&apos;s id' style={{width:'100%'}} />
                        
                        
                  </div>

                  

                 
                  <button type="submit">
                        Save Details
                  </button>


            </form>
      )
}
export default DocCommonCase