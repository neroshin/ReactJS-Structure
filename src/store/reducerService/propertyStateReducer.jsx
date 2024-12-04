

export const propertyInitialState = [
];

export const propertyStateReducer = (state, action) => {
    
    switch (action.type) {
        case "REMOVE_PROPERTY":
            return state.filter((item) => item.id !== action.payload);
        case "ADD_PROPERTY":
            return [...state , {
                first_name : action.payload.first_name ,
                id : action.payload.id
            } ];
        case "RENDER_DATA":

        return [...action.payload];
        default:
        return state;
    }
};
