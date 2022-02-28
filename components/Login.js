import React, {useState} from "react"
import { memberLogin } from "../api";
import { Layout } from "../containers/index";
export default function Login(){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, password, userid} = inputs;

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
        const loginRequest = {name, password, userid}
        memberLogin(loginRequest)
        .then(res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`))
        
    }

   return (<Layout>
    <form>
    <h1>Login 폼</h1>
    <div>
        <label><b>name</b></label>
        <input name="name" onChange={handleChange}/><br/>
        <label><b>userid</b></label>
        <input name="userid" onChange={handleChange}/><br/>
        <label><b>password</b></label>
        <input name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>Login</button>
    </div>
    <label >
        <input />remember me
    </label> 
    <div>
        <button>Cancel</button>
        <span>Forgot<a>password?</a></span>
    </div>
    <div>결과: {result} </div>
    </form>
    </Layout>)
}