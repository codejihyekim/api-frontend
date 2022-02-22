import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Navbar(){
    return(
        <div>
        <nav>
            <ul>
                <Li><Link to={"/"}>Home</Link></Li>
                <Li><Link to="/bmi">Bmi</Link></Li>
                <Li><Link to="/calc">Calc</Link></Li>
                <Li><Link to="/grade">Grade</Link></Li>
                <Li><Link to="/login">Login</Link></Li>
                <Li><Link to="/counter">Counter</Link></Li>
            </ul>
        </nav>
        </div>
    )
}
const ul = styled.ul`
    background-color: #FFDAB9;
    text-decoration: none;
    text-align: center;
`

const Li = styled.li`
    float: left;
    margin-left: 1em;
    font-size: 20px;
    text-align: center;
    display: inline-block;
`
