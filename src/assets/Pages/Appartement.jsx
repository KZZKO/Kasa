import { Header } from '../../Components/header/header.jsx'
import { Slider } from '../../Components/Carrousel/Carrousel.jsx';
import { Title } from '../../Components/Title/title.jsx';
import { Location } from '../../Components/Location/location.jsx';
import { Tags } from '../../Components/Tag/tag.jsx';
import { Hosts } from '../../Components/Host/host.jsx';
import { Rate } from '../../Components/Rating/rating.jsx';
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
            <Title data={Appart.title} />
            <Location data={Appart.location} />
            <Tags data={Appart.tags} />
            <Hosts name={Appart.host.name} picture={Appart.host.picture} />
            <Rate />
            <Footer />
        </div>
    )
}