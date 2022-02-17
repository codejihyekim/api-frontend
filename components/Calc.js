import React from 'react'
import Layout from '../containers/Layout'
export default function Calc (){
    return <Layout><h1>계산기폼</h1>
    <form>
        
        <div>
            <label><b>숫자1</b></label>
            <input /><br/>
            <label ><b>연산자</b></label>
            <input /><br/>
            <label ><b>숫자2</b></label>
            <input /><br/>
            <button>확인</button>
        </div>
        <div>
            <button>Cancel</button>
        </div>
    
    </form>
    </Layout>
}  
