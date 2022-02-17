import React from 'react'
import Layout from '../containers/Layout'
export default function Login (){
    return<Layout><h1>로그인폼</h1>
    <form>
       
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
    </Layout>
}
;
