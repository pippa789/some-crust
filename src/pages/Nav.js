import React from 'react';
import styled from 'styled-components'
import Home from './Home'
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  }
    return (
     <nav>
       <h3> Dorethy's SomeCrust </h3>
       <ul>
         <Link style={navStyle} to='/Home'>
         <li>Home</li>
         </Link>
         <Link style={navStyle} to='/News'>
         <li>News</li>
         </Link>
         <Link style={navStyle} to='/Memories'>
         <li>Memeories</li>
         </Link>
       </ul>
     </nav>
    )
  }
    
export default Nav

  