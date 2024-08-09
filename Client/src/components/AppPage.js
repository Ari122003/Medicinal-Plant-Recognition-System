
import { useEffect } from "react";
import background from "./images/front.jpg";

import lg from "./images/logofront.png"
import { Link } from "react-router-dom";
import axios from "axios";
const AppPage=()=>{

    // useEffect(async () => {
    //  const res = await axios.get("localhost:3000/users");
    //  console.log(res);
    // }, [])

    const divStyle = {
        backgroundImage: `url(${background})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%", 
        minHeight: "100vh",
        display: "flex",
        flexwrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
        color: "white", 
      };
    
      return (
        <div style={divStyle}>
          <div>
          <Link to ="/home">
            <img src={lg} alt="logo" ></img>
            
   
    </Link>
          </div>
        </div>
      );
}

export default AppPage;