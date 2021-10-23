import ImgSobre from '../images/logo-sobre.png';
import {
    DivContainer,
    DivLogo,
    Divtextos,
    DivTitulo,
    BarraAmarela,
    DivParagrafos
} from './Styled';


const Sobre = () => {
    return (
        <DivContainer>
            <DivLogo>
                <img src={ImgSobre} alt="" />
            </DivLogo>
            <Divtextos>
                <DivTitulo>
                    <BarraAmarela/>
                    <h1>Quem nós somos?</h1>
                </DivTitulo>
                <DivParagrafos>
                    <p>
                        Somos uma agência especializada em alguma coisa para ajudar sua empresa vender mais! 
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. 
                    </p>
                    <br />
                    <p>
                        Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou um modelo
                    </p>
                </DivParagrafos>
            </Divtextos>
        </DivContainer>
    )
}
export default Sobre;