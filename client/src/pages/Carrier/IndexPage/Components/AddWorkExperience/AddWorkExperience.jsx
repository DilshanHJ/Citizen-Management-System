const AddWorkExperience = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}>Add Work Experience</h2>
                  <label>Personal details</label>
                  <div>
                        <input type="text" placeholder='NID' style={{width:'100%'}} />
                  </div>
                  <label>Work Experience</label>
                  <div>
                        <input type="text" placeholder='Name of organization' style={{width:'48%'}} />
                        <input type="text" placeholder='Position' style={{width:'48%'}} />
                        <div style={{justifyContent:'flex-start', marginTop:'50px'}}>
                              <lable>Start date</lable>
                              <input type="date" style={{width:'200px'}} />
                              <lable>End Date</lable>
                              <input type="date" style={{width:'200px'}} />
                        </div>
                        <input type="text" placeholder='Special Concerns' style={{width:'100%'}} />
                  </div>
                  <button type="submit">
                        Save Details
                  </button>
            </form>
      )
}
export default AddWorkExperience