
const DataReducer = (state : any, action : any) => {
    switch (action.type) {
        case "FLAG":
            return {...state, data: action.flag } 
        case "FILE": 
            return {...state, file: action.file}
        case "ERROR":
            return {...state, error: action.error}
        default :
            return state;
    }
 
}

export default DataReducer;
