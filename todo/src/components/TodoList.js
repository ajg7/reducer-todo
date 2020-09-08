import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";


const TodoList = props => {
    const [ state, dispatch ] = useReducer(reducer, initialState);


    return(
        <div>
            {state.map(todoItem => {
                return(
                    <p>{todoItem.item}</p>
                )
            })}
        </div>
    )
}

export default TodoList;