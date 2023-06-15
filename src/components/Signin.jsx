import React from "react";
import '../style.css';

export default function Signin(){
    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    })

    console.log(credentials.username + ", " + credentials.password);

    function handleChange(event){
        const {name, value} = event.target;

        setCredentials(prevCredentials => {
            return ({
                    ...prevCredentials,
                    [name]:value 
                })
        })
    }

    return(
        <div className="signin--container">
            <div className="signin--box"> 
                <h2 id="signin--header">sign in</h2> 
                <div className="content--container">
                    <div className="input--container">
                        <input
                        className="input-style"
                        type="text" placeholder="username"
                        onChange={handleChange}
                        value={credentials.username}
                        name="username"
                         />
                        <input
                        className="input-style"
                        type="password" 
                        placeholder="password" 
                        onChange={handleChange} 
                        value={credentials.password}
                        name="password"
                        />
                        <button className="signin-button">Sign in</button>
                    </div>                    
                </div>  
                <div className="signin-img">
                    <img style={{width: "130px", height:"130"}} src="/images/flower.png"></img>
                </div>                        
            </div>
        </div>
    )
}