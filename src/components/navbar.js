import React from 'react'
import { Link } from 'gatsby'

export default function Navbar(){
    return(
        <nav>
            <h1>Cthulhu Mythos Explorer</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/whatIsCthulhuMythos'>Mythos</Link>
                <Link to='/whoIsHPLovecraft'>H. P. Lovecraft</Link>
                <Link to='/bibliography'>Stories</Link>
                <Link to='/entities'>Entities</Link>
            </div>
        </nav>
    )
}