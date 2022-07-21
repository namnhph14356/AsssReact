import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../../components/header/index";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default UserLayout