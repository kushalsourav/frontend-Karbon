import React from 'react';
import { useData } from '../../contexts/DataContext/DataContext';

const Rules = () => {
    const {data } : any = useData()
 console.log(data.data)
const {BORROWING_TO_REVENUE_FLAG,ISCR_FLAG,TOTAL_REVENUE_5CR_FLAG} = data?.data

    return (
        <div>
            Rules
           <ul>
            <li>BORROWING_TO_REVENUE_FLAG: {BORROWING_TO_REVENUE_FLAG}</li>
            <li>ISCR_FLAG: {ISCR_FLAG}</li>
            <li>TOTAL_REVENUE_5CR_FLAG: {TOTAL_REVENUE_5CR_FLAG}</li>
           </ul>
        </div>
    );
}

export default Rules;
