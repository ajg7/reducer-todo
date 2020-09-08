import React from "react";

export const initialState = [
    {
        item: "Learn about reducers'",
        completed: false,
        id: new Date()
    },
    {
        item: "Pick up Groceries",
        completed: false,
        id: new Date()
    }
]

export const reducer = (state, action) => {
    
    switch(action.type) {
        case "ADD_ITEM":
            let newState =
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            const list = [...state, newState]
            console.log(list);
            return [...state, newState];
        case "COMPLETED":
            return state.map(item => {
                if(item.id === action.payload.id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        case "CLEAR_COMPLETED":
            console.log("Hello")
            return state.filter(item => {
                if(item.completed === false) {
                    return true;
                }
                return false;
            })
        default:
            return state;
    }
}