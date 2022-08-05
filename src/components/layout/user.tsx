import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../../components/header/index";
import Footer from "../footer/footer";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default UserLayout