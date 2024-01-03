import { Header } from '../../Components/header/header.jsx'
import { Footer } from '../../Components/footer/footer.jsx'
import Appartements from '../../Data/Appartements.json';
import { useParams, Navigate } from 'react-router-dom';


export const Appartement = () => {

    let { id } = useParams();

    const Appart = Appartements.find((item) => item.id == id)
    if (Appart == null) { return <Navigate to="/Error" /> }

    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}