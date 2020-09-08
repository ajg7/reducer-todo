import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer.js";

export const TodoListForm = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ todoItem, setTodoItem ] = useState("");

    const handleChanges = event => {
        event.preventDefault();
        setTodoItem(event.target.value);
    }

    return (
        <>
            <form>
                <label> Submit Item: 
                    <input />
                </label>
            </form>
        </>
    )
}