import React, {useState} from "react"
import Layout from "../containers/Layout"
export default function Login(){
    
    const [inputs, setInputs] = useState({})
    const {name, password} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })

        /*
        let name = (document.getElementById('name')).value
        let password = (document.getElementById('password')).value
        setName(name)
        setPassword(password)
        setResult(name, password)*/
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const loginRequest = {name, password}
        alert(`사용자이름: ${JSON.stringify(loginRequest)}`)
        
    }

   return (<Layout>
    <form>
    <h1>Login 폼</h1>
    <div>
        <label><b>name</b></label>
        <input name="name" onChange={handleChange}/><br/>
        <label><b>password</b></label>
        <input name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>확인</button>
    </div>
    <label >
        <input />remember me
    </label> 
    <div>
        <button>Cancel</button>
        <span>Forgot<a>password?</a></span>
    </div>
    </form>
    </Layout>)
}