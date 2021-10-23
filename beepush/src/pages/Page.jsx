import Navbar from '../components/Navbar/Navbar'
import Inicio from '../components/Inicio/Inicio'
import Sobre from '../components/Sobre/Sobre'
import Servicos from '../components/Servicos/Servicos'
import Footer from '../components/Footer/Footer'

const Page = () => {
    return (
        <div>
            <Navbar />
            <Inicio />
            <Sobre />
            <Servicos />
            <Footer />
        </div>
    )
}

export default Page;
