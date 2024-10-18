import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Rules from "../../pages/Rules/Rules";

const Router = () => {


    return(
        <>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/rules" element={<Rules />} />
        </Routes>
        </>
    )

};

export default Router;