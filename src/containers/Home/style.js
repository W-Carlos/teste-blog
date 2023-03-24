import styled from "styled-components";
import Background from "../../assets/post-header.jpg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #F3F5F7;
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
        url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    h1 {
       font-size: 3.5rem;
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

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.9rem;

    color: #1A3852;
`

export const P = styled.p`
    margin: 2rem 0;
    
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: #1A3852;
`

export const Button = styled.button`
    width: 14rem;
    height: 3.0rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 12px;

    border: none;
    border-radius: .5rem;
    background-color: #1A3852;
    color: #fff;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    } 

    &:active {
        opacity: 0.5;
    }
`