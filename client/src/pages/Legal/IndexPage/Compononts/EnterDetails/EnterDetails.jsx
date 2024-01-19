const EnterDetails = () => {
      return (
            <form action="">
                  <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
                        Enter Legal Details
                  </h2>
                  <label>Personal Infromation </label>
                  <div>
                        <input type="text" placeholder="NID" style ={{width:'100%'}}/>
                  </div>  
                  
                  <label> Case details </label>
                  <div style={{justifyContent: 'flex-start'}}>
                        <input type="text" placeholder="case ID" style ={{width:'200px'}}/>
                        <input type="date" placeholder="date of case" style ={{width:'200px'}}/>
                        <input type="text" placeholder="case type" style ={{width:'calc(100% - 420px)'}}/>
                        <input type="text" placeholder="case" style ={{width:'100%'}} />
                        <input type="text" placeholder="description" style ={{width:'100%'}}/>
                        <input type="text" placeholder="penalty" style ={{width:'49%'}}/>
                        <input type="text" placeholder="validor ID" style ={{width:'49%'}}/>
                  </div>  
                 
                  <button type="submit">
                        Enter Recored
                  </button>  
            </form>
      )
}
export default EnterDetails