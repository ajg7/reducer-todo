import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";


const TodoList = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ todoItem, setTodoItem ] = useState("");


    return(
        <div className="Todo-List">
            <button onClick={() => dispatch({type: "ADD_ITEM"})}>Add Item</button>
        </div>
    )
}

export default TodoList;