import React from 'react';
import styled from 'styled-components';

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

function News() {
  return (
    <Container>
        <Head>
            <Title>Dorethy's SomeCrust news</Title>
        </Head>
    </Container>
  )
}
    
export default News
