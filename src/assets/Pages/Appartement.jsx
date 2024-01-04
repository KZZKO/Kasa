import { Header } from '../../Components/header/header.jsx'
import { Slider } from '../../Components/Carrousel/Carrousel.jsx';
import { Footer } from '../../Components/footer/footer.jsx'
import { useParams, Navigate } from 'react-router-dom';
import Appartements from '../../Data/Appartements.json';


export const Appartement = () => {

    let { id } = useParams();

    const Appart = Appartements.find((item) => item.id == id)
    if (Appart == null) { return <Navigate to="/Error" /> }

    return (
        <div>
            <Header />
            <Slider data={Appart.pictures} />
            <Footer />
        </div>
    )
}