import { useState } from "react"
import PoliceSection from "./PoliceSection";
import CourtSection from "./CourtSection";

const IndexPage = () => {
      const[usertype] = useState('Court');
      if(usertype==='Court'){
            return (
                  <CourtSection/>                                       
            )
      }else if(usertype==='Police'){
            return(
                  <PoliceSection/>  
            )
      }
}
export default IndexPage