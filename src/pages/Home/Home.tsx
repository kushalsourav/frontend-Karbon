import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts/DataContext/DataContext';
import "./Home.css"

const Home = () => {
    const { data, setData }: any = useData()

    const navigate = useNavigate()

    const handleFile = (e: any, setData: any) => {
        const [file]: any = e.target.files
        setData({ type: "FILE", file: file })
    }

    const handleSubmit = (e: any, postData: Function, setData: any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', data.file);
        postData(formData, setData)
    }

    const postData = async (data: any, setData: any) => {
        try {
            const response = await axios.post('https://backend-karbon.onrender.com/upload', data);
            setData({ type: "FLAG", flag: response.data.flags })
            if (response.status === 200) {
                navigate('/rules')
            }
        } catch (error : any) {
           error.response.status === 400 &&
                setData({type:"ERROR", error: "invalid file format"})
            
        }
    
      
    }


    return (
        <div className='home'>
            <h1>Karbon Card</h1>
            <form action="#">
                <input type="file" className="form-input" onChange={(e) => handleFile(e, setData)} />
                <button onClick={(e) => handleSubmit(e, postData, setData)}>Submit</button>
                <span>{data.error}</span>
            </form>

        </div>
    );
}

export default Home;
