import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
`

export const DivLogo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
        img{
            width: 75%;
            height: 60%;
    }
`

export const Divtextos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BarraAmarela = styled.div`
    background-color: #FFE600;
    height: 22vh;
    width: 0.5vw;
    margin: 0 1vw 0 0;
`

export const DivTitulo = styled.div`
    margin: 0 0 3vh 0;
    display: flex;
    width: 100%;
    font-family: 'Roboto';        
        h1{
            font-size: 5em;
            font-weight: 800;
}`

export const DivParagrafos = styled.div`
    margin-right: 14%;
    font-family: 'Roboto';
        p{
            text-align: justify;
            font-size: 1.5em;
            font-weight: 400;
        }
`