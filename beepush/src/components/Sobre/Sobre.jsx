/*import img from '../images/img-home.png';*/
import {
    DivContainer,
    DivCards,
    CardAmarelo,
    CardPreto,
    Divtextos,
    DivTitulo,
    BarraAmarela,
    DivParagrafos
} from './Styled';


const Sobre = () => {
    return (
        <DivContainer>
            <DivCards>
                <CardAmarelo>
                    amarelo
                </CardAmarelo>
                <CardPreto>
                    preto
                </CardPreto>
            </DivCards>
            <Divtextos>
                <DivTitulo>
                    <BarraAmarela>
                        barra amarela
                    </BarraAmarela>
                    <h1>Quem nós somos?</h1>
                </DivTitulo>
                <DivParagrafos>
                    <p>
                        Somos uma agência especializada em alguma coisa para ajudar sua empresa vender mais! 
                    </p>
                    <p>
                        Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. 
                    </p>
                    <p>
                        Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou um modelo
                    </p>
                </DivParagrafos>
            </Divtextos>
        </DivContainer>
    )
}

export default Sobre
