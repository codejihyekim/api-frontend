import React from 'react'
const Login =()=> {
    return<><h1>로그인폼</h1>
    <form>
        <div>
        </div>
        <div>
            <label ><b>Username</b></label>
            <input /><br/>
            <label ><b>Password</b></label>
            <input /><br/>
            <button>Login</button><br/>
            <label >
                <input />remember me
            </label>  
        </div>
        <div>
            <button>Cancel</button>
            <span>Forgot <a>password?</a></span>
        </div>
    </form>
    </>
}
export default Login;
