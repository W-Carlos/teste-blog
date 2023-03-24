import styled from "styled-components";
import BacgroundComments from '../../assets/comments.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #F3F5F7;

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 4.8rem;
        color: #1A3852;
    }
`

export const Header = styled.header`
    width: 100vw;
    padding: 10rem 0;
    margin-bottom: 5rem;

    text-align: center;
    color: #fff;

    background: linear-gradient(
        to right, 
        rgb(0 0 0 / 0.7), 
        rgb(0 0 0 / 0.7)
        ), 
        url(${BacgroundComments});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h2 {
       font-size: 3.5rem;
    }
`

export const Content = styled.div`
    max-width: 70.1rem;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: #1A3852;
    }

    p {
        margin-top: 1.5rem;
        margin-bottom: 2.3rem;

        font-style: normal;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 1.8rem;

        color: #1A3852;
    }
`

export const ListItem = styled.li`
    max-width: 70.1rem;
    padding: 1.4rem 3.8rem;
    margin-bottom: 3.5rem;


    list-style: none;
    background: #FFFFFF;
    border-radius: 15px;

    filter: drop-shadow(4px 4px 9px rgba(0, 0, 0, 0.25));
`

export const Name = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.8rem;

    color: #1A3852;
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.8rem;

    color: #1A3852;

    margin-block: 1rem;
`

export const Email = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.8rem;

    color: #1A3852;
`