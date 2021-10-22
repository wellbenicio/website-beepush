import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #0A0A0D;
    justify-content: center;
    align-items: center;

`
export const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: 'Roboto';
    margin-left: 5vw;
    margin-right: 5vw;

`
export const DivH1 = styled.div`
    height: 100%;
    width: 100%;
    color: white;
        h1{
            font-size: 4em;
            font-weight: 800;
        }
`

export const DivH2 = styled.div`
    color: white;
    margin-top: 3vh;
        h2{
            font-weight: 400;
        }
`
export const DivButton = styled.div`
    display: flex;
    height: 5vh;
    margin-top: 3vh;
        button{
            width: 40%;
            height: 100%;
            border-radius: 10px;
            border-color: yellow;
            background-color: #FFE600;
        :hover{ 
            opacity: 0.7;
        }}
`
export const DivImg = styled.div`
    height: 100%;
    width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
`


