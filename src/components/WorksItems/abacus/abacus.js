/* eslint-disable react-hooks/rules-of-hooks */
import React , { useState } from 'react'
import './abacus.css'

function  abacus () {
    const [numberVal , setNumberVal] = useState('')

    return (
        <>
            <div className="bg"></div>
        <div className="box">
            <form name="form">
                <input className="textnumber" name="textnumber" value={numberVal}/><br/>
            </form>
            <table>
            <tr>
                <td><input className="button btn" type="button" value="C" onClick={(e)=>{setNumberVal('')}} /></td>
                <td><input className="button btn" type="button" value="<" onClick={(e)=>{setNumberVal(numberVal.substring(0, numberVal.length-1))}}/></td>
                <td><input className="button btn" type="button" value="/" onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button btn" type="button" value="*" onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal(numberVal + e.target.value)}} /></td>
            </tr>
            <tr>
                <td><input className="button" type="button" value="7" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="8" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="9" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="-" onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal(numberVal + e.target.value)}} /></td>
            </tr>
            <tr>
                <td><input className="button" type="button" value="4" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="5" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="6" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="+" onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal(numberVal + e.target.value)}} /></td>
            </tr>
            <tr>
                <td><input className="button" type="button" value="1" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="2" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="3" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="=" onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal( eval(numberVal)) }} /></td>
            </tr>
            <tr>
                <td><input className="button" type="button" value="0" onClick={(e)=>{setNumberVal(numberVal + e.target.value)}} /></td>
                <td><input className="button" type="button" value="." onClick={(e)=>{if (numberVal.length === 0) {return}setNumberVal(numberVal + e.target.value)}} /></td>
            </tr>
        </table>
        </div>
        </>
    )
}
export default abacus;