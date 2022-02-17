import React from 'react'
import Layout from '../containers/Layout'
export default function Grade (){
    return <Layout><h1>성적표폼</h1>
    <form>
        
        <div>
            <label><b>name</b></label>
            <input/><br/>
            <label><b>국어점수</b></label>
            <input/><br/>
            <label><b>영어점수</b></label>
            <input/><br/>
            <label><b>수학점수</b></label>
            <input/><br/>
            <button>확인</button>
        </div>
        <div>
            <button>Calcel</button>
        </div>

    </form>
    </Layout>
}
