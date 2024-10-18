import React from 'react';
import { useData } from '../../contexts/DataContext/DataContext';
import { Link } from 'react-router-dom';


const Rules = () => {
    const { data }: any = useData()
    const { BORROWING_TO_REVENUE_FLAG, ISCR_FLAG, TOTAL_REVENUE_5CR_FLAG } = data?.data

    return (
        <div className='home'>
            <div className="rules-list">
            <h4>Rules</h4>
            <ul>
                <li>BORROWING TO REVENUE FLAG: {BORROWING_TO_REVENUE_FLAG}</li>
                <li>ISCR FLAG: {ISCR_FLAG}</li>
                <li>TOTAL REVENUE 5CR FLAG: {TOTAL_REVENUE_5CR_FLAG}</li>
            </ul>
            <Link to={'/'}><button className='back-btn'>back</button></Link>
            </div>
     
        </div>
    );
}

export default Rules;
