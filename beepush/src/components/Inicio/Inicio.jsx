import img from '../images/img-home.png';
import {
    DivContainer,
    DivTextos,
    DivH1,
    DivH2,
    DivButton,
    DivImg
} from './Styled';



const Inicio = () => {
    return (
        <DivContainer>
            <DivTextos>
                <DivH1>
                    <h1>Faça o que <br/>precisa ser feito <br/>agora!</h1>
                </DivH1>
                <DivH2>
                    <h2>Somos uma agência especializada em Marketing Digital e existimos para ajudar você vender mais!</h2>
                </DivH2>
                <DivButton>
                    <button>Fale conosco!</button>
                </DivButton>
            </DivTextos>
            <DivImg>
                <img src={img} alt="" />
            </DivImg>
        </DivContainer>
    )
}

export default Inicio
