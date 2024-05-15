const initState =
    {
        text : ""
    }
export const farGalaxyReducer = (state = initState, action) => {
    switch(action.type){
        case "PUT_TEXT":
            return {...state, text: action.payload || state.text}
        default: return state
    }
}