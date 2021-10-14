import React, {useState} from 'react'
import styled from 'styled-components';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {selectCar} from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCar)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                {cars && cars.map((car,idx) => (
                    <a href="#" key={idx}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BergerNav show={burgerStatus}>
                <CloseWrapper >
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,idx) => (
                   <li key={idx}> <a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </BergerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
        a {
            font-weight: 600;
            text-transform: uppercase;
            padding: 0 10px;
            flex-wrap: nowrap;
        }
    @media(max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
        a {
            font-weight: 600;
            text-transform: uppercase;
            flex-wrap: nowrap;
            margin-right: 10px;
        }
`
const CustomMenu = styled(MenuOpenIcon)`
    cursor: pointer;

`
const BergerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fffff4;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .4);
        a {
            font-weight: 600;
        }
    }
`
const CustomClose = styled(HighlightOffIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`