import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";


const TodoList = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ todoItem, setTodoItem ] = useState([]);

    console.log(state)
    const handleChanges = event => {
        console.log(event.target.value);
        setTodoItem(event.target.value);
    }

    const submit = event => {
        event.preventDefault();
        
    }

    const checkboxHandler = clickedTodoItem => {
        setTodoItem([])
        console.log(clickedTodoItem)
    }


    return(
        <>
            <div className="todo-list-form">
                <form onSubmit={submit}>
                    <label>
                        <input 
                        type="text"
                        name="input"
                        className="todo-item-input"
                        onChange={handleChanges}
                        />
                    </label>
                    <button onClick={() => dispatch({type: "ADD_ITEM", payload: todoItem})}>Add Item</button>
                </form>
            </div>
            <div className="todo-list">
                {state.map(todoItem => {
                    return(
                        <div onClick={() => dispatch({type: "COMPLETED", payload: todoItem})}>
                            <p>{todoItem.item}</p>
                        </div>
                    )
                })}
            </div>
            <div className="clear-button">
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
            </div>
        </>
    )
}

export default TodoList;