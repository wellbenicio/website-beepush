import logo from '../images/logo-menu.png';
import {
    DivContainer,
    DivImg,
    DivMenu,
    DivButton, 
    DivSombra
} from './Styled';

export const Navbar = () => {
    return (
        <DivContainer>
            <DivImg>
                <img src={logo} alt="" />
            </DivImg>
            <DivMenu>
                <p>Início</p>
                <p>Sobre</p>
                <p>Serviços</p>
                <p>Contato</p>
            </DivMenu>
            <DivButton>
                <button>Orçamento</button>
            </DivButton>   
        </DivContainer>
    )
}

export default Navbar;
