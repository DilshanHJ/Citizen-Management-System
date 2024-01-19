const Divorce = () => {
  return (
      <form action="">
      <h2 style={{marginBottom:'30px',alignSelf:'center',textAlign:'center'}}> 
            Devorce Registration
      </h2>
      <label>devorce Detail </label>
      <div>
            <input type="text" placeholder="Register ID" style ={{width:'calc(100% - 210px)'}}/>
            <button type="submit" style={{width:'200px'}}>
                  Search
            </button> 
      </div> 
      <label>Date of devorce </label>
      <div>
            <input type="date" placeholder="date of devorce" style ={{width:'200px'}}/>
      </div>  
      <label>Court order details </label>
      <div>
            <input type="file" placeholder="court order detail" style ={{width:'200px'}}/>
            <input type="text" placeholder="Description" style ={{width:'100%'}}/>
      </div>  
      

      <button type="submit">
            Save Details
      </button>  
</form>
  )
}
export default Divorce