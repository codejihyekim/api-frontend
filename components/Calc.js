import axios from "axios";
import React, {useState} from "react"
import Layout from "../containers/Layout"
export default function Calc(){
    
    const [inputs, setInputs] = useState({})
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
        const calcRequest = {num1, num2, opcode}
        alert(`사용자이름: ${JSON.stringify(calcRequest)}`)
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
            <select name="opcode" type="" onChange={handleChange}>
                <option value="">+</option>
                <option value="">-</option>
                <option value="">*</option>
                <option value="">/</option>
                <option value="">%</option>
            </select>
            <br/>
            <label><b>number2</b></label>
            <input name="num2" type="" onChange={handleChange}/><br/>
            <button onClick={handleClick}>더하기 실행</button>
            
        </div>
        </form>
        </Layout>

    )
}