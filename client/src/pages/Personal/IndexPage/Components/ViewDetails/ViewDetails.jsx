const ViewDetails = () => {
      return (
            <form action="">
            <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                 View Personal Details
            </h2>
            <label>Personal Detail </label>
            <div>
                  <input type="text" placeholder="NID" style ={{width:'calc(100% - 210px)'}}/>
                  <button type="submit" style={{width:'200px'}}>
                        Search
                  </button> 
            </div> 
            <table>
                  <tr style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                        <th style={{borderTopLeftRadius:'10px'}}>NID</th>
                        <th>Case ID</th>
                        <th>Date</th>
                        <th >Case</th>
                        <th >Case type</th>
                        <th >description</th>
                        <th >penalty</th>
                        <th style={{borderTopRightRadius:'10px'}}>Validater ID</th>
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
      </form>
      )
}
export default ViewDetails