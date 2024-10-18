import React from 'react';

import { DataProvider } from './DataContext/DataContext';

const ContextProvider = ({children} : any) => {
    return (
       
            <DataProvider>
              {children}
            </DataProvider>
    
    );
}

export default ContextProvider;
