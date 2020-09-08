import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer.js";

export const TodoListForm = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todoItem, setTodoItem] = useState("");


    const handleChanges = event => {
        console.log(event.target.value);
        setTodoItem(event.target.value);
    }

    const submit = event => {
        event.preventDefault();
    }

    return (
        <div>
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
    )
}