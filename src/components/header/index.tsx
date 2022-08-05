import React from "react";
import styled from 'styled-components'
import LogoImage from '../../assets/images/logo.png'
import Listnav from "../Input";
import AutoComplete from "../Input/AutoComplete";
const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo src={LogoImage} />
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
    grid-template-columns: 2fr 4fr 5fr;
    gap:30px;
    align-items: center;
`