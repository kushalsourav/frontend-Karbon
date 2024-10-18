import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext/DataContext';
const Home = () => {
    const [file, setFile] = useState("");
    const navigate = useNavigate()
    const { setData} : any = useData()

    const formData = new FormData()
    formData.append('file', file);
    const postData = async (data: any) => {

        const response = await axios.post('http://127.0.0.1:5000/upload', data);
        console.log('Response:', response.data);
        if (response.status === 200) {
            navigate('/rules')
        }
        setData({type: "FLAG" , flag: response.data.flags})
        return response
    }
    return (
        <div>
            <div>
                <form action="#">
                    <input type="file" className="form-input" onChange={(e) => {
                        const [file] : any  = e.target.files
                     setFile(file)
                    }}/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        postData(formData)
                    }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
