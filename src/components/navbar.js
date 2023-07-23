import React from 'react'
import { Link } from 'gatsby'
import { NavbarContainer,
         LeftContainer,
         RightContainer,
         MyLogo
    } from '../styles/navbar.style'
import LogoImg from '../../static/banner.png'

export default function Navbar() {
    return(
        <NavbarContainer>
            <LeftContainer> 
                <MyLogo src={LogoImg}></MyLogo>
            </LeftContainer>
            <RightContainer>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/whatIsCthulhuMythos'>Mythos</Link>
                    <Link to='/whoIsHPLovecraft'>H. P. Lovecraft</Link>
                    <Link to='/bibliography'>Stories</Link>
                    <Link to='/entities'>Entities</Link>
                </div> 
            </RightContainer>
        </NavbarContainer>
    )
}