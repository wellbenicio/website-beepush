import styled from 'styled-components'

export const DivContainer = styled.div `
    display: flex;
    background-color: #0A0A0D;
    color: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 12vh;
`

export const DivImg = styled.div `
    width: 11%;
    height: 120%;
    display: flex;
    align-items: center;
    margin-left: 4%;
        img{
            width: 100%;
            height: 100%;
            }
`

export const DivMenu = styled.div `
    display: flex;
    width: 25%;
    margin-left: 40%;
            p{
                width: 100%;
                justify-content: space-between;
                    :hover{ 
                        color: #FFE600;
                        }}
`

export const DivButton = styled.div `
    display: flex;
    width: 10%;
    height: 30%;
    margin-right: 7%;
        button{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            border-color: yellow;
            background-color: #FFE600;
        :hover{ 
            opacity: 0.7;
        }}
`

