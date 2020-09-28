/* eslint-disable react-hooks/rules-of-hooks */
import React , { useState , useEffect }from 'react'

import './todoList.css'

function todoList () {
    const [todolist , setTodolist] = useState([])
    const [textValue , setTextValue] = useState('')

    function itmes () {
        setTodolist(JSON.parse(localStorage.getItem('items')) || []);
        document.querySelector('.todoInput').value = ''
    }

    function additem () {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        if (textValue === '') return;
        let itemText = {
            text: textValue,
            doen: false
        }
        items.push(itemText)
        localStorage.setItem('items' , JSON.stringify(items))
        itmes()
    }


    useEffect(()=>{
        itmes()
    },[])
    return (
        <>
        <div className="todobackground">
        <div className="todolist">
            <h2>工作事項</h2>
                <ul>
                    {todolist.map((event , key)=>{
                        return (
                        event.doen === false ?  <li className="localStrageItem"><input type="checkbox" data-index={key} onChange={()=>{

                                                    let items = JSON.parse(localStorage.getItem('items')) || [];
                                                    items[key].doen = !items[key].doen;
                                                    localStorage.setItem('items' , JSON.stringify(items));
                                                    itmes();
                                                }}/> {event.text}</li> 
                                                : 
                                                <li className="localStrageItem through"><input type="checkbox" checked onChange={()=>{
                            
                                                    let items = JSON.parse(localStorage.getItem('items')) || [];
                                                    items[key].doen = !items[key].doen;
                                                    localStorage.setItem('items' , JSON.stringify(items));
                                                    itmes()
                                                }}/> {event.text}</li>
                            )
                    })}
                </ul><br/>

                <input className="todoInput" type="text" onChange={(e)=>{setTextValue(e.target.value)}}/>
                <input className="addBtn" type="button" value="add" onClick={additem}/>
            </div>
        </div>
            
        </>
    )
}

export default todoList;