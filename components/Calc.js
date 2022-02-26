
import React, {useState} from "react"
import { memberCalc } from "../api";
import Layout from "../containers/Layout"
export default function Calc(){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, num2, opcode} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })

        /*
        let num1 = (document.getElementById('num1')).value
        let num2 = (document.getElementById('num2')).value
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1)+Number(num2))*/
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, num2, opcode}).then(res => setResult(res.data)).catch(err => console.log(`에러발생 : ${err}`))
        /*
        axios.get('http://localhost:8080/member/calc/1/+/2')
        .then((res)=>{
            alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
        })*/
    }
    return (
        <Layout>
        <form>
        <h1>Calc 폼</h1>
        <div>
            <label><b>number1</b></label>
            <input name="num1" type="" onChange={handleChange}/><br/>
            <label><b>opcode</b></label>
            <select name="opcode" onChange={handleChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" type="" onChange={handleChange}/><br/>
            <button onClick={handleClick}>전송</button>
        </div>
       
        </form>
        <div>결과: {result}</div>
        </Layout>

    )
}