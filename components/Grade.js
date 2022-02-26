import React, {useState} from "react"
import { memberGrade } from "../api";
import Layout from "../containers/Layout"
export default function Grade(){
   
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, korscore, engscore, mathscore} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
        /*
        let name = (document.getElementById('name')).value
        let korscore = (document.getElementById('korscore')).value
        let engscore = (document.getElementById('engscore')).value
        let mathscore = (document.getElementById('mathscore')).value
        setName(name)
        setKorscore(korscore)
        setEngscore(engscore)
        setMathscore(mathscore)
        setResult(Number(name), Number(korscore), Number(engscore), Number(mathscore))*/
    }
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = {name, korscore, engscore, mathscore}
        memberGrade(gradeRequest)
        .then(res => {
            setResult(res.data)
        })
        .catch( err => console.log(`에러발생 : ${err}`))
    }

    return (<Layout>
    <form>
    <h1>Grade 폼</h1>
    <div>
        <lable><b>name</b></lable>
        <input name="name" onChange={handleChange}/><br/>
        <lable><b>korscore</b></lable>
        <input name="korscore" onChange={handleChange}/><br/>
        <lable><b>engscore</b></lable>
        <input name="engscore" onChange={handleChange}/><br/>
        <label><b>mathscore</b></label>
        <input name="mathscore" onChange={handleChange}/><br/>
        <button onClick={handleClick}>grade 체크</button>     
    </div>
    </form>
    <div>결과: {result} </div>
    </Layout>)
}