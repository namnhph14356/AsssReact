import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import LogoImage from '../../assets/images/logo.png'
import Listnav from "../Input";
import AutoComplete from "../Input/AutoComplete";
const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Link to='/' ><Logo src={LogoImage} /></Link>
                <AutoComplete/>
                <Listnav />
            </Container>
        </Wrapper>
    )
}

export default Header


const Logo = styled.img`
    width: 65px;
    height: auto;
    margin-right: 40px;
`

const Wrapper = styled.div`
    background-color: #D70018;
`

const Container = styled.div`
    width: 1200px;
    margin: auto;
    display:grid ;
    grid-template-columns: 1fr 2fr 5fr;
    gap:30px;
    align-items: center;
`