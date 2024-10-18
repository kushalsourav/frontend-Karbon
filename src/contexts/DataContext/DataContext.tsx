import { createContext, useContext, useReducer } from "react";
import DataReducer from "../../reducers/DataReducer/DataReducer";

const initialDataState = {
    data: {}
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