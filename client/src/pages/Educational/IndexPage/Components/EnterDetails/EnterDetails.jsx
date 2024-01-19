const EnterDetails = () => {
      return (
            <form action="">
            <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center' }}> 
                  Enter Educational Details
            </h2>
            <label>Personal Infromation </label>
            <div>
                  <input type="text" placeholder="NID" style={{width:'100%'}}/>
            </div>  
            
            <label>Education details </label>
            <div>
                  <input type="text" placeholder="Organization" style={{width:'100%'}}/>
            </div>  
            <label>Time period </label>
            <div style ={{justifyContent:'flex-start'}}>
                  <label>from</label>
                  <input type="date" placeholder="start date" style={{width:'200px'}}/>
                  
                  <label>to</label>
                  <input type="date" placeholder="end date" style={{width:'200px'}}/>
            </div>  
            <label>Results </label>
            <div>
                  <input type="text" placeholder="Enter the Results" style={{width:'100%'}}/>
            </div>  
            <label>Validate </label>
            <div>
                  <input type="text" placeholder="Validator NID" style={{width:'100%'}}/>
            </div>
            <button type="submit">
                  Enter Recored
            </button>  
      </form>
      )
}
export default EnterDetails