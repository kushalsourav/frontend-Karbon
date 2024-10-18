import { createContext, useContext, useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";

type initialState = {
    data: Object | null,
    file: String | null,
    error: String
}

const initialDataState : initialState = {
    data: {},
    file: '',
    error: ''
}

const DataContext = createContext({});

const useData = () => useContext(DataContext);

const DataProvider = ({ children }: any) => {

    const [data, setData] = useReducer(DataReducer, initialDataState)

    return (
        <DataContext.Provider value={{ data, setData }} >
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider, useData }