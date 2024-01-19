const Marriage = () => {
      return (
                  <form action="">
                        <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                              Marriage Registration
                        </h2>
                        <label>Marriage IDs </label>
                        <div>
                              <input type="text" placeholder="Male ID" style ={{width:'32%'}}/>
                              <input type="text" placeholder="Female ID" style ={{width:'32%'}}/>
                              <input type="text" placeholder="Register ID" style ={{width:'32%'}}/>
                        </div>  
                        
                        <label>Date of Marriage </label>
                        <div>
                              <input type="date" placeholder="date of marriage" style ={{width:'200px'}}/>
                        </div>  
                        <label>Witness </label>
                        <div>
                              <input type="text" placeholder="1st Witness" style ={{width:'32%'}}/>
                              <input type="text" placeholder="2nd Witness" style ={{width:'32%'}}/>
                        </div>

                        <button type="submit">
                              Register
                        </button>  
                  </form>
            )
}
export default Marriage