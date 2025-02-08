import { useState } from "react";

export const ShortCircuit=()=>{
    const [isLoggedin,setIsLoggedin]=useState(false);
    const [user,setUser]=useState("");
    return(
        <section>
            <h1>Welcome to shortcircuit evaluation</h1>
            {isLoggedin && <p>You are logged in !</p>} 
            { user ? `Hello ${user}` : `pls log in!`}
            <div>
                <button onClick={()=>setIsLoggedin(!isLoggedin)} >Toggle login State</button>
                <button onClick={()=>setUser("Bikram Pal")}> set User</button>
                <button onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    );
}