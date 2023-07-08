import React from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';

export default function Signin({setUser}){
    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
    const buttonRef = React.useRef(null)
            
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        buttonRef.current.click();
    }
    };

    function handleChange(event){
        const {name, value} = event.target;        

        setCredentials(prevCredentials => {
            return ({
                    ...prevCredentials,
                    [name]:value 
                })
        })
    }

    function handleSubmit(){
        fetch("https://localhost:7247/Kunde/signIn",{
            method: "POST",
            body: JSON.stringify(credentials),
            credentials: 'include',
            
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            })
        })
        .then((response) =>{
            console.log("fra backend: " + response);
        });

        setUser(credentials); 
        navigate("/dashboard");        
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
                        <button ref={buttonRef} className="signin-button" onClick={handleSubmit}>Sign in</button>
                    </div>                    
                </div>  
                <div className="signin-img">
                    <img style={{width: "130px", height:"130"}} src="/images/flower.png" alt=""></img>
                </div>                        
            </div>
        </div>
    )
}