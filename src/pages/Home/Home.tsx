import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext/DataContext';
import "./Home.css"

const Home = () => {
    const [file, setFile] = useState("");

    const navigate = useNavigate()

    const { setData }: any = useData()

    const formData = new FormData()
    formData.append('file', file);


    const postData = async (data: any, setData: any) => {
        const response = await axios.post('https://backend-karbon.onrender.com/upload', data);
        if (response.status === 200) {
            navigate('/rules')
        }
        else {

        }
        setData({ type: "FLAG", flag: response.data.flags })
        return response
    }


    return (
        <div className='home'>
     
                <form action="#">
                    <input type="file" className="form-input" onChange={(e) => {
                        const [file]: any = e.target.files
                        setFile(file)
                    }} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        postData(formData, setData)
                    }}>Submit</button>
                </form>
           
        </div>
    );
}

export default Home;
