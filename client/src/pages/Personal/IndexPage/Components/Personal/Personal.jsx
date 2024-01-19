const Personal = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                        Enter Personal Details
                  </h2>
                  <label>Add photo </label>
                  <div style={{justifyContent:'flex-start'}}>
                        <input type="file" placeholder="add photo" style ={{width:'30%'}}/>
                        <button type="submit" style={{height: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              update
                        </button> 
                  </div>  

                  <label>Change Name </label>
                  <div style={{justifyContent: 'flex-start'}}>
                        <input type="text" placeholder="new name" style ={{width:'30%'}}/>
                        <button type="submit" style={{height: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              update
                        </button> 
                  </div>  

                  <label>Change address </label>
                  <div style={{justifyContent: 'flex-start'}}>
                        <input type="text" placeholder="new address" style ={{width:'30%'}}/>
                        <button type="submit" style={{height: '26px' , display: 'flex', justifyContent: 'center', alignIItems: 'center'}}>
                              update
                        </button> 
                  </div>  

                  <label>Change religion </label>
                  <div style={{justifyContent: 'flex-start'}}>
                        <input type="text" placeholder="new religion" style ={{width:'30%'}}/>
                        <button type="submit" style={{height: '26px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                              update
                        </button> 
                  </div>  
            </form>
      )
}
export default Personal