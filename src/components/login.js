import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Container = styled.div`
background-image: linear-gradient(#40a9ff, #096dd9);
position: absolute;
top:0px
bottom:0px;
left:0px;
right:0px;
`;
const LoginCard = styled.div`
position: relative;
top: calc(50vh - 144px);
left: calc(50vh - 210px);
padding-top: 36px;
padding-bottom: 66px;
width: 420px;
background-color: white;
border-radius: 22px;
`;

const LoginButton = styled.button`
curser: pointer;
color: white;
padding: 12px;
border-radius: 8px;
display: inline-block;
`;

const Login = () => {
    return (
        <Container>
            <LoginCard />
            <LoginButton />

        </Container>
    )
}