import React, { useState } from "react"; 
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo,removeTodo } from "../actions/index";
const ToDo1 = () => {
    const [inputData,setInputData]=useState('');
    const list = useSelector((state)=>state.todoReducers.list);
    const dispatch=useDispatch();
    return(
        <>
            <div className="main_div">
                <div className="child_div">
                            
                    <figure>
                    <figcaption><h1>Add Your List Here ✌</h1> </figcaption>

                    </figure>
                    <div className="additems">
                        <input type="text" placeholder="✍ Add Item.." value={inputData} 
                        onChange={(event) =>setInputData(event.target.value)}/>
                       
                        <i className="fa fa-plus add_btn" title="additems" onClick={() =>dispatch(addTodo(inputData),setInputData(''))}></i>
                    </div>
                    <div className="showItems">{
                    list.map((elem )=>{
                     return(
                        <div className="eachItem" key={elem.id}>
                            <h3>{elem.data}</h3>
                            <div className="todo-btn">
                            <i className="fas fa-trash-alt add_btn" title="Deleteitems" onClick={()=>dispatch(deleteTodo(elem.id))}></i>
                        </div>
                        </div>
                        )

                    })
                     }   
                    </div>
                    <div className="showitem">
                    <button className="btn effect04" data-sm-link-text="Remove all" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>

                    </div>
                                   </div>
            </div>
        </>
    )

}
export default ToDo1;