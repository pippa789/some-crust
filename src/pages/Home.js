import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Memories from './Memories'
import News from './News';

const Container = styled.div`
width: 100%;
height: 60%;
background-color: red;
`;

const Head = styled.div`
width: 100%
height: 20%
`;
const Title = styled.div`
color: white;
font-size: 60px;
`;

function Home() {
  return (
    <Container>
      <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Memories' element={<Memories/>} />
        <Route exact path='/News' element={<News/>} />
      </Routes>
      </Router>
      
        <Head>
            <Title>Dorethy's SomeCrust</Title>
        </Head>
       
    </Container>
  )
}
    
export default Home
