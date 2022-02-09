import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav'
import Memories from './Memories'
import News from './News';
import SignIn from '../components/login';

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

function App() {
  return (
    <Container>
      <Router>
      <Nav />
      <SignIn />
      <Routes>
        {/* <Route exact path='/' element={<App/>}/> */}
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
    
export default App
