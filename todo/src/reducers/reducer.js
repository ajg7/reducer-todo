import React from "react";

export const initialState = [
    {
        item: "Learn about reducers'",
        completed: false,
        id: 1
    },
    {
        item: "Pick up Groceries",
        completed: false,
        id: 2
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_ITEM":
            if (action.payload === "") {
                return state;
            }
            const newState = {
                item: action.payload,
                completed: false,
                item: new Date()
            }
            return [ ...state, newState]
        case "COMPLETED":
            return state.map(item => {
                if(item.id === action.payload) {
                    return {...item, completed: !item.completed }
                } else {
                    return item
                }
            })
        case "REMOVE_COMPLETED":
            return state.filter(item => !item.completed);
        case "REMOVE_ALL": 
            return [];
        default:
            return state;
    }
}