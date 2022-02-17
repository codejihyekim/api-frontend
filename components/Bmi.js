import React from 'react'
import Layout from '../containers/Layout'
export default function Bmi (){
    return (<Layout><h1>BMI폼</h1>
    <form>
        
        <div>
            <label><b>name</b></label>
            <input /><br/>
            <label ><b>height</b></label>
            <input /><br/>
            <label ><b>weight</b></label>
            <input /><br/>
            <button>확인</button>
        </div>
        <div>
            <button>Cancel</button>
        </div>
    
    </form>
    </Layout>
    )
}
