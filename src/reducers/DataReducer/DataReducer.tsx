const DataReducer = (state : any, action : any) => {
    switch (action.type) {
        case "FLAG":
            return {...state, data: action.flag} 
        default :
            return state;
    }
 
}

export default DataReducer;
