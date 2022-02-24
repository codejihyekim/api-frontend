import React, {useState} from "react"
import Layout from "../containers/Layout"
import axios from "axios"
export default function Bmi (){

    
    const [inputs, setInputs] = useState({})
    const {name, weight, height} = inputs; //object Destructuring

     const handleChange = (e) => {
         e.preventDefault()
         const {value, name} = e.target;
         setInputs({
             ...inputs, [name]:value
         })
        
         /*
        let name = (document.getElementById('name')).value
        let height = (document.getElementById('height')).value
        let weight = (document.getElementById('weight')).value
        setName(name)
        setHeight(height)
        setWeight(weight)
        setResult(Number(name), Number(height), Number(weight))*/
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)
        
        /*
        axios.get(`http://localhost:8080/member/bmi/김길동/180.5/80.5`)
        .then((res)=>{
            alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
        })*/
    }
    return <Layout>
    <form>
    <h1>BMI 폼</h1>
    <div>
        <label><b>name</b></label>
        <input name="name" type="text" onChange={handleChange}/><br/>
        <label><b>height</b></label>
        <input name="height" type="text" onChange={handleChange}/><br/>
        <label><b>weight</b></label>
        <input name="weight" type="text" onChange={handleChange}/><br/>
        <button onClick={handleClick}>BMI 체크</button>
    </div>
    </form>
    </Layout>
}