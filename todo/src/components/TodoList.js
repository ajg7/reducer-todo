import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";


const TodoList = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ todoItem, setTodoItem ] = useState("");

    return(
        <div>
        
        </div>
    )
}

export default TodoList;