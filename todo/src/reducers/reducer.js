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
            const newState =
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            const testState = [...state, newState]
            console.log(testState);
            return [...state, newState];
        
        

        default:
            return state;
    }
}